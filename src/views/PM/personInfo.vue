<script setup lang="ts"></script>

<template>
  <div class="item-wrap">
    <div class="item_title_content">
      <div class="icon left_top"></div>
      <div class="icon right_top"></div>
      <div class="icon left_bottom"></div>
      <div class="icon right_bottom"></div>
      <div class="personInfo">
        <div class="time">2023年-05月-18号</div>
        <div class="info">
          <div class="photo"></div>
          <div class="basicInfo">
            <div class="principal">项目负责人</div>
            <div class="text">姓名: <span class="num">刘六六</span></div>
            <div class="text">联系电话: <span class="num">13888777666</span></div>
          </div>
        </div>
        <div class="data_box">
          <div class="data">
            <div class="data_img">
              <img src="../../assets/img/pm-img/保险服务.png" alt="" />
            </div>
            <div class="data_info">
              <div class="data_num">3200</div>
              <div class="data_text">购买保险人数</div>
            </div>
          </div>
          <div class="data">
            <div class="data_img">
              <img src="../../assets/img/pm-img/警示.png" alt="" />
            </div>
            <div class="data_info">
              <div class="data_num">0</div>
              <div class="data_text">未购买保险人数</div>
            </div>
          </div>
          <div class="data">
            <div class="data_img">
              <img src="../../assets/img/pm-img/考勤管理.png" alt="" />
            </div>
            <div class="data_info">
              <div class="data_num">3200</div>
              <div class="data_text">应勤人数</div>
            </div>
          </div>
          <div class="data last">
            <div class="data_img">
              <img src="../../assets/img/pm-img/警示.png" alt="" />
            </div>
            <div class="data_info">
              <div class="data_num">3100</div>
              <div class="data_text">实勤人数</div>
            </div>
          </div>
        </div>
        <pie_3d></pie_3d>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-wrap {
  // border: red dashed 1px;
  box-sizing: border-box;
  position: absolute;
  right: 50px;
  bottom: 210px;
}

$item-title-height: 30px;
$item_title_content-height: calc(100% - 30px);

.item_title_content {
  height: $item_title_content-height;
  position: relative;

  .icon {
    position: absolute;

    width: 32px;
    height: 42px;

    &.left_top {
      left: 0px;
      top: 0px;
      background-image: url("@/assets/img/left_top.png");
    }

    &.left_bottom {
      left: 0;
      bottom: 0;
      background-image: url("@/assets/img/left_bottom.png");
    }

    &.right_bottom {
      right: 0;
      bottom: 0;
      background-image: url("@/assets/img/right_bottom.png");
    }

    &.right_top {
      right: 0;
      top: 0;
      background-image: url("@/assets/img/right_top.png");
    }
  }
}

.personInfo {
  width: 400px;
  height: 500px;

  .time {
    width: 100%;
    text-align: center;
    color: #fff;
    padding-top: 10px;
  }

  .info {
    margin-left: 40px;
    margin-top: 15px;
    display: flex;

    .photo {
      width: 100px;
      height: 120px;
      border: 1px solid rgba(18, 39, 72, 1);
      margin-right: 20px;
    }

    .principal {
      font-size: 16px;
      font-weight: bold;
      color: RGBA(242, 188, 10, 1);
      margin-bottom: 20px;
    }

    .text {
      font-size: 16px;
      font-weight: bold;
      color: RGBA(77, 202, 246, 1);
      margin-bottom: 20px;
    }

    .num {
      color: #fff;
    }
  }

  .data_box {
    margin-left: 40px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;

    .data {
      display: flex;
      margin-right: 20px;
      margin-bottom: 20px;

      .data_img {
        margin-right: 10px;
      }

      .data_text {
        color: RGBA(77, 202, 246, 1);
      }
    }

    .last {
      margin-left: 32px;
    }
  }
}
</style>
