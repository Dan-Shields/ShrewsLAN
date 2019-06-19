<template>
  <div class="header">
    <div class="banner">
      <div class="logo">
        <img src="@/assets/logo.png"/>
      </div>

      <h1 class="title"><span style="font-weight: 200">S<span style="font-size: 80px" >HREWS</span></span>LAN <span style="font-weight: 500;">12</span></h1>
    </div>

    <p class="subtitle">July 20<sup>th</sup> - 21<sup>st</sup> 2019 <span style="font-weight: 800; margin: auto 10px;">&#8226; </span>Mount Pleasant Primary School, Shrewsbury</p>

    <hr class="hr"/>

    <Countdown :date="date"></Countdown>

    <Signup/>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown'
import Signup from '@/components/Signup'

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
    Countdown,
    Signup
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

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
}
.title {
  font-size: 100px;
  margin: 0;
  padding-top: 50px;
  width: auto;
}

.subtitle {
  font-weight: 200;
  font-size: 20px;
  margin-top: 0;
}

.hr {
  border-color: $secondary;
  border-width: 1px;
  margin-top: -15px;
  width: 660px;
}

.countdown {
  clear: both;
  margin-bottom: 25px !important;
}

.signup {
  margin: auto;
}
</style>
