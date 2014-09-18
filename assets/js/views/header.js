;(function(BK, Backbone, Mn) {
  BK.Header = Mn.ItemView.extend({
    template: false,
    events: {
      "click a": "navTo"
    },

    navTo: function(e) {
      e.preventDefault();

      Backbone.history.navigate(
        $(e.currentTarget).attr('href'),
        {trigger: true}
      );

      return false;
    }
  })
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
