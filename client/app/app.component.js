import template from './app.html';

let appComponent = {
  template,
  controller: ($token, $scope, $timeout) => {
    "ngInject";
    $timeout(() => {

      $scope.items = [1, 2, 3, 4, 5];
      redus()
    }, 1500)

    function redus() {
      $timeout(() => {
        $scope.items = []
      }, 4000)
    }

    $token.save({
      "Username": "admin",
      "Password": "123@Admin"
    })
  }
};

export default appComponent;