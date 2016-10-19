// 'use strict';
// export default angular
//   .module('home', [
//     require('../src/controller/home.controller').name
//   ]);

// 'use strict'
// import homeTpl from './tpl/home.html';
// let Routers = {
//   template : homeTpl,
//   controller: 'HomeController',
//   resolve:{
//     load:['$q','$ocLazyLoad',function($q,$ocLazyLoad){
//       return $q((resolve) => {
//         require.ensure([],() => {
//              let module = require('./controller/home.controller.js');
//              $ocLazyLoad.load({name: 'home'});
//              resolve(module.controller);
//         })
//       })
//     }]
//   }
// };
// export default Routers