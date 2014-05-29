{{{
    "title"    : "Win the Fight against the multicontext / multidevice Army",
    "tags"     : ["rwd"],
    "category" : "notes",
    "date"     : "10-16-2013",
    "dateText" : "16 October 2013"
}}}

Here are a few notes on the new reality of the multicontext & multidevice web. The browser should take care, on how to display a website optimized for the current device it is operating on. Right?

<!--more-->

The client-server interface needs to have better and faster communication. "Hey server, my current viewport width is about 320px. Would be great to get some suitable images. Stay tuned, your client".

Reduce a website to the basics: text, media & hyperlinks. Each browser of the world is able to display these things perfectly in every environment, without any additional stylesheet or javascript.
Now you could add further informations to your site ("progressive enhancement"). Change the look of your site to a more beautiful design. Add columns, rows and whitespace to give your content some more readability.
Use CSS3 features to display animations smoother, for example.

The browser handles all of the rest! (2044)

---

The multi- context, device, viewport, density, input-type, bandwidth web<br>

How to solve this? Is it possible to solve it with the current tools/technics? By using Media Queries, [which are a Hack?](http://ianstormtaylor.com/media-queries-are-a-hack/) What about testing? One million different devices multiplied by 5 to 10 different OS's multiplied by 10 to 20 different browsers is unequal to any possible QA strategy.
The browser is the only *Player of the Game* that knows exactly all parameters of the device, the OS, the actual bandwidth, and so on... everything!

<figure>
  <img src="http://www.andreasklein.org/gfx/this-will-be-the-web.png" alt="This will be the Web, Brad Frost">
  <figcaption>
    "This will be the Web", <a href="https://twitter.com/brad_frost">@brad_frost</a>
  </figcaption>
</figure>

There needs to be a new kind of communication between client and server. It should take place long before any website assets could be downloaded (e.g Image Prefetching).

> Several newer browsers have implemented an “image prefetching” feature that allows images to be fetched before parsing the document’s body — [@wilto](https://twitter.com/wilto)

I know, that's not new. But the client couldn't handle [RWD](http://alistapart.com/article/responsive-web-design) alone. This is a multi-player game! Sometimes, there is a connection between them, really? Yeah, and sometimes this is called EDGE!
Why we should take care of the preparation of 5000 different image resources of one motif?  [The picture element](http://www.w3.org/TR/html-picture-element/) bloats the DOM, [Client Hints](https://github.com/igrigorik/http-client-hints) are only possible with javascript these days, and another promising solution is still missing.

---

**UA's should become more intelligent!**<br>
**No more Feature-Detection or Browser-Sniffing!**

---

I wrote down these ideas, after a night of horror :-]
Struggling with desktop-first CSS overwrites (OMG), finding a working *polyfill* for responsive-images which has the fewest disadvantages (No way!) AND get a bandwidth-detection *polyfill* running and respond to the previously collected information (hmmm, failed!)
Okay! Seems as if we are not ready for this new web!? If I say *we*, I mean the browser vendors, which give us the ability to create the web.

> I wrote down these ideas, after a night of horror :-] [@me](http://twitter.com/ixisio)

So guys, please be lenient with me!


## Resources and further Reading

* [Future-Ready Content](http://alistapart.com/article/future-ready-content), Sara Wachter-Boettcher [@sara_ann_marie](https://twitter.com/sara_ann_marie)
* [HTTP Client Hints](http://tools.ietf.org/html/draft-grigorik-http-client-hints-00), Ilya grigorik [@igrigorik](https://twitter.com/igrigorik)
* [A non-responsive approach to building cross-device webapps](http://www.html5rocks.com/en/mobile/cross-device/), Boris Smus [@borismus](https://twitter.com/borismus)
* [Responsive Web Design: Missing the Point](http://bradfrostweb.com/blog/web/responsive-web-design-missing-the-point/), Brad Frost [@brad_frost](https://twitter.com/brad_frost)
* [Future Friendly](http://futurefriend.ly/), Luke Wroblewski [@lukew](https://twitter.com/lukew), et al.

*Credits to [Brad Frost](https://twitter.com/brad_frost) for the awesome Image [[Source](http://bradfrostweb.com/blog/post/this-is-the-web/)]*




