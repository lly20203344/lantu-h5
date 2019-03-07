<template>
  <div class="userPrivacy-div">
    <Head :title="title" />
    <div class="userPrivacy-box pt-50" v-if="title === '用户协议'">
     
      <p class="first pl-20 pr-20 mt-30">用户对其自行发表、上传或传送的内容负全部责任，所有用户不得在本站任何页面发布、转载、
        传送含有下列内容之一的信息，否则本站有权自行处理并不通知用户：</p>
      <p>(1) 违反宪法确定的基本原则的；</p>
      <p>(2) 危害国家安全，泄漏国家机密，颠覆国家政权，破坏国家统一的；</p>
      <p>(3) 损害国家荣誉和利益的；</p>
      <p>(4) 煽动民族仇恨、民族歧视，破坏民族团结的；</p>
      <p>(5) 破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
      <p>(6) 散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
      <p>(7) 散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；</p>
      <p>(8) 侮辱或者诽谤他人，侵害他人合法权益的；</p>
      <p>(9) 煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的；</p>
      <p>(10) 以非法民间组织名义活动的；</p>
      <p>(11) 含有法律、行政法规禁止的其他内容的。</p>
    </div>
    <div class="userPrivacy-box pt-50" v-else-if="title === '隐私政策'">
      <p class="first pl-20 pr-20 mt-30">用户对其自行发表、上传或传送的内容负全部责任，
        所有用户不得在本站任何页面发布、转载、传送含有下列内容之一的信息，否则本站有权自行处理并不通知用户：</p>
      <p>(1) 违反宪法确定的基本原则的；</p>
      <p>(2) 危害国家安全，泄漏国家机密，颠覆国家政权，破坏国家统一的；</p>
      <p>(3) 损害国家荣誉和利益的；</p>
      <p>(4) 煽动民族仇恨、民族歧视，破坏民族团结的；</p>
      <p>(5) 破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
      <p>(6) 散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
      <p>(7) 散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；</p>
      <p>(8) 侮辱或者诽谤他人，侵害他人合法权益的；</p>
      <p>(9) 煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的；</p>
      <p>(10) 以非法民间组织名义活动的；</p>
      <p>(11) 含有法律、行政法规禁止的其他内容的。</p>
    </div>
  </div>
</template>

<script>
import Head from "../common/header";
export default {
  data() {
    return {
      title: "用户协议"
    };
  },

  mounted() {
    this.$route.params.type === "user"
      ? (this.title = "用户协议")
      : (this.title = "隐私政策");
  },

  methods: {},

  filters: {},

  computed: {},

  components: {
    Head
  }
};
</script>

<style lang='scss' scoped>
.userPrivacy-box {
    .first {
        text-indent: .6rem;
        padding-top: 0.53rem;
    }
    p {
        font-size: 0.28rem;
        line-height: 0.48rem;
        padding: 0.16rem 0.3rem  0.2rem  0.34rem;
    }
}
</style>
