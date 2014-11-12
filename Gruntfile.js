module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Your project's source files
      src: [
        'ui/public/app.js',
        'ui/public/controllers/*.js',
        'ui/public/directives/*.js',
        'ui/public/services/*.js'
      ],
      options: {
        // Your Jasmine spec files
        specs: 'spec/**/*Spec.js',
        // Your spec runner location
        //host: 'http://localhost:63342/cikl/ui/public/SpecRunner.html'
        vendor: [
          'ui/public/js/angular.js',
          'ui/public/js/angular-mocks.js',
          'ui/public/js/angular-animate.js',
          'ui/public/js/angular-resources.js',
          'ui/public/js/angular-route.js',
          'ui/public/js/bootstrap.js',
          'ui/public/js/jquery-2.1.1.js',
          'ui/public/js/moment.js',
          'ui/public/js/ui_bootstrap-tpls-0.11.0.js'
        ]
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};