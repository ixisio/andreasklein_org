{{{
    "title"    : "Win the Fight against the multi -context/-device Armee",
    "tags"     : [],
    "category" : "notes",
    "date"     : "09-26-2013"
}}}

Here a few notes to the new reality of the multi -device/-context web. The Browser should take care, on how to displaying a website optimized for the current device it is operating on. Right?

<!--more-->

Client-Server interface needs to have better and faster communication. "Hey Server, my current viewport width is about 320px. Would be great to get some suitable images. Stay tuned, your Client".
Reduce a website to a fluid layout, colors & font and THE CONTENT. The browser handles all of the rest.

---

The Multi-Context, -Device, -Viewport, -Density, -Input-Type, -Bandwidth Web/Problem<br>

How to solve? Is it possible to solve, with the current tools/technics? By using Media Queries, [which are a Hack?](http://ianstormtaylor.com/media-queries-are-a-hack/) What about Testing? 1mio different devices multiply by ( × ) 5-10 diff. OS multiply by ( × ) 10-20 diff. Browsers is unequal to( === ) any possible QA strategy.
The Browser, ist the only *Player of the Game* that knows exactly all parameters of the device, the OS, the actual bandwidth, and so on... everything!

---

There needs to be a new kind of communication, betweeen client and server. It should take place far before any website assets could be downloaded (e.g Image Prefetching).

> Several newer browsers have implemented an “image prefetching” feature that allows images to be fetched before parsing the document’s body — [@wilto](https://twitter.com/wilto)

I know, that's not new. But the client couldn't handle [RWD](http://alistapart.com/article/responsive-web-design) alone. This is a multi-player game! Sometimes, there is a connection between them, really? Yeah, and somtimes this is called EDGE!
Why we should take care of the preperation of 5000 different image resources of one motiv.  [The picture element](http://www.w3.org/TR/html-picture-element/) bloats the DOM, [Client Hints](https://github.com/igrigorik/http-client-hints) are only possible with javascript these days, and another promising solution is still missing.

---

**UA should become more intelligent!**<br>
**No more Feature-Detection or Browser-Sniffing!**

---

I wrote down these ideas, after a night of horror :-]
Struggling around with desktop-first css overwrites (OMG), finding a working polyfill for responsive-images which has the fewest disadvantages (No way!) AND get a bandwidth-detection polyfill runnning and respond to the previously collected information (hmmm, failed!)
Okay! Seems as if we are not ready for this new web!? If I say *we*, I mean the browser vendors, which give us the ability to create the web.

> I wrote down these ideas, after a night of horror :-] [@me](http://twitter.com/ixisio)

So guys, please be lenient with me!




