'use strict';
import { app } from './../app';

interface homeViewModel extends ng.IScope{
  name:string;
}
class homeController{
  constructor(private $scope:homeViewModel){
    this.$scope.name = "hello!Home"
  };
}


// app.controller("homeController",homeController);
angular.module("homeController",[])
.controller("homeController",homeController);

