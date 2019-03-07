<template>
  <div class="home-div">
    <!-- <header><Head/></header>   -->
    <section>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
    <footer>
      <Foot/>
    </footer>
  </div>
</template>

<script>
import Head from "../common/header.vue";
import Foot from "../common/footer.vue";
import { userInfo } from "../../api/userApi";
export default {
  data() {
    return {};
  },

  mounted() {
    this.getUser();
  },

  methods: {
    getUser() {
      userInfo().then(res => {
        console.log(res);
      });
    }
  },

  filters: {},

  computed: {},

  components: {
    Head,
    Foot
  }
};
</script>

<style lang='scss'>
html,
body {
  height: 100%;
}
.home-div {
  display: flex;
  flex-direction: column;
  padding: 0 0 50px;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    line-height: 49px;
  }
  section {
    flex: 1;
    width: 100%;
    overflow: auto;
  }
}
</style>
