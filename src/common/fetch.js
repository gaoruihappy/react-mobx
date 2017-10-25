function A (url, op = {}) {
  let config = {
    method: 'get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json'
    }
  }
  //开发用
  if(window['ENV']=='dev'){
    config.headers['debug'] = "1"
    // op.body['debug']='1'
  }
  if ((op.method === 'get' || !op.method) && (op.body)) {         // 当发送请求为get时，将参数拼在url后面
    let key

    url += url.indexOf('?')==-1? '?' : ''
    for (key in op.body) {
      url += `${key}=${op.body[key]}&`
    }
    url = url.substr(0, url.length - 1)
    delete (op.body)                                              // 去除多余的option
    config.headers['X-Requested-With'] = "XMLHttpRequest"
  } else if (op.method === 'post' || op.method === 'POST') {
    if (op.formData) {
                                          // 如果后端需要formData
      let formData = new window.FormData()
      let key
      for (key in op.body) {
        if(op.body[key] ===null){
          continue;
        }
        formData.append(key, op.body[key])
      }
      op.body = formData
      delete (op.formData)                                      // 去除多余的option

      config.headers['X-Requested-With'] = "XMLHttpRequest"
    } else {
      config.headers['X-Requested-With'] = "XMLHttpRequest"
      config.headers['Content-Type'] = 'application/json'         // post参数以json的方式传给后端
      op.body = JSON.stringify(op.body)                           // 正常的json传给后端
    }
  }
  const checkLocation = window.location.hash.replace('/', '')
  return fetch(url, Object.assign({}, config, op))
    .then(res => {
      return res.json()
    })
    .then(data => {

      if (data.code != 1) {
        //  console.error(data);
        return data
      }
      return data
    })
}



export default A
