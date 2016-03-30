FlickrService = require '../../../src/javascripts/services/FlickrService'


describe "Flickr Service ", () ->
  it "should return 'Hello World'", () ->
    flickrService = new FlickrService();
    expect(flickrService.getImages()).toBe "hello"
