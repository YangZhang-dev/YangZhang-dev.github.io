import{_ as r,r as n,o,c,a as e,b as a,d as i,w as p,e as s}from"./app-20538318.js";const d={},u=s('<p>本文主要介绍redis在业务中的使用场景，课程来自于黑马程序员。</p><h2 id="共享session" tabindex="-1"><a class="header-anchor" href="#共享session" aria-hidden="true">#</a> 共享session</h2><p>在单机版后端服务中，常常使用session来保持客户端的状态，但在分布式的场景下，不同机器之间的session是不互通的，所以需要一个第三方中间件来共享session，这里就用到了redis。可以采用string的数据结构，key做用户的<strong>唯一标识</strong>，value存储用户信息的<strong>序列化json</strong>串。</p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/3b091b9a9acf4e477ec1ddcc8140aa0e.png" alt="1653319474181" style="zoom:67%;"><h2 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h2><p>使用内存型数据库做基于磁盘的数据库的缓存，可以大大减少磁盘的I/O操作，加快响应时间，提高并发量。</p><p>实际上从前端一直到后端，整个链路上都存在着各种各样的缓存：</p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/6af75f78aa3b11f98f3251b56ff426b2.png" alt="image-20220523212915666" style="zoom:67%;"><p><strong>缓存的基本思路</strong>：查询数据库之前先查询缓存，如果缓存数据存在，则直接从缓存中返回，如果缓存数据不存在，再查询数据库，然后将数据存入redis。</p><h3 id="缓存的更新策略" tabindex="-1"><a class="header-anchor" href="#缓存的更新策略" aria-hidden="true">#</a> 缓存的更新策略</h3><ul><li>内存淘汰：当redis的内存占用达到上限后，会根据设置的淘汰策略来删除一些数据（lru，lfu）。</li><li>超时剔除：当数据达到TTL之后，将会被自动删除。</li><li>主动更新：人工的去删除缓存，主要是用来保证数据的一致性。</li></ul><h3 id="如何保证数据的一致性" tabindex="-1"><a class="header-anchor" href="#如何保证数据的一致性" aria-hidden="true">#</a> 如何保证数据的一致性</h3><ul><li>Cache Aside Pattern 人工编码方式：缓存调用者在更新完数据库后再去更新缓存，也称之为双写方案</li><li>Read/Write Through Pattern : 由系统本身完成，数据库与缓存的问题交由系统本身去处理（抽象出一个缓存组件）</li><li>Write Behind Caching Pattern ：调用者只操作缓存，其他线程去异步处理数据库，实现最终一致（canal）</li></ul><p>第二种方法实际上是对第一种方法的抽象，所以我们考虑采用硬编码的形式，人工的保证数据的一致性。</p><p>那么现在就有一些问题：</p><ul><li><p>删除缓存还是更新缓存？</p><ul><li>更新缓存：每次更新数据库都更新缓存，无效写操作较多。</li><li>删除缓存：更新数据库时让缓存失效，查询时再更新缓存。</li></ul></li><li><p>如何保证缓存与数据库的操作的同时成功或失败？</p><ul><li>单体系统，将缓存与数据库操作放在一个事务。</li><li>分布式系统，利用TCC等分布式事务方案。</li></ul></li><li><p>先操作缓存还是先操作数据库？</p><p>应该是要先操作数据库，如果先操作缓存，可能会出现数据的不一致性。</p></li></ul><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/3a3ece8eeb88e6a13efc949f8fea5690.png" alt="1653323595206" style="zoom:67%;"><p>实际上第二种也是存在并发问题的，线程1先操作数据库，还没来得及更新缓存，线程2就返回了脏缓存数据。这里引入了<strong>延迟双删</strong>的策略。</p><h3 id="延迟双删" tabindex="-1"><a class="header-anchor" href="#延迟双删" aria-hidden="true">#</a> 延迟双删</h3>',19),h={href:"https://zhuanlan.zhihu.com/p/467410359",target:"_blank",rel:"noopener noreferrer"},m=s('<p>延迟双删即采用先删除缓存，再更新数据库的策略，但是最后会加一步延时删除缓存的步骤保证数据的最终一致性。</p><p>对于单机redis和mysql，实际上最后的延迟是没什么必要的，但是如果做了读写分离，主从同步。那么就需要这个延时时间来保证主从一致性，当然这个时间是估计出来的。</p><h3 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h3><p>缓存穿透是指客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。</p><p>常见的解决方案有两种：</p><ul><li>缓存空对象 <ul><li>优点：实现简单，维护方便</li><li>缺点： <ul><li>额外的内存消耗</li><li>可能造成短期的不一致</li></ul></li></ul></li><li>布隆过滤 <ul><li>优点：内存占用较少，没有多余key</li><li>缺点： <ul><li>实现复杂</li><li>存在误判可能（Hash冲突）</li></ul></li></ul></li></ul><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/ad79c066e3792dc6f3a56d6ce66ec8a6.png" alt="1653326156516" style="zoom:67%;"><h3 id="缓存击穿" tabindex="-1"><a class="header-anchor" href="#缓存击穿" aria-hidden="true">#</a> 缓存击穿</h3><p>缓存击穿问题也叫热点Key问题，就是一个被高并发访问并且缓存重建业务较复杂的key突然失效了，或者热key在服务的最开始还没有来的及构建，无数的请求访问会在瞬间给数据库带来巨大的冲击。</p><p>解决方案：</p><ul><li><p>分布式锁+double check：大大的降低了数据库的压力，但是会降低系统的并发度</p></li><li><p>提前预热：针对热点数据提前预热，将其存入缓存中并设置合理的过期时间比如秒杀场景下的数据在秒杀结束之前不过期。</p></li><li><p>逻辑过期：即将过期时间value中，由程序员手动控制，优点是异步的构建缓存，加大并发度，缺点在于在构建完缓存之前，返回的都是脏数据。具体操作如下：</p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/bd46d4d176acb3a2b28764722829ff7f.png" alt="1653328663897" style="zoom:67%;"></li></ul><h3 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h3><p>缓存雪崩是指在同一时段大量的缓存key同时失效或者Redis服务宕机，导致大量请求到达数据库，带来巨大压力。</p><p>解决方案：</p><ul><li>给不同的Key的TTL添加随机值</li><li>利用Redis集群提高服务的可用性</li><li>给缓存业务添加降级限流策略</li><li>给业务添加多级缓存</li></ul><h2 id="秒杀场景" tabindex="-1"><a class="header-anchor" href="#秒杀场景" aria-hidden="true">#</a> 秒杀场景</h2>',16),g=s(`<h2 id="点赞" tabindex="-1"><a class="header-anchor" href="#点赞" aria-hidden="true">#</a> 点赞</h2><p>使用zset存储文章的点赞用户id，score存储点赞时间戳，可以按照排名获取前几名点赞的用户。</p><h2 id="关注" tabindex="-1"><a class="header-anchor" href="#关注" aria-hidden="true">#</a> 关注</h2><p>使用set维护关注列表，使用交集求共同关注。</p><h2 id="feedstream" tabindex="-1"><a class="header-anchor" href="#feedstream" aria-hidden="true">#</a> FeedStream</h2><ul><li>TimeLine：按照时间排序，不做筛选，常用于好友或关注。</li><li>智能推荐：发现页面</li></ul><h3 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> TimeLine</h3><ul><li><strong>拉模式</strong>（读扩散）：消息保存在发送方，消费方上线后主动去拉取。适合消费者少的场景，空间占用小。</li><li><strong>推模式</strong>（写扩散）：当消息出现时，主动的发送到消费方。适合消费者多的场景，拉去速度快。</li><li><strong>推拉结合模式</strong>：也叫做读写混合，将发送方和消费者标记 <ul><li>如果订阅的消费者较多，那么采用拉模式，但是对于其标记的活跃粉丝，采用推模式，主动将消息推送给活跃粉丝。</li><li>如果订阅的消费者较少，那么采用拉模式。</li></ul></li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>在实现FeedStream时，不能使用传统的分页模式，而要使用滚动分页的模式，记录上一次的最后时间戳，同时要记录偏移量。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ZSetOperations<span class="token punctuation">.</span>TypedTuple</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> typedTuples <span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForZSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">reverseRangeByScoreWithScores</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> max<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// key min max offset count</span>
<span class="token comment">// zset key, 最小值，最大值，偏移量，个数</span>
<span class="token comment">// 偏移量：上次的相同的最小值的个数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="签到" tabindex="-1"><a class="header-anchor" href="#签到" aria-hidden="true">#</a> 签到</h2><p>使用BitMap，签到记为1。key使用<code>year+month</code>，因为BitMap只有<code>32</code>位。</p><ul><li>当月签到天数</li><li>连续签到：使用位运算逆序查找第一个不为1的位置。</li></ul><h2 id="uv统计" tabindex="-1"><a class="header-anchor" href="#uv统计" aria-hidden="true">#</a> UV统计</h2><p>使用HyperLogLog：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stringRedisTemplate.opsForHyperLogLog().add(&quot;key&quot;,user);
Long size = stringRedisTemplate.opsForHyperLogLog().size();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>有一定的误差，但是占用内存空间很小。</p>`,18);function b(f,k){const l=n("ExternalLinkIcon"),t=n("RouterLink");return o(),c("div",null,[u,e("p",null,[e("a",h,[a("延时双删（redis-mysql）数据一致性思考"),i(l)])]),m,e("p",null,[a("参考： "),i(t,{to:"/code/back/redis/....%5Csundry%5C%E7%A7%92%E6%9D%80%E5%9C%BA%E6%99%AF.html"},{default:p(()=>[a("秒杀场景")]),_:1})]),g])}const v=r(d,[["render",b],["__file","redis使用场景.html.vue"]]);export{v as default};
