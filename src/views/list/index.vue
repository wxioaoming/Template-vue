<template>
  <div>list主目录</div>
  <button @click="init.count++">count is {{init.count}}</button>
  <div>
    <router-link to="/Home">跳转</router-link>
  </div>

  <!-- <indexs/> -->
  <mchart :dateList="dateList"/>

  <a-button value="large">Large</a-button>

</template>


<script setup lang="ts">
import { ref,onMounted,reactive,computed } from 'vue';
import {useStore,mapState} from 'vuex';
// import indexs from '../../hooks/Linechart/mchart.vue'     //名称可以随意起
import mchart from '@/hooks/Linechart/mchart.vue'

  let init = reactive({
    count:0,
    dateList:[150,100,120,140,130,160,90]
  })

  const dateList = init.dateList
  // console.log("dateList===",dateList);
  
  const store = useStore()
  const nums = computed(()=>store.state.code)
  store.commit('setCodeN','11')               //commit   调用mutations  参数1 方法名   参数2 传入的值
  store.dispatch('updateCode','55')           //dispatch 调用actions    参数1 方法名   参数2 传入的值

</script>



<style scoped>
.read-the-docs {
  color: #888;
}
</style>