class LoginController {
  constructor() {
    "ngInject";
    this.activeTab = 'login';
    this.user = {
      userName:'admin',
      password:'123@Admin'
    }

  }
  setActiveTab(val){
    this.activeTab = val;
  }

  doLogin(user){
    console.log(user);
  }
}

export default LoginController;
