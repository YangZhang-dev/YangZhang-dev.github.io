---
title: system-bus

order: 1
author: zzys
date: 2023-03-24
category:
- 笔记
tag:
- 计算机组成原理
---





## 1.总线的基本概念

计算机的五大部件之间互连有两种方式：分散连接和总线连接，目前使用的是总线连接。

总线是连接多个部件的信息传输线，是各部件之间共享的传输介质，在某个时刻，只允许一个部件向总线发送信息，而多个部件可以同时从总线接受相同的信息。

总线是由多传输线或通路组成，每条线可一位一位地传输二进制代码，若干条传输线可以同时传输若干位二进制代码。

## 2. 总线的分类

按照连接的部件不同可以分为以下三类：

### 2.1 片内总线

片内总线是指在芯片内部的总线，例如CPU内部，寄存器和寄存器之间，寄存器和ALU之间。

### 2.2 系统总线

系统总线是指在CPU、主存、IO设备各大部件之间的信息传输线。系统总线按照传输信息不同，分为：

- 数据总线

数据总线用来传输各功能部件之间的数据信息，它是双线传输总线，其位数和机器字长和存储字长有关，数据总线的位数称为数据总线宽度。如果数据总线的宽度是8位而指令字长为16位，那么CPU在取指令阶段必须两次访问主存。

- 地址总线

地址总线主要用来指出数据总线的元数据或目的数据在主存单元总的地址或IO设备的地址（端口），由CPU输出，单向传输。地址线的位数和存储单元的个数有关。

- 控制总线

控制总线用来使各部件能在不同的时刻占用总线使用权，用来发出各种控制信号的传输线，对于任一控制线，它是单向的，对于控制总线整体是双向的。

### 2.3 通信总线

用于计算机系统之间或计算机和其他的系统之间的通信。按传输方式可分为串行通信和并行通信。

## 3. 总线特性和性能指标

总线特性包括机械特性，电气特性，功能特性，时间特性。

总线的性能指标如下：

- 总线宽度：通常指的是数据总线的宽度。
- 总线带宽：单位时间内总线上传输数据的位数。
- 时钟同步\异步
- 总线复用：一条信号线上分时传送两种信号，例如将地址总线和数据总线共用一组物理线路。降低了总线带宽。
- 信号线数
- 总线控制方式
- 其他指标

## 4. 总线结构

可分为单总线结构和多总线结构，单总线结构故障率高。

## 5. 总线控制

对于什么时候由哪个部件发送消息，如何防止信息丢失等等问题由总线控制器统一管理。它主要包括判优控制（仲裁逻辑）和通信控制。

### 5.1 总线的判优控制

总线上的设备，按照其对总线有无控制权分为主设备和从设备，主设备对总线由控制权，从设备只能响应从主设备发来的总线命令，对总线没有控制权。若一个主设备想要和另一个设备进行通信时，首先要发出总线请求信号，当多个主设备请求时，就需要判优，仲裁逻辑。

总线的判优控制分为集中式和分布式两种，前者将控制逻辑集中在一处（CPU），后者将其分散在与总线连接的各个部件和设备上。常见的集中方式有以下三种：

#### 5.1.1 链式查询

链式查询如下图

<img src="http://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/总线判优的链式查询.jpg" style="zoom: 80%;" />

总线同意信号（BG）是串行的从一个IO设备到下一个IO设备，如果BG到达的接口有总线请求（BS）信号，BG信号就不在向下传递，并建立总线忙（BS）信号。可见距离控制部件最近的设备有最够的优先级。

在链式查询中只需要很少的几根线就能按照一定的优先次序实现判优控制，但是它对电路故障很敏感，且优先级低的设备很难获得请求。

#### 5.1.2 计数器定时查询

<img src="http://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/计数器定时查询.jpg" style="zoom:80%;" />

相较于链式查询，取消了BG线，增加了设备地址线。

总线控制部件接受到BS信号后，在BS未被使用的情况下（BS=0），总线控制部件的计数器开始计数，并通过设备地址线向各设备发出一组地址信号，当某个请求占用的总线设备地址和计数值一样时，便获取总线使用权，此时终止计数查询。

