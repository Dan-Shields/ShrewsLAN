<template>
  <div class="home">
    <Header :date="startDate"></Header>

    <Games :type="'comp'" :games="comp_games"></Games>
    <Games :type="'casual'" :games="casual_games"></Games>

    <Info></Info>

    <h1 class="cta">Reserve your spot now!</h1>
    <Signup></Signup>

    <div class="footer">
      <div class="text left">
        <p>Website by <a href="https://twitter.com/DanShieldsUK">Daniel Shields</a></p>
      </div>
      <div class="divider-container">
        <div class="divider"></div>
      </div>
      <div class="text">
        <p>&copy; ShrewsLAN 2019</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import Header from '@/components/Header';
// @ts-ignore
import Games from '@/components/Games';
// @ts-ignore
import Info from '@/components/Info';
// @ts-ignore
import Signup from '@/components/Signup';

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
        { id: 'mc', name: 'Minecraft' }
      ]
    };
  },

  components: {
    Header,
    Games,
    Info,
    Signup
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

.footer {
  margin-top: 50px;

  display: flex;
  justify-content: center;

  .text {
    flex-basis: 49%;
    text-align: left;

    &.left p {
      text-align: right;
    }
  }

  .divider-container {
    height: 40px;
    margin: 0 auto; 

    .divider {
      margin-top: 13px;
      height: 30px;
      border-left: 1px solid white;
    }
  }
}

@media only screen and (max-width: 691px) {
  .footer .text p {
    text-align: center !important;
  }
}
</style>
