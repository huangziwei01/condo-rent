<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <router-link to="/">
          <div class="home-button">房屋租赁</div>
        </router-link>
        <div class="nav-list">
          <router-link to="/">
            <div class="nav-item" :style="{ color: route.name === 'home' ? '#1677ff' : '#000' }">首页</div>
          </router-link>
          <router-link to="/search">
            <div class="nav-item" :style="{ color: route.name === 'search' ? '#1677ff' : '#000' }">找房</div>
          </router-link>
          <!-- <router-link to="/shared-rent">
            <div class="nav-item" :style="{ color: route.name === 'shared-rent' ? '#1677ff' : '#000' }">合租</div>
          </router-link> -->
          <router-link to="/news">
            <div class="nav-item" :style="{ color: route.name === 'news' ? '#1677ff' : '#000' }">新闻资讯</div>
          </router-link>
          <router-link to="/feedback">
            <div class="nav-item" :style="{ color: route.name === 'feedback' ? '#1677ff' : '#000' }">用户反馈</div>
          </router-link>
        </div>
      </div>
      <div class="right">
        <div class="login">登录</div>
        <div class="register">注册</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  z-index: 999;

  a {
    text-decoration: none;
    color: #000;
  }
  .content {
    width: 100%;
    min-width: 1000px;
    max-width: 2440px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;

    .left {
      display: flex;
      .home-button {
        font-size: 32px;
      }
      .nav-list {
        margin-left: 30px;
        display: flex;
        align-items: center;
        .nav-item {
          height: 100%;
          padding: 0 20px;
          font-weight: 700;
          text-decoration: none !important;
          color: #000;
          flex-shrink: 0;
        }

        .nav-item:hover {
          color: #1677ff;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 100px;
        background-color: #1677ff;
        border-radius: 4px;
        color: #fff;
        font-weight: 700;
        margin-right: 20px;
        font-size: 14px;
        font-weight: 700;
      }

      .register {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 100px;
        background-color: black;
        border-radius: 4px;
        color: #fff;
        font-weight: 700;
      }
    }
  }
}
</style>
