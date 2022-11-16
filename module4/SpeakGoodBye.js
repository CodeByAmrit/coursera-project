(function(window){
  var byeSpeaker = {};
  byeSpeaker.speakWorld = "Good Bye";
  byeSpeaker.speak = function(name){
    console.log(byeSpeaker.speakWorld + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
