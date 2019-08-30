/*
  子页面获取按钮权限列表公共组件
*/
import React, { Component } from 'react'
import { Modal } from 'antd'
import { getQueryString } from '@/assets/utils/unit'

export default (WrapCom) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      provList:[]
    }
  }
  componentDidMount() {
    this.init()
  }
  componentWillUnmount() {
    this.setState = () => {}
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps && this.props.location.search && prevProps.location.search !== this.props.location.search){
      this.init()
    }
  }
  init = async () => {
    let m = getQueryString(this.props.location.search,'m');
    let p = getQueryString(this.props.location.search,'p');
    if(m && p){
      let res = await this.http(this.url.pageAuthList,{
        menuId:m,
        tapId:p
      });
      if(res.success){
        this.setState({
          provList:Object.values(res.data).reduce((total,item) => {
            total.push.apply(total,item);
            return total;
          },[])
        })
      }
    }
  }

  render() {
    return <WrapCom {...this.state}/>
  }
}
