<template>
  <div class="nav-tab">
    <ul>
        <li>
            <router-link to="">首页</router-link>
        </li>
        <li>
            <router-link to="product">项目</router-link>
        </li>
        <li>
            <router-link to="">我的</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  mounted(){},

  methods: {},

  filters: {},

  computed: {},

  components: {}
}
</script>

<style lang='scss' scoped>
.nav-tab{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    ul{
        display: flex;
        width: 100%;
        height: 100%;
    }
    li{
        flex: 1;
        line-height: 45px;
        text-align: center;
    }
}
</style>
