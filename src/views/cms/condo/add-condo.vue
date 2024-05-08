<template>
  <div class="container">
    <h2>在这里发布您的新房子</h2>
    <el-card style="width: 100%">
      <template #header>
        <div class="card-header">
          <span class="title">基本信息</span>
        </div>
      </template>
      <div>
        <my-form
          :formItems="formItems1"
          v-model="formData1"
          :colLayout="{ span: 12 }"
          :labelWidth="'140px'"
        ></my-form>
      </div>
    </el-card>
    <el-card style="width: 100%; margin-top: 30px">
      <template #header>
        <div class="card-header">
          <span class="title">基本信息</span>
        </div>
      </template>
      <div>
        <my-form
          :formItems="formItems2"
          v-model="formData2"
          :colLayout="{ span: 12 }"
          :labelWidth="'100px'"
        ></my-form>
      </div>
    </el-card>
    <el-card style="width: 100%; margin-top: 30px">
      <template #header>
        <div class="card-header">
          <span class="title">建筑信息</span>
        </div>
      </template>
      <div>
        <my-form
          :formItems="formItems3"
          v-model="formData3"
          :colLayout="{ span: 12 }"
          :labelWidth="'100px'"
        ></my-form>
      </div>
    </el-card>
    <el-card style="width: 100%; margin-top: 30px">
      <template #header>
        <div class="card-header">
          <span class="title">联系人信息</span>
        </div>
      </template>
      <div>
        <my-form
          :formItems="formItems4"
          v-model="formData4"
          :colLayout="{ span: 12 }"
          :labelWidth="'100px'"
        ></my-form>
      </div>
    </el-card>
    <el-card style="width: 100%; margin-top: 30px">
      <template #header>
        <div class="card-header">
          <span class="title">详细描述</span>
        </div>
      </template>
      <div>
        <my-form
          :formItems="formItems5"
          v-model="formData5"
          :colLayout="{ span: 24 }"
        ></my-form>
      </div>
    </el-card>
    <el-card style="width: 100%; margin-top: 30px">
      <template #header>
        <div class="card-header">
          <span class="title">图片上传</span>
        </div>
      </template>
      <div>
        <el-upload
          name="photos"
          multiple
          v-model:file-list="imgList"
          :action="uploadUrl"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :limit="8"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </div>
    </el-card>
    <div class="btn">发布</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MyForm from '@/components/form/index.vue'
import {
  formItems1,
  formItems2,
  formItems3,
  formItems4,
  formItems5,
} from './config.js'

const uploadUrl = computed(() => {
  return import.meta.env.MODE === 'development'
    ? 'http://localhost:8880/upload/condo_photo'
    : ''
})

const handleSuccess = (response, file, fileList) => {
  console.log(response, file, fileList)
}

console.log(uploadUrl)

const formData1 = ref({})
const formData2 = ref({})
const formData3 = ref({})
const formData4 = ref({})
const formData5 = ref({})

formItems1.forEach((item) => {
  const obj = formData1.value
  obj[item.field] = ''
})
formItems2.forEach((item) => {
  const obj = formData2.value
  obj[item.field] = ''
})
formItems3.forEach((item) => {
  const obj = formData3.value
  obj[item.field] = ''
})
formItems4.forEach((item) => {
  const obj = formData4.value
  obj[item.field] = ''
})
formItems5.forEach((item) => {
  const obj = formData5.value
  obj[item.field] = ''
})

const imgList = ref([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handlePictureCardPreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}
const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
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
