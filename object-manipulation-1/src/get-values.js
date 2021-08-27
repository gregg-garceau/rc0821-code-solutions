/* exported getValues */
function getValues(object) {
  var newValues = [];

  for (var key in object) {
    newValues.push(object[key]);
  }
  return newValues;
}
