---
description: C语言指针复习
title: C语言指针复习
permalink: /C语言指针复习/
---
# 一、指针基础

## &和*运算符

`&变量名`该表达式的值，就是 该变量的地址编号

`*地址`  等价于   地址对应的那个变量本身

```
#include <stdio.h>
int main(){
	int a = 5;
	printf("%p\n",&a);
	*&a = 1000;
	printf("%d\n",a);
	return 0;
}
```

## 指针变量

```
#include <stdio.h>
int main(){
	int a = 5;
	int *p;
	p = &a;	
	printf("%p\n",p);
	*p = 1024;
	int b = *p;
	
	printf("a = %d\n", a);
	printf("b = %d\n", b);
	printf("*p = %d\n", *p);
	return 0;
}
```

练习：
	定义一个数组，用一个指针来保存该数组的最后一个元素的地址，通过该指针来修改  该数组的最后一个元素的值。

```c
#include <stdio.h>
int main(){
	int a[10] = {0,1,2,3,4,5,6,7,8,9};

    printf("此时a[9]为%d\n", a[9]);

    int *p = &a[9];
    *p = 10;
    printf("修改后a[9]为%d\n", a[9]);
    return 0;
}
```

用指针来实现 两个值的互换

```

```

## 野指针 与 空指针