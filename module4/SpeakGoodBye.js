(function(window){
  var helloSpeaker = {};
  helloSpeaker.speakWord = "Hello";
  helloSpeaker.speak = function(name){
    console.log(helloSpeaker.speakWord + " "+ name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);
