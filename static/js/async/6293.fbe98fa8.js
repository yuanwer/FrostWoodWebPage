"use strict";(self.webpackChunkFrostWood=self.webpackChunkFrostWood||[]).push([["6293"],{7626:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});var r=s(5893),i=s(65);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",h3:"h3",div:"div",ol:"ol"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"url",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#url",children:"#"}),"URL"]}),"\n",(0,r.jsx)(n.p,{children:'URL（统一资源定位符）是互联网上用来确定资源位置的"地址"，就像现实世界中的门牌号一样，帮助我们准确找到需要的资源。'}),"\n",(0,r.jsxs)(n.h2,{id:"url-的标准格式",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#url-的标准格式",children:"#"}),"URL 的标准格式"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",meta:"",children:"[协议类型]://[服务器地址]:[端口号]/[文件路径][文件名]?[查询]#[片段ID]\n"})}),"\n",(0,r.jsx)(n.p,{children:"让我们通过一个实际的例子来理解："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",meta:"",children:"https://john.doe@www.example.com:123/forum/questions/?tag=networking&order=newest#top\n"})}),"\n",(0,r.jsx)(n.p,{children:"各部分详细说明："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"scheme（协议类型）"}),"：",(0,r.jsx)(n.code,{children:"https://"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"userinfo（用户信息）"}),"：",(0,r.jsx)(n.code,{children:"john.doe@"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"host（主机名）"}),"：",(0,r.jsx)(n.code,{children:"www.example.com"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"port（端口）"}),"：",(0,r.jsx)(n.code,{children:":123"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"path（路径）"}),"：",(0,r.jsx)(n.code,{children:"/forum/questions/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"query（查询参数）"}),"：",(0,r.jsx)(n.code,{children:"?tag=networking&order=newest"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"fragment（片段标识）"}),"：",(0,r.jsx)(n.code,{children:"#top"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"url-的基本组成",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#url-的基本组成",children:"#"}),"URL 的基本组成"]}),"\n",(0,r.jsx)(n.p,{children:"在日常使用中，一个典型的 URL 通常包含以下必要部分："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",meta:"",children:"https://www.example.com:8080/path/to/resource?name=test#section1\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"协议（Protocol）"}),"：",(0,r.jsx)(n.code,{children:"https://"})," - 告诉浏览器使用什么协议"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"主机名（Hostname）"}),"：",(0,r.jsx)(n.code,{children:"www.example.com"})," - 服务器的域名或 IP 地址"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"端口（Port）"}),"：",(0,r.jsx)(n.code,{children:":8080"})," - 可选，默认 HTTP 为 80，HTTPS 为 443"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"路径（Path）"}),"：",(0,r.jsx)(n.code,{children:"/path/to/resource"})," - 资源在服务器上的具体位置"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"查询参数（Query）"}),"：",(0,r.jsx)(n.code,{children:"?name=test"})," - 向服务器传递的额外参数"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"片段（Fragment）"}),"：",(0,r.jsx)(n.code,{children:"#section1"})," - 页面内部的锚点"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"url-编码",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#url-编码",children:"#"}),"URL 编码"]}),"\n",(0,r.jsx)(n.p,{children:"URL 只能使用 ASCII 字符集来通过因特网进行发送。如果 URL 中包含中文、空格等特殊字符，就需要进行编码。"}),"\n",(0,r.jsx)(n.p,{children:"在前端开发中，我们经常会用到以下方法处理 URL 编码："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"",children:"// 编码\nencodeURI('https://example.com/路径'); \n// 结果：https://example.com/%E8%B7%AF%E5%BE%84\n\n// 解码\ndecodeURI('https://example.com/%E8%B7%AF%E5%BE%84');\n// 结果：https://example.com/路径\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"在前端中的常见应用",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在前端中的常见应用",children:"#"}),"在前端中的常见应用"]}),"\n",(0,r.jsxs)(n.h3,{id:"1-路由导航",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-路由导航",children:"#"}),"1. 路由导航"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"",children:'// React Router 示例\n<Link to="/user?id=123">用户详情</Link>\n\n// 获取查询参数\nconst searchParams = new URLSearchParams(window.location.search);\nconst userId = searchParams.get(\'id\'); // "123"\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"2-ajax-请求",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-ajax-请求",children:"#"}),"2. AJAX 请求"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"",children:"// 发起 GET 请求\nfetch('https://api.example.com/users?page=1')\n  .then(response => response.json())\n  .then(data => console.log(data));\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"url-最佳实践",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#url-最佳实践",children:"#"}),"URL 最佳实践"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"永远不要在 URL 中包含敏感信息（如密码、token 等），因为："}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"URL 可能会被浏览器记录"}),"\n",(0,r.jsx)(n.li,{children:"URL 可能会出现在服务器日志中"}),"\n",(0,r.jsx)(n.li,{children:"URL 可能会被第三方看到（如通过 Referer 头）"}),"\n"]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"常见问题解决",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题解决",children:"#"}),"常见问题解决"]}),"\n",(0,r.jsxs)(n.h3,{id:"1-处理中文参数",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-处理中文参数",children:"#"}),"1. 处理中文参数"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"",children:"// 正确处理中文参数\nconst keyword = '前端开发';\nconst url = `https://api.example.com/search?q=${encodeURIComponent(keyword)}`;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"2-解析-url-参数",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-解析-url-参数",children:"#"}),"2. 解析 URL 参数"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"",children:"const params = new URLSearchParams(window.location.search);\nconst page = params.get('page');\nconst sort = params.get('sort');\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"uri-和-url-的区别",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uri-和-url-的区别",children:"#"}),"URI 和 URL 的区别"]}),"\n",(0,r.jsx)(n.p,{children:":::info URI 和 URL 的关系\nURI（统一资源标识符）和 URL（统一资源定位符）是两个经常被混淆的概念，让我们来理解它们的区别："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"URI"}),"（Uniform Resource Identifier）：统一资源标识符，用于标识 Web 技术使用的逻辑或物理资源"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"URL"}),"（Uniform Resource Locator）：统一资源定位符，俗称网络地址，相当于网络中的门牌号"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"URI 在以下几个方面与 URL 有关联："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"URI 是一个规则下能把一个资源独一无二的识别出来"}),"\n",(0,r.jsx)(n.li,{children:"URL 作为一个网络 Web 资源的地址，可以唯一将一个资源识别出来，所以 URL 是一个 URI"}),"\n",(0,r.jsx)(n.li,{children:"所以 URL 是 URI 的一个子集"}),"\n",(0,r.jsx)(n.li,{children:"但是 URI 并不一定是 URL\n:::"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:":::tip URI 和 URL 的具体示例\n让我们通过具体的例子来理解 URI 和 URL 的区别："}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL 示例"}),"（同时也是 URI）："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"https://www.example.com/index.html"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ftp://ftp.example.com/files/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"mailto:user@example.com"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"仅是 URI 而不是 URL 的示例"}),"："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"urn:isbn:0-486-27557-4"})," （书籍的 ISBN 编号）"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tel:+1-816-555-1212"})," （电话号码）"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data:text/plain;charset=UTF-8,Hello%20World"})," （数据 URI）"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"关键区别："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["URL 告诉你",(0,r.jsx)(n.strong,{children:"如何访问"}),"这个资源（比如通过 https 协议访问 example.com）"]}),"\n",(0,r.jsxs)(n.li,{children:["URI 只是",(0,r.jsx)(n.strong,{children:"标识"}),"这个资源（比如一本书的 ISBN），但不一定告诉你如何访问它\n:::"]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["front-end%2Fhtml%2Furl.mdx"]={toc:[{id:"url-的标准格式",text:"URL 的标准格式",depth:2},{id:"url-的基本组成",text:"URL 的基本组成",depth:2},{id:"url-编码",text:"URL 编码",depth:2},{id:"在前端中的常见应用",text:"在前端中的常见应用",depth:2},{id:"1-路由导航",text:"1. 路由导航",depth:3},{id:"2-ajax-请求",text:"2. AJAX 请求",depth:3},{id:"url-最佳实践",text:"URL 最佳实践",depth:2},{id:"常见问题解决",text:"常见问题解决",depth:2},{id:"1-处理中文参数",text:"1. 处理中文参数",depth:3},{id:"2-解析-url-参数",text:"2. 解析 URL 参数",depth:3},{id:"uri-和-url-的区别",text:"URI 和 URL 的区别",depth:2}],title:"URL",frontmatter:{}}}}]);