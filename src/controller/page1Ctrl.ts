'use strict';
import {app} from '../app';
import { valueService } from './../service/valueService';

interface homeViewModel extends ng.IScope{
  name:string;
}
class pageController{
  constructor(private $scope:homeViewModel,private valueService:valueService){
    this.init();
  };
  init():void{
    this.$scope.name = "hello!page1";
 
    this.valueService.value().then(res=>{
        console.log(res.data)
    })
    
  }
}
export default angular.module("pageController",[])
.controller("pageController",pageController);