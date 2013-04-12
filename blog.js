var
  express = require('express'),
  app     = express(),
  poet    = require('poet')( app );

// Global Configuration
// --------------------------
var
    config = {
      port: process.env.PORT || 3322
    };

// Express Config
// ---------------------
app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/www' ));
app.use( poet.middleware() );
app.use( app.router );

// Poet Config
// ---------------------
poet.set({
  postsPerPage : 10,
  posts        : './content/',
  metaFormat   : 'json'
}).createPostRoute( '/articles/:post', 'post' )
  .createPageRoute( '/articles/page/:page', 'page' )
  .createTagRoute( '/tags/:tag', 'tag' );

// Poet Initialization
// ---------------------
poet.init(function ( locals ) {
  locals.postList.forEach(function ( post ) {
    console.log(post.title);
  });
});

app.get( '/articles/:article', function ( req, res ) {
  var post = req.poet.getPost( req.params.post );
  if ( post ) {
    res.render( 'post', { post: post });
  } else {
    res.send(404);
  }
});

app.get( '/tag/:tag', function ( req, res ) {
  var taggedPosts = req.poet.postsWithTag( req.params.tag );
  if ( taggedPosts.length ) {
    res.render( 'tag', {
      posts : taggedPosts,
      tag : req.params.tag
    });
  }
});

app.get( '/articles/page/:page', function ( req, res ) {
  var page = req.params.page,
      lastPost = page * 3;

  res.render( 'page', {
    posts : req.poet.getPosts( lastPost - 3, lastPost ),
    page : page
  });
});

app.get('/imprint', function ( req, res ) {
  res.render( 'page-imprint' );
});

app.get( '/', function ( req, res ) { res.render( 'index' ); });

app.use(function(req, res) {
  res.render('4o4.jade', {
    url: req.url
  });
});

app.listen( process.env.PORT || config.port );
console.log('Listen on Port ' + (process.env.PORT || config.port) );
