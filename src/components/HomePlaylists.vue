<script>
import PlaylistCard from './PlaylistCard.vue';

export default {
  components: {
    PlaylistCard,
  },
  computed: {
    greeting() {
      const now = new Date();
      const hour = now.getHours();

      if (hour >= 5 && hour < 12) {
        return 'Good Morning';
      } else if (hour >= 12 && hour < 17) {
        return 'Good Afternoon';
      } else {
        return 'Good Evening';
      }
    },
  },
};
</script>

<template>
  <div class="homePlaylistContainer">
    <div>
      <span class="header">{{ greeting }}</span>
    </div>
   <div class="playlistInnerContainer">
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
    <PlaylistCard />
   </div>
  </div>
</template>

<style>

.homePlaylistContainer{
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-right: 10px;

}
.playlistInnerContainer{
    display: grid;
    grid-template-columns: repeat(3,1fr);

    gap: 20px;
}

.header {
  font-size: 36px;
  font-weight: bold;
  letter-spacing: -2px;
}
</style>