<template>
<el-row>
  <el-header>
      <el-col :span="3"><img style="height:60px" src="/images/logo.png" alt="logo"></el-col>
      <el-col :span="21">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item v-for="(item,index) in navList" :key="index" @click="tabs(item.name)" :index="index"  :class="{active:activeName == item.name}">
              <!-- <router-link :key="index" :to="item.path"> -->
                  {{item.name}}{{index}}
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
</template>
<style >
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  padding: 0 !important;
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
      activeName: "首页", 
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