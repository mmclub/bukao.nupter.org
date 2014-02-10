
var data;
$.getJSON('static/bukao2013.json').done(function(json) {
  data = json
});


function libListCtrl($scope) {


  $scope.onChange = function(){
    var list =  data[$scope.query.toUpperCase()];
    if (list) {
      console.log(list.length);
      for (var i = 0; i < list.length; i++){
        list[i] = list[i].join(" ")
      }
      $scope.list = list;
    }
  }

}

