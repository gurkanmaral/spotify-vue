<script>
import ProfileHeader from '../components/ProfileHeader.vue';
import ProfilePlaylists from '../components/ProfilePlaylists.vue';
import ProfileTopTracks from '../components/ProfileTopTracks.vue';
import ProfileTopArtist from '../components/ProfileTopArtist.vue';
import Header from '../components/Header.vue';

export default {
    
    components:{
        ProfileHeader,
        ProfilePlaylists,
        ProfileTopArtist,
        ProfileTopTracks,
        Header
    },
  
}

</script>


<template>
    <div class="container">
       <div class="profileContainer">
            <Header />
       <div>
        <ProfileHeader />
     </div>
     <div>
      <ProfileTopArtist />
     </div>
     <div>
      <ProfileTopTracks />
     </div>
     <div>
      <ProfilePlaylists />
     </div>
       </div>
    </div>
</template>

<style>
.container{
    width: 100%;
    background-color: black;
    color: white;
    min-height: calc(100vh - 70px);
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 5px;
    padding-top:10px ;
  

}
.profileContainer{
    overflow-y: scroll;
      height:auto;
      width: 100%;
      border-radius: 10px;
      position: relative;
      background: linear-gradient(0deg, #0e0d0d 55%, #e2f8fc 100%);
      background-repeat: no-repeat;
      background-size: 100% 100%;
}

</style>