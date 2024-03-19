<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <router-link to="/">
          <div class="home-button">房屋租赁</div>
        </router-link>
        <div class="nav-list">
          <router-link to="/">
            <div
              class="nav-item"
              :style="{ color: route.name === 'home' ? '#1677ff' : '#000' }"
            >
              首页
            </div>
          </router-link>
          <router-link to="/search">
            <div
              class="nav-item"
              :style="{ color: route.name === 'search' ? '#1677ff' : '#000' }"
            >
              找房
            </div>
          </router-link>
          <router-link to="/news">
            <div
              class="nav-item"
              :style="{ color: route.name === 'news' ? '#1677ff' : '#000' }"
            >
              新闻资讯
            </div>
          </router-link>
          <router-link to="/feedback">
            <div
              class="nav-item"
              :style="{ color: route.name === 'feedback' ? '#1677ff' : '#000' }"
            >
              用户反馈
            </div>
          </router-link>
        </div>
      </div>
      <div class="right">
        <template v-if="!isLogin"
          ><div class="login" @click="handleNavLoginBtnClick">登录</div>
          <div class="register" @click="handleNavRegisterBtnClick">注册</div>
        </template>
        <template v-else> </template>
      </div>
    </div>
    <el-dialog
      :close-on-click-modal="false"
      v-model="dialogTableVisible"
      :title="dialogTitle"
      width="600"
      center
    >
      <div v-if="curDialogType === 'login'">
        <my-form
          :formItems="loginFormItems"
          v-model="loginFormData"
          :colLayout="{ span: 23 }"
        ></my-form>
      </div>
      <div v-else>
        <my-form
          :formItems="registerFormItems"
          v-model="registerFormData"
          :colLayout="{ span: 23 }"
        ></my-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="login" @click="handleLoginBtnClick">{{ btnText }}</div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import MyForm from '@/components/form/index.vue'
import { loginFormItems, registerFormItems } from './config.js'
const dialogTableVisible = ref(false)
const dialogTitle = ref('')
const route = useRoute()

const curDialogType = ref('')
const btnText = computed(() => {
  return curDialogType.value === 'login' ? '立即登录' : '立即注册'
})

const loginFormData = ref({})
const registerFormData = ref({})

// loginFormItems.forEach((item) => {
//   const obj = loginFormData.value
//   obj[item.field] = ''
// })

registerFormItems.forEach((item) => {
  const obj = registerFormData.value
  obj[item.field] = ''
})

const handleNavLoginBtnClick = () => {
  curDialogType.value = 'login'
  dialogTableVisible.value = true
  dialogTitle.value = '欢迎登录~'
}

const handleNavRegisterBtnClick = () => {
  curDialogType.value = 'register'
  dialogTableVisible.value = true
  dialogTitle.value = '欢迎注册~'
}

const handleLoginBtnClick = () => {}
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

  .dialog-footer {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding: 0 30px;
    .login {
      width: 100%;
      padding: 15px 0;
      text-align: center;
      border-radius: 6px;
      background-color: #1677ff;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
    }
  }
}

:deep(.el-dialog) {
  padding-bottom: 30px;
  .el-dialog__header {
    margin: 0;
    padding: 40px 0;
    .el-dialog__title {
      font-size: 24px;
      font-weight: 700;
    }
  }
}
</style>
