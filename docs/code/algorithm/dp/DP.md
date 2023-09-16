---
title: DP问题

order: 1
author: zzys
date: 2023-03-06
category:
- 笔记
tag:
- dp
- 算法
---



## 区间DP

所谓区间DP，即每一个dp值维护一个区间的状态值。

### 题目

设有 N 堆石子排成一排，其编号为 1,2,3,…,N。

每堆石子有一定的质量，可以用一个整数来描述，现在要将这 N 堆石子合并成为一堆。

每次只能合并相邻的两堆，合并的代价为这两堆石子的质量之和，合并后与这两堆石子相邻的石子将和新堆相邻，合并时由于选择的顺序不同，合并的总代价也不相同。

例如有 44 堆石子分别为 `1 3 5 2`， 我们可以先合并 1、21、2 堆，代价为 44，得到 `4 5 2`， 又合并 1、21、2 堆，代价为 99，得到 `9 2` ，再合并得到 1111，总代价为 4+9+11=24；

如果第二步是先合并 2、3 堆，则代价为 7，得到 `4 7`，最后一次合并代价为 11，总代价为 4+7+11=22。

问题是：找出一种合理的方法，使总的代价最小，输出最小代价。

**输入格式**

第一行一个数 N 表示石子的堆数 N。

第二行 N 个数，表示每堆石子的质量(均不超过 1000)。

**输出格式**

输出一个整数，表示最小代价。

**数据范围**

1≤N≤300

**输入样例**

```
4
1 3 5 2
```

**输出样例**

```
22
```

### 思考

因为题目要求只能合并相邻两堆，所以最后一步一定是两个连续的石堆合并，而每一个石堆又可以细分为连续的四个石堆，这样递归下去我们就可以发现可以使用DP来维护这个状态。

先看状态划分，我们规定`dp[i][j]`是将第i堆到第j堆石子合并的方案的代价集合。集合的属性是min。

再看状态的计算，对于一个由第1堆到第3堆石子合并的石堆[i,j]，我们可以将它分为`[1,1] + [2,3]、[1,2],[3,3]`。即我们可以按照划分线来进行状态的转移，每次的状态就是按照不同的划分线划分的状态的最小值。同时，求一段连续区间的和，这里也要用到前缀和。

最后是状态的初始化，当长度是一时，合并石子并没有代价，所以要将`dp[i][i]`初始化为0，由于求最小值，所以其余初始化为比较大的数。

### 代码

```c++
#include <iostream>
#include <cstring>
using namespace std;

const int N = 3e2 + 10;

int n;
int dp[N][N];
int s[N];

int main()
{
    cin >> n;
    for(int i = 1; i <= n; i++) cin >> s[i];
    
    for(int i = 1; i <= n; i++) s[i] += s[i - 1];
    
    memset(dp, 0x3f, sizeof dp);
    for (int i = 1; i <= n; i ++ )  
        dp[i][i] = 0;
        
    for(int len = 2; len <= n; len ++)
        for(int i = 1; i + len - 1 <= n; i++)
        {
            int l = i, r = i + len - 1;
            for(int k = l; k < r; k++)
                dp[l][r] = min(dp[l][r], dp[l][k] + dp[k + 1][r] + s[r] - s[l - 1]);
        }

    cout << dp[1][n];
    return 0;
}
```

### 模板

```c++
for (int len = 1; len <= n; len++) {         // 区间长度
    for (int i = 1; i + len - 1 <= n; i++) { // 枚举起点
        int j = i + len - 1;                 // 区间终点
        if (len == 1) {
            dp[i][j] = 初始值
            continue;
        }

        for (int k = i; k < j; k++) {        // 枚举分割点，构造状态转移方程
            dp[i][j] = min(dp[i][j], dp[i][k] + dp[k + 1][j] + w[i][j]);
        }
    }
}
```
