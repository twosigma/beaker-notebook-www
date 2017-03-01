;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  var BaseInstall = Mn.ItemView.extend({
    events: {
      "click .base-install": "install"
    },

    showModal: function() {
      new BK.Views.Modal({
        el: $('#modal')[0]
      }).render();
    }
  });

  BK.Views["osx-install"] = BaseInstall.extend({
    getTemplate: function() {
      return templates["osx-install"];
    },

    install: function() {
      window.location = BK.getDownloadLink('osx');
      this.showModal();
    }
  });

  BK.Views["windows-install"] = BaseInstall.extend({
    getTemplate: function() {
      return templates["windows-install"];
    },

    install: function() {
      window.location = BK.getDownloadLink('windows');
      this.showModal();
    }
  });

  BK.Views["linux-install"] = BaseInstall.extend({
    getTemplate: function() {
      return templates["linux-install"];
    },

    install: function() {
      window.location = BK.getDownloadLink('linux');
      this.showModal();
    }
  });

})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
