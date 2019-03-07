<template>
<!-- 实名绑卡操作 -->
  <div class="bind-bank rel w-100 h-100">
    <ul class="bg-fff fs-26 info-list">
        <li class="bg-f6">
            <div class="c-666 real-info">实名信息</div>
        </li>
        <li>
            <div class="bd bd-bottom">
                <span class="fs-28 c-333">姓名</span>
                <div class="c-666 fr">
                    <van-cell-group  class="right" :border="false">
                        <van-field v-model="userInfo.name" type="text" input-align="right"  placeholder="请输入姓名" />
                    </van-cell-group>
                </div>
            </div>
        </li>
        <li>
            <div class="bd bd-bottom">
                <span class="fs-28 c-333">银行卡号</span>
                <div class="c-999 fr">
                    <van-cell-group  class="right" :border="false">
                        <van-field v-model="userInfo.bankNumber" type="number" input-align="right" maxlength="19" placeholder="请输入银行卡号" />
                    </van-cell-group>
                </div>
            </div>
        </li>
        <li>
            <div class="bd bd-bottom" @click="showBankList = true">
                <span class="fs-28 c-333">请选择银行</span>
                <div class="c-999 fr pl-50">
                    <span>{{userInfo.bankName}}</span>
                    <span class="arrow">&#xe6ab;</span>
                </div>
            </div>
        </li>
        <li>
            <div class="bd bd-bottom">
                <span class="fs-28">预留手机号</span>
                <div class="c-999 fr h-100">
                    <van-cell-group  class="right" :border="false">
                        <van-field v-model="userInfo.phoneNumber" type="number" input-align="right" maxlength="11" placeholder="请输入银行预留号码" />
                    </van-cell-group>
                </div>
            </div>
        </li>
        <li>
            <div>
                <div class="c-999 fl msg-code">
                    <van-cell-group :border="false">
                        <van-field v-model="userInfo.msgCode" type="number" input-align="right" maxlength="6" placeholder="请输入短信验证码" />
                    </van-cell-group>
                </div>
                <div class="code-btn c-aff fr pt-22 pb-22">
                    <div class="bd bd-left pl-50 h-100" @click="getMsgCode">
                        <input type="button" :class="disabled?'c-333':''" :disabled="disabled" :value="getMsgCodeValue">
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div class="confrim abs w-100">
        <div class="center" @click="confrim">
            <van-button class="bg-aff c-fff fs-30" round size="large" :loading='confrimBtn' :disabled="confrimBtn" block :border='false'>确认</van-button>
        </div>
    </div>
    <div class="picker">
        <van-actionsheet v-model="showBankList">
            <van-picker
                show-toolbar
                title=""
                :columns="bankList"
                @cancel="onCancel"
                @confirm="onConfirm"
                />
        </van-actionsheet>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        userInfo:{
            name:'',
            bankNumber:'',
            bankName:'请选择银行',
            phoneNumber:'',
            msgCode:''
        },
        showBankList:false,
        bankList: ['招商', '民生', '交通', '华夏', '中信'],
        getMsgCodeValue:'获取验证码',
        disabled:false,
        timer:null,
        confrimBtn:false
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
      },
    //   确定选择
      onConfirm(item){
          this.userInfo.bankName = item;
          this.showBankList=false;
      },
    //   取消选择
      onCancel(){

      },
    //   获取验证码
      getMsgCode(){
          const  _this = this;
          this.disabled=true;
          let count = 60;
          this.getMsgCodeValue = count + 's';
          this.timer = setInterval(() => {
              if(count>=0){
                  _this.getMsgCodeValue = count + 's';
                  count--;
              }else{
                  clearInterval(_this.timer);
                  _this.timer = null;
                  _this.disabled = false;
                  _this.getMsgCodeValue = '获取验证码';
              }
          }, 1000);
      },
    //   确认绑卡
      confrim(){
            const  _this = this;
            this.confrimBtn = true;

            setTimeout(()=>{
                this.confrimBtn=false;
            },5000)
      }
  },

  filters: {},

  computed: {},

  components: {},
  beforeDestroy(){
       clearInterval(this.timer);
       this.timer = null;
  }
}
</script>

<style lang='scss'>
.bind-bank{
    .real-info{
        font-size: .26rem;
    }
    .info-list{
        li:first-child{
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
        li{
            overflow: hidden;
            padding: 0 .33rem 0 .35rem;
            line-height: .86rem;
            .van-cell{
                padding-right: 0;
                line-height: .52rem;
            }
            .msg-code{
                .van-cell{
                    padding-left: 0;
                    input{
                        text-align: left;
                    }
                }
            }
            >div{
                line-height: .94rem;
                .arrow{
                    width: .14rem;
                    height: 100%;
                    line-height: normal;
                    font-family: 'lantu';
                    font-size: .26rem;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    color: #999;
                }
            }
            .code-btn{
                height: .94rem;
                line-height: .5rem;
                input{
                    width: 1.27rem;
                    text-align: center;
                }
            }
        }
    }
    .confrim{
        left: 0;
        bottom: .62rem;
        .van-button--large{
            width: 6.5rem;
            height: .8rem;
            line-height: .8rem;
            border-radius: .8rem;
            margin: 0 auto;
        }
    }
    .picker{
        .van-overlay{
            background-color: transparent;
        }
        .van-picker__cancel{
            color: #999;
            font-size: .3rem;
        }
        .van-picker__confirm{
            color:#008AFF;
            font-size: .3rem;            
        }
        .van-picker-column{
            background: #F1F1F1;
        }
        .van-picker-column__item{
            color: #999;
        }
        .van-picker-column__item--selected{
            color: #333;
        }
        li{
            line-height: .69rem;
        }
        .van-hairline--top-bottom::after{
            border-color: #ddd;
        }
    }
    
}
</style>
