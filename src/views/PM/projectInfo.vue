<script setup lang="ts">
import Schedule from "./schedule.vue";
import Pie from "./pie.vue";
</script>

<template>
  <div class="item-wrap">
    <div class="item_title_content">
      <div class="icon left_top"></div>
      <div class="icon right_top"></div>
      <div class="icon left_bottom"></div>
      <div class="icon right_bottom"></div>
      <div class="item-data">
        <div class="project_item firmNum">项目总数: <span class="num">1684</span></div>
        <div class="project_item">总派遣人次: <span class="num">189562</span></div>
        <Schedule></Schedule>
        <Pie></Pie>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-wrap {
  // border: red dashed 1px;
  box-sizing: border-box;
  margin-top: 70px;
}

$item-title-height: 30px;
$item_title_content-height: calc(100% - 30px);

.item_title_content {
  height: $item_title_content-height;
  position: relative;

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

.item-data {
  width: 420px;
  //   background: rgba(59, 113, 175, 0.43);

  .project_item {
    font-size: 22px;
    color: RGBA(77, 202, 246, 1);
    margin-top: 6px;
    justify-content: center;
    font-weight: bold;
    margin-left: 30px;

    .num {
      color: #ffffff;
      display: inline-block;
      margin-left: 8px;
    }
  }
  .firmNum {
    padding-top: 30px;
  }
}
</style>
