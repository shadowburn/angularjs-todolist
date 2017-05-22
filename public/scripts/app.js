angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there!");
  };

  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  }

})
.service('dataService', function($http) {
  this.getTodos = function(callback) {
    $http.get('mock/todos.json').then(callback)
  };

  this.deleteTodo = function(todo){
    console.log(todo.name + "has been deleted!");
  };

  this.saveTodos = function(todo) {
    console.log(todo.name + "has been saved!")
  };
});
