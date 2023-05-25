<script setup lang="ts">
import { reactive, ref } from "vue";
import { currentGET } from "@/api";
import CountUp from "@/components/count-up";
const duration = ref(2);
const state = reactive({
  alarmNum: 759,
  offlineNum: 44,
  onlineNum: 654,
  totalNum: 698,
});

const getData = () => {
  currentGET("leftTop").then((res) => {
    console.log(res);
    if (res.success) {
      state.alarmNum = res.data.alarmNum;
      state.offlineNum = res.data.offlineNum;
      state.onlineNum = res.data.onlineNum;
      state.totalNum = res.data.totalNum;
    }
  });
};
getData();
</script>

<template>
  <div class="user_overview flex">
    <div class="item">
      <div class="head">
        <div class="icon"></div>
        <div class="text male">总人数</div>
        <div class="text">30000人</div>
      </div>
      <div class="human-num male">24000/80%</div>
      <div class="head-icon male">
        <div class="sex-text">男</div>
      </div>
    </div>

    <div class="item">
      <div class="head">
        <div class="icon"></div>
        <div class="text female">持证人员</div>
        <div class="text">16850人</div>
      </div>
      <div class="human-num female">6000/20%</div>
      <div class="head-icon female">
        <div class="sex-text">女</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-top {
  width: 100%;
  height: 100%;
}

.user_overview {
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  .item {
    display: flex;
    width: 164px;
    flex-direction: column;
    align-items: center;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon {
        width: 10px;
        height: 10px;
        background: #ffffff;
        border-radius: 2px 2px 2px 2px;
        opacity: 1;
        border: 2px solid #ffb947;
      }
      .text{
        font-size: 16px;
        margin-left: 10px;
        &.male{
          color: #FFB947;
        }
        &.female{
          color: #28ACEC;
        }
      } 
    }
    .human-num{
      width: 100%;
      text-align: center;
      margin-top: 33px;
      font-size: 16px;
      &.male{
        color: #51FBFE;
      }
      &.female{
        color: #FDDC64;
      }
    }
    .head-icon{
      width: 138px;
      height: 99px;
      margin-top: 15px;
      position: relative;
      .sex-text{
        position: absolute;
        left: 15px;
        top: 17px
      }
      &.male{
        background-image: url("@/assets/img/boy.png");
        .sex-text{
          color: #51FBFE;
        }
      }
      &.female{
        background-image: url("@/assets/img/girl.png");
        .sex-text{
          color: #FCD961;
        }
      }
    }
  }
}
</style>