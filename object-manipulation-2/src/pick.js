/* exported pick */
function pick(source, keys) {
  var pickObject = {};

  for (var key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i] && source[key] !== undefined) {
        pickObject[key] = source[key];
      }
    }
  }
  return pickObject;
}
