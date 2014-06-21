module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      scripts: {
        files: ["**/*.html"],
        tasks: ["reload"]
      }
      ,all: {
      options: { livereload: true },
      files: ['**/*.html']
    },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  grunt.registerTask("reload", "reload Safari on OS X",
    function() {
      require("child_process").exec("osascript " +
          "-e 'tell application \"Safari\" " +
            "to tell the current tab of its first window' " +
          "-e 'do JavaScript \"window.location.reload(true)\"' " +
          "-e 'end tell'");
  });


  /*
  watch: {
    files: ["*"],
    tasks: "less concat reload"
  }*/

};