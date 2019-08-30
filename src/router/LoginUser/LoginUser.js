import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

@withRouter
@connect(state => ({ user: state.user }))
class LoginUser extends Component {
	componentDidMount() {
		if (this.props.user && this.props.user.name) {
      this.props.history.goBack();
		} else {
			window.location.replace(
				'http://load.shunwang.com//oauth2/authorize.do?client_id=icafe8&redirect_uri=http://localhost:3000&response_type=code'
			)
		}
	}
	render() {
		return <div id="LoginUser" style={{ height: '100%', width: '100%' }}></div>
	}
}

export default LoginUser
