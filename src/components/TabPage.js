/*
  页面部分获取tabList公共组件
*/
import React, { Component } from 'react'
import { getQueryString } from '@/assets/utils/unit'
import { Tabs, Modal } from 'antd'
import { Link } from 'react-router-dom'

export default WrapCom =>
	class extends Component {
		constructor(props) {
			super(props)
			this.state = {
				menuId: null,
				actTab: '',
				actUrl: '',
				tabList: []
			}
		}
		componentDidMount() {
			this.init()
		}
		componentWillUnmount() {
			this.setState = () => {}
		}
		componentDidUpdate(prevProps, prevState, snapshot) {
			if (
				prevProps &&
				this.props.location.search &&
				prevProps.location.search !== this.props.location.search
			) {
				let m = getQueryString(this.props.location.search, 'm')
				let lm = getQueryString(prevProps.location.search, 'm')
				if (!lm || m !== lm) {
					this.init()
				}
			}
		}
		init = async () => {
			let m = getQueryString(this.props.location.search, 'm')
			if (m) {
				this.setState({
					menuId: m
				})
				let res = await this.http(this.url.pageTabList, {
					menuId: m
				})
				if (res.success) {
					this.setState(
						{
							tabList: res.data,
							actTab:
								res.data && res.data.length ? res.data[0].tapId.toString() : '',
							actUrl: res.data && res.data.length ? res.data[0].url : ''
						},
						function() {
							if (this.state.actTab) {
								this.props.history.replace({
									pathname: this.state.actUrl,
									search: '?m=' + m + '&p=' + this.state.actTab
								})
							}
						}
					)
				} else {
					Modal.warning({
						title: '提示',
						content: res.message
					})
				}
			}
		}
		changeTab = activeKey => {
			this.setState({
				actTab: activeKey
			})
		}
		render() {
			const { TabPane } = Tabs
			return (
				<div>
					<Tabs
						type="card"
						activeKey={this.state.actTab}
						onChange={this.changeTab}
            className="link-tab"
					>
						{this.state.tabList.map((item, index) => (
							<TabPane
								tab={
									<Link
                    className='tab-link'
										to={{
											pathname: item.url,
											search: `?m=${this.state.menuId}&p=${item.tapId}`
										}}
									>
										{item.tapName}
									</Link>
								}
								key={item.tapId.toString()}
							/>
						))}
					</Tabs>
					<div className="tab-pane">
						<WrapCom tabList={this.state.tabList} />
					</div>
				</div>
			)
		}
	}
