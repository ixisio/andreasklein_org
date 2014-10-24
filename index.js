var express = require('express'),
    app = express(),
    Poet = require('poet');

/**
 * Instantiate and hook Poet into Express.js
 */
 var poet = Poet(app, {
    postsPerPage: 10,
    posts: './content/posts/',
    notes: './content/notes/',
    metaFormat: 'yaml',
    readMoreLink: function (post) {
       var anchor = '<a href="' + post.url + '" title="Read more of ' + post.title + '">&rsaquo; read more</a>';

       return '<p class="readmore">' + anchor + '</p>';
    },
    routes: {
        '/articles/:post': 'post',
        '/notes/:note': 'note',
        '/tags/:tag': 'tag'
    }
});

/**
 * Configure Express.js
 */
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/www'));

/**
 * Initialize poet and clear poet cache
 *
 * @return {void}
 */
poet.init().then(function () {
  poet.clearCache();
});

/**
 * Route Posts | Render article page if exists, otherwise 404
 *
 * @param  {Object} req Poet request parameter
 * @param  {Object} res Poet response parameter
 * @return {void}
 */
poet.addRoute('/articles/:post', function (req, res) {
  var post = poet.helpers.getPost(req.params.post);

  if (post) {
      res.render('post', {
          post: post,
          css: req.css
      });
  } else {
      res.status(404);
      res.render('4o4.jade', {
          url: req.url,
          css: req.css
      });
  }
});

/**
 * Route Note | Render note page if exists, otherwise 404
 *
 * @param  {Object} req Poet request parameter
 * @param  {Object} res Poet response parameter
 * @return {void}
 */
poet.addRoute('/notes/:note', function (req, res) {
  var note = poet.helpers.getPost(req.params.post);

  if (post) {
      res.render('post', {
          post: post
      });
  } else {
      res.status(404);
      res.render('4o4.jade', {
          url: req.url
      });
  }
});

/**
 * Route Tags | Render page with tagged posts
 *
 * @param  {Object} req Poet request parameter
 * @param  {Object} res Poet response parameter
 * @return {void}
 */
poet.addRoute('/tag/:tag', function (req, res) {
    var taggedPosts = poet.helpers.postsWithTag(req.params.tag);

    if (taggedPosts.length) {
        res.render('tag', {
            posts: taggedPosts,
            tag: req.params.tag
        });
    }
});

/**
 * Route Legal | Render imprint page
 *
 * @param  {Object} req   Express request parameter
 * @param  {Object} res   Express response parameter
 * @return {void}
 */
app.get('/legal', function (req, res) {
    res.render('page-legal', {
        title: 'Imprint'
    });
});

/**
 * Route RSS | Render 5 latest posts
 *
 * @param  {Object} req   Express request parameter
 * @param  {Object} res   Express response parameter
 * @return {void}
 */
app.get('/rss', function (req, res) {
    var posts = poet.helpers.getPosts(0, 5);

    res.setHeader('Content-Type', 'application/rss+xml');
    res.render('rss', {
        posts: posts
    });
});

/**
 * Route Startpage
 *
 * @param  {Object} req   Express request parameter
 * @param  {Object} res   Express response parameter
 * @return {void}
 */
app.get('/', function (req, res) {
    res.render('index');
});

/**
 * Route About
 *
 * CURRENTLY NOT YET ENABLED !!
 *
 * @param  {Object} req   Express request parameter
 * @param  {Object} res   Express response parameter
 * @return {void}
 */
// app.get( '/about', function (req, res) {
//   res.render( 'page-about', {
//     title: 'About me',
//     css: req.css
//   });
// });
//

/**
 * Route 404
 *
 * @param  {Object} req   Express request parameter
 * @param  {Object} res   Express response parameter
 * @return {void}
 */
app.use(function (req, res) {
    res.status(404);
    res.render('4o4.jade', {
        url: req.url
    });
});

app.listen(process.env.PORT || 3322);
