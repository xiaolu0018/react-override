import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import http from '@api/ajax.js';
import myurl from '@api/url.js';

//全局中文
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Auth from '@/assets/utils/Auth.js';
moment.locale('zh-cn');


React.Component.prototype.http = http;
React.Component.prototype.url = myurl;

React.Component.prototype.Auth = Auth;

ReactDOM.render(<LocaleProvider locale={zh_CN}><App /></LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
