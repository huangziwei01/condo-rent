<template>
  <div class="container">
    <div class="des">
      <div class="price">￥{{ detail.price }}/月</div>
      <div class="title">{{ detail.title }}</div>
      <div class="address">
        <el-icon><Position /></el-icon>
        {{ detail.address }}
      </div>
    </div>
    <div class="imgs">
      <el-carousel height="450px">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <img :src="item.src" alt="" class="image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="info">
      <el-descriptions
        title="详细信息"
        direction="vertical"
        :column="4"
        size="large"
        border
      >
        <el-descriptions-item label="状态">{{
          status(detail.rentStatus)
        }}</el-descriptions-item>
        <el-descriptions-item label="类型">{{
          detail.rentType
        }}</el-descriptions-item>
        <el-descriptions-item label="详细地址">
          {{ detail.addressDetail }}
        </el-descriptions-item>
        <el-descriptions-item label="租金">{{
          detail.price
        }}</el-descriptions-item>
        <el-descriptions-item label="房产证编号">{{
          detail.deedNum
        }}</el-descriptions-item>
        <el-descriptions-item label="卧室数量">{{
          detail.bedRoomNum
        }}</el-descriptions-item>
        <el-descriptions-item label="卫生间数量">{{
          detail.toiletNum
        }}</el-descriptions-item>
        <el-descriptions-item label="厨房数量">{{
          detail.kitchenNum
        }}</el-descriptions-item>
        <el-descriptions-item label="房屋面积">{{
          detail.area
        }}</el-descriptions-item>
        <el-descriptions-item label="是否有空调">{{
          detail.isAc
        }}</el-descriptions-item>
        <el-descriptions-item label="建成年份">{{
          detail.jzYear
        }}</el-descriptions-item>
        <el-descriptions-item label="朝向">{{
          detail.towards
        }}</el-descriptions-item>
        <el-descriptions-item label="楼层">{{
          detail.floor
        }}</el-descriptions-item>
        <el-descriptions-item label="是否有电梯">{{
          detail.isLift
        }}</el-descriptions-item>
        <el-descriptions-item label="联系人姓名">{{
          detail.contactName
        }}</el-descriptions-item>
        <el-descriptions-item label="联系人电话">{{
          detail.contactPhone
        }}</el-descriptions-item>
      </el-descriptions>
      <div class="detail">
        <el-collapse v-model="activeCollapse">
          <el-collapse-item title="详细描述" name="1">
            <div>
              {{ detail.description }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="tips">
      <!-- <el-alert
        title="温馨提示："
        type="success"
        show-icon
        :closable="false"
        description="预定前请填写预计入住日期"
      /> -->
      <el-alert
        title="联系房东："
        type="info"
        show-icon
        :closable="false"
        description="可使用联系人电话联系房东，联系时间：8:30 - 17:30"
      />
    </div>
    <div class="operate">
      <!-- <h5>预计入住日期:</h5>
      <el-date-picker
        v-model="bookDate"
        type="date"
        placeholder="选择入住日期"
        size="large"
      /> -->
      <div class="btns">
        <div class="book">立即预订</div>
        <div class="collect">
          <el-icon><Star /></el-icon>
          收藏
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getCondo } from '@/api/condo'
const statusMap = {
  1: '未租出',
  2: '被预定',
  3: '已租出',
}

const status = computed(() => {
  return function (rentStatus) {
    return statusMap[rentStatus]
  }
})
const activeCollapse = ref(['1'])
const detail = ref({})
const getDetail = async () => {
  const res = await getCondo(1)
  detail.value = res.data
}
getDetail()

const imgs = [
  {
    src: 'https://z1.muscache.cn/pictures/b4b9c4e1-c4b9-4e77-b2f4-6f6f6e28b0eb.jpg?im_w=1200',
  },
  {
    src: 'https://z1.muscache.cn/pictures/b4b9c4e1-c4b9-4e77-b2f4-6f6f6e28b0eb.jpg?im_w=1200',
  },
]
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding-bottom: 50px;
  .des {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    .price {
      font-size: 32px;
      font-weight: 700;
      color: #1677ff;
    }
    .title {
      font-size: 42px;
      font-weight: 700;
      color: #000;
      padding-top: 20px;
    }
    .address {
      margin-top: 20px;
      color: gray;
    }
  }
  .imgs {
    margin-top: 30px;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info {
    margin-top: 50px;
    .detail {
      margin-top: 30px;
    }
  }
  .tips {
    margin-top: 30px;
  }
  .operate {
    .btns {
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      .book {
        width: 150px;
        padding: 15px 0;
        text-align: center;
        border-radius: 12px;
        background-color: #1677ff;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
        font-family: Source Han Sans, Source Han Sans;
      }
      .collect {
        margin-left: 20px;
        width: 150px;
        padding: 15px 0;
        text-align: center;
        border-radius: 12px;
        background-color: #99a9bf;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-collapse {
  font-size: 24px;
  font-weight: 700;
  padding: 0 20px;
  background-color: #fff;
  .el-collapse-item__header {
    font-weight: 700 !important;
  }
}

.el-alert {
  margin-top: 20px;
  padding: 20px;
  :deep(.el-alert__title) {
    font-size: 16px;
  }
}
</style>
