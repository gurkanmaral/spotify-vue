<template>

    <div class="topTrack">
        <div class="topTrack-span-1">
           <span>1</span>
          <div class="topTrackInfoContainer">
            <div class="topTrackImageContainer">
                <img class="topTrackImage" src="https://i.scdn.co/image/ab67616d0000b2737bf487faab3add8cfad5cb2e" alt="">   
          </div>
          <div class="track-info">
            <span>Machine Gun</span>
            <span>Slowdive</span>
        </div>
        </div>
        </div>
        <div class="topTrack-span-5" />
        <div class="topTrack-span-5" />
        <div class="topTrack-span-5">
           <span>
             Souvlaki
           </span>
        </div>
        <div class="topTrack-span-4">
            <v-icon name="fa-regular-heart" scale="1" fill="white"/>
            <span>2:44</span>
            <v-icon name="bi-three-dots" scale="1.3" fill="white"/>
        </div>
    </div>
</template>

<style>
.topTrack{
    display: grid;
    grid-template-columns: repeat(10,1fr);
border-radius: 5px;
}
.topTrack:hover{
    background-color: rgb(43, 43, 43);
}

.topTrackImageContainer{
    padding: 10px;
}
.topTrack-span-1{
    grid-column: span 2;
    display: flex;
    padding-left: 20px;
    align-items: center;
    
}
.topTrackImage{
    width: 45px;
    height: 45px;
    aspect-ratio: 1/1;
    object-fit: cover;
}
.topTrack-span-5{
    grid-column: span 2;
    display: flex;
    align-items: center;
}
.topTrack-span-4{
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 30px;
}

.topTrackInfoContainer{
    display: flex;
    align-items: center;
}
.track-info{
    display: flex;
    flex-direction: column;
}
</style>