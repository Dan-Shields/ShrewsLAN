<template>
  <div class="home">
    <Header :date="startDate"></Header>

    <SeatsLeft></SeatsLeft>
    <Signup :games="comp_games.concat(casual_games)"></Signup>

    <div class="content">
      <Games :type="'comp'" :games="comp_games"></Games>
      <Games :type="'casual'" :games="casual_games"></Games>

      <Info></Info>

      <h1 class="cta">Reserve your spot now!</h1>
      <Signup :games="comp_games.concat(casual_games)"></Signup>
    </div>

    <Contact></Contact>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import SeatsLeft from '@/components/SeatsLeft';
import Games from '@/components/Games';
import Info from '@/components/Info';
import Signup from '@/components/Signup';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer';

export default {
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
        { id: 'wa', name: 'Worms: Armageddon' },
        { id: 'mc', name: 'Minecraft' }
      ]
    };
  },

  components: {
    Header,
    SeatsLeft,
    Signup,
    Games,
    Info,
    Contact,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: auto;
}

.content {
  max-width: 850px;
  margin: auto;
}

.seats-left {
  margin-top: -25px;
}

.cta {
  text-align: center;
  font-size: 42px;
}

</style>
