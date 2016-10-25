import {module} from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';

import configRouter from './config.router.ts';

export let app =  module('app',[
    "ui.router",
    "oc.lazyLoad"
    ]
)
 .config(configRouter);