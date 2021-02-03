<template>
  <div class="home">
    <div class="title">首页</div>
    <nav-bar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { get, post, posts } from '@/api/common'
import navBar from '@/components/navBar'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    navBar
  },
  computed: {
    ...mapState({
      num: (state) => state.common.num
    })
  },
  created() {
    this.getFn()
  },
  methods: {
    getFn() {
      posts().then().catch(err => {
        console.log(err.message)
      })
    } 
  }
}
</script>

<style lang="scss">
  .home {
    font-size: 12px;
  }
</style>