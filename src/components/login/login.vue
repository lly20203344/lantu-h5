<template>
  <div class="login-div w-100 h-100 rel over-hide">
    <van-nav-bar
      class="nav c-333"
      left-text="返回"
      :border="false"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="arrow-left" color="#666" slot="left" class="fs-50"/>
      <span color="#333" slot="right" class="fs-34">{{typeShow===true||typeShow==='' ? '登录':'注册'}}</span>
    </van-nav-bar>
    <div v-if="typeShow===true" class="welcome w-100 fs-50 pt-16 c-333">注册账号</div>
    <div v-else-if="typeShow===false" class="welcome w-100 fs-50 pt-16 c-333">登录账号</div>
    <div v-else-if="typeShow===''" class="welcome w-100 fs-50 pt-16 c-333">忘记密码</div>
    <div class="login-from">
      <div class="login-inp pl-30 mr-38 ml-38 mb-38">
        <van-cell-group class="w-100" :border="false">
          <div class="input-box bd bd-bottom">
            <span class="line-block c-999">+86
              <van-icon name="arrow-down" size=".22rem"/>
            </span>
            <van-field
              class="c-333"
              v-model="username"
              clearable
              placeholder="请输入手机号码"
              @click-right-icon="$toast('question')"
            />
          </div>
          <div class="input-box bd bd-bottom">
            <van-field
              class="c-333"
              v-model="password"
              clearable
              type="password"
              placeholder="请输入密码"
              @click-right-icon="$toast('question')"
            />
          </div>
          <div class="input-box bd bd-bottom" v-if="typeShow===true||typeShow===''">
            <van-field
              class="c-333"
              v-model="twoPassword"
              clearable
              type="password"
              placeholder="请再次输入密码"
              @click-right-icon="$toast('question')"
            />
          </div>
          <div class="input-box bd bd-bottom">
            <van-field
              class="c-333"
              v-model="code"
              clearable
              type="text"
              placeholder="请输入短信验证码"
              @click-right-icon="$toast('question')"
            >
              <van-button
                slot="button"
                size="small"
                @click="getCode()"
                class="code-btn"
                :disabled="!show"
              >
                <span v-show="show" class="fs-26">获取验证码</span>
                <span v-show="!show" class="fs-26">{{codeName}}S重新获取</span>
              </van-button>
            </van-field>
          </div>
          <div
            class="loginBtn w-100 fs-30 c-fff center"
            @click="submitLogin(username,password,twoPassword)"
            v-if="typeShow===true"
          >立即注册</div>
          <div
            class="loginBtn w-100 fs-30 c-fff center"
            @click="submitLogin(username,password,twoPassword)"
            v-else-if="typeShow===false"
          >立即登录</div>
          <div
            class="loginBtn w-100 fs-30 c-fff center"
            @click="submitLogin(username,password,twoPassword)"
            v-else-if="typeShow===''"
          >确定</div>
          <p class="c-999 w-100 mt-40 fs-24">登录注册代表同意
            <router-link to="/userPrivacy/user" class="line-block pl-04 pr-04 c-aff">《用户协议》</router-link>和
            <router-link
              :to="{ path: '/userPrivacy/privacy' }"
              class="line-block pl-04 pr-04 c-aff"
            >《隐私政策》</router-link>
          </p>
        </van-cell-group>
      </div>
      <div
        class="login-bottom c-999 fs-24 pl-30 pr-30 center abs w-100"
        v-if="typeShow!==''&&typeShow!==true"
      >
        <span class="pb-10" @click="editBtn()">忘记密码?</span>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../common/header";
