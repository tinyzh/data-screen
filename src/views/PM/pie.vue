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
    legend: {
      orient: "horizontal",
      top: "top",
      itemGap: 30, // 设置图例项之间的间距
      data: [
        "场地护卫",
        "活动安保",
        "随身护卫",
        "危机处理",
        "安全培训",
        "安全咨询",
        "网络安全",
        "联网报警",
        "海外安全",
        "现金及贵重物品押运",
        "犬防",
        "移动财产看护",
      ],
      textStyle: {
        color: "#fff", // 设置图例字体颜色
        rich: {
          a: {
            width: 55,
            fontSize: 14,
            lineHeight: 14,
          },
        },
      },
      formatter: ["{a|{name}}"].join("\n"),
    },
    series: [
      {
        type: "pie",
        radius: ["0%", "60%"], // 设置饼图的内外半径
        data: [
          { value: 335, name: "场地护卫" },
          { value: 310, name: "活动安保" },
          { value: 234, name: "随身护卫" },
          { value: 135, name: "危机处理" },
          { value: 423, name: "安全培训" },
          { value: 99, name: "安全咨询" },
          { value: 220, name: "网络安全" },
          { value: 179, name: "联网报警" },
          { value: 178, name: "海外安全" },
          { value: 333, name: "现金及贵重物品押运" },
          { value: 137, name: "犬防" },
          { value: 237, name: "移动财产看护" },
        ],
        center: ["50%", "70%"], // 设置饼图的位置
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
  width: 360px;
  height: 500px;
  margin-left: 26px;

  .chart {
    width: 360px;
    height: 500px;
  }
}
</style>
