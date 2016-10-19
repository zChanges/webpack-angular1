import homeTpl from './tpl/home.html';
import page1Tpl from './tpl/page1.html';
export default function configRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      template:homeTpl,
      resolve: {
        load: ['$q','$ocLazyLoad',function ($q,$ocLazyLoad) {
            return $q((resolve) => {
                require.ensure([], () => {
                    let module = require('./controller/home.controller');
                    $ocLazyLoad.load({name: 'HomeController'});
                    resolve(module.controller);
                });
            });
        }]
      }
    })
    .state('page1', {
      url: '/page1',
      template:page1Tpl,
      resolve: {
        load: ['$q','$ocLazyLoad',function ($q,$ocLazyLoad) {
            return $q((resolve) => {
                require.ensure([], () => {
                    let module = require('./controller/page1Ctrl');
                    $ocLazyLoad.load({name: 'page1Ctrl'});
                    resolve(module.controller);
                });
            });
        }]
      }
    })
}

