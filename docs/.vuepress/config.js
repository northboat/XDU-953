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
			//{ text: 'home', link: '/' },
			{ text: '951', link: '/951/' },
			{ text: '952', link: '/952/' },
			{ text: '953', link: '/953/' },
			{ text: '9151', link: '/9151/' },
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
