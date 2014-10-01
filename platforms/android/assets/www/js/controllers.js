angular.module('starter.controllers', [])

.controller('CalculadoraCtrl', function($scope, $ionicPopup, $rootScope, $ionicModal, $timeout) {
  $scope.dados = {
    precoGas: 0,
    precoEt: 0,
    atnGas: 0,
    atnEt: 0
  }

  $scope.centesimal = {
    precoGas: 0,
    precoEt: 0
  }

  $scope.resposta = function() { 
    if ($scope.dados.precoGas/$scope.dados.atnGas > $scope.dados.precoEt/$scope.dados.atnEt){
      return "Etanol";
    }
    if ($scope.dados.precoGas/$scope.dados.atnGas < $scope.dados.precoEt/$scope.dados.atnEt){
      return "Gasolina";
    }
    if ($scope.dados.precoGas/$scope.dados.atnGas == $scope.dados.precoEt/$scope.dados.atnEt){
      return "Ambos";
    }
  }

  $scope.calcular = function() { 
    $rootScope.menssagem = $scope.resposta();
  }   

  $scope.showAlert = function() {
      $scope.calcular();
          if ($scope.dados.precoGas && $scope.dados.atnGas && $scope.dados.precoEt && $scope.dados.atnEt){
          var alertPopup = $ionicPopup.alert({
          title: 'A melhor escolha',
          okType: 'button-calm',
          template: '<div class="row center" ng-controller="AlertCtrl">{{ resp }}</div>'
          });
        }
        else{
          var alertPopup = $ionicPopup.alert({
          title: '<i class="icon ion-alert-circled"></i> Aviso <i class="icon ion-alert-circled"></i>',
          okType: 'button-calm',
          template: '<div class="row center">Preencha todos os campos para que os dados possam ser processados</div>'
          });
        }
      }

  $scope.estatic = {};
    $ionicModal.fromTemplateUrl('templates/tab-estatisticas.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

  $scope.close = function() {
      $scope.modal.hide();
  };

  $scope.open = function() {
      $scope.modal.show();
      $scope.selects(0);
  };

  $scope.doOpen = function() {
    console.log('Doing data', $scope.estatic);
  };

  $scope.combustiveis = [
    {tipo: 'Etanol'},
    {tipo: 'Gasolina'}
  ];
  $scope.select = $scope.combustiveis[0]
  $scope.calculo = {
    tanque: 0,
    kmt: 0,
    preco: 0,
    combustivel: "",
    autonomia: ""
  }

  $scope.selects = function(n) {
    if (n == 0){
      $scope.booleana = n;
      $scope.calculo.autonomia = $scope.dados.atnEt;
      $scope.calculo.combustivel = $scope.dados.precoEt;
    }
    if (n == 1){
      $scope.booleana = n;
      $scope.calculo.autonomia = $scope.dados.atnGas;
      $scope.calculo.combustivel = $scope.dados.precoGas;
    }
  }

  $scope.$watch("calculo", function (newValue, oldValue) {
    if (newValue.tanque != oldValue.tanque){
      $scope.calculo.kmt = newValue.tanque * $scope.calculo.autonomia;
      $scope.calculo.preco = newValue.tanque * $scope.calculo.combustivel;
    }
    else if (newValue.kmt != oldValue.kmt){
      $scope.calculo.tanque = newValue.kmt / $scope.calculo.autonomia;
      $scope.calculo.preco = (newValue.kmt * $scope.calculo.combustivel) / $scope.calculo.autonomia;
    }
    else if (newValue.preco != oldValue.preco){
      $scope.calculo.tanque = newValue.preco / $scope.calculo.combustivel;
      $scope.calculo.kmt = (newValue.preco * $scope.calculo.autonomia) / $scope.calculo.combustivel;
    }
    else if (newValue.combustivel != oldValue.combustivel && newValue.autonomia != oldValue.autonomia){
      $scope.calculo.tanque = $scope.calculo.preco / newValue.combustivel;
      $scope.calculo.kmt = ($scope.calculo.preco * newValue.autonomia) / newValue.combustivel;
    }
  }, true);
})

.controller('AlertCtrl', function($scope, $rootScope) {
  $scope.resp = $rootScope.menssagem;
})   

.controller('MyCtrl', function($scope) {
  $scope.noMoreItemsAvailable = false;
  
  $scope.loadMore = function() {
    $scope.items.push({ id: $scope.items.length});
   
    if ( $scope.items.length == 2000 ) {
      $scope.noMoreItemsAvailable = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
  
  $scope.items = [];
  
})