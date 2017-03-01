;(function(BK, Backbone, Mn) {

  $(init);

  function init() {
    new BK.Router();

    BK.regions = new Mn.RegionManager();

    BK.regions.addRegions({
      'content': '.primary-content .contain'
    });

    Backbone.history.start({
      pushState: true
    });

    new BK.Views.HeaderNav({
      el: $('.header-nav')[0]
    }).triggerMethod('show');

    new BK.Views.Header({
      el: $('.header')[0]
    }).bindUIElements();
  }

})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
