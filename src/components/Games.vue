<template>
  <div :class="{ comp: type=='comp' }">
    <h2 v-if="type == 'comp'">Main Games</h2>

    <div class="games">
      <Game v-for="game in games" :key="game.id" :game="game"></Game>
    </div>
  </div>
</template>

<script>
import Game from '@/components/Game';

export default {
  name: 'Games',

  props: [
    'games',
    'type'
  ],

  data () {
    return {
    };
  },

  components: {
    Game
  }

};
</script>

<style lang="scss" scoped>
.games {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
}

.comp {
  border-width: 5px;
  border-color: $secondary;
  border-style: solid;
  border-radius: 20px;

  h2 {
    margin-bottom: -0.1em;
  }
}
</style>
