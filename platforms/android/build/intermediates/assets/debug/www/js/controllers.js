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

.controller('PesquisarCtrl', function($scope, $http) {

  $scope.restaurants = {};

  $scope.init = function () {
    $http({
      method: 'GET',
      // headers: {
      //   'Content-Type': undefined
      // },
      url: 'http://www.diegosiena.esy.es/JapaFoodAPI/restaurants.php'
    }).then(function successCallback(response) {
        alert('teste');
        $scope.restaurants = response.data.restaurants;
      }, function errorCallback(response) {
       alert('testeError');
    });
  }


  $scope.abreDetalhes = function () {
    $state.go("app.detalhes");
  };

  $scope.init();
})

.controller('LoginCtrl', function($scope, $stateParams, $rootScope, $state, $http, $ionicPopup) {

  $scope.loginData = {};

  $scope.doLogin = function () {

    $http({
      method: 'POST',
      data: {user: $scope.loginData.username, pw: $scope.loginData.password},
      // headers: {
      //   'Content-Type': undefined
      // },
      url: 'http://www.diegosiena.esy.es/JapaFoodAPI/users.php'
    }).then(function successCallback(response) {
        if (response.data.ret) {
          $rootScope.logged = true;
          $state.go("app.home");
        } else {
          $ionicPopup.alert({
              title: 'Ops!!!',
              template: 'Erro ao fazer login.'
            });
        }
      }, function errorCallback(response) {
          var alertPopup = $ionicPopup.alert({
            title: 'Ops!!!',
            template: 'Erro ao fazer login.'
          });
    });

    // if ($scope.loginData.username == 'diego@diego.com' &&
    //     $scope.loginData.password == '123456') {
    // } else {
    //   alert('Dados Incorretos!');
    // }
  }
});
