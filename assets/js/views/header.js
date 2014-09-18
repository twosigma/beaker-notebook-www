;(function(BK, Backbone, Mn) {
  BK.Header = Mn.ItemView.extend({
    template: false,
    events: {
      "click a": "navTo",
      "click a.large": "downloadAndNav"
    },

    downloadAndNav: function(e) {
      e.preventDefault();
      window.location = BK.getDownloadLink();
      this.navTo(e);
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
