<script setup lang="ts">
import { ref, reactive } from "vue";
import * as echarts from "echarts";
import "echarts-gl" // 3d图表库
import CapsuleChart from "@/components/datav/capsule-chart";
import { currentGET } from "@/api";
import { getPie3D, getParametricEquation } from "./chart";

const config = ref({
  showValue: true,
  unit: "次",
});
const data = ref([]);
const getData = () => {
  currentGET("rightCenter").then((res) => {
    console.log("企业管理", res);
    if (res.success) {
      data.value = res.data;
    } else {
      window["$message"]({
        text: res.msg,
        type: "warning",
      });
    }
  });
};
// getData();



const colors = [
  "#FFB947",
  "#28ACEC",
  "#00E2FD",
  "#02FCE3",
  "#FFEA78",
  "#78FFA0",
];

const option = {
  
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 2
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        
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

const users = [
  {
    name: '保安员',
    value: '10'
  },
  {
    name: '保安队长',
    value: '102'
  },
  {
    name: '项目经理',
    value: '103'
  },
  {
    name: '储备干部',
    value: '188'
  },
  {
    name: '特勤人员',
    value: '1022'
  },
  {
    name: '领班',
    value: '10'
  }
]

</script>

<template>
  <div class="right_bottom">
    <div class="chart-container">
      <v-chart class="chart" :option="option" />
      <div class="item" v-for="(user, idx) of users" :key="idx">
        <div class="box" :style="{'border-color': colors[idx]}"></div>
        <div class="text" :style="{'color': colors[idx]}">{{ user.name }}</div>
        <div class="nums">{{user.value}}人</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right_bottom {
  box-sizing: border-box;
  padding: 30px 0px;
  .chart{
    height: 200px;
  }
  .chart-container {
    width: 100%;
    // height: 140px;
    .chart,
    .bg {
      width: 100%;
      height: 100%;
    }
    .item{
      display: flex;
      width: 200px;
      align-items: center;
      font-size: 16px;
      margin: 10px auto 0;
      justify-content: center;
      .box{
        width: 10px;
        height: 10px;
        border: 2px solid transparent;
        border-radius: 2px;
        background: #fff;
      }
      .text{
        font-size: 16px;
        margin-left: 10px;
      }
      .nums{
        margin-left: auto;
      }
    }
  }
}
</style>
