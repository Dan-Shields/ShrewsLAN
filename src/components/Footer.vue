<template>
  <div class="footer">
    <div class="text left">
      <p>Website by <a href="https://twitter.com/DanShieldsUK" target="_blank">Daniel Shields</a></p>
    </div>
    <div class="divider-container">
      <div class="divider"></div>
    </div>
    <div class="text">
      <p>&copy; ShrewsLAN 2019</p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.footer {
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
