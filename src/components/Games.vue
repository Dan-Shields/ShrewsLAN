<template>
  <div class="games">
    <Game v-for="game in games" :key="game.id" :game="game"></Game>
  </div>
</template>

<script>
import Game from '@/components/Game'

export default {
  name: 'Games',

  props: [
    'games'
  ],

  data () {
    return {
    }
  },

  components: {
    Game
  }

}
</script>

<style lang="scss" scoped>
.games {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: auto;
}
</style>
