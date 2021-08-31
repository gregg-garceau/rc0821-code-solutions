var clickCount = 0;

var $lightButton = document.querySelector('.light-button');
var $rowBackground = document.querySelector('.row');

$lightButton.addEventListener('click', function (event) {
  clickCount++;
  if (clickCount % 2 === 0) {
    $lightButton.className = 'light-button on';
    $rowBackground.className = 'row on';
  } else {
    $lightButton.className = 'light-button off';
    $rowBackground.className = 'row off';
  }
});
