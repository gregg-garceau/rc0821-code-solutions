/* exported numVowels */
function numVowels(string) {
  var numberVowels = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
      numberVowels++;
    }
  }
  return numberVowels;
}
