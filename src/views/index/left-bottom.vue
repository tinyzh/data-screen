<script setup lang="ts">
import { ref, reactive } from "vue";
import { graphic } from "echarts/core";
import { currentGET } from "@/api";

const option = ref({});
const state = reactive({
  lockNum: 0,
  offlineNum: 0,
  onlineNum: 0,
  alarmNum: 0,
  totalNum: 0,
});

const getData = () => {
  currentGET("leftCenter").then((res) => {
    console.log(res);
    if (res.success) {
      state.lockNum = res.data.lockNum;
      state.offlineNum = res.data.offlineNum;
      state.onlineNum = res.data.onlineNum;
      state.totalNum = res.data.totalNum;
      state.alarmNum = res.data.alarmNum;
      setOption();
    }
  });
};
getData();
const setOption = () => {
  option.value = {
    tooltip: {
    trigger: 'item'
  },
  grid: {
    height: '180px',
    width: '350px'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: 'middle',
    textStyle: {
      color: "#ffffff"
    }
  },
  series: [
    {
      type: 'pie',
      radius: '90%',
      center: ['75%', '50%'],
      labelLine: {
        show: false
      },
      label: {
        show: false,
        position: 'center'
      },
      data: [
        { value: 1048, name: '场地护卫' },
        { value: 735, name: '随身护卫' },
        { value: 580, name: '活动安保' },
        { value: 484, name: '现金及贵重物品押运' },
        { value: 300, name: '安全培训' },
        { value: 300, name: '其它' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
    
    
  };
};
</script>

<template>
  <div class="company">
    <div class="title">项目总数: <span class="num">1684</span></div>
    <v-chart class="chart" :option="option" height="180" />
  </div>
</template>

<style scoped lang="scss">
.company {
  height: 220px;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #4dcaf6;
    margin-top: 6px;
    justify-content: left;
    padding: 15px 0 0  30px;
    .num {
      color: #ffffff;
      display: inline-block;
      margin-left: 8px;
    }
  }
  .chart {
    margin: 0 auto;
    height: 180px;
    width: 350px;
  }
}
</style>
