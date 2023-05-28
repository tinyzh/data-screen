<script setup lang="ts">
import { ref, onMounted } from "vue";
import { currentGET } from "@/api";
import { graphic } from "echarts/core";
const option = ref({});
const getData = () => {
  currentGET("rightTop", {}).then((res) => {
    console.log("报警次数 ", res);
    if (res.success) {
    } else {
    }
  });
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="check-work">
    <div class="work-item">
      <div class="work-desc">
        <img src="@/assets/img/apply.png" class="apply" alt="" />
        <div class="text-wrap">
          <div class="num">1068</div>
          <div>工作申请</div>
        </div>
      </div>
      <div class="percent-wrap">
        <div class="full">
          <div class="progress"></div>
          <div>通过 1006</div>
        </div>
        <div class="full">
          <div class="progress fail" :style="{'width': 162/1068 * 120 + 'px'}"></div>
          <div>未通过数 162</div>
        </div>
      </div>
    </div>

    <div class="work-item">
      <div class="work-desc">
        <img src="@/assets/img/mana.png" class="apply" alt="" />
        <div class="text-wrap">
          <div class="num">26050</div>
          <div>工作日志</div>
        </div>
      </div>
      <div class="percent-wrap">
        <div class="full">
          <div class="progress"></div>
          <div>提交 20000</div>
        </div>
        <div class="full">
          <div class="progress fail" :style="{'width': 4000/26050 * 120 + 'px'}"></div>
          <div>未提交 4000</div>
        </div>
      </div>
    </div>

    <div class="work-item">
      <div class="work-desc">
        <img src="@/assets/img/pb.png" class="apply" alt="" />
        <div class="text-wrap">
          <div class="num">20876</div>
          <div>排班</div>
        </div>
      </div>
      <div class="percent-wrap">
        <div class="full">
          <div class="progress"></div>
          <div>值班 15000</div>
        </div>
        <div class="full">
          <div class="progress rest" :style="{'width': 5000/20876 * 120 + 'px'}"></div>
          <div>休息 5000</div>
        </div>
      </div>
    </div>

    <div class="work-item">
      <div class="work-desc">
        <img src="@/assets/img/kq.png" class="apply" alt="" />
        <div class="text-wrap">
          <div class="num">3000</div>
          <div>考勤管理</div>
        </div>
      </div>
      <div class="percent-wrap">
        <div class="full">
          <div class="progress"></div>
          <div>打卡 2600</div>
        </div>
        <div class="full">
          <div class="progress fail" :style="{'width': 400/3000 * 120 + 'px'}"></div>
          <div>未打卡 400</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.check-work {
  width: 100%;
  height: 360px;
  padding: 35px 32px;
  .work-item {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    .work-desc {
      display: flex;
      align-items: center;
      .apply {
        width: 44px;
        height: 45px;
      }
      .text-wrap {
        margin-left: 11px;
        font-size: 18px;
        color: #fff;
        .num {
          color: #1beae6;
          font-size: 16px;
        }
      }
    }
    .percent-wrap {
      height: 49px;
      border-left: 2px solid #3b71af;
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .full {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #fff;
        .progress {
          width: 120px;
          height: 13px;
          background: linear-gradient(90deg, #3b71af 0%, #36efec 100%);
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          margin-right: 10px;
          &.fail{
            background: linear-gradient(270deg, #F97878 0%, #3B71AF 100%);
          }
          &.rest{
            background: linear-gradient(270deg, #78F978 0%, #3B71AF 100%);
          }
        }
      }
    }
  }
}
</style>
