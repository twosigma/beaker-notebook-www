;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.Header = Mn.ItemView.extend({
    template: false,
    events: {
      'click .header-content a': 'navTo',
    },

    navTo: function(e) {
      e.preventDefault();

      Backbone.history.navigate(
        $(e.currentTarget).attr('href'),
        {trigger: true}
      );

      return false;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
