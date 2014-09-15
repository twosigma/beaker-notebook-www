;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.GettingStarted = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates['getting-started']
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
