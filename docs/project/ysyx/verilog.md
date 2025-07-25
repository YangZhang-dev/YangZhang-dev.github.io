---
title: verilog

order: 1
author: zzys
date: 2025-04-14
category:
- ysyx
tag:
- verilog
---

电路描述语言，先设计电路后写程序。

<img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/0bbfe3a0cae3a6a7f6cd9e8ee9a288b9.png" alt="image-20250418095630474" style="zoom: 50%;" />

端口列表有输入输出类型（input、output、inout），数据信号类型（wire，reg），信号位宽

`output reg [3:0] S`

若声明`4'b100`则左补零为`0100`

`&4'0100`从左到右自己做与运算，结果只有一位

`>>>`算数右移，补符号位

assign 为连续赋值语句，只要输入改变，输出立刻计算，赋值目标必须是wire类型。

always为过程赋值语句，只当条件触发时执行，其余时间挂起。赋值目标必须是reg类型，条件分为边缘敏感和电平敏感：

```verilog
always @(posedge clk)
    
always @(negedge clk)
        
always @(a,b,c)  always @(a or b or c)
```

区别：
```verilog
// 只有当clk上升沿到来时才将D赋值给Q
always @(posedge clk) begin
    Q=D
end
// 只要D变化就将D赋值给Q
always @(Q) begin
    Q=D
end
```

always语句顺序执行，其他的语句并行执行。

阻塞赋值和非阻塞赋值：

<img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/e97743f6c83497de0df14e4fbf80b659.png" alt="image-20250414104248623" style="zoom:50%;" />

<img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/11cea7e82516284facd4a73ea5ba4b56.png" alt="image-20250414104305963" style="zoom:50%;" />

并发执行逻辑：

<img src="https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/2652cbd2b864c8db4e0c41543c8474e8.png" alt="image-20250418095827108" style="zoom:67%;" />