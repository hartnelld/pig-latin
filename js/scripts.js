var isVowel = function(input) {

  return input.concat("ay");
};

var isConsonant = function(input) {
  var firstCharacter = input.slice(0,1);
  return input.slice(1,input.length).concat(firstCharacter).concat("ay");
};

$(document).ready(function() {
  $("form#english-input").submit(function(event) {
    var input = $("#input").val();
    var firstCharacter = input.slice(0,1);

    if (firstCharacter.toLowerCase() === "a" || "e" || "i" || "o" || "u") {
      $(".translation").text(isVowel(input));
      $("#result").show();
    }

    if (firstCharacter.toLowerCase() === "b" || "c" || "d" || "f" || "g" || "h" || "j" || "k" || "l" || "m" || "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z") {
      $(".translation").text(isConsonant(input));
      $("#result").show();
    }
    event.preventDefault();
  });
});
