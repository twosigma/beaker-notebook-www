;(function(BK, Backbone, Mn) {

  $(init);

  function init() {
    new BK.Router();

    BK.regions = new Mn.RegionManager();

    BK.regions.addRegions({
      "content": ".primary-content .contain"
    });

    Backbone.history.start({
      pushState: true,
      root: 'beaker-notebook-www/'
    });

    new BK.HeaderNav({
      el: $('.header-nav')[0]
    }).bindUIElements()

    new BK.Header({
      el: $('.header')[0]
    }).bindUIElements()
  }

})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
