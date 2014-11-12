module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Your project's source files
      src: [
        'ui/public/app.js',
        'ui/public/controllers/IntroCtrl.js',
        'ui/public/controllers/MainCtrl.js',
        'ui/public/directives/itemsPerPageSelector.js',
        'ui/public/directives/observableDnsAnswer.js',
        'ui/public/directives/observableFqdn.js',
        'ui/public/directives/observableIpv4.js',
        'ui/public/directives/observableIpv6.js',
        'ui/public/directives/pageSelector.js',
        'ui/public/services/CiklApi.js',
        'ui/public/services/DateTime.js',
        'ui/public/services/Page.js',
        'ui/public/services/UrlBuilder.js'
      ],
      options: {
        // Your Jasmine spec files
        specs: [
          'ui/public/spec/**/*Spec.js',
          'ui/public/spec/*Spec.js'
        ],
        // Your spec runner location
        //host: 'http://localhost:63342/cikl/ui/public/SpecRunner.html'
        vendor: [
          'ui/public/js/jquery-2.1.1.js',
          'ui/public/js/bootstrap.js',
          'ui/public/js/moment.js',
          'ui/public/js/ui_bootstrap-tpls-0.11.0.js',
          'ui/public/js/angular.js',
          'ui/public/js/angular-mocks.js',
          'ui/public/js/angular-animate.js',
          'ui/public/js/angular-resources.js',
          'ui/public/js/angular-route.js'

        ]
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};