import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [{
      name: '首页',
      path: '/'
    }, {
      name: '我的文章',
      path: '/'
    }, {
      name: '商品列表',
      path: '/'
    }, {
      name: '关于我们',
      path: '/'
    }],
    navListSon:[{

    }]
  },
  mutations: {

  },
  actions: {

  }
})
