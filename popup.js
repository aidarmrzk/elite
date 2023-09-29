if (document.querySelector(".callback-popup-form")) {
  let formCallback = document.querySelector(".callback-popup-form");
  document.querySelectorAll(".callback-popup-form-open").forEach((button) => {
    openPopup(button, formCallback);
  });
}

if (document.querySelector(".application-popup-form")) {
  let formApplication = document.querySelector(".application-popup-form");
  document
    .querySelectorAll(".application-popup-form-button")
    .forEach((button) => {
      openPopup(button, formApplication);
    });
}

if (document.querySelector(".question-popup-form")) {
  let formQuestion = document.querySelector(".question-popup-form");
  document.querySelectorAll(".question-popup-form-button").forEach((button) => {
    openPopup(button, formQuestion);
  });
}

function openPopup(button, form) {
  const popupShadow = document.querySelector(".popup-shadow");
  button.addEventListener("click", () => {
    popupShadow.classList.add("visible");
    form.classList.add("visible");
    form.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    popupShadow.addEventListener("click", () => {
      popupShadow.classList.remove("visible");
      form.classList.remove("visible");
    });
  });
}
