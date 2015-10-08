;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Overview = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.overview;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
