<template>
  <div class="home">
    <Header :date="startDate"></Header>

      <Games :type="'comp'" :games="comp_games"></Games>
      <Games :type="'casual'" :games="casual_games"></Games>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import Header from '@/components/Header';
// @ts-ignore
import Games from '@/components/Games';

@Component({
  name: 'Home',

  data () {
    return {
      startDate: 'July 20, 2019 10:00',
      comp_games: [
        { id: 'csgo', name: 'CS:GO' },
        { id: 'tf2', name: 'TF2' },
        { id: 'aos', name: 'Ace of Spades' }
      ],
      casual_games: [
        { id: 'gmod', name: 'Garry\'s Mod' },
        { id: 'r6s', name: 'Rainbow Six: Siege' },
        { id: 'mc', name: 'Minecraft' },
        { id: 'fn', name: 'Fortnite' },
        { id: 'rl', name: 'Rocket League' }
      ],
      showModal: false
    };
  },

  components: {
    Header,
    Games
  }
})

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

.home {
  max-width: 1000px;
  margin: auto;
}

.cta {
  text-align: center;
  font-size: 42px;
}
</style>
