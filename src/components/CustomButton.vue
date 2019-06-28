<template>
  <div class="button" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.button {
  $width: 150px;
  $height: 70px;

  width: $width;
  height: $height;

  &:hover {
    color: black;
    width: $width + 15px;
    background-color: $primary;
  }

  &.submit {
    $width: 120px;
    $height: 50px;

    font-size: 20px;
    line-height: $height;

    width: $width;
    height: $height;

    &:hover {
      width: $width + 15px;
    }
  }

  border-color: $primary;
  border-radius: 5px;
  border-width: 5px;
  border-style: solid;

  background-color: rgba(0,0,0,0);

  margin: auto;

  color: white;
  font-size: 30px;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
  text-align: center;

  line-height: 70px;
  vertical-align: middle;

  transition: 0.2s;

  &.success {
    border-color: $success;

    &:hover {
      background-color: $success;
    }
  }

  &.notvalid {
    border-color: grey;
    background-color: darken(grey, 15%);
    color:  darken(grey, 30%);
    cursor: default;

    &:hover {
      width: $width !important;
    }
  }

  &.shake {
    animation: shake 0.6s 1 linear;
  }
}

$invalidBorder: darken(red, 12%);

@keyframes shake {
  0% { transform: translate(20px); border-color: $invalidBorder }
  20% { transform: translate(-20px); border-color: $invalidBorder }
  40% { transform: translate(10px); border-color: $invalidBorder }
  60% { transform: translate(-10px); border-color: $invalidBorder }
  80% { transform: translate(5px); border-color: $invalidBorder }
  100% { transform: translate(0px); border-color: $invalidBorder }
}

</style>
