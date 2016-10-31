import'fetch-detector';
import 'fetch-ie8';
// import {history} from  '../routes/routes.js'

/**
 * [使用fetch发起请求]
 * @param  {[type]} API_ROOT [目标服务地址 e.g. http://192.168.0.101:8088/newPortal ]
 * @param  {[type]} data     [具体接口地址+参数 e.g. {path:'/login',param:{phoneno,password,userType:this.state.userType}}]
 * @param  {[type]} method   [get or post]
 * @param  {[type]} callBackSuccess [成功回调函数]
 * @param  {[type]} callBackError   [失败回调函数]
 */
export const callApiWithCallBack = (API_ROOT,data,method,callBackSuccess,callBackError)=>{
  let url ='',options ={},headers={};
  if(method === 'get' || method === 'GET'){
      url = API_ROOT+getPath(data);
     options = {
        method :'GET',
        credentials: 'include',
        mode: "cors",
      }
  }


  else if(method === 'post' || method === 'POST'){
     url = API_ROOT+data.path;
     headers= {
       'Accept': 'application/json',
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
     }
     options = {
            method: 'POST',
            headers,
            credentials: 'include',
            mode: "cors",
            body:  getBody(data.param).slice(1),
            cache:'default'
        }
  }
return fetch(url,options)
    .then(response =>

        response.text().then((responseText)=>responseText?{responseText,response}:{responseText:'{"error":"no response"}',response})

      )
      .then(({responseText,response}) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            return JSON.parse(responseText);
        })
      .then(
            response => {
              callBackSuccess(response);
            },
            error => {
                callBackError(error);
            }
      );
}

export const getPath = ({ path, param }) => {
  return (path + getBody({...param, _ : new Date().getTime()})).replace(/&/, '?');
}

/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
var getBody = function (param, key, encode = true) {
  if(param==null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += getBody(param[i], k, encode);
    }
  }
  return paramStr;
};
/**
 * [使用fetch发起请求]
 * @param  {[type]} API_ROOT [目标服务地址 e.g. http://192.168.0.101:8088/newPortal ]
 * @param  {[type]} data     [具体接口地址+参数 e.g. {path:'/login',param:{phoneno,password,userType:this.state.userType}}]
 * @param  {[type]} method   [get or post]
 * @return {[type]}          [description]
 */
export const callApi = (API_ROOT,data,method)=>{
  let url ='',options ={},headers={};
  if(method === 'get' || method === 'GET'){
      url = API_ROOT+getPath(data);
     options = {
        method :'GET',
        credentials: 'include',
        mode: "cors",
      }
  }


  else if(method === 'post' || method === 'POST'){
     url = API_ROOT+data.path;
     headers= {
       'Accept': 'application/json',
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
     }
     options = {
            method: 'POST',
            headers,
            credentials: 'include',
            mode: "cors",
            body:  getBody(data.param).slice(1),
            cache:'default'
        }
  }
return fetch(url,options)
    .then(response =>

        response.text().then((responseText)=>responseText?{responseText,response}:{responseText:'{"error":"no response"}',response})

      )
      .then(({responseText,response}) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            return JSON.parse(responseText);
        })
      .then(
            response => {
              if(response.msg === '未登录' && response.status === '0'){
                // history.push({pathname:'/antrm',state:{select:''}});
                setTimeout(()=>{
                  window.location.reload();
                },500)
              }
              else{
                return response
              }
            },
            error => {
                return {error: error.message || 'Something bad happened'}
            }
            )
}



export const  notEmptyObject = (obj)=>{
  var flag = false;
  if (Object.prototype.toString.call(obj).replace(/\[object\s+([a-zA-Z0-9]{1,})\]$/,'$1') === 'Object' ){
    for (var prop in obj){
        flag = true;
        break;
    }
  }
  else {
    flag = true
  }
  return flag;
}
