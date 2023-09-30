<script setup>
import { RouterLink} from 'vue-router'
</script>
<template>
    <RouterLink to="/"><span class="number">00</span> Home</RouterLink>
    <RouterLink to="/destination"><span class="number">01</span> Destination</RouterLink>
    <RouterLink to="/destination"><span class="number">02</span> Crew</RouterLink>
    <RouterLink to="/destination"><span class="number">03</span> Technnology</RouterLink>
</template>
<style>
nav{
    height: 100%;
}
a{
    color:#979797;
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    display: inline-block;
    height: 100%;
}
.number{
    color:white;
}
.router-link-active{
    border-bottom: 2px solid #979797 !important;
}


@media screen and (max-width:550px){
    a{
        height: auto;
        padding: 10px;
    }
}
</style>