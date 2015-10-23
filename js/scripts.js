var isVowel = function(input) {
  return input.concat("ay");
};

var isConsonant = function(input) {
  var firstChars = input.slice(0,1);
  var length = input.length;

  return input.slice(1,length).concat(firstChars).concat("ay");
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var input = $("#input").val();
    if (input.toLowerCase().match(/^(a|e|i|o|u)/)) {
      $(".translation").text("");
      $(".translation").text(isVowel(input));
      $("#result").show();
    } else {
      $(".translation").text("");
      $(".translation").text(isConsonant(input));
      $("#result").show();
    }
    event.preventDefault();
  });
});
