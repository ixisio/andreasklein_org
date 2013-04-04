/*! V7 JavaScripts || mail [at] andreasklein.org !**/


(function(win) {


  var defaults= {};

  var V7 = function() {

      this.pseudoAnchors();

      return this;
  };

  V7.prototype = {
      constructor: V7,

      pseudoAnchors: function() {
        $('[data-href]').on('click', function() {
          window.location.href = $(this).data('href');
        });
      }
  }

  $(function() { new V7(); });



}).call(this);

