<template>
  <div class="game">
    <img class="logo" :src="require('@/assets/img/' + game.id + '_logo.png')"/>
    <img class="img" :src="require('@/assets/img/' + game.id + '.jpg')"/>
  </div>
</template>

<script>
export default {
  name: 'Game',

  props: [
    'game'
  ],

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 200px;
$width: 250px;

.game {
  position: relative;
  height: $height;
  width: $width;
  //flex-basis: 300px;
  padding: 0 10px;
  //margin-bottom: 40px;

  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    width: 0;
    height: $height;
    filter: grayscale(100%);
    filter: brightness(50%);
    transition: .5s;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    transform: translate(-50%, -50%);
    z-index: 50;
    transition: .8s;

    &:hover {
      width: 50%;

      &~.img {
        filter: grayscale(0%);
        filter: brightness(100%);
        width: $width;
      }
    }
  }
}

</style>
