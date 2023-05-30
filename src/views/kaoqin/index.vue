<script setup lang="ts">
import Top from "./top.vue";
import LeftTop from "./left-top.vue";
import LeftBottom from "./left-bottom.vue";
import RightTop from "./right-top.vue";
import RightBottom from "./right-bottom.vue";
import { currentPOST } from "@/api";
import { POST } from "@/api/api"; //先用这个
import { ref } from "vue";
const data = ref([]);
const LeftTopData = ref({});
const LeftBottomData = ref({});
const RightTopData = ref({});
const RightBottomData = ref({});
const getData = () => {
  //还没封装好key
  // currentPOST("???").then((res) => {
  //   console.log("考勤管理" + res.code);
  // });
  const url ="https://mock.apifox.cn/m1/2768096-0-default/api/big_screen/attendance";
  POST(url, {}).then((res) => {
    console.log("考勤管理", res);
    if (res.code == 200) {
      data.value = res.data;
      LeftTopData.value = data.value.apply_for;
      LeftBottomData.value = data.value.scheduling;
      RightTopData.value = data.value.work_log;
      RightBottomData.value = data.value.atten;
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
  <div>
    <Top></Top>
    <div class="content">
      <div class="left">
        <LeftTop :data="LeftTopData" v-if="Object.keys(LeftTopData).length"></LeftTop>
        <LeftBottom :data="LeftBottomData" v-if="Object.keys(LeftBottomData).length"></LeftBottom>
      </div>
      <div class="right">
        <RightTop :data="RightTopData" v-if="Object.keys(RightTopData).length"></RightTop>
        <RightBottom :data="RightBottomData" v-if="Object.keys(RightBottomData).length"></RightBottom>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    display: inline-flex;
    width: 900px;
    flex-direction: column;
    margin-right: 100px;
  }
  .right {
    display: inline-flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }
}
</style>
