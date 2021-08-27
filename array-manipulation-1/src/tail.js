/* exported tail */
// Define a function named tail with a parameter of an array as we need to comb through certain indexes.
function tail(array) {
  // Initialze a variable with an empty array literal so we can store the new array.
  var tailArray = [];
  // Initialize a variable that will be used to loop through the array, starting at 1 since we are negating first index.
  var count = 1;
  // Create a while loop that starts at second index since count is the second index, and goes through total array while that number is less than the length.
  while (count < array.length) {
    // Add the values at each index to the new array
    tailArray.push(array[count]);
    // Increment the count variable so we can continue to loop through entire array and stop at the length.
    count++;
  }
  // Return the new array that we have pushed all values in that aren't the first index.
  return tailArray;
}
