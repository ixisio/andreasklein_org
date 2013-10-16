## andreasklein_org

**.. My personal space for article, notes & ideas on the web. Written in pure JavaScript powered by [Node.js](http://nodejs.org/), [Grunt.js](http://gruntjs.com/) & [Express](http://expressjs.com/)**


### Release History

**0.10.1**

* Enable :hover states only for non-touch devices


**0.10.0**

* Update prettyPrint.js to parse all `@code <pre>` tags, instead of looking for className `.prettyprint`.
* Update 404 Templates
  * Send right 404 Status. With Express Middleware this looks like `res.status(404);
  * Update 404 Page Texts
* Performace optimization
  * Remove `v7.js` & the whole jQuery library
  * Start prettyPrint() by body.onload event
  * No Email-Address obfuscating anymore

**0.9.2**

* Remove :hover Styles for touch-enabled devices

**0.9.1**

* Remove headings uppercase styling
* Add matchdep for grunt
* add grunt-contrib-open

**0.9.0**

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
