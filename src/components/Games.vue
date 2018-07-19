<template>
  <div class="games">
    <div class="game-list">
        <div class="game">CS:GO</div>
        <div class="game">Team Fortress 2</div>
        <div class="game">Overwatch</div>
        <div class="game">Minecraft</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Games',

  data () {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
.game-list {
    display: flex;
    width: 60%;
    margin: auto;
}

.game {
    width: 80%;
}
</style>
