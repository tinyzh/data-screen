<template>
  <div class="item" :style="{ width: width, height: height }">
    <div class="icon left_top"></div>
    <div class="icon right_top"></div>
    <div class="icon left_bottom"></div>
    <div class="icon right_bottom"></div>
    <div class="apply" :style="{padding:padding}">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    // 宽高
    width: number | string;
    height: number | string;
    padding:number | string
  }>(),
  {
    width: "",
    height: "",
    padding:"60px"
  }
);
</script>

<style scoped lang="scss">
.item {
  position: relative;
  overflow: hidden;
  .apply {
    width: 100%;
    padding: 60px;
  }
}
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
</style>
