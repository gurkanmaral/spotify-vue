<script>
import ProfileCard from './ProfileCard.vue';

export default {
    components:{
        ProfileCard,
    }
}

</script>

<template>
    <div class="profileTopArtistContainer">
        <div>
            <span class="artistHeader">
                Top artists this month
            </span>
        </div>
    </div>
    <div class="profileTopArtistCardContainer" >
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
    </div>
</template>

<style>

.profileTopArtistContainer{
    margin-top: 80px;
    padding-left: 20px;

}
.artistHeader{
    font-size: 30px;
    font-weight: bold;
}
.profileTopArtistCardContainer{
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: 20px;
    padding-right: 10px;
    margin-top: 20px;
    padding-left: 20px;
}
</style>