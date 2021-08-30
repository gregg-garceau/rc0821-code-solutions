/* exported omit */
function omit(source, keys) {
  var pickObject = {};

  for (var key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (!keys.includes(key)) {
        pickObject[key] = source[key];
      }
    }
  }
  return pickObject;
}
