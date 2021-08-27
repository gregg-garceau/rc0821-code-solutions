/* exported initial */
function initial(array) {
  var initialValues = [];
  var count = 0;

  while (count < array.length - 1) {
    initialValues.push(array[count]);
    count++;
  }
  return initialValues;
}
