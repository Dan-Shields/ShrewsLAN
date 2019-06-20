<template>
  <div class="header">
    <div class="banner">
      <div class="logo">
        <img src="@/assets/img/logo.png">
      </div>

      <div class="title">
        <img src="@/assets/img/title.png">
      </div>
    </div>

    <div class="subtitle-container">
      <div class="subtitle left">
        <p>July 20<sup>th</sup> - 21<sup>st</sup> 2019</p>
        <hr class="underline">
      </div>
      <div class="divider"> &#8226; </div>
      <div class="subtitle right">
        <p>Mount Pleasant Primary School, Shrewsbury</p>
        <hr class="underline">
      </div>
    </div>

    <hr class="underline">

    <Countdown :date="date"></Countdown>

    <Signup></Signup>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown';
import Signup from '@/components/Signup';

export default {
  name: 'Header',

  props: [
    'date'
  ],

  data () {
    return {
    };
  },

  components: {
    Countdown,
    Signup
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

.header {
  margin-bottom: 50px;
  max-width: 100%;
}

.banner {
  user-select: none;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 800px;
  padding-top: 50px;

  .logo  {
    margin-right: 2%;
    margin-left: 2%;
    flex-basis: 25%;
    max-width: 120px;

    img {
      width: 100%;
      
    }
  }

  .title {
    margin-right: 5%;
    img {
      margin: 0.5em 0;
      width: 100%;
    }
  }
}

.subtitle-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  margin-top: 15px;
  
  .subtitle {
    font-size: 20px;
    font-weight: 200;

    p {
      margin-top: 0;
      margin-bottom: 0;
    }

    sup {
      font-size: 15px;
    }

    margin: 0 15px;

    &.left {
      text-align: right;
    }

    &.right {
      margin-top: 15px;
      text-align: left;
    }
  }

  .divider {
    font-weight: 800;
    line-height: 28px;
    margin: auto 0;
    margin-bottom: 0;
  }
}

.underline {
  border-color: $secondary;
  border-width: 1px;
  margin-top: 5px;
  max-width: 660px;
}

.countdown {
  clear: both;
  margin-bottom: 25px !important;
}

.signup {
  margin: auto;
}

@media only screen and (max-width: 691px) {
  .divider, .underline {
    opacity: 0;
  }
  .left, .right {
    text-align: center !important;
  }
  .subtitle .underline {
    opacity: 1 !important;
  }

  .banner .logo {
    flex-basis: 60%;
  }
}

@media only screen and (min-width: 691px) {
  .subtitle .underline {
    display: none;
  }
}
</style>
