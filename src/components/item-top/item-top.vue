<template>
  <div class="apply-top">
    <div class="job-apply">
      <img :src="src" alt="" />
      <div class="txt">
        <span>{{ num }}</span>
        <span>{{ title }}</span>
      </div>
    </div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script setup lang="ts">
import { graphic } from "echarts/core";
import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    num: number | string;
    title: number | string;
    src: string;
    dataList:Array<any>
    color1: string;
    color2: string;
  }>(),
  {
    num: "",
    title: "",
    src: "",
    dataList:()=>([]),
    color1: "#3B71AF",
    color2: "#F97878"
  }
);
const option = ref({});
const setOption = () => {
  option.value = {
    xAxis: {
      type: "value",
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    // y轴数据
    yAxis: {
      type: "category",
      inverse: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#3B71AF",
          width: 2,
        },
      },
      axisTick: {
        show: false,
      },
    },
    // 数据系列
    series: [
      {
        type: "bar",
        data: [props.dataList[0]],
        itemStyle: {
          color: {
            type: "linear",
            x: 0, // 右
            y: 0, // 上
            x2: 1, // 左
            y2: 0, // 下
            colorStops: [
              {
                offset: 0,
                color: "#3B71AF ", // 渐变色起点颜色
              },
              {
                offset: 1,
                color: "#36EFEC ", // 渐变色终点颜色
              },
            ],
          },
        },
        barWidth: 13,
        label: {
          show: true,
          formatter:"  通过  "+"{c}",
          position: "right",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
      },
      {
        type: "bar",
        data: [props.dataList[1]],
        itemStyle: {
          color: {
            type: "linear",
            x: 0, // 右
            y: 0, // 上
            x2: 1, // 左
            y2: 0, // 下
            colorStops: [
              {
                offset: 0,
                color: props.color1, // 渐变色起点颜色
              },
              {
                offset: 1,
                color: props.color2, // 渐变色终点颜色
              },
            ],
          },
        },
        barWidth: 13,
        label: {
          show: true,
          formatter:"  未通过数  "+"{c}",
          position: "right",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
      },
    ],
    grid: {
      show: false,
    },
  };
};
setOption();
</script>

<style scoped lang="scss">
.apply-top {
  margin-bottom: 50px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  .job-apply {
    display: flex;
    width: 180px;
    img {
      width: 43px;
      height: 45px;
      margin-right: 12px;
    }
    .txt {
      display: flex;
      flex-direction: column;
      span:first-child {
        font-size: 16px;
        color: #1beae6;
      }
      span:last-child {
        font-size: 18px;
      }
    }
  }
}
</style>
