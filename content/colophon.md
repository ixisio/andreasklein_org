{{{
    "title"    : "How and why I create this Blog",
    "tags"     : ["node.js", "rwd"],
    "category" : "",
    "date"     : "05-29-2013",
    "dateText" : "29 May 2013"
}}}

A personal blog, why? Each day in the [office](http://nexum.de), I create *things*, learn *things*, envision *things* that makes a developer's life more attractive, I discover *things* I want to share and …
All these *things* bring my head to explode, if they can't get out, so let kick them out - here they are!

<!--more-->

Creating this simple webpage I write down step by step my decisions, the current state and other interesting findings.

This is not really a technical instruction how you should set up  your infrastructure or find the right tools for your requirements, more a "try to get things running with a crazy different approach". In this case, the "crazy difference" is called node.js and how to build a blogging system on top of it.

## Let's go into some Detail

### 23 March 2013

> Ahoi. I work on a Redesign of my blog.

Yeah, this logging entry is very self-explaning. I did some research finding other interesting blogs and analysed how the structure and design looks like and arrange the necessary content elements of my blog. Here are some of them I really enjoyed to read and that inspired me:

* [somerandomdude.com](http://somerandomdude.com/)
* [deanmao.com](http://www.deanmao.com/)
* [contentsmagazine.com](http://contentsmagazine.com/)
* [zachholman.com](http://zachholman.com/)
* [trentwalton.com](http://trentwalton.com/category/articles)
* [jonykrau.se](http://jonykrau.se/)

### 31 March 2013

> Decision: I will use a serverside javascript environment (Node.js & [express](http://expressjs.com/)) to create this blog logic. I want write my articles in Markdown! I found this: [Poet](http://jsantell.github.com/poet/), looks interesting to me.

<div class="text-image-block">
	<figure class="pull-right">
		<img src="/gfx/poet.png">
	</figure>

Node.js is a very new and interesting serverside javascript environment. The non-blocking I/O event handling makes it very powerful and scalable, also it's pleasant to write javascript at both backend and frontend. I like the concept of writing my articles in clean markdown, store it on github and parse via Node.js. The simple blogging system Poet fulfils all of this requirements.
</div>

- It's well [documented](http://jsantell.github.io/poet/).
- It supports Markdown, Yeah ;-)
- The Source-Code looks very tidy and clean. There are few tests available - Used testing framework is [chai](http://chaijs.com/). This is not my absolute favourite, but anyway.
- The project repository on <a href="https://github.com/jsantell/poet" class="ico-github icon"> github</a> seems to be up to date.

### 04 April 2013

> Today I start writing the first code of this blog with a mobile first approach. I highly recommend the following articles about *mobile first* development.

I have read the one-and-only *mobile first* reading matter by Luke Wroblewski ["Mobile First"](http://www.lukew.com/resources/mobile_first.asp) and I agree with most of this stuff from the perspective of a frontend developer. Let's talk about a bunch of  advantages which a *mobile first* approach brings to a frontend project.

First, you never crush website elements into a smaller layout.
Second, all website elements are visible in each breakpoint, no sucking *hide-on-mobile* development.
You can give a fuck on IE (non media query supported browsers), they displayed in mobile styles.

It is important to understand that we don't create a *mobile* website - we create a website optimized for a mobile device screen. A user with a mobile device has the same objectives to visit our website like a user on stationary PC but in another context - so damn, show them the same website and not less.

- [Mobile First, Luke Wroblewski](http://www.lukew.com/resources/mobile_first.asp)
- [The Many Faces of ‘Mobile First’, Brad Frost](http://bradfrostweb.com/blog/mobile/the-many-faces-of-mobile-first/)
- [Mobile first JavaScript, Jonathan Krause](http://jonykrau.se/posts/mobile-first-javascript")
- [Anatomy of a Mobile-First Responsive Web Design, Brad Frost](http://bradfrostweb.com/blog/mobile/anatomy-of-a-mobile-first-responsive-web-design/")

### 05 April 2013

> Styling and Grid &#10004;, realized with [Compass](http://compass-style.org/) and [Susy](http://susy.oddbird.net/) finished.

In the beginning of 2012, I got in touch with SASS and compass and I will never miss it again. For my own projects, I don't like to choose a boilerplate library like bootstrap, I wanna start from scratch. Susy's approach to a *semantic grid* is very cool and the framework is easy to use.

### 08 April 2013

> This Website is now running in maintenance mode. Powered by Node.js and hosted on heroku. The source code is available on github. Run <code> npm install</code> and then <code>grunt server</code> to check it out on your local machine. Requires Node and Grunt.js.

And finally I need a Node.js hosting environment and I choose [Heroku](https://heroku.com/), because of it's awesome [toolbelt](https://toolbelt.heroku.com/) and it's free.
Furthermore, I write some grunt tasks, to make my life much easier and the development process a bit faster.

The result is this blog you are currently reading. The design is very simple and yes .. very tedious, but I can't do it even better as a developer. Yep, the code is available on <a href="http://github.com/ixisio/andreasklein_org" class="ico-github icon"> github</a>.
