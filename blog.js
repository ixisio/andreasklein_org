
var express   = require('express'),
    app       = express(),
    Poet      = require('poet');

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
app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/www' ));
app.use( app.router );


// Poet Init
// ---------------------
poet.init().then(function () {
  poet.clearCache();
});


// Poet Routes
// ---------------------
poet.addRoute( '/articles/:article', function ( req, res ) {
  var post = poet.helpers.getPost( req.params.post );
  if ( post ) {
    res.render( 'post', { post: post });
  } else {
    res.status(404);
    res.render('4o4.jade', {
      url: req.url
    });
  }
});

poet.addRoute( '/tag/:tag', function ( req, res ) {
  var taggedPosts = poet.helpers.postsWithTag( req.params.tag );
  if ( taggedPosts.length ) {
    res.render( 'tag', {
      posts : taggedPosts,
      tag : req.params.tag
    });
  }
});


// Static Routes
// ----------------
app.get('/imprint', function ( req, res ) {
  res.render( 'page-imprint', {title: 'Imprint'} );
});

app.get('/rss', function (req, res) {
  var posts = poet.helpers.getPosts(0, 5);
  res.setHeader('Content-Type', 'application/rss+xml');
  res.render('rss', { posts: posts });
});

app.get( '/', function ( req, res ) { res.render( 'index' ); });

app.use(function(req, res) {
  res.status(404);
  res.render('4o4.jade', {
    url: req.url
  });
});

app.listen( process.env.PORT || 3322 );
console.log('Listen on Port ' + (process.env.PORT || 3322) );
