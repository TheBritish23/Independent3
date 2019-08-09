// business logic
var bb = function(sound) {
  var iT = []
  for (var x = 0; x <= sound; x++) {
    if (x.toString().includes("0")) {
    console.log("beep!")
  }
else if (x.toString().includes("1")) {
console.log("boop!")
}
  else {
    console.log(x)
  }
 }
 //  if (sound % 3 === 0) {
 //    return true;
 //  } else {
 //    return false;
 //  }
 //
 // if (x.toString().includes("0")) {
 // }
 //
 // if (x.toString().includes("1")) {
 // }
};





// user interface logic
$(document).ready(function() {
  $("form#bb").submit(function(event) {
    event.preventDefault()
    var sound = parseInt($("input#sound").val());
    var words = $('#words').val()
    var result = bb(words)
    $('output').append(result)
    $("#result").show()
  })
 });
