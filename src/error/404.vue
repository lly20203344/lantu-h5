<template>
  <div class="w-100 center no-found abs">
    <img class="no-page-img" src="../assets/images/error/404.png" alt="">

    <div class="go-history c-fff fs-30" @click="goBack">返回上一级</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
      goBack(){
          window.history.go(-1)
      }
  }
}
</script>

<style lang='scss' scoped>
.no-found{
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    .no-page-img{
        width: 5.85rem;
    }
    .go-history{
        width: 30%;
        margin: .46rem auto 0;
        border-radius: 6px;
        background: #279CF9;
        text-align: center;
        width: 2.8rem;
        height: .84rem;
        line-height: .84rem;
    }
}
</style>
