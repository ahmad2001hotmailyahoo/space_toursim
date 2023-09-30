<template>
    <header class="d-flex justify-space-between align-center pa-4">
        <div class="space_button">
            <img src="../assets/space_button.png" width="48" height="48">
        </div>
      <nav class="d-flex justify-space-between desktop">
        <NavItem/>
      </nav>
      <nav class="mobile">
        <div class="hamburger_menu" v-if="hamburger_menu" v-on:click="toggleMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
        </div>
      </nav>
    </header>
    <div class="menu" v-if="!hamburger_menu">
        <div class="close" v-on:click="toggleMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
        </div>
        <NavItem/>
    </div>
</template>
<script setup >
import NavItem from './NavItem.vue';
import {ref} from 'vue';
let hamburger_menu = ref(true);
function toggleMenu(){
    console.log(hamburger_menu);
    hamburger_menu.value = !hamburger_menu.value;
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&display=swap');
header{
    background:#0B0D1760;
    font-family: 'Barlow Condensed';
    position: absolute;
    z-index: -2;
    width: 90%;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
}

.mobile,.menu{
    display: none;
}
@media screen and (max-width:900px) {
    header{
        top: 0;
        width: 100%;
    }
}

@media screen and (max-width:550px) {
    .desktop{
        display: none !important;
    }
    .mobile{
        display: block;
    }
    .menu{
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        padding-top: 100px;
        background: #0B0D17AA;
        backdrop-filter: blur(45px);
        height: 100%;
    }
    .close{
        position: absolute;
        top: 30px;
        right: 12px;
    }
}
</style>