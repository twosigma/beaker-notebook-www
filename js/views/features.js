;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Features = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.features;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
