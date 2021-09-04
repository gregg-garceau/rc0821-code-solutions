/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}
