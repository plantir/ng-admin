import $ from "jquery";
class LoginController {
  constructor($token, $state) {
    "ngInject";
    this.$token = $token;
    this.$state = $state;
    this.activeTab = 'login';
    this.user = {
      userName: 'admin',
      password: '123@Admin'
    }

  }
  setActiveTab(val) {
    this.activeTab = val;
  }

  doLogin(user) {
    this.error = "";
    this.$token.SignIn(user).then((res) => {
      this.$state.go('home');
    }, (err) => {
      this.error = err.data.message;
    });
  }
}

export default LoginController;