import React, { Component } from 'react'
import { Link, withRouter  } from 'react-router-dom'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import  './HeadNav.less'

@withRouter
@connect(state => ({user: state.user}))
class HeadNav extends Component {
  componentDidMount(){
    // 监听路由变化
    // console.log(this.props.history.location.pathname)
    //初始化

  }
  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(snapshot);
    // console.log(this.props)
  }
  loginOut = async () => {
    let res = await this.http(this.url.loginOutGET,{},'get');
    if(res.success){
      this.props.history.push("/login");
    }else{
      Modal.warning({
        title: '提示',
        content: res.message
      })
    }
  }
  render() {
    return (
      <div id="HeadNav">
        <div className="nav-wrap">
          <div className="nav-logo-wrap">
            <h1>
              <Link to="/">
                {/* <img src={require('@/assets/img/logo.gif')} alt=""/> */}
              </Link>
            </h1>
          </div>
          <div className="nav-info-wrap">
            你好，{this.props.user ? this.props.user.name : ' '}
            <i onClick={this.loginOut} className="login-out">退出系统</i>
          </div>
        </div>
      </div>
    )
  }
}
export default HeadNav
