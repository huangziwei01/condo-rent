<template>
  <div class="container">
    <div class="banner">
      <h1>新闻资讯</h1>
      <img src="../../assets/images/news-bg.jpeg" alt="" />
    </div>
    <div class="list">
      <div class="news-item">
        <div class="text">
          <div class="title">
            <h3>敬业福等五福商标被抢注 已有超93万人集齐五福</h3>
          </div>
          <div class="content">
            据媒体报道，1月29日，支付宝“集五福”正式开启，首日有近40万人集齐。据了解，“集五福”活动始于2016年，至今已持续9年。
            企查查APP显示，已有多个公司或自然人申请注册“敬业福”“富强福”“爱国福”“和谐福”“友善福”商标，国际分类包括广告销售、办公用品、日化用品等，其中部分商标已成功注册。值得一提的是，最难收集的“敬业福”已被多方注册为商标，国际分类包括方便食品、教育娱乐等，申请人包括科技、电商、农业等公司以及多名自然人。据媒体报道，1月29日，支付宝“集五福”正式开启，首日有近40万人集齐。据了解，“集五福”活动始于2016年，至今已持续9年。
            企查查APP显示，已有多个公司或自然人申请注册“敬业福”“富强福”“爱国福”“和谐福”“友善福”商标，国际分类包括广告销售、办公用品、日化用品等，其中部分商标已成功注册。
          </div>
        </div>
      </div>
      <div class="news-item">
        <div class="text">
          <div class="title">
            <h3>敬业福等五福商标被抢注 已有超93万人集齐五福</h3>
          </div>
          <div class="content">
            据媒体报道，1月29日，支付宝“集五福”正式开启，首日有近40万人集齐。据了解，“集五福”活动始于2016年，至今已持续9年。
            企查查APP显示，已有多个公司或自然人申请注册“敬业福”“富强福”“爱国福”“和谐福”“友善福”商标，国际分类包括广告销售、办公用品、日化用品等，其中部分商标已成功注册。值得一提的是，最难收集的“敬业福”已被多方注册为商标，国际分类包括方便食品、教育娱乐等，申请人包括科技、电商、农业等公司以及多名自然人。据媒体报道，1月29日，支付宝“集五福”正式开启，首日有近40万人集齐。据了解，“集五福”活动始于2016年，至今已持续9年。
            企查查APP显示，已有多个公司或自然人申请注册“敬业福”“富强福”“爱国福”“和谐福”“友善福”商标，国际分类包括广告销售、办公用品、日化用品等，其中部分商标已成功注册。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
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
  .list {
    margin: 0 auto;
    padding-top: 30px;

    .news-item {
      max-height: 139px;
      padding: 20px;
      margin-top: 30px;
      display: flex;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      border: 3px solid #f1f1f3;

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
