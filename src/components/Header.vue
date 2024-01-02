<script>
export default {
  data() {
    return {
      showNavLinksContainer: false,
    };
  },
 
  methods: {
    toggleNavLinksContainer() {
      this.showNavLinksContainer = !this.showNavLinksContainer;
    },
   
  },
  }
</script>

<template>
    <div class="homeNav" >
        <div class="homeNavLeft">
          <div class="homeNavLeftContainer">
            <v-icon name="md-keyboardarrowleft" scale="1.7" fill="white"/>
          </div>
          <div class="homeNavLeftContainer">
            <v-icon name="md-keyboardarrowright-sharp" scale="1.7" fill="white"/>
          </div>
        </div>
        <div class="homeNavRightContainer">
          <div class="homeNavRightIcon">
            <v-icon name="md-notificationsnone-sharp" scale="1" fill="white"/>
            
          </div>
          <div class="homeNavRight">
              <div class="nav-img-container" @click="toggleNavLinksContainer">
                <img src="https://i.ebayimg.com/images/g/BvUAAOSwuyhhOSsK/s-l1200.webp" alt="" class="nav-img">
              </div>
          </div>          
        </div>
        <div class="homeNavlinksContainer"  v-if="showNavLinksContainer">         
            <span class="homeNavlinks">Account</span>      
          <span class="homeNavlinks">Profile</span>
          <span class="homeNavlinks">Settins</span>        
            <span class="homeNavlinks logout">Logout</span>
        </div>
    </div>
</template>

<style>
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