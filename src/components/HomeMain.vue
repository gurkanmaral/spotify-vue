<script>
import HomePlaylists from './HomePlaylists.vue';
import MadeFor from './MadeFor.vue'
import RecentlyPlayed from './RecentlyPlayed.vue';
import Footer from './Footer.vue';
import Header from "./Header.vue";
export default {
  data() {
    return {
      showNavLinksContainer: false,
    };
  },
  components: {
    HomePlaylists, 
    MadeFor,
    RecentlyPlayed,
    Footer,
    Header,
  },
  mounted() {
    console.log("Component mounted"); // Debugging statement
    window.addEventListener('scroll', this.handleScroll);

    const mainContainer = document.querySelector('.mainContainer');
    if (mainContainer) {
      mainContainer.addEventListener('scroll', this.handleScroll);
    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    const mainContainer = document.querySelector('.mainContainer');
    if (mainContainer) {
      mainContainer.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    toggleNavLinksContainer() {
      this.showNavLinksContainer = !this.showNavLinksContainer;
    },
    handleScroll() {
      console.log("Scroll event triggered");
      const homeNav = document.querySelector('.homeNav');
      if (window.scrollY > 0 || this.$el.scrollTop > 0) { 
        homeNav.classList.add('homeNavScrolled');
      } else {
        homeNav.classList.remove('homeNavScrolled');
      }
    },
  },
};
</script>

<template>
    <div class="mainContainer"     >
      <Header />
      <div class="playlistContainer">
        <HomePlaylists />
      </div>
      <div class="madeForContainer">
        <MadeFor />
      </div>
      <div class="madeForContainer">
        <RecentlyPlayed />
      </div>
      <div class="madeForContainer ">
        <Footer />
      </div>
    </div>
</template>

<style scoped>
.playlistContainer{
  padding-left: 20px;
  margin-top: 20px;
  width: 100%;
 
}
.footer{
  padding-bottom: 100px;
}
.madeForContainer{
  padding-left: 20px;
  margin-top: 40px;
  width: 100%;
}
    .mainContainer{
        overflow-y: scroll;
      height: calc(100vh - 90px);
      width: 100%;
      border-radius: 10px;
      position: relative;
      background: linear-gradient(0deg, #0e0d0d 65%, #181e52 100%);
      background-repeat: no-repeat;
      background-size: 100% 100%;

    
    }
   .homeNav{
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease; /* Add a transition for a smoother effect */

    padding: 10px;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-top: 20px;

    position: sticky;
    top: 0; 
    z-index: 1000; 
    background-color: transparent; 
  
   }
   .homeNavScrolled {
    background-color: rgb(15, 15, 39); 
}
   
   .homeNavLeftContainer{
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
   }
   .homeNavLeft{
    display: flex;
    gap: 5px;

   }
   .homeNavRightContainer{
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
   }
   .homeNavRightIcon{
    background-color: black;
    border-radius: 50%;
    padding: 2px;
    width: 33px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

   }
   .homeNavRightIcon:hover{
      transform: scale(1.1);
   }
   .homeNavRight{

   }
   .nav-img-container{
    background-color: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    cursor: pointer;
   }
 
   .nav-img{
    width: 25px;
    height: 25px;
    border-radius: 50%;

   }
   .nav-img-container:hover{
    transform: scale(1.1);
   }
   .homeNavlinksContainer{
    position: absolute;
    right: 15px;
    top: 55px;
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding:5px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    width: 150px;
    height: auto;
   }
   .homeNavlinks{
    padding: 10px;
    display: flex;
    width: 100%;
  
   }
   .homeNavlinks:hover{
    background-color: gray;
    border-radius: 3px;
   }
   .logout{
    border-top: 1px solid gray;
   
   }
   
</style>