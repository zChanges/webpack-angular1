'use strict';

class HomeController {
  constructor() {
      console.log(111);
      alert(1111);
  }
  
}

export default angular
  .module('home.controller', [])
  .controller('HomeController', HomeController);
