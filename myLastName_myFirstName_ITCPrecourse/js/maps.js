const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const gallery = document.querySelectorAll('.none');
let currentlySelected = 0;

prevBtn.addEventListener('click', function () {
  gallery[currentlySelected].classList.remove("active");
  currentlySelected--;
  gallery[currentlySelected].classList.add("active");
  nextBtn.disabled = false;

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener('click', function () {
  gallery[currentlySelected].classList.remove("active");
  currentlySelected++;
  gallery[currentlySelected].classList.add("active");
  prevBtn.disabled = false;

  if (gallery.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});
