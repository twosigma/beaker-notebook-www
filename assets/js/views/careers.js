;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Careers = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.careers
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
