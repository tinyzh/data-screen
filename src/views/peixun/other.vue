<template>
  <ItemStudy :title="title">
    <div class="icon">
      <div class="card">
        <img :src="src" alt="" />
        <div class="txt">
          <div class="num">
            总<span>{{ num1 }}</span>
          </div>
          <div class="wz">文字类</div>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/img/kaoqin/pi.png" alt="" />
        <div class="txt">
          <div class="num">
            总<span>{{ num2 }}</span>
          </div>
          <div class="wz">学习次数</div>
        </div>
      </div>
    </div>
    <template #item>
      <div class="item1" v-for="(item, index) in arrlist" :key="index">
        <div class="time">{{ item.date }}学习情况</div>
        <div class="num">
          <div class="testnum">
            学习人数<span>{{ item.study_total }}</span>
          </div>
        </div>
      </div>
    </template>
  </ItemStudy>
</template>

<script setup lang="ts">
import ItemStudy from "./item-study.vue";
const props = withDefaults(
  defineProps<{
    title: number | string;
    src: string;
    num1: number | string;
    num2: number | string;
    arrlist: Array<any>;
  }>(),
  {
    title: "",
    src: "",
    num1: "",
    num2: "",
    arrlist: () => [],
  }
);
</script>

<style scoped lang="scss">
.icon {
  display: flex;
  justify-content: space-around;
  .card {
    margin-top: 80px;
    display: flex;
    align-items: center;
    .txt {
      width: 75px;
      margin-left: 22px;
      font-size: 16px;
      .num {
        margin-bottom: 6px;
        span {
          color: #f2bc0a;
        }
      }
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
    font-size: 16px;
    .testnum {
      span {
        margin-left: 15px;
      }
    }
    span {
      color: #f2bc0a;
    }
  }
}
</style>
