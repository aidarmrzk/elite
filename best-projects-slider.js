const bestSelects = document.querySelectorAll(".best-select");
const buttonPrev = document.querySelector(".best-slider-prev");
const buttonNext = document.querySelector(".best-slider-next");
const bestItems = document.querySelectorAll(".best-item");
const bestSlider = document.querySelector(".best-slider");

let currentIndex = 0;
bestSelects[currentIndex].classList.add("selected");

buttonPrev.addEventListener("click", choosePrevSelect);
buttonNext.addEventListener("click", chooseNextSelect);

let isMouseDown = false;
let isMouseUp = false;
let startX = 0;

bestSlider.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    isMouseDown = true;
    startX = event.clientX;
  }
});

bestSlider.addEventListener("mousemove", function (event) {
  if (event.button === 0) {
    isMouseUp = true;
  }
});

bestSlider.addEventListener("mouseup", function (event) {
  if (isMouseDown && isMouseUp) {
    let deltaX = event.clientX - startX;
    if (deltaX < -50) {
      chooseNextSelect();
      isMouseDown = false;
      isMouseUp = false;
      console.log("Next");
    } else if (deltaX > 50) {
      choosePrevSelect();
      isMouseDown = false;
      isMouseUp = false;
      console.log("Prev");
    }
  }
});

let touchStart = false;
let touchEnd = false;
let touchStartX = 0;
let touchEndX = 0;

bestSlider.addEventListener("touchstart", function (event) {
  touchStartX = event.touches[0].clientX;
  touchEnd = true;
});

bestSlider.addEventListener("touchmove", function (event) {
  touchEndX = event.touches[0].clientX;
  touchStart = true;
});

bestSlider.addEventListener("touchend", function () {
  if (touchEnd && touchStart) {
    let deltaX = touchEndX - touchStartX;
    if (deltaX < -50) {
      chooseNextSelect();
      touchStart = false;
      touchEnd = false;
    } else if (deltaX > 50) {
      choosePrevSelect();
      touchStart = false;
      touchEnd = false;
    }
  }
});

function choosePrevSelect() {
  bestSelects[currentIndex].classList.remove("selected");
  if (currentIndex > 0) {
    currentIndex--;
    bestSelects[currentIndex].classList.add("selected");
  } else {
    currentIndex = bestSelects.length - 1;
    bestSelects[currentIndex].classList.add("selected");
  }
}

function chooseNextSelect() {
  bestSelects[currentIndex].classList.remove("selected");
  if (currentIndex < bestSelects.length - 1) {
    bestSelects[currentIndex].classList.remove("selected");
    currentIndex++;
    bestSelects[currentIndex].classList.add("selected");
  } else {
    currentIndex = 0;
    bestSelects[currentIndex].classList.add("selected");
  }
}

const mainBestSelects = document.querySelectorAll(
  ".main-filter-select.best-select"
);

mainBestSelects.forEach((bestSelect) => {
  bestSelect.addEventListener("click", () => {
    mainBestSelects.forEach((e) => {
      e.classList.remove("selected");
    });
    bestSelect.classList.add("selected");

    let selectDataSlide = bestSelect.getAttribute("data-slide-to");
    bestSlider
      .querySelectorAll(".itc-slider__indicator")
      .forEach((indicator) => {
        if (indicator.getAttribute("data-slide-to") == selectDataSlide) {
          indicator.click();
        }
      });
  });
});
