import{_ as e,r as l,o as r,c as i,a as s,b as a,d as n,e as o}from"./app-20538318.js";const m={},p={href:"https://www.cnblogs.com/brianleelxt/p/13449540.html#autoid-3-2-2",target:"_blank",rel:"noopener noreferrer"},c={href:"https://zhuanlan.zhihu.com/p/44254954?utm_psn=1708479170777145345",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zhuanlan.zhihu.com/p/47870235?utm_psn=1708479541482401792",target:"_blank",rel:"noopener noreferrer"},d=s("p",null,"Spanner是谷歌公司的分布式数据库，通过2PC实现的可串行化以及外部一致性结合，达到了类似于线性一致性的效果。同时对只读事务做了优化，在保证并发正确性的前提下，达到了非阻塞、无锁的读取。",-1),g=s("h2",{id:"组织结构",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#组织结构","aria-hidden":"true"},"#"),a(" 组织结构")],-1),u={href:"https://www.cnblogs.com/brianleelxt/p/13449540.html#autoid-1-0-0",target:"_blank",rel:"noopener noreferrer"},x=s("h2",{id:"事务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#事务","aria-hidden":"true"},"#"),a(" 事务")],-1),_=s("p",null,"对于读写事务，采用2PC+Paxos保证可串行化。Paxos提升了TM的可用性，优化了2PC的缺点，同时为分片提供了副本，为读取增加了吞吐，同时也提升了可用性。",-1),T=s("p",null,[a("对于读事务，Spanner只会从"),s("strong",null,"最近的分片"),a("读取，并且无锁，无RPC，大大的提升了性能。")],-1),w=s("h3",{id:"正确性",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#正确性","aria-hidden":"true"},"#"),a(" 正确性")],-1),b=s("p",null,[a("外部一致性："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"T"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"T_{i}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a(" 代表事务 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T")]),s("annotation",{encoding:"application/x-tex"},"T")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T")])])]),a(" 的提交时间，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a(" 按照时间排序那么如果 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"T"),s("mn",null,"2")]),s("mo",null,">"),s("msub",null,[s("mi",null,"T"),s("mn",null,"1")])]),s("annotation",{encoding:"application/x-tex"},"T_{2} > T_{1}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a(" ，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"T2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mord"},"2")])])]),a(" 就"),s("strong",null,"一定"),a("能够看到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"T1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mord"},"1")])])]),a(" 的更新。串行化是指并发事务的执行结果和一个串行化的顺序的执行结果相同，这两者结合起来，就十分类似于线性一致性的定义了。")],-1),y=o('<h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>Spanner会为每个事务分配一个时间戳，对于读写事务，时间戳是<strong>commit</strong>的时间，对于只读事务，时间戳是事务<strong>第一次读取的时间</strong>，事务必须要在最开始声明自己是只读事务。</p><p>同时，每个数据也都有自己的时间戳，并依次构建了多版本存储，每个事务都只能读到小于自己时间戳的版本，这被称为<strong>快照隔离</strong>。</p><p>由于只读事务只会从最近的分片读取，并且分片使用了Paxos集群，那么怎么保证当前的分片的数据不会读到来自Learner（FOllower）的还未同步的脏数据呢？</p><p>当执行只读事务时，必须要等到有<strong>大于</strong>自己时间戳的读写事务发生，才可返回，否则等待。</p><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>时间戳在分布式系统中是个不确定的东西，不同的机器之间时间是一定有偏差的，那么就必然会对上面的方案造成影响。</p><p>假设两台Spanner S1 和 S2 ，S1提交读写事务T1，S2提交只读事务T2，有以下情况：</p><p>如果 S2 的时间较<strong>快</strong>，假设S1提交的事务T1的时间戳为100，等到通过Paxos同步到S2，S2的时间却已经到达的200，但实际上同步可能只用了10。这时T2开始执行，时间戳可能为210，就需要在等待更大时间戳的读写事务提交才可以返回，会影响到只读事务的性能。</p><p>如果S2的时间较<strong>慢</strong>，还是假设S1提交的事务T1的时间戳为100，等到通过Paxos同步到S2，S2的时间却只到达的50。这时T2开始执行，时间戳可能为80，我们就无法读取到T1所更新的数据，这样就违反了外部一致性的定义。</p><h3 id="时间服务器" tabindex="-1"><a class="header-anchor" href="#时间服务器" aria-hidden="true">#</a> 时间服务器</h3><p>谷歌在每个数据中心都存在两种时间服务器：GPS以及原子钟。GPS用于从GPS卫星同步全球时间，原子钟用于本地同步时间，它们之间也会相互校准。每隔30S，Spanner的Timeslave Deamon就会从多个时间服务器中读取时间，排除极端不可信值，计算出真实值，依次尽可能的将不同机器的时间同步。</p><h3 id="truetime-api" tabindex="-1"><a class="header-anchor" href="#truetime-api" aria-hidden="true">#</a> TrueTime API</h3><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/ba3580a62a56e7680b53c81323dc45ca.png" alt="image-20231118113704059" style="zoom:67%;"><p>TrueTime API中的<code>TT.now()</code>会返回一个时间戳以及误差时间，这个误差范围，依次为基础，我们需要修改上面的实现。</p><ul><li><strong>Start rule</strong>：设事务时间戳为 <code>TT.now().lastest</code>。对于读写事务，<code>TT</code> 为开始提交的时间戳；对于只读事务，<code>TT</code> 为事务开始时间。</li><li><strong>Commit wait</strong>：对于读写事务，延迟到 <code>TS &lt; TT.now().earliest</code> 时再提交，保证事务时间戳<code>TS</code> 已经完全过去。</li></ul><p>这样，对于后面的只读事务开始时的时间戳，就一定是要大于前面执行的读写事务时间戳，保证了外部一致性。</p>',17);function S(v,k){const t=l("ExternalLinkIcon");return r(),i("div",null,[s("p",null,[s("a",p,[a("《Spanner: Google’s Globally-Distributed Database》论文总结 "),n(t)])]),s("p",null,[s("a",c,[a("简单解释Spanner的TrueTime在分布式事务中的作用"),n(t)])]),s("p",null,[s("a",h,[a("Spanner十问"),n(t)])]),d,g,s("p",null,[s("a",u,[a("Spanner组织结构"),n(t)])]),x,_,T,w,b,y])}const M=e(m,[["render",S],["__file","Spanner.html.vue"]]);export{M as default};
