<template>
  <div class="container">
    <div class="banner">
      <h1>睡在山海间，住在人情里</h1>
      <img src="../../assets/images/search-bg.jpeg" alt="" />
    </div>
    <my-form :formItems="formItems" v-model="formData" :labelWidth="'120px'" class="my_form">
      <!-- <template #header>
        <h3 class="form_title">请输入您要筛选的条件</h3>
      </template> -->
      <template #footer>
        <div class="btns">
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </div>
      </template>
    </my-form>
    <div class="rent-list">
      <el-row :gutter="30" style="width: 100%">
        <el-col v-bind="colLayout">
          <div class="rent-item" v-for="(item, index) in condoList" :key="index">
            <img :src="item.imgs[0]" alt="" />
            <div class="title">{{ item.title }}</div>
            <div class="address">{{ item.address }}</div>
            <div class="price">
              <span class="price-number">￥{{ item.price }}</span>
              /月
            </div>
            <div class="collection" @click.stop="collectCondo(item)" v-if="!isCollectShow(item)">收藏</div>
            <div class="collection1" @click.stop="unCollectCondo(item)" v-else>已收藏</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MyForm from '@/components/form/index.vue'
import { getCondoList } from '@/api/condo'
import { addCollect, deleteCollect, getCollectList } from '@/api/collect'
import { ElMessage } from 'element-plus'

import { formItems } from './config.js'
const condoList = ref([])
const getList = async () => {
  const res = await getCondoList({ size: 12, rentStatus: 1 })
  if (res.code === 1) {
    condoList.value = res.data.list
  }
}
getList()
const formData = ref({})
formItems.forEach((item) => {
  const obj = formData.value
  obj[item.field] = ''
})

const colLayout = {
  xl: 6, // ≥1920px
  lg: 8, // ≥1200px
  md: 12, // ≥992px
  sm: 24, // ≥768px
  xs: 24 // <768px
}

const isCollectShow = computed(() => {
  return async function (item) {
    const res = await getCollectList({
      userId: String(userId.value),
      condoId: String(item.id)
    })
    console.log(res)
    if (res.code === 1) {
      return true
    } else {
      return false
    }
  }
})

const collectCondo = async (item) => {
  const res = await addCollect({
    userId: String(userId.value),
    condoId: String(item.id)
  })
  if (res.code === 1) {
    getHezuList()
    getZhengzuList()
    ElMessage({
      message: '收藏成功',
      type: 'success'
    })
  }
}
const unCollectCondo = async (item) => {
  // const res1 = await getCollectList({ userId: userId.value, condoId: item.id })
  // const target = res1.data.list[0]
  // const res2 = await deleteCollect(target.id)
  const res = await deleteCollect({
    userId: String(userId.value),
    condoId: String(item.id)
  })
  if (res.code === 1) {
    getHezuList()
    getZhengzuList()
    ElMessage({
      message: '取消收藏成功',
      type: 'success'
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  .banner {
    width: 100vw;
    height: 543px;
    position: relative;
    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      z-index: 99;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .form_title {
    padding: 30px 0;
    // color: rgb(22, 119, 255);
  }

  .my_form {
    width: 100%;
    background-color: #fff;
    border-radius: 18px;
    margin-top: 30px;
    padding: 40px;
    padding-bottom: 20px;
    .btns {
      display: flex;
      padding-bottom: 20px;
      justify-content: flex-end;
    }
  }

  .title1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4860ff;
    padding-top: 40px;
  }
  .rent-list {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;

    .rent-item {
      height: 400px;
      margin-bottom: 34px;
      border-radius: 7px;
      position: relative;
      background-color: #fff;
      cursor: pointer;

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
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
}
</style>
