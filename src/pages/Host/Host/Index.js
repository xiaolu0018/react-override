import React, { Component } from 'react'
import loadable from '@/components/loadable.js'
import TabPage from '@/components/TabPage.js'
import { Switch, Redirect, Route } from 'react-router-dom'
import AuthRoute from '@/components/AuthRoute.js'
import { Spin } from 'antd'
const HostList = loadable(() => import('./HostList.js'))

const tapRoute = [
	{
		path: '/pages/host/hostList',
		component: HostList
	}
]
@TabPage
class HostIndex extends Component {
	render() {
		return (
			<Switch>
				<Route
					exact
					strict
					path="/pages/host"
					render={() => <Spin tip="加载中" />}
				></Route>
				{tapRoute.map(item => (
					<AuthRoute
						key={item.path}
						provList={this.props.tabList}
						path={item.path}
						render={props => <item.component {...props} />}
					/>
				))}
				<Redirect from="*" to="/404" />
			</Switch>
		)
	}
}
export default HostIndex
