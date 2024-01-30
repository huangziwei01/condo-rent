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
          <router-link to="/whole-rent">
            <div class="nav-item" :style="{ color: route.name === 'whole-rent' ? '#1677ff' : '#000' }">整租</div>
          </router-link>
          <router-link to="/shared-rent">
            <div class="nav-item" :style="{ color: route.name === 'shared-rent' ? '#1677ff' : '#000' }">合租</div>
          </router-link>
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
console.log(route)
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
    width: 1400px;
    min-width: 700px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
        margin-right: 20px;
        font-size: 14px;
        font-weight: 700;
        color: #1677ff;
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
