angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  // $scope.$on('$ionicView.enter', function(e) {
  //   if ($scope.loginData.logged) {
  //
  //   } else {
  //     $scope.modal.show();
  //   }
  // })

  $rootScope.logged = false;
  $state.go("login");
})

.controller('PlaylistsCtrl', function($scope) {

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('LoginCtrl', function($scope, $stateParams, $rootScope, $state) {

  $scope.loginData = {};

  $scope.doLogin = function () {
    if ($scope.loginData.username == 'diego@diego.com' &&
        $scope.loginData.password == '123456') {
      $rootScope.logged = true;
      $state.go("app.sobre");
    } else {
      alert('Dados Incorretos!');
    }
  }
});
