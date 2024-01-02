<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: 'https://i.ebayimg.com/images/g/BvUAAOSwuyhhOSsK/s-l1200.webp'
    },
  },
};
</script>

<template>
    <div class="cardContainer card-span">
        <div class="card-img-container">
            <img class="profile-playlist-img" :src="imageUrl" alt="">
        </div>
        <div class="">
            <div class="card-info">
                <h3 class="card-info-header">inland empire</h3>
                <p class="card-info-p">By Gurkan Maral</p>
            </div>
        </div>
    </div>
</template>


<style>

.cardContainer{
    background-color: rgba(32, 30, 30, 0.724);
    padding: 15px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
}
.cardContainer:hover{
    background-color: rgba(63, 61, 61, 0.724);
}
.card-span{
    grid-column: span 1;
    display: flex;
    flex-direction: column;

}
.card-info{
    gap: 5px;
    display: flex;
    flex-direction: column;
    margin: 0; 
  
    
}
.card-info-header{
 
    margin: 0; 
}
.profile-playlist-img{
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1; 
    border-radius: 10px;
    object-fit: cover;
}
.card-info-p{
    font-size: 14px;
    color: rgb(167, 167, 167);
  
    margin: 0; 

}
</style>