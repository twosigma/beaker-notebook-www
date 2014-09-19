;(function(BK, Backbone, Mn) {
  BK.Router = Backbone.Router.extend({
    routes: {
      "": "overview",
      "index(.html)": "overview",
      "features(.html)": "features",
      "getting-started(.html)": "getting-started",
      "community(.html)": "community",
      "examples(.html)": "examples",
      "faq(.html)": "faq",
      "releases(.html)": "releases",
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

    examples: function() {
      BK.regions.get("content")
      .show(new BK.Views.Examples())
    },

    faq: function() {
      BK.regions.get("content")
      .show(new BK.Views.Faq())
    },

    releases: function() {
      BK.regions.get("content")
      .show(new BK.Views.Releases())
    }

  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
