import{_ as n,W as s,X as a,$ as e}from"./framework-6ad85d54.js";const p={},t=e(`<h2 id="第二章" tabindex="-1"><a class="header-anchor" href="#第二章" aria-hidden="true">#</a> 第二章</h2><p>在switch的汇编表示中，如果case的范围中同时存在负数和正数时，编译器是否还会将范围映射到从零开始的正整数。</p><h2 id="第三章" tabindex="-1"><a class="header-anchor" href="#第三章" aria-hidden="true">#</a> 第三章</h2><p>3.10.3节中echo函数分配了长度是8的char数组，但是汇编代码为什么在栈上分配了24个字节空间，它是由编译器规划的吗？实验发现在超过8个数字后，依然会提示栈被损坏，按道理来说最后会多加一个 <code>\\0</code>，那么8个字符应该是会报错的，但是并没有。同时这多出来的16个字节的作用是什么？并且如果我分配长度改为16，汇编代码就会分配40个字节，这是为什么呢？以下是测试代码和部分汇编：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">mgets</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>s<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> c<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>dest <span class="token operator">=</span> s<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">&#39;\\n&#39;</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span>
        <span class="token operator">*</span>dest<span class="token operator">++</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token constant">EOF</span> <span class="token operator">&amp;&amp;</span> dest <span class="token operator">==</span> s<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>dest<span class="token operator">++</span> <span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">echo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> buffer<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">mgets</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">puts</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">echo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>echo:
	pushq	%rbp
	pushq	%rbx
	subq	$24, %rsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[t];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","csapp.html.vue"]]);export{r as default};
