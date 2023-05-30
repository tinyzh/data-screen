<script setup lang="ts">
import CenterMap from "./center-map.vue";
import firmData from "./firm-data.vue";

</script>

<template>
  <div class="title">
    <div class="title-inner">企业管理</div>
    <div class="wire"></div>
  </div>
  <div class="index-box">
    <div class="content-left">
      <firmData></firmData>
    </div>
    <div class="content-right">
      <div class="firm_title">企业总数: <span class="num">1684</span></div>
      <CenterMap class="contetn_center_top" title="设备分布图" />
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
    border: 1px solid #3B71AF;
  }
}

.content-left {
  margin-left: 30px;
  margin-top: 130px;
}


.content-right {
  flex: 1;
  margin: 0 82px;
  display: flex;
  flex-direction: column;
  position: relative;
  // justify-content: space-around;
}

.firm_title {
    align-items: center;
    font-size: 22px;
    color: #4dcaf6;
    position: absolute;
    left:464px;
    top: 40px;
    .num {
      color: #ffffff;
      display: inline-block;
      margin-left: 8px;
      font-weight: bold;
    }
  }
</style>
