angular.module('starter.controllers', [])

.controller('CalculadoraCtrl', function($scope, $ionicPopup, $rootScope, $ionicModal, $timeout) {
  $scope.dados = {
    precoGas: 0,
    precoEt: 0,
    atnGas: 0,
    atnEt: 0
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

    $ionicModal.fromTemplateUrl('templates/tab-atnGas.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal1 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-atnEt.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal2 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-precoGas.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal3 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-precoEt.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal4 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-tanque.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal5 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-percurso.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal6 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-preco.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal7 = modal;
    });

  $scope.close = function(a) {
    if (a == 0){
      $scope.modal.hide();
      $scope.modal1.hide();
      $scope.modal2.hide();
      $scope.modal3.hide();
      $scope.modal4.hide();
    }
    if (a == 1){
      $scope.modal5.hide();
      $scope.modal6.hide();
      $scope.modal7.hide();
    }
  };

  $scope.open = function(n) {
    if (n == 0){
      $scope.modal.show();
      $scope.selects(0);
    }
    if (n == 1){
      $scope.modal1.show();
    }
    if (n == 2){
      $scope.modal2.show();
    }
    if (n == 3){
      $scope.modal3.show();
    }
    if (n == 4){
      $scope.modal4.show();
    }
    if (n == 5){
      $scope.modal5.show();
    }
    if (n == 6){
      $scope.modal6.show();
    }
    if (n == 7){
      $scope.modal7.show();
    }

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

  $scope.noMoreItemsAvailable = false;
  
  $scope.loadMore = function(f) {
    if (f == 1){
      $scope.itemsConsumo.push({ com: $scope.itemsConsumo.length});

      if ( $scope.itemsConsumo.length == 51 ) {
        $scope.noMoreItemsAvailableConsumo = true;
      }
    }
    if (f == 2){
      $scope.itemsPreco.push({ prc: $scope.itemsPreco.length});

      if ( $scope.itemsPreco.length == 501 ) {
        $scope.noMoreItemsAvailablePreco = true;
      }
    }
    if (f == 3){
      $scope.itemsTanque.push({ tq: $scope.itemsTanque.length});

      if ( $scope.itemsTanque.length == 101 ) {
        $scope.noMoreItemsAvailableTanque = true;
      }
    }
    if (f == 4){
      $scope.itemsPagar.push({ pagar: $scope.itemsPagar.length});

      if ( $scope.itemsPagar.length == 201 ) {
        $scope.noMoreItemsAvailablePagar = true;
      }
    } 
    if (f == 5){
      $scope.itemsDist.push({ s: $scope.itemsDist.length});

      if ( $scope.itemsDist.length == 1001 ) {
        $scope.noMoreItemsAvailableDist = true;
      }
    } 
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
  
  $scope.itemsConsumo = [];
  $scope.itemsPreco = [];
  $scope.itemsTanque = [];
  $scope.itemsPagar = [];
  $scope.itemsDist = [];

  $scope.setAtnGas = function(idx){
      $scope.dados.atnGas = idx;
      $scope.close(0)
  }
  $scope.setAtnEt = function(idx){
      $scope.dados.atnEt = idx;
      $scope.close(0)
  }
  $scope.setPrecoGas = function(idx){
      $scope.dados.precoGas = idx/100;
      $scope.close(0)
  }
  $scope.setPrecoEt = function(idx){
      $scope.dados.precoEt = idx/100;
      $scope.close(0)
  }
  $scope.setTanque = function(idx){
      $scope.calculo.tanque = idx;
      $scope.close(1)
  }
  $scope.setPagar = function(idx){
      $scope.calculo.preco = idx;
      $scope.close(1)
  }
  $scope.setDistancia = function(idx){
      $scope.calculo.kmt = idx * 10;
      $scope.close(1)
  }
})

.controller('AlertCtrl', function($scope, $rootScope) {
  $scope.resp = $rootScope.menssagem;
})   

