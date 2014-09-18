;(function(BK, Backbone, Mn) {
  BK.Router = Backbone.Router.extend({
    routes: {
      "": "overview",
      "index(.html)": "overview",
      "features(.html)": "features",
      "getting-started(.html)": "getting-started",
      "community(.html)": "community",
      "about(.html)": "about",
      "faq(.html)": "faq"
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
    },

    faq: function() {
      BK.regions.get("content")
      .show(new BK.Views.Faq())
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
