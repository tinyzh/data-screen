<script setup lang="ts">
import projectInfo from "./projectInfo.vue";
import CenterMap from "./center-map.vue";
import personInfo from "./personInfo.vue";
</script>

<template>
  <div class="title">
    <div class="title-inner">项目管理</div>
    <div class="wire"></div>
  </div>
  <div class="index-box">
    <div class="content-left">
      <projectInfo></projectInfo>
    </div>
    <div class="content-right">
      <CenterMap class="contetn_center_top" title="设备分布图" />
      <personInfo></personInfo>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
  margin-top: 13.5px;
}

.title {
  width: 100%;

  .title-inner {
    width: 100%;
    height: 32px;
    background: url("@/assets/img/business-img/item-title.png") center center;
    background-size: cover;
    margin-bottom: 8px;
    font-size: 18px;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .wire {
    width: 100%;
    height: 0px;
    opacity: 1;
    border: 1px solid #3b71af;
  }
}

.content-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  // justify-content: space-around;
}
</style>
