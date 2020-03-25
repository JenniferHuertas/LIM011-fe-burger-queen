<template>
  <div id="app" class="text-center">
    <div id="nav" class="container mt-5">
      <nav class="col-sm-12 navbar fixed-top navbar-light" style="background-color: #fef9e7;">
          <img alt="Responsive image" src="./assets/logoh.png" class="rounded float-left">
          <div class="text-center">
            <router-link to="/home">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color:#873600 ;
}

#nav a.router-link-exact-active {
  color:#d4ac0d;
}

img {
  height: 150px;
}
</style>
