export default {
  addCart(context,payload){
   return new Promise((resolve,reject)=>{
     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
     //判断原来是否有该属性
     if (oldProduct){
       context.commit('addCounter',oldProduct)
       resolve('当前商品数量加1')
     }else{
       payload.count = 1
       context.commit('addToCart',payload)
       resolve('添加新的商品')
     }
   })
  }
}