module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
    connect: {
      server: {
        options: {
          port: 8080,
          base: ".",
          keepalive: true
        }
      }
    },

    watch: {
      scripts: {
        files: ["*.js", "*.json"],
        options: {
          livereload: true
        }
      },
      markup: {
        files: ["*.html"],
        options: {
          livereload: true
        }
      },
      stylesheets: {
        files: ["*.css"],
        options: {
          livereload: true
        }
      }
    },

    "bower-install-simple": {
      options: {
        color: true,
        directory: "bower_components"
      },
      prod: {
        options: {
          production: true
        }
      }
    },

    yuidoc: {
      main: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: 'src',
          outdir: 'doc'
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-bower-install-simple");
  grunt.loadNpmTasks("grunt-contrib-yuidoc");

  // start a http server and serve at folder "test"
  grunt.registerTask("default", ["bower-install-simple", "yuidoc", "connect", "watch"]);
  grunt.registerTask("run", ["connect", "watch"]);
};