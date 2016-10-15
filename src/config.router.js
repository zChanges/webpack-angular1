'use strict'

function configRouter($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .stare('home',{
          url:'/home',
          template:require('../src/views/home.html'),
          controller: 'HomeController as vm',
          resolve:{
            loadHomeController: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('../src/home.router');
                        $ocLazyLoad.load({name: 'home'});
                        resolve(module.controller);
                    }));
                });
            }
          }
      })

}

export default angular
 .module('config.router',[])
 .config(configRouter);
