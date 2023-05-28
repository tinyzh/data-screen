<script setup lang="ts">
import ItemWrap from "@/components/item-wrap";

import { ref, reactive, onMounted, nextTick } from "vue";
import { currentGET } from "@/api";
import { graphic } from "echarts/core";
const option = ref({});
const getData = () => {
  currentGET("centerBottom", {}).then((res) => {
    console.log("安装计划", res);
    if (res.success) {
    } else {
      window["$message"]({
        text: res.msg,
        type: "warning",
      });
    }
  });
};

onMounted(() => {
  getData();
});

const data = ref([1, 2, 3, 4, 5, 6]);
</script>

<template>
  <ItemWrap class="contetn_center-bottom" title="可视化">
    <template v-slot:dashboard>
      <div class="dashboard">
        分屏：
        <div class="one"></div>
        <div class="multi"></div>
      </div>
    </template>
    <template v-slot:header>
      <div class="category-wrap">
        <div class="wrap">
          <div class="cate-item active">安检</div>
          <div class="cate-item">无人机</div>
          <div class="cate-item">安检</div>
          <div class="cate-item">安检</div>
        </div>
        <div class="times">巡更次数：<div class="num">1877次</div></div>
      </div>
    </template>
    <div class="visualization">
      <div class="item" v-for="item in data" :key="{ item }">
        <img src="@/assets/img/screen.jpg" class="inner" alt="" />
      </div>
    </div>
  </ItemWrap>
</template>

<style scoped lang="scss">
.visualization {
  width: 100%;
  padding: 30px 27px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 403px;
    height: 248px;
    background-color: #ffffff;
    border: 3px solid #3b71af;
    margin-bottom: 17px;
    .inner {
      width: 100%;
      height: 100%;
    }
  }
}
.category-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  margin-bottom: 10px;
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
  .times{
    font-size: 16px;
    color: #3B71AF;
    display: flex;
    margin-right: 32px;
    .num{
      color: #F2BC0A;
    }
  }
}
.dashboard {
  position: absolute;
  right: 0;
  top: 2px;
  display: flex;
  height: 22px;
  align-items: center;
  font-size: 14px;
  color: #4DCAF6;
  margin-right: 30px;
  .one{
    width: 22px;
    height: 22px;
    border: 1px solid #3B71AF;
    margin-right: 10px;
    cursor: pointer;
  }
  .multi{
    width: 22px;
    height: 22px;
    background-image: url("@/assets/img/multi.png");
    cursor: pointer;
  }
}
</style>
