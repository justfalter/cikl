module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Your project's source files
      src : 'ui/public/**/*js',
      // Your Jasmine spec files
      specs : 'specs/**/*spec.js',
      // Your spec runner location
      host: 'http://localhost:63342/cikl/ui/public/SpecRunner.html'
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-jasmine-runner');
  grunt.loadNpmTasks("grunt-jasmine-bundle");

  // Default task.
  grunt.registerTask('default', 'jasmine');
};