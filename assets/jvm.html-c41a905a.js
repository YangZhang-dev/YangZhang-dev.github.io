import{_ as a,o as n,c as s,e}from"./app-20538318.js";const t={},i=e(`<p>JVM 即 Java Virtual Machine，Java虚拟机，java二进制字节码运行环境。</p><p>优点：</p><ul><li>一次编译，处处执行</li><li>自动的内存管理，垃圾回收机制</li><li>数组下标越界检查</li></ul><p>JVM、JRE、JDK 的关系如下图所示</p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/1cc07598f89ac9481e9e7708f004f506.png" alt="image-20230811203550153" style="zoom:50%;"><p>jvm内存模型如图：</p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/91fe86f3aa58b5519ade6b3a6f501c77.png" alt="image-20230811203631650" style="zoom:67%;"><h2 id="内存结构" tabindex="-1"><a class="header-anchor" href="#内存结构" aria-hidden="true">#</a> 内存结构</h2><h3 id="程序计数器" tabindex="-1"><a class="header-anchor" href="#程序计数器" aria-hidden="true">#</a> 程序计数器</h3><p>Program Counter Register 程序计数器（寄存器）</p><p>作用：是记录下一条 jvm 指令的执行地址行号。</p><p>特点：</p><ul><li><p>是线程私有的</p></li><li><p>不会存在内存溢出</p></li><li><p>解释器会解释指令为机器码交给 cpu 执行，程序计数器会记录下一条指令的地址行号，这样下一次解释器会从程序计数器拿到指令然后进行解释执行。</p></li><li><p>多线程的环境下，如果两个线程发生了上下文切换，那么程序计数器会记录线程下一行指令的地址行号，以便于接着往下执行。</p></li></ul><h3 id="虚拟机栈" tabindex="-1"><a class="header-anchor" href="#虚拟机栈" aria-hidden="true">#</a> 虚拟机栈</h3><p>每个线程运行需要的内存空间，称为虚拟机栈，每个栈由多个栈帧（Frame）组成，对应着每次调用方法时所占用的内存，每个线程只能有一个活动栈帧，对应着当前正在执行的方法</p><p>问题辨析：</p><ul><li><p>垃圾回收是否涉及栈内存？ 不会。栈内存是方法调用产生的，方法调用结束后会弹出栈。</p></li><li><p>栈内存分配越大越好吗？</p><p>不是。因为物理内存是一定的，栈内存越大，可以支持更多的递归调用，但是可执行的线程数就会越少。</p></li><li><p>方法呢的局部变量是否线程安全</p><ul><li><p>如果方法内部的变量没有逃离方法的作用访问，它是线程安全的</p></li><li><p>如果是局部变量引用了对象，并逃离了方法的访问，那就要考虑线程安全问题</p></li></ul></li></ul><blockquote><p>栈帧过大、过多、或者第三方类库操作，都有可能造成栈内存溢出 java.lang.stackOverflowError ，使用 -Xss256k 指定栈内存大小！</p></blockquote><p>案例：cpu 占用过多</p><ul><li><p>top 命令，查看是哪个进程占用 CPU 过高</p></li><li><p>ps H -eo pid, tid（线程id）, %cpu | grep 刚才通过 top 查到的进程号 通过 ps 命令进一步查看是哪个线程占用 CPU 过高</p></li><li><p>jstack 进程 id 通过查看进程中的线程的 nid ，刚才通过 ps 命令看到的 tid 来对比定位，注意 jstack 查找出的线程 id 是 16 进制的，需要转换。</p></li></ul><h3 id="本地方法栈" tabindex="-1"><a class="header-anchor" href="#本地方法栈" aria-hidden="true">#</a> 本地方法栈</h3><p>一些带有 native 关键字的方法就是需要 JAVA 去调用本地的C或者C++方法，因为 JAVA 有时候没法直接和操作系统底层交互，所以需要用到本地方法栈，服务于带 native 关键字的方法。</p><h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h3><p>Heap 堆</p><ul><li>通过new关键字创建的对象都会被放在堆内存</li></ul><p>特点</p><ul><li>它是线程共享，堆内存中的对象都需要考虑线程安全问题</li><li>有垃圾回收机制</li></ul><h4 id="堆内存溢出" tabindex="-1"><a class="header-anchor" href="#堆内存溢出" aria-hidden="true">#</a> 堆内存溢出</h4><p>java.lang.OutofMemoryError ：java heap space. 堆内存溢出 可以使用 -Xmx8m 来指定堆内存大小。</p><h4 id="堆内存诊断" tabindex="-1"><a class="header-anchor" href="#堆内存诊断" aria-hidden="true">#</a> 堆内存诊断</h4><ol><li>jps 工具 查看当前系统中有哪些 java 进程</li><li>jmap 工具 查看堆内存占用情况 jmap - heap 进程id</li><li>jconsole 工具 图形界面的，多功能的监测工具，可以连续监测</li><li>jvisualvm 工具</li></ol><h3 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区" aria-hidden="true">#</a> 方法区</h3><p>Java 虚拟机有一个在所有 Java 虚拟机线程之间共享的方法区域。方法区域类似于用于传统语言的编译代码的存储区域，或者类似于操作系统进程中的“文本”段。它存储每个类的结构，例如运行时常量池、字段和方法数据，以及方法和构造函数的代码，包括特殊方法，用于类和实例初始化以及接口初始化方法区域是在虚拟机启动时创建的。尽管方法区域在逻辑上是堆的一部分，但简单的实现可能不会选择垃圾收集或压缩它。此规范不强制指定方法区的位置或用于管理已编译代码的策略。方法区域可以具有固定的大小，或者可以根据计算的需要进行扩展，并且如果不需要更大的方法区域，则可以收缩。方法区域的内存不需要是连续的！</p><p>永久代：使用heap空间</p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/771ad4edb0291ef0607b1f20b6187b52.png" alt="image-20230811204212311" style="zoom:67%;"><p>元空间：使用本地内存</p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/4aa625382e30b193de6170cc4ef196b4.png" alt="image-20230811204333841" style="zoom:67%;"><p>注意无论是永久代还是元空间，都是方法区的实现。</p><h4 id="方法区内存溢出" tabindex="-1"><a class="header-anchor" href="#方法区内存溢出" aria-hidden="true">#</a> 方法区内存溢出</h4><ul><li>1.8 之前会导致永久代内存溢出 <ul><li>使用 -XX:MaxPermSize=8m 指定永久代内存大小</li></ul></li><li>1.8 之后会导致元空间内存溢出 <ul><li>使用 -XX:MaxMetaspaceSize=8m 指定元空间大小</li></ul></li></ul><h3 id="常量池" tabindex="-1"><a class="header-anchor" href="#常量池" aria-hidden="true">#</a> 常量池</h3><p>常量池就是一张表，虚拟机指令根据这张常量表找到要执行的类名、方法名、参数类型、字面量信息</p><p><strong>运行时常量池</strong>：</p><p>常量池是 *.class 文件中的，当该类被加载以后，它的常量池信息就会放入运行时常量池，并把里面的<strong>符号地址</strong>变为<strong>真实地址</strong>。</p><h3 id="stringtable" tabindex="-1"><a class="header-anchor" href="#stringtable" aria-hidden="true">#</a> StringTable</h3><p>特点：</p><ul><li>常量池中的字符串仅是符号，只有在被用到时才会转化为对象，懒加载</li><li>利用串池的机制，来避免重复创建字符串对象</li><li>字符串变量拼接的原理是StringBuilder</li><li>字符串常量拼接的原理是编译器优化，&quot;a&quot; + &quot;b&quot; == &quot;ab&quot;</li><li>可以使用intern方法，主动将串池中还没有的字符串对象放入串池中</li></ul><h4 id="intern方法-1-8" tabindex="-1"><a class="header-anchor" href="#intern方法-1-8" aria-hidden="true">#</a> intern方法 1.8</h4><p>调用字符串对象的 intern 方法，会将该字符串对象尝试放入到串池中</p><ul><li>如果串池中没有该字符串对象，则放入成功</li><li>如果有该字符串对象，则放入失败 无论放入是否成功，都会返回串池中的字符串对象</li></ul><p>如果是1.6 放入成功则会返回一个副本。</p><h4 id="性能调优" tabindex="-1"><a class="header-anchor" href="#性能调优" aria-hidden="true">#</a> 性能调优</h4><ul><li>因为StringTable是由HashTable实现的，所以可以适当增加HashTable桶的个数，来减少字符串放入串池所需要的时间，-XX:StringTableSize=桶个数（最少设置为 1009 以上）</li><li>考虑是否需要将字符串对象入池，可以通过 intern 方法减少重复入池</li></ul><h3 id="直接内存" tabindex="-1"><a class="header-anchor" href="#直接内存" aria-hidden="true">#</a> 直接内存</h3><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4><p>Direct Memory</p><ul><li>常见于 NIO 操作时，用于数据缓冲区</li><li>分配回收成本较高，但读写性能高</li><li>不受 JVM 内存回收管理</li></ul><p>将系统缓冲区和java堆缓冲区合并为一个直接缓冲区。</p><h4 id="释放" tabindex="-1"><a class="header-anchor" href="#释放" aria-hidden="true">#</a> 释放</h4><p>必须通过<code>unsafe.freMemory</code>手动释放。</p><ul><li>使用了 Unsafe 类来完成直接内存的分配回收，回收需要主动调用freeMemory 方法</li><li>ByteBuffer 的实现内部使用了 Cleaner（虚引用）来检测 ByteBuffer 。一旦ByteBuffer 被垃圾回收，那么会由 ReferenceHandler（守护线程） 来调用 Cleaner 的 clean 方法调用 freeMemory 来释放内存</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建1KB的直接内存</span>
<span class="token class-name">ByteBuffer</span> byteBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocateDirect</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 释放过程</span>
<span class="token comment">// 1. </span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ByteBuffer</span> <span class="token function">allocateDirect</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DirectByteBuffer</span><span class="token punctuation">(</span>capacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.</span>
<span class="token class-name">DirectByteBuffer</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// package-private</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    base <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">allocateMemory</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 申请内存</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    unsafe<span class="token punctuation">.</span><span class="token function">setMemory</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> size<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    cleaner <span class="token operator">=</span> <span class="token class-name">Cleaner</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Deallocator</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> size<span class="token punctuation">,</span> cap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过虚引用，来实现直接内存的释放，this为虚引用的实际对象, 第二个参数是一个回调，实现了 runnable 接口，run 方法中通过 unsafe 释放内存。</span>
    att <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. Cleaner内部clean方法</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">clean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 都用函数的 run 方法, 释放内存</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>thunk<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Throwable</span> var2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>address <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Paranoia</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 释放内存</span>
    unsafe<span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
    address <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">Bits</span><span class="token punctuation">.</span><span class="token function">unreserveMemory</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> capacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦加入如下参数<code>-XX:+DisableExplicitGC</code>，便会禁用手动GC，那么最好在直接内存使用完毕采用<code>unsafe.freeMemory</code>释放内存。</p><h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h2><h3 id="判断对象是否回收" tabindex="-1"><a class="header-anchor" href="#判断对象是否回收" aria-hidden="true">#</a> 判断对象是否回收</h3><h4 id="引用计数法" tabindex="-1"><a class="header-anchor" href="#引用计数法" aria-hidden="true">#</a> 引用计数法</h4><p>当一个对象被引用时，就当引用对象的值加一，当值为 0 时，就表示该对象不被引用，可以被垃圾收集器回收。</p><p>弊端：当两个对象循环引用时，两个对象的计数都为1，导致两个对象都无法被释放。</p><h4 id="可达性分析算法" tabindex="-1"><a class="header-anchor" href="#可达性分析算法" aria-hidden="true">#</a> 可达性分析算法</h4><ul><li>JVM 中的垃圾回收器通过可达性分析来探索所有存活的对象</li><li>扫描堆中的对象，看能否沿着 GC Root 对象为起点的引用链找到该对象，如果找不到，则表示可以回收</li><li>可以作为 GC Root 的对象 <ul><li>虚拟机栈（栈帧中的本地变量表）中引用的对象。</li><li>方法区中类静态属性引用的对象</li><li>方法区中常量引用的对象</li><li>本地方法栈中 JNI（即一般说的Native方法）引用的对象</li></ul></li></ul><h3 id="四种引用" tabindex="-1"><a class="header-anchor" href="#四种引用" aria-hidden="true">#</a> 四种引用</h3><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/f74e4526e1f2716424795fee2d36314b.png" alt="image-20230812205436819" style="zoom:50%;"><ul><li>强引用 只有所有 GC Roots 对象都不通过【强引用】引用该对象，该对象才能被垃圾回收</li><li>软引用（SoftReference） 仅有软引用引用该对象时，在垃圾回收后，内存仍不足时会再次出发垃圾回收，回收软引用对象 可以配合引用队列来释放软引用自身</li><li>弱引用（WeakReference） 仅有弱引用引用该对象时，在垃圾回收时，无论内存是否充足，都会回收弱引用对象 可以配合引用队列来释放弱引用自身</li><li>虚引用（PhantomReference） 必须配合引用队列使用，主要配合 ByteBuffer 使用，被引用对象回收时，会将虚引用入队， 由 Reference Handler 线程调用虚引用相关方法释放直接内存</li><li>终结器引用（FinalReference） 无需手动编码，但其内部配合引用队列使用，在垃圾回收时，终结器引用入队（被引用对象暂时没有被回收），再由 Finalizer 线程通过终结器引用找到被引用对象并调用它的 finalize 方法，第二次 GC 时才能回收被引用对象。</li></ul><h3 id="垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#垃圾回收算法" aria-hidden="true">#</a> 垃圾回收算法</h3><h4 id="标记清除" tabindex="-1"><a class="header-anchor" href="#标记清除" aria-hidden="true">#</a> 标记清除</h4><p>特点：</p><ul><li>速度较快</li><li>会产生内存碎片</li></ul><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/891a2a5cecb99b757c1181708d9a3e47.png" alt="image-20230812205607088" style="zoom:50%;"><h4 id="标记整理" tabindex="-1"><a class="header-anchor" href="#标记整理" aria-hidden="true">#</a> 标记整理</h4><p>特点：</p><ul><li>速慢</li><li>无内存碎片</li></ul><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/89ccb0b1fb62debdb425ad2947b5411b.png" alt="image-20230812205702464" style="zoom:50%;"><h4 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h4><p>特点：</p><ul><li>无内存碎片</li><li>需要占用两倍内存</li></ul><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/a73d36ea87862d87036e63a4c374935e.png" alt="image-20230812205805800" style="zoom:50%;"><p>实际上是上面的算法都会使用，在不同的场景下各有优点。</p><h2 id="分代垃圾回收" tabindex="-1"><a class="header-anchor" href="#分代垃圾回收" aria-hidden="true">#</a> 分代垃圾回收</h2><p>from：s0</p><p>to：s1</p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/138ba9d601023913b9df4c381a916b00.png" alt="image-20230812205941454" style="zoom:50%;"><p>过程：</p><ul><li>新创建的对象首先分配在 eden 区</li><li>新生代空间不足时，触发 minor gc ，eden 区 和 from 区存活的对象使用 - copy 复制到 to 中，存活的对象年龄加一，然后交换 from to</li><li>minor gc 会引发 stop the world，暂停其他线程，等垃圾回收结束后，恢复用户线程运行</li><li>当幸存区对象的寿命超过阈值时，会晋升到老年代，最大的寿命是 15（4bit）（不同JVM决定）</li><li>当老年代空间不足时，会先触发 minor gc，如果空间仍然不足，那么就触发 full fc ，停止的时间更长！</li></ul><p>注意</p><ul><li>从新生代到老年代不是一定要到年龄，会根据当前内存压力的大小决定是否直接晋升</li></ul><table><thead><tr><th style="text-align:center;"><strong>含义</strong></th><th style="text-align:center;"><strong>参数</strong></th></tr></thead><tbody><tr><td style="text-align:center;">堆初始大小</td><td style="text-align:center;">-Xms</td></tr><tr><td style="text-align:center;">堆最大大小</td><td style="text-align:center;">-Xmx 或 -XX:MaxHeapSize=size</td></tr><tr><td style="text-align:center;">新生代大小</td><td style="text-align:center;">-Xmn 或 (-XX:NewSize=size + -XX:MaxNewSize=size )</td></tr><tr><td style="text-align:center;">幸存区比例（动态）</td><td style="text-align:center;">-XX:InitialSurvivorRatio=ratio 和 -XX:+UseAdaptiveSizePolicy</td></tr><tr><td style="text-align:center;">幸存区比例</td><td style="text-align:center;">-XX:SurvivorRatio=ratio</td></tr><tr><td style="text-align:center;">晋升阈值</td><td style="text-align:center;">-XX:MaxTenuringThreshold=threshold</td></tr><tr><td style="text-align:center;">晋升详情</td><td style="text-align:center;">-XX:+PrintTenuringDistribution</td></tr><tr><td style="text-align:center;">GC详情</td><td style="text-align:center;">-XX:+PrintGCDetails -verbose:gc</td></tr><tr><td style="text-align:center;">FullGC 前 MinorGC</td><td style="text-align:center;">-XX:+ScavengeBeforeFullGC</td></tr></tbody></table><h2 id="垃圾回收器" tabindex="-1"><a class="header-anchor" href="#垃圾回收器" aria-hidden="true">#</a> 垃圾回收器</h2><h3 id="串行" tabindex="-1"><a class="header-anchor" href="#串行" aria-hidden="true">#</a> 串行</h3><p><strong>特点</strong>：</p><ul><li>单线程</li><li>堆内存较少，适合个人电脑</li></ul><p><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/0030f52d5e63831679e4abb53a9f2bd1.png" alt="image-20230812221210541" loading="lazy"></p><p><strong>安全点</strong>：让其他线程都在这个点停下来，以免垃圾回收时移动对象地址，使得其他线程找不到被移动的对象，因为是串行的，所以只有一个垃圾回收线程。且在该线程执行回收工作时，其他线程进入阻塞状态</p><h4 id="serial-收集器" tabindex="-1"><a class="header-anchor" href="#serial-收集器" aria-hidden="true">#</a> Serial 收集器</h4><p>单线程、简单高效（与其他收集器的单线程相比），采用复制算法。对于限定单个 CPU 的环境来说，Serial 收集器由于没有线程交互的开销，专心做垃圾收集自然可以获得最高的单线程收集效率。收集器进行垃圾回收时，必须暂停其他所有的工作线程，直到它结束（Stop The World）！</p><h4 id="parnew-收集器" tabindex="-1"><a class="header-anchor" href="#parnew-收集器" aria-hidden="true">#</a> ParNew 收集器</h4><p>ParNew 收集器其实就是 Serial 收集器的多线程版本</p><p>特点：</p><p>多线程、ParNew 收集器默认开启的收集线程数与CPU的数量相同，在 CPU 非常多的环境中，可以使用 -XX:ParallelGCThreads 参数来限制垃圾收集的线程数。和 Serial 收集器一样存在 Stop The World 问题</p><h4 id="serial-old-收集器" tabindex="-1"><a class="header-anchor" href="#serial-old-收集器" aria-hidden="true">#</a> Serial Old 收集器</h4><p>Serial Old 是 Serial 收集器的老年代版本</p><p>特点：</p><p>同样是单线程收集器，采用标记-整理算法</p><h3 id="吞吐量优先" tabindex="-1"><a class="header-anchor" href="#吞吐量优先" aria-hidden="true">#</a> 吞吐量优先</h3><p>特点：</p><ul><li>多线程</li><li>堆内存较大，多核 cpu</li><li>让单位时间内，STW 的时间最短</li></ul><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/352fffbb908a770e2d9aa19e650467fb.png" alt="image-20230812221319868" style="zoom:67%;"><h4 id="parallel-scavenge-收集器" tabindex="-1"><a class="header-anchor" href="#parallel-scavenge-收集器" aria-hidden="true">#</a> Parallel Scavenge 收集器</h4><p>与吞吐量关系密切，故也称为吞吐量优先收集器</p><p><strong>特点</strong>：</p><p>属于新生代收集器也是采用复制算法的收集器（用到了新生代的幸存区），又是并行的多线程收集器（与 ParNew 收集器类似） 该收集器的目标是达到一个可控制的吞吐量。还有一个值得关注的点是：GC自适应调节策略（与 ParNew 收集器最重要的一个区别）</p><p><strong>GC自适应调节策略</strong>：</p><p>Parallel Scavenge 收集器可设置 -XX:+UseAdptiveSizePolicy 参数。当开关打开时不需要手动指定新生代的大小（-Xmn）、Eden 与 Survivor 区的比例（-XX:SurvivorRation）、晋升老年代的对象年龄（-XX:PretenureSizeThreshold）等，虚拟机会根据系统的运行状况收集性能监控信息，动态设置这些参数以提供最优的停顿时间和最高的吞吐量，这种调节方式称为 GC 的自适应调节策略。</p><p><strong>Parallel Scavenge 收集器使用两个参数控制吞吐量</strong>：</p><ul><li><p>XX:MaxGCPauseMillis=ms 控制最大的垃圾收集停顿时间（默认200ms）</p></li><li><p>XX:GCTimeRatio=rario 直接设置吞吐量的大小</p></li></ul><h4 id="parallel-old-收集器" tabindex="-1"><a class="header-anchor" href="#parallel-old-收集器" aria-hidden="true">#</a> Parallel Old 收集器</h4><p>Parallel Scavenge 收集器的老年代版本</p><p>特点：</p><p>多线程，采用标记-整理算法（老年代没有幸存区）</p><h3 id="响应时间优先-cms" tabindex="-1"><a class="header-anchor" href="#响应时间优先-cms" aria-hidden="true">#</a> 响应时间优先（CMS）</h3><p>特点：</p><ul><li>多线程</li><li>堆内存较大，多核 cpu</li><li>尽可能让 STW 的单次时间最短</li></ul><img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/90adca19b316548040aa966f4f01a9d8.png" alt="image-20230812221927380" style="zoom:67%;"><h4 id="cms-收集器" tabindex="-1"><a class="header-anchor" href="#cms-收集器" aria-hidden="true">#</a> CMS 收集器</h4><p>Concurrent Mark Sweep，一种以获取最短回收停顿时间为目标的老年代收集器</p><p><strong>特点</strong>：基于标记-清除算法实现。并发收集、低停顿，但是会产生内存碎片</p><p><strong>应用场景</strong>：适用于注重服务的响应速度，希望系统停顿时间最短，给用户带来更好的体验等场景下。如 web 程序、b/s 服务 CMS 收集器的运行过程分为下列4步：</p><p><strong>初始标记</strong>：标记 GC Roots 能直接到的对象。速度很快但是仍存在 Stop The World 问题。</p><p><strong>并发标记</strong>：进行 GC Roots Tracing 的过程，找出存活对象且用户线程可并发执行。</p><p><strong>重新标记</strong>：为了修正并发标记期间因用户程序继续运行而导致标记产生变动的那一部分对象的标记记录。仍然存在 Stop The World 问题</p><p><strong>并发清除</strong>：对标记的对象进行清除回收，清除的过程中，可能任然会有新的垃圾产生，这些垃圾就叫<strong>浮动垃圾</strong>由于CMS收集器无法处理“浮动垃圾”（Floating Garbage），有可能出现“Con-current Mode Failure”失败进而导致另一次完全“Stop The World”的Full GC的产生。同时，空间碎片过多时，将会给大对象分配带来很大麻烦，往往会出现老年代还有很多剩余空间，但就是无法找到足够大的连续空间来分配当前对象，而不得不提前触发一次Full GC的情况。</p><p>CMS 收集器的内存回收过程是与用户线程一起并发执行的，可以搭配 ParNew 收集器（多线程，新生代，复制算法）与 Serial Old 收集器（单线程，老年代，标记-整理算法）使用。</p>`,141),l=[i];function p(c,o){return n(),s("div",null,l)}const d=a(t,[["render",p],["__file","jvm.html.vue"]]);export{d as default};
