<template>
  <div class="signup">
    <div class="button" @click="showModal = true">
      SIGNUP
    </div>

    <!-- use the modal component, pass in the prop -->
    <SignupModal v-if="showModal" @close="showModal = false" @submit="showModal = false"/>
  </div>
</template>

<script>
import SignupModal from '@/components/SignupModal'

export default {
  name: 'SignupButton',

  data () {
    return {
      showModal: false
    }
  },

  components: {
    SignupModal
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

$width: 150px;
$height: 70px;

.button {
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

  line-height: 70px;
  vertical-align: middle;

  width: $width;
  height: $height;

  transition: 0.2s;

  &:hover {
    color: black;
    width: $width + 15px;
    background-color: $primary;
  }
}
</style>
