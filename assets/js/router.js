;(function(BK, Backbone, Mn) {
  BK.Router = Backbone.Router.extend({
    routes: {
      "": "overview",
      "features": "features",
      "getting-started": "getting-started",
      "community": "community",
      "about": "about"
    },

    overview: function() {
      console.log("o");
    },

    features: function() {
      console.log("f");
    },

    "getting-started": function() {
      console.log("g");
    },

    community: function() {
      console.log("c");
    },

    about: function() {
      console.log("a");
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
