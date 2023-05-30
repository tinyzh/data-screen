<template>
  <EmptyWrap width="860px" height="370px">
    <div class="apply">
      <ItemTop
        :num="data.total_apply"
        title="工作申请"
        :src="img"
        :dataList="dataList"
      >
      </ItemTop>
      <div class="apply-num">
        <div class="num">
          <div>
            请假申请：<span>{{ data.apply_leave }}</span>
          </div>
          <div>
            加班申请：<span>{{ data.apply_overtime }}</span>
          </div>
        </div>
        <div class="num">
          <div>
            借调申请：<span>{{ data.apply_transfer }}</span>
          </div>
          <div>
            补卡申请：<span>{{ data.apply_card }}</span>
          </div>
        </div>
      </div>
    </div>
  </EmptyWrap>
</template>

<script setup lang="ts">
import img from "@/assets/img/kaoqin/test_apply.png";
import ItemTop from "@/components/item-top/item-top.vue";
import EmptyWrap from "@/components/empty-wrap/empty-wrap.vue";
const props = withDefaults(
  defineProps<{
    data: Object;
  }>(),
  {
    data: () => ({}),
  }
);
const dataList=props.data.table_work.xdata_work

</script>

<style scoped lang="scss">
.apply {
  display: flex;
  flex-direction: column;
  .apply-num {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .num {
      display: flex;
      width: 100%;
      height: 50px;
      justify-content: space-around;
      align-items: center;
      font-size: 24px;
      color: #4dcaf6;
      font-weight: bold;
      div{
        width: 180px;
      }
      span {
        color: #fff;
      }
    }
  }
}
.chart {
    height: 90px;
    position: relative;
  }
</style>
