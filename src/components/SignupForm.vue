<template>
  <div>
    <p class="question">Name <span class="required"> *</span></p>
    <input v-model="formData.name" placeholder="Barry Chuckle" >

    <p class="question">Email <span class="required"> *</span></p>
    <input v-model="formData.email" type="email" placeholder="barry@chuckle.co.uk" >

    <!--DAYS-->
    <p class="question">Which day(s) will you be attending? <span class="required"> *</span></p>
    <select v-model="formData.days" style="margin-bottom: 2px" >
      <option value="">Select an option...</option>
      <option value="20">Saturday 20th July</option>
      <option value="21">Sunday 21st July</option>
      <option value="both">Both Days</option>
    </select>

    <!--GAMES-->
    <p class="question">What games are you interested in playing?</p>
    <div v-for="game in games" :key="game.id">
      <label class="checkbox-text"><input
        type="checkbox"
        v-model="formData.games[game.id]"
        style="width: 18px; margin: 0 0"
        :value="game.id">{{game.name}}</label>
    </div>

    <!--OTHER GAMES-->
    <input v-model="formData.games.other" placeholder="Other...">

    <!--CONFIRMATION BOX-->
    <p class="question">
      By checking the box below I confirm that I will pay the £5 entry fee in cash/via PayPal on the door.
      <input v-model="formData.confirm" type="checkbox"  style="width: 18px; margin: 0 0">
    </p>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',

  props: [
    'games'
  ],

  data () {
    return {
      formData: {
        name: '',
        email: '',
        days: '',
        games: {
          csgo: false,
          tf2: false,
          aos: false,
          gmod: false,
          worms: false,
          other: ''
        },
        confirm: false
      }
    };
  },
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

input,select{
  width: 100%;
  font-family: sans-serif;
}

.question {
  font-weight: 200;
  margin: 10px 0;
}

.checkbox-text{
  font-size: 14px;
  font-weight: 200;
  display: block;
  user-select: none;
  margin-bottom: 5px;
}

.required {
  color: red;
  font-style: normal;
  margin-left: 5px;
  font-size: 20px;
}
</style>
