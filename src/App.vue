<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body, #app {
  height: 100%;
  margin: 0;
  background-color: #02111b;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
