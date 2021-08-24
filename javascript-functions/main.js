function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var minutesToSecondsResult = convertMinutesToSeconds(5);

console.log('minutesToSecondsResult: ' + minutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetingResult = greet('Gregg');

console.log('greetingResult: ' + greetingResult);

function getArea(width, height) {
  return width * height;
}

var areaResult = getArea(7, 4);

console.log('areaResult: ' + areaResult);

function getFirstName(person) {
  return person.firstName;
}

var firstNameResult = getFirstName({ firstName: 'Greggory', lastName: 'Garceau' });

console.log('firstNameResult: ' + firstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('lastElementResult: ' + lastElementResult);
