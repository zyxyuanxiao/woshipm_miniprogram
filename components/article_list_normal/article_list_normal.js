// components/article_list_normal/article_list_normal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLoadArticle:{
      type:Boolean,
      value:false
    },
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadArticle(){
      this.triggerEvent("loadArticle",{},{});
    }
  }
})
