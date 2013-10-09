/*! V7 JavaScripts || mail [at] andreasklein.org !**/


(function(win) {


  var defaults= {};

  var V7 = function() {

    // Touch-Enabled Device detection
    if (!("ontouchstart" in window || navigator.msMaxTouchPoints)) {
      $('html').addClass('non-touch')
    }

    // Replace Mailing Address
    $('[data-mailto]').each(function() {
      $(this).attr('href', 'mailto:' + $(this).data('mailto'));
    });

    // Initialize code beautifier
    prettyPrint();

    return this;
  };

  $(function() { new V7(); });

}).call(this);

