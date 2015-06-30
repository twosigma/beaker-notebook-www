;(function(BK, Backbone, Mn) {
  BK.getDownloadLink = function(platform) {
    switch (platform || BK.getPlatform()) {
      case 'windows':
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.3.1-0-g3072e5e-windows.zip"; 
      case 'osx':
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.3.1-1-g3072e5e-mac.dmg";
      default:
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.3.1-0-g3072e5e-ubuntu.zip";
    }
  }

  BK.getPlatform = function() {
    var browser = navigator.appVersion;

    if (~browser.indexOf("Win"))
      return "windows";
    if (~browser.indexOf("Mac"))
      return "osx";
    if (~browser.indexOf("X11") || ~browser.indexOf("Linux"))
      return "linux";
  }
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
