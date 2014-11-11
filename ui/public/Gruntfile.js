module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Your project's source files
      src : [ 
        'app.js',
        'controllers/*.js', 
        'directives/*.js', 
        'services/*.js'
      ],
      options : {
        // Your Jasmine spec files
        specs : 'spec/**/*Spec.js',
        // Your spec runner location
        //host: 'http://localhost:63342/cikl/ui/public/SpecRunner.html'
        vendor : [
          'js/angular.js',
          'js/jquery-2.1.1.js',
          'js/**/*.js'
        ]
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};
