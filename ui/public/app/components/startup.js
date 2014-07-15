define([
    'require',
    'angular',
    'jquery',
    'app'
    ], 
function(require, ng, $, app) {
  'use strict';
  
  $(document).ready(function() {
    try {
      ng.bootstrap(document, ['cikl']);
    }
    catch (e) {
        console.error(e.stack || e.message || e);
    }
  });
});
