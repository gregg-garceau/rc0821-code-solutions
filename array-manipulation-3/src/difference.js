/* exported difference */
function difference(first, second) {
  var diffArray = [];
  var firstDiff = [];
  var secondDiff = [];

  firstDiff = first.filter(firstDiff => !second.includes(firstDiff));
  secondDiff = second.filter(secondDiff => !first.includes(secondDiff));
  diffArray = firstDiff.concat(secondDiff);
  return diffArray;
}
