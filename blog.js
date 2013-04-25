var
  express   = require('express'),
  app       = express(),
  html2text = require( 'html-to-text'),
  poet      = require('poet')( app );

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
  metaFormat   : 'json',
  readMoreLink : function ( post ) {
    var anchor = '<a href="'+post.url+'" title="Read more of '+post.title+'">&rsaquo; read more</a>';
    return '<p class="readmore">' + anchor + '</p>';
  }
}).createPostRoute( '/articles/:post', 'post' )
  .createPageRoute( '/articles/page/:page', 'page' )
  .createTagRoute( '/tags/:tag', 'tag' );

// Poet Initialization
// ---------------------
poet.init();

//function ( locals ) {
//  locals.postList.forEach(function ( post ) {
//    console.log(post.title);
//  });
//}


app.get( '/articles/:article', function ( req, res ) {
  var post = req.poet.getPost( req.params.post );
  if ( post ) {
    res.render( 'post', { post: post });
  } else {
    res.render('4o4.jade', {
      url: req.url
    });
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

// Static Routes
// ----------------
app.get('/imprint', function ( req, res ) {
  res.render( 'page-imprint', {title: 'Imprint'} );
});

app.get('/rss', function ( req, res ) {
  var posts = req.poet.getPosts(0, 5);

  // Since the preview is automatically generated for the examples,
  // it contains markup. Strip out the markup with the html-to-text
  // module. Or you can specify your own specific rss description
  // per post
  posts.forEach(function (post) {
    post.rssDescription = html2text.fromString(post.preview);
  });

  res.render( 'rss', { posts: posts });
});

app.get( '/', function ( req, res ) { res.render( 'index' ); });

app.use(function(req, res) {
  res.render('4o4.jade', {
    url: req.url
  });
});

app.listen( process.env.PORT || config.port );
console.log('Listen on Port ' + (process.env.PORT || config.port) );
