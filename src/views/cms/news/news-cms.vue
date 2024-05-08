<template>
  <div class="container">
    <el-card style="width: 100%">
      <template #header>
        <div class="card-header">
          <span class="title">所有新闻</span>
          <div class="btn" @click="handleAddBtnClick">发布新闻</div>
        </div>
      </template>
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
          <div class="btns">
            <el-button type="primary" plain @click="handleEditBtnClick(item)"
              >修 改</el-button
            >
            <el-button type="danger" plain @click="handleDeleteBtnClick(item)"
              >删 除</el-button
            >
          </div>
        </div>
      </div>
    </el-card>
    <el-dialog
      :close-on-click-modal="false"
      v-model="dialogVisible"
      :title="dialogTitle"
      width="600"
      center
    >
      <div>
        <el-form :model="curFormData" label-width="auto">
          <el-form-item label="新闻标题:">
            <el-input v-model="curFormData.title" />
          </el-form-item>
          <el-form-item label="新闻内容">
            <el-input v-model="curFormData.content" type="textarea" :rows="6" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleDialogBtnClick" primary>{{
            btnText
          }}</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getNewsList, deleteNews, addNews, updateNews } from '@/api/news'

const dialogVisible = ref(false)
const dialogTitle = ref('')
const curType = ref(0)
const curFormData = ref({
  title: '',
  content: '',
})
const btnText = ref('')
const newsList = ref([])
const curNewId = ref(0)

const getList = async () => {
  const res = await getNewsList()
  newsList.value = res.data.list
}
getList()
const handleAddBtnClick = async () => {
  curType.value = 0
  curFormData.value = { title: '', content: '' }
  dialogVisible.value = true
  dialogTitle.value = '发布新闻'
  btnText.value = '发布'
}
const handleEditBtnClick = async (item) => {
  curNewId.value = item.id
  curType.value = 1
  curFormData.value = item
  dialogVisible.value = true
  dialogTitle.value = '修改新闻'
  btnText.value = '修改'
}
const handleDialogBtnClick = async () => {
  if (curType.value === 0) {
    const res = await addNews(curFormData.value)
    if (res.code === 1) {
      dialogVisible.value = false
      getList()
    }
  } else {
    const res = await updateNews(curNewId.value, curFormData.value)
    if (res.code === 1) {
      dialogVisible.value = false
      getList()
    }
  }
}

const handleDeleteBtnClick = async (item) => {
  const res = await deleteNews(item.id)
  if (res.code === 1) {
    getList()
  }
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
  .list {
    margin: 0 auto;

    .news-item {
      max-height: 139px;
      padding: 20px;
      margin-bottom: 15px;
      display: flex;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      border: 3px solid #f1f1f3;
      .btns {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
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
          height: 110px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          /* 设置行数，根据需要调整 */
          -webkit-line-clamp: 3; /* 显示3行，可以根据需要调整行数 */
        }
      }
    }
  }
}
</style>
