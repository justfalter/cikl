/**
 * Bootstrap require with the needed config, then load the app.js module.
 */
require.config({
  baseUrl: 'app',
  // urlArgs: 'r=@REV@',
  paths: {
    //config:                   '../config',
    //settings:                 'components/settings',
    //kbn:                      'components/kbn',

    vendor:                   '../vendor',
    //css:                      '../vendor/require/css',
    'require-text':                     '../vendor/require/text',
    moment:                   '../vendor/moment',
    angular:                  '../vendor/angular/angular',
    'angular-resource':       '../vendor/angular/angular-resource.min',
    'angular-route':          '../vendor/angular/angular-route.min',
    'angular-bootstrap':      '../vendor/angular/ui-bootstrap-tpls-0.11.0.min',
    'angular-timepicker':               '../vendor/angular/timepicker',
    'angular-timepicker-tpl':         '../vendor/angular/timepicker-tpl',
    'angular-position':                 '../vendor/angular/position',

    bootstrap:                '../vendor/bootstrap.min',
    lodash:                   '../vendor/lodash.compat',

    jquery:                   '../vendor/jquery/jquery-1.11.1.min',
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },

    bootstrap: {
      deps: ['jquery']
    },

    jquery: {
      exports: 'jQuery'
    },

    // simple dependency declaration
    //

    'angular-resource':     ['angular'],
    'angular-route':        ['angular'],
    'angular-bootstrap':    ['angular', 'bootstrap','angular-timepicker'],
    'angular-timepicker':             ['angular', 'bootstrap', 'moment'],
    'angular-timepicker-tpl':       ['angular'],
    'angular-position':               ['angular']
  },
  waitSeconds: 60,
  deps: ['components/startup']
});
