{{{
    "title"    : "JavaScript Selector Performance",
    "tags"     : ["javascript", "performance"],
    "category" : "",
    "date"     : "06-01-2013",
    "draft": true
}}}

Last week, we had a discussion in our agency about JavaScript selector usage *best practises* and their impact on performance and scalability.
In this article I will talk about these *best practises* and prove these by means of selected tests.

## JavaScripts native DOMElement Selector methods

* getElementsByClassName()
* getElementsByTagName()
* getElementById()
* querySelectorAll()
* querySelector()

The area of ​​use of these methods is self-explanatory by the methods name.

### getElementsByTagName vs querySelectorAll

http://www.nczonline.net/blog/2010/09/28/why-is-getelementsbytagname-faster-that-queryselectorall/

## Class only vs tag with class selectors

http://jsperf.com/jquery-combined-selectors
http://jsperf.com/jq-data-vs-class/21
http://jsperf.com/sizzle-internals

Uses querySelectorAll() and not as expected combined with getElementsByClassName().

Fazit: Avoid the usage of tagName/className combined selectors whenever possible. The className only selector is 4 times faster.


## Selector context

http://jsperf.com/selector-context

Fazit: Use ```context.find(selector)``` wherever you can. It's twice as fast as ```$(selector, context)```.

## Selector Caching & Chaining