每次计数可以从0开始，这样优先级就固定下来了，也可以每一次从上一次的计数的重点开始，这样设备使用总线的优先级相同。这种方式对电力故障不敏感，但是增加了控制线的数量

#### 5.1.3 独立请求方式

<img src="http://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/独立请求方式.jpg" style="zoom:80%;" />

独立请求方式每一个设备都有一对BG和BS线，总线控制部件内部有排队电路，这种方式响应快，优先次序灵活，电路故障不敏感，但是控制线更多，总线控制更复杂。

链式查询仅使用3条线确定总线的使用权，计数器查询使用$log_2n + 2$条线，而独立请求使用2n条线。

### 5.2 总线通信控制

完成一次总线操作的时间称为总线周期，可分为以下阶段：

1. 申请分配阶段：由主模块提出申请，经总线仲裁机构决定下一传输周期的总线使用权授予某一申请者。
2. 寻址阶段：获得总线使用权的主模块通过总线发出本次要访问的从模块的地址和有关命令，启动从模块。
3. 传数阶段：主模块和从模块进行数据交换，数据由源模块流出，经数据总线流到目的模块。
4. 结束阶段：主模块的有关信息均从系统总线中撤出，让出总线使用权。

总线通信控制主要解救通信双方如何获知传输开始和传输结束，以及通信双方如何协调配合。通常由四个方式：

#### 5.2.1 同步通信

通信双方由统一的时标（时钟）控制数据的传送称为同步通信。时标通常由CPU的总线控制部件发出送到总线上的所有部件，也可以由部件各自的时序发生器发出，但是必须进行同步。

对于周期内的T1，T2，T3，T4都有明确的唯一的规定。

对于读命令：

1. 主模块发送地址
2. 主模块发送读命令
3. 从模块提供数据
4. 主模块撤销读命令，从模块撤销数据

对于写命令：

1. 主模块发送地址
2. 主模块提供数据
3. 主模块发出写命令，从模块在接受到命令后必须在规定的时间内将数据总线上的数据写到规定的地址上
4. 主模块撤销写命令和数据等信号

这种方式的优点是规定明确、统一，模块间的配合简单一致。缺点是主、从模块之间的时间配合必须强制性同步，对于不同速度的部件，必须按照最慢的部件来设计公共时钟，严重影响了效率。

同步通信一般用于总线长度较短，个部件之间存取时间比较一致的场合。

#### 5.2.2 异步通信

异步通信采用应答（握手）的方式进行通信，分为以下三个类型：

- 不互锁：主模块发出请求信号后，不必等待从模块的回答信号，而是隔一段时间自动取消请求信号
- 半互锁：主模块发出请求信号，必须等待接受到从模块的回答信号后再撤销请求信号，但是从模块在接到请求信号后不必获知主模块的请求信号是否取消，就可以隔一段时间自动撤销回答信号。
- 全互锁：前面和半互锁相同，但是从模块必须获知到主模块已经撤销了请求信号才可以撤销回答信号。

例子：在手术台上，医生伸手请求手术刀（主模块发出请求信号），护士拿出手术刀放至医生手中（从模块发出响应信号），待医生将手握紧后并将手收回后，护士松手（根据主模块撤销请求信号，从模块撤销回答信号）。

异步通信可用于并行传输和串行传输。异步串行通信对传输的数据格式有要求，通常约定格式为：一个起始位。5-8个数据位，1个奇偶校验位，1-2个终止位。起始位到终止位之间构成一帧，两帧之间的间隔是任意长度的

异步串行通信的数据传送效率有波特率来衡量，是单位时间内传送的二进制位数决定的。若只考虑有效数据位，可以使用比特率衡量。

#### 5.2.3 半同步通信

它既保留了同步通信的特点，有像异步通信那样，允许不同速度的模块工作。

#### 5.2.4 分离式通信

在半同步通信上，充分的挖掘系统总线每个瞬间的潜能，但是方式比较复杂，很少采用。