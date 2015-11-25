;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Modal = Mn.ItemView.extend({
    events: {
      'submit #mc-embedded-subscribe-form': "destroy",
      'click .close': "destroy"
    },
    getTemplate: function() {
      return templates.modal;
    },
    onRender: function() {
      $('#modal').show();
    },
    onDestroy: function() {
      $('#modal').hide();
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
