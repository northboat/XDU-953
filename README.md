## 本站说明

本站并不能作为纸质试卷的替代，本人在10月底也有买淘宝研梦的资料，不太建议购买私人资料

在确认报名之前，可以通过这份电子资料了解953的难度以及风格，PDF 在 Release 中可下载，缺少 17、18、19 数据结构的真题答案，后续有时间补

## 备考经验

> 个人经验，仅供参考

数学：趁早有时间看网课很重要，自认为光靠啃书和刷题难拿高分

英语：东秦金卓老师，身边没见过低于70的英一，25考研QQ群：429418727

专业课

| 日期    | 资料                                          |
| ------- | --------------------------------------------- |
| 5-7月   | 王道                                          |
| 8月     | 951、952真题，《现代密码学》课后题            |
| 9月     | 王道，《现代密码学》，953真题                 |
| 10-11月 | 研梦资料，951、952真题和953真题，DS、CN期末题 |
| 12月    | 错题                                          |

政治：微信公众号研木易木子，会有肖4大题精缩

另外提一嘴，24的953考的很难，相较于去年和前年，主要变难在数据结构和密码学部分，不知道是否是一种趋势。如果按照22和23的难度来看，啃王道和现代密码学三本书是完全够的，但如果保持24的难度，要考高分（≥120）或许需要从其他方面入手

## 关于复试

笔试，难度不大，手上有两套纸质真题，之后整理

| 操作系统 | 离散数学 | C程序设计 |
| -------- | -------- | --------- |
| 35分     | 35分     | 30分      |

## 快速搭建

> [VuePress 官方指南](https://vuepress.vuejs.org/zh/guide/)

从 0 开始搭建这份 vuepress 文档

```sh
mkdir XDU-Docs && cd XDU-Docs
npm init -y
npm install vuepress -D

# 安装 latex 公式和 vue 支持
npm install katex markdown-it-texmath vue-template-compiler --save

# 拷入 docs 文件夹到当前目录
```

添加脚本至 package.json

```json
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs"
},
```

开发和部署

```sh
npm run docs:dev
npm run docs:build
```

