describe('isVowel', function() {
  it("perform appropriate pig latin translation for words that start with a vowel", function() {
    expect(isVowel("apple")).to.equal("appleay");
  });
});

describe('isConsonant', function() {
  it("perform appropriate pig latin translation for words that start with a consonant", function() {
    expect(isConsonant("mouse")).to.equal("ousemay");
  });

  it("works when a word starts with more than one consonant", function() {
    expect(isConsonant("Translate")).to.equal("anslateTray");
  });
});
