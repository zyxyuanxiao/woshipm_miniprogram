// components/header_default/header_default.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    rightMenu: {
      isHidden: true,
      animationData:{},
      kwList:[
        {
          text:"AI人工智能",
          link:""
        },
        {
          text:"业界动态",
          link:""
        },
        {
          text:"交互体验",
          link:""
        },
        {
          text:"产品经理",
          link:""
        },
        {
          text:"产品设计",
          link:""
        },
        {
          text:"产品运营",
          link:""
        },
        {
          text:"分析评测",
          link:""
        },
        {
          text:"创业学院",
          link:""
        },
        {
          text:"区块链",
          link:""
        },
        {
          text:"原型设计",
          link:""
        },
        {
          text:"大咖分享",
          link:""
        },
        {
          text:"文案策划",
          link:""
        },
        {
          text:"新零售",
          link:""
        },
        {
          text:"营销推广",
          link:""
        },
        {
          text:"讲座沙龙",
          link:""
        }
      ],
      
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    displayRightMenuWin() {
      let isHidden = this.data.rightMenu.isHidden;
      this.setData({
        ['rightMenu.isHidden']: !isHidden
      });
    }
  }
})
