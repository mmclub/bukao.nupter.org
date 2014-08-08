

var data = JSON.parse(localStorage.getItem('data-2014'));

if (data === null || data === undefined){

  $.getJSON('static/bukao2014.json').done(function(json) {
    data = json
    localStorage.setItem('data-2014', JSON.stringify(data));
  });

}



function libListCtrl($scope) {

  $scope.onChange = function(){

    var list =  data[$scope.query.toUpperCase()];
    if (list) {
      console.log(list.length);
      for (var i = 0; i < list.length; i++){
        list[i] = {text: list[i].join(" ")};
      }
      $scope.list = list;
    }else {
      $scope.list = undefined;
    }
    console.log($scope.query.toString());
    console.log($scope.list);
    if (($scope.list === undefined ) && ($scope.query.length > 0)){
      console.log("in if");
      $scope.list = [ {text: " 当前学号 " + $scope.query.toString() + " 没有补考记录　^_^"}];
    }
  }
  

}

