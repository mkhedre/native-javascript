let slidesContainer = document.getElementById('sContainer');
let slides = document.getElementsByClassName('slides');
let dots = document.getElementsByClassName('dot');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num) {
  slideIndex += num;
  showSlides(slideIndex);
}

function currentSlide(index) {
  slideIndex = index;
  showSlides(slideIndex);
}

function showSlides(index) {
  if (index > slides.length || slideIndex >= slides.length) {
    slideIndex = 1;
    console.log('lll');
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slideIndex++;
  console.log(slideIndex);
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000);
}

// Automatic Slideshow
// erery second += 1
// if slidei > slides.length : slideindex = 1
