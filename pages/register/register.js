// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:{
      codeNum:60,
      isGet:false
    }
  },
  getCode(){
    this.setData({
      ['code.isGet']:true
    });
    let codeNum=this['data']['code']['codeNum'];
    let codeNumInterval=setInterval(()=>{
      if(codeNum<=0){
        this.setData({
          ['code.isGet']:false,
          ['code.codeNum']:60
        });
        clearInterval(codeNumInterval);
        return;
      }
      this.setData({
        ['code.codeNum']:codeNum--
      });
    },1000);
  }
})