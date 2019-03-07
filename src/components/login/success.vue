<template>
  <div>
    <Head/>
    <div class="w-100 center no-found abs">
      <img class="no-page-img" src="../../assets/images/success/success.png" alt>
      <p class="c-333 fs-34 center text w-100 abs">恭喜你，注册成功</p>
      <div class="go-history c-fff">
          <span class="line-block fs-30 c-aff loginBtn" @click="getLogine('Sign')">点击登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../../components/common/header";
export default {
  data() {
    return {};
  },
  methods: {
    getLogine(id) {
        this.$router.push({
          name: 'Login',
          params: {
            id: id
          }
        })
    }
  },
  components: {
    Head
  }
};
</script>

<style lang='scss' scoped>
.no-found {
  top: 40%;
  left: 0;
  transform: translateY(-50%);
  .no-page-img {
    width: 5.28rem;
  }
  .text {
    top: 72%;
    font-weight: 400;
    height: 0.34rem;
  }
  .loginBtn {
    width: 3rem;
    height: 0.7rem;
    line-height: 0.7rem;
    border: 0.02rem solid rgba(0, 138, 255, 1);
    border-radius: 0.35rem;
  }
  .go-history {
    width: 30%;
    margin: 0.46rem auto 0;
    border-radius: 0.6rem;
    text-align: center;
    width: 2.8rem;
    height: 0.84rem;
    line-height: 0.84rem;
  }
}
</style>
