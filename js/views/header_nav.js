;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.HeaderNav = Mn.ItemView.extend({
    template: false,
    events: {
      "click li": "navTo"
    },

    initialize: function() {
      this.listenTo(Backbone.history, 'route', this.updateActive);
    },

    updateActive: function(router, route) {
      this.$(".active").removeClass('active');

      var $match = this.$('[href="'+route+'"]');

      if (!$match.length) {
        $match = this.$('a').eq(0);
      }

      $match
      .parent()
      .addClass('active');
    },

    onShow: function() {
      this.$el.headroom({
        offset : 527
      });
    },

    navTo: function(e) {
      e.preventDefault();

      $t = $(e.currentTarget);

      Backbone.history.navigate(
        $t.find('a').attr('href'),
        {trigger: true}
      );

      return false;
    }
  })
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
