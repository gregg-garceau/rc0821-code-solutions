/* exported take */
function take(array, count) {
  var takeLength = count;
  var takeArray = [];
  if (array.length !== 0) {
    for (let i = 0; i < takeLength; i++) {
      takeArray.push(array[i]);
    }
  } else {
    return takeArray;
  }
  return takeArray;
}
