require('angular')
.module('myApp',[
  require('angular-ui-router'),
 (() => { require('oclazyload'); return 'oc.lazyLoad' })(),
  // require('oclazyload'),
  require('../src/config.router.js').name
]);
