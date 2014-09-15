;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.About = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.about;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
