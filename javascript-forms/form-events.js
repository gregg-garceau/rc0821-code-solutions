var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ' + event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name: ' + event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ' + event.target.name);
  console.log('event.target.value: ' + event.target.value);
}

$userName.addEventListener('focus', handleFocus, false);
$userEmail.addEventListener('focus', handleFocus, false);
$userMessage.addEventListener('focus', handleFocus, false);

$userName.addEventListener('blur', handleBlur, false);
$userEmail.addEventListener('blur', handleBlur, false);
$userMessage.addEventListener('blur', handleBlur, false);

$userName.addEventListener('input', handleInput, false);
$userEmail.addEventListener('input', handleInput, false);
$userMessage.addEventListener('input', handleInput, false);
