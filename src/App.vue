<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SongContainer from "./components/SongContainer.vue"
import LeftSidebar from './components/LeftSidebar.vue';
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="containerr">
    <LeftSidebar />
    <div class="router-view-container">
      <RouterView />
    </div>
    <SongContainer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

html {
  font-family: "Spotify Circular", sans-serif;
}
.containerr {
  display: flex;

}
.router-view-container {
  flex-grow: 1;
  padding-left: 23%; 
  
  min-height: 100vh; 
  box-sizing: border-box;
}
</style>
