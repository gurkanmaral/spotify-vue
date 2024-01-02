<script>
import Card from './Card.vue'

export default {

    components:{
        Card,
    }
}

</script>

<template>
    <div>
        <div>
            <span class="header">
                Made for Gurkan Maral
            </span>
        </div>
        <div class="madeForCardContainer">
           <Card :image-url="'https://i.pinimg.com/564x/d0/12/f8/d012f8f5dadb7653c8f567ee47eb0749.jpg'" />
           <Card />
           <Card :image-url="'https://i.pinimg.com/736x/dc/04/be/dc04bec8d6d8f78b2c39d1e21bf9965f.jpg'" />
           <Card />
           <Card />
           <Card :image-url="'https://i.pinimg.com/564x/d0/12/f8/d012f8f5dadb7653c8f567ee47eb0749.jpg'" />
           <Card />
        </div>
    </div>
</template>

<style>
.madeForCardContainer{
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: 20px;
    padding-right: 10px;
    margin-top: 20px;
}
</style>