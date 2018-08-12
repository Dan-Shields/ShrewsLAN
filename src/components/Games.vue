<template>
  <div class="games" :class="{ comp: type=='comp' }">
    <Game v-for="game in games" :key="game.id" :game="game"></Game>
  </div>
</template>

<script>
import Game from '@/components/Game'

export default {
  name: 'Games',

  props: [
    'games',
    'type'
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
@import '../assets/scss/global.scss';

.games {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 15px 0;
}

.comp {
  border-width: 5px;
  border-color: $primary;
  border-style: solid;
  border-radius: 5px;
}
</style>
