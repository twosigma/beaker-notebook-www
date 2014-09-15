;(function(BK, Backbone, Mn) {
  BK.Router = Backbone.Router.extend({
    routes: {
      "": "overview",
      "index": "overview",
      "features": "features",
      "getting-started": "getting-started",
      "community": "community",
      "about": "about"
    },

    overview: function() {
      BK.regions.get("content")
      .show(new BK.Views.Overview())
    },

    features: function() {
      BK.regions.get("content")
      .show(new BK.Views.Features())
    },

    "getting-started": function() {
      BK.regions.get("content")
      .show(new BK.Views.GettingStarted())
    },

    community: function() {
      BK.regions.get("content")
      .show(new BK.Views.Community())
    },

    about: function() {
      BK.regions.get("content")
      .show(new BK.Views.About())
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
