<template>
  <div class="container">
    <div class="banner">
      <h1>用户反馈</h1>
      <img src="../../assets/images/feedback-bg.jpg" alt="" />
    </div>
    <div class="des">欢迎您对平台进行反馈，我们会尽快处理~</div>
    <div class="feedback_area">
      <el-form :model="form" label-width="auto">
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
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
      <div class="btn">提交反馈</div>
    </div>
    <div class="record">
      <h2>我的反馈记录</h2>
      <div class="item">
        <div class="content">
          据媒体报道，1月29日，支付宝“集五福”正式开启，首日有近40万人集齐。据了解，“集五福”活动始于2016年，至今已持续9年。
          企查查APP显示，已有多个公司或自然人申请注册“敬业福”“富强福”“爱国福”“和谐福”“友善福”商标，国际分类包括广告销售、办公用品、日化用品等，其中部分商标已成功注册。值得一提的是，最难收集的“敬业福”已被多方注册为商标，国际分类包括方便食品、教育娱乐等，申请人包括科技、电商、农业等公司以及多名自然人。据媒体报道，1月29日，支付宝“集五福”正式开启，首日有近40万人集齐。据了解，“集五福”活动始于2016年，至今已持续9年。
          企查查APP显示，已有多个公司或自然人申请注册“敬业福”“富强福”“爱国福”“和谐福”“友善福”商标，国际分类包括广告销售、办公用品、日化用品等，其中部分商标已成功注册。
        </div>
        <div class="status">已处理</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const feedbackContent = ref('')
const form = ref({
  name: '',
  email: '',
})
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
      display: flex;
      align-items: center;
      background-color: #fff;
      border-radius: 8px;
      padding: 30px;
      .content {
        flex: 1;
      }
      .status {
        width: 100px;
        text-align: right;
      }
    }
  }
}
</style>
