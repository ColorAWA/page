// 强跳https协议
if (window.location.protocol !== 'https:') {
  window.location = window.location.href.replace(/^http/, 'https')
}
