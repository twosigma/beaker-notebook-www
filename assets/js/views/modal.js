;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Modal = Mn.ItemView.extend({
    initialize: function() {
      $(document).on('click.modal', this.clickOutside.bind(this));
      this.clickedOutside = 0;
    },
    clickOutside: function(e) {
      if (!$(e.target).hasClass('mc-field-group') && this.clickedOutside > 0) {
        this.destroy();
      }

      this.clickedOutside++;
    },
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
      $(document).off('click.modal');
      $('#modal').hide();
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
