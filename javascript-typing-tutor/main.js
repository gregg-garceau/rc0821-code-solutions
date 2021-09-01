var characterNodeList = document.querySelectorAll('span');
var i = 0;

document.addEventListener('keydown', function (event) {
  if (event.key !== characterNodeList[i].innerHTML) {
    characterNodeList[i].classList.add('red-text');
  } else if (event.key === characterNodeList[i].innerHTML) {
    characterNodeList[i].classList.remove('red-text');
    characterNodeList[i].classList.add('green-text');
    characterNodeList[i].classList.remove('underline');
    i++;
  }
  characterNodeList[i].classList.add('underline');
});
