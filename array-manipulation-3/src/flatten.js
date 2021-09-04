/* exported flatten */
function flatten(array) {
  var result = array.reduce((acc, el) => acc.concat(el), []);
  return result;
}
