/**
 * Gruntfile
 *
 * @author Andreas Klein
 * @date 2013-05-26
 */
module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    globals: {
        DEV_SERVER_PORT: 3322
    },
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %>- ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */',
    pkg: grunt.file.readJSON('package.json'),
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
        src: ['*.js', 'www/scripts/*.js']
    },
    jscs: {
        src: '<%= jshint.src %>',
        options: {
            config: '.jscsrc'
        }
    },
    less: {
        main: {
            options: {
                compress: false,
                report: false,
                dumpLineNumbers: 'comments',
                banner: '<%= banner %>'
            },
            files: {
                'www/styles/core.css': 'www/styles/less/core.less'
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
        },
        js: {
            files: ['*.js', 'www/scripts/*.js'],
            tasks: ['jshint', 'jscs']
        }
    },
    open: {
        server: {
            path: 'http://localhost:<%= globals.DEV_SERVER_PORT %>'
        }
    },
    cssmin: {
        options: {
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

  /**
   * Register Tasks:
   *
   *   (1) 'prod': Build for Prod enviroment
   *   (2) 'assets' : Lint & build static assets like (SASS Files)
   *   (3) 'dev' Development Workflow
   *   (4) default (run `dev` task)
   */
  grunt.registerTask('prod', [
      'jshint',
      'jscs',
      'less',
      'autoprefixer',
      'cssmin'
  ]);

  grunt.registerTask('assets', [
      'jshint',
      'jscs',
      'autoprefixer'
  ]);

  grunt.registerTask('node-server', function () {
      grunt.util.spawn({
          cmd: 'node',
          args: ['index.js']
      });
  });

  grunt.registerTask('dev', function () {
      grunt.task.run('node-server');
      grunt.task.run('assets');
      grunt.task.run('open');
      grunt.task.run('watch');
  });

  grunt.registerTask('default', ['dev']);
};
