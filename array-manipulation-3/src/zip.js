/* exported zip */
function zip(first, second) {
  var resultArray = [];
  var resultLength = first.length;
  if (first.length > second.length) {
    resultLength = second.length;
  }

  var count = 0;
  while (count < resultLength) {
    var tempArray = [];
    tempArray.push(first[count]);
    tempArray.push(second[count]);
    resultArray.push(tempArray);
    count++;
  }
  return resultArray;
}
