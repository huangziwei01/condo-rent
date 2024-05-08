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
          <router-link to="/condo-cms" v-if="isLogin && isCondoCmsShow">
            <div
              class="nav-item"
              :style="{
                color: route.name === 'condo-cms' ? '#1677ff' : '#000',
              }"
            >
              <!-- {{ localStorage.getItem('roleId') ? '房屋管理' : '我的房屋' }} -->
              房屋管理
            </div>
          </router-link>
          <router-link to="/orders-cms" v-if="isLogin && isOrdersCmsShow">
            <div
              class="nav-item"
              :style="{
                color: route.name === 'orders-cms' ? '#1677ff' : '#000',
              }"
            >
              订单管理
            </div>
          </router-link>
          <router-link to="/news-cms" v-if="isLogin && isNewsCmsShow">
            <div
              class="nav-item"
              :style="{ color: route.name === 'news-cms' ? '#1677ff' : '#000' }"
            >
              新闻管理
            </div>
          </router-link>
          <router-link to="/feedback-cms" v-if="isLogin && isFeedbackCmsShow">
            <div
              class="nav-item"
              :style="{
                color: route.name === 'feedback-cms' ? '#1677ff' : '#000',
              }"
            >
              反馈管理
            </div>
          </router-link>
          <router-link to="/user-cms" v-if="isLogin && isUserCmsShow">
            <div
              class="nav-item"
              :style="{ color: route.name === 'user-cms' ? '#1677ff' : '#000' }"
            >
              用户管理
            </div>
          </router-link>
          <router-link to="/role-cms" v-if="isLogin && isRoleCmsShow">
            <div
              class="nav-item"
              :style="{ color: route.name === 'role-cms' ? '#1677ff' : '#000' }"
            >
              角色管理
            </div>
          </router-link>
          <router-link to="/menu-cms" v-if="true || (isLogin && isMenuCmsShow)">
            <div
              class="nav-item"
              :style="{ color: route.name === 'menu-cms' ? '#1677ff' : '#000' }"
            >
              权限管理
            </div>
          </router-link>
        </div>
      </div>
      <div class="right">
        <template v-if="!isLogin">
          <div class="login" @click="handleNavLoginBtnClick">登录</div>
          <div class="register" @click="handleNavRegisterBtnClick">注册</div>
        </template>
        <template v-else>
          <div class="user_center">
            <el-dropdown trigger="click">
              <div>
                <el-icon><User /></el-icon>
                {{ userName }}
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <div>
                    <el-dropdown-item>收藏列表</el-dropdown-item>
                    <el-dropdown-item @click="handleUserInfoBtnClick"
                      >个人中心</el-dropdown-item
                    >
                    <el-dropdown-item @click="logout"
                      >退出登录</el-dropdown-item
                    >
                  </div>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>
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
          <div class="login" @click="handleDialogBtnClick">{{ btnText }}</div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { computed, ref, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MyForm from '@/components/form/index.vue'
import { loginFormItems, registerFormItems } from './config.js'
import { register, login } from '@/api/user.js'
import { ElMessage } from 'element-plus'

const dialogTableVisible = ref(false)
const dialogTitle = ref('')
const route = useRoute()
const router = useRouter()
const userInfo = ref({})

const curDialogType = ref('')
const btnText = computed(() => {
  return curDialogType.value === 'login' ? '立即登录' : '立即注册'
})

const loginFormData = ref({})
const registerFormData = ref({})

const isLogin = localStorage.getItem('token') ? true : false

loginFormItems.forEach((item) => {
  const obj = loginFormData.value
  obj[item.field] = ''
})

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

const handleDialogBtnClick = async () => {
  if (curDialogType.value === 'login') {
    const res = await login({
      userName: loginFormData.value.userName,
      password: loginFormData.value.password,
    })
    if (res.code === 1) {
      const { roleId, token, userName, menus, id } = res.data
      console.log(res.data)
      userInfo.value = res.data
      localStorage.setItem('token', token)
      localStorage.setItem('userName', userName)
      localStorage.setItem('menus', JSON.stringify(menus))
      localStorage.setItem('roleId', roleId)
      localStorage.setItem('userId', id)
      ElMessage({
        message: `欢迎登录，${userName}`,
        type: 'success',
      })
      dialogTableVisible.value = false
      location.reload()
    } else {
      ElMessage.error(res.msg)
    }
  } else {
    console.log(registerFormData.value)
    registerFormData.value.area = registerFormData.value.area.join('/')
    const res = await register({ ...registerFormData.value, status: '1' })
    if (res.code === 1) {
      ElMessage({
        message: '您已注册成功，欢迎登录~',
        type: 'success',
      })
      router.push({
        path: '/',
      })
      // 跳到登录页面
      const { userName, password } = registerFormData.value
      curDialogType.value = 'login'
      loginFormData.value.userName = userName
      loginFormData.value.password = password
    } else {
      ElMessage.error(res.msg)
    }
  }
}

const logout = () => {
  router.push({
    path: '/',
  })
  localStorage.clear()
  ElMessage({
    message: '您已退出登录~',
    type: 'success',
  })
  setTimeout(() => {
    location.reload()
  }, 1000)
}

const isCondoCmsShow = computed(() => {
  return JSON.parse(localStorage.getItem('menus'))?.find(
    (item) => item === '/condo-cms'
  )
})

const isOrdersCmsShow = computed(() => {
  return JSON.parse(localStorage.getItem('menus'))?.find(
    (item) => item === '/orders-cms'
  )
})

const isNewsCmsShow = computed(() => {
  return JSON.parse(localStorage.getItem('menus'))?.find(
    (item) => item === '/news-cms'
  )
})

const isFeedbackCmsShow = computed(() => {
  return JSON.parse(localStorage.getItem('menus'))?.find(
    (item) => item === '/feedback-cms'
  )
})

const isUserCmsShow = computed(() => {
  return JSON.parse(localStorage.getItem('menus'))?.find(
    (item) => item === '/user-cms'
  )
})

const isRoleCmsShow = computed(() => {
  return JSON.parse(localStorage.getItem('menus'))?.find(
    (item) => item === '/role-cms'
  )
})

const isMenuCmsShow = computed(() => {
  return JSON.parse(localStorage.getItem('menus'))?.find(
    (item) => item === '/menu-cms'
  )
})

const handleUserInfoBtnClick = () => {
  router.push({
    path: '/user-info',
  })
}

const userName = computed(() => {
  return localStorage.getItem('userName') || ''
})
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
        height: 80px;
        display: flex;
        align-items: center;
        font-size: 32px;
      }
      .nav-list {
        margin-left: 30px;
        display: flex;
        align-items: center;
        .nav-item {
          display: flex;
          align-items: center;
          height: 80px;
          padding: 0 15px;
          font-weight: 700;
          text-decoration: none !important;
          color: #000;
          flex-shrink: 0;
          font-size: 17px;
          &:hover {
            color: #1677ff;
          }
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
