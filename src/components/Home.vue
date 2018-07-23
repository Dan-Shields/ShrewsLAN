<template>
  <div class="home">
    <Header :date="startDate"></Header>
    <Games :games="games"></Games>
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
        {id: 'tf2', name: 'Team Fortress 2'},
        {id: 'csgo', name: 'CS:GO'},
        {id: 'minecraft', name: 'Minecraft'}
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
</style>
