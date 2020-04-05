import axios from 'axios'

export function request(config){
    // 创建axios实例
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000/api/h8",
      timeout: 5000,
    })

    instance.interceptors.request.use(config=>{
      //console.log(config);
      // 比如config中的一些信息不符合服务器的请求
      // 比如每次发送网络请求时，都希望界面中显示一个请求的图标
      // 某些网络请求(比如登录)，需要携带一些信息
      return config
    },err=>{
      //console.log(err);
    })

    instance.interceptors.response.use(res=>{
      console.log(res)
      return res
    },err=>{
      console.log(err);
    })

    //发送真正的网络请求
    return instance(config)
}

/* export function request(config) {
  return new Promise((resolve, reject) => {
    // 创建axios实例
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000/api/h8",
      timeout: 5000,
    });
    //发送真正的网络请求
    instance(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
} */

/* export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/h8",
    timeout: 5000,
  });
  //发送真正的网络请求
  instance(config.baseConfig)
    .then((res) => {
      //console.log(res)
      config.success(res);
    })
    .catch((err) => {
      //console.log(err);
      config.failure(err);
    });
} */

/* export function request(config, success, failure) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/h8",
    timeout: 5000,
  });
  instance(config)
    .then((res) => {
      //console.log(res)
      success(res);
    })
    .catch((err) => {
      //console.log(err);
      failure(err);
    });
}
 */
