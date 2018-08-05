<template>
  <div class="header">
    <div class="banner">
      <div class="logo">
        <img src="@/assets/logo.png"/>
      </div>

      <h1 class="title"><span style="font-weight: 200">S<span style="font-size: 80px">HREWS</span></span>LAN</h1>
    </div>

    <p class="subtitle">September 1<sup>st</sup>-2<sup>nd</sup> 2018 <span style="font-weight: 800; margin: auto 10px;">&#8226; </span>Mount Pleasant Primary School, Shrewsbury</p>
    <Countdown :date="date"></Countdown>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown'

export default {
  name: 'Header',

  props: [
    'date'
  ],

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
.header {
  margin-bottom: 50px;
}

.banner {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: baseline;
  user-select: none;

  .logo {
    flex-basis: 120px;

    img {
      height: 100px;
      transform: translateY(10%);
    }
  }

  .title {
    font-size: 100px;
    margin: 0;
    padding-top: 50px;
    width: auto;
  }
}

.subtitle {
  font-weight: 200;
  font-size: 20px;
  clear: both;
}

.countdown {
  clear: both;
  margin-bottom: 25px !important;
}

.signup {
  margin: auto;
}
</style>
