import{_ as i,r as l,o as t,c as o,a as p,b as e,d as a,e as s}from"./app-20538318.js";const c={},r=s('<h2 id="新大陆" tabindex="-1"><a class="header-anchor" href="#新大陆" aria-hidden="true">#</a> 新大陆</h2><p>1.Redis5种数据类型</p><p>2.讲一下事务的ACID</p><p>3.讲一下RBAC</p><p>4.讲一下Java中的Map</p><p>7.SpringBoot如何全局拦截异常</p><p>8.线程池的核心参数及如何设置核心线程的大小</p><p>9.你的项目是如何做认证授权的，有用到token嘛</p><p>10.Es中keyword和text的区别是什么</p><p>11.Es中term和match的区别是什么</p><p>12.SpringBoot中的事务用到什么注解</p><p>13.自动装箱跟自动拆箱</p><p>14.ConcurrentHashMap的原理</p><p>15.用过动态代理吗</p><p>16.mybatis一对一、一对多和多对多怎么搞</p><p>17.怎么排查内存泄漏</p><p>18.读取文件用哪种流比较好</p><h2 id="滴滴" tabindex="-1"><a class="header-anchor" href="#滴滴" aria-hidden="true">#</a> 滴滴</h2><p>1.除了平时常用的new的方式创建对象，你还知道什么其他的方式吗（反射）</p><p>4.那Java中用来解决hash冲突的方法是什么，底层的实现细节（关于为什么是8，我说的是因为泊松分布，面试官说其实按魔法数理解会合适一些）</p><p>5.讲一下死锁</p><p>6.在Java工程的具体应用中是怎么排查死锁的(我答的资源分配图，但是面试官说具体应用中用的是jstack，jConsole来排查，这个就比较偏工程了，没做过的确实不知道，果然我这种光背八股的废物，一下子就露馅了)</p><p>7.对于TCP和UDP来说，说一下对于“网络通信不可靠”这句话的理解</p><p>8.HotSpot VM 的实现，Partial GC和Full GC</p><p>9.双亲委派模型</p><h2 id="阿里" tabindex="-1"><a class="header-anchor" href="#阿里" aria-hidden="true">#</a> 阿里</h2><ol><li>JUC了解吗，为什么要多线程</li><li>创建线程的方式</li><li>JAVA中锁了解吗，讲讲</li><li>sychronized和reentrantlock区别，底层怎么实现的</li><li>数据库索引了解吗</li><li>底层数据结构，为什么用</li><li>加索引原则（最左）</li><li>JAVA中常用的数据结构说几种</li><li>HashMap线程安全吗，为什么不安全</li><li>currentHashMap怎么做到安全的</li><li>分段锁具体底层怎么实现的</li><li>树的中序遍历（完整实现，包括数据结构的定义，输入输出）</li><li>力扣76最小覆盖子串</li></ol><h2 id="小米" tabindex="-1"><a class="header-anchor" href="#小米" aria-hidden="true">#</a> 小米</h2>',28),d={href:"https://www.nowcoder.com/feed/main/detail/c82e3d3edf154cb5880ecdf6e69baf89",target:"_blank",rel:"noopener noreferrer"},u=p("p",null,"2.算法：LCR 016. 无重复字符的最长子串 这次没有手撕，面试官说之前手撕过了这次就说一下思路，说了滑动窗口+哈希表。面试官问还有没有其他思路，我就说暴力一点DFS，没有其他思路。",-1),h=p("p",null,"4.实习里面提到：多线程数据转发。对于文件数据转发的过程中，用到有界队列。问我有界队列、拒绝策略、线程僵死的一些内容，对这些的异常处理机制是什么、保障机制是什么。 10.Redis你会去考虑持久化吗。（提到RDB AOF） 11.Mysql和Redis的数据一致性。（讲了很多，先删缓存和先更新数据库的都说了，各种情况都描述了，延迟双删）。 12.Java里面你了解的一些锁，按照锁的粒度排个序。 13.提到我会Docker，说一下Dockerfile你经常用的一些命令。",-1),m=p("p",null,"https://www.nowcoder.com/feed/main/detail/c40ac775190c4e2f8b254998a45f0728",-1),k=p("p",null,"1.分布式锁如何实现的 2.分布式锁原理 3.redis分布式锁优缺点 4.还有哪些分布式锁 5.zookeeper的分布式锁和redis的分布式锁有什么不同点 6.线程池核心5 max8 5个线程在跑 再来一个task怎么处理 7.拒绝策略有哪些 8.对线程池执行shutdown()，线程如何关闭 9.java里直接中断正在执行的线程，能够真正把线程中断吗 10.java中断线程用什么，如何实现 11.java中线程的状态以及如何变化的 12.线程中sleep()和wait()区别 13.垃圾回收算法？cms和g1工作原理，两个区别 14.脏读是如何产生的，如何解决 15.不可重复读是什么原因 16.如何实现可重复读，mysql实现可重复读背后的技术方案 17.https如何建立连接的 18.四次挥手 手撕：翻转二叉树 递归和非递归写法",-1),w=p("h2",{id:"快手",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#快手","aria-hidden":"true"},"#"),e(" 快手")],-1),v={href:"https://www.nowcoder.com/feed/main/detail/75378bbf724f4c7b82f8dc8f226052af",target:"_blank",rel:"noopener noreferrer"},b=p("p",null,"1.线程池：（因为项目用了，所以先问）线程池流程说一下。Excutors提供的线程池说一下（就是fixed、cache那几个），是具体到它们使用了什么参数。 2.synchronized锁升级流程、与ReentrantLock区别（我当时说了Condition更灵活，后来hr提醒还有AQS的锁在抢占过程中响应中断，这个知道，但没想起来）。 3.HashMap与ConcurrentHashMap。顺便问我1.7的ConcurrentHashMap用什么锁（救命，只看了1.8的源码，电脑根本没有1.7的jdk，说用的synchronized，错了，用的ReentrantLock） 4.MySQL：三种日志作用、事务隔离级别以及如何实现（MVCC那个）、索引是什么 5.redis：内存淘汰，持久化",-1),g=p("p",null,"7.做题：问我算法熟悉哪个。我：链表，dp，回溯。给了我一道全排列（无重复数字）的题。",-1),f=p("p",null,"https://www.nowcoder.com/feed/main/detail/4f792a25ce054c37be72d82f79cbc45b",-1),S=p("p",null,"\\1. Mysql 为什么使用B+树，B+树为什么快 \\2. 自增主键和uuid主键的优缺点 \\3. uuid是如何生成的 \\4. Mysql的事务ACID什么意思 \\5. Mysql隔离级别有哪些 \\6. Mysql 有哪些log(查资料有redolog、binlog、undolog) \\7. 聊聊ES，ES的基本概念 \\8. 为什么使用ES \\9. ES的分词了解吗 \\10. 如果相查一个古代文字，怎么查找 \\11. ES搜索怎么优化 \\12. Redis了解吗，有哪几种数据结构？了解Zset吗 \\13. Redis为什么快 \\14. 消息队列了解吗(答Kafka) \\15. partition在整体是有序的吗 \\16. 没有zookeeper的话，kafka运行会产生问题吗？有什么问题 \\17. 计算机网络问问把，7层网络模型有哪些 \\18. 常用的tcp和udp有什么区别(答：tcp面向连接，udp无连接，tcp有拥塞控制，udp没有，tcp适用于稳定的业务需求,udp适用于视频等场景，还有其他区别吗？没有) \\19. 浏览器输入网址经历那些过程 \\20. 问问操作系统吧，进程和线程有什么区别 \\21. 问问Java相关的把，i++，再多并发环境下有什么问题 \\22. 什么是死锁 \\23. 有哪些方法可以保证i++的线程安全 \\24. 那我只加上volatile可以吗，为什么 \\25. CAS了解吗 \\26. AQS了解吗 \\27. synchronized得底层实现 \\28. 讲注解@transactional底层原理 \\29. 讲解一下SpringBoot的事务 \\30. 遇到过OOM的问题吗，可能有什么原因？ \\31. uuid能用来做主键吗，如果不能是什么问题(提示:多次IO、页分裂，页分裂导致的不规则和稀疏) \\32. RESTFUL有什么优点 \\33. PUT和DEL有信息安全问题吗 \\34. SpringBoot获取配置文件值的方式(Environment、Value、ConfigurationProperties) \\35. 来个算法题吧(股票的最大利润)",-1),y=p("p",null,"https://www.nowcoder.com/feed/main/detail/d69243c9f20148a7ab17503446ead747",-1),P=p("p",null,"二面 \\1. treemap 和 hashmap区别 \\2. hashtable 和 hashmap区别 \\3. hashtable能被concurrenthashmap完全取代吗 \\4. ArrayList和LinkedList有什么区别 \\5. LinkedList有容量限制吗 \\6. 数据库使用b+树相比b树有什么优势 \\7. uuid和自增id有什么优劣 \\8. 业务id和自增id在查询的时候设置哪个为主键，插入多的场景呢 \\9. redis有哪几种数据结构 \\10. redis有什么持久化策略 \\11. redis内存淘汰机制 \\12. lru讲一下 \\13. 分布式redis怎么保证热点数据...？ \\14. 一致性哈希是什么 \\15. 直播里面打赏的排名，你准备怎么设计？ \\16. 编程——实现刚才说的设计算法",-1),A=p("p",null,"三面 \\1. 算法题，跳一跳(dfs实现的) \\2. stl的map实现原理(回答的红黑树) \\3. map底层红黑树为什么对所有都数据都可以排序(回答的用排序器，java里面Hashmap1.7以前是哈希数组用hashcode、equals来定位, treemap排序用comparator) \\4. spring事务注解是怎么实现的(答案是通过代理类实例实现的) \\5. spring事务失效例子(考察了spring调用事务方法会失效的场景，例如调用this.transfunction()，现在的this是原类的实例，不是代理类实例；还有异常被吞了，spring感知不到异常，无法回滚) \\6. Zset实现原理？ \\7. 一个数据库订单支付的业务，有一个用户表(用户id,余额)，有一个订单表(订单id,用户id,付款状态【未付款/已付款】)，在并发场景下，你觉得会有什么问题发生？(回答了一个用户的多订单并发时造成订单总额大于余额扣款成功情况) \\8. 你怎么解决这些问题",-1),L=p("h2",{id:"贝壳",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#贝壳","aria-hidden":"true"},"#"),e(" 贝壳")],-1),_={href:"https://www.nowcoder.com/discuss/547809447167397888",target:"_blank",rel:"noopener noreferrer"},C=s(`<p>一面 14:37（34min）</p><ul><li>自我介绍</li><li>项目</li><li>ArrayList，讲讲其他的List</li><li>ArrayList线程安全版本的容器</li><li>HashMap原理</li><li>ConcurrentHashMap原理</li><li>bean生命周期</li><li>bean是单例还是多例的，具体怎么修改</li><li>为什么用b+树不用b树</li><li>联合索引 (a, b)，where a = 1 和 where b = 1，效果是一样的吗</li><li>事务ACID</li><li>慢查询怎么分析</li><li>explain分析后， type的执行效率等级，达到什么级别比较合适</li><li>设计一个秒杀场景</li><li>消息队列</li><li>手撕：3个线程交替打印1-100（伪代码就可以） <ul><li>怎么让main线程等待这3个线程执行完再执行</li></ul></li><li>go在什么场景下使用</li><li>反问</li></ul><p>一面比较基础，面完10分钟发了二面邮件。</p><p>二面 15:49（28min）</p><ul><li>自我介绍</li><li>实习项目</li><li>NIO</li><li>select、poll、epoll</li><li>AOP实现方式</li><li>看过Spring和SpringBoot的源码吗</li><li>MyBatis传参有哪几种方式，有什么区别</li><li>手撕：单例模式</li><li>设计原则</li><li>微服务优缺点</li><li>你现在有面试其他公司吗？面到第几轮？</li></ul><p>HR面 16:44（13min）</p><ul><li>自我介绍</li><li>上一段实习主语言是go，为什么不投我们这边go的岗位</li><li>对互联网岗位的意向，原因</li><li>职业规划</li><li>期望工作城市</li><li>和一二面面试官聊的怎么样</li><li>对贝壳了解吗</li><li>可以提前实习吗</li><li>之前实习加班多吗</li><li>别的公司面试情况怎么样</li><li>选择offer会看哪几方面</li></ul><h2 id="字节" tabindex="-1"><a class="header-anchor" href="#字节" aria-hidden="true">#</a> 字节</h2><p>1.介绍一-下第一个项目(20min) 2.项目里的:当给用户发送激活邮箱之后，点击邮箱验证如何做的? (给自 己挖的坑) 3.敏感词脱敏怎么做的? 4.第二个项目里的rpc框架，接口用什么做约定，了解工业界在用的rpc框架怎么做接口约定的? 5.rpc服务的注册怎么做的? 6.序列化反序列以及编解码有什么区别?你如何实现序列化的?</p><p>spring循环依赖</p><p>redis常见数据类型</p><p>zset底层数据结构、和红黑树相比呢？时间复杂度？为什么不用红黑树</p><p>GET、POST</p><p>页面置换算法</p><p>抽象类和接口</p><p>7.动态代理是怎么做的? 8.知道Redis在工业界的应用场景吗?如何实现分布式锁? (自己给自 己挖坑,说漏嘴了) 9.分布式锁和普通的锁有什么区别? 10.操作系统中，new- 一个进程之后发生了那些事情? 11.发生死锁之后，有什么办法去检测和处理? 12.如果一直往redis中存数据， 会怎么样? 13.场景题:设计一个feed流系统(没听明白是啥)原话:让你假设让你设计一套feed流系统，整体对标微信的公 众号，就是你可以去关注一个作者, 然后你也可以去取关一个作者, 然后你关注了一个人的话，你就可以在feed 流里去看到这个作者的发文，就他的那个所有的发文,假设咱们以你关注作者的发文以时间序的形式出现在feed 流里，假设让你去做这么一套系统， 尽可能的去多的支持大的用户量跟作者量,你想-下怎么去做设计? 14.算法Ic53 15.算法cache设计: lc: LRU缓存多个- 个条件:过x秒之后没有操作的元素会自动过期删除 平衡二叉树删除节点</p><p>给定一个二叉树和链表，判断链表是否在二叉树内</p><p>https://www.nowcoder.com/feed/main/detail/4565abe41ecb4345a1521a9fe1eb06ae</p><p>写代码主要做什么事情 实习业务整个过程中网络传输 数据处理 逻辑处理的过程，点单操作翻译成计算机网络和程序逻辑的整个过程 TCP连接建立展开说说 为什么唤起企业微信中的icon就会建立连接，怎么建立的 HTTP连接如何建立？ 假设拿到了IP，三次握手的建立过程 三次握手服务端没有发送SYNACK会怎样 重发的连接是另外一个请求还是同一个请求 这两次SYN有什么区别 客户端未收到SYNACK重发SYN时的状态 客户端第三次ACK没有发的客户端/服务端状态 服务端一直收不到ACK呢？此时的状态 TCP四次挥手 为什么要四次挥手的过程 客户端发送FIN后，还能发数据包吗 发送完FIN再发送报文会怎样 三握四挥中异常情况（如宕机）的处理</p><p>手撕：二叉搜索树知道了后序遍历，求先序遍历</p><p>https://www.nowcoder.com/feed/main/detail/88b97303db554d41b1bf444064902dae</p><p>项目 前端发送请求到后端的过程（MVC） 网关gateway作用，怎么解决跨域 各微服务组件作用 心跳机制 分布式锁，Redission，其它实现</p><p>java 线程池，队列满的策略 并发怎么实现 concurrentHashMap 锁的分类，重量级轻量级 怎么实现锁</p><p>sql where多条件查询，是否走索引 如何将同姓名记录拼到同一行</p><p>字符串拼接</p><p>https://www.nowcoder.com/feed/main/detail/d81938a5905349a8a1a2209605e1f2c9?sourceSSR=users</p><p>主要记不太清了，很多场景题 如果有千万级别的节点同时向后端传数据，怎么解决数据量大的问题。--考虑mysql分库分表；开多个服务结点 分表的分法，横向纵向，分表的依据，带来哪些问题 IO框架了解吗，netty简单介绍下，怎么用的</p><p>java的一些八股 记不清了</p><p>说一个算法 从亿级别的手机号中，判断某个手机号是否在其中--考虑位图；布隆过滤器</p><p>手撕 最长不重复子序列，力扣第三题</p><p>ES的结构，游标索引，倒排索引 二面主要结合很多实际场景，扩展你的项目!</p><p>https://www.nowcoder.com/feed/main/detail/3ad7ee8f334c49a0bb4e9a4c6e627368</p><p>懂车帝(北京)-后端开发实习-一面</p><p>数据结构 \\1. 优先级队列是否了解？说一下特性和实现原理？ \\2. 除了红黑数以外还有什么平衡树？ \\3. 堆的左旋和右旋操作你了解吗？ 操作系统 \\1. 进程和线程有什么区别？ \\2. 为什么线程更高效？ \\3. 为什么多线程会有线程安全问题？如何解决？ \\4. 说说你对锁的了解？ \\5. 进程通信之间的方式？ \\6. 什么是僵尸进程？会占用CPU吗？如何回收？ 计算机网络 \\1. HTTP 的协议有哪些常见的方法和状态码？ \\2. GET可以新增吗？ \\3. cookie 和 session 的区别？ \\4. session保存在什么地方？ \\5. 你用自定义token如何控制过期时间呢？ \\6. TCP 协议断开链接的过程 \\7. MSL的时间具体是多少你知道吗？ 数据库 \\1. MySQL的隔离级别有哪些？ \\2. 对可重复读举个例子 \\3. 慢SQL如何优化？ \\4. 那explain 的话一般关注哪些信息？ \\5. 假如我的SQL已经命中索引还是很慢，怎么解决？ \\6. MySQL中表的字段有上限吗？ \\7. MySQL中表的索引的个数有上限吗？ Redis \\1. 用过哪些Redis的数据结构？ \\2. key大小有限制吗? \\3. 怎么解决BigKey问题？ \\4. Hash结构可以设置过期时间吗？ RocketMQ \\1. Rocketmq有哪些特性？ \\2. 延迟队列你清楚吗？ ES ES 和 MySQL 有什么区别？ 短链接项目 \\1. 长链变成短链的算法？ \\2. 数据库的主键ID你是怎么维护的？ \\3. 布隆过滤器的特点？怎么改进？ 场景 你们辅导员有一个比较大的表格，有一万行到 10 万行不等的这样的一个数据，大小的话可能在 500MB或者1G 之间，然后需要让你提供给辅导员一个工具把这个表格上传到服务器，然后数据一行一行地保存到数据库当中，如果这个功能交给你去实现的话，你会怎么考虑？内存是够的，你要考虑一下整个一个交互层面，有可能这些数据有错误，怎么提示他？ 做题 \\1. SQL求成绩top k的学生，注意第k个学生可能有多个 \\2. 求用给定数组中的数字组成比给定目标数小的最大的数</p><p>https://www.nowcoder.com/discuss/353159535735021568</p><p>字节一面：</p><p>忘记了，和我上次那个一面问的差不多</p><p>手撕算法：K个有序链表，合成一个链表</p><p>优化方案：使用优先队列</p><p>字节二面：</p><p>和一面差不多，但是更深一点，有可能会问你实现</p><p>数据库：</p><p>隔离级别？</p><p>MVCC？在不同隔离级别下有什么不同（readview不同）</p><p>如何解决脏读</p><p>数据库的索引？ 数据库索引的实现？</p><p>缓存</p><p>AOF日志和快照</p><p>主从复制，哨兵</p><p>redis了解吗？</p><p>操作系统：</p><p>讲讲多线程编程（我的一个项目）</p><p>死锁</p><p>如何解决死锁</p><p>锁的实现</p><p>计算机网络：</p><p>什么是AIO</p><p>场景一：10万条数据，取最高的前9000条数据（我说快排，然后让我手撕快排）</p><p>手撕算法：实现sort，快排，可以结构体排序</p><p>场景二：10亿条数据，取最高的前9000条数据（优先队列，队列大小9000）</p><p>场景三：10亿条数据，取最高的前9亿条数据（大文件排序，归并排序等）</p><p>字节三面：</p><p>项目，问的很深。</p><p>项目面临的挑战。</p><p>职业规划是什么。</p><p>手撕算法：表达式求值，有括号，有乘除。</p><p>https://www.nowcoder.com/discuss/353159384089960448?sourceSSR=users</p><p>数据库方向： sql语句，建一个超级简单的表，手写。 答：会鼠标操作，不会语句操作，通常都是粘贴复制（当问完第一个问题，我就已经知道结果了） 回顾： creat table mytable( #int 类型，不为空，自增 id INT NOT NULL AUTO_INCREMENT, #int 类型，不为空，默认值1 col1 INT NOT NULL DEFAULT 1, #可变长字符串类型，最长为45个字符，可以为空 col2 VARCHAR(45) NULL, # 日期类型，可为空 col3 DATE NULL, # 设置主键为id PRIMARY KEY(&#39;id&#39;); ) 什么是数据库的原子性？ 回顾： 事务被视为不可分割的最小单位，事务的所有操作要么全部提交成功，要么全部失败回滚 回滚可以用回滚日志（Undo log）来实现，回滚日志记录着事务的所执行的修改操作，在回滚时反向执行这些操作即可。 数据库的隔离级别？ 四种隔离级别 隔离级别的实现方式？ 回顾：第一种隔离级别要求低不用无需实现，第二种和第三种可以使用MVCC来实现，第四种可以对所有行都加锁来实现。 这四种隔离级别可以解决三种问题，分别是脏读，不可重复读，幻读。 在innodb下，第三种隔离级别下可以解决幻读的问题。脏读是在多次范围查询的时候，查询结果不一样。 解决脏读的方式是MVCC+间隙锁和next-key lock机制。 那你讲一讲MVCC机制吧？ 如果版本号再最小版本号和最大版本号之间怎么办？ 数据库的索引？ 数据库索引的实现？ B+树的结构 数据库的锁有哪些？</p><p>网络方向： 讲下http和tcp？ http请求和响应报头都有什么？ 回顾：第一行是包含了请求方法、url、版本协议； 接下来的多行都是请求首部Header，每个首部都有一个首部名称，以及对应的值。 一个空行用来分隔首部和内容主体Body 最后是请求的内容主体 响应报文结构“ 第一行包含协议版本、状态码以及描述 接下来多行也是首部内容 一个空行分割首部和内容主体 最后是响应的内容主体 讲一下url请求过程？ 回顾： 1、DNS解析域名成IP地址 2、生成http请求报文 3、传输层建立TCP连接 4、网络层使用IP协议选择路线 5、数据链路层实现网络相邻节点间可靠的数据通信 6、物理层传输数据 那你说一下DNS是如何解析域名的？ 回顾： 1、浏览器先检查自身缓存种有没有被解析过的这个域名对应的IP地址（浏览器先看） 2、未命中，浏览器会检查操作系统缓存中有没有对应的已解析过的过的结果（系统缓存） 3、还未命中，请求本地域名服务器（LDNS） 4、还未命中，跳到RootServer域名服务器请求解析 5、根域名服务器返回给LDNS一个所查询域的主域名服务器地址 6、此时LDNS再发送请求给上一步返回的gTLD 7、接受请求的gTLD查找并返回这个域名对应的Name Server的地址，这个Name Server就是网站注册的域名服务器 \\8. Name Server根据映射关系表找到目标ip，返回给LDNS \\9. LDNS缓存这个域名和对应的ip \\10. LDNS把解析的结果返回给用户，用户根据TTL值缓存到本地系统缓存中，域名解析过程至此结束 讲一下tcp的滑动窗口？ 回顾：如果没有滑动窗口，发送方收到一个确认才会发送下一个。传输往返越长，通信效率越差 为了解决这个问题，TCP引入了窗口的概念 有了窗口，无需等待，确认，继续发送数据。 当收到700的确认应答，无论前面是否收到确认，都可以判断已经收到。这个模式叫做累计确认或者累计应答。 TCP头里面有个字段叫做window，也就是窗口大小，在三次握手的时候，进行设置。 发送端可以通过滑动窗口（处理能力）来发送数据，而不会导致接收端处理不过来。 滑动窗口使用三个指针来跟踪这四个传输类别。</p><p>操作系统： 来说一下死锁： 条件：互斥、占有和等待、不可抢占、环路等待 在这种情况下会产生死锁。 如何避免死锁？ 银行家算法，找到安全序列 说一下进程和线程的区别？ 线程是独立调度的基本单位 进程是资源分配的最小单位 线程之间通信方式？</p><p>算法 0-9组成的环中，初始值在0，每次可以顺时针和逆时针走1步，问你走n步，仍然在0位置的方法个数。</p><p>https://www.nowcoder.com/discuss/565102127207440384</p><p>字节后端面经</p><p>\\1. 问实习经历，但是拷打的是自己的项目，正规的规则引擎了解过吗，没有。</p><p>\\2. 浏览器键入网址全过程</p><p>\\3. http为什么是无状态</p><p>\\4. 死锁条件</p><p>\\5. 子网掩码的作用</p><p>\\6. mysql b+树和b树</p><p>\\7. redis数据结构，用什么结构实现延迟消息队列</p><p>\\8. redis分片集群，如何分片的，有什么好处</p><p>\\9. jvm内存分布，有垃圾回收的是哪些地方</p><p>\\10. spring的aop是如何实现的</p><p>\\11. 算法： 数组最大子串和 经过提示才写对，太菜了</p><p>面完一个小时约二面。</p><p>【二面】</p><p>\\1. 判断字符串四种括号是否合法-有一点问题，经过提醒调试后解决了。</p><p>\\2. 写两道sql题，第一道写出来了，第二道还在想，没给时间了。</p><p>\\3. Linux命令熟吗，在log文件中查找所有IP，不会正则，没写出来。。。</p><p>\\4. 线程安全单例模式</p><p>\\5. 合并k个有序数组</p><p>中间加了道八股，redis过期删除和内存淘汰策略</p><p>全程60min，一直在做题，后面时间刚好到了就马上下线了，甚至没给反问环节</p><p>体验不是很好，当然自己确实太菜了，这辈子与字节无缘了。</p><p>八股文答案如下：</p><p><strong>4. 死锁条件</strong></p><p>死锁是指在并发系统中，两个或多个进程因为互相等待对方释放资源而无法继续执行的状态。</p><p>死锁发生的条件通常包括以下四个条件：</p><ul><li>互斥条件（Mutual Exclusion）：至少有一个资源被标记为只能被一个进程占用，即一次只能有一个进程使用该资源。</li><li>请求与保持条件（Hold and Wait）：一个进程在持有至少一个资源的同时，又请求其他进程占用的资源。</li><li>不可剥夺条件（No Preemption）：已经分配给一个进程的资源不能被强制性地剥夺，只能由持有该资源的进程主动释放</li><li>循环等待条件（Circular Wait）：存在一个进程资源的循环链，每个进程都在等待下一个进程所占用的资源。</li></ul><p>当这四个条件同时满足时，就可能发生死锁。为了避免死锁的发生，可以采取一些策略，如资源预分配、避免循环等待、引入资源剥夺等。</p><p><strong>5. 子网掩码的作用</strong></p><p>子网掩码是用于划分网络地址和主机地址的一个32位二进制数。</p><p>它与IP地址结合使用，用于确定一个IP地址中哪些位表示网络地址，哪些位表示主机地址。</p><p>子网掩码的作用主要有两个方面：</p><ul><li>确定网络地址：子网掩码通过将IP地址中的网络部分与主机部分进行分隔，将网络地址和主机地址进行划分。子网掩码中的1表示网络部分，0表示主机部分。通过与IP地址进行逻辑与运算，可以得到网络地址。</li><li>确定主机地址范围：子网掩码中的0表示主机部分，确定了主机地址的范围。主机地址范围是指在同一个网络中可以分配给主机的不同IP地址。子网掩码中主机部分的位数决定了主机地址的数量，可以根据主机地址范围来分配IP地址给不同的主机。</li></ul><p>子网掩码的正确配置对于网络通信的正常运行非常重要。它可以帮助路由器和交换机等网络设备正确地识别网络地址和主机地址，实现数据的正确传输和路由。</p><p><strong>6. mysql b+树和b树</strong></p><p>B+树和B树都是常用的索引结构，用于在数据库中进行高效的数据检索。</p><p>它们的主要区别在于叶子节点的结构和使用方式。</p><p>B树（B-Tree）是一种平衡多路搜索树，它的特点是每个节点可以存储多个关键字和对应的数据指针。</p><p>B树的节点分为内部节点和叶子节点，内部节点存储关键字和指向子节点的指针，叶子节点存储关键字和对应的数据指针。</p><p>B树的特点是所有叶子节点都在同一层级上，通过内部节点的指针可以快速定位到叶子节点。</p><p>B树适用于磁盘存储等场景，可以减少磁盘I/O次数，提高检索效率。</p><p>B+树（B+ Tree）是在B树的基础上进行了改进，它的特点是所有关键字都存储在叶子节点上，而内部节点只存储关键字和指向子节点的指针。</p><p>叶子节点之间通过指针连接形成一个有序链表，可以支持范围查询和顺序遍历。</p><p>B+树的内部节点相对较小，可以存储更多的关键字，减少了树的高度，提高了检索效率。B+树常用于数据库索引的实现，可以支持高效的范围查询和排序操作。</p><p>总结来说，B树适用于磁盘存储等场景，可以减少磁盘I/O次数；而B+树适用于数据库索引等场景，可以支持范围查询和顺序遍历。两者都是常用的索引结构，根据具体的应用场景选择适合的索引结构可以提高数据库的性能。</p><p>\\7. redis数据结构，用什么结构实现延迟消息队列</p><p>对于实现延迟消息队列，可以使用有序集合（Sorted Set）结构来存储消息。将消息的执行时间作为分数，消息内容作为成员，按照分数进行排序。通过定时任务或者轮询方式，检查有序集合中的消息，当消息的执行时间到达时，取出消息进行处理。</p><p>具体实现时，可以使用Redis的ZADD命令将消息添加到有序集合中，使用ZRANGEBYSCORE命令按照分数范围获取需要执行的消息，使用ZREM命令从有序集合中删除已经执行的消息。</p><p>添加消息：使用有序集合的ZADD命令，将消息作为成员添加到有序集合中，同时指定一个分数（score）作为消息的优先级或执行时间。分数可以是一个时间戳或其他有序的值，用于排序消息。</p><p>取出消息：使用有序集合的ZRANGE命令，按照分数范围获取需要执行的消息。可以设置获取的消息数量，也可以设置获取的分数范围。获取到的消息是按照分数从小到大排序的。</p><p>执行消息：获取到消息后，进行相应的处理操作。可以是执行具体的业务逻辑，发送消息给其他系统，或者进行其他操作。</p><p>删除消息：使用有序集合的ZREM命令，从有序集合中删除已经执行的消息。删除消息可以避免重复处理。</p><p>定时任务或轮询：为了实现消息的自动执行，可以使用定时任务或者轮询方式，定期检查有序集合中的消息。根据消息的分数判断是否到达执行时间，如果是则取出消息进行处理。</p><p>有序集合实现消息队列的优势在于：</p><ul><li>消息有序：有序集合会根据分数对消息进行排序，可以按照优先级或执行时间顺序处理消息。</li><li>支持延迟消息：通过设置不同的分数，可以实现延迟消息的处理，即在指定的时间后才会被取出执行。</li><li>支持优先级：可以根据分数设置消息的优先级，高优先级的消息会被优先处理。</li><li>支持批量获取：可以一次性获取多个消息，提高处理效率。</li><li>支持范围查询：可以按照分数范围获取消息，实现范围查询的功能。</li></ul><p>需要注意的是，使用有序集合实现消息队列时，需要根据实际需求合理设置消息的分数和处理逻辑，以及定时任务或轮询的频率，以达到预期的消息处理效果。</p><p>使用Redis作为延迟消息队列的好处是，它具有高性能、持久化、可靠性等特点，并且提供了丰富的命令和数据结构，方便进行消息的添加、获取和删除操作。</p><p><strong>8. redis分片集群，如何分片的，有什么好处</strong></p><p>Redis分片集群是通过将数据分散存储在多个Redis节点上来实现数据的分片和负载均衡。</p><p>具体来说，Redis分片集群将数据按照一定的规则（如哈希算法）分配到不同的节点上，每个节点负责存储和处理一部分数据。</p><p>分片集群的好处如下：</p><ul><li>扩展性：通过增加节点，可以线性扩展集群的存储和处理能力，提高系统的吞吐量和并发性能。</li><li>负载均衡：将数据分散存储在多个节点上，可以均衡每个节点的负载，避免单个节点成为瓶颈，提高系统的稳定性和可用性。</li><li>容错性：当某个节点发生故障或宕机时，其他节点仍然可以继续提供服务，保证系统的可靠性和持久性。</li><li>高可用性：通过复制机制，每个分片可以有多个副本，当主节点发生故障时，可以自动切换到备用节点，实现高可用性。</li></ul><p>需要注意的是，Redis分片集群也存在一些挑战和限制，如数据一致性、跨节点事务等问题，需要根据具体的业务需求和场景来选择合适的分片策略和解决方案。</p><p><strong>9. jvm内存分布，有垃圾回收的是哪些地方</strong></p><p>VM（Java虚拟机）内存分布主要包括以下几个区域：</p><ol><li>方法区（Method Area）：用于存储类的结构信息，如类的字段、方法、常量池等。在JDK 8及之前，方法区被称为&quot;永久代&quot;（Permanent Generation），而在JDK 8及之后，被移除了永久代，改为使用元空间（Metaspace）来存储。</li><li>堆（Heap）：用于存储对象实例。堆是Java程序中最大的一块内存区域，被所有线程共享。堆被划分为新生代（Young Generation）和老年代（Old Generation）两部分。新生代又分为Eden空间和两个Survivor空间。</li><li>虚拟机栈（VM Stack）：每个线程在运行时都会创建一个栈，用于存储局部变量、方法参数、返回值等。栈中的每个栈帧对应一个方法的调用，包括方法的局部变量表、操作数栈、动态链接、方法返回地址等。</li><li>本地方法栈（Native Method Stack）：与虚拟机栈类似，但是用于执行本地方法（Native Method）。</li><li>程序计数器（Program Counter）：用于记录当前线程执行的字节码指令的地址。</li></ol><p>垃圾回收主要发生在堆和方法区（或元空间）中。</p><p>在堆中，垃圾回收器会自动回收不再被引用的对象，释放内存空间。在方法区（或元空间）中，垃圾回收主要针对无用的类和常量进行回收。</p><p>需要注意的是，不同的垃圾回收器有不同的工作方式和策略，如串行回收器、并行回收器、并发回收器等。它们会根据具体的配置和场景来决定何时进行垃圾回收以及如何回收。</p><p><strong>10. spring的aop是如何实现的</strong></p><p>Spring的AOP（面向切面编程）是通过动态代理实现的。</p><p>在Spring中，AOP通过在运行时动态地将切面织入到目标对象的方法中，从而实现横切关注点的模块化。</p><p>Spring AOP的实现方式有两种：基于代理的经典AOP和基于字节码的AspectJ AOP。</p><ul><li>代理的经典AOP：JDK动态代理：基于接口的代理，通过java.lang.reflect.Proxy类和InvocationHandler接口实现。Spring使用JDK动态代理来代理实现了接口的目标对象。CGLIB动态代理：基于继承的代理，通过CGLIB库生成目标对象的子类来实现代理。Spring使用CGLIB动态代理来代理没有实现接口的目标对象。</li><li>基于字节码的AspectJ AOP：AspectJ是一个独立的AOP框架，它提供了更强大和灵活的AOP功能。Spring可以集成AspectJ，使用AspectJ注解或XML配置来定义切面和切点，然后通过编译时或运行时的织入方式将切面织入到目标对象中。</li></ul><p>在Spring中，通过配置文件或注解来定义切面和切点，然后使用AOP代理将切面织入到目标对象的方法中。</p><p>当目标对象的方法被调用时，AOP代理会在方法执行前、执行后或抛出异常时执行切面的相关逻辑，实现横切关注点的功能，如日志记录、事务管理等。</p><p>需要注意的是，Spring AOP是基于代理的AOP，只能代理方法调用，而不能拦截对象的内部方法调用。如果需要更细粒度的控制和更强大的AOP功能，可以考虑使用AspectJ。</p><p><strong>3. Linux命令熟吗，在log文件中查找所有IP，不会正则，没写出来。</strong></p><p>要在日志文件中查找所有IP，可以使用以下命令组合：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-oE</span> <span class="token string">&quot;([0-9]{1,3}.){3}[0-9]{1,3}&quot;</span> logfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令使用<code>grep</code>命令来搜索文件中的文本，并使用正则表达式来匹配IP地址。具体解释如下：</p><ul><li>-o选项表示只输出匹配到的内容，而不是整行；</li><li>-E选项表示使用扩展的正则表达式；</li><li>表示单词边界，用于确保匹配的是完整的IP地址；</li><li>[0-9]{1,3}表示匹配1到3位数字；</li><li>.表示匹配点号。</li></ul><p>将<code>logfile</code>替换为你要搜索的日志文件的路径和文件名。执行命令后，它将输出日志文件中所有匹配到的IP地址。</p><p><strong>4. 线程安全单例模式</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 私有构造函数</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，使用了双重检查锁定（Double-Checked Locking）来确保线程安全。关键点如下：</p><ul><li>volatile 关键字用于保证可见性，确保多线程环境下对 instance 的正确访问。</li><li>在 getInstance() 方法中，首先检查 instance 是否已经被实例化，如果没有，则进入同步块。</li><li>在同步块内部，再次检查 instance 是否为 null，如果是，则创建一个新的实例。</li><li>使用双重检查的方式可以减少锁的竞争，提高性能。</li></ul><p>这样，无论多少个线程同时调用 <code>getInstance()</code> 方法，都只会返回同一个实例，确保了线程安全的单例模式。</p><p><strong>中间加了道八股，redis过期删除和内存淘汰策略</strong></p><p>Redis中有两种方式来处理过期键（expired keys）和内存淘汰（eviction）：过期删除和内存淘汰策略。</p><ul><li>过期删除（Expired Keys Deletion）： Redis使用过期删除策略来处理过期键。当一个键的过期时间到达时，Redis会在键被访问时检查它是否过期，并在访问时删除过期的键。这种方式确保了过期键在被访问时被删除，但可能会导致一些性能开销。</li><li>内存淘汰策略（Eviction Policy）： 当Redis的内存使用达到上限时，需要淘汰一些键来释放内存空间。Redis提供了多种内存淘汰策略，用于确定要淘汰的键。</li></ul><p>常见的内存淘汰策略有：</p><ul><li>LRU（Least Recently Used）：淘汰最近最少使用的键。</li><li>LFU（Least Frequently Used）：淘汰最不经常使用的键。</li><li>Random（随机）：随机选择要淘汰的键。</li><li>TTL（Time To Live）：淘汰具有最早过期时间的键。</li></ul><p>可以通过配置Redis的maxmemory-policy参数来选择所需的内存淘汰策略。默认情况下，Redis使用的是noeviction策略，即不淘汰任何键，当内存使用达到上限时，写操作会报错。需要注意的是，过期删除和内存淘汰策略是不同的概念。过期删除是处理过期键的机制，而内存淘汰策略是处理内存空间不足时的策略。它们可以同时使用，以确保Redis的内存使用和键的过期管理。</p><h2 id="momenta" tabindex="-1"><a class="header-anchor" href="#momenta" aria-hidden="true">#</a> momenta</h2><p>https://www.nowcoder.com/discuss/562298293972111360</p><p>\\1. 项目、主要做的内容（实验室的项目，没问多深）</p><p>\\2. go哪些数据类型是线程安全的（记错了一些）</p><p>\\3. map的两种扩容方式（没看过，答成溢出桶方向了）</p><p>\\4. map可寻址吗</p><p>\\5. 读已经close的channel会怎么样</p><p>\\6. 生产者、消费者用有缓存channel通信场景，如何让生产者和消费者退出</p><p>\\7. GMP中调度机制，有了解过hand off机制吗</p><p>\\8. mysql的事务隔离</p><p>\\9. mysql B+树中主键为big int，数据大小1K，页大小16K，3层能存多少数据</p><p>\\10. 有没有用过redis，持久化机制</p><p>\\11. 四次挥手中TIME_WAIT状态的作用（答得有点混乱）</p><p>\\12. 算法：全排列</p><h2 id="七牛云" tabindex="-1"><a class="header-anchor" href="#七牛云" aria-hidden="true">#</a> 七牛云</h2><p>https://www.nowcoder.com/feed/main/detail/ab1ee229fafc4848a6be160db8d68ca0</p><p>4.讲讲分布式理论基础 5.有了解过共识算法吗，如Paxos 6.Gossip 协议的作用是什么 7.你是依据什么标准来拆分服务的 8.Redis提供了哪些持久化手段 9.Redis7里面引入了多线程模式，你觉得这个适用于什么场景 10.fork的工作原理能描述下吗 11.主进程挂掉后，子进程如果不挂的话会被谁托管 12.fork子进程时，它们是什么时候开始“分家”，在一个什么样的时机 13.有用过定时器的经验吗？假如让你设计一个定时器，它背后依赖于什么算法/数据结构 14.消息队列中如何保证不会重复消费</p><h2 id="商汤" tabindex="-1"><a class="header-anchor" href="#商汤" aria-hidden="true">#</a> 商汤</h2><p>https://www.nowcoder.com/discuss/562672239863140352</p><p>项目如何部署？</p><p>部署后如何查看项目的日志？</p><p>有没有为项目建立监控系统，收集性能指标</p><p>项目中使用redis缓存了哪些数据？</p><p>使用redis缓存数据时如何保证数据的一致性？</p><p>能展开讲一下knife4j吗？（简历里面写了knife4j）</p><p>项目中如何对接口进行测试？有接触过哪些测试工具？</p><p>项目中遇到过什么困难？展开讲讲</p><p>数据库中表是如何设计的？</p><p>你在简历上写使用redis缓存数据来解决高并发情况下MySQL数据库性能瓶颈问题？什么场景下会有MySQL性能瓶颈问题？</p><p>项目中哪些地方用到了docker，是如何使用docker部署项目的？（项目中有写docker+jenkins部署项目）</p><p>docker日志你用过吗？</p><p>微服务项目中微服务是如何管理的？</p><p>除了Java还了解其他语言？有接触过go语言吗？</p><p>数据库中索引使用什么数据结构？为什么？</p><p>B+树相比于B树存储索引有什么优点？有没有数据使用B数作为索引的存储结构？</p><p>数据库中有哪些事务隔离级别？</p><p>HTTP2相比于HTTP1有什么区别？</p><p>除了HTTP你有使用RPC协议吗？</p><p>HTTP1底层协议是什么？为什么不使用UDP？</p><h2 id="哈罗" tabindex="-1"><a class="header-anchor" href="#哈罗" aria-hidden="true">#</a> 哈罗</h2><p>https://www.nowcoder.com/feed/main/detail/6828633540a846bc91642a82f1234975</p><p>1、自我介绍 2、说一说Java中的IO流的使用过程，比如写入内容到文件中的过程是什么样的，会用到哪些API？ 3、BIO、NIO的区别？NIO中的核心组件有哪些？ 4、说一说SpringBoot和SpringCloud的区别以及他们之间的关系？如果我要在SpringCloud项目中引入SpringBoot，应该怎么做？ 5、系统A调用系统B的服务，如果B的服务出错了应该如何保证系统A的正常运行？ 6、在不抛出异常的情况下，假如说系统B对服务返回的结果并不关心，又该如何保证系统A和系统B都能够正常运行？ 7、数据库查询慢的原因应该怎么排查？ 8、volatile是做什么的？他是如何保证有序性的？内存屏障的底层实现知道吗？ 9、在多并发的情况下，如果我需要记录程序运行中的信息，但又不能耽误主线程的运行，应该怎么做？ 10、MVCC机制的过程详细讲一下？有想过为什么隔离级别越高反而不建议使用的原因吗？</p><h2 id="美团" tabindex="-1"><a class="header-anchor" href="#美团" aria-hidden="true">#</a> 美团</h2><p>https://www.nowcoder.com/feed/main/detail/81f68f83336d4b56bdeb6fc67507a952</p><p>说一下操作系统是啥 ​进程与线程区别 ​进程与进程通信方法说一下 ​多路复用说一下 ​进程调度说一下 ​零拷贝说一下 ​页调度说一下</p><p>OSI模型说一下 tcp 说一下 udp说一下 输入url后流程 tcp三握四挥 https说一下 常见网络攻击方法说一下</p><p>mysql查询优化说一下 索引都有哪几种 红黑树介绍一下 数据库查询回表说一下 mysql锁说一下 mysql 事务特性说一下 脏读幻读不可重复读讲一下 mysql隔离级别说一下</p><p>常见数据结构说一下 哈希表说一下 哈希冲突怎么办 为什么用算法 常见排序算法说一下</p><p>写题 插入排序</p><h2 id="未知" tabindex="-1"><a class="header-anchor" href="#未知" aria-hidden="true">#</a> 未知</h2><p>1java集合 （常规八股 hashmap list这些，着重将hashmap） 2类加载过程 3spring加载bean的过程 4.spring底层动态代理和jdk的动态代理 5.元数据区和clazz数组对比，动态代理会不会产生类元数据放在哪里 5.多线程 多线程实现方式 线程实现方式，completeablefuture底层实现方式为什么要使用自定义线程池，线程池核心参数线程池关闭的方式（我说了两个方式） 6.aqs cas aba java中哪些地方还是用到了aqs （我只说了两个一个reenetrlock，一个线程池底层的woker） 后面面试官说还有那些coutdownlanuch，说说这个应用场景 7.类加载机制，双亲委派，如何打破双亲委派，应用场景 8.spi机制jdbc怎么实现的 9.docker 底层是怎么实现的</p>`,217);function R(I,M){const n=l("ExternalLinkIcon");return t(),o("div",null,[r,p("p",null,[p("a",d,[e("小米日常实习二面_牛客网 (nowcoder.com)"),a(n)])]),u,h,m,k,w,p("p",null,[p("a",v,[e("快手一面（八股+算法）_牛客网 (nowcoder.com)"),a(n)])]),b,g,f,S,y,P,A,L,p("p",null,[p("a",_,[e("贝壳找房 秋招 Java 一二面+HR面（已挂）_牛客网 (nowcoder.com)"),a(n)])]),C])}const T=i(c,[["render",R],["__file","java.html.vue"]]);export{T as default};
