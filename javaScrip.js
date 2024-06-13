/*Menu Hamburguesa */
function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

let slideIndex = 0;
carousel();

function carousel() {
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Cambiar imagen cada 2 segundos
}

