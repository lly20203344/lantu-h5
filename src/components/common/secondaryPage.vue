<template>
<!-- 次级页面 -->
  <div class="secondary-page w-100 h-100 rel">
    <Head></Head>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './header'
export default {
  data () {
    return {
    }
  },

  mounted(){},

  methods: {},

  filters: {},

  computed: {},

  components: {
    Head
  }
}
</script>

<style lang='scss' scoped>
.secondary-page{
  padding-top: .88rem;
  overflow-y:auto;
}
</style>
