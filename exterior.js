const panelExteriorPhoto = document.querySelector(
  ".project-exterior-panel-text-photo"
);
const exteriorPhoto = document.querySelector("#exterior-slider");

panelExteriorPhoto.addEventListener("click", () => {
  if (document.querySelector(".project-exterior-panel-text-video")) {
    document
      .querySelector(".project-exterior-panel-text-video")
      .classList.remove("selected");
    document
      .querySelector(".section-project-object-video-row")
      .classList.remove("selected");
  }
  panelExteriorPhoto.classList.add("selected");
  exteriorPhoto.classList.add("selected");
});

if (document.querySelector(".project-exterior-panel-text-video")) {
  document
    .querySelector(".project-exterior-panel-text-video")
    .addEventListener("click", () => {
      panelExteriorPhoto.classList.remove("selected");
      exteriorPhoto.classList.remove("selected");
      document
        .querySelector(".project-exterior-panel-text-video")
        .classList.add("selected");
      document
        .querySelector(".section-project-object-video-row")
        .classList.add("selected");
    });
}
