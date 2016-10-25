'use strict';

import {app} from '../app';

interface homeViewModel extends ng.IScope{
  name:string;
}
export default class homeController{
  constructor(private $scope:homeViewModel){
    this.init();
  };
  init():void{
    this.$scope.name = "hello!Home"
  }
}
app.controller("homeController",homeController);