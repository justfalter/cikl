define(['angular',
        'lodash',
        './controllers/all',
        'angular-bootstrap',
        'angular-timepicker',
        'angular-timepicker-tpl',
        'angular-position'
], 
function(ng, _, controllers, angular_bootstrap, timepicker, timepicker_tpl, position) {
  'use strict';

  return ng.module('cikl', [
    'cikl.controllers',
    'ui.bootstrap',
    'sy.bootstrap.timepicker',
    'template/syTimepicker/timepicker.html',
    'template/syTimepicker/popup.html'
    ]);
});

