# Javascript-Module-Fundamentals
## 主题
* popular module patterns
* the AMD and CommonJS module formats
* Client-size module loaders
* ES2015 modules
* Module bundlers

## Why Modules Matters In Javascript?
*模块是什么？*
> 模块是一组有特定功能的代码和数据，它封装了一些实现细节，暴露出公共的API，通过和其他模块的连接来打造出大型应用。

*模块化的目的*

* create higher-level abstractions  高层次的抽象

 > 模块化可以让你从更高的层次来思考你的应用，它让我们从一组方法的角度来思考问题，而不是每一个方法。举个例子，如果我是一个
 城市的建造者，我希望考虑的是怎么在城市中去布局建筑群，而不是去考虑每一个建筑里的每一块砖头的问题。
 
* Encapsulation 封装
 > 模块的任务是要暴露出清晰的API供使用方使用，同时隐藏具体的实现细节。这使得维护模块的人可以重构代码，替换算法或其他实现，而不用
担心影响到依赖这些模块的代码，只要API不变，就不会影响使用方。

* Reusability 重用

* Simplify dependency management 简化依赖管理
> 一般来说，每个模块都需要声明自己的功能所依赖的其他模块。我们都知道维护HTML页面上庞大js脚本顺序的痛点，实现一个好的模块系统可以
解决掉这个问题。
 
 
## Module Formats and Module Loaders 模块格式 vs 模块加载器
*Module format*
* Native vs non-native
* Asynchronous Module Definition(AMD)
* CommonJS

> 模块格式指的是用来定义模块的语法。他们是独立于模块加载器存在的，但是如果没有模块加载器，就没有人知道怎么来
运行这些语法。模块加载器通常就是一个JavaScript的库，我们把它包含到项目中，他可以理解我们的代码使用的模块格式（使用
了哪一种语法），并且他知道怎么去加载并执行用这个语法写出来的模块。模块格式和模块加载器的关系就像是JavaScript语言和
浏览器的关系一样。


*Module loaders*
* RequireJS
* SystemJS
