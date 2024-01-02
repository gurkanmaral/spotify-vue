<script>
    export default {
        
    }
</script>

<template>
    <div class="playlist-col glassmorphism" >
        <div class="playlistInnerCol">
            <div class="playlistItemCol-1">
                <img class="playlist-img" src="https://i.ebayimg.com/images/g/BvUAAOSwuyhhOSsK/s-l1200.webp" alt="">
            </div>
            <div class="playlistItemCol-5">
               <span class="header-1">Playlist Title</span>
               <div class="card-play">
                <v-icon name="io-play-sharp" scale="1.2" fill="black"/>
               </div>
            </div>
        </div>
    </div>
</template>

<style>

.card-play{
    background-color: rgb(88, 240, 88);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 5px 10px rgba(0, 0, 3, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0; 
    transition: opacity 0.3s;
}
.card-play:hover{
    
}
.glassmorphism {

  
    }
    
.playlist-col{
    grid-column: span 1;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.15);
    
    box-shadow: 0 2px 30px 0 rgba(31, 38, 135, 0.05);
    
    backdrop-filter: blur(4px);
    
    -webkit-backdrop-filter: blur(4px);
    
    cursor: pointer;

}
.playlist-col:hover .card-play {
    opacity: 1; /* Show the element when .playlist-col is hovered */
}
.playlist-col:hover .playlistItemCol-1 {
    box-shadow: 0px 5px 10px rgba(0, 0, 3, 0.5);
}
.playlist-col:hover{
    background: rgba(255, 255, 255, 0.25);
}
.playlistInnerCol{
    grid-template-columns: repeat(7,1fr);
    display: grid;
    gap: 10px;
}
.playlist-img-container{
    padding: 10px;
}

.playlist-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1; 
}
.playlistItemCol-1{
    grid-column: span 1;
    


}

.playlistItemCol-5{
    grid-column: span 6;
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding-right: 20px;
   
  

}
.header-1{
    font-weight: bold;
    font-size: 18px;
}



</style>