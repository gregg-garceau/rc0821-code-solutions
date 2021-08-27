/* exported compact */
function compact(array) {
  var compactValues = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactValues.push(array[i]);
    }
  }
  return compactValues;
}
