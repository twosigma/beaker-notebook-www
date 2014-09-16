;(function(BK, Backbone, Mn) {
  BK.Header = Mn.ItemView.extend({
    template: false,
    events: {
      "click li": "navTo"
    },

    removeActive: function() {
      this.$(".active").removeClass('active');
    },

    navTo: function(e) {
      e.preventDefault();

      $t = $(e.currentTarget);
      this.removeActive();

      Backbone.history.navigate(
        $t.find('a').attr('href'),
        {trigger: true}
      )

      $t.addClass('active');
      return false;
    }
  })
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
