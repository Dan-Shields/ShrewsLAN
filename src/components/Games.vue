<template>
  <div class="games">
    <div class="game-list">
      <Game v-for="game in games" :key="game.id" :game="game"></Game>
    </div>
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
.game-list {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin: auto;
}

.game {
    height: 250px;
    width: 250px;
}
</style>
