<script setup lang="ts">
import { reactive } from "vue";
import dayjs from "dayjs";
import type { DateDataType } from "./index.d";
import { useSettingStore } from "@/stores/index";

const dateData = reactive<DateDataType>({
  dateDay: "",
  dateYear: "",
  dateWeek: "",
  timing: null,
});

const { setSettingShow } = useSettingStore();
const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const timeFn = () => {
  dateData.timing = setInterval(() => {
    dateData.dateDay = dayjs().format("YYYY-MM-DD hh : mm : ss");
    dateData.dateWeek = weekday[dayjs().day()];
  }, 1000);
};
timeFn();
</script>

<template>
  <div class="d-flex jc-center title_wrap">
    <div class="d-flex jc-center">
      <div class="title"></div>
      <div class="wrap left">
        <div class="item">
          <div class="text">总览</div>
        </div>
        <div class="item">
          <div class="text">可视化</div>
        </div>
        <div class="item">
          <div class="text">人员管理</div>
        </div>
        <div class="item">
          <div class="text">企业管理</div>
        </div>
      </div>

      <div class="wrap right">
        <div class="item">
          <div class="text">项目管理</div>
        </div>
        <div class="item">
          <div class="text">考勤管理</div>
        </div>
        <div class="item">
          <div class="text">培训管理</div>
        </div>
      </div>
    </div>
    <div class="timers">
      <div class="setting_icon" @click="setSettingShow(true)">
        <img src="@/assets/img/headers/setting.png" alt="设置" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title_wrap {
  height: 112px;
  background-image: url("../assets/img/header.png");
  background-size: cover;
  background-position: top;
  position: relative;
  margin-bottom: 4px;
  padding-top: 10px;

  .timers {
    position: absolute;
    right: 0;
    top: 30px;
    font-size: 18px;
    display: flex;
    align-items: center;

    .setting_icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-left: 12px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .wrap {
    position: absolute;
    display: flex;
    top: 56px;
    &.left {
      left: 18px;
    }
    &.right {
      right: 0px;
      .item {
        width: 170px;
      }
      .item {
        transform: skew(30deg);
        .text {
          transform: skew(-30deg);
        }
      }
    }
    .item {
      width: 120px;
      height: 32px;
      background: #024eaa;
      box-shadow: inset 0px 0px 10px 1px #5eeeef;
      transform: skew(-30deg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      cursor: pointer;
      margin-right: 8px;
      .text {
        transform: skew(30deg);
        color: #50f7fd;
      }
      &.active {
        box-shadow: inset 0px 0px 10px 1px #3ad9ee;
        background: #3ad9ee;
        .text {
          color: #ffffff;
        }
      }
    }
  }
}
.title {
  width: 624px;
  height: 61px;
  background-image: url("../assets/img/title-text.png");
  margin: 0px auto;
}
</style>
