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

    <p class="question">What games are you interested in playing?</p>
    <label class="checkbox-text"><input
      type="checkbox"
      name="games"
      style="width: 18px; margin: 0 0"
      value="csgo">CS:GO</label>
    <label class="checkbox-text"><input
      type="checkbox"
      name="games"
      style="width: 18px; margin: 0 0"
      value="tf2">Team Fortress 2</label>
    <label class="checkbox-text"><input
      type="checkbox"
      name="games"
      style="width: 18px; margin: 0 0"
      value="aos">Ace of Spades</label>
    <label class="checkbox-text"><input
      type="checkbox"
      name="games"
      style="width: 18px; margin: 0 0"
      value="gmod">Garry's Mod</label>
    <label class="checkbox-text"><input
      type="checkbox"
      name="games"
      style="width: 18px; margin: 0 0"
      value="worms">Worms: Armageddon</label>

    <p class="question">By checking the box below I confirm that I will pay the £5 entry fee in cash/via PayPal on the door <input type="checkbox" style="width: 18px; margin: 0 0"></p>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',

  data () {
    return {
      formData: {
        name: '',
        email: '',
        days: '',
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
}

.required {
  color: red;
  font-style: normal;
  margin-left: 5px;
  font-size: 20px;
}
</style>
