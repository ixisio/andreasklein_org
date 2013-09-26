/*!
 * andreasklein(dot)org Gruntfile
 * http://andreasklein.org
 * @author Andreas Klein (ixisio)
 */

// Livereload and connect variables
// --------------------------
var LIVERELOAD_PORT = 35729,
    DEV_SERVER_PORT = 3322,
    lrSnippet = require('connect-livereload')({
      port: LIVERELOAD_PORT
    }),
    mountFolder = function (connect, dir) {
      return connect.static(require('path').resolve(dir));
    };


module.exports = function( grunt ) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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

    // Server/Watch/Connect-Livereload Configuration
    // --------------------------
    watch: {
      src: {
        files: ['www/**/*.js', 'www/**/*.scss', '!www/scripts/vendor/*.js'],
        tasks: ['assets']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          'views/*.md',
          'content/**/*.jade',
          'www/{,*/}*.{md,png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['assets']
      }
    },

    connect: {
      options: {
        port: DEV_SERVER_PORT,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [lrSnippet, mountFolder(connect, '.')];
          }
        }
      }
    },


    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
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


  // Load Tasks from node_modules (npmTasks) dynamically
  // --------------------------
  grunt.loadNpmTasks('connect-livereload');


  // Register Tasks
  // (1) build: Build for Prod enviroment
  // (2) assets : Lint & build static assets like (SASS Files)
  // (2) s (server)
  // (3) default (run `server` task)
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

  grunt.registerTask('s', function() {
    // Run node as child process
    grunt.util.spawn({
      cmd: 'node',
      args: ['blog.js']
    });

    grunt.task.run('assets');
    // grunt.task.run('connect:livereload');
    grunt.task.run('open');
    grunt.task.run('watch:src');
  });

  grunt.registerTask('default', ['s']);

};
