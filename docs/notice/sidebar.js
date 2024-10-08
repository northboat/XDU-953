
module.exports = [

	{
		title: '数学',
		collapsable: true,
		children: [
		
			{
				title: '汤 1800',
				collapsable: true,
				children: [
					'./201/1800-unary-calculus',
					'./201/1800-multivariate-calculus',
					'./201/1800-linear',
					'./201/1800-probability',
				]
			},
		
			{
				title: '永乐 660',
				collapsable: true,
				children: [
					'./201/660-unary-calculus',
					'./201/660-multivariate-calculus',
					'./201/660-linear-probability',
				]
			},
			{
				title: '李林 880',
				collapsable: true,
				children: [
					'./201/880-calculus',
					'./201/880-linear-probability',
				]
			},
			
		]
	},	
	
	{
		title: '网安基础综合',
		collapsable: true,
		children: [
			'./953/xdu-953-network',
			'./953/xdu-953-ds-crypto',
			'./953/xdu-953-answer',
			{
				title: '951/952 错题本儿',
				collapsable: true,
				children: [
					'./953/xdu-951-20-21',
					'./953/xdu-952-17-18',
					'./953/xdu-952-19-20',
				]
			},
		]
	},
]
