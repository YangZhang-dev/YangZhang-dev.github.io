---
title: markdown的使用
order: 1
author: zzys
date: 2023-03-10
category:
- 工具
tag:
- markdown语法
---

## 目录

typora:
`[toc]`

vuepress:
`[[toc]]`

## 角标

You can create footnotes like this[^fn1] and this[^fn2].
`[^fn1] and this[^fn2].`

## 任务列表

- [ ] task 1
- [x] task 2

`- [ ] task 1 - [x] task 2`

## 图片

![](https://blog-zzys.oss-cn-beijing.aliyuncs.com/articles/ebdf76de22da51a3c6f512d81e5ecde5.png)

## 链接

内部跳转：[跳转角标](#角标)

快捷链接：[Google][]

所有的链接都可以加标题，鼠标悬浮试试：[链接标题为：test](http://baidu.com "test")
`[链接标题为：test](http://baidu.com "test")`

## 样式

_sd_

*sd*

`sd`

**sd**

__sd__

~~sd~~

==ss==

> test

## 表情

:smile:

## 简单公式

X~long\ text~
`X~long\ text~`
H~2~O
`H~2~O`
X^2^
`X^2^`
## 数学公式

$a = b$

## iframe

<iframe height='365' src='https://www.mubu.com/doc/2Ught8SETJ6#m' style='width: 100%;'></iframe>

<iframe height='265' scrolling='no' title='Fancy Animated SVG Menu' src='http://codepen.io/jeangontijo/embed/OxVywj/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

## comment

<!-- I am some comments
not end, not end...
here the comment ends -->






[Google]:http://baidu.com	"May be redirect to Baidu"
[^fn1]: Here is the *text* of the first **footnote**.
[^fn2]: Here is the *text* of the second **footnote**.

