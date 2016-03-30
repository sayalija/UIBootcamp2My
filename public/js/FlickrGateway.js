(function() {
  var Flickr, FlickrGateway;

  Flickr = require('../libs/flickrapi.js');

  FlickrGateway = (function() {
    function FlickrGateway(flickr) {
      this.flickr = flickr;
      this.flickr = new Flickr({
        api_key: '1e303cc783909781d2c8a75bdc25f100',
        progress: false
      });
    }

    FlickrGateway.prototype.getImages = function() {
      return this.flickr.photos.search({});
    };

    return FlickrGateway;

  })();

  module.exports = FlickrGateway;

}).call(this);
