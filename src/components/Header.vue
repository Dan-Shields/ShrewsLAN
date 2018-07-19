<template>
  <div class="header">
    <h1 class="title"><span style="font-weight: 200">S<span style="font-size: 80px">HREWS</span></span>LAN</h1>
    <Countdown date="September 1, 2018 10:00"></Countdown>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown'

export default {
  name: 'Header',

  data () {
    return {
    }
  },

  components: {
    Countdown
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 100px;
  position: relative;
  margin-top: 0;
  padding-top: 50px;
  width: auto;
}
</style>
