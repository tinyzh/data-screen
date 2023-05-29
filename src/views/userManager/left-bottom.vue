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
      show: false,
    },
    colors: colors,
    legend: {
      show: false,
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: degreeData,
      },
    ],
  };
};
const degreeData = reactive([
  {
    name: "博士及以上",
    percent: "12%",
    value: 300,
  },
  {
    name: "硕士",
    percent: "12%",
    value: 300,
  },
  {
    name: "本科",
    percent: "12%",
    value: 300,
  },
  {
    name: "大专",
    percent: "12%",
    value: 300,
  },
  {
    name: "中专",
    percent: "12%",
    value: 300,
  },
  {
    name: "高中",
    percent: "12%",
    value: 300,
  },
  {
    name: "初中及以下",
    percent: "12%",
    value: 300,
  },
]);
const colors = [
  "#fff",
  "#FD900A",
  "#1FE1FC",
  "#FFF098",
  "#1AFBCD",
  "#627EFE",
  "#ABEF88",
];
</script>

<template>
  <div class="company">
    <div class="pie">
      <v-chart class="chart" :option="option" height="180" />
    </div>
    <div class="degree">
      <div class="item" v-for="(val, idx) in degreeData" :key="val.name">
        <div class="icon" :style="{ background: colors[idx] }"></div>
        <div
          class="line"
          :style="{
            'border-left-color': colors[idx],
            'border-bottom-color': colors[idx],
          }"
        ></div>
        <div class="title">{{ val.name }}</div>
        <div class="data" :style="{ color: colors[idx] }">
          <div>{{ val.percent }}</div>
          <div>{{ val.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.company {
  height: 260px;
  width: 100%;
  display: flex;
  padding: 22px 11px 0;
  justify-content: space-between;
  align-items: center;
  .pie {
    width: 140px;
    height: 140px;
  }
  .degree {
    width: 190px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 27px;
    .item {
      width: 75px;
      position: relative;
      font-size: 14px;
      margin-bottom: 7px;
      .icon {
        width: 10px;
        height: 10px;
        border-radius: 2px;
        position: absolute;
        top: 4px;
        left: -20px;
      }
      .line {
        width: 11px;
        height: 25px;
        border: 1px solid transparent;
        position: absolute;
        left: -15px;
        bottom: 8px;
      }
      .data {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
      }
    }
  }
  .chart {
    margin: 0 auto;
    height: 160px;
    width: 160px;
  }
}
</style>
