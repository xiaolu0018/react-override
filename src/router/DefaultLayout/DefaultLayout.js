import React, { Component } from 'react'
import HeadNav from '@/common/HeadNav'
import SideNav from '@/common/SideNav'
import styles from './DefaultLayout.module.less'
import { Modal, Layout } from 'antd'

import { Switch,Redirect } from 'react-router-dom'
import AuthRoute from '@/components/AuthRoute.js'

import menuFormat from './menuFormat.js'
import menuRoute from './menuRoute.js'
import loadable from '@/components/loadable.js'
const Welcom = loadable(() => import('@/pages/Welcom.js'))

const { Header, Sider, Content } = Layout

export default class DefaultLayout extends Component {
  state = {
    list: [],
    menuList: []
  }
  componentDidMount() {
    //初始化
    this.init()
  }
  init = async () => {
    let res = await this.http(this.url.menuList, {})
    if (res.success) {
      let list = menuFormat(res.data)
      this.setState({
        list: res.data || [],
        menuList: list || []
      })
    } else {
      Modal.warning({
        title: '提示',
        content: res.message
      })
    }
  }
  render() {
    return (
      <Layout className="DefaultLayout divflow">
        <Header>
          <HeadNav />
        </Header>
        <Layout>
          <Sider
            width="180"
            className={`${styles.sideMenuBox} scrollbar`}
            theme="light"
          >
            <SideNav list={this.state.list} menuList={this.state.menuList} />
          </Sider>
          <Content
            className="content-wrap scrollbar"
            style={{ padding: '10px' }}
          >
            <Switch>
              <AuthRoute path={'/'} component={Welcom} exact />
              {menuRoute.map(item => (
                <AuthRoute
                  provList={this.state.list}
                  key={item.path}
                  path={item.path}
                  render={props => <item.component {...props} />}
                />
              ))}
              <Redirect from="*" to="/404" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
