function ExampleConstructor() {

}
console.log('value of prototype: ', ExampleConstructor.prototype);
console.log('typeof prototype: ', typeof ExampleConstructor.prototype);
var exampleConstructor = new ExampleConstructor();
console.log(exampleConstructor);
var instanceExample = exampleConstructor instanceof ExampleConstructor;
console.log('instanceof: ', instanceExample);
