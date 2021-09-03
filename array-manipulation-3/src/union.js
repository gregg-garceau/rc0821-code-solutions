/* exported union */
function union(first, second) {
  var unionA = [...new Set([...first, ...second])];
  return unionA;
}
