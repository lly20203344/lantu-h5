<template>
  <div class="setup-div rel w-100 h-100">
    <ul class="bg-fff fs-26 info-list">
      <li class="bg-f6 preal-info"></li>
      <li>
        <div class="bd bd-bottom">
          <router-link to="/account">
            <van-cell title="账号管理" is-link>
              <van-icon
                slot="icon"
                name="manager-o"
                color="#2878ff"
                size="0.4rem"
                class="custom-icon"
              />
            </van-cell>
          </router-link>
        </div>
      </li>
      <li>
        <div class="bd bd-bottom">
          <div class="bd bd-bottom">
            <router-link to="/message">
              <van-cell title="消息管理" is-link>
                <van-icon
                  slot="icon"
                  name="comment-o"
                  color="#efbc21"
                  size="0.4rem"
                  class="custom-icon"
                />
              </van-cell>
            </router-link>
          </div>
        </div>
      </li>
      <li>
        <div class="bd bd-bottom" @click="showBankList = true">
          <div class="bd bd-bottom">
            <van-cell title="通用设置" is-link>
              <van-icon
                slot="icon"
                name="setting-o"
                color="#fa490f"
                size="0.4rem"
                class="custom-icon"
              />
            </van-cell>
          </div>
        </div>
      </li>
      <li>
        <div class="bd bd-bottom">
          <div class="bd bd-bottom">
            <van-cell title="关于我们" is-link>
              <van-icon
                slot="icon"
                name="diamond-o"
                color="#160ffa"
                size="0.4rem"
                class="custom-icon"
              />
            </van-cell>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.initMethods();
  },

  methods: {
    initMethods() {
      this.setTitle();
    },
    setTitle() {
      this.transmit.$emit("setTitle", "设置");
    }
  },

  filters: {},

  computed: {},

  components: {}
};
</script>

<style lang='scss'>
.setup-div {
  .preal-info {
    height: 0.22rem;
  }
  .info-list {
    li {
      padding: 0 0.29rem 0 0.31rem;
    }
  }
  .van-cell {
    background: none;
    padding: 0;
    height: 1.13rem;
    line-height: 1.13rem;
    .custom-icon,
    .van-cell__right-icon {
      line-height: 1.13rem;
    }
    span {
      padding-left: 0.33rem;
    }
  }
}
</style>
