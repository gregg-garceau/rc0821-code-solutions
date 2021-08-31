var $openModal = document.querySelector('.open-modal');
var $closeModal = document.querySelector('.no-button');
var $modalBox = document.querySelector('.modal-box');

$openModal.addEventListener('click', function (event) {
  $modalBox.className = 'modal-box show';
});

$closeModal.addEventListener('click', function (event) {
  $modalBox.className = 'modal-box hidden';
});
