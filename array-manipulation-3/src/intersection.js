/* exported intersection */
function intersection(first, second) {
  var interArray = [];

  interArray = first.filter(interArray => second.includes(interArray));
  return interArray;
}
