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


## Release History

**1.1.0 / 29.05.2014**
* Update dependencies to latest version
* Add grunt tasks documentation
* Move from SASS to LESS.js for CSS precompiling
* Media-Query outsourcing (experiment with RESS)
* Some minor changes & improvements

**1.0.0 / 11.02.2014**
* update / migrate poet to v1.0.0-rc4
* Fix some a11y issues
* add rss link
* some minor bugfixes & optimizations

**0.12.0 / 06.12.2013**

* Add a new fresh set of Icons
* Clean up SASS Files
* Change the look of `<h2>` Tags
* Visual changes to 404 page
* Update grunt.js to v0.4.2
* Some minor improvements

**0.11.0 / 24.10.2013**

* Frameless figures on phones. Image indentation on larger screen.
* Styling figure captions.
* Refactoring

**0.10.1 / 16.10.2013**

* Enable :hover states only for non-touch devices


**0.10.0 / 16.10.2013**

* Update prettyPrint.js to parse all `@code <pre>` tags, instead of looking for className `.prettyprint`.
* Update 404 Templates
  * Send right 404 Status. With Express Middleware this looks like `res.status(404);`
  * Update 404 Page Texts
* Performace optimization
  * Remove `v7.js` & the whole jQuery library
  * Start prettyPrint() by body.onload event
  * No Email-Address obfuscating anymore

**0.9.2 / 26.09.2013**

* Remove :hover Styles for touch-enabled devices

**0.9.1 / 26.09.2013**

* Remove headings uppercase styling
* Add matchdep for grunt
* add grunt-contrib-open

**0.9.0 / 31.05.2013**

* Make some _type CSS changes
* Article Page Styling
* Remove Maintenance Handler/Mode

**0.8.0**

* Add 404 Page Route & Handler
* New Template/Layout Structure
* Add Category & Tag Routes
* Styling posts, tags

**0.6.0**

* Add RSS Route
* Add RSS Handler

**0.4.0**

* Finish mobile breakpoint styling
* Add Maintenance Screen
* Add Google Analytics

**0.2.0**

* Add Heroku Procfile
* Add Imprint Page Route & Content

**0.1.0**

* Add grunt build script (server, compass, lint, watch)
* finish layout styling overview pages
* add poet
* add express
* add basic routes (pages, posts, cats, tags)
* finish homepage


&copy; 2014 Andreas Klein
