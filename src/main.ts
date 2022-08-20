import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import echarts from 'echarts'
// import axios from 'axios'
import router from './router/index'
import store from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'



const app = createApp(App)
app.use(router)
   .use(store)
   .use(Antd)
app.mount('#app')
   
app.config.globalProperties.$echarts = echarts
// app.config.globalProperties.$axios = axios;