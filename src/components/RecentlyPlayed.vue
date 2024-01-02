<script>
import Card from './Card.vue'

export default {

    components:{
        Card,
    },
    props: {
    imageUrl: String, 
  },
}

</script>


<template>

    <div>
        <div>
            <span class="header">
                Recently Played
            </span>
        </div>
        <div class="madeForCardContainer">
            <Card :image-url="'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jan_Matejko%2C_Sta%C5%84czyk.jpg/1200px-Jan_Matejko%2C_Sta%C5%84czyk.jpg'" />
            <Card :image-url="'https://i.pinimg.com/564x/2c/39/b6/2c39b6992e82a68535932f3669ec25f8.jpg'" />
            <Card />
            <Card />
            <Card :image-url="'https://i.pinimg.com/564x/eb/00/65/eb0065fd65301848aeb500c348d2105c.jpg'" />
            <Card />
            <Card />
        </div>
    </div>
</template>

<style>

</style>