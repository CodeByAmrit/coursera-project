(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
function bye(name){
  console.log("Goodbye "+name)}
  function hello(name){
    console.log("Hello "+ name)}
  
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    bye(names[i]);
  } else {
    hello(names[i]);
  }
}

})();
