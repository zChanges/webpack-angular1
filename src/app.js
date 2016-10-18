// require('angular')
// .module('myApp',[
//   require('angular-ui-router'),
//  (() => { require('oclazyload'); return 'oc.lazyLoad' })(),
//   // require('oclazyload'),
//   require('../src/config.router').name
// ]);
import angular from '../node_modules/angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'ocLazyLoad';
angular.module('myApp',[uiRouter,oclazyload]);
