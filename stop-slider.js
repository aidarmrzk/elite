const windowWidth = window.innerWidth;
console.log(windowWidth);

if (
  windowWidth <= 700 &&
  document.querySelectorAll(".project-objects-slider-items") &&
  document.querySelectorAll(".project-objects-slider-item")
) {
  const mainSliders = document.querySelectorAll(
    ".project-objects-slider-items"
  );
  const sliderItems = document.querySelectorAll(".project-objects-slider-item");
  for (mainSlider of mainSliders) {
    mainSlider.classList.add("stop-slider");
  }
  for (sliderItem of sliderItems) {
    sliderItem.classList.add("stop-slider");
  }
}

if (
  windowWidth <= 450 &&
  document.querySelector(".faqs-itc-slider__items") &&
  document.querySelectorAll(".faqs-itc-slider__item")
) {
  const faqsSlider = document.querySelector(".faqs-itc-slider__items");
  const faqsSliderItems = document.querySelectorAll(".faqs-itc-slider__item");
  faqsSlider.classList.add("stop-slider");
  for (faqsSliderItem of faqsSliderItems) {
    faqsSliderItem.classList.add("stop-slider");
  }
}

if (windowWidth > 500 && document.querySelector(".reviews-slider-items")) {
  document.querySelector(".reviews-slider-items").classList.add("stop-slider");
}
