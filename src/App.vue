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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: aliceblue;
}

html {
  height: 100%;
}

body {
  margin: 0;
  background: rgb(255, 164, 164);
  background: linear-gradient(0deg, rgba(255, 164, 164, 1) 0%, rgba(84, 132, 255, 1) 100%);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;

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

a {
  text-decoration: none;
}

</style>
