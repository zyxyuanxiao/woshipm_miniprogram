// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:{
      type:"password",
      eyeImage:"close"
    }
  },

  changePasswordType(){
    let type=this['data']['password']['type'];
    let eyeImage=this['data']['password']['eyeImage'];
    if(type=='text'){
      type="password";
      eyeImage="close";
    }else{
      type="text";
      eyeImage="open";
    }
    this.setData({
      ['password.type']:type,
      ['password.eyeImage']:eyeImage
    });
  }

})