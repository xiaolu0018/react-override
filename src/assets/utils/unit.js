function getQueryString(href = '',name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var index = href.indexOf('?')
  var r = href.substr(index + 1).match(reg)
  if (r != null) {
    return unescape(r[2])
  } else {
    return null
  }
}

export {getQueryString}
