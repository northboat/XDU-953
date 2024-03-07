//核心配置文件

module.exports = {
    title: "XDU 953 Docs",
    description: '片刻寧靜',
    dest: './dist/',
    base: '/XDU-953/',
    port: '8080',
    head: [
		['link', { rel: 'icon', href: '/leaf.ico' }],
		['link', {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css'}],
		['script', {src: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js'}],
    ],

	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '数据结构', link: '/951/' },
			{ text: '计算机网络', link: '/952/' },
			{ text: '密码学', link: '/953/' },
			{ text: '复试笔试', link: '/9151/' },
			{ text: '我的笔记', link: '/note/' },
		],
		sidebar: require("./sidebar.js"),
	},

    markdown: {
		lineNumbers: true,
		anchor: { permalink: false },
		toc: {includeLevel: [1,2]},
		extendMarkdown: md => {
			md.use(require('markdown-it-texmath'))
		}
    },

    plugins: [
    ]
}
