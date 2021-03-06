import axios from 'axios'
import qs from 'qs'
import Auth from '@/assets/utils/Auth.js'
import ModalWarn from '@/components/ModalWarn.js'
var CancelToken = axios.CancelToken
//POST传参序列化
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//返回状态判断
axios.interceptors.response.use(
  res => {
    res.data.isError && (res.data.success = false)
    if (res.data.NO_LOGIN && res.data.NO_LOGIN === 'NO_LOGIN') {
      window.location.href = window.location.origin
      return
    }
    return {
      data: {
        ...res,
        success: true
      }
    }
  },
  error => {
    if (error.response.status === 555) {
      return Promise.resolve({
        data: {
          success: false,
          message: error.message
            ? error.message
            : '没有权限' + error.response.status
        }
      })
    } else if (error.response.status === 404) {
      return Promise.resolve({
        data: {
          success: false,
          message: error.message
            ? error.message
            : '网络异常,status ' + error.response.status
        }
      })
    }
  }
)

axios.defaults.method = 'post'
axios.defaults.baseURL = window.location.origin

export default function(
  url,
  data = {},
  method = 'post',
  prov = '',
  type = 'application/x-www-form-urlencoded',
  cancelObj
) {
  if (prov && !Auth(prov)) {
    return Promise.reject({
      success: false,
      message: url + 'NO_RIGHT'
    })
  }
  return new Promise((resolve, reject) => {
    let config = {
      method: method || 'post',
      url: url + '?t=' + new Date().getTime(),
      headers: {
        'Content-Type': type,
        'X-Requested-With': 'XMLHttpRequest'
      },
      CancelToken: new CancelToken(function(f) {
        if (cancelObj) {
          if (!cancelObj.hasOwnProperty(url)) {
            cancelObj[url] = f
          }
        }
      })
    }
    if (method && method === 'get') {
      config.params = data
    } else {
      config.data = data
    }

    // axios.post(url + "?t=" + new Date().getTime(), data, {
    //   headers: {
    //     'Content-Type': type,
    //     'X-Requested-With': "XMLHttpRequest"
    //   },
    //   CancelToken: new CancelToken(function (f) {
    //     if (cancelObj) {
    //       if (!cancelObj.hasOwnProperty(url)) {
    //         cancelObj[url] = f;
    //       }
    //     }

    //   }),
    // })
    axios(config)
      .then(
        response => {
          if (!response.data.success) {
            ModalWarn({
              content: response.data.message
            })
          }
          resolve(response.data)
        },
        err => {
          ModalWarn({
            content: err.message
              ? err.message
              : '网络异常,status ' + err.response.status
          })
          resolve({
            data: {
              success: false,
              message: err.message
                ? err.message
                : '网络异常,status ' + err.response.status
            }
          })
        }
      )
      .catch(err => {
        ModalWarn({
          content: err.message
            ? err.message
            : '网络异常,status ' + err.response.status
        })
        resolve({
          data: {
            success: false,
            message: err.message
              ? err.message
              : '网络异常,status ' + err.response.status
          }
        })
      })
  })
}
