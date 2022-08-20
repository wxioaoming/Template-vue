<template>
  <div class="all">
    <p>home</p>
    <button @click="toHome">跳转</button>
    <mcharts :dateList="dateList"/>
    <div>{{init.option.data}}</div>
    <div>{{init.listdateUrl}}</div>
    <!-- <sapn v-for="(item,index) in init.dateList" :key="index">{{item}} -</sapn> -->
  </div>
  
</template>


<script setup lang="ts">
import {getCurrentInstance,onMounted,reactive, ref,watch} from 'vue'
import { useRouter } from 'vue-router'
import mcharts from '@/hooks/Linechart/mchart.vue'
import { useFetch } from '@vueuse/core'
  const router = useRouter()

  let init:any = reactive({   //Proxy
    option:{
      data:3
    },
    dateList:[7,8,6,9,7,5,15],
    listdateUrl:null
  })

  //https://vueuse.org/core/useFetch/#usage
  const { isFetching, error, data } = useFetch('https://httpbin.org/get', { timeout: 5000 })     //data 是返回的数据 error  错误时的处理  isFetching  请求中止处理 

  // console.log('data===',data);

  watch(data, newValue => {  
    init.listdateUrl = JSON.parse(newValue).url
  })


  const toHome = (()=>{
    router.push({
      name:'List'
    })
  })

  const dateList = init.dateList
  
  let dome = ()=>{
    init.option.data = init.option.data + 2
  }

  onMounted(()=>{
    dome();

  })
    
</script>


<style scoped>
/* #iconMap{
  width: 500px;
  height: 500px;
} */
</style>