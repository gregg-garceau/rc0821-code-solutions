function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $buttonClick = document.querySelector('.click-button');
$buttonClick.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $buttonHovered = document.querySelector('.hover-button');
$buttonHovered.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $buttonDoubleClicked = document.querySelector('.double-click-button');
$buttonDoubleClicked.addEventListener('dblclick', handleDoubleClick, false);
