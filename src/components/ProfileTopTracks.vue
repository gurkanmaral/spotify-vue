<script>
import TopTracksCard from './TopTracksCard.vue';

export default {
    components:{
        TopTracksCard
    }
}

</script>

<template>
    <div class="profileTopTracksContainer">
        <div>
            <span class="artistHeader">
                Top Tracks This Month
            </span>
        </div>
        <div class="profileTopTracks">
            <TopTracksCard />
            <TopTracksCard />
            <TopTracksCard />
            <TopTracksCard />
        </div>
    </div>
</template>

<style>
.profileTopTracksContainer{
    margin-top: 50px;
    padding-left: 20px;

}
.profileTopTracks{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    margin-top: 20px;
    padding-right: 10px;
}
</style>