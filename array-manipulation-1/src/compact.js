/* exported compact */
// Define a function compact with a parameter of an array
function compact(array) {
  // Initialize a new array literal into a variable so that we can store new values from the function.
  var compactValues = [];
  // Create a for loop that initializes at the first index, goes through the entire length of the array, and increments by 1 every loop
  for (let i = 0; i < array.length; i++) {
    // Create an if statement to check if the values of the array at each index are truthy since we are negating falsy values
    if (array[i]) {
      // Add only the values of the array that are truthy to the new array by only using one if statement.
      compactValues.push(array[i]);
    }
  }
  // Return the array of truthy values only
  return compactValues;
}
