{{{
    "title"    : "Blog Development Logging",
    "tags"     : ["node.js", "compass", "express", "Mobile-First"],
    "category" : "",
    "date"     : "04-24-2013"
}}}

I've written down each step of creating this simple webpage. Including all of my decisions, the current progress & other interesting findings I noticed on the way to how it looks now.

This is not really a technical suggestion how you should set up  your infrastructure or find the right tools for your requirements, more a "try to get things running with a crazy different approach". In this case, the "crazy difference" is called Node.js and how to build a blogging system with it.

<!--more-->

## log entries

<div class="group text-image-block"><div class="image">
<img src="/gfx/poet.png" alt="Poet -- node.js blogging platform" />
</div>
  <div class="txt">I've checked out [*Poet -- node.js blogging platform*](http://jsantell.github.io/poet/) and it seems that it meets my requirements.

- It's well [documentated](http://jsantell.github.io/poet/).
- It supports Markdown, Yeah ;-)
- The Source-Code looks very tidy and clean. There are few tests available. Used testing framework is [chai](http://chaijs.com/). This is not my fav, but anyway.
-  The projects repository on <a href="https://github.com/jsantell/poet" class="ico-github icon"></a> is up to date.

I will give it a try!
  <span class="date"> 10 April 2013</span></div></div>


This Website is now running in maintenance mode. Powered by [Node.js](http://nodejs.org/) and hosted on [heroku](https://www.heroku.com/). The source code is available on <a href="http://github.com/ixisio/andreasklein_org" class="ico-github icon">github</a>. Run <code> npm install</code> and then <code>grunt server</code> to check it out on your local machine. Requires Node and [Grunt.js](http://gruntjs.com/)</a>.
  <span class="date">05 April 2013</span>


Styling and Grid &#10004;, realized with [Compass](http://compass-style.org/) and [Susy](http://susy.oddbird.net/)
  <span class="date">05 April 2013</span>


Today I start wrinting the first code of this blog with a mobile first approach. I highly recommend the following articles about mobile first development.

* [Mobile First](http://www.lukew.com/resources/mobile_first.asp), Luke Wroblewski
* [The Many Faces of ‘Mobile First’](http://bradfrostweb.com/blog/mobile/the-many-faces-of-mobile-first/), Brad Frost
* [Mobile first JavaScript](http://jonykrau.se/posts/mobile-first-javascript), Jonathan Krause
* [Anatomy of a Mobile-First Responsive Web Design](http://bradfrostweb.com/blog/mobile/anatomy-of-a-mobile-first-responsive-web-design/), Brad Frost
  <span class="date">04 April 2013</span>


**Decision:** I will use a serverside javascript enviroment (**Node.js** & [express](http://expressjs.com/)) to create this blog logic. I want write my articles in **Markdown**! I found this: [Poet](http://jsantell.github.com/poet/), looks interesting to me.
  <span class="date">31 March 2013</span>


**Ahoi.** I work on a Redesign of my blog.
  <span class="date">23 March 2013</span>
