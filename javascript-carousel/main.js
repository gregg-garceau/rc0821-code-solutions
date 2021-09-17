var imageIndex = 1;
var imageTimer = null;
var images = document.querySelectorAll('.carousel-image');
var dots = document.querySelectorAll('.dot');
var dotContainer = document.querySelector('.dots');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

showImages(imageIndex);

function imageChange(num) {
  clearTimeout(imageTimer);
  showImages(imageIndex += num);
}

next.addEventListener('click', function (event) {
  imageChange(1);
});
prev.addEventListener('click', function (event) {
  imageChange(-1);
});

function currentImage(num) {
  clearTimeout(imageTimer);
  showImages(imageIndex = num);
}

dotContainer.addEventListener('click', function (event) {
  if (event.target.getAttribute('data-num')) {
    var targetDot = parseInt(event.target.getAttribute('data-num'));
    currentImage(targetDot);
  }
});

function showImages(num) {
  if (num === undefined) {
    num = ++imageIndex;
  }
  if (num > images.length) {
    imageIndex = 1;
  }
  if (num < 1) {
    imageIndex = images.length;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('hidden');
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('show');
  }
  images[imageIndex - 1].classList.remove('hidden');
  dots[imageIndex - 1].classList.add('show');
  imageTimer = setTimeout(showImages, 3000);
}
