;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.GettingStarted = Mn.LayoutView.extend({
    events: {
      "click .getting-started li": "switchOSTab"
    },

    ui: {
      'platforms': '.block.platforms li',
      'download': '#getting-started'
    },

    regions: {
      'releaseHistory': '.release-history',
      'install': '.install-instructions'
    },

    onShow: function() {
      this.getRegion("releaseHistory")
      .show(new BK.Views.Releases());

      this.getRegion('install')
      .show(new BK.Views[this.getOS()+'-install']);

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
      this.ui.platforms.removeClass('active');

      this.getRegion('install')
      .show(new BK.Views[$t.data('platform')+'-install']);

      $t.addClass('active');
    },

    templateHelpers: function() {
      return {
        OS: this.getOS()
      }
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
