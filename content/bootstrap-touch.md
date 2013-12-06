{{{
    "title"    : "Bootstrap Touch",
    "tags"     : ["bootstrap", "touch"],
    "category" : "",
    "date"     : "09-10-2013",
    "dateText" : "9 October 2013"
}}}

One of [Twitter Bootstrap's](http://getbootstrap.com/) largest gabs is, it's not optimized for touch-enabled devices.
Yeah I mean, it's not optimized for these device-types, but it works *okay*. But sometimes, we as developers have to enlarge the functionality of a BS component. You all know, this is *pain-in-the-ass*.

<!--more-->

For example, a UX expert wants to close the popover component by clicking on the whole document, instead of clicking on the link target again. You add some lines of code to `popover.js`, your UX expert is enormously happy, but the update capability of that component is no longer available. That sucks monstrous!

The next example is the foundation and the idea of a framework, that is build on top of BS, and I called it **Bootstrap-Touch**.

## The Aim of Bootstrap-Touch
BS-Touch do not change the original BS Library sourcecode. It's a layer for touch interaction and visual improvements, that doesn't work as a standalone framework.
The framework has a *build-in* touch detection and invoke its functionality only on touch or MSPointer enabled devices, like the iPhone or Nokia WindowsPhone.
It's not a part of BS, it's an extension that works hand-in-hand with BS.

## How it works
You have to load two additional files into your existing BS project.

```javascript
bootstrap-touch.js
bootstrap-touch.css
```

If the plugin detects a touch-enabled device, it auto-overwrites the default component behavior and styling.
If you are familiar with [Grunt.js - the JavaScript Task Runner](http://gruntjs.com/), you can also use a modified BS build process to integrate/*concat* BS-Touch directly into your bootstrap files (future Todo).

## Project State
Currently, I work on a technical concept of such a framework. I'm trying to find an answer, on how this could be realized.
Last Week, I released a early prototype of one BS component for touch-enabled devices. The project sourcecode is available on [Github](https://github.com/ixisio/bootstrap-touch-carousel). See the live demo below.

<a href="https://github.com/ixisio/bootstrap-touch-carousel" target="_blank" class="icon-github icon"> Bootstrap TouchCarousel</a>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="item active">
            <img src="data:image/png;base64," data-src="holder.js/900x500/auto/#7cbf00:#fff/text: " alt="First slide">
        </div>
        <div class="item">
            <img src="data:image/png;base64," data-src="holder.js/900x500/auto/#bf0000:#fff/text: " alt="Second     slide">
        </div>
        <div class="item">
            <img src="data:image/png;base64," data-src="holder.js/900x500/auto/#00a2bf:#fff/text: " alt="Third slide">
        </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
</div>

<link rel="stylesheet" type="text/css" href="/demos/bootstrap-touch-carousel/vendor/bootstrap/dist/css/bootstrap.css">
<link rel="stylesheet" href="/demos/bootstrap-touch-carousel/dist/css/bootstrap-touch-carousel.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="/demos/bootstrap-touch-carousel/vendor/bootstrap/dist/js/bootstrap.js"></script>
<script src="/demos/bootstrap-touch-carousel/vendor/bootstrap/assets/js/holder.js"></script>
<script src="/demos/bootstrap-touch-carousel/dist/js/bootstrap-touch-carousel.js"></script>



## Next Steps
If you are interested in this project, please help me to find some cool ideas on how to realize something like this, [fork](https://github.com/ixisio/bootstrap-touch) the project on Github or just have a talk on [twitter](http://twitter.com/ixisio).
In the following list, you can find a few ideas, bugs and improvements I've already collected. Feel free to complete the list..

<a href="https://github.com/ixisio/bootstrap-touch/issues" class="icon-paper icon" target="_blank"> Issue Tracker on Github</a>


