'use strict';
var appModule =require('../src/app');
myApp.bootstrap(document, [appModule.name], { strictDi: true });
