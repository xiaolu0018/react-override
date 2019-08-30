import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' //注入route到props
import { Menu } from 'antd'
import { getQueryString } from '@/assets/utils/unit'
class SideNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: '',
			openKeys: []
		}
	}
	componentDidMount() {
		// 监听路由变化
		// this.setState({
		// 	current: this.props.history.location.pathname,
		// 	openKeys: []
		// })
		//监听路由
		this.props.history.listen(() => {
			let url = this.props.location.pathname
			let arr = url.match(/(\/\w+)/g)
			let current
			if (arr && arr.length >= 2) {
				current = arr[0] + arr[1]
			}
			let m = getQueryString(this.props.location.search, 'm')
			let subMenu
			if (m) {
				subMenu = this.props.list.find(item => item.menuId === +m)
				subMenu = subMenu ? subMenu.parentId : null
			}
			if (current) {
				this.setState(state => {
					if (state.openKeys && state.openKeys.length) {
            return {
              current: current,
              openKeys:subMenu ? [...new Set([...state.openKeys,subMenu.toString()])] : state.openKeys
            }
					} else {
						return {
							current: current,
							openKeys: subMenu ? [subMenu.toString()] : []
						}
					}
				})
			}
		})
	}
	componentWillUnmount() {
		this.setState = () => {}
	}
	handleOpen = openKeys => {
		this.setState({
			openKeys: openKeys
		})
	}
	render() {
		const { SubMenu, Item } = Menu
		const MenuList = this.props.menuList.map(item => {
			if (item.children && item.children.length) {
				return (
					<SubMenu key={item.menuId} title={<span>{item.menuName}</span>}>
						{item.children.map(its => (
							<Item key={its.url}>
								<span>{its.menuName}</span>
								<Link
									to={{
										pathname: its.url,
										search: '?m=' + its.menuId
									}}
								></Link>
							</Item>
						))}
					</SubMenu>
				)
			} else {
				return (
					<Item key={item.url}>
						<span>{item.menuName}</span>
						<Link
							to={{
								pathname: item.url,
								search: '?m=' + item.menuId
							}}
						></Link>
					</Item>
				)
			}
		})
		return (
			<Menu
				mode="inline"
				theme="light"
				openKeys={this.state.openKeys}
				selectedKeys={[this.state.current]}
				onOpenChange={this.handleOpen}
			>
				{MenuList}
			</Menu>
		)
	}
}
export default withRouter(SideNav)
