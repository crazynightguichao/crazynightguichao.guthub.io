(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{178:function(t,s,v){"use strict";v.r(s);var a=v(0),_=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{staticClass:"content"},[v("h2",{attrs:{id:"浏览器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),v("h3",{attrs:{id:"一、-浏览器架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、-浏览器架构"}},[t._v("#")]),t._v(" 一、 浏览器架构")]),t._v(" "),v("h4",{attrs:{id:"单进程浏览器时代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单进程浏览器时代"}},[t._v("#")]),t._v(" 单进程浏览器时代")]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("单进程浏览器")]),t._v(" "),v("p",[t._v("单进程浏览器是指浏览器的所有功能模块都是运行在同一个进程里，这些模块包含了网络、插件、JavaScript运行环境、渲染引擎和页面等。其实早在2007年之前，市面上浏览器都是单进程的。")])]),t._v(" "),v("p",[v("strong",[t._v("缺点")])]),t._v(" "),v("ul",[v("li",[t._v("不稳定：一个插件的意外崩溃会引起整个浏览器的崩溃")]),t._v(" "),v("li",[t._v("不流畅：所有页面的渲染模块、JavaScript执行环境以及插件都是运行在同一个线程中的，这就意味着同一时刻只能有一个模块可以执行")]),t._v(" "),v("li",[t._v("不安全：可以通过浏览器的漏洞来获取系统权限，这些脚本获取系统权限之后也可以对你的电脑做一些恶意的事情，同样也会引发安全问题")])]),t._v(" "),v("p",[t._v("以上这些就是当时浏览器的特点，"),v("strong",[t._v("不稳定，不流畅，而且不安全")])]),t._v(" "),v("h4",{attrs:{id:"多进程浏览器时代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多进程浏览器时代"}},[t._v("#")]),t._v(" 多进程浏览器时代")]),t._v(" "),v("ul",[v("li",[t._v("由于进程是相互隔离的，所以当一个页面或者插件崩溃时，影响到的仅仅是当前的页面进程或者插件进程，并不会影响到浏览器和其他页面，这就完美地解决了页面或者插件的崩溃会导致整个浏览器崩溃，也就是不稳定的问题")]),t._v(" "),v("li",[t._v("JavaScript也是运行在渲染进程中的，所以即使JavaScript阻塞了渲染进程，影响到的也只是当前的渲染页面，而并不会影响浏览器和其他页面，因为其他页面的脚本是运行在它们自己的渲染进程中的")]),t._v(" "),v("li",[t._v("Chrome把插件进程和渲染进程锁在沙箱里面，这样即使在渲染进程或者插件进程里面执行了恶意程序，恶意程序也无法突破沙箱去获取系统权限。")])]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("最新Chrome浏览器")]),t._v(" "),v("p",[t._v("最新的Chrome浏览器包括：1个浏览器（Browser）主进程、1个 GPU 进程、1个网络（NetWork）进程、多个渲染进程和多个插件进程")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("浏览器进程")]),t._v("。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")]),t._v(" "),v("li",[v("strong",[t._v("渲染进程")]),t._v("。核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎Blink和JavaScript引擎V8都是运行在该进程中，默认情况下，Chrome会为每个Tab标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。")]),t._v(" "),v("li",[v("strong",[t._v("GPU进程")]),t._v("。其实，Chrome刚开始发布的时候是没有GPU进程的。而GPU的使用初衷是为了实现3D CSS的效果，只是随后网页、Chrome的UI界面都选择采用GPU来绘制，这使得GPU成为浏览器普遍的需求。最后，Chrome在其多进程架构上也引入了GPU进程。")]),t._v(" "),v("li",[v("strong",[t._v("网络进程")]),t._v("。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")]),t._v(" "),v("li",[v("strong",[t._v("插件进程")]),t._v("。主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响")])]),t._v(" "),v("h3",{attrs:{id:"二、-阐述⼀下-js-的事件循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、-阐述⼀下-js-的事件循环"}},[t._v("#")]),t._v(" 二、 阐述⼀下 JS 的事件循环")]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("回答：")]),t._v(" "),v("p",[t._v("事件循环⼜叫做消息循环，是浏览器渲染主线程的⼯作⽅式。\n在 Chrome 的源码中，它开启⼀个不会结束的 for 循环，每次循环从消息\n队列中取出第⼀个任务执⾏，⽽其他线程只需要在合适的时候将任务加⼊到\n队列末尾即可。\n过去把消息队列简单分为宏队列和微队列，这种说法⽬前已⽆法满⾜复杂的\n浏览器环境，取⽽代之的是⼀种更加灵活多变的处理⽅式。\n根据 W3C 官⽅的解释，每个任务有不同的类型，同类型的任务必须在同⼀\n个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，\n在⼀次事件循环中，由浏览器⾃⾏决定取哪⼀个队列的任务。但浏览器必须\n有⼀个微队列，微队列的任务⼀定具有最⾼的优先级，必须优先调度执⾏。")])]),t._v(" "),v("h3",{attrs:{id:"三、-js-中的计时器能做到精确计时吗？为什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、-js-中的计时器能做到精确计时吗？为什么？"}},[t._v("#")]),t._v(" 三、 JS 中的计时器能做到精确计时吗？为什么？")]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("回答：")]),t._v(" "),v("p",[t._v("不⾏，因为：")]),t._v(" "),v("ol",[v("li",[t._v("计算机硬件没有原⼦钟，⽆法做到精确计时")]),t._v(" "),v("li",[t._v("操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调⽤的\n是操作系统的函数，也就携带了这些偏差")]),t._v(" "),v("li",[t._v("按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，\n则会带有 4 毫秒的最少时间，这样在计时时间少于 4 毫秒时⼜带来\n了偏差")]),t._v(" "),v("li",[t._v("受事件循环的影响，计时器的回调函数只能在主线程空闲时运⾏，因此\n⼜带来了偏差")])])])])}],!1,null,null,null);s.default=_.exports}}]);