<template>
  <div class="countdown">
    <div class="block">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Hours</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutes</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Seconds</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },

  props: {
    date: String
  },

  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },

  computed: {
    seconds () {
      return (this.timestamp - this.now) % 60
    },

    minutes () {
      return Math.trunc((this.timestamp - this.now) / 60) % 60
    },

    hours () {
      return Math.trunc((this.timestamp - this.now) / 60 / 60) % 24
    },

    days () {
      return Math.trunc((this.timestamp - this.now) / 60 / 60 / 24)
    },

    timestamp () {
      return Math.trunc(Date.parse(this.date) / 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

.countdown {
  display: flex;
  margin: auto;
  justify-content: center;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.text {
  color: $primary;
  font-size: 25px;
  font-weight: 200;
  margin-top:10px;
  margin-bottom: 10px;
  text-align: center;
}

.digit {
  color: white;
  font-size: 75px;
  width: 120px;
  font-weight: 100;
  margin: 10px;
  text-align: center;
}
</style>
