<template>
  <div id="app">
    <div class="nav">
      <router-link class="nav" to="/">Current</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  background-color: lightblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a {
  color: #153B50;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

</style>
