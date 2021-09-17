var $userList = document.getElementById('user-list');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log('status: ', xhr.status);
  console.log('response: ', xhr.response);

  for (let i = 0; i < xhr.response.length; i++) {
    var liEle = document.createElement('li');
    liEle.textContent = xhr.response[i].name;

    $userList.appendChild(liEle);
  }
});
xhr.send();
