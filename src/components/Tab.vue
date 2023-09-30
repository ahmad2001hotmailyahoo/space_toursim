<template>
    <ul>
        <li v-for="tab in destination.getDestinationTab._value" v-bind:key="tab" v-on:click="detailFunction(tab)">{{ tab }}</li>
    </ul>
</template>
<style>
ul{
   display: flex;
   list-style: none;
   justify-content: flex-end; 
}
li{
    margin: 10px;
    cursor: pointer;
}
</style>
<script setup>
import { useDestinationStore } from '@/stores/destination'
const destination = useDestinationStore()
import { defineEmits } from 'vue';

const emit = defineEmits(['click'])

const detailFunction = (tab) =>{
    emit("click",tab)
}

</script>