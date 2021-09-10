/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = firstString.replaceAll(' ', '');
  var second = secondString.replaceAll(' ', '');

  if (first.length !== second.length) {
    return false;
  }

  var sortFirst = first.split('').sort().join('');
  var sortSecond = second.split('').sort().join('');

  return sortFirst === sortSecond;
}
