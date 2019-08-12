// business logic
var bb = function(sound) {
  for (var x = 0; x <= sound; x++) {
      if ((x % 3 === 0)&&(x!= 0)){
      $('#output').append(" Sorry Dave, I'm afraid I can't do that ")
    }
    else if (x.toString().includes("1")) {
      $('#output').append(" boop! ")
    }
    else if (x.toString().includes("0")) {
      $('#output').append(" beep! ")
    }
    else {
      $('#output').append(x)
    }
  };
};




// user interface logic
$(document).ready(function() {
  $("form#bb").submit(function(event) {
    event.preventDefault()
    var sound = parseInt($("input#sound").val());
    var words = $('#words').val()
    var result = bb(words)
    $('#output').append(result)
    $('#result').text(result)
  })
 });
