<template>
  <div class="home">
    <Header :date="startDate"></Header>
    <div class="content">
      <Games :games="games"></Games>
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
      games: [
        {id: 'csgo', name: 'CS:GO'},
        {id: 'tf2', name: 'TF2'},
        {id: 'gmod', name: 'Garry\'s Mod'},
        {id: 'mc', name: 'Minecraft'},
        {id: 'aos', name: 'Ace of Spades'}
      ]
    }
  },

  components: {
    Header,
    Games
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 1200px;
  margin: 0px auto;
}

.content {
  width: 1000px;
  margin: auto;
}

@media (max-width: 1377px) {
  .home {
    width: 1100px;
  }
  .content {
    width: 800px;
  }
}

@media (max-width: 1100px) {
  .home {
    width: 1000px;
    width: 800px;
  }
}

@media (max-width: 768px) {
  .home, .content {
    width: 100%;
  }
}
</style>
