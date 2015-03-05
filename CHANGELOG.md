# Changelog

## HEAD

## v1.3.1 / 2015-03-05
* Remove CSS IDs and replace with classes
* Some minor CSS Refactoring
* Move to REMs instead of EMs
* Update Copyright date to 2015
* Update meta title
* Add banner option for CSS files to grunt-contrib-less

## v1.3.0 / 2014-10-20
* Move contents directory to separate git repo and fetch it as git-submodule: https://github.com/ixisio/andreasklein_org-contents
* Update npm dependencies to latest version
* Add JavaScript Code Style Checker (JSCS)
* Refactor Code Style
* Clean up some less styles indentation
* Add social profile link rel to <head>
* Add indieweb Authorization endpoints
* Remove express-device
* Rename main to core.css
* Remove mobile avatar image
* Remove Open-Sanse true-type font format
* Remove icons eot format and remove .eot file
* Remove underscore.js from npm depedencies
* Migrate jade to v1.7.x
* Migrate express to v4.x
* Remove mobile stylesheet and text-image-block elements

## v1.2.0 / 2014-06-19
* Performance optimization
* Update Express Caching
* Desktop CSS out sourcing
* Update about-me section

## v1.1.2 / 2014-05-30
* Performance optimization

## v1.1.1 / 2014-05-30
* Patch: Tablets up to 1024 Pixels has no styling! (fixed)

## v1.1.0 / 2014-05-29
* Update dependencies to latest version
* Add grunt tasks documentation
* Move from SASS to LESS.js for CSS precompiling
* Media-Query outsourcing (experiment with RESS)
* Some minor changes & improvements

## v1.0.0 / 2014-02-11
* update / migrate poet to v1.0.0-rc4
* Fix some a11y issues
* add rss link
* some minor bugfixes & optimizations

## v0.12.0 / 2013-12-06
* Add a new fresh set of Icons
* Clean up SASS Files
* Change the look of `<h2>` Tags
* Visual changes to 404 page
* Update grunt.js to v0.4.2
* Some minor improvements

## v0.11.0 / 2013-10-24
* Frameless figures on phones. Image indentation on larger screen.
* Styling figure captions.
* Refactoring

## v0.10.1 / 2013-10-16
* Enable :hover states only for non-touch devices


## v0.10.0 / 2013-10-16
* Update prettyPrint.js to parse all `@code <pre>` tags, instead of looking for className `.prettyprint`.
* Update 404 Templates
  * Send right 404 Status. With Express Middleware this looks like `res.status(404);`
  * Update 404 Page Texts
* Performace optimization
  * Remove `v7.js` & the whole jQuery library
  * Start prettyPrint() by body.onload event
  * No Email-Address obfuscating anymore

## v0.9.2 / 2013-09-26
* Remove :hover Styles for touch-enabled devices

## v0.9.1 / 2013-09-26
* Remove headings uppercase styling
* Add matchdep for grunt
* add grunt-contrib-open

## v0.9.0 / 2013-05-31
* Make some _type CSS changes
* Article Page Styling
* Remove Maintenance Handler/Mode

## v0.8.0
* Add 404 Page Route & Handler
* New Template/Layout Structure
* Add Category & Tag Routes
* Styling posts, tags

## v0.6.0
* Add RSS Route
* Add RSS Handler

## v0.4.0
* Finish mobile breakpoint styling
* Add Maintenance Screen
* Add Google Analytics

## v0.2.0
* Add Heroku Procfile
* Add Imprint Page Route & Content

## v0.1.0
* Add grunt build script (server, compass, lint, watch)
* finish layout styling overview pages
* add poet
* add express
* add basic routes (pages, posts, cats, tags)
* finish homepage
