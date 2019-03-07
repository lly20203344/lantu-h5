<template>
  <div class="nav-title-bar w-100 fixed">
    <!-- <van-icon name="close" /> -->
    <van-nav-bar
      :border="showBorder"
      class="nav c-333"
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
     <van-icon name="arrow-left" color ="#666" slot="left" class="fs-50" />
     </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBorder:false,
      title:''
    };
  },
  mounted(){
    this.getTitle();
  },
  methods: {
    onClickLeft() {
       window.history.go(-1)
    },
    getTitle(){
      this.transmit.$on('setTitle',titleName=>{
        this.title = titleName;
      })
    }
  }
};
</script>

<style lang='scss'>
.nav-title-bar{
  height: .88rem;
  top: 0;
  left: 0;
  z-index: 9;
  .van-nav-bar{
    height: 100%;
  }
  .nav {
    font-size: .34rem;
  }
}
</style>
