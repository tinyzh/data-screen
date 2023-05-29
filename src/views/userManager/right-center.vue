<script setup lang="ts">
import { ref, reactive } from "vue";
import CapsuleChart from "@/components/datav/capsule-chart";
import { currentGET } from "@/api";

const config = ref({
  showValue: true,
  unit: "次",
});
const data = ref([]);
const getData = () => {
  currentGET("rightCenter").then((res) => {
    console.log("企业管理", res);
    if (res.success) {
      data.value = res.data;
    } else {
      window["$message"]({
        text: res.msg,
        type: "warning",
      });
    }
  });
};
// getData();

const progressBar = {
  percent: 40, // 百分比
  radius: 30, // 半径
  border: 10, // 边宽
  blurBorder: 8, //
  angle: 90, // 空缺角度
};
const viewBox = function () {
  const width = 10 + progressBar.blurBorder + 2 * progressBar.radius;
  return "0 0 " + width + " " + width;
};
const startX = function () {
  return (
    progressBar.blurBorder / 2 +
    (1 - Math.sin((progressBar.angle / 360) * Math.PI)) * progressBar.radius
  );
};

const startY = function () {
  return (
    progressBar.blurBorder / 2 +
    (1 + Math.cos((progressBar.angle / 360) * Math.PI)) * progressBar.radius
  );
};
const endX = function () {
  return (
    progressBar.blurBorder / 2 +
    (1 + Math.sin((progressBar.angle / 360) * Math.PI)) * progressBar.radius
  );
};
const len = function () {
  var per = progressBar.percent;
  if (progressBar.percent > 100) {
    per = 100;
  }
  return (
    (Math.PI * progressBar.radius * ((360 - progressBar.angle) / 180) * per) /
      100 +
    "," +
    3.1415 * 2 * progressBar.radius
  );
};
</script>

<template>
  <div class="right_bottom">
    <div class="pandect">
      <div class="wrap">
        <div class="work-desc">
          <img src="@/assets/img/question.png" class="ques" alt="" />
          <div class="text-wrap">
            <div class="num">100</div>
            <div>试题总数</div>
          </div>
        </div>
        <div class="work-desc people">
          <img src="@/assets/img/user.png" class="ques" alt="" />
          <div class="text-wrap">
            <div class="num">3280</div>
            <div>考试人数</div>
          </div>
        </div>
      </div>
      <div class="circle">
        <div class="info">
          <div>96%</div>
          <div class="text">合格率</div>
        </div>
        <svg
          id="svg"
          v-bind="{ viewBox: viewBox() }"
          role="presentation"
          width="180"
          height="180"
        >
          <path
            fill="none"
            stroke-linecap="round"
            class="outer-arc"
            stroke="#707070"
            :stroke-width="border"
            :d="
              'M' +
              startX() +
              ' ' +
              startY() +
              ' A' +
              progressBar.radius +
              ' ' +
              progressBar.radius +
              ', 0, 1, 1,' +
              endX() +
              ' ' +
              startY()
            "
          />

          <path
            fill="none"
            stroke-linecap="round"
            class="inner-arc"
            stroke="#F2C305"
            :stroke-width="border"
            :d="
              'M' +
              startX() +
              ' ' +
              startY() +
              ' A' +
              progressBar.radius +
              ' ' +
              progressBar.radius +
              ', 0, 1, 1,' +
              endX() +
              ' ' +
              startY()
            "
            :stroke-dasharray="len()"
            stroke-dashoffset="0"
          />
        </svg>
      </div>
    </div>
    <div class="progress-wrap">
      <div class="progress-text">文字类(总3000条)</div>
      <div class="prog">
        <div class="bar" :style="{ width: '45%' }">
          <div class="text">68334</div>
        </div>
      </div>
    </div>
    <div class="progress-wrap">
      <div class="progress-text">视频类(总365条)</div>
      <div class="prog">
        <div class="bar" :style="{ width: '37%' }">
          <div class="text">2357</div>
        </div>
      </div>
    </div>
    <div class="progress-wrap">
      <div class="progress-text">文件类(总120条)</div>
      <div class="prog">
        <div class="bar" :style="{ width: '14%' }">
          <div class="text">135</div>
        </div>
      </div>
    </div>
    <!-- <CapsuleChart
      :config="config"
      style="width: 100%; height: 260px"
      :data="data"
    /> -->
  </div>
</template>

<style scoped lang="scss">
.right_bottom {
  box-sizing: border-box;
  padding: 30px 20px;
  .pandect {
    width: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    .wrap {
      display: flex;
      flex-direction: column;
    }
    .work-desc {
      display: flex;
      align-items: center;
      &.people {
        margin-top: 30px;
      }

      .ques {
        width: 33px;
        height: 38px;
      }
      .user{
        width: 34px;
        height: 42px;
      }
      .text-wrap {
        margin-left: 11px;
        font-size: 16px;
        color: #fff;
        .num {
          color: #f2bc0a;
          font-size: 16px;
        }
      }
    }
    .circle {
      width: 210px;
      position: relative;
      .info {
        color: #fff;
        font-size: 28px;
        position: absolute;
        width: 100%;
        height: 130px;
        left: 6px;
        top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .text {
          font-size: 22px;
        }
      }
      svg {
        height: 180px;
        width: 210px;
        margin-left: 14px;
        display: block;
      }

      path {
        stroke-linecap: round;
        stroke-width: 6;
      }

      path.grey {
        stroke: #707070;
      }

      path.blue {
        stroke: url(#gradient);
        stroke-dasharray: 198;
        stroke-dashoffset: 198;
        animation: dash 3s ease-out forwards;
      }
    }
  }
  .progress-wrap {
    width: 100%;
    margin-bottom: 26px;
    font-size: 16px;
    &:last-child {
      margin-bottom: 0;
    }
    .prog {
      width: 100%;
      height: 15px;
      position: relative;
      background-color: #3c4d62;
      border-radius: 20px;
      margin-top: 10px;
      .bar {
        height: 15px;
        background: linear-gradient(90deg, #007cdd 0%, #51fbfe 100%);
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 20px;
        .text {
          position: absolute;
          right: 0px;
          height: 15px;
          line-height: 15px;
          font-size: 14px;
          transform: translateX(140%);
        }
      }
    }
  }
}
</style>
