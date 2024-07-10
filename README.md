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

**渲染表格**

```jsx
// 方式一，按名称传递属性
// 方式二，解构对象传递
// 方式三，数组方法遍历
    <ul className="main-contents">
        <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title}
                             description={CORE_CONCEPTS[0].description}/>
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} />
        {CORE_CONCEPTS.map((item,index) => <CoreConcept key={index} {...item} />)}
    </ul>
```

## 三. 深入React

#### 3.1 React原理

**React生成的原理**

生成一个根组件，并向下挂载子组件

在组件函数进行标签元素返回的情况时，只能返回一个标签元素（可包含子标签）

```jsx
<Fragment></Fragment> // 实现包裹不需要父元素的情况
<></> // 与Fragment作用相同
```

#### 3.2 组件的深度运用

自定义按钮设计思路

代码如下：

```jsx
// 按钮运用场景
<Button mode="filled">Filled (Default)</Button>
<Button mode="outline">Outline</Button>
<Button mode="text">Text</Button>
<Button Icon={HomeIcon}>Home</Button>
<Button Icon={PlusIcon} mode="text">Add</Button>
<Button mode="filled" disabled>Disabled</Button>
<Button onClick={() => console.log('Clicked!')}>Click me</Button>

// Button.js 的设计场景
export default function Button({children,mode = 'filled',Icon,...props}) {

 let classN = `button ${mode}-button`
 let IconTag
 if(Icon) {
     classN += ' icon-button'
     IconTag = <span className='button-icon'><Icon/></span>
 }
 
 return <button className={classN} {...props}>{Icon ? IconTag : null}<span>{children}</span></button>
}
```

#### 3.3 骰子项目
