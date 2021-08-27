/* exported getKeys */
function getKeys(object) {
  var newKeys = [];

  for (var key in object) {
    newKeys.push(key);
  }
  return newKeys;
}
