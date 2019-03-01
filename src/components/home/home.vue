<template>
  <div class="home-div">
    <Head></Head>
    <h1>首页</h1>

    <Foot></Foot>
  </div>
</template>

<script>
import Head from '../common/header.vue'
import Foot from '../common/footer.vue'
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
      Head,
      Foot
  }
}
</script>

<style lang='scss'>
.home-div{
    width: 100%;
    h1{
        font-size: rem(500px)
    }
}
</style>
