import {createRouter,createWebHashHistory} from "vue-router"


const Home = () => import("../views/home/index.vue")    //.vue 不能省略
const List = () => import("../views/list/index.vue")    //.vue 不能省略

const routes = [
  {
    path:"/",
    redirect:"/Home"
  },
  {
    path:"/Home",
    name:"Home",
    component:Home
  },
  {
    path:"/List",
    name:"List",
    component:List
  }
]

const router = createRouter({
  history: createWebHashHistory(),    //不加时没有默认模式 : err:reading 'location'
  routes:routes
})


export default router



