import {module} from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';
import './config.router';

// import valueService from './service/valueService'

import configRouter from './config.router';

export let app =  module('app',[
    "ui.router",
    "oc.lazyLoad",
])
.config(configRouter);
