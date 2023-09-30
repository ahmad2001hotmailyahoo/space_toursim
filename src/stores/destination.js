import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
// computed
export const useDestinationStore = defineStore('destination', () => {
  const destination_tab = ref(
    [
      "moon",
      "mars",
      "europa",
      "titan"
    ]
  );
  const destinations = ref([
    {
      "destination" : "moon",
      "image":"../assets/destination/image-moon.png"
    },
    {
      "destination" : "mars",
      "image":"../assets/destination/image-mars.png"
    },
    {
      "destination" : "europa",
      "image":"../assets/destination/image-europa.png"
    },
    {
      "destination" : "titan",
      "image":"image-titan.png"
    }
  ])
    const getDestinationTab = computed(() => {
      return destination_tab
  })

  const getDestination = (destination) => {
    console.log(destination);
    console.log(destinations.value.map((item)=>item.destination == destination));
    return destinations.value.find(dest => dest.destination === destination)
  } 

  return { destinations , destination_tab , getDestinationTab, getDestination  }
})
