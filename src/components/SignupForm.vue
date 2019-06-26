<template>
  <div>
    <p class="question">Name</p>
    <input name="name" placeholder="Barry Chuckle">

    <p class="question">Email</p>
    <input name="email" type="email" placeholder="barry@chuckle.co.uk">

    <p class="question">Which day(s) will you be attending?</p>
    <select style="margin-bottom: 2px">
      <option value="">Select an option...</option>
      <option value="Sat">Saturday 20th July</option>
      <option value="Sun">Sunday 21st July</option>
      <option value="Both">Both Days</option>
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
  name: 'SignupForm'
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

input,select{
  width: 100%;
}

.question {
  font-weight: 200;
  margin: 10px 0;
  font-style: italic;
}

.checkbox-text{
  font-size: 14px;
  font-weight: 200;
  display: block;
  user-select: none;
}
</style>
