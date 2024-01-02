import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import PlaylistDetails from '../pages/PlaylistDetails.vue'
import Profile from '../pages/Profile.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Home},
        {path:'/profile',component:Profile},
        {path:'/playlist',component:PlaylistDetails}
    ]
})

export default router