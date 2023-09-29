const mainFilterSelects = document.querySelectorAll(".main-filter-selects");

let isDragging = false;
let isSwiping = false;
let initialX;
let currentX;
let xOffset = 0;

mainFilterSelects.forEach((mainFilterSelect) => {
  const widthMainFilterSelect = mainFilterSelect.offsetWidth;
  if (mainFilterSelect.closest(".selects-box")) {
    const selectsBox = mainFilterSelect.closest(".selects-box");
    const widthSelectsBox = selectsBox.offsetWidth;
    // console.log("Ширина selectsBox: " + widthSelectsBox);
    // console.log("Ширина mainFilterSelect: " + widthMainFilterSelect);

    if (widthMainFilterSelect > widthSelectsBox) {
      console.log("Работаем");

      // События мыши
      mainFilterSelect.addEventListener("mousedown", dragStart);
      function dragStart(event) {
        console.log("мышь");
        const targetElement = event.target.closest(".main-filter-selects");
        mainFilterSelect.style.cursor = "grabbing";

        if (targetElement === mainFilterSelect) {
          initialX = event.clientX - xOffset;
          isDragging = true;
        }
      }

      mainFilterSelect.addEventListener("mousemove", drag);
      mainFilterSelect.addEventListener("mouseup", dragEnd);

      function drag(event) {
        if (isDragging) {
          currentX = event.clientX - initialX;
          xOffset = currentX;
          if (xOffset > widthSelectsBox - widthMainFilterSelect - 10) {
            if (xOffset > 0) {
              xOffset = 0;
            }
            setTranslate(xOffset, mainFilterSelect);
          }
        }
      }

      function dragEnd(event) {
        initialX = currentX;
        isDragging = false;
        mainFilterSelect.style.cursor = "grab";
      }

      // События свайпа
      mainFilterSelect.addEventListener("touchstart", swipeStart);
      function swipeStart(event) {
        console.log("касание");
        const targetElement = event.target.closest(".main-filter-selects");
        mainFilterSelect.style.cursor = "grabbing";

        if (targetElement === mainFilterSelect) {
          initialX = event.touches[0].clientX - xOffset;
          isSwiping = true;
        }
      }

      mainFilterSelect.addEventListener("touchmove", swipe);
      mainFilterSelect.addEventListener("touchend", swipeEnd);

      function swipe(event) {
        if (isSwiping) {
          currentX = event.touches[0].clientX - initialX;
          xOffset = currentX;
          if (xOffset > widthSelectsBox - widthMainFilterSelect - 10) {
            if (xOffset > 0) {
              xOffset = 0;
            }
            setTranslate(xOffset, mainFilterSelect);
          }
        }
      }

      function swipeEnd(event) {
        initialX = currentX;
        isSwiping = false;
        mainFilterSelect.style.cursor = "grab";
      }

      function setTranslate(xPos, element) {
        element.style.transform = "translate3d(" + xPos + "px, 0, 0)";
      }
    }
  }
});
