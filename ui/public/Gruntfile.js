module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Your project's source files
      src: [
        'app.js',
        'controllers/*.js',
        'directives/*.js',
        'services/*.js'
      ],
      options: {
        // Your Jasmine spec files
        specs: 'spec/**/*Spec.js',
        // Your spec runner location
        //host: 'http://localhost:63342/cikl/ui/public/SpecRunner.html'
        vendor: [
          'js/angular.js',
          'js/angular-mocks.js',
          'js/angular-animate.js',
          'js/angular-resources.js',
          'js/angular-route.js',
          'js/bootstrap.js',
          'js/jquery-2.1.1.js',
          'js/moment.js',
          'js/ui_bootstrap-tpls-0.11.0.js'
        ]
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};