module.exports = [
  {
    menuId: 425,
		pfCode: 'cloud.pc.manage',
		orderIndex: 315,
		menuName: '机房管理',
		parentId: null,
		url: null
  },
  {
		menuId: 426,
		pfCode: 'cloud.pc.manage',
		orderIndex: 316,
		menuName: '主机机房',
		parentId: 425,
		url: '/pages/room'
	},
	{
		menuId: 429,
		pfCode: 'cloud.pc.manage',
		orderIndex: 317,
		menuName: '主机管理',
		parentId: null,
		url: null
	},
	{
		menuId: 430,
		pfCode: 'cloud.pc.manage',
		orderIndex: 318,
		menuName: 'PC主机资源',
		parentId: 429,
		url: '/pages/host'
	},
	{
		menuId: 431,
		pfCode: 'cloud.pc.manage',
		orderIndex: 319,
		menuName: '传输配置',
		parentId: 429,
		url: '/pages/trans'
	},
	{
		menuId: 432,
		pfCode: 'cloud.pc.manage',
		orderIndex: 320,
		menuName: '业务管理',
		parentId: null,
		url: null
	},
	{
		menuId: 433,
		pfCode: 'cloud.pc.manage',
		orderIndex: 321,
		menuName: '订单列表',
		parentId: 432,
		url: '/pages/business'
	},
	// {
	// 	menuId: 434,
	// 	pfCode: 'cloud.pc.manage',
	// 	orderIndex: 322,
	// 	menuName: '业务设置',
	// 	parentId: 432,
	// 	url: 'pages/busiConfig/configList'
	// },
	{
		menuId: 435,
		pfCode: 'cloud.pc.manage',
		orderIndex: 323,
		menuName: '运维管理',
		parentId: null,
		url: null
	},
	{
		menuId: 436,
		pfCode: 'cloud.pc.manage',
		orderIndex: 324,
		menuName: '日志查询',
		parentId: 435,
		url: '/pages/log'
	}
]
