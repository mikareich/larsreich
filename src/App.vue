<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <div class="black-bar"></div>
    <header>
      <h2>Lars Reich - Computation Psychology</h2>
      <div class="links">
        <router-link to="/home" :active-class="isActive">Home</router-link>
        <router-link to="/publications" :active-class="isActive"
          >Publications</router-link
        >
        <router-link to="/blog" :active-class="isActive">Blog</router-link>
        <router-link to="/topics" :active-class="isActive">Topics</router-link>
        <router-link to="/about" :active-class="isActive">About</router-link>
        <div class="line"></div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style>
html,
body {
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  margin: 0px;
  background: #e5e5e5;
}
.black-bar {
  width: 100vw;
  background: #353535;
  height: 20px;
}
header h2 {
  font-weight: bold;
  color: #6d6d6d;
}
header {
  padding: 5px;
  position: relative;
}
header .links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
a {
  font-family: unset;
  color: #6d6d6d;
  font-weight: bold;
  font-size: large;
  text-decoration: unset;
  transition: 200ms;
  border-bottom: 2px solid #53535300;
}

a.router-link-active {
  border-bottom: 2px solid #535353;
  color: #353535;
  font-weight: bolder;
}
</style>
