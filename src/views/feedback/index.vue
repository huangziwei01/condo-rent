<template>
  <div class="container">
    <div class="banner">
      <h1>用户反馈</h1>
      <img src="../../assets/images/feedback-bg.avif" alt="" />
    </div>
    <div class="des">欢迎您对平台进行反馈，我们会尽快处理~</div>
    <div class="feedback_area">
      <el-form :model="form" label-width="auto">
        <el-form-item label="邮箱">
          <el-input v-model="form.email" />
        </el-form-item>
      </el-form>
      <div class="text">
        <el-input
          v-model="feedbackContent"
          :autosize="{ minRows: 10, maxRows: 40 }"
          type="textarea"
          placeholder="请在这里输入您的反馈内容"
        />
      </div>
      <div class="btn" @click="submitFeedback">提交反馈</div>
    </div>
    <div class="record">
      <h2>我的反馈记录</h2>
      <div class="item" v-for="item in feedbackList">
        <div class="row1">
          <div class="content">{{ item.content }}</div>
          <div class="status" v-if="item.reply">
            <el-tag type="success">已处理</el-tag>
          </div>
          <div class="status" v-else>
            <el-tag type="danger">未处理</el-tag>
          </div>
        </div>
        <div class="time">反馈时间：{{ item.fTime }}</div>
        <div class="reply" v-if="item.reply">
          官方回复：<span style="color: #67c23a">{{ item.reply }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { addFeedback, getFeedbackList } from '@/api/feedback'

const feedbackContent = ref('')
const form = ref({
  name: '',
  email: '',
})
const feedbackList = ref([])
const getList = async () => {
  const res = await getFeedbackList({
    userId: localStorage.getItem('userId'),
  })
  if (res.code === 1) {
    feedbackList.value = res.data.list
  }
}
getList()
const submitFeedback = async () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const dateString = `${year}-${month}-${day}`
  const res = await addFeedback({
    userId: localStorage.getItem('userId'),
    content: feedbackContent.value,
    email: form.value.email,
    fTime: dateString,
  })
  if (res.code === 1) {
    getList()
    feedbackContent.value = ''
    form.value = {
      name: '',
      email: '',
    }
  }
}
</script>

<style scoped lang="scss">
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
  .des {
    width: 100%;
    margin-top: 30px;
    text-align: center;
    color: #9fa6c4;
    font-size: 18px;
  }
  .feedback_area {
    width: 100%;
    margin-top: 40px;
    /* display: flex; */
    .text {
      width: 100%;
    }
    .btn {
      width: 150px;
      margin: 0 auto;
      margin-top: 40px;
      padding: 20px;
      background-color: #1677ff;
      text-align: center;
      border-radius: 14px;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .record {
    width: 100%;
    margin-top: 60px;
    h2 {
      margin-bottom: 40px;
    }
    .item {
      width: 100%;
      background-color: #fff;
      border-radius: 8px;
      padding: 30px;
      margin-bottom: 15px;
      .row1 {
        width: 100%;
        display: flex;
        align-items: center;
        .content {
          flex: 1;
        }
        .status {
          width: 100px;
          text-align: right;
        }
      }
      .time {
        margin: 15px 0;
      }
      .reply {
      }
    }
  }
}
</style>
