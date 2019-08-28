  ﻿angular.module('todo', []).controller('MainController', function ($scope) {

$scope.todoList = [{todoText: 'Test', done:false}];

$scope.todoAdd = function(){
$scope.todoList.push({ todoText : $scope.todoInput , done: false});
$scope.todoInput= "";
};

$scope.remove = function() {
       var oldList = $scope.todoList;
       $scope.todoList = [];
       angular.forEach(oldList, function(task) {
           if (!task.done) $scope.todoList.push(task);
       });
     };
});

//     this.tasks = [
//                  {
//                      name: 'Go for mock 4',
//                      done: false
//                  },
//     {
//         name: 'Depart to Mumbai',
//         done: false
//     },
// {
//     name: 'Make transcripts',
//     done: false
// }];
