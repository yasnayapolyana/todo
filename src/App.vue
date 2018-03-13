<template>
  <div id="app">

      <h3>ToDo</h3>
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav> -->

    <router-view />
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
/* @media only screen and (max-width: 1920px) { */
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 40%;
}

h3 {
  font-size: 32px;
  text-align: center;
}

nav {
  padding-bottom: 25px;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

@media only screen and (max-width: 667px) {
  body {
    padding-top: 0px;
  }

  #app {
    width: 90%;
  }
}

</style>
