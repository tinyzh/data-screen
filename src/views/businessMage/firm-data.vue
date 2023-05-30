<script setup lang="ts">
import { ref } from 'vue';
const firmInfo = ref({
    'name': '济南',
    'firmNum': '32',
    'staff': '368',
    'projectNUm': '3608'
})
</script>

<template>
    <div class="item-wrap">
        <div class="item_title_content">
            <div class="icon left_top"></div>
            <div class="icon right_top"></div>
            <div class="icon left_bottom"></div>
            <div class="icon right_bottom"></div>
            <div class="item-data">
                <div class="item firm_name">
                    <div class="punctuation"></div>
                    <div class="name">{{ firmInfo.name }}</div>
                </div>
                <div class="item firmNum">企业数:<span>{{ firmInfo.firmNum }}</span></div>
                <div class="item staff">人员:<span>{{ firmInfo.staff }}</span></div>
                <div class="item projectNUm">项目总数:<span>{{ firmInfo.projectNUm }}</span></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.item-wrap {
    // border: red dashed 1px;
    box-sizing: border-box;
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

.item-data {
    width: 228px;
    height: 212px;
    background: rgba(59, 113, 175, 0.43);

    .item {
        position: absolute;
    }

    .firm_name {
        display: flex;
        left: 30px;
        top: 30px;
        align-items: center;

        .punctuation {
            width: 15px;
            height: 15px;
            background: rgba(28, 29, 30, 0);
            border-radius: 3px 3px 3px 3px;
            opacity: 1;
            border: 3px solid #F2BC0A;
        }

        .name {
            font-size: 24px;
            font-weight: bold;
            color: #F2BC0A;
            margin-left: 15px;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        }
    }

    .firmNum {
        font-size: 18px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #4DCAF6;
        top: 70px;
        left: 50px;
    }

    .staff {
        font-size: 18px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #4DCAF6;
        top: 100px;
        left: 67px;
    }

    .projectNUm {
        font-size: 18px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #4DCAF6;
        top: 130px;
        left: 30px;
    }
    span{
        margin-left: 10px;
        color: #fff;
    }
}
</style>