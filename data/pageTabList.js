module.exports = (req, res) => {
	let menu = req.body.menuId
	let list = []
	switch (menu) {
		case '426':
			list = [
				{
					tapId: 794,
					menuId: 430,
					orderIndex: 1,
					tapName: '主机机房',
					url: '/pages/room/roomList'
				}
			]
			break
		case '430':
			list = [
				{
					tapId: 594,
					menuId: 430,
					orderIndex: 1,
					tapName: 'PC主机资源',
					url: '/pages/host/hostList'
				}
			]
			break
		case '431':
			list = [
				{
					tapId: 595,
					menuId: 431,
					orderIndex: 1,
					tapName: '全局配置',
					url: '/pages/trans/transConfig'
				},
				{
					tapId: 627,
					menuId: 431,
					orderIndex: 2,
					tapName: '局部配置',
					url: '/pages/trans/locationTransConfig'
				}
			]
			break
		case '433':
			list = [
				{
					tapId: 596,
					menuId: 433,
					orderIndex: 1,
					tapName: '订单列表',
					url: '/pages/business/orderList'
				}
			]
			break;
		case '436':
			list = [
				{
					tapId: 600,
					menuId: 436,
					orderIndex: 1,
					tapName: '操作日志',
					url: '/pages/log/list'
				}
			]
			break;
		default:
			list = []
			break;
	}
	return res.json(list)
}
