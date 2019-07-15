<template>
  <div class="contact" id="contact">
    <svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
      <linearGradient id="my-cool-gradient" x2="1" y2="1">
        <stop offset="0%" stop-color="#447799" />
        <stop offset="50%" stop-color="#224488" />
        <stop offset="100%" stop-color="#112266" />
      </linearGradient>
    </svg>
    <div class="socials">
      <a href="https://www.facebook.com/events/698460180641005/" target="_blank" class="social left"><font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon></a>
      <a href="https://twitter.com/ShrewsLAN" target="_blank" class="social right"><font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon></a>
    </div>
    <CustomButton class="email" @click="contact"><span style="font-weight: 500">Contact:</span> info@shrewslan.uk</CustomButton>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: {
    CustomButton
  },

  methods: {
    contact () {
      window.open('mailto:info@shrewslan.uk', '_blank');
    }
  }
};
</script>

<style lang="scss">
.contact {

  .socials {
    width: 120px;
    height: 70px;
    max-width: 100%;
    margin: auto;
    position: relative;

  }

  .social, .social:visited {
    position: absolute;
    line-height: 50px;
    font-size: 50px;

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }
  }
}
</style>
