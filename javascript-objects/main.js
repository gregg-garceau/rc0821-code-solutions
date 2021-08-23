var student = {
  firstName: 'Gregg',
  lastName: 'Garceau',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of full name: ' + fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Pharmacy Tech';

console.log(student.livesInIrvine);
console.log(student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Audi',
  model: 'A4 Quattro',
  year: 2012
};

vehicle['color'] = 'black';

vehicle['isConvertible'] = false;

console.log(vehicle['color']);
console.log(vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Ghost',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log(pet);
