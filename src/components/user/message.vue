<template>
  <div class="message-div w-100 bg-f6 pr-34 pt-34 pb-34 over-hide">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        :offset="10"
        class="message-list pl-38 pr-27"
      >
        <div class="list-item bg-fff" v-for="(item,index) in listData" :key="index">
          <div class="bd bd-bottom titleBox">
            <van-row>
              <van-col span="12" class="fs-32 c-333 pl-06 title">{{item.title}}</van-col>
              <van-col span="12" class="fs-24 c-999 right">{{item.createTime}}</van-col>
            </van-row>
          </div>
          <p class="fs-26 c-666">{{item.content}}</p>
          <router-link :to="{path:'/messageInfo',query:{id:item.id}}">
            <van-cell title="查看详情" is-link class="fs-28 c-333"/>
          </router-link>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getpersonalData } from "../../api/commonApi.js";
export default {
  data() {
    return {
      listData: [],
      list: [],
      loading: false, //是否处于加载状态
      finished: false, //是否已加载完所有数据
      count: 0,
      isLoading: false
    };
  },
  mounted() {
    this.initMethods();
  },

  methods: {
    initMethods() {
      this.setTitle();
      this.getData();
    },
    setTitle() {
      this.transmit.$emit("setTitle", "我的消息");
    },
    getData() {
      getpersonalData().then(response => {
        console.log(response.data, "res");
        this.listData = response.data;
      });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    onLoad() {
      console.log("发送请求追加数据");
      //上拉加载
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;
        if (this.list.length >= 60) {
          this.finished = true;
        }
      }, 500);
    }
  },

  filters: {},

  computed: {},

  components: {}
};
</script>

<style lang='scss' scoped>
.message-div {
  .message-div::-webkit-scrollbar {
    display: none;
  }
  .message-list {
    overflow: hidden;
  }

  p {
    text-indent: 0.68rem;
    line-height: 0.46rem;
    padding-top: 0.33rem;
    margin-bottom: 0.65rem;
  }
  .title {
    font-weight: bold;
  }
  .list-item {
    padding: 0.17rem 0.28rem 0.28rem 0.38rem;
    .van-cell {
      background: none;
      padding: 0;
    }
    .van-cell__title {
      font-weight: bold;
    }
    margin-bottom: 0.3rem;
  }
  .titleBox {
    height: 0.99rem;
    line-height: 0.99rem;
  }
}
</style>
