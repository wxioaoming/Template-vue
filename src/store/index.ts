import { createStore } from 'vuex'


export default createStore({
  state:{
    code:1111,
    str:''
  },

  mutations:{
    setCodeN(state){
      console.log('state==',state);
      // console.log('value==',value);
      // console.log('name====',name);
    }
  },

  actions:{   //异步
    updateCode(context,text){
      
      setTimeout(()=>{
        console.log('context===',context);
        console.log('text===',text);
      },2000)

    }

  },

  getters:{
    formatInfo(state){
      console.log('state===',state);
      
      return ''
    }
  },

  modules:{

  }
})