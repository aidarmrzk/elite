document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#section-main-banner")) {
    const allMainNavLi = document.querySelectorAll(".main-nav-li");
    const sectionMainBanner = document.querySelector("#section-main-banner");
    let isMouseEnter = false;

    if (window.innerWidth > 900) {
      for (const mainNavLi of allMainNavLi) {
        mainNavLi.addEventListener("mouseenter", () => {
          sectionMainBanner.classList.add("active");
          isMouseEnter = true;
        });
        mainNavLi.addEventListener("mousemove", () => {
          if (!isMouseEnter) {
            sectionMainBanner.classList.add("active");
          }
        });
        mainNavLi.addEventListener("mouseleave", () => {
          sectionMainBanner.classList.remove("active");
          isMouseEnter = false;
        });
      }
    }
  }
});
