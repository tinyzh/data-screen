<template>
  <EmptyWrap width="746px" height="370px">
    <div class="top">
      <div class="item" v-for="(item, index) in numarr" :key="index">
        <div class="num">{{ item.num }}</div>
        <div class="kind">{{ item.name }}</div>
      </div>
    </div>
    <ItemTop :num="data.atten_pax" title="考勤管理" :src="img" :dataList="dataList"></ItemTop>
  </EmptyWrap>
</template>

<script setup lang="ts">
import img from "@/assets/img/kaoqin/time.png";
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
const dataList=props.data.table_atten.xdata_atten
const numarr = ref([
  { num: props.data.total_pax, name: "总人数" },
  { num: props.data.check_pax, name: "打卡人数" },
  { num: props.data.late_pax, name: "迟到人数" },
]);
</script>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-around;
  height: 100px;
  margin-bottom: 60px;
  .item {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
    color: #4DCAF6 ;
    font-weight: bold;
    .num{
        color:#fff
    }
  }
}
</style>
