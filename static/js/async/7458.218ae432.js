"use strict";(self.webpackChunkFrostWood=self.webpackChunkFrostWood||[]).push([["7458"],{846:function(n,e,r){r.r(e),r.d(e,{default:function(){return c}});var a=r(5893),s=r(65);function t(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.h1,{id:"计算和金额",children:[(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#计算和金额",children:"#"}),"计算和金额"]}),"\n",(0,a.jsxs)(e.h2,{id:"计算多个数的总和",children:[(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#计算多个数的总和",children:"#"}),"计算多个数的总和"]}),"\n",(0,a.jsxs)(e.p,{children:["使用 ",(0,a.jsx)(e.a,{href:"https://github.com/MikeMcl/bignumber.js/",rel:"noopener noreferrer",target:"_blank",children:"bignumber.js"})," 库来解决精度问题。"]}),"\n",(0,a.jsx)(e.p,{children:"任何的假值都会被转换为 0。"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",meta:"",children:"import BigNumber from 'bignumber.js'\n\n/**\n * 计算多个数的总和。可以直接传入多个数，或者传入一个包含数的数组。\n *\n * @param {...(number|number[])} args - 多个数值或包含数值的数组。如果只传入一个参数，并且这个参数是数组，则使用这个数组作为参数列表。\n * @returns {number} - 所有数值的总和。\n *\n * @example\n * // 直接传入多个数\n * sum(1, 2, 3, 4); // 10\n *\n * // 传入一个数组\n * sum([1, 2, 3, 4]); // 10\n *\n * // 包含null或undefined的情况\n * sum(1, 2, null, 4); // 7\n */\nexport function sum(...args) {\n  // 检查是否传入了一个数组，如果是，就使用这个数组作为args\n  if (args.length === 1 && Array.isArray(args[0])) {\n    args = args[0];\n  }\n\n  if (args.length === 0) {\n    return 0;\n  }\n\n  args = args.map(item => item || 0);\n\n  return BigNumber.sum.apply(null, args).toNumber();\n}\n\n\nexport default {\n  sum\n}\n\n"})}),"\n",(0,a.jsxs)(e.h2,{id:"格式化金额",children:[(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#格式化金额",children:"#"}),"格式化金额"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",meta:"",children:"/**\n * 将数字转换为指定货币格式的字符串\n * \n * @param {number} n - 要格式化的数字\n * @param {string} curr - 货币代码（例如：'USD'、'EUR'、'JPY'等）\n * @param {string} [LanguageFormat] - 可选的语言格式代码（例如：'en-us'、'fa'、'fi'等）\n * @returns {string} 格式化后的货币字符串\n * \n * @example\n * // 中国大陆格式（简体中文）\n * toCurrency(123456.789, 'CNY', 'zh-CN')\n * // 返回: '\xa5123,456.79'\n * \n * // 中国台湾格式（繁体中文）\n * toCurrency(123456.789, 'CNY', 'zh-TW')\n * // 返回: 'CN\xa5123,456.79'\n * \n * // 英语环境下的人民币显示\n * toCurrency(123456.789, 'CNY', 'en-US')\n * // 返回: 'CN\xa5123,456.79'\n * \n * // 大数值示例\n * toCurrency(1234567890.123, 'CNY', 'zh-CN')\n * // 返回: '\xa51,234,567,890.12'\n */\nconst toCurrency = (n, curr, LanguageFormat = undefined) =>\n  Intl.NumberFormat(LanguageFormat, {\n    style: 'currency',\n    currency: curr,\n  }).format(n);\n\n"})}),"\n",(0,a.jsxs)(e.h2,{id:"numeraljs",children:[(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#numeraljs",children:"#"}),"Numeral.js"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"http://numeraljs.com/",rel:"noopener noreferrer",target:"_blank",children:"http://numeraljs.com/"})})]})}function u(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(t,n)})):t(n)}let c=u;u.__RSPRESS_PAGE_META={},u.__RSPRESS_PAGE_META["front-end%2Fcode-snippet%2F%E8%AE%A1%E7%AE%97%E5%92%8C%E9%87%91%E9%A2%9D.mdx"]={toc:[{id:"计算多个数的总和",text:"计算多个数的总和",depth:2},{id:"格式化金额",text:"格式化金额",depth:2},{id:"numeraljs",text:"Numeral.js",depth:2}],title:"计算和金额",frontmatter:{}}}}]);