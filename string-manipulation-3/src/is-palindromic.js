/* exported isPalindromic */
function isPalindromic(string) {
  var stringSpace = string.replaceAll(' ', '');
  var arrayVal = stringSpace.split('');
  var reverseArray = arrayVal.reverse();
  var reverseString = reverseArray.join('');
  reverseString = reverseString.replaceAll(' ', '');

  if (stringSpace === reverseString) {
    return true;
  } else {
    return false;
  }
}
