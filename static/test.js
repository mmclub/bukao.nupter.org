


var cacheKey = "nupt-test-2014-1"

var data = JSON.parse(localStorage.getItem(cacheKey));

if (data === null || data === undefined){

  $.getJSON('static/test2014.json').done(function(json) {
    data = json
    localStorage.setItem(cacheKey, JSON.stringify(data));
  });

}



function libListCtrl($scope) {

  $scope.onChange = function(){

    var list =  data[$scope.query.toUpperCase()];
    if (list) {
      console.log(list.length);
      var a = []
      for (var i = 0; i < list.length; i++){
        console.log(list[i])
        a.push({text: list[i].join(" ")});
      }
      $scope.list = a
    }else {
      $scope.list = undefined;
    }
    console.log($scope.query.toString());
    console.log($scope.list);
    if (($scope.list === undefined ) && ($scope.query.length > 0)){
      console.log("in if");
      $scope.list = [ {text: " 当前班级 " + $scope.query.toString() + " 没有考试记录　^_^"}];
    }
  }
  

}

