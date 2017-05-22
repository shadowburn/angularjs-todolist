angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there!");
  };

  $scope.todos = [
    {"name": "Clean my room"},
    {"name": "Water the dog"},
    {"name": "feed the lawn"},
    {"name": "Pay the bills"},
    {"name": "Go to gym"}
  ]
});
