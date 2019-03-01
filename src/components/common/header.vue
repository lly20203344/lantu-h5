<template>
  <div class="nav-title-bar">
    <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    border
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  mounted(){},

  methods: {
    onClickLeft() {
        // this.Toast('返回');
    },
    onClickRight() {
        console.log(this);
        
        this.$toast('按钮');
    }
    
  },

  filters: {},

  computed: {},

  components: {}
}
</script>

<style lang='scss'>
.nav-title-bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

</style>
