/* exported reverseWords */
function reverseWords(string) {
  var reversed = '';
  var words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (i !== (words.length - 1)) {
      reversed = reversed + words[i].split('').reverse().join('') + ' ';
    } else if (i === (words.length - 1)) {
      reversed = reversed + words[i].split('').reverse().join('');
    }
  }
  return reversed;
}
