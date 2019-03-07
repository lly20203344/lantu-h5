<template>
  <div class="nav-tab">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="contact" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/product">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },

  mounted() {},

  methods: {},

  filters: {},

  computed: {},

  components: {}
};
</script>

<style lang='scss' scoped>
</style>
