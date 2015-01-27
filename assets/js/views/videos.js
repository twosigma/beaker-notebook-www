;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Videos = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.videos;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
