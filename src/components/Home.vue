<template>
  <div class="home">
    <Header></Header>
    <Games></Games>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Games from '@/components/Games'

export default {
  name: 'Home',

  data () {
    return {
    }
  },

  components: {
    Header,
    Games
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 1200px;
  margin: 0px auto;
}
</style>
