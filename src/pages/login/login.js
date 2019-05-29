// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      username:"",
      password:"",
      notice:""
    },
    password:{
      type:"password",
      eyeImage:"close"
    },
    questionBox:{
      isHide:true
    }
  },

  displayQuestionBox(){
    let boxIsHide=this['data']['questionBox']['isHide'];
    this.setData({
      ['questionBox.isHide']:!boxIsHide
    })
  },

  bindUsernameInput(e){
    this.setData({
      ['form.username']:e.detail.value
    });
  },

  bindPasswordInput(e){
    this.setData({
      ['form.password']:e.detail.value
    });
  },

  submit_form(e){
    let username=this['data']['form']['username'];
    let password=this['data']['form']['password'];
    if(username.length==0){
      this.setData({
        ['form.notice']:"请输入手机/用户名/邮箱"
      });
    }else if(username.length<2){
      this.setData({
        ['form.notice']:"请输入正确的账号"
      });
    }else if(password.length==0){
      this.setData({
        ['form.notice']:"请输入密码"
      });
    }else if(password.length<6||password.length>12){
      this.setData({
        ['form.notice']:"密码错误"
      });
    }else{
      this.setData({
        ['form.notice']:""
      });
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