<template>
  <div class="signup">
    <div class="button" @click="showModal = true">
      SIGNUP
    </div>

    <!-- use the modal component, pass in the prop -->
    <SignupModal v-if="showModal" @close="showModal = false"/>
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
$width: 150px;
$height: 70px;

.button {
  border-color: rgba(0, 206, 203, 0.9);
  border-radius: 5px;
  border-width: 5px;
  border-style: solid;

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
    width: $width + 15px;
  }
}
</style>