import { userInfo } from "../../api/userApi";
import { Toast } from "vant";
const TIME_COUNT = 60;
export default {
  data() {
    return {
      username: "",
      password: "",
      twoPassword: "",
      BtnPassWrod: false,
      code: "",
      show: true,
      num: "86",
      typeShow: false,
      type: 0, //0是已经存在的账号  1是需要注册的
      loginType: "注册账号",
      btnName: "立即注册",
      codeName: "获取验证码"
    };
  },

  mounted() {
    if (this.$route.params) {
      if (this.$route.params.id === "Sign") {
        this.typeShow = false;
      }
    }
  },

  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    onClickRight() {
      if (this.typeShow === "") {
        this.typeShow = true;
      }
      this.typeShow = !this.typeShow;
    },
    editBtn() {
      this.typeShow = "";
    },
    //倒计时
    countTime() {
      if (!this.timer) {
        this.codeName = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.codeName > 0 && this.codeName <= TIME_COUNT) {
            this.codeName--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    //获取验证码
    getCode() {
      let data = {
        mobile: this.username,
        type: 2
      };
      let regPhone = /^1[0-9]{10}$/;
      if (!regPhone.test(this.username)) {
        Toast("请正确输入手机号码");
        return false;
      }
      userInfo(data).then(response => {
        console.log(response.token);
        this.countTime();
      });
    },
    //提交
    submitLogin(username, password, twoPassword, code) {
      let regPhone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (!regPhone.test(this.username)) {
        Toast("请输入正确的手机号码");
        return false;
      }
      let regPassword = /^(\w){6,20}$/;
      if (!regPassword.test(this.password)) {
        Toast("请输入6-20个字母、数字、下划线的密码");
        return false;
      }
      if (this.typeShow === true) {
        if (password !== twoPassword) {
          Toast("两次密码输入不一致,请重新输入");
          return false;
        }
      }
      let regCode = /^\d{4}$/;
      if (!regCode.test(this.code)) {
        Toast("请输入正确的验证码");
        return false;
      }

      let data = {
        type: this.type,
        username,
        password
      };
      userInfo(data).then(response => {
        localStorage.setItem("token", response.token);
        if (this.typeShow === true) {
          Toast.success("注册成功");
          this.$router.push("/success"); // 注册成功，跳转到成功页面
        } else if (this.typeShow === false) {
          Toast.success("登录成功");
          this.$router.push("/home"); // 登录成功，跳转到主页
        } else {
          Toast.success("修改密码成功");
          this.typeShow = false; // 修改密码成功，跳转到登录页面
        }
      });
    }
  },
  filters: {},

  computed: {},

  components: {
    Head
  }
};
</script>

<style lang='scss'>
$color: #008aff;
$line-height: 1.04rem;
.login-div {
  background-size: cover;
  .welcome {
    margin-top: 0.88rem;
    padding: 0.88rem 0.51rem 0.84rem;
  }
  .input-box {
    display: flex;
    font-size: 0.3rem;
    height: 1.07rem;
    line-height: 1.07rem;
    .van-cell {
      padding: 0;
      background: none;
    }
    .van-field__clear {
      font-size: 0.26rem;
      color: #ccc;
    }
    span {
      width: 1.4rem;
      letter-spacing: 0.02rem;
    }
    input {
      font-size: 0.26rem;
      color: #333;
      letter-spacing: 0.02rem;
    }
    button {
      color: $color;
      font-size: 0.26rem;
      border: none;
      height: 0.49rem;
      border-left: 0.01rem solid #e5e5e5;
      padding-left: 0.5rem;
      background: none;
    }
  }
  .loginBtn {
    background: $color;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    margin-top: 0.8rem;
    letter-spacing: 0.04rem;
  }
  .login-inp {
    border-radius: rem(60px);
    display: flex;
    input {
      line-height: $line-height;
      flex: 1;
    }
    input::-webkit-input-placeholder {
      color: #999;
      font-size: 0.28rem;
    }
  }
  .login-bottom {
    width: 100%;
    margin: 0 auto;
    bottom: 1.3rem;
    span {
      width: 1.05rem;
      border-bottom: 1px solid #ddd;
    }
  }
  .modeBox {
    background: #000;
    width: 2.76rem;
    height: 1.74rem;
    background: rgba(0, 0, 0, 1);
    opacity: 0.8;
    border-radius: 0.1rem;
    color: #fff;
  }
}
</style>
