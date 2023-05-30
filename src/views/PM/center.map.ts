

//mapData数据结构
export interface MapdataType {
    name: string;
    value: [number, number, number]; //x,y,value  第一个x 第二个y  第三个value
}
export const optionHandle = (regionCode: string,
    list: object[],
    mapData: MapdataType[]) => {
    let top = 45;
    let zoom = ["china"].includes(regionCode) ? 1.05 : 1;
    return {
        backgroundColor: "rgba(0,0,0,0)",
        tooltip: {
            show: false,
        },
        legend: {
            show: false,
        },
        visualMap: {
            seriesIndex: 0,
            left: 20,
            bottom: 20,
            show: false,
            pieces: [
                { gte: 1000, label: "1000个以上" }, // 不指定 max，表示 max 为无限大（Infinity）。
                { gte: 600, lte: 999, label: "600-999个" },
                { gte: 200, lte: 599, label: "200-599个" },
                { gte: 50, lte: 199, label: "49-199个" },
                { gte: 10, lte: 49, label: "10-49个" },
                { lte: 9, label: "1-9个" }, // 不指定 min，表示 min 为无限大（-Infinity）。
            ],
            inRange: {
                // 渐变颜色，从小到大
                // FFFFFF,EDF7FD,DBF0FA,C9E8F8,B7E1F6,A5D9F3,93D2F1,81CAEF,6FC2EC,5DBBEA,4AB3E8,38ACE5,26A4E3,1C9AD9,1A8DC7,
                // 1781B5,
                // 1573A2,136790,105A7E,0E4D6C,0C405A,093348,072636,051A24,020D12
                color: [
                    // "#EDF7FD",
                    "rgba(237,247,253,.8)",
                    // "#B7E1F6",
                    "rgba(183,225,246,.9)",
                    // "#81CAEF",
                    "rgba(129,202,239,.9)",
                    // "#38ACE5",
                    "rgba(56,172,229,.9)",
                    // "#1781B5",
                    "rgba(23,129,181,.9)",
                    // "#105A7E",
                    "rgba(16,90,126,0.9)"
                ],
            },
            textStyle: {
                color: "#fff",
            },
        },
        geo: {
            map: regionCode,
            roam: false,
            selectedMode: false, //是否允许选中多个区域
            // layoutCenter: ['10%', '50%'], // 设置地图的中心位置
            layoutSize: '100%', // 设置地图的尺寸
            zoom: zoom,
            top: top,
            // aspectScale: 0.78,
            show: false,
        },
        series: [
            {
                name: "MAP",
                type: "map",
                map: regionCode,
                // aspectScale: 0.78,
                data: list,
                // data: [1,100],
                selectedMode: false, //是否允许选中多个区域
                zoom: zoom,
                geoIndex: 1,
                top: top,
                tooltip: {
                    show: true,
                    formatter: function (params: any) {
                        if (params.data) {
                            return params.name + "：" + params.data["value"];
                        } else {
                            return params.name;
                        }
                    },
                    backgroundColor: "rgba(0,0,0,.6)",
                    borderColor: "rgba(147, 235, 248, .8)",
                    textStyle: {
                        color: "#FFF",
                    },
                },
                markPoint: {
                    data: [
                        {
                            name: '北京', coord: [116.405285, 39.904989],
                            itemStyle: {
                                color: 'rgba(59, 113, 175, 1)',
                                borderColor: '#fff', // 设置白色边框
                                borderWidth: 1 // 设置边框宽度
                            },
                            label: {
                                show: true, // 显示标签
                                formatter: '21', // 标签内容为 "数字1"
                                color: '#fff', // 标签文本颜色
                                fontSize: 12 // 标签文本字体大小
                            }
                        },
                        {
                            name: '湖南', coord: [112.982279, 28.19409],
                            itemStyle: {
                                color: 'rgba(59, 113, 175, 1)',
                                borderColor: '#fff', // 设置白色边框
                                borderWidth: 1 // 设置边框宽度
                            },
                            label: {
                                show: true, // 显示标签
                                formatter: '21', // 标签内容为 "数字1"
                                color: '#fff', // 标签文本颜色
                                fontSize: 12 // 标签文本字体大小
                            }
                        },
                        {
                            name: '辽宁', coord: [123.429096, 41.796767],
                            itemStyle: {
                                color: 'rgba(59, 113, 175, 1)',
                                borderColor: '#fff', // 设置白色边框
                                borderWidth: 1 // 设置边框宽度
                            },
                            label: {
                                show: true, // 显示标签
                                formatter: '21', // 标签内容为 "数字1"
                                color: '#fff', // 标签文本颜色
                                fontSize: 12 // 标签文本字体大小
                            }
                        },
                        {
                            name: '济南', coord: [117.120095, 36.6512],
                            itemStyle: {
                                color: 'rgba(59, 113, 175, 1)',
                                borderColor: '#fff', // 设置白色边框
                                borderWidth: 1 // 设置边框宽度
                            },
                            label: {
                                show: true, // 显示标签
                                formatter: '21', // 标签内容为 "数字1"
                                color: '#fff', // 标签文本颜色
                                fontSize: 12 // 标签文本字体大小
                            }
                        },
                        {
                            name: '上海', coord: [121.473701, 31.230416],
                            itemStyle: {
                                color: 'rgba(59, 113, 175, 1)',
                                borderColor: '#fff', // 设置白色边框
                                borderWidth: 1 // 设置边框宽度
                            },
                            label: {
                                show: true, // 显示标签
                                formatter: '21', // 标签内容为 "数字1"
                                color: '#fff', // 标签文本颜色
                                fontSize: 12 // 标签文本字体大小
                            }
                        },
                        {
                            name: '四川', coord: [104.075931, 30.651652],
                            itemStyle: {
                                color: 'rgba(59, 113, 175, 1)',
                                borderColor: '#fff', // 设置白色边框
                                borderWidth: 1 // 设置边框宽度
                            },
                            label: {
                                show: true, // 显示标签
                                formatter: '21', // 标签内容为 "数字1"
                                color: '#fff', // 标签文本颜色
                                fontSize: 12 // 标签文本字体大小
                            }
                        },
                        {
                            name: '广东', coord: [113.26641, 23.132324],
                            itemStyle: {
                                color: 'rgba(59, 113, 175, 1)',
                                borderColor: '#fff', // 设置白色边框
                                borderWidth: 1 // 设置边框宽度
                            },
                            label: {
                                show: true, // 显示标签
                                formatter: '21', // 标签内容为 "数字1"
                                color: '#fff', // 标签文本颜色
                                fontSize: 12 // 标签文本字体大小
                            }
                        },
                    ],
                },
                label: {
                    show: false,
                    color: "#000",
                    // position: [-10, 0],
                    formatter: function (val: any) {
                        // console.log(val)
                        if (val.data !== undefined) {
                            return val.name.slice(0, 2);
                        } else {
                            return "";
                        }
                    },
                    rich: {},
                },
                emphasis: {
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        // areaColor: "rgba(56,155,183,.7)",
                        areaColor: {
                            type: "radial",
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(56,155,183, .8)", // 100% 处的颜色
                                },
                            ],
                            globalCoord: false, // 缺为 false
                        },
                        borderWidth: 1,
                    },
                },
                itemStyle: {
                    borderColor: "rgba(147, 235, 248, .8)",
                    borderWidth: 1,
                    areaColor: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺为 false
                    },
                    shadowColor: "rgba(128, 217, 248, .3)",
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                },
            },
            {
                data: mapData,
                type: "effectScatter",
                coordinateSystem: "geo",
                symbolSize: function (val: any) {
                    return 4;
                    // return val[2] / 50;
                },
                legendHoverLink: true,
                showEffectOn: "render",
                rippleEffect: {
                    // period: 4,
                    scale: 6,
                    color: "rgba(255,255,255, 1)",
                    brushType: "fill",
                },
                tooltip: {
                    show: true,
                    formatter: function (params: any) {
                        if (params.data) {
                            return params.name + "：" + params.data["value"][2];
                        } else {
                            return params.name;
                        }
                    },
                    backgroundColor: "rgba(0,0,0,.6)",
                    borderColor: "rgba(147, 235, 248, .8)",
                    textStyle: {
                        color: "#FFF",
                    },
                },
                label: {
                    formatter: (param: any) => {
                        return param.name.slice(0, 2);
                    },

                    fontSize: 11,
                    offset: [0, 2],
                    position: "bottom",
                    textBorderColor: "#fff",
                    textShadowColor: "#000",
                    textShadowBlur: 10,
                    textBorderWidth: 0,
                    color: "#FFF",
                    show: true,
                },
                // colorBy: "data",
                itemStyle: {
                    color: "rgba(255,255,255,1)",
                    borderColor: "rgba(2255,255,255,2)",
                    borderWidth: 4,
                    shadowColor: "#000",
                    shadowBlur: 10,
                },
            },
        ],
        //动画效果
        // animationDuration: 1000,
        // animationEasing: 'linear',
        // animationDurationUpdate: 1000
    };
}


