/* exported student */
var student = {
  firstName: 'Gregg',
  lastName: 'Garceau',
  subject: 'JavaScript',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var intro = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
    return intro;
  }

};
