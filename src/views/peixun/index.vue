<script setup lang="ts">
import First from "./first.vue";
import Other from "./other.vue";
import Top from "./top.vue";
import wzl from "@/assets/img/kaoqin/card.png";
import spl from "@/assets/img/kaoqin/sp.png";
import file from "@/assets/img/kaoqin/file.png";
import { ref } from "vue";
import { currentPOST } from "@/api";
import { POST } from "@/api/api"; //先用这个
const scorelist = ref([]);
const data = ref([]);
const achieveData = ref({});
const textData = ref({});
const videoData = ref({});
const fileData = ref({});
const getData = () => {
  //还没封装好key
  // currentPOST("???").then((res) => {
  //   console.log("考勤管理" + res.code);
  // });
  const url =
    "https://mock.apifox.cn/m1/2768096-0-default/api/big_screen/train";
  POST(url, {}).then((res) => {
    console.log("考勤管理", res);
    if (res.code == 200) {
      data.value = res.data;
      console.log(res.data);
      achieveData.value = res.data.achieve_data;
      textData.value = res.data.text_data;
      videoData.value = res.data.video_data;
      fileData.value = res.data.file_data;
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
      <First :data="achieveData" v-if="Object.keys(achieveData).length"></First>
      <Other
        title="题库：文字类"
        :src="wzl"
        :num1="textData.text_total"
        :num2="textData.study_total"
        :arrlist="textData.text_list"
        v-if="Object.keys(textData).length"
      ></Other>
      <Other
        title="题库：视频类"
        :src="spl"
        :num1="videoData.video_total"
        :num2="videoData.study_total"
        :arrlist="videoData.video_list"
        v-if="Object.keys(videoData).length"
      ></Other>
      <Other
        title="题库：文件"
        :src="file"
        :num1="fileData.file_total"
        :num2="fileData.study_total"
        :arrlist="fileData.file_list"
        v-if="Object.keys(fileData).length"
      ></Other>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-around;
}
</style>
