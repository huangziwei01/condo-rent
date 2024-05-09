<template>
  <div class="container">
    <el-card style="width: 100%">
      <template #header>
        <div class="card-header">
          <span class="title">我的订单</span>
        </div>
      </template>
      <div class="rent-list">
        <div class="rent-item" v-for="(item, index) in condoList" :key="index">
          <div class="left">
            <div class="title">
              {{ item.title }}
              <el-tag type="success" style="margin-left: 10px" v-if="+item.rentStatus === 2">已预订</el-tag>

              <el-tag type="success" style="margin-left: 10px" v-if="+item.rentStatus === 3">租赁中</el-tag>
            </div>
            <div class="address">{{ item.address }}</div>
          </div>
          <div class="right">
            <el-button type="primary" plain @click="goDetail(item)">查看详情</el-button>
            <el-button type="warning" plain @click="returnRent(item)">申请退租</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { getCondoList, updateCondo } from '@api/condo'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const condoList = ref([])
const userId = ref(localStorage.getItem('userId'))
const roleId = ref(localStorage.getItem('roleId'))
const getList = async () => {
  const res = null
  // if (+roleId.value === 1) {
  //   res = await getCondoList({ landlordId: userId.value })
  // } else {
  //   res = await getCondoList({ tenantsId: userId.value })
  // }
  res = await getCondoList({ tenantsId: userId.value })

  condoList.value = res.data.list
}
getList()
const goDetail = (item) => {
  router.push(`/condoDetail/${item.id}`)
}
const returnRent = async (item) => {
  const res = await updateCondo(item.id, { rentStatus: 4 })
  ElMessage({
    message: '退租申请已提交',
    type: 'success'
  })
}
</script>

<style lang="scss" scoped>
.container {
  padding: 40px 0;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .btn {
      padding: 10px 15px;
      border-radius: 4px;
      background-color: #1677ff;
      color: #fff;
      cursor: pointer;
    }
  }
  .rent-list {
    margin: 0 auto;
    margin-top: 10px;

    .rent-item {
      margin-bottom: 24px;
      padding: 20px;
      border-radius: 7px;
      position: relative;
      background-color: #fff;
      cursor: pointer;
      border: 3px solid #f1f1f3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
      }
      img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 7px;
      }
      .title {
        font-weight: 700;
        font-size: 20px;
        padding: 10px;
      }

      .address {
        padding-left: 10px;
        font-size: 14px;
        color: #9698a6;
      }

      .price {
        margin-top: 22px;

        .price-number {
          padding-left: 10px;
          font-weight: 700;
          font-size: 22px;
          color: #2f438a;
        }
      }

      .collection {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 60px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: #f1f1f3;
        font-size: 14px;
      }
    }
  }
}
.el-button {
  margin: 0 6px;
  margin-bottom: 6px;
}
</style>
