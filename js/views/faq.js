;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Faq = Mn.LayoutView.extend({
    getTemplate: function() {
      return templates.faq;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
