Flickr = require('../libs/flickrapi.js')

class FlickrGateway

  constructor: (@flickr) ->
    @flickr = new Flickr(
      api_key: '1e303cc783909781d2c8a75bdc25f100'
      progress: false)

  getImages: ->
    @flickr.photos.search({},)


module.exports = FlickrGateway