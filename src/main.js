import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from  './router/router.js'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoHomeOutline } from "oh-vue-icons/icons";
import { MdHomefilled } from "oh-vue-icons/icons";
import { IoHomeSharp } from "oh-vue-icons/icons";
import { GiAncientSword } from "oh-vue-icons/icons";
import { OiSearch } from "oh-vue-icons/icons";
import { IoLibrarySharp } from "oh-vue-icons/icons";
import { HiPlusSm } from "oh-vue-icons/icons";
import { HiSolidArrowSmRight } from "oh-vue-icons/icons";
import { BiListUl } from "oh-vue-icons/icons";
import { MdKeyboardarrowleft } from "oh-vue-icons/icons";
import { MdKeyboardarrowrightSharp } from "oh-vue-icons/icons";
import { MdNotificationsnoneSharp } from "oh-vue-icons/icons";
import { IoPlaySharp } from "oh-vue-icons/icons";
import { FaRegularHeart } from "oh-vue-icons/icons";
import { BiThreeDots } from "oh-vue-icons/icons";

addIcons(BiThreeDots,FaRegularHeart,IoPlaySharp,MdNotificationsnoneSharp,MdKeyboardarrowrightSharp,MdKeyboardarrowleft,BiListUl,HiSolidArrowSmRight,HiPlusSm,IoLibrarySharp,IoHomeOutline,MdHomefilled,IoHomeSharp,OiSearch,GiAncientSword);

const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router)

app.mount('#app')


