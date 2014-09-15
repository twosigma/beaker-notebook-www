;(function(BK, Backbone, Mn) {

  new BK.Router();

  Backbone.history.start({
    pushState: true
  });

})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
