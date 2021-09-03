var books = [
  {
    isbn: '1234567890',
    title: 'Some Book',
    author: 'John Doe'
  },

  {
    isbn: '2468101214',
    title: 'Another Book',
    author: 'Jane Done'
  },

  {
    isbn: '3691215182',
    title: 'Yet Another Book',
    author: 'Joe Shmoe'
  }
];

var data = JSON.stringify(books);
console.log(typeof data);

var student = ' { "numberId": "John" } ';
console.log(student, typeof student);

var studentObj = JSON.parse(student);
console.log(studentObj, typeof studentObj);
