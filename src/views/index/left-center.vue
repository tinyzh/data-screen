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
    xAxis: {
      type: "category",
      data: [
        "深圳",
        "广州",
        "长沙",
        "北京",
        "天津",
        "重庆",
        "成都",
        "杭州",
        "上海",
      ],
      axisLine: {
        lineStyle: {
          color: "#00C2E4",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#000000",
          width: 1,
          type: "solid",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#262732"],
          width: 0,
          type: "solid",
        },
      },

      axisLabel: {
        color: "#00C2E4",
      },
    },
    series: [
      {
        data: [40, 20, 15, 22, 36, 12, 31, 45, 66],
        type: "bar",
        barWidth: 6,
        itemStyle: {
          color: "#FFC341",
          barBorderRadius: [2, 2, 0, 0], // （顺时针左上，右上，右下，左下）
        },
      },
    ],
  };
};
</script>

<template>
  <div class="company">
    <div class="title">企业总数: <span class="num">1684</span></div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<style scoped lang="scss">
.company {
  height: 250px;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #4dcaf6;
    margin-top: 6px;
    justify-content: center;
    .num {
      color: #ffffff;
      display: inline-block;
      margin-left: 8px;
    }
  }
  .chart {
    height: 250px;
  }
}
</style>
