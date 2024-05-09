<template>
  <div class="container">
    <div class="content">
      <div class="poster">
        <img src="../../assets/images/bg.jpg" alt="" />
        <h1>致力于让您更像当地人一样生活</h1>
      </div>
      <div class="rent-intro">
        <h2>最新整租</h2>
        <div class="intro-title">为您推荐最新的整租房源</div>
      </div>
      <div class="rent-list">
        <el-row :gutter="20">
          <el-col v-bind="colLayout" v-for="(item, index) in zhengList" :key="index" @click="goDetail(item)">
            <div class="rent-item">
              <img src="../../assets/images/rent.png" alt="" />
              <div class="title">{{ item.title }}</div>
              <div class="address">{{ item.address }}</div>
              <div class="price">
                <span class="price-number">￥{{ item.price }}</span>
                /月
              </div>
              <div class="collection" @click="collectCondo(item)" v-if="+item.userId !== userId">收藏</div>
              <div class="collection1" @click="unCollectCondo(item)" v-else>已收藏</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="rent-intro">
        <h2>最新合租</h2>
        <div class="intro-title">为您推荐最新的合租房源</div>
      </div>
      <div class="rent-list">
        <el-row :gutter="20">
          <el-col v-bind="colLayout" v-for="(item, index) in heList" :key="index" @click="goDetail(item)">
            <div class="rent-item">
              <img src="../../assets/images/rent.png" alt="" />
              <div class="title">{{ item.title }}</div>
              <div class="address">{{ item.address }}</div>
              <div class="price">
                <span class="price-number">￥{{ item.price }}</span>
                /月
              </div>
              <div class="collection" @click="collectCondo(item)">收藏</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="detail" @click="goSearch">查看更多房源 -></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCondoList } from '@/api/condo'
import { addCollect, deleteCollect, getCollectList } from '@/api/collect'
import { ElMessage } from 'element-plus'
const router = useRouter()
const goDetail = (item) => {
  router.push(`/condoDetail/${item.id}`)
}
const colLayout = {
  xl: 6, // ≥1920px
  lg: 8, // ≥1200px
  md: 12, // ≥992px
  sm: 24, // ≥768px
  xs: 24 // <768px
}

const zhengList = ref([])
const heList = ref([])
const getZhengzuList = async () => {
  const res = await getCondoList({ rentType: 1, size: 6, rentStatus: 1 })
  zhengList.value = res.data.list
}

const getHezuList = async () => {
  const res = await getCondoList({ rentType: 2, size: 6, rentStatus: 1 })
  heList.value = res.data.list
}

getZhengzuList()
getHezuList()

const goSearch = () => {
  router.push('/search')
}
const userId = ref(localStorage.getItem('userId'))
const collectCondo = async (item) => {
  const res = await addCollect({ userId: userId.value, condoId: item.id })
  ElMessage({
    message: '收藏成功',
    type: 'success'
  })
}
const unCollectCondo = async (item) => {
  const res1 = await getCollectList({ userId: userId.value, condoId: item.id })
  const target = res1.data.list[0]
  const res2 = await deleteCollect(target.id)
  ElMessage({
    message: '取消收藏成功',
    type: 'success'
  })
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  a {
    text-decoration: none;
    color: #000;
  }

  .poster {
    width: 100vw;
    height: 534px;
    color: #fff;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .rent-intro {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .intro-title {
      font-size: 14px;
      color: #9fa6c4;
      margin-top: 15px;
    }
  }
  .rent-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .rent-item {
      width: 100%;
      // min-width: 300px;
      height: 400px;
      margin: 20px 0;
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
      .collection1 {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 60px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: #fff;
        font-size: 14px;
        color: #4860ff;
      }
    }
  }
  .detail {
    // width: 60px;
    height: 20px;
    padding: 20px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    background-color: #4860ff;
    color: #fff;
    font-weight: 700;
    margin-top: 20px;
  }
}
</style>
