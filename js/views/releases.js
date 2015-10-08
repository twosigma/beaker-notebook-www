;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Releases = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.releases;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
