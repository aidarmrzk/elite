const projectObjecPlanImgs = document.querySelectorAll(
  ".project-object-plan-img img"
);
const planNextButton = document.querySelector(
  ".project-object-plan-nextButton"
);
const planPrevButton = document.querySelector(
  ".project-object-plan-prevButton"
);

document.addEventListener("DOMContentLoaded", () => {
  const projectObjecPlanImgBlock = document.querySelector(
    ".project-object-plan-img"
  );
  projectObjecPlanImgs.forEach((img) => {
    if (
      img.offsetWidth >= projectObjecPlanImgBlock.offsetWidth &&
      img.offsetWidth >= img.offsetHeight
    ) {
      img.style.width = "60%";
    } else {
      img.style.height = "90%";
    }
  });
});

let currentIndex = 0;
projectObjecPlanImgs[currentIndex].classList.add("active");

if (projectObjecPlanImgs.length == 1) {
  planNextButton.style.display = "none";
  planPrevButton.style.display = "none";
}

planNextButton.addEventListener("click", () => {
  projectObjecPlanImgs[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % projectObjecPlanImgs.length;
  projectObjecPlanImgs[currentIndex].classList.add("active");
});

planPrevButton.addEventListener("click", () => {
  projectObjecPlanImgs[currentIndex].classList.remove("active");
  currentIndex =
    (currentIndex - 1 + projectObjecPlanImgs.length) %
    projectObjecPlanImgs.length;
  projectObjecPlanImgs[currentIndex].classList.add("active");
});
