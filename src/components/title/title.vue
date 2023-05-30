<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    // 标题
    title: number | string;
  }>(),
  {
    title: "",
  }
);
</script>

<template>
    <div class="title-inner">{{ title }}</div>
</template>

<style scoped lang="scss">

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
    margin-bottom: 7px;
  }
</style>
