<template>
  <div class="container">
    <el-card style="width: 100%">
      <template #header>
        <div class="card-header">
          <span class="title">用户反馈</span>
        </div>
      </template>
      <div class="list">
        <div class="feedback-item" v-for="item in feedbackList">
          <div class="content">
            <div class="desc">{{ item.content }}</div>
            <div class="author">
              <el-icon><User /></el-icon>
              {{ item.userName }}
            </div>
            <div class="date">{{ item.fTime }}</div>
            <div class="reply" v-if="item.reply">
              官方回复:<span style="color: #67c23a">{{ item.reply }}</span>
            </div>
          </div>
          <div class="btns">
            <el-button type="success" plain @click="handleReply(item)"
              >回 复</el-button
            >
            <el-button type="danger" plain @click="handleDelete(item)"
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
          <el-form-item label="回复内容:">
            <el-input v-model="curFormData.reply" type="textarea" :rows="6" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleDialogBtnClick" primary>回复</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getFeedbackList, deleteFeedback, updateFeedback } from '@/api/feedback'
import { getUser } from '@/api/user'

const dialogVisible = ref(false)
const dialogTitle = ref('')
const curFormData = ref({
  id: '',
  reply: '',
})
const handleDialogBtnClick = async () => {
  const res = await updateFeedback(curFormData.value.id, {
    reply: curFormData.value.reply,
  })
  if (res.code === 1) {
    dialogVisible.value = false
    getList()
  }
}
const feedbackList = ref([])
const getList = async () => {
  const res = await getFeedbackList()
  if (res.code === 1) {
    feedbackList.value = res.data.list
    feedbackList.value.forEach(async (item) => {
      const { userId } = item
      const res = await getUser(userId)
      item.userName = res.data.userName
    })
  }
}
getList()
const handleReply = async (item) => {
  curFormData.value.id = item.id
  dialogVisible.value = true
}
const handleDelete = async (item) => {
  const res = await deleteFeedback(item.id)
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

    .feedback-item {
      padding: 20px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      border: 3px solid #f1f1f3;
      .content {
        .desc {
          font-weight: 700;
        }
        .author {
          margin-top: 8px;
        }
        .date {
          margin: 8px 0;
        }
      }
      .btns {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
    }
  }
}
</style>
