var headerOneInt = document.querySelector('h1');
var i = 3;

var nTer = setInterval(countdown, 1000);

function countdown() {
  headerOneInt.innerHTML = i;
  if (i === 0) {
    headerOneInt.innerHTML = '~Earth Beeeelooowww Us~';
    clearInterval(nTer);
  }
  i--;
}
