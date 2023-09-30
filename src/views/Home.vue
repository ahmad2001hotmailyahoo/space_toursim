<template>
  <main>
    <div class="body d-flex justify-space-evenly align-end">
      <div class="para">
        <h3>So you want to travel to space</h3>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div class="cirlce">
        <div class="explore">
          EXPLORE
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&display=swap');
main{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: url("../assets/home/background-home-desktop.jpg") no-repeat;
  background-size: cover;
  z-index: -6;
  color: white;
  font-family: 'Barlow Condensed';
}
.body{
  margin-top: 300px;
  width: 100%;
}
.para{
  width: 40%;
}
.cirlce{
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background-color: white;
  color: black;
}
.explore{
  margin-top: 50%;
  margin-left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
h1{
  font-size: 10rem !important;
}

@media screen and (max-width:900px){
  main{
    background: url("../assets/home/background-home-tablet.jpg") no-repeat;
    background-size: cover;
  }
  h1{
    font-size: 6rem !important;
  }
    .para{
    width: 100%;
    text-align: center;
  }
  .para p{
    width: 70%;
    margin: auto;
  }
  .body{
    flex-direction: column;
    position: static;
    justify-content: center;

    margin-top:120px;
  }
  .cirlce{
    align-self: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
