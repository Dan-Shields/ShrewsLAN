<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html {
  background-color: #02111b;
}

#app {
  margin: 0;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

</style>
