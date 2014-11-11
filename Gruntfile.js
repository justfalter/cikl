jasmine: {
  components: {
    src: [
      'ui/public/controllers/*js',
      'ui/public/directives/*js',
      'ui/public/services/*js'
    ],
    options: {
      specs: [
        'ui/public/spec/controllers/*Spec.js',
        'ui/public/spec/directives/*Spec.js',
        'ui/public/spec/services/*Spec.js'
      ],
      keepRunner : true,
      //helpers: 'test/spec/*.js'
    }
  }

grunt.registerTask('travis', [
  'jasmine'
]);