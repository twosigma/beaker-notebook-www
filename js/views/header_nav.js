;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.HeaderNav = Mn.ItemView.extend({
    template: false,
    events: {
      'click li': 'navTo'
    },

    initialize: function() {
      this.listenTo(Backbone.history, 'route', this.updateActive);

      $(document).on('keydown', function(e) {
        switch (e.which) {
          case 37: // left
            this.previousTab();
            break;
          case 39: // right
            this.nextTab();
            break;
          default: return;
        }
        e.preventDefault();
      }.bind(this));
    },

    nextTab: function() {
      var nextTab = this.$el.find('li.active').next();
      if (!nextTab.length) {
        return;
      }
      nextTab.trigger('click');
    },

    previousTab: function() {
      var previousTab = this.$el.find('li.active').prev();
      if (!previousTab.length) {
        return;
      }
      previousTab.trigger('click');
    },

    updateActive: function(router, route) {
      this.$('.active').removeClass('active');

      var $match = this.$('[href="' + route + '"]');

      if (!$match.length) {
        $match = this.$('a').eq(0);
      }

      $match
      .parent()
      .addClass('active');
    },

    onShow: function() {
      this.$el.headroom({
        offset: 527
      });
    },

    navTo: function(e) {
      if ($(e.target).hasClass('examples')) {
        window.open("https://pub.beakernotebook.com/publications/featured");
      }
      $t = $(e.currentTarget);

      Backbone.history.navigate(
        $t.find('a').attr('href'),
        {trigger: true}
      );

      return false;
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
