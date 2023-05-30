<script setup lang="ts">
  const props = withDefaults(
    defineProps < {
      // 标题
      title: number | string;
    } > (), {
      title: "",
    }
  );
</script>

<template>
  <div class="item-wrap">
    <div class="item_title" v-if="title !== ''">
      <div class="title-inner"> {{title}}</div>
    </div>
    <div :class="title !== '' ? 'item_title_content' : 'item_title_content_def'">
      <div class="icon left_top"></div>
      <div class="icon right_top"></div>
      <div class="icon left_bottom"></div>
      <div class="icon right_bottom"></div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .item-wrap {
    // border: red dashed 1px;
    box-sizing: border-box;
  }

  $item-title-height: 30px;
  $item_title_content-height: calc(100% - 30px);

  .item_title {
    height: $item-title-height;
    line-height: $item-title-height;
    width: 100%;
    color: #31abe3;
    position: relative;
    background: url("@/assets/img/titles/titleBg.png") center center;
    background-size: cover;
    margin-bottom: 8px;

    .title-inner {
      width: 190px;
      height: 31px;
      background: url("@/assets/img/titles/text.png") center center;
      background-size: cover;
      font-size: 18px;
      color: #ffffff;
      display: flex;
      align-items: center;
      padding-left: 30px;
      position: absolute;
      left: 0;
      bottom: 6px;
    }
  }

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

  .item_title_content_def {
    width: 100%;
    height: 100%;
  }
</style>