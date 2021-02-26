<template>
  <div>
      <img class="mascot" src="../assets/mascot.png">
      <img class="close-icon" src="../assets/Close Icon@2x.png">
      <div class="blue-bg">
        <img  class="icon-photobooth" src="../assets/Icon Photobooth@2x.png">
        <h2>Photobooth</h2>
        <p class="text-area">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</p>
        <div class="cam-area">
            <Camera2/>
        </div>
      </div>
      
  </div>
</template>

<script>
import Camera2 from './Camera2'

export default {
    name: "PopUp",
    components: {
        Camera2
    }
}
</script>

<style scoped>
.blue-bg{
    /* display: flex; */
    position: relative;
    top: 216px;
    left: 432px;
    width: 575px;
    height: 345px;
    background: #6699CC 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
    opacity: 1;
    z-index: -1;
}

.icon-photobooth{
    position: relative;
    float: left;
    /* display: flex; */
    top: 20px;
    left: 24px; 
    width: 60px;
    height: 60px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
} 

.cam-area{
    position:absolute;
    float: left;
    top: 16px;
    left: 300px;
    width: 260px;
    height: 313px;
    background: black no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
}

.text-area{
    position: relative;
    top: 75px;
    left: 70px;
    width: 239px;
    height: 109px;
    text-align: left;
    font: normal normal normal 14px/18px Red Hat Display;
    letter-spacing: 0.7px;
    color: #D9D9D9;
    opacity: 1;
}

.mascot{
    position: absolute;
    top: 415px;
    left: 350px;
    width: 165px;
    height: 146px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
}

h2{
    float: left;
    position: relative;
    top: 10px;
    left: 30px;
    width: 137px;
    height: 29px;
    text-align: left;
    font: normal normal bold 22px/29px Red Hat Display;
    letter-spacing: 1.1px;
    color: #FFFFFF;
    opacity: 1;
}

.close-icon{
    position: absolute;
    top: 210px;
    left: 1000px;
    width: 40px;
    height: 40px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
}
</style>