export const regionCodes: any = {
    "中国": {
        "adcode": "100000",
        "level": "country",
        "name": "中华人民共和国"
    },
    "新疆维吾尔自治区": {
        "adcode": "650000",
        "level": "province",
        "name": "新疆维吾尔自治区"
    },
    "湖北省": {
        "adcode": "420000",
        "level": "province",
        "name": "湖北省"
    },
    "辽宁省": {
        "adcode": "210000",
        "level": "province",
        "name": "辽宁省"
    },
    "广东省": {
        "adcode": "440000",
        "level": "province",
        "name": "广东省"
    },
    "内蒙古自治区": {
        "adcode": "150000",
        "level": "province",
        "name": "内蒙古自治区"
    },
    "黑龙江省": {
        "adcode": "230000",
        "level": "province",
        "name": "黑龙江省"
    },
    "河南省": {
        "adcode": "410000",
        "level": "province",
        "name": "河南省"
    },
    "山东省": {
        "adcode": "370000",
        "level": "province",
        "name": "山东省"
    },
    "陕西省": {
        "adcode": "610000",
        "level": "province",
        "name": "陕西省"
    },
    "贵州省": {
        "adcode": "520000",
        "level": "province",
        "name": "贵州省"
    },
    "上海市": {
        "adcode": "310000",
        "level": "province",
        "name": "上海市"
    },
    "重庆市": {
        "adcode": "500000",
        "level": "province",
        "name": "重庆市"
    },
    "西藏自治区": {
        "adcode": "540000",
        "level": "province",
        "name": "西藏自治区"
    },
    "安徽省": {
        "adcode": "340000",
        "level": "province",
        "name": "安徽省"
    },
    "福建省": {
        "adcode": "350000",
        "level": "province",
        "name": "福建省"
    },
    "湖南省": {
        "adcode": "430000",
        "level": "province",
        "name": "湖南省"
    },
    "海南省": {
        "adcode": "460000",
        "level": "province",
        "name": "海南省"
    },
    "江苏省": {
        "adcode": "320000",
        "level": "province",
        "name": "江苏省"
    },
    "青海省": {
        "adcode": "630000",
        "level": "province",
        "name": "青海省"
    },
    "广西壮族自治区": {
        "adcode": "450000",
        "level": "province",
        "name": "广西壮族自治区"
    },
    "宁夏回族自治区": {
        "adcode": "640000",
        "level": "province",
        "name": "宁夏回族自治区"
    },
    "浙江省": {
        "adcode": "330000",
        "level": "province",
        "name": "浙江省"
    },
    "河北省": {
        "adcode": "130000",
        "level": "province",
        "name": "河北省"
    },
    "香港特别行政区": {
        "adcode": "810000",
        "level": "province",
        "name": "香港特别行政区"
    },
    "台湾省": {
        "adcode": "710000",
        "level": "province",
        "name": "台湾省"
    },
    "澳门特别行政区": {
        "adcode": "820000",
        "level": "province",
        "name": "澳门特别行政区"
    },
    "甘肃省": {
        "adcode": "620000",
        "level": "province",
        "name": "甘肃省"
    },
    "四川省": {
        "adcode": "510000",
        "level": "province",
        "name": "四川省"
    },
    "天津市": {
        "adcode": "120000",
        "level": "province",
        "name": "天津市"
    },
    "江西省": {
        "adcode": "360000",
        "level": "province",
        "name": "江西省"
    },
    "云南省": {
        "adcode": "530000",
        "level": "province",
        "name": "云南省"
    },
    "山西省": {
        "adcode": "140000",
        "level": "province",
        "name": "山西省"
    },
    "北京市": {
        "adcode": "110000",
        "level": "province",
        "name": "北京市"
    },
    "吉林省": {
        "adcode": "220000",
        "level": "province",
        "name": "吉林省"
    }
}