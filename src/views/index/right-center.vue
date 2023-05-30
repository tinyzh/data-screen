<script setup lang="ts">
import { ref, reactive } from "vue";
import CapsuleChart from "@/components/datav/capsule-chart";
import { currentGET } from "@/api";

const config = ref({
  showValue: true,
  unit: "次",
});
const data= ref([])
const getData = () => {
  currentGET("rightCenter").then((res) => {
    console.log("企业管理", res);
    if (res.success) {
      data.value =res.data;
    } else {
      window["$message"]({
        text: res.msg,
        type: "warning",
      });
    }
  });
};
getData();
</script>

<template>
  <div class="right_bottom">
    <div class="title">企业总数: <span class="num">1684</span></div>
    <CapsuleChart :config="config" style="width: 100%; height: 260px" :data="data"/>
  </div>
</template>

<style scoped lang="scss">

.right_bottom {
  box-sizing: border-box;
  padding: 0 16px;
  .title{
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #4DCAF6;
    margin-top: 6px;
    justify-content: center;
    .num{
      color: #ffffff;
      display: inline-block;
      margin-left: 8px;
    }
  }
}
</style>
