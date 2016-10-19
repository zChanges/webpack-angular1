import homeTpl from './tpl/home.html';
function configRouter($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .stare('home',{
      url:'/home',
      template:homeTpl,
      controller: 'HomeController',
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
};

export default angular
.module('config.Router',[])
.config(configRouter);