---
title: go面经

order: 1
author: zzys
date: 2023-03-10
category:
- 面经
tag:
- 面试
- go
- 八股
---



1.平时怎么自学的

2.https加密过程（详细）

3.三次握手为什么是三次四次挥手为什么是四次

4.平时用gochannel的场景

5.gointerface接口GMP模型

6.goroutine泄漏问题

7.channel关闭后再写入会怎样->读写过程分别是怎样的

8.slice切片底层详细1024

9.MySQL索引类别优点缺点

10.Redis有哪些数据类型以及各种数据类型的底层结构这里比较详细说了很久

11.Redis集群是怎样存储数据的集群通讯过程

12.Redis集群查询数据保存在哪里

13.Redis集群哨兵有没有搭建经验

14.跟别人合作经验





自我介绍
协程和线程、进程的联系？
抢占是如何做到的？比如当前执行的中断，中断如何实现的？
中断之后，上下文如何保存？恢复之后，上下文如何恢复？
简单说一下Go里面Slice的实现，底层结构
切片是如何进行扩容的？
为什么大于1024的时候需要循环增加1/4它的容量？
一个切片里面append一个元素会发生什么？
扩容的具体过程怎么样的，你只说了容量的扩容，比如说扩容涉及到元素的拷贝，需要做数据拷贝吗？
容量不够的情况说完整一点
简单说一下GMP模型
执行一个系统调用，在GMP里面是怎么样一个流程？
Go里面channel里面有几种类型？（有无缓冲）
channel的作用，在Go里面有什么使用场景？
往一个关闭的channel里面读数据和写数据会发生什么？
带缓冲是什么样的情况，不带缓冲是什么样的情况
在一个带缓冲的channel里面读数据，一定为空吗？
简单说一下TCP和UDP的区别
什么叫稳定，什么叫不稳定？
除了数据可靠性，还有呢？
TCP连接建立的过程
为什么连接建立要这么复杂？
为什么需要三次？两次不行吗？
TCP的半连接了解吗？
半连接攻击怎么防护？
向浏览器里面输入一个网址，过程是怎么样的？（DNS，TCP）
HTTPS呢？
证书信任链，CA了解吗？
你一般用什么样的数据库？
MySQL的常见索引类型有哪些？
什么是聚簇索引？什么是非聚簇索引？
我们一般选择什么样的字段来建立索引？
索引的目的是什么？
通过什么样的方式来加快数据查找？
什么情况会影响，降低索引的查询效率？
建立了索引，查询的时候一定会用到索引吗？
什么样的情况不会用到索引？
什么是缓存雪崩？
如何解决缓存雪崩？
什么是缓存穿透？
如何防护缓存穿透？
什么是布隆过滤器？
布隆过滤器如何快速判断？
简单说一下简单的排序算法？
冒泡排序和快速排序的时间复杂度是怎样的？
有一个整型的无序数组，如何快速找出第k大的数





网易



1，不同包的多个init函数的运行时机（答得不好 没看过这里）

2，init和main函数的执行顺序 （init函数在main函数开始前执行）

3，如何删除切片中的某一个元素 （就说了一个通过append(a[:2],a[3:]...)）

4，sync.Map{}怎么使用  （使用Store存）

5，怎么控制去并发操作map（加锁）

6，go的读写锁怎么工作 （一大段支支吾吾后说了读写互斥）

7，如何保存程序崩溃时的数据 （不会，说了日志，在项目中聊到recover我就没想到这）

8，多个并发操作对map进行读写，程序会发生什么（给了两个选项，a:会继续执行 b:程序会崩溃，选了a，结果现在一查发现是b）

9，超时处理 （在网上查到用context.WithTimeout更好，我说的time.After）

10，对一个已经关闭的channel读写会发生什么 （如果不空的话，先读数据，空的话读对应类型的零值， 写的话会出现panic）

11，开五个协程 全部执行一个函数，怎么保证协程执行完全部打印（使用sync.WaitGroup ）