<script setup lang="ts">
import { reactive } from "vue";
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter()
const leftRoute = [{
  name: '总览',
  path: '/index'
}, {
  name: '可视化',
  path: '/vusu'
},{
  name: '人员管理',
  path: '/userManager'
},{
  name: '企业管理',
  path: '/business'
}];
const rightRoute = [{
  name: '项目管理',
  path: '/pm'
}, {
  name: '考勤管理',
  path: '/vusu'
},{
  name: '培训管理',
  path: '/userManager'
}];

const handleJump = (path: string) => {
  router.push(path)
}

</script>

<template>
  <div class="d-flex jc-center title_wrap">
    <div class="d-flex jc-center">
      <div class="title"></div>
      <div class="wrap left">
        <div v-for="(item,idx) of leftRoute" :key="idx" :class="{item: true, active: route.path.includes(item.path)}" @click="handleJump(item.path)">
          <div class="text">{{ item.name }}</div>
        </div>
        
      </div>

      <div class="wrap right">
        <div v-for="(item,idx) of rightRoute" :key="idx" :class="{item: true, active: route.path.includes(item.path)}" @click="handleJump(item.path)">
          <div class="text">{{ item.name }}</div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.title_wrap {
  height: 112px;
  background-image: url("../assets/img/header.png");
  background-size: cover;
  background-position: top;
  position: relative;
  margin-bottom: 4px;
  padding-top: 10px;

  .wrap {
    position: absolute;
    display: flex;
    top: 56px;
    &.left {
      left: 18px;
    }
    &.right {
      right: 0px;
      .item {
        width: 170px;
      }
      .item {
        transform: skew(30deg);
        .text {
          transform: skew(-30deg);
        }
      }
    }
    .item {
      width: 120px;
      height: 32px;
      background: #024eaa;
      box-shadow: inset 0px 0px 10px 1px #5eeeef;
      transform: skew(-30deg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      cursor: pointer;
      margin-right: 8px;
      .text {
        transform: skew(30deg);
        color: #50f7fd;
      }
      &.active {
        box-shadow: inset 0px 0px 10px 1px #3ad9ee;
        background: #3ad9ee;
        .text {
          color: #ffffff;
        }
      }
    }
  }
}
.title {
  width: 624px;
  height: 61px;
  background-image: url("../assets/img/title-text.png");
  margin: 0px auto;
}
</style>
