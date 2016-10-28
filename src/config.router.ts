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
                    let module = require('./controller/home.controller');
                    $ocLazyLoad.load({name: 'homeController'});
                     resolve(module);
                });
            });
        }]
      }
    })
    .state('page1', {
      url: '/page1',
      templateUrl:"./src/tpl/page1.html",
      controller:"pageController",
      resolve: {
        load: ['$q','$ocLazyLoad',function ($q,$ocLazyLoad) {
            return $q((resolve) => {
                require.ensure([], () => {
                    let module = require('./controller/page1Ctrl');
                    $ocLazyLoad.load({name: 'pageController'});
                    resolve(module);
                });
            });
        }]
      }
    })
}

export default configRouter;


