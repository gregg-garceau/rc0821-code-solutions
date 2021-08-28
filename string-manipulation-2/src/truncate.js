/* exported truncate */
function truncate(length, string) {
  var truncatedString = string.substring(0, length) + '...';
  return truncatedString;
}
