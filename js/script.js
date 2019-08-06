// business logic
var bb = function(){



// user interface logic
$(document).ready(function() {
  $("form#bb").submit(function(event) {
    event.preventDefault()
    var words = $('#words').val()
    var result = bb(words)
    $("#result").text()
  })
 });
