<template>
    <div class="profileHeaderContainer">
        <div class="profileHeaderImageContainer">
            <img class="profile-img" src="https://i.pinimg.com/564x/24/db/14/24db145d1fb6beca42e0202dd43937a8.jpg" alt="">
        </div>
        <div class="profileHeaderInfoContainer">
                <div>
                    <span class="profileTitle">Gurkan Maral</span>
                </div>
                <div>
                        <span class="profileInfo">
                            10 Public Playlists • 20 Followers • 21 Following
                        </span>                     
                </div>
        </div>
    </div>
</template>

<style>

.profileHeaderContainer{
    display: grid;
    padding-left: 20px;
    grid-template-columns: repeat(10,1fr);
    gap: 20px;
}
.profileHeaderImageContainer{
grid-column: span 2;

}
.profileHeaderInfoContainer{
    grid-column: span 5;
   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
   
}
.profile-img{
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    aspect-ratio: 1/1; 
    box-shadow: 0 0 10px rgba(1, 0.5, 10, 1); 
}
.profileTitle{
    font-size: 100px;
    font-weight: bolder;
    letter-spacing: -3px;
}
.profileInfo{
    font-weight: lighter;
    font-size: 14px;
}
</style>