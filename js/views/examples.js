;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Examples = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.examples;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
