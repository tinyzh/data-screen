<script setup lang="ts">
import ItemWrap from "@/components/item-wrap";
import LeftTop from "./left-top.vue";
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";
</script>

<template>
  <div class="index-box">
    <div class="contetn_left">
      
      <ItemWrap class="contetn_left-top contetn_lr-item" title="人员管理">
        <LeftTop />
      </ItemWrap>

      <ItemWrap
        class="contetn_left-center contetn_lr-item"
        title="企业管理"
      >
        <LeftCenter />
      </ItemWrap>

      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="项目管理"
      >
        <LeftBottom />
      </ItemWrap>
    </div>
    <div class="contetn_center">
      <CenterBottom />
    </div>
    <div class="contetn_right right-item">
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="考勤管理">
        <RightTop />
      </ItemWrap>

      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="培训管理"
      >
        <RightCenter />
      </ItemWrap>
      
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
}
.contetn_left,
.contetn_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 408px;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 10px 0;
}
.right-item{
  // margin-right: 10px;
}
.contetn_center {
  flex: 1;
  margin: 0 82px;
  padding: 10px 0;
  .contetn_center-bottom {
    // height: 100%;
  }
}

.contetn_lr-item {
  // height: 310px;
  margin-bottom: 40px;
}
</style>
