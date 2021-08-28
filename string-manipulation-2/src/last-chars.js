/* exported lastChars */
function lastChars(length, string) {
  var newString = string.substring(string.length - length, string.length);
  return newString;
}
