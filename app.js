(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller ('LunchCheckControler',LunchCheckControler);
  LunchCheckControler.$inject=['$scope'];
  function LunchCheckControler($scope) {
    $scope.name="";
    $scope.mesige="";
    $scope.odgovor= function(){
      var poruka="";//napravi odgovarajucu poruku yavisno od broja jela
      if(BrReci($scope.name)>3)
        poruka="Too much!"
      else
        poruka="Enjoy!";
      $scope.mesige=poruka;
    };
    function BrReci(string){
      var br=0;
      var reci=string.split(",");
      for(var i=0;i<reci.length;i++)
        if(reci[i]!="")   br++;
      return br;
    };
  }
})();
