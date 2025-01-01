import{_ as n,o as s,c as a,e as t}from"./app-20538318.js";const p={},e=t(`<p>用户服务主要开放了会员，乘车人相关的接口，主要涉及到了责任链，数据脱敏，布隆过滤器（优化）。</p><h2 id="会员接口" tabindex="-1"><a class="header-anchor" href="#会员接口" aria-hidden="true">#</a> 会员接口</h2><h3 id="判断用户名是否存在" tabindex="-1"><a class="header-anchor" href="#判断用户名是否存在" aria-hidden="true">#</a> 判断用户名是否存在</h3><p>采用布隆过滤器以及redis中的set数据结构（用于解决无法删除的问题），快速的判断用户名是否存在。</p><p>其中为了防止该set成为大key，热key，对其进行分片处理。</p><p>整体流程如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">hasUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> hasUsername <span class="token operator">=</span> bl<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 布隆过滤器存在哈希冲突的问题，如果判断存在是不一定存在的，需要调整碰撞率</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>hasUsername<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 采用set来存储已经注销的用户名，解决布隆过滤器无法删除的问题</span>
            <span class="token keyword">return</span> <span class="token class-name">StringRedisTemplate</span><span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isMember</span><span class="token punctuation">(</span><span class="token constant">USER_REGISTER_REUSE_SHARDING</span> <span class="token operator">+</span> <span class="token function">hashShardingIdx</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// hashShardingIdx，就是对username的hashCode进行取模</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// true 代表用户名可用，也就是不存在</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册接口" tabindex="-1"><a class="header-anchor" href="#注册接口" aria-hidden="true">#</a> 注册接口</h3><p>注册接口中遇到的重点就是缓存穿透，在注册流程中，第一步就需要判断用户名是否存在，对于大量用户的并发注册，很容易就对数据库造成过大压力。所以采用布隆过滤器+分布式锁减轻数据库压力，整体流程如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">UserRegisterRespDTO</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">UserRegisterReqDTO</span> requestParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 责任链：用户注册参数必填检验---&gt;用户名是否存在检验---&gt;用户是否被拉入黑名单检验</span>
        abstractChainContext<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token class-name">UserChainMarkEnum</span><span class="token punctuation">.</span><span class="token constant">USER_REGISTER_FILTER</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> requestParam<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RLock</span> lock <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getLock</span><span class="token punctuation">(</span><span class="token constant">LOCK_USER_REGISTER</span> <span class="token operator">+</span> requestParam<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> tryLock <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tryLock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token constant">HAS_USERNAME_NOTNULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 确保只有一个线程能够操作数据库</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 新增user表</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            <span class="token comment">// 新增user_phone表</span>
			<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            <span class="token comment">// 新增user_mail表</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            <span class="token class-name">String</span> username <span class="token operator">=</span> requestParam<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 删除用户名可重复利用表中的记录</span>
            userReuseMapper<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Wrappers</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserReuseDO</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 删除用户名可重复利用分片缓存中的记录</span>
            <span class="token class-name">StringRedisTemplate</span><span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token constant">USER_REGISTER_REUSE_SHARDING</span> <span class="token operator">+</span> <span class="token function">hashShardingIdx</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 将用户名加入缓存穿透布隆过滤器</span>
            userRegisterCachePenetrationBloomFilter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">BeanUtil</span><span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span>requestParam<span class="token punctuation">,</span> <span class="token class-name">UserRegisterRespDTO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录和注销接口" tabindex="-1"><a class="header-anchor" href="#登录和注销接口" aria-hidden="true">#</a> 登录和注销接口</h3><p>登录和常规的接口相同，采用了redis共享session。</p><p>注销接口也是一样，不过有一个注意的业务点是，如果注销的用户和当前登录的用户不相同，需要上传风控中心。</p><h2 id="乘车人接口" tabindex="-1"><a class="header-anchor" href="#乘车人接口" aria-hidden="true">#</a> 乘车人接口</h2><ul><li><p>乘车人接口的重点主要体现在数据脱敏处理上，在向前端返回时，需要使用Jackson的<code>JsonSerializer</code>自定义序列化处理，采用hutool对身份证号和手机号之类的信息进行加密处理。对于后端的RPC调用，我们不需要进行加密处理，所以采用了一个新的实体类进行复制。</p></li><li><p>对于乘车人的增删改使用了幂等组件库中的SpEL来保证幂等。</p></li><li><p>采用先操作数据库，后删缓存的做法保证数据的一致性</p></li></ul>`,15),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","用户服务.html.vue"]]);export{k as default};
