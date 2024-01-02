<script setup >
import LibraryCard from "./LibraryCard.vue"


</script>
<template>
    <div class="leftContainer">
       <div class="leftContainerHome">
        <div class="iconContainer">
            <v-icon name="io-home-sharp" scale="1.5" fill="white"/>
            <p>Home</p>
        </div>
        <div class="iconContainer">
            <v-icon name="oi-search" scale="1.5" fill="white"/>
            <p>Search</p>
        </div>
       </div>
       <div class="libraryContainer ">
            <div class="playlistContainer ">
                    <div class="playlist">
                      <div class="playlistUpper">
                        <div class="yourLibrary">
                            <v-icon name="io-library-sharp" scale="1.5" fill="white"/>
                            <span>Your Library</span>
                        </div>
                        <div class="yourLibraryIcons">
                            <v-icon name="hi-plus-sm" scale="1.5" fill="white"/>
                            <v-icon name="hi-solid-arrow-sm-right" scale="1.5" fill="white" />
                            
                        </div>
                      </div>
                      <div class="playlistButtom">
                           <div class="playlistButtom-1">
                                <div class="playlistButtomItem">
                                    Playlist
                                </div>
                                <div class="playlistButtomItem">
                                    Artists
                                </div>
                                <div class="playlistButtomItem">
                                    Podcasts & Shows
                                </div>
                           </div>
                           <div class="playlistButtom-2">
                            <div class="playlistSearch">
                               <div>
                                    <div class="playlistSearchContainer">
                                        <v-icon name="oi-search" scale="1.2" fill="white"/>
                                    </div>
                               </div>
                               <div class="playlistSortingContainer">
                                <span>
                                    Recents
                                </span>
                                <v-icon name="bi-list-ul" scale="1.2" fill="white"/>
                               </div>
                            </div>
                            <div class="librarylistItemContainer">
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                <LibraryCard />
                                
                            </div>                           
                           </div>
                      </div>
                    </div>
            </div>
       </div>
    </div>
</template>

<style scoped>

.leftContainer{
    width: 23%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: fixed;
    color: white;
    padding-top: 10px;
    padding-left: 5px;

}
.col-span-1 {
    grid-column: span 1; 
}

.col-span-5 {
    grid-column: span 3;
}
.leftContainerHome{
    padding: 10px;
    padding-left: 20px;
    border-radius: 10px;
    width: 100%;
    height: auto;
    background-color: rgb(26, 25, 25);
}
.libraryContainer{
    background-color: rgb(26, 25, 25);
    padding-left: 20px;
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.iconContainer{
    display: flex;
    font-weight: bold;
    gap: 15px;
    align-items: center;
    
}
.playlistContainer{
  
}
.playlistSearch{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    
}
.playlist{
  display: flex;
  flex-direction: column;
}

.playlistUpper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
}
.playlistButtom{
    display: flex;
    flex-direction: column;
}
.playlistButtom-1{
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-top: 20px;

}
.playlistButtom-2{
   height: calc(100vh - 300px);
    overflow-y: scroll;
    padding-top: 10px;
  
  
}
.playlistButtom-2::-webkit-scrollbar {
    display: block; /* enable scrollbar */
    width: 12px;
   
}

.playlistButtom-2::-webkit-scrollbar-thumb {
    background-color: #c5bebe;
    transition: all 1s;
}

.playlistButtom-2::-webkit-scrollbar-thumb:hover {
    background: #d6d5d5;
}
.playlistButtom-2::-webkit-scrollbar-track {
    background: transparent; 
  }
  
.playlistButtomItem{
    background-color: black;
    padding: 8px;
    border-radius: 20px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}
.yourLibrary{
    display: flex;
    gap: 15px;
    align-items: center;

}
.yourLibraryIcons{
    gap: 15px;
    display: flex;
    padding-right: 15px;
}
.icon{
    color: white;
}
.playlistSearchContainer{
    height: 100%;
    padding: 3px;
    border-radius: 50%;
    cursor: pointer;
}
.playlistSearchContainer:hover{
    background-color: black;
}
.playlistSortingContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 15px;
    padding-right: 10px;

}

.librarylistItemContainer{
    height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: 1fr ;
    gap: 10px;
}

</style>