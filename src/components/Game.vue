<template>
  <div class="game">
    <img class="logo" :src="require('@/assets/img/' + game.id + '_logo.png')">
    <img class="img" :src="require('@/assets/img/' + game.id + '.jpg')">
  </div>
</template>

<script>
export default {
  name: 'Game',

  props: [
    'game'
  ]
};
</script>

<style lang="scss" scoped>
$height: 200px;
$width: 250px;

.game {
  position: relative;
  height: $height;
  width: $width;
  padding: 15px 10px;

  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    clip-path: inset(0 50% 0 50%);
    width: 250px;
    height: $height;
    filter: grayscale(100%);
    filter: brightness(50%);
    transition: filter .5s, clip-path .5s;
    border-radius: 10px;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    transform: translate(-50%, -50%);
    z-index: 50;
    transition: transform .8s;

    &:hover {
      transform: translate(-50%,-50%) scale(1.3);

      &~.img {
        filter: grayscale(0%);
        filter: brightness(100%);
        clip-path: inset(0);
      }
    }
  }
}

// Force background image to always be visible on mobile
@media only screen and (max-width: 600px) {
  .logo {
    transform: translate(-50%,-50%) scale(1.3);

      &~.img {
        filter: grayscale(0%);
        filter: brightness(100%);
        clip-path: inset(0);
      }
  }
}

</style>
