import{_ as e,r as o,o as t,c as p,a as s,b as n,d as c,e as l}from"./app-20538318.js";const i={},u=l(`<h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h2><p><code>Symbol</code>是在<code>ES6</code>后推出的全新的基础数据类型，凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会发生产生冲突。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> s
<span class="token comment">// &quot;symbol&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 没有参数的情况</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

s1 <span class="token operator">===</span> s2 <span class="token comment">// false</span>

<span class="token comment">// 有参数的情况</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

s1 <span class="token operator">===</span> s2 <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Symbol</code>可以显示的转化位字符串，不能和其他的基础类型运算</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;My symbol&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">String</span><span class="token punctuation">(</span>sym<span class="token punctuation">)</span> <span class="token comment">// &#39;Symbol(My symbol)&#39;</span>
sym<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Symbol(My symbol)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-symbol-prototype-description" tabindex="-1"><a class="header-anchor" href="#_2-symbol-prototype-description" aria-hidden="true">#</a> 2. Symbol.prototype.description</h2><p>使用<code>description</code>可以返回描述</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

sym<span class="token punctuation">.</span>description <span class="token comment">// &quot;foo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-作为属性名的-symbol" tabindex="-1"><a class="header-anchor" href="#_3-作为属性名的-symbol" aria-hidden="true">#</a> 3. 作为属性名的 Symbol</h2><blockquote><p>由于每一个 Symbol 值都是不相等的，这意味着只要 Symbol 值作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 第一种写法</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 第二种写法</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 第三种写法</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> mySymbol<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 以上写法都得到同样结果</span>
a<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span> <span class="token comment">// &quot;Hello!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，在定义<code>Symbol</code>为对象的属性时，不可使用点运算符，因为点运算符后面总是字符串，所以不会读取<code>mySymbol</code>作为标识名所指代的那个值，导致<code>a</code>的属性名实际上是一个字符串，而不是一个 Symbol 值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>mySymbol <span class="token operator">=</span> <span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span> <span class="token comment">// undefined</span>
a<span class="token punctuation">[</span><span class="token string">&#39;mySymbol&#39;</span><span class="token punctuation">]</span> <span class="token comment">// &quot;Hello!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-属性名的遍历" tabindex="-1"><a class="header-anchor" href="#_4-属性名的遍历" aria-hidden="true">#</a> 4. 属性名的遍历</h2><p>有一个<code>Object.getOwnPropertySymbols()</code>方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> objectSymbols <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

objectSymbols
<span class="token comment">// [Symbol(a), Symbol(b)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-symbol-for-symbol-keyfor" tabindex="-1"><a class="header-anchor" href="#_5-symbol-for-symbol-keyfor" aria-hidden="true">#</a> 5. Symbol.for()，Symbol.keyFor()</h2><p><code>Symbol.for()</code>接受一个字符串参数，在全局搜索以该字符串为名的<code>Symbol</code>值，如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>

<span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Symbol.keyFor()</code>方法返回一个已登记的 Symbol 类型值的<code>key</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token comment">// &quot;foo&quot;</span>

<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-内置symbol" tabindex="-1"><a class="header-anchor" href="#_6-内置symbol" aria-hidden="true">#</a> 6. 内置Symbol</h2>`,25),r={href:"https://wangdoc.com/es6/symbol##%E5%86%85%E7%BD%AE%E7%9A%84-symbol-%E5%80%BC",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=o("ExternalLinkIcon");return t(),p("div",null,[u,s("p",null,[n("[内置Symbol值]("),s("a",r,[n("Symbol - ES6 教程 - 网道 (wangdoc.com)"),c(a)]),n(")")])])}const b=e(i,[["render",d],["__file","ES6-05 Symbol.html.vue"]]);export{b as default};