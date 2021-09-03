/* exported unique */
function unique(array) {
  var uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.includes(array[i]) === false) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
