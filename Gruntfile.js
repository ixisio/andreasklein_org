/*!
 * Gruntfile.js
 * @author Andreas Klein (ixisio)
 */


module.exports = function(grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    globals: {
      DEV_SERVER_PORT: 3322
    },
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
    less: {
      main: {
        options: {
          compress: false,
          report: false, // 'min'
          dumpLineNumbers: 'comments'
        },
        files: {
          'www/styles/main.css': 'www/styles/less/main.less',
          'www/styles/views/desktop.css': 'www/styles/less/views/desktop.less'
        }
      }
    },
    autoprefixer: {
        options: {
          browsers: ['last 1 version'],
          report: 'min'
        },
        css: {
          src: ['www/styles/**/*.css']
        }
    },
    watch: {
      less: {
        files: ['www/styles/**/*.less'],
        tasks: ['less', 'autoprefixer']
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= globals.DEV_SERVER_PORT %>'
      }
    },

    // Prod-Build Config
    // --------------------------
    cssmin: {
      options: {
        // banner: '/*! Stylsheets <%= pkg.name %> - v<%= pkg.version %> - ' +
        //   '<%= grunt.template.today("yyyy-mm-dd") %> - <%= pkg.author.url %> */',
        report: 'min'
      },
      dist: {
        expand: true,
        cwd: 'www/styles/',
        src: ['**/*.css'],
        dest: 'www/styles/'
      }
    }
  });


  // Register Tasks
  // (1) 'prod': Build for Prod enviroment
  // (2) 'assets' : Lint & build static assets like (SASS Files)
  // (3) 'dev' Development Workflow
  // (4) default (run `dev` task)
  // --------------------------
  grunt.registerTask('prod', [
    'jshint:all',
    'less',
    'autoprefixer',
    'cssmin'
  ]);
  grunt.registerTask('assets', [
    'jshint:all',
    'less',
    'autoprefixer'
  ]);
  grunt.registerTask('dev', function() {
    // Run node as child process
    grunt.util.spawn({
      cmd: 'node',
      args: ['blog.js']
    });

    grunt.task.run('assets');
    grunt.task.run('open');
    grunt.task.run('watch');
  });
  grunt.registerTask('default', ['dev']);
};
