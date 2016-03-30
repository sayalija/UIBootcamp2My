(function() {
  var HelloWorld;

  HelloWorld = (function() {
    function HelloWorld() {}

    HelloWorld.prototype.message = function() {
      return "Hello World...!";
    };

    return HelloWorld;

  })();

  module.exports = HelloWorld;

}).call(this);
