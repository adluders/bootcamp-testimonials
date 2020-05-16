const prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  testimonials = document.querySelectorAll(".testimonial");

let currentItem = 0;

// Have an array of the testimonials
const testimonialArr = [...testimonials];

function hideAllSections() {
  testimonialArr.forEach((t) => (t.style.display = "none"));
}

function showNextSection() {
  hideAllSections();
  currentItem > 0 ? (currentItem = 0) : currentItem++;
  testimonialArr[currentItem].style.display = "grid";
}

function showPrevSection() {
  currentItem--;
  hideAllSections();
  currentItem < 0 && (currentItem = 1);
  testimonialArr[currentItem].style.display = "grid";
}

nextBtn.addEventListener("click", showNextSection);
prevBtn.addEventListener("click", showPrevSection);
