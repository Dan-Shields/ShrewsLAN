<template>
  <div class="game">
    <div class="name">
      {{game.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',

  props: [
    'game'
  ],

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
