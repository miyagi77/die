<template>
<div id="banner">
    <div class="nav">
        <el-row>
            <el-header>
                <el-col :span="21">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-menu-item v-for="(item,index) in navList" :key="index" @click="tabs(item.name)" :index="index">
                        <!-- <router-link :key="index" :to="item.path"> -->
                            {{item.name}}
                        <!-- </router-link> -->
                        </el-menu-item>
                        <!-- <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3" >消息中心</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
                    </el-menu>
                </el-col>
            </el-header>
        </el-row>
    </div>
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
/* 标题栏样式 */
.nav{
    position: absolute;
    height: 50px;
    /* margin: 0 auto; */
    width: 800px;
    background-color: #E6E6FA;
    opacity:0.3;
    left: 30%;
    top: 20px;
    border-radius: 5px
}
.el-col{
    width: 100% !important;
}
.el-menu-demo{
    width: 400px;
    margin: 0 auto !important;
}
/* 背景样式 */
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
</style>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "我的文章",
          path: "/"
        },
        {
          name: "商品列表",
          path: "/"
        },
        {
          name: "关于我们",
          path: "/"
        }
      ],
      
      activeIndex: "0",
      activeIndex2: "0",
    };
  },
  //  computed: {
  //   navList() {
  //     return this.$store.state.navList;
  //   }
  // },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>