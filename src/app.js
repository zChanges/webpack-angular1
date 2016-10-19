import angular from 'angular';
import uirouter from 'angular-ui-router';
import ocLazyLoad from 'ocLazyLoad'

import configRouter from './config.router.js';

angular.module('app',[uirouter,ocLazyLoad])
.config(configRouter);