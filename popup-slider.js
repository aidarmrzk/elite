const body = document.querySelector("body");
const projectImg = document.querySelector(".section-project-object-offer-img");
const popupImg = document.querySelector(".popup-img");
const popupImgClose = document.querySelector(".popup-img-close");
const popupButtons = document.querySelectorAll(".popup-button");
const popupImages = document.querySelectorAll(".popup-image");
const popupButtonsBlock = document.querySelector(".popup-buttons");

projectImg.addEventListener("click", () => {
  popupImg.classList.add("visible");
  body.classList.add("modal-open");
  if (popupButtonsBlock.classList.contains("opacity")) {
    popupButtonsBlock.classList.remove("opacity");
  }
  popupImgClose.addEventListener("click", () => {
    popupImg.classList.remove("visible");
    body.classList.remove("modal-open");
  });
});

function changePopupImg() {
  popupImages[0].classList.add("active");

  popupButtons.forEach((popupButton, index) => {
    popupButton.addEventListener("mouseleave", () => {
      popupButtonsBlock.classList.add("opacity");
    });
    popupButton.addEventListener("mouseenter", () => {
      if (popupButtonsBlock.classList.contains("opacity")) {
        popupButtonsBlock.classList.remove("opacity");
      }
    });
    popupButton.addEventListener("click", () => {
      popupImages.forEach((popupImage) => {
        popupImage.classList.remove("active");
      });
      popupImages[index].classList.add("active");
    });
  });
}
changePopupImg();
