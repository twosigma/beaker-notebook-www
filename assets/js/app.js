;(function(BK, Backbone, Mn) {

  new BK.Router();

  Backbone.history.start({
    pushState: true,
    root: 'beaker-notebook-www/'
  });

})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
