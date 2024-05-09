<template>
  <div class="container">
    <el-card style="width: 100%">
      <template #header>
        <div class="card-header">
          <span class="title">我的房子</span>
          <div class="btn" @click="handleAddBtnClick">发布新房子</div>
        </div>
      </template>
      <div class="rent-list">
        <div class="rent-item" v-for="(item, index) in condoList" :key="index">
          <div class="left">
            <div class="title">
              {{ item.title }}
              <el-tag
                type="success"
                style="margin-left: 10px"
                v-if="+item.rentStatus === 3"
                >已租出</el-tag
              >
              <el-tag
                type="success"
                style="margin-left: 10px"
                v-if="+item.rentStatus === 2"
                >被预订</el-tag
              >
              <el-tag
                type="warning"
                style="margin-left: 10px"
                v-if="+item.rentStatus === 4"
                >租客申请退租</el-tag
              >
              <el-tag
                type="info"
                style="margin-left: 10px"
                v-if="+item.rentStatus === 1"
                >未租出</el-tag
              >
            </div>
            <div class="address">{{ item.address }}</div>
          </div>
          <div class="right">
            <el-button
              type="success"
              plain
              v-if="+item.rentStatus === 2"
              @click="confirmRent(item)"
              >确认租出</el-button
            >
            <el-button type="primary" plain @click="goDetail"
              >查看详情</el-button
            >
            <el-button
              type="primary"
              plain
              v-if="+item.rentStatus === 3"
              @click="goEdit"
              >修改详情</el-button
            >
            <el-button
              type="warning"
              plain
              v-if="+item.rentStatus === 4"
              @click="confirmReturn"
            >
              同意退租
            </el-button>
            <el-button type="danger" plain @click="handleDelete"
              >删除房子</el-button
            >
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getCondoList, updateCondo } from '@/api/condo'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const condoList = ref([])
const userId = ref(localStorage.getItem('userId'))
const router = useRouter()
const getList = async () => {
  const res = await getCondoList({ landlordId: userId.value })
  condoList.value = res.data.list
}
getList()
const handleAddBtnClick = () => {
  router.push('/add-condo')
}
const confirmRent = async (item) => {
  const res = await updateCondo(item.id, { rentStatus: 3 })
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
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
    }
    .btn {
      padding: 10px 15px;
      border-radius: 4px;
      background-color: #1677ff;
      color: #fff;
      cursor: pointer;
      font-weight: 600;
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
