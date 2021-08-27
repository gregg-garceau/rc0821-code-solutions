/* exported reverseWord */
function reverseWord(word) {
  var wordReversed = '';
  var count = word.length - 1;

  while (count >= 0) {
    wordReversed += word[count];
    count--;
  }
  return wordReversed;
}
