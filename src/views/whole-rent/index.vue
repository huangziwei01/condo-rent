<template>
  <div class="container">
    <div class="title1"><h2>全部整租房源</h2></div>
    <div class="rent-list">
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
      <div class="rent-item">
        <img src="../../assets/images/rent.png" alt="" />
        <div class="title">富力湾 3房2厅 4000元/月</div>
        <div class="address">顺安南路12号</div>
        <div class="price">
          <span class="price-number">￥4000</span>
          /月
        </div>
        <div class="collection">收藏</div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-top: 80px;
  background-color: #f7f9fd;

  .title1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4860ff;
    padding-top: 40px;
  }
  .rent-list {
    width: 1800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    padding: 0 50px;

    .rent-item {
      min-width: 300px;
      height: 400px;
      margin: 34px;
      border-radius: 7px;
      position: relative;
      background-color: #fff;
      cursor: pointer;

      img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 7px;
      }
      .title {
        font-weight: 700;
        font-size: 20px;
        padding: 10px;
      }

      .address {
        padding-left: 10px;
        font-size: 14px;
        color: #9698a6;
      }

      .price {
        margin-top: 22px;

        .price-number {
          padding-left: 10px;
          font-weight: 700;
          font-size: 22px;
          color: #2f438a;
        }
      }

      .collection {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 60px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: #f1f1f3;
        font-size: 14px;
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
}
</style>
