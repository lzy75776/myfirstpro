import axios from "../axios";

export function getHomeMultidata (){
  return axios({
    url:'/home/multidata'
  })
}
//发送网络数据请求参数
export function getHomeGoods(type,page){
  return axios({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}