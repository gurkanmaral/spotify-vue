<script>
import ProfilePlaylistCard from './ProfilePlaylistCard.vue';

export default {
    components:{
        ProfilePlaylistCard
    }
}

</script>

<template>
    <div class="profilePlaylistContainer">
        <div>
            <span class="artistHeader"> 
                Public Playlists
            </span>
        </div>
        <div class="profilePlaylistCardContainer">
            <ProfilePlaylistCard :image-url="'https://i.pinimg.com/564x/7a/5a/e0/7a5ae0a6c8cf47055aea8c7f44789ffe.jpg'" />
            <ProfilePlaylistCard :image-url="'https://i.pinimg.com/736x/6e/33/da/6e33da955c51580edc0c5a24ac868799.jpg'" />
            <ProfilePlaylistCard :image-url="'https://i.pinimg.com/736x/79/3d/b1/793db138d199b55919ff11c08117d550.jpg'" />
            <ProfilePlaylistCard :image-url="'https://i.pinimg.com/736x/50/c9/ee/50c9ee2ff83278ff2b08837dfec2bc4a.jpg'" />
            <ProfilePlaylistCard :image-url="'https://i.pinimg.com/564x/7a/5a/e0/7a5ae0a6c8cf47055aea8c7f44789ffe.jpg'" />
            <ProfilePlaylistCard :image-url="'https://i.pinimg.com/564x/4c/25/e2/4c25e255611adcd0291fbc9e19f2fd26.jpg'" />
            <ProfilePlaylistCard :image-url="'https://i.pinimg.com/564x/dc/04/be/dc04bec8d6d8f78b2c39d1e21bf9965f.jpg'" />
        </div>
    </div>
</template>

<style>

.profilePlaylistContainer{
    padding-left: 20px;
    margin-top: 30px;
    padding-right: 10px;

}
.profilePlaylistCardContainer{
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: 30px;
    margin-top: 20px;
    margin-bottom: 100px;

}
</style>