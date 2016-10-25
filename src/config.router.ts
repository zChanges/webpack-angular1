// import homeTpl from './tpl/home.html';
// import page1Tpl from './tpl/page1.html';
let homeTpl = require("./tpl/home.html");
let page1Tpl = require("./tpl/page1.html");

function configRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl:"./src/tpl/home.html",
      controller:"homeController",
      resolve: {
        load: ['$q','$ocLazyLoad',function ($q,$ocLazyLoad) {
            return $q((resolve) => {
                require.ensure([], () => {
                    let module = require('./controller/home.controller.ts');
                    $ocLazyLoad.load({name: 'homeController'});
                     resolve();
                });
            });
        }]
      }
    })
    .state('page1', {
      url: '/page1',
      templateUrl:"./src/tpl/page1.html",
      resolve: {
        load: ['$q','$ocLazyLoad',function ($q,$ocLazyLoad) {
            return $q((resolve) => {
                require.ensure([], () => {
                    let module = require('./controller/page1Ctrl');
                    $ocLazyLoad.load({name: 'page1Ctrl'});
                    resolve();
                });
            });
        }]
      }
    })
}
export default configRouter;
