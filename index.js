var express   = require('express'),
    device    = require('express-device'),
    app       = express(),
    Poet      = require('poet');

// Enable express-device helper
// https://github.com/rguerreiro/express-device
// ---------------------
app.use(device.capture());
app.use(express.compress());

// Instantiate and hook Poet into express;
// ---------------------
 var poet = Poet(app, {
  postsPerPage: 10,
  posts: './content/',
  metaFormat: 'json',
  readMoreLink : function ( post ) {
     var anchor = '<a href="'+post.url+'" title="Read more of '+post.title+'">&rsaquo; read more</a>';
     return '<p class="readmore">' + anchor + '</p>';
  },
  routes: {
    '/articles/:post': 'post',
    '/tags/:tag': 'tag'
  }
});


// Express Config
// ---------------------

// Prettify HTML
app.set('view engine', 'jade' );
app.set('view options', { layout: false }); // express-device
app.set('views', __dirname + '/views' );
app.use(express.compress());
app.use(express.static( __dirname + '/www' ), { maxAge: 31557600000 });
app.use(app.router );


// Poet Init
// ---------------------
poet.init().then(function () {
  poet.clearCache();
});


// Poet Routes
// ---------------------
poet.addRoute( '/articles/:post', function ( req, res ) {
  var post = poet.helpers.getPost( req.params.post );

  if ( post ) {
    res.render( 'post', {
      post: post,
      device: req.device.type,
      css: req.css
    });
  } else {
    res.status(404);
    res.render('4o4.jade', {
      url: req.url,
      device: req.device.type,
      css: req.css
    });
  }
});

poet.addRoute( '/tag/:tag', function ( req, res ) {
  var taggedPosts = poet.helpers.postsWithTag( req.params.tag );
  if ( taggedPosts.length ) {
    res.render( 'tag', {
      posts : taggedPosts,
      tag : req.params.tag,
      device: req.device.type,
      css: req.css
    });
  }
});


// Static Routes
// ----------------
app.get('/legal', function ( req, res ) {
  res.render( 'page-legal', {
    title: 'Imprint',
    device: req.device.type,
    css: req.css
  });
});

app.get('/rss', function (req, res) {
  var posts = poet.helpers.getPosts(0, 5);
  res.setHeader('Content-Type', 'application/rss+xml');
  res.render('rss', {
    posts: posts,
    device: req.device.type,
    css: req.css
  });
});

app.get( '/', function ( req, res ) {
  console.log( req.device.type);

  res.render( 'index', {
    device: req.device.type,
    css: req.css
  });
});

// app.get( '/about', function ( req, res ) {
//   res.render( 'page-about', {
//     title: 'About me',
//     device: req.device.type,
//     css: req.css
//   });
// });
app.use(function(req, res) {
  res.status(404);
  res.render('4o4.jade', {
    url: req.url,
    device: req.device.type,
    css: req.css
  });
});

app.listen( process.env.PORT || 3322 );
console.log('Listen on Port ' + (process.env.PORT || 3322) );
