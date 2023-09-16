---
title: network-ttd-summary

order: 1
author: zzys
date: 2023-05-12
category:
- 笔记
tag:
- 计网
- 计网概述
---



本章主要是让我们对计算机网络有一个初步的认识，刚开始可能读的有一点模糊，不过随着后面的章节学习，很多知识都会前后呼应。

## 1. 什么是因特网

### 1.1 具体功能描述

计算机网络在我看来就是所有能联网的设备组成的网络，不仅仅是pc和服务器。这些设备被称为主机或是端系统。

端系统之间通过**通信链路**（communication link）和**分组交换机**（packet switch）连接在一起。链路的**传输速率**（transmission rate）以比特每秒度量。在端系统之间进行交换消息时，发送放将数据分段，加入首部字节，形成**分组**（packet），也称为包。

分组交换机会从一条入通信链路获取到达的分组，并转发到它的一条出通信链路。两种常见的分组交换机分别是**路由器**（router）和**链路层交换机**（link-layer switch），它们一个工作在三层，一个工作在二层。一个分组从发送端到接收端会经历一系列的通信链路和分组交换机。

端系统会通过因特网服务提供商（Internet Service Provider，ISP）来接入因特网。

同时，端系统，分组交换机和其他的部件都要运行多个**协议**（protocol），这些协议控制信息的接受和发送。TCP和IP协议是最主要的两个协议。

<img src="http://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/因特网的一些组成.jpg" alt="因特网的一些组成" style="zoom: 25%;" />

## 2. 网络边缘

通常端系统处于网络的边缘，所以称为网络边缘。端系统也称为主机，可以分为**客户**（client）和**服务器**（server）。

### 2.1 接入网

接入网是将端系统物理连接到**边缘路由器**（edge router）的网络。

家庭接入有：DSL，电缆，FTTH（光纤），5G固定式无线。

企业和家庭接入：以太网，WIFI

### 2.2 物理媒介

物理媒介分两种：引导型媒介（沿着固体媒介传播）和非引导型媒介（在空气或外层空间传播）。

物理媒介大概有以下几种：双绞铜线，同轴电缆，光纤，陆地无线电信道，卫星无线电信道。

## 3. 网络核心

网络核心即由连接端系统的分组交换机和链路组成的网状网络。

### 3.1 分组交换

我们设某端系统要发送一个$L\ bit$的分组，链路传输的效率为$R\ bps$，则传输该分组所需要的时间为$L/R\ s$ 。

交换机在开始向输出链路转发该分组的第一个bit之前，必须接收到整个分组，这被称为**存储转发传输**。考虑P个分组通过N个交换机到达目的系统（不考虑传播时延）所需的时间为多长：$(N+P-1)*L/R\ s$。

每台分组交换机的每个链路都有一个**输出缓存**（output buffer）或**输出队列**（output queue）。它用于缓存准备转发的分组。如果某个分组所需要的链路正在工作，那么就需要进入等待，称为**排队时延**。由于缓存空间是有限的，在出现空间充满的情况下，就会发**分组丢失**（packet loss）现象，到达的分组或已经在排队的分组或丢弃一个。

每台路由器中存在一张**转发表**，用于将目的地址（或目的地址的一部分）映射为输出链路。每当一个分组到达路由器中，通过扫描转发表，确定下一条合适的路线。同时，因特网中有一些特殊的**路由选择协议**（routing protocol）用于自动的配置这些转发表。

### 3.2 网络中的网络

<img src="http://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/ISP的互联.jpg" alt="ISP的互联" style="zoom: 25%;" />

详见P22页。

## 4.分组交换网中的时延，丢包和吞吐量

### 4.1 时延

分组从源系统到目的系统，会经历很多时延，比较重要的是以下几种。

1. 处理时延

   在分组到达路由器后会对分组进行一系列的检查，包括检查分组首部和决定将该分组导向何处，检验差错等。

2. 排队时延

   在队列中，分组在链路上等待传输，将经受排队时延。排队时延取决于排队的分组数量。

3. 传输时延

   将所有分组的比特推向（发射）链路所需要的时间。

4. 传播时延

   两端之间传输所需要的时间，受物理媒介的影响。

关于传输时延和排队时延我的理解是，可以将它们看作水管，传输时延就是多少时间能过将所有的水从水管中射出，而水在脱离水管后到下个地方的时间就是传播时延。那么影响传输时延的因素更可以类比为一个系统瞬时并发推送的能力。

### 4.2 排队时延和丢包

设$a$为分组到达输出队列的的平均速率，单位：$pkt/s$。$R$是传输速率，所有分组都是$L\ bit$组成的，则$La / \ R$被称为**流量强度**（traffic intensity）。如果$La /\ R > 1$，那么该队列的长度将会趋近于无限多，所以：**设计系统是流量强度不能大于1。**

当流量强度不断变大时，显然不可能放得下所有分组，所以就会发生丢包，路由器会丢弃该分组。

### 4.3 计算机网络中的吞吐量

如果有主机A向主机B传送一个文件，那么**瞬时吞吐量**是指主机B接收到该文件的速率（bps）。若大小是Fbit，用时Ts，那么平均吞吐量是$F/T\ bps$。

在多链路中，整体的吞吐量受限制于瓶颈链路，即$min\{R_0,R_{1}...R{i}\}$。

## 5. 协议层次及服务模型

### 5.1 分层的体系结构

我们将庞大而又复杂的体系进行分层，每层通过以下方式提供服务：

1. 在这层执行了某个操作
2. 使用下层的服务

使用这样的分层模式，改变某一服务的实现而不影响其他系统组件是一大优点。

在计算机网络中，构建了一层一层的**服务模型**（service model），每层通过自己的操作和直接执行下一层提供的服务来提供服务。

各层所有的协议总的被称为**协议栈**（protocol stack)。因特网的五层协议栈为

#### 5.1.1 应用层

应用层是网络应用程序及他们的应用层协议存留的地方，例如：HTTP，SMTP，FTP，DNS等。我们把位于应用层的信息称为**报文**（message）。

#### 5.1.2 运输层

运输层是在应用程序端点之间传输应用程报文。有两种最常见的协议分别是TCP和UDP。我们把位于运输层的信息称为报文段（segment）。

#### 5.1.3 网络层

网络层是负责在主机之间传输报文，著名的协议：网际协议（IP）就是位于这层。这层的信息称为**数据报**（datagram）。

#### 5.1.4 链路层

链路层将数据从一个节点（主机或路由器）移动到路径上的下一个节点。这层的信息称为**帧**（frame）。

#### 5.1.5 物理层

物理层的任务是将链路层的帧的一个一个bit从一个节点传到下一个节点。

### 5.2 封装

<img src="http://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/分组交换机.jpg" alt="分组交换机" style="zoom: 25%;" />

通过上图可以看出数据从发送端的协议栈向下在许多的分组交换机上上下下，最后到目的地后向上到达接收端的协议栈。链路交换机只实现了第一层和第二层，而路由器则实现了第一层到第三层。同时也体现出一个重要的概念：**封装**，数据通过协议栈将数据一步一步进行包装拆解。

## 6. 面对攻击的网络

1. 植入有害程序
2. 攻击服务器和基础设施（DDOS）
3. 嗅探分组，IP欺骗