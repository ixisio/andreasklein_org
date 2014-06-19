# andreasklein_org

**.. My personal space for article, notes & ideas on the web. Written in pure Javascript powered by [Node.js](http://nodejs.org/), [Grunt.js](http://gruntjs.com/) & [Express](http://expressjs.com/)**


## Setup Development Enviroment
### System Requirements

* node.js (>= v0.10.x)
* git (>= 1.7.x)

### Registered Grunt Tasks

__1) `default`__<br>
Default Task used for dev workflow. Runs `$ grunt dev` Task.

__2) `dev`__<br>
Development Workflow

* `jshint` Javascript Code-linting
* `less` Compiles LESS files
* `autoprefixer` Completes CSS vendor prefixes automatically.
* `concat` Concatenating Javascript files into one single file.
* `connect` Starts Node.js Webserver.
* `open` Opens the dev environment in Google Chrome
* `watch` Watches your working dir and live-reloads the browser window after making changes

__3) `prod`__<br>
Runs a distribution build.
* Includes all `dev` tasks, expect `connect` & `watch` tasks
* `uglify` Javascript minifcation + banner
* `cssmin` CSS minification + banner

__4) `bump`__<br>
Bump package version, create tag, commit, push...
Uses [grunt-bump](https://github.com/vojtajina/grunt-bump) task.

* `$ grunt bump:patch` // 0.0.1 to 0.0.2
* `$ grunt bump:minor` // 0.1.0 to 0.2.0
* `$ grunt bump:major` // 0.x to 1.0.0
* `$ grunt bump:build` // 1.0.0 to 1.0.0-1

&copy; 2014 Andreas Klein
