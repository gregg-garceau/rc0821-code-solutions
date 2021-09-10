/* exported titleCase */
function titleCase(title) {
  var wordArr = [];
  var exceptions = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var words = title.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === 'javascript') {
      wordArr.push('JavaScript');
    } else if (i === 0 && exceptions.includes(words[0])) {
      var firstChar = words[0][0].toUpperCase();
      var secondChars = words[0].substr(1);
      var finalChars = firstChar + secondChars;
      wordArr.push(finalChars);
    } else if (words[i].toLowerCase() === 'javascript:') {
      wordArr.push('JavaScript:');
    } else if (words[i].toLowerCase() === 'api') {
      wordArr.push('API');
    } else if (words[i].includes('-')) {
      var split = words[i].split('-');
      var splitOne = split[0].charAt(0).toUpperCase() + split[0].substr(1);
      var splitTwo = split[1].charAt(0).toUpperCase() + split[1].substr(1);
      var finalWord = splitOne + '-' + splitTwo;
      wordArr.push(finalWord);
    } else if (!exceptions.includes(words[i]) && words[i].toLowerCase() !== 'api' && words[i].toLowerCase() !== 'javascript' && words[i].toLowerCase() !== 'javascript:') {
      var first = words[i][0].toUpperCase();
      var second = words[i].substr(1);
      var final = first + second;
      wordArr.push(final);
    } else if (words[i - 1].includes(':')) {
      var a = words[i][0].toUpperCase();
      var b = words[i].substr(1);
      var ab = a + b;
      wordArr.push(ab);
    } else {
      wordArr.push(words[i]);
    }
  }
  var finalString = wordArr.join(' ');
  return finalString;
}
