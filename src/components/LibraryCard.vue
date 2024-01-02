<script>
   
</script>
<template>
    <div class="card-col-span-1 ">
         <div class="card-container">
            <div class="card-items-span-1">
                <img class="img" src="https://i.ebayimg.com/images/g/BvUAAOSwuyhhOSsK/s-l1200.webp" alt="Image from URL" />
            </div>
            <div class="card-items-span-5">
                  <span class="card-title">Playlist 1</span>
                  <span class="card-desc">
                    Playlist · Gurkan Maral
                  </span>
            </div>
         </div>   
    </div>
</template>

<style>

.card-col-span-1{
    grid-column: span 1;
    

}
.card-col-span-1:hover{
    background-color: black;
}
.card-container{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  padding: 5px;
    cursor: pointer;
    gap: 10px;
}
.card-items-span-1{
    grid-column: span 1;
    width: 100%;


}
.card-items-span-5{
    grid-column: span 6;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    justify-content: center;
}
.img{
    width: 50px;
    height: 50px; 
    object-fit: cover;
    border-radius: 10px;

}
.card-title{
    font-weight: bold;
    font-size: 17px;
    padding: 0;
}
.card-desc{
    font-size: 14px;
    font-weight: lighter;
    color: gray;
}
</style>