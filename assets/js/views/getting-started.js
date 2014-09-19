;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.GettingStarted = Mn.LayoutView.extend({
    events: {
      "click .getting-started li": "switchOSTab"
    },

    ui: {
      'platforms': '.block.platforms li',
      'install': '.install-instructions',
      'download': '#getting-started'
    },

    regions: {
      "releaseHistory": ".release-history"
    },

    onShow: function() {
      this.getRegion("releaseHistory")
      .show(new BK.Views.Releases());

      this.scrollToDownload();
    },

    scrollToDownload: function() {
      var param   = Backbone.history.location.search || "";

      if(param.match(/scroll/)) {
        window.scrollTo(0,
          this.ui.download[0].getBoundingClientRect().top -
          $('.header-nav').height() -
          50
        );
      }
    },

    getTemplate: function() {
      return templates['getting-started'];
    },

    getOS: function() {
      var param   = Backbone.history.location.search || "";

      if (param = param.match(/osx|windows|linux/))
        return param[0];

      return BK.getPlatform();
    },

    switchOSTab: function(e) {
      var $t       = $(e.currentTarget);
      var template = templates[$t.data('platform')+"-install"];

      this.ui.platforms.removeClass('active');
      this.ui.install.html(template())

      $t.addClass('active');
    },

    templateHelpers: function() {
      return {
        OS: this.getOS()
      }
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
