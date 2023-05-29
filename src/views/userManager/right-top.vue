<script setup lang="ts">
import { ref, onMounted } from "vue";
import { currentGET } from "@/api";
import { graphic } from "echarts/core";
const option = ref({});
const getData = () => {
  currentGET("rightTop", {}).then((res) => {
    console.log("报警次数 ", res);
    if (res.success) {
    } else {
    }
  });
  option.value = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['支出','收入']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'value',
                    splitLine:{
                　　　　show:false
                　　},
                    //横坐标的负半轴的  "坐标轴" 上显示是正数
                    axisLabel:{
                        show:true,//不显示坐标轴的数字
                        formatter:function(value){
                            if (value<0) {
                                return -value;
                            }
                        }
                    }
                }
            ],
            yAxis : [
                {
                    show:true,//纵坐标显示
                    type : 'category',
                    position:'left',//纵向坐标显示位置 可选为：left | right
                    axisTick : {show: false},
                    splitArea : {show : true},
                    splitLine:{
                　　　　show:false//网格线不显示
                　　 },
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            color: ['#66CC99','#CC66CC'],
            series : [

                {
                    name:'收入',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:[320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name:'支出',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            /*
                            *处理横坐标负半轴这边的  "柱状"  显示的数
                            *后台传过来是负数，显示时是正数
                             */
                            formatter: function (value) {
                                if(value.data<0){
                                    return -value.data;
                                }
                            },
                        }
                    },
                    data:[-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        };
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="check-work">
    <v-chart class="chart" :option="option" height="180" />
   

    

    

    
    
  </div>
</template>

<style scoped lang="scss">
.check-work {
  width: 100%;
  height: 360px;
  padding: 35px 32px;
  
}
</style>
