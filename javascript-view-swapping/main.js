var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].classList.add('active');
      } else if ((event.target !== $tabs[i]) && ($tabs[i].className = 'active')) {
        $tabs[i].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (let j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === $dataView) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'view hidden';
      }
    }
  }
});
