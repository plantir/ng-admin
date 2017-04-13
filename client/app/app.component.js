import template from './app.html';

let appComponent = {
  template,
  controller: ($token) => {
    "ngInject";
    $token.save({
      "Username": "admin",
      "Password": "123@Admin"
    })
  }
};

export default appComponent;