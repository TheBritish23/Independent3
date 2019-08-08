// business logic
var bb = function(sound) {
  if (sound % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

if (bb.toString().includes("0")) {
  return 
}





// user interface logic
$(document).ready(function() {
  $("form#bb").submit(function(event) {
    event.preventDefault()
    var sound = parseInt($("input#sound").val());
    var words = $('#words').val()
    var result = bb(words)
    $("#result").show()
  })
 });
