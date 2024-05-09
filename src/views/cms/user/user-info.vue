<template>
  <div class="container">
    <el-card style="width: 100%">
      <template #header>
        <div class="card-header">
          <span class="title">个人信息</span>
        </div>
      </template>
      <div>
        <my-form
          :formItems="userInfoForm"
          v-model="userInfoFormData"
          :colLayout="{ span: 12 }"
          :labelWidth="'140px'"
        ></my-form>
      </div>
    </el-card>
    <div class="btn">保存</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MyForm from '@/components/form/index.vue'
import { userInfoForm } from './config'
import { getUser } from '@/api/user'
const userId = localStorage.getItem('userId')
onMounted(async () => {
  const res = await getUser(userId)
  console.log(res)
})
const userInfoFormData = ref({})
userInfoForm.forEach((item) => {
  const obj = userInfoFormData.value
  obj[item.field] = ''
})
const selectedOptions = ref([])
</script>

<style lang="scss" scoped>
.container {
  padding: 40px 0;
  h2 {
    margin-bottom: 40px;
  }
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
  .btn {
    width: 100%;
    text-align: center;
    margin: 40px 0;
    background-color: #1677ff;
    border-radius: 6px;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
}
</style>
