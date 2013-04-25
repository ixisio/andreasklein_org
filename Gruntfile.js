var
    path = require('path'),
    lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function( grunt ) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Project Configuration
    // --------------------------
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: ['Gruntfile.js'],
      all: ['Gruntfile.js', 'www/*.js', 'blog.js'],
      test: ['test/**/*.js']
    },

    compass: {
      dist: {
        options: {
          basePath: 'www',
          require: 'susy',
          cssDir: 'styles',
          sassDir: 'styles',
          imagesDir: 'gfx',
          fontsDir: 'styles/fonts',
          javascriptsDir: 'scripts',
          force: true,
          outputStyle: 'expanded'
        }
      }
    },

    // Server/Watch Configuration
    // --------------------------
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
        options: {
          nocase: true
        }
      },
      src: {
        files: ['www/**/*.js', 'www/**/*.scss', '!www/scripts/vendor/*.js'],
        tasks: ['assets'],
        options: {
          nospawn: true
        }
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test']
      }
    },

    // connect: {
    //   livereload: {
    //     options: {
    //       port: 3322,
    //       middleware: function(connect, options) {
    //         return [lrSnippet, folderMount(connect, './www')];
    //       }
    //     }
    //   }
    // },

    shell: {
      view: {
        command: 'open http://localhost:3322'
      }
    },


    // Build Configuration
    // --------------------------
    cssmin: {
      options: {
        banner: '/*! Stylsheets <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> - <%= pkg.author.url %> */'
      },
      dist: {
        files: {
          'www/styles/main.css': ['www/styles/*.css']
        }
      }
    },

    concat: {
      dist: ''
    },

    min: {
      dist: ''
    }
  });


  // Load Tasks from node_modules (npmTasks)
  // --------------------------
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Register Tasks
  // (1) build: Build for Prod enviroment
  // (2) assets : Lint & build static assets like (SASS Files)
  // (2) server
  // (3) default
  // --------------------------
  grunt.registerTask('build', [
    'jshint:all',
    'compass',
    'cssmin'
  ]);

  grunt.registerTask('assets', [
    'jshint:all',
    'compass'
  ]);

  grunt.registerTask('server', function() {
    // Run node as child process
    grunt.util.spawn({
      cmd: 'node',
      args: ['blog.js']
    });

    grunt.task.run('jshint:all');
    grunt.task.run('compass');
    grunt.task.run('shell:view');
    grunt.task.run('watch:src');
  });

  grunt.registerTask('default', ['server']);

};
