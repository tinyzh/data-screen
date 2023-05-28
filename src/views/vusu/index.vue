<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from "vue";

import ItemWrap from "@/components/item-wrap";
const data = ref([1, 2, 3, 4]);

const ready = ({ BMap, map }: any) => {
  //  对地图进行自定义操作
  map.setMapStyle({
    style: 'midnight'
  })
};

const path = [
  {
    lng: 116.297611,
    lat: 40.047363,
    content: '湘江大道与凤江路交叉口',
  },
  {
    lng: 116.302839,
    lat: 40.048219,
  },
  {
    lng: 116.308301,
    lat: 40.050566,
  },
  {
    lng: 116.305732,
    lat: 40.054957,
  },
  {
    lng: 116.304754,
    lat: 40.057953,
  },
  {
    lng: 116.306487,
    lat: 40.058312,
  },
  {
    lng: 116.307223,
    lat: 40.056379,
    content: '芙蓉路与天心路交叉口',
  },
];
const center = path[Math.ceil(path.length / 2)];
const startMark = path[0];
const endMark = path[path.length - 1];
</script>

<template>
  <div class="vusu-wrap">
    <div class="title">
      <div class="text">可视化</div>
      <div class="cate-wrap">
        所属公司
        <div class="select">
          长沙区第二分部
          <img src="@/assets/img/down.png" class="icon" alt="" />
        </div>
      </div>
      <div class="cate-wrap">
        所属项目
        <div class="select">
          长沙区南方电网
          <img src="@/assets/img/down.png" class="icon" alt="" />
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="cate-item active">安检</div>
      <div class="cate-item">无人机</div>
      <div class="cate-item">安检</div>
      <div class="cate-item">安检</div>
    </div>
    <div class="main">
      <div class="left">
        <div class="icon left_top"></div>
        <div class="icon right_top"></div>
        <div class="icon left_bottom"></div>
        <div class="icon right_bottom"></div>
        <div class="visualization">
          <div class="item" v-for="item in data" :key="{ item }">
            <img src="@/assets/img/screen.jpg" class="inner" alt="" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="desc">
          巡更次数:
          <div class="num">1866次</div>
        </div>
        <div class="map-container">
          <baidu-map
            class="map"
            :center="center"
            :scroll-wheel-zoom="true"
            :zoom="15"
            @ready="ready"
          >
            <bm-polyline
              :path="path"
              stroke-color="#4DCAF6"
              :stroke-opacity="0.5"
              :stroke-weight="3"
              :editing="false"
            ></bm-polyline>
            <bm-point-collection
              :points="[{ lng: startMark.lng, lat: startMark.lat }, { lng: endMark.lng, lat: endMark.lat }]"
              color="#F2BC0A"
              size="BMAP_POINT_SIZE_NORMAL"
            ></bm-point-collection>
            <bm-label
              :position="{ lng: startMark.lng, lat: startMark.lat }"
              :content="startMark.content"
              :labelStyle="{color: '#4DCAF6', fontSize : '16px'}"
              :offset="{width: -100, height: 10}"
            ></bm-label>
            <bm-label
              :position="{ lng: endMark.lng, lat: endMark.lat }"
              :content="endMark.content"
              :labelStyle="{color: '#4DCAF6', fontSize : '16px'}"
              :offset="{width: 20, height: -25}"
            ></bm-label>
            <bml-lushu
              :path="path"
              :rotation="true"
              :speed="20 * 10"
              :infoWindow="true"
            >
            </bml-lushu>
          </baidu-map>
          <div class="search">
            <input type="text" class="input" placeholder="输入路段名字搜索" />
            <img src="@/assets/img/search.png" class="icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vusu-wrap {
  width: 100%;
  .title {
    width: 100%;
    background-image: url("@/assets/img/vusu-title.png");
    height: 47px;
    display: flex;
    align-items: center;
    .text {
      font-size: 18px;
      color: #fff;
      margin-left: 34px;
    }
    .cate-wrap {
      margin-left: 166px;
      height: 34px;
      display: flex;
      align-items: center;
      color: #4dcaf6;
      font-size: 16px;
      margin-right: 30px;
      &:last-child {
        margin-left: 0;
      }
      .select {
        display: flex;
        width: 258px;
        height: 33px;
        background: rgba(81, 251, 254, 0.1);
        opacity: 1;
        border: 1px solid #148fd1;
        padding: 0 10px 0 22px;
        align-items: center;
        justify-content: space-between;
        margin-left: 20px;
        cursor: pointer;
        .icon {
          width: 21px;
          height: 11px;
        }
      }
    }
  }

  .wrap {
    display: flex;
    .cate-item {
      padding: 0 20px;
      height: 40px;
      color: #3b71af;
      font-size: 18px;
      line-height: 40px;
      cursor: pointer;
      &.active {
        background: linear-gradient(
          360deg,
          #1590da 0%,
          rgba(81, 236, 254, 0.2) 100%
        );
        color: #fff;
      }
    }
  }
  .main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 42px;
  }
  .left {
    position: relative;
    width: 1203px;
    margin-top: 10px;
    padding: 33px 18px;
    height: 100%;
    .icon {
      position: absolute;

      width: 32px;
      height: 42px;

      &.left_top {
        left: 0px;
        top: 0px;
        background-image: url("@/assets/img/left_top.png");
      }

      &.left_bottom {
        left: 0;
        bottom: 0;
        background-image: url("@/assets/img/left_bottom.png");
      }

      &.right_bottom {
        right: 0;
        bottom: 0;
        background-image: url("@/assets/img/right_bottom.png");
      }

      &.right_top {
        right: 0;
        top: 0;
        background-image: url("@/assets/img/right_top.png");
      }
    }
  }
  .right {
    flex: 1;
    .desc {
      font-size: 32px;
      color: #3b71af;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      line-height: 1;
      .num {
        color: #f2bc0a;
        font-size: 36px;
        margin-left: 30px;
      }
    }
    .map-container {
      width: 100%;
      height: 777px;
      border: 1px solid #4dcaf6;
      margin-top: 18px;
      position: relative;
      display: flex;
      justify-content: center;
      .search {
        width: 428px;
        height: 49px;
        background: #061731;
        border-radius: 0px 0px 0px 0px;
        border: 1px solid #3b71af;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 18px 0 33px;
        top: 20px;
        position: absolute;
        .icon {
          width: 33px;
          height: 34px;
          cursor: pointer;
        }
        .input {
          font-size: 18px;
          color: #ffffff;
          background: transparent;
        }
      }
      .map {
        width: 100%;
        height: 760px;
      }
    }
  }

  .visualization {
    width: 100%;
    // padding: 30px 27px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      width: 575px;
      height: 350px;
      background-color: #ffffff;
      border: 3px solid #3b71af;
      margin-bottom: 27px;
      .inner {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
