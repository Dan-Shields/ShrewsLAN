<!--
<template>
  <div class="home">
    <Header :date="startDate"></Header>
    <div class="content">
      <Games :type="'comp'" :games="comp_games"></Games>
      <Games :type="'casual'" :games="casual_games"></Games>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Games from '@/components/Games'

export default {
  name: 'Home',

  data () {
    return {
      startDate: 'September 1, 2018 10:00',
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
    }
  },

  components: {
    Header,
    Games
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

.home {
  width: 1200px;
  max-width: 100%;
  margin: 0px auto;
}

.content {
  width: 1000px;
  max-width: 100%;
  margin: auto;
}

</style>
