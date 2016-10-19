// require('angular')
// .module('myApp',[
//   require('angular-ui-router'),
//  (() => { require('oclazyload'); return 'oc.lazyLoad' })(),
//   // require('oclazyload'),
//   require('../src/config.router').name
// ]);
import 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';
import configRouter from './config.router.js';

export default angular
.module('myApp',[
    'ui.router',
    'oc.lazyLoad',
     configRouter.name
]);

