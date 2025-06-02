---
title: Makefile

order: 1
author: zzys
date: 2024-12-31
category:
- Makefile
tag:
- 杂记
---

## 双文件简单编译

```makefile
all: f

# 链接
f: f1.o f2.o
	gcc f1.o f2.o -o f
# 对于f1.o gcc会自动编译
# 而由于f2.o 我们需要指定头文件路径，故手动声明
f2.o:
	gcc -c f2.c -I./tt 
clean:
	rm -f f f1.o f2.o
```

## 复杂编译

.PHONY修饰的目标就是只有规则没有依赖，每次都执行。

## 符号

`@`表示静默执行，不显示这条命令

`$@`表示目标项，`$^`表示所有依赖文件。

```makefile
app: main.o utils.o
	@gcc -o $@ $^
```

等价于`gcc -o app main.o utils.o`，且静默执行。

## 内置函数

### patsubst

`$(patsubst %.c,%.o, a.c b.c)`

把字串“a.c b.c”符合模式[%.c]的单词替换成[%.o]，返回结果是“a.o b.o”

`OBJECTS=$(patsubst %.c,%.o,$(SOURCES))`生成源文件对应的目标文件名字。

### addprefix

`$(addprefix src/,foo bar)`

返回值为`src/foo src/bar`。