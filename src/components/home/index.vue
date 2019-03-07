<template>
  <div class="index-div">
     首页
      
  </div>
</template>

<script>
import { getpersonalData } from "../../api/commonApi.js";

export default {
  data() {
    return {
      active: 0,
      IndexData:[]
    };
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData(){
      getpersonalData().then(response => {
          this.IndexData=response.data
        });
    }
  },

  filters: {},

  computed: {},

  components: {}
};
</script>
<style lang='scss'>
.index-div {
  h1 {
    font-size: rem(500px);
  }
}
</style
