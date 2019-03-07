<template>
  <div class="messageInfo-div w-100 bg-f6 pt-20 over-hide">
    <div class="w-100 h-100 bg-fff">
      <h2 class="fs-32 center pt-40">工商银行系统维护通知</h2>
      <span class="block fs-24 center mt-18 c-999 w-100">05/25 13:25</span>
      <p
        class="fs-28 c-333 pt-34 pr-42 pl-44 textIndent"
      >尊敬的用户您好: 工商银行将于2019年4月22日 22:00-3:00系统维护用户,可能会对提现业务产生影响.对此带来不便敬请原谅。</p>
    </div>
  </div>
</template>

<script>
import { getpersonalData } from "../../api/commonApi.js";
export default {
  data() {
    return {
      listData: []
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
      this.transmit.$emit("setTitle", "消息详情");
    },
    getData() {
      let data = {
        id: this.$route.query.id //携带的id用作请求参数
      };
      getpersonalData().then(response => {
        this.listData = response.data;
      });
    }
  },

  filters: {},

  computed: {},

  components: {}
};
</script>

<style lang='scss' scoped>
.messageInfo-div {
  span {
    letter-spacing: 0.02rem;
  }
  p {
    letter-spacing: 0.02rem;
    line-height: 0.4rem;
  }
}
</style>
