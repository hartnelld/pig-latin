var isVowel = function(input) {
  return input.concat("ay");
};

var isConsonant = function(input) {
  var firstChars = input.slice(0,1);
  var length = input.length;
  var i = 0;
  var word = "";

  while (i < length) {
    if (!input[i].toLowerCase().match(/a|e|i|o|u/)) {
      word = word.concat(input[i])
      console.log(word);
    } else {
      break;
    };

    i++;
  }

  return input.slice(i,length).concat(word).concat("ay");
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
