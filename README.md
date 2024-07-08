# React

## 零. 对react的介绍

#### 0.1 为什么要使用react

构建用户界面的库，集成了许多界面功能函数，它也是一种声明式编程方式

---

## 一.  JS复习

略

## 二. React基础

#### 2.1 react基础概念

react由可重用的构建模块、高代码相关性、核心分离三个重要概念组成

`jsx`允许编程人员能够在`.js`文件中编写`html`代码  

组件函数必须遵守的规则：

- 函数名称开头字母大写

- 返回一个可视化的组件

`props.children`包含组件的下一级文本内容

自定义组件的

`onClick`方法接收的是函数，如果传递函数表达式，那么会在渲染阶段直接执行

```jsx
// 二者等同
onclick = {()=>console.log('abc')}

document.getElementById('xx').addEventListener('click',()=>{
    console.log('abc')
})
```

函数执行数据更改，但界面没有更新的问题

函数执行数据更新是成功的，但是界面没有进行更新，默认状态下，react只会更新一次组件

`useState`函数只能使用在组件函数的顶部
