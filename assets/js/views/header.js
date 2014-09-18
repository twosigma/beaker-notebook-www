;(function(BK, Backbone, Mn) {
  BK.Header = Mn.ItemView.extend({
    template: false,
    events: {
      "click .cta .btn": "getBeaker"
    },

    getBeaker: function() {
      Backbone.history.navigate("getting-started", {trigger: true})
    }
  })
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
