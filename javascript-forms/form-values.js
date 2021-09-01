var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var $valueObject = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log($valueObject);
  $contactForm.reset();
});
