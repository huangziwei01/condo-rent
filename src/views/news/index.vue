<template>
  <div class="container">
    <div class="banner">
      <h1>新闻资讯</h1>
      <img src="../../assets/images/news-bg.jpeg" alt="" />
    </div>
    <div class="list">
      <div class="news-item" v-for="(item, index) in newsList" :key="index">
        <div class="text">
          <div class="title">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getNewsList } from '@/api/news'
const newsList = ref([])
const getList = async () => {
  const res = await getNewsList()
  newsList.value = res.data.list
}
getList()
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
  .list {
    margin: 0 auto;
    padding-top: 30px;

    .news-item {
      padding: 20px;
      margin-top: 30px;
      display: flex;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      border: 3px solid #f1f1f3;
      cursor: pointer;

      img {
        width: 200px;
        height: 150px;
        margin-right: 100px;
      }
      .text {
        flex: 1;
        overflow: hidden;
        .title {
          margin-bottom: 20px;
        }
        .content {
          /* height: 110px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis; */
        }
      }
    }
  }
}
</style>
