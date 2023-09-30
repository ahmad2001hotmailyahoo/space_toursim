<template>
    <img v-if="image == '../assets/destination/image-moon.png'" src="../assets/destination/image-moon.png" width="300" height="300"/>
</template>
<script>
export default{
    props:{
        image:String
    }
}
</script>