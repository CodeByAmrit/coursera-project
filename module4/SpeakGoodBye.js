(function(window){
  var byeSpeaker = {};
  byeSpeaker.speakWord = "Good Bye";
  byeSpeaker.speak = function(name){
    console.log(byeSpeaker.speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
