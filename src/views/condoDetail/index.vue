<template>
  <div class="container">
    <!-- <div class="poster">
      <div class="desc">
        <div class="price">￥4000/月</div>
        <h1 class="name">富力湾 4房2厅4卫 豪华装修</h1>
      </div>
      <img src="" alt="" />
    </div> -->

    <div class="left">
      <el-descriptions title="房屋详情">
        <el-descriptions-item label-class-name="d-item" label="状态:">未租出</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="类型:">整租</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="租金:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="卧室数量:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="卫生间数量:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="厨房数量:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="客厅数量:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="房屋面积:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="楼层:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="有无电梯:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="联系人姓名:">3000</el-descriptions-item>
        <el-descriptions-item label-class-name="d-item" label="联系人电话:">3000</el-descriptions-item>
      </el-descriptions>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span><b>详细描述</b></span>
          </div>
        </template>
        <div>首都卡拉卡斯的骄傲两款手机打开链接........</div>
      </el-card>
      <el-swiper></el-swiper>
    </div>

    <div class="right">
      <div class="collection">
        <div class="collection-button">♥ 收藏</div>
      </div>
      <div class="order">
        <div class="price">
          <h1>￥1000 /天</h1>
        </div>
        <div class="picker">
          <div class="label">入住日期</div>
          <el-date-picker v-model="value1" type="date" placeholder="Pick a day" size="large" style="width: 80%" />
          <div class="label">退租日期</div>
          <el-date-picker v-model="value1" type="date" placeholder="Pick a day" size="large" style="width: 80%" />
          <div class="picker-button">立即预定</div>
        </div>
        <div class="confirm-button"></div>
      </div>
      <div class="contact">
        <div class="title"></div>
        <div class="info"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  margin-top: 80px;
  padding-top: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f7f9fd;

  .poster {
    .desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
  }

  .left {
    flex: 1;
    margin-left: 200px;
    margin-right: 80px;

    .box-card {
      margin-top: 30px;
    }

    :deep(.d-item) {
      font-weight: 700;
    }
  }

  .right {
    width: 500px;
    margin-right: 100px;
    display: flex;
    flex-direction: column;

    .collection {
      width: 100%;
      height: 80px;
      margin-bottom: 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      .collection-button {
        width: 200px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background-color: #ffeee6;
        color: #e88755;
      }
    }

    .order {
      width: 100%;
      height: 400px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      border-radius: 8px;

      .price {
        // box-sizing: border-box;
        width: 100%;
        height: 70px;
        padding: 0 10px;
        background-color: #495fff;
        border-radius: 8px 8px 0 0;
        color: #fff;
      }
    }

    .picker {
      display: flex;
      flex-direction: column;
      padding: 40px 0;
      padding-left: 20px;

      .label {
        margin: 10px 0;
      }

      .picker-button {
        width: 80%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        color: #fff;
        // border-radius: 6px;
        background-color: #495fff;
      }
    }
  }
}
</style>
