<template>
  <div class="account-div rel w-100 h-100">
    <ul class="bg-fff fs-26 info-list">
      <li class="bg-f6 preal-info"></li>
      <li>
        <div class="bd bd-bottom first">
          <van-cell title="昵称" :value="name" size="large"/>
        </div>
      </li>
      <li>
        <div class="bd bd-bottom">
          <div class="bd bd-bottom">
            <van-cell title="手机号码" value="修改手机号码" is-link size="large"/>
          </div>
        </div>
      </li>
      <li>
        <div class="bd bd-bottom" @click="showBankList = true">
          <div class="bd bd-bottom">
            <van-cell title="账户密码" value="修改密码" is-link size="large"/>
          </div>
        </div>
      </li>
      <li>
        <div class="bd bd-bottom">
          <div class="bd bd-bottom">
            <van-cell title="实名认证" value="未实名" is-link size="large"/>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "蓝图科技"
    };
  },
  mounted() {
    this.initMethods();
  },

  methods: {
    initMethods() {
      this.setTitle();
    },
    setTitle() {
      this.transmit.$emit("setTitle", "账号管理");
    }
  },

  filters: {},

  computed: {},

  components: {}
};
</script>

<style lang='scss' scoped>
.account-div {
  .preal-info {
    height: 0.22rem;
  }
  .info-list {
    li {
      padding: 0 0.29rem 0 0.31rem;
    }
  }
  .van-cell__title {
    span {
      font-size: 0.28rem;
      color: #333;
      padding-left: 0;
    }
  }
  .van-cell__value {
    span {
      font-size: 0.26rem;
      color: #999;
    }
  }
  .first {
    .van-cell__value {
      span {
        font-size: 0.32rem;
        color: #999;
        padding-right: 0.4rem;
        color: #333;
      }
    }
  }
  .van-cell {
    background: none;
    padding: 0;
    height: 1.13rem;
    line-height: 1.13rem;
    .custom-icon,
    .van-cell__right-icon {
      line-height: 1.13rem;
    }
  }
}
</style>
