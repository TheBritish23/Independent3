// business logic
var bb = function(sound) {
  for (var x = 0; x <= sound; x++) {
    if ((x % 3 === 0)&&(x!= 0)){
      $('#output').append(" Sorry Dave, I'm afraid I can't do that ")
    }
    else if (x.toString().includes("1")) {
      $('#output').append("<li> boop! </li> ")
    }
    else if (x.toString().includes("0")) {
      $('#output').append("<li> beep! </li>")
    }
    else {
      $('#output').append("<li> + x + </li>")
    }
  };
};




// user interface logic
$(document).ready(function() {
  $("form#bb").submit(function(event) {
    event.preventDefault()
    var words = $('#words').val()
    var result = bb(words)
  })
 });
