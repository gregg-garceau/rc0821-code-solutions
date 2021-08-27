/* exported capitalize */
function capitalize(word) {
  var capitalWord = '';
  var count = 0;

  while (count < word.length) {
    if (count === 0 && word[count] !== word[0].toUpperCase()) {
      capitalWord += word[0].toUpperCase();
      count++;
    } else if (count !== 0 && word[count] === word[count].toUpperCase()) {
      capitalWord += word[count].toLowerCase();
      count++;
    } else {
      capitalWord += word[count];
      count++;
    }
  }
  return capitalWord;
}
