// 'use strict'
// import template from './tpl/home.html';
//
// function configRouter($urlRouterProvider, $stateProvider){
//     $urlRouterProvider.otherwise('/home');
//
//     $stateProvider
//       .stare('home',{
//           url:'/home',
//           // template:template,
//           templateUrl:'./tpl/home.html',
//           // template: template,
//           controller: 'HomeController',
//           // resolve:{
//           //   loadHomeController: ($q, $ocLazyLoad) => {
//           //       return $q((resolve) => {
//           //           require.ensure([], () => {
//           //               let module = require('../src/home.router');
//           //               $ocLazyLoad.load({name: 'home'});
//           //               resolve(module.controller);
//           //           });
//           //       });
//           //   }
//           // },
//       })
//
// }
//
// export default angular
//  .module('config.router',['$stateProvider','$urlRouterProvider'])
//  .config(configRouter);


'use strict'
import homeTpl from './tpl/home.html';
//
// function configRouter($stateProvider,$urlRouterProvider){
//     $urlRouterProvider.otherwise('/home');
//     $stateProvider
//     .stare('home',{
//       url:'/home',
//       template:homeTpl,
//       resolve: {
//         load: ['$q','$ocLazyLoad',function ($q,$ocLazyLoad) {
//             return $q((resolve) => {
//                 //下面这一行写法是webpack在需要的时候才下载依赖的模块，[具体看这里][2]
//                 require.ensure([], () => {
//                     //这里只是依赖了一个控制器文件，但是这个文件里面你可以import很多其他的依赖
//                     let module = require('./controller/home.controller.js');
//
//                     $ocLazyLoad.load({name: 'home'});
//
//                     //promise 的成功回调，不返回出去参数也没关系，因为在login.contorller.js里面已经注册了LoginCtrl
//                     resolve(module.controller);
//                 });
//             });
//         }]
//       }
//     })
// // };

export default angular.module('myApp',[])
.config(
  ['$stateProvider','$urlRouterProvider',
  function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home',{
        url:'/home',
        template:homeTpl,
        resolve: {
          load: ['$q','$ocLazyLoad',function ($q,$ocLazyLoad) {
              return $q((resolve) => {
                  //下面这一行写法是webpack在需要的时候才下载依赖的模块，[具体看这里][2]
                  require.ensure([], () => {
                      //这里只是依赖了一个控制器文件，但是这个文件里面你可以import很多其他的依赖
                      let module = require('./controller/home.controller.js');

                      $ocLazyLoad.load({name: 'home'});

                      //promise 的成功回调，不返回出去参数也没关系，因为在login.contorller.js里面已经注册了LoginCtrl
                      resolve(module.controller);
                  });
              });
          }]
        }
      })
    }

  ]
)

// configRouter.$inject = ['$routeProvider'];
// export default configRouter;
