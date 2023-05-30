<template>
  <EmptyWrap width="746px" height="370px">
    <ItemTop :num="data.total_log" title="工作日志" :src="img" :dataList="dataList"></ItemTop>
    <v-chart class="chart" :option="option" />
  </EmptyWrap>
</template>

<script setup lang="ts">
import img from "@/assets/img/kaoqin/work.png";
import ItemTop from "@/components/item-top/item-top.vue";
import EmptyWrap from "@/components/empty-wrap/empty-wrap.vue";
import { ref, reactive } from "vue";
import { graphic } from "echarts/core";
const props = withDefaults(
  defineProps<{
    data: Object;
  }>(),
  {
    data: () => ({}),
  }
);
const dataList=props.data.table_log.xdata_log
const option = ref({});

const setOption = () => {
  option.value = {
    xAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      // data:props.data.table_report.xdata_report,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#00C2E4",
          width: 1,
        },
      },
    },
    // y轴数据
    yAxis: {
      type: "category",
      inverse: true,
      data: props.data.table_report.ydata_report,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#00C2E4",
          width: 1,
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
        data: [1100, 300,200,200],
        itemStyle: {},
        barWidth: 14,
        itemStyle:{
            color:"#FFC341"
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
.chart {
  margin-top: -80px;
  height: 250px;
}
</style>
