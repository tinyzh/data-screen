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
      trigger: "item",
      formatter: function (data: any) {
        console.log(data, 'data')
        return (
          data.name + "<br/>" + data.value + '<br />' + data.percent + "%"
        ); //将小数转化为百分数显示
      },
    },
    color:['#FFD966', '#4DCAF6'],
    legend: {
      top: "0",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: "{d}% \n {b}",
          textStyle: {
                color: "#fff",
                align: "right",
                fontSize: 14,
              },
        },
        itemStyle: {
          borderRadius: 2,
          borderColor: "#fff",
          borderWidth: 2,
        },
        data: [
          { value: 1048, name: "无证" },
          { value: 735, name: "有证" },
        ],
        emphasis: {},
      },
    ],
  };
};
</script>

<template>
  <div class="company">
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
