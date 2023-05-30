<script setup lang="ts">
import ItemWrap from "@/components/item-wrap";
import LeftTop from "./left-top.vue";
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";
</script>

<template>
  <div class="index-box">
    <div class="contetn_left">
      
      <ItemWrap class="contetn_left-top contetn_lr-item" title="性别">
        <LeftTop />
      </ItemWrap>

      <ItemWrap
        class="contetn_left-center contetn_lr-item"
        title="保安证"
      >
        <LeftCenter />
      </ItemWrap>

      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="学历"
      >
        <LeftBottom />
      </ItemWrap>
    </div>
    <div class="contetn_center">
      <!-- <CenterBottom /> -->
      <div class="head-wrap">
        <div class="item">
          <img src="@/assets/img/users.png" class="icon" alt="">
          <div class="nums-wrap">
            <div>无保险人数</div>
            <div class="nums">10,000</div>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/img/bao.png" class="icon" alt="">
          <div class="nums-wrap">
            <div>有保险人数</div>
            <div class="nums">10,000</div>
          </div>
        </div>
      </div>
      <div class="times">
        <div class="text">背调次数</div>
        <div class="nums">19280</div>
      </div>
    </div>
    <div class="contetn_right right-item">
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="年龄">
        <RightTop />
      </ItemWrap>

      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="角色分布"
      >
        <RightCenter />
      </ItemWrap>
      
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
  background-image: url("@/assets/img/userBg.png");
  background-size: cover;
  background-position: center -80px;
}
.contetn_left,
.contetn_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 408px;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 10px 0;
}
.right-item{
  // margin-right: 10px;
}
.contetn_center {
  flex: 1;
  margin: 0 82px;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  position: relative;
  .head-wrap{
    display: flex;
    justify-content: center;
    column-gap: 88px;
    .item{
      height: 61px;
      display: flex;
      .icon{
        width: 73px;
        height: 61px;
      }
      .nums-wrap{
        margin-left: 14px;
        color: #3388FF;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .nums{
          font-size: 24px;
          font-weight: bold;
          color: #fff;
        }
      }

    }
  }
  .times{
    width: 249px;
    height: 174px;
    position: absolute;
    background-image: url("@/assets/img/times.png");
    left: -10px;
    top: 240px;
    .text{
      position: absolute;
      color: #fff;
      font-size: 16px;
      bottom: 62px;
      text-align: center;
      width: 100%;
    }
    .nums{
      position: absolute;
      padding: 0 26px;
      height: 38px;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      color: #51FBFE;
      font-size: 24px;
      line-height: 38px;
      &::before{
        content: "";
        position: absolute;
        width: 38px;
        height: 38px;
        background-image: url("@/assets/img/nums-left.png");
        background-size: cover;
        left: 0;
        top: 0;
      }
      &::after{
        content: "";
        position: absolute;
        width: 38px;
        height: 38px;
        background-image: url("@/assets/img/nums-right.png");
        background-size: cover;
        right: 0;
        top: 0;
      }
    }
  }
}

.contetn_lr-item {
  // height: 310px;
  margin-bottom: 40px;
}
</style>
