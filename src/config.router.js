'use strict'
var template = require('./views/home.html');

function configRouter($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .stare('home',{
          url:'/home',
          template:require("./views/home.html"),
          //templateUrl:'./views/home.html',
          template: template,
          controller: 'HomeController',
          resolve:{
            loadHomeController: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('../src/home.router');
                        $ocLazyLoad.load({name: 'home'});
                        resolve(module.controller);
                    });
                });
            }
          },
      })

}

export default angular
 .module('config.router',['$stateProvider','$urlRouterProvider'])
 .config(configRouter);
