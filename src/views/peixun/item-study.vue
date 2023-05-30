<template>
  <EmptyWrap width="424px" height="810px" padding="0px 28px 20px 28px"> 
    <div class="title">{{ title }}</div>
    <div class="txt">
        <slot></slot>
    </div>
    <slot name="item"></slot>
    
  </EmptyWrap>
</template>

<script setup lang="ts">
import EmptyWrap from "@/components/empty-wrap/empty-wrap.vue";
const props = withDefaults(
  defineProps<{
    title: number | string;
  }>(),
  {
    title: "",
  }
);
</script>

<style scoped lang="scss">
.title{
    text-align: center;
    font-size: 24px;
    color: #51FBFE;
    font-weight: bold;
}
.txt{
    height: 220px;
    width: 100%;
}
</style>
