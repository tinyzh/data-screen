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
        tooltip: {
            show: true,
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
            formatter: function (params: any) {
                return (
                    '<span style="font-size: 14px;font-weight: bold;">' +
                    params[0].seriesName +
                    "</span>" +
                    "<br/>" +
                    params[0].marker +
                    '<span style="color:' +
                    params[0].color +
                    ';font-size: 14px;font-weight: bold;">' +
                    "\n" +
                    params[0].name +
                    "岁: " +
                    params[0].value +
                    "人" +
                    "</span>"
                );
            },
        },
        legend: {
            left: "42%", //图例距离左边的距离
            top: "6%",
            textStyle: {
                // 图例文字样式  隐藏文字
                color: "#fff",
            },
            selectedMode: false,
            itemWidth: 20,
            itemHeight: 20, //图例宽高
            itemGap: 15, //图例的间隔
            data: [
                {
                    name: "男",
                    // icon: `image://${man}`,
                },
                {
                    name: "女",
                    // icon: `image://${woman}`,
                },
            ],
        },
        grid: [
            // 左
            {
                top: "22%",
                bottom: "2%",
                left: "20%",
                width: "40%",
                height: "70%",
                containLabel: true,
            },
            // 中
            {
                top: "20%",
                bottom: "0%",
                left: "60px", // 调整left值使图表中间信息居左显示
                width: "10%",
                height: "70%",
            },
            // 右
            {
                top: "22%",
                bottom: "0%",
                right: "0%",
                width: "40%",
                height: "70%",
                containLabel: true,
            },
        ],
        xAxis: [
            {
                type: "value",
                inverse: true,
                show: true,
                axisLabel: {
                    color: "#7e8daa",
                    fontSize: "12",
                    fontWeight: "bold",
                    textStyle: {
                        fontFamily: "BoldCondensed",
                    },
                },
                splitLine: {
                    // 网格线
                    show: true,
                    lineStyle: {
                        color: ["rgba(22, 39, 60, 1)"],
                        width: 1,
                        type: "dotted",
                    },
                },
                axisTick: {
                    //y轴刻度线
                    show: false,
                },
                axisLine: {
                    //轴线
                    // show: false,
                    lineStyle: {
                        color: "rgba(25, 35, 57,0.2)",
                    },
                },
            },
            {
                gridIndex: 1,
                show: true,
                axisLabel: {
                    color: "#7e8daa",
                    fontSize: "12",
                    fontWeight: "bold",
                    textStyle: {
                        fontFamily: "BoldCondensed",
                    },
                },
                splitLine: {
                    // 网格线
                    show: false,
                    lineStyle: {
                        color: ["rgba(22, 39, 60, 1)"],
                        width: 1,
                        type: "dotted",
                    },
                },
                axisTick: {
                    //y轴刻度线
                    show: false,
                },
                axisLine: {
                    //轴线
                    show: false,
                },
            },
            {
                gridIndex: 2,
                type: "value",
                show: true,
                axisLabel: {
                    color: "#7e8daa",
                    fontSize: "12",
                    fontWeight: "bold",
                    textStyle: {
                        fontFamily: "BoldCondensed",
                    },
                },
                splitLine: {
                    // 网格线
                    show: true,
                    lineStyle: {
                        color: ["rgba(22, 39, 60, 1)"],
                        width: 1,
                        type: "dotted",
                    },
                },
                axisTick: {
                    //y轴刻度线
                    show: false,
                },
                axisLine: {
                    //轴线
                    // show: false,
                    lineStyle: {
                        color: "rgba(25, 35, 57,0.2)",
                    },
                },
            },
        ],
        yAxis: [
            {
                axisLabel: {
                    show: false,
                },
                align: "center",
                type: "category",
                position: "left",
                axisTick: {
                    //y轴刻度线
                    show: false,
                },
                data: ["16-20", "21-30", "31-40", "41-50", "51-60", '60以上'],
                axisLine: {
                    //轴线
                    // show: false,
                    lineStyle: {
                        color: "rgba(25, 35, 57,0.2)",
                        fontSize: "12"
                    },
                },
                min: 0, // 设置最小值为0
            },
            {
                axisLabel: {
                    color: "#7e8daa",
                    fontSize: "12",
                    fontWeight: "bold",
                    textStyle: {
                        fontFamily: "BoldCondensed",
                    },
                },
                gridIndex: 1,
                position: "left",
                axisLine: {
                    show: false,
                },
                min: 0, // 设置最小值为0
                type: "category",
                inverse: false,
                axisTick: {
                    //y轴刻度线
                    show: false,
                },
                data: [
                    "16-20",
                    "21-30",
                    "31-40",
                    "41-50",
                    "51-60",
                    "60以上"
                ], //使用空格使文字居中
            },
            {
                gridIndex: 2,
                position: "left",
                axisLabel: {
                    show: false,
                },
                type: "category",
                inverse: false,
                axisTick: {
                    //y轴刻度线
                    show: false,
                },
                axisLine: {
                    //轴线
                    // show: false,
                    lineStyle: {
                        color: "rgba(25, 35, 57,0.2)",
                    },
                },
                min: 0, // 设置最小值为0
                data: ["16-20", "21-30", "31-40", "41-50", "51-60", "60以上"],
            },
        ],
        series: [
            {
                type: "bar",
                barWidth: 15,
                name: "男",
                itemStyle: {
                    color: "#00C2E4",
                },
                data: [50, 15, 47, 22, 77, 12],
            },
            {
                type: "bar",
                barWidth: 15,
                xAxisIndex: 2,
                yAxisIndex: 2,
                name: "女",
                itemStyle: {
                    color: "#F2BC0A",
                },
                data: [20, 5, 30, 46, 16, 6],
            },
        ],
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
    padding: 35px 0px;
    display: flex;
    justify-content: center;
    .chart{
      width: 350px;
    }

}
</style>
