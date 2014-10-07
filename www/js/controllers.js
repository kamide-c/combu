angular.module('starter.controllers', [])

.controller('CalculadoraCtrl', function($scope, $ionicPopup, $rootScope, $ionicModal, $timeout) {
  $scope.dados = {
    precoGas: 0,
    precoEt: 0,
    atnGas: 0,
    atnEt: 0
  }

  $scope.decimo = {
    precoGas: 0,
    precoEt: 0,
    atnGas: 0,
    atnEt: 0
  }

  $scope.centesimo = {
    precoGas: 0,
    precoEt: 0
  }

  $scope.milesimo = {
    precoGas: 0,
    precoEt: 0
  }

  $scope.resultado = {
    precoGas: 0,
    precoEt: 0,
    atnGas: 0,
    atnEt: 0
  }

  $scope.addGas = function(i){
    if (i == 0){
      while ($scope.dados.atnGas > 0){
       return $scope.dados.atnGas--;
      }
    }
    if (i == 1){
      while ($scope.dados.atnGas < 99){
       return $scope.dados.atnGas++;
      }
    }
    if (i == 2){
      while ($scope.decimo.atnGas > 0){
       return $scope.decimo.atnGas--;
      }
    }
    if (i == 3){
      while ($scope.decimo.atnGas < 9){
       return $scope.decimo.atnGas++;
      }
    }
  }

  $scope.addEt = function(i){
    if (i == 0){
      while ($scope.dados.atnEt > 0){
       return $scope.dados.atnEt--;
      }
    }
    if (i == 1){
      while ($scope.dados.atnEt < 99){
       return $scope.dados.atnEt++;
      }
    }
    if (i == 2){
      while ($scope.decimo.atnEt > 0){
       return $scope.decimo.atnEt--;
      }
    }
    if (i == 3){
      while ($scope.decimo.atnEt < 9){
       return $scope.decimo.atnEt++;
      }
    }
  }

  $scope.addPrecoGas = function(i){
    if (i == 0){
      while ($scope.dados.precoGas > 0){
       return $scope.dados.precoGas--;
      }
    }
    if (i == 1){
      while ($scope.dados.precoGas < 9){
       return $scope.dados.precoGas++;
      }
    }
    if (i == 2){
      while ($scope.decimo.precoGas > 0){
       return $scope.decimo.precoGas--;
      }
    }
    if (i == 3){
      while ($scope.decimo.precoGas < 9){
       return $scope.decimo.precoGas++;
      }
    }
    if (i == 4){
      while ($scope.centesimo.precoGas > 0){
       return $scope.centesimo.precoGas--;
      }
    }
    if (i == 5){
      while ($scope.centesimo.precoGas < 9){
       return $scope.centesimo.precoGas++;
      }
    }
    if (i == 6){
      while ($scope.milesimo.precoGas > 0){
       return $scope.milesimo.precoGas--;
      }
    }
    if (i == 7){
      while ($scope.milesimo.precoGas < 9){
       return $scope.milesimo.precoGas++;
      }
    }
  }

  $scope.addPrecoEt = function(i){
    if (i == 0){
      while ($scope.dados.precoEt > 0){
       return $scope.dados.precoEt--;
      }
    }
    if (i == 1){
      while ($scope.dados.precoEt < 9){
       return $scope.dados.precoEt++;
      }
    }
    if (i == 2){
      while ($scope.decimo.precoEt > 0){
       return $scope.decimo.precoEt--;
      }
    }
    if (i == 3){
      while ($scope.decimo.precoEt < 9){
       return $scope.decimo.precoEt++;
      }
    }
    if (i == 4){
      while ($scope.centesimo.precoEt > 0){
       return $scope.centesimo.precoEt--;
      }
    }
    if (i == 5){
      while ($scope.centesimo.precoEt < 9){
       return $scope.centesimo.precoEt++;
      }
    }
    if (i == 6){
      while ($scope.milesimo.precoEt > 0){
       return $scope.milesimo.precoEt--;
      }
    }
    if (i == 7){
      while ($scope.milesimo.precoEt < 9){
       return $scope.milesimo.precoEt++;
      }
    }
  }

  $scope.resposta = function() { 
    if ($scope.resultado.precoGas/$scope.resultado.atnGas > $scope.resultado.precoEt/$scope.resultado.atnEt){
      return "Etanol";
    }
    if ($scope.resultado.precoGas/$scope.resultado.atnGas < $scope.resultado.precoEt/$scope.resultado.atnEt){
      return "Gasolina";
    }
    if ($scope.resultado.precoGas/$scope.resultado.atnGas == $scope.resultado.precoEt/$scope.resultado.atnEt){
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
      scope: $scope
    }).then(function(modal) {
      $scope.modal1 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-atnEt.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal2 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-precoGas.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal3 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-precoEt.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal4 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tab-percurso.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal5 = modal;
    });

  $scope.close = function(a) {
    if (a == 0){
      $scope.modal.hide();
      $scope.modal1.hide();
      $scope.modal2.hide();
      $scope.modal3.hide();
      $scope.modal4.hide();
      $scope.resultado.atnGas = $scope.dados.atnGas + $scope.decimo.atnGas/10;
      $scope.resultado.atnEt = $scope.dados.atnEt + $scope.decimo.atnEt/10;
      $scope.resultado.precoGas = $scope.dados.precoGas + $scope.decimo.precoGas/10  + $scope.centesimo.precoGas/100 + $scope.milesimo.precoGas/1000;
      $scope.resultado.precoEt = $scope.dados.precoEt + $scope.decimo.precoEt/10  + $scope.centesimo.precoEt/100 + $scope.milesimo.precoEt/1000;
    }
    if (a == 1){
      $scope.modal5.hide();
      $scope.calculo.kmt = $scope.calculo.kmts;
      $scope.calculo.kmts = '';
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
    kmts: "",
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

