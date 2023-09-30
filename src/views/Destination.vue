<template>
  <div class="destination">
    <Tab :dest="destination" @click="getDetail"/>
    <Image :image="destination_detail['image']" />
  </div>
</template>
<script setup>
import Tab from '../components/Tab.vue';
import Image from '../components/Image.vue';
import { onBeforeMount, ref } from 'vue';
import { useDestinationStore } from '@/stores/destination';
const destination_detail = ref()
const destinationStore = useDestinationStore()
const getDetail = (destination) => {
  destination_detail.value = (destinationStore.getDestination(destination))
}
onBeforeMount (()=>{
  getDetail("moon")
})
</script>
<style>
.destination{
  background: url("../assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  height: 100%;
  width:100%;
  position: absolute;
  z-index: -6;
  padding: 200px 150px;
  color: white;
}
</style>
