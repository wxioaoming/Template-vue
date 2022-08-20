<template>
  <div id="iconMap"></div>
</template>


<script setup lang='ts'>
  import {getCurrentInstance,onMounted,reactive} from 'vue'
  const interItan = getCurrentInstance();
  const echarts = interItan.appContext.config.globalProperties.$echarts;
  const props = defineProps({
    //对应是数据
    dateList:{
      type:Array,
      default:''
    }
  })
  
  const options = {
      // backgroundColor:'rgba(255, 255, 255, 0)',
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: props.dateList,
          type: 'line'
        }
      ]
    }

   onMounted(()=>{
    const myCharts = echarts.init(document.getElementById('iconMap'))
    myCharts.setOption(options);
  })



</script>


<style scoped>
#iconMap{
  width: calc(2vmin + 500px);
  height: calc(2vmin + 500px);
}
</style>