<template>
  <EmptyWrap width="860px" height="370px" style="margin-top: 50px">
    <ItemTop
      color1="#3B71AF"
      color2="#78F978"
      :num="data.total_scheduling"
      title="排班"
      :src="img"
      :dataList="dataList"
    ></ItemTop>
    <div class="bottom">
      <div class="item" v-for="(item, index) in worklist" :key="index">
        <div class="worktime">
          <span>{{ item.name }}</span
          ><span>{{ item.name2 }}</span>
        </div>
        <div class="all">
          <div
            class="val"
            :style="{ background: item.color, width: item.val }"
          ></div>
        </div>
        <div class="txt">
          值班
          <span>{{ item.num }}</span>
        </div>
      </div>
    </div>
  </EmptyWrap>
</template>

<script setup lang="ts">
import img from "@/assets/img/kaoqin/paiban.png";
import ItemTop from "@/components/item-top/item-top.vue";
import EmptyWrap from "@/components/empty-wrap/empty-wrap.vue";
import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    data: Object;
  }>(),
  {
    data: () => ({}),
  }
);
const worklist = ref([
  {
    name: "早",
    name2: "班",
    color: "linear-gradient(90deg, #3B71AF 0%, #366DEF 100%)",
    val: "",
    num: "",
  },
  {
    name: "中",
    name2: "班",
    color: "linear-gradient(90deg, #3B71AF 0%, #A636EF 100%)",
    val: "",
    num: "",
  },
  {
    name: "晚",
    name2: "班",
    color: "linear-gradient(90deg, #3B71AF 0%, #36EFEC 100%)",
    val: "",
    num: "",
  },
  {
    name: "其",
    name2: "他",
    color: "linear-gradient(90deg, #3B71AF 0%, #7FEF36 100%)",
    val: "",
    num: "",
  },
]);
const dataList = props.data.table_scheduling.xdata_scheduling;
//计算百分比px
//早班
const earlyData = props.data.early.xdata_early;
const earlyWorkpx = (242 / (earlyData[0] + earlyData[1])) * earlyData[0] + "px";
worklist.value[0].val = earlyWorkpx;
worklist.value[0].num = earlyData[0];
//中班
const middleData = props.data.middle_shift.xdata_middle;
const middleWorkpx =
  (242 / (middleData[0] + middleData[1])) * middleData[0] + "px";
worklist.value[1].val = middleWorkpx;
worklist.value[1].num = middleData[0];
//晚班
const nightData = props.data.night_shift.xdata_night;
const nightWorkpx = (242 / (nightData[0] + nightData[1])) * nightData[0] + "px";
worklist.value[2].val = nightWorkpx;
worklist.value[2].num = nightData[0];
//其他
const otherData = props.data.other_shift.xdata_other;
const otherWorkpx = (242 / (otherData[0] + otherData[1])) * otherData[0] + "px";
worklist.value[3].val = otherWorkpx;
worklist.value[3].num = otherData[0];
</script>

<style scoped lang="scss">
.bottom {
  margin-top: -30px;
  margin-left: -40px;
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  .item {
    width: 420px;
    height: 50px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    .worktime {
      width: 49px;
      height: 49px;
      background: #0a152c;
      border-right: 2px solid #3b71af;
      display: flex;
      font-size: 18px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      span {
        padding: 0;
        margin: 0;
      }
    }
    .all {
      position: relative;
      width: 242px;
      height: 13px;
      margin-right: 13px;
      background: #535353;
      .val {
        position: absolute;
        width: 244px;
        height: 13px;
        background: linear-gradient(90deg, #3b71af 0%, #366def 100%);
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
      }
    }
    .txt {
      font-size: 12px;
    }
  }
}
</style>
