/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  if (word[0] !== word[0].toUpperCase()) {
    newWord += word[0].toUpperCase();
  }
  for (let i = 1; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      newWord += word[i].toLowerCase();
    } else {
      newWord += word[i];
    }
  }
  return newWord;
}
