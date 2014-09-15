;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Community = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.community;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
