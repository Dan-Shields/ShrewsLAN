<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Home',

  data () {
    return {
    }
  },

  components: {
    Header,
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 1200px;
  margin: 0px auto;
}
</style>
