<template>
  <ItemStudy title="成绩总览">
    <div class="num-score">
      {{data.number}}期考试成绩
    </div>
    <div class="pandect">
      <div class="wrap">
        <div class="work-desc">
          <img src="@/assets/img/kaoqin/testnum.png" class="ques" alt="" />
          <div class="text-wrap">
            <div class="num">{{data.question_total}}</div>
            <div>试题总数</div>
          </div>
        </div>
        <div class="work-desc people">
          <img src="@/assets/img/kaoqin/user.png" class="ques" alt="" />
          <div class="text-wrap">
            <div class="num">{{data.test_total}}</div>
            <div>考试人数</div>
          </div>
        </div>
      </div>
      <div class="circle">
        <div class="info">
          <div>{{data.pass_rate}}%</div>
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

    <template #item>
      <div class="item1" v-for="(item, index) in arrlist" :key="index">
        <div class="time">{{item.number}}期成绩</div>
        <div class="num">
          <div class="testnum">
            考试人数<span>{{ item.test_total }}</span>
          </div>
          <div class="hege">
            合格率<span>{{ item.pass_rate }}%</span>
          </div>
        </div>
      </div>
    </template>
  </ItemStudy>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue";
import ItemStudy from "./item-study.vue";
const props = withDefaults(
  defineProps<{
    data: Object;
  }>(),
  {
    data: () => ({}),
  }
);
const arrlist=props.data.achieve_list

const progressBar = {
  percent: props.data.pass_rate, // 百分比
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

<style scoped lang="scss">
.num-score{
  font-size: 18px;
  font-weight: bold;
  color: #4DCAF6 ;
  margin-bottom: 20px;
  padding-top: 16px;
}
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
        height: 37px;
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
.item1 {
  width: 369px;
  height: 92px;
  background: #0d1c3a;
  border: 1px solid #0d233a;
  margin-bottom: 18px;
  padding: 9px 38px;
  .time {
    font-size: 18px;
    font-weight: bold;
    color: #4dcaf6;
    margin-bottom: 20px;
  }
  .num {
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    .testnum {
      span {
        margin-left: 15px;
      }
    }
    .hege {
      span {
        margin-left: 32px;
      }
    }
    span {
      color: #f2bc0a;
    }
  }
}
</style>
