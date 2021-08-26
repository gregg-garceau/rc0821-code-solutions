/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixToAll = [];
  for (let c = 0; c < words.length; c++) {
    suffixToAll.push(words[c] + suffix);
  }
  return suffixToAll;
}
