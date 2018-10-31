<template>
<div id="banner">
     <div class="parallax__layer parallax__layer__1" style="width:100%">
        <img src="../../assets/bg8@2x.png" alt="" class="animated fadeInUp">
    </div>
    <div class="parallax__layer parallax__layer__2" style="width:100%">
        <img src="../../assets/bg7@2x.png" alt="" class="animated fadeInUp">
    </div>
    <div class="parallax__layer parallax__layer__3" style="width:100%">
        <img src="../../assets/bg6@2x.png" alt="" class="animated fadeInUp">
    </div>
    <div class="parallax__layer parallax__layer__4" style="width:100%">
        <img src="../../assets/bg5@2x.png" alt="" class="animated fadeInUp">
    </div>
    <div class="parallax__layer parallax__layer__5" style="width:100%">
        <img src="../../assets/bg4@2x.png" alt="" class="animated fadeInUp">
    </div>
    <div class="parallax__layer parallax__layer__6" style="width:100%">
        <img src="../../assets/bg3@2x.png" alt="" class="animated fadeInUp">
    </div>
    <div class="parallax__layer parallax__layer__7" style="width:100%">
        <img src="../../assets/bg2@2x.png" alt="" class="animated fadeInUp">
    </div>
    <div class="parallax__layer parallax__layer__8" style="width:100%">
        <img src="../../assets/bg1@2x.png" alt="">
    </div>
</div>
   
</template>


<style>
#banner{
    perspective: 100px;
    height: 100vh;
    overflow-x: hidden;
    min-height: 300px;
    background: #f4e690; 
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
.parallax__layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: -200px;
    /* left: 50%; */
    z-index: -10;
}
.parallax__layer img {
    display: block;
    position: absolute;
    bottom: 0;
    z-index: -10;
}
.parallax__layer__1 {
    transform: translateZ(-350px) scale(4.5);
}
.parallax__layer__1 img {
    animation-delay: 1.3s;
    -webkit-animation-delay: 1.3s;
    -moz-animation-delay: 1.3s;
    -o-animation-delay: 1.3s;
    -ms-animation-delay: 1.3s;
}
.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
}
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.parallax__layer img {
    width: 100%;
}
.parallax__layer__2 {
    transform: translateZ(-300px) scale(4);
}
.parallax__layer__2 img {
    bottom: -7px;
    animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    -ms-animation-delay: 1.2s;
}
.parallax__layer__3 {
    transform: translateZ(-250px) scale(3.5);
}
.parallax__layer__3 img {
    animation-delay: 1.1s;
    -webkit-animation-delay: 1.1s;
    -moz-animation-delay: 1.1s;
    -o-animation-delay: 1.1s;
    -ms-animation-delay: 1.1s;
}
.parallax__layer__4 {
    transform: translateZ(-200px) scale(3);
}
.parallax__layer__4 img {
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -o-animation-delay: 1s;
    -ms-animation-delay: 1s;
}
.parallax__layer__5 {
    transform: translateZ(-150px) scale(2.5);
}
.parallax__layer__5 img {
    animation-delay: 0.9s;
    -webkit-animation-delay: 0.9s;
    -moz-animation-delay: 0.9s;
    -o-animation-delay: 0.9s;
    -ms-animation-delay: 0.9s;
}
.parallax__layer__6 {
    transform: translateZ(-100px) scale(2);
}
.parallax__layer__6 img {
    animation-delay: 0.8s;
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    -o-animation-delay: 0.8s;
    -ms-animation-delay: 0.8s;
}
.parallax__layer__7 {
    transform: translateZ(-50px) scale(1.5);
}
.parallax__layer__7 img {
    bottom: 40px;
    animation-delay: 0.7s;
    -webkit-animation-delay: 0.7s;
    -moz-animation-delay: 0.7s;
    -o-animation-delay: 0.7s;
    -ms-animation-delay: 0.7s;
}
.parallax__layer__8 {
    transform: translateZ(0px) scale(1);
}
.parallax__layer__8 img {
    bottom: 200px;
    animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -ms-animation-delay: 0.6s;
}
/* .info::before {
    content: '';
    position: absolute;
    bottom: -0.125em;
    width: 100%;
    height: 0.25em;
    background: -webkit-linear-gradient(315deg, transparent, transparent 45%, #008000, transparent 55%, transparent 100%), -webkit-linear-gradient(45deg, transparent, transparent 45%, #008000, transparent 55%, transparent 100%);
    background: linear-gradient(135deg, transparent, transparent 45%, #008000, transparent 55%, transparent 100%), linear-gradient(45deg, transparent, transparent 45%, #008000, transparent 55%, transparent 100%);
    background-size: 0.5em 0.5em;
    background-repeat: repeat-x, repeat-x;
} */
</style>
