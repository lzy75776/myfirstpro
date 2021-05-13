import axios from "../axios";

export function getCategory (){
  return axios({
    url:'/category/'
  })
}
//发送网络数据请求参数