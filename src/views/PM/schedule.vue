<script setup lang="ts"></script>

<template>
  <div class="progress-wrap">
    <div class="title">
      <div class="item">项目进行中: <span class="num">236</span></div>
      <div class="item">洽谈中: <span class="num">36</span></div>
    </div>
    <div class="progress_box">
      <div class="prog">
        <div class="bar" :style="{ width: '75%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress-wrap {
  width: 85%;
  margin-bottom: 10px;
  font-size: 16px;
  margin-left: 26px;

  &:last-child {
    margin-bottom: 0;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .item {
      font-size: 18px;
      color: #fff;
      .num {
        color: rgba(242, 188, 10, 1);
      }
    }
  }

  .progress_box {
    border: 1px solid RGBA(25, 70, 94, 1);
    padding: 10px 8px;
    margin-top: 10px;
  }

  .prog {
    width: 100%;
    height: 15px;
    position: relative;
    background-color: #3c4d62;

    .bar {
      height: 15px;
      background: linear-gradient(90deg, #007cdd 0%, #51fbfe 100%);
      position: absolute;
      left: 0;
      top: 0;

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
</style>
