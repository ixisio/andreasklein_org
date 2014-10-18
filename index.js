var express = require('express'),
    app = express(),
    Poet = require('poet');

/**
 * Instantiate and hook Poet into Express.js
 */
 var poet = Poet(app, {
    postsPerPage: 10,
    posts: './content/',
    metaFormat: 'json',
    readMoreLink: function (post) {
       var anchor = '<a href="' + post.url + '" title="Read more of ' + post.title + '">&rsaquo; read more</a>';

       return '<p class="readmore">' + anchor + '</p>';
    },
    routes: {
        '/articles/:post': 'post',
        '/tags/:tag': 'tag'
    }
});

/**
 * Configure Express.js
 */
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.set('views', __dirname + '/views');
app.use(express.compress());
app.use(express.static(__dirname + '/www'), { maxAge: 31557600000 });
app.use(app.router);

/**
 * Initialize poet and clear poet cache
 *
 * @return {void}
 */
poet.init().then(function () {
  poet.clearCache();
});

/**
 * Route Tags | Render article page if exists, otherwise 404
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
            tag: req.params.tag,
            css: req.css
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
        title: 'Imprint',
        css: req.css
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
        posts: posts,
        css: req.css
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
    res.render('index', {
        css: req.css
    });
});

/**
 * Route About
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
        url: req.url,
        css: req.css
    });
});

app.listen(process.env.PORT || 3322);
