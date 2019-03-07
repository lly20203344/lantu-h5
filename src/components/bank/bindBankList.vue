<template>
  <div class="bind-bank-list pt-32 pl-34 pr-34 pb-34">
    <div>
      <ul class="banks-list">
        <li v-for="(item,index) in 6" :key="index">
          <div :class="index%2==0?'blue-bg':'red-bg'" class="item h-100 w-100 shadow">
            <div>
              <div class="bank-icon fl bg-fff mr-18">
                <div class="jianshe-icon w-100 h-100">&#xe619;</div>
              </div>
              <div class="c-fff fl tags">
                <div class="fs-28 fl">建设银行</div>
                <div class="fs-22 fl ml-14 quick pt-14">
                  <div>快捷支付</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="add-bank shadow center bg-fff">
      <router-link class="c-aff fs-32" to="bindbank">添加银行卡</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted(){
      this.initMethods();
  },

  methods: {
    initMethods(){
        this.setTitle();
    },
    setTitle(){
      this.transmit.$emit('setTitle','银行卡');
    }
  },

  filters: {},

  computed: {},

  components: {}
}
</script>

<style lang='scss' scoped>
.bind-bank-list{
    .banks-list{
      li{
        height: 2.24rem;
        margin-bottom: .31rem;;
      }
      .item{
        border-radius:15px;
        padding: .5rem 0 .5rem .37rem;
      }
      .blue-bg{
        background:linear-gradient(-90deg,rgba(47,113,229,1) 0%,rgba(89,148,255,1) 100%);
      }
      .red-bg{
        background:linear-gradient(-90deg,rgba(236,81,81,1) 0%,rgba(255,98,98,1) 100%)
      }
    }
    .bank-icon{
      width: .64rem;
      height: .64rem;
      border-radius: 50%;
      font-family: 'lantu';
      color: #004f9c;
      line-height: .64rem;
      font-size: .34rem;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .tags{
      line-height: .64rem;
    }
    .quick{
      line-height: normal;
      div{
        padding: .06rem 4px;
        line-height: .2rem;
        border-radius: 5px;
        border: 1px solid #F5F5F5;
      }
    }
    .shadow{
      box-shadow: 0 0 .3rem rgba(0, 0, 0, .2)
    }
    .add-bank{
      height: .98rem;
      border-radius: .15rem;
      overflow: hidden;
      a{
        display: block;
        line-height: .98rem;
      }
    }
}
</style>
