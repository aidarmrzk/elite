document.addEventListener("DOMContentLoaded", () => {
  if (
    document.querySelector(
      ".section-main-slider-projects .project-objects-container"
    )
  ) {
    function changeReliable() {
      const container = document.querySelector(
        ".section-main-slider-projects .project-objects-container"
      );
      if (
        container.querySelectorAll(".itc-slider__item").length == 1 ||
        (container.querySelectorAll(".itc-slider__item").length <= 3 &&
          window.innerWidth > 1390) ||
        (container.querySelectorAll(".itc-slider__item").length <= 2 &&
          1390 > window.innerWidth &&
          window.innerWidth > 700)
      ) {
        container.querySelectorAll(".itc-slider__btn").forEach(function (btn) {
          btn.remove();
        });
        container.querySelector("ol").remove();
      } else {
        let slider1 = ItcSlider.getOrCreateInstance(
          ".section-main-slider-projects .project-slider"
        );
      }

      const reliable_selelects = document.querySelectorAll(
        ".section-main-slider-projects .main-filter-select"
      );

      reliable_selelects.forEach(function (element) {
        element.addEventListener("click", () => {
          reliable_selelects.forEach((e) => {
            e.classList.remove("selected");
          });
          element.classList.add("selected");

          let containerHeight = container.clientHeight;

          container.style.height = containerHeight + "px";
          container.classList.add("opacity");

          let category = element.dataset.category;

          setTimeout(function () {
            fetch(ajaxurl.url, {
              method: "POST",
              body: new URLSearchParams({
                action: "reliable_projects",
                category: category,
              }),
            })
              .then((response) => response.text())
              .then((response) => {
                container.innerHTML = "";

                let slider = document.createElement("div");
                slider.classList.add("project-slider");
                container.appendChild(slider);

                let sliderWrapper = document.createElement("div");
                sliderWrapper.classList.add(
                  "itc-slider__wrapper",
                  "wrapper-currency"
                );
                slider.appendChild(sliderWrapper);

                let sliderItems = document.createElement("div");
                sliderItems.classList.add(
                  "itc-slider__items",
                  "project-objects-slider-items"
                );
                sliderWrapper.appendChild(sliderItems);

                if (response === "") {
                  sliderItems.innerHTML = `<div class="itc-slider__item project-objects-slider-item">
                                    <div class="project-object-card">
                                      <div class="project-object-card-info">
                                        <div class="project-object-card-title">
                                          <h4>Скоро появятся</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>`;
                  container.classList.remove("opacity");
                } else {
                  function createSlider(callback) {
                    let sliderIndicators = document.createElement("ol");
                    sliderIndicators.classList.add(
                      "itc-slider__indicators",
                      "project-objects-slider__indicators"
                    );
                    slider.appendChild(sliderIndicators);

                    let sliderPrevButton = document.createElement("button");
                    sliderPrevButton.classList.add(
                      "itc-slider__btn",
                      "itc-slider__btn_prev"
                    );
                    slider.appendChild(sliderPrevButton);

                    let sliderNextButton = document.createElement("button");
                    sliderNextButton.classList.add(
                      "itc-slider__btn",
                      "itc-slider__btn_next"
                    );
                    slider.appendChild(sliderNextButton);

                    sliderPrevButton.innerHTML = `<svg width="53" height="8" viewBox="0 0 53 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM53 4.5L1 4.5V3.5L53 3.5V4.5Z" fill="#502E3F" />
                  </svg>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.646458 4.35355C0.451197 4.15829 0.451197 3.84171 0.646458 3.64645L3.82844 0.464466C4.0237 0.269204 4.34028 0.269204 4.53555 0.464466C4.73081 0.659728 4.73081 0.976311 4.53555 1.17157L1.70712 4L4.53555 6.82843C4.73081 7.02369 4.73081 7.34027 4.53555 7.53553C4.34028 7.7308 4.0237 7.7308 3.82844 7.53553L0.646458 4.35355ZM23.5103 4.5L1.00001 4.5V3.5L23.5103 3.5V4.5Z" fill="#502E3F" />
                  </svg>`;
                    sliderNextButton.innerHTML = `<svg width="53" height="8" viewBox="0 0 53 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.3536 4.35355C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464466C48.9763 0.269204 48.6597 0.269204 48.4645 0.464466C48.2692 0.659728 48.2692 0.976311 48.4645 1.17157L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53553C48.6597 7.7308 48.9763 7.7308 49.1716 7.53553L52.3536 4.35355ZM0 4.5L52 4.5V3.5L0 3.5L0 4.5Z" fill="#502E3F" />
                  </svg>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3545 4.35355C23.5498 4.15829 23.5498 3.84171 23.3545 3.64645L20.1725 0.464466C19.9773 0.269204 19.6607 0.269204 19.4654 0.464466C19.2702 0.659728 19.2702 0.976311 19.4654 1.17157L22.2939 4L19.4654 6.82843C19.2702 7.02369 19.2702 7.34027 19.4654 7.53553C19.6607 7.7308 19.9773 7.7308 20.1725 7.53553L23.3545 4.35355ZM0.490723 4.5L23.001 4.5V3.5L0.490723 3.5L0.490723 4.5Z" fill="#502E3F" />
                  </svg>`;

                    sliderItems.innerHTML = response;

                    sliderItems
                      .querySelectorAll(".itc-slider__item")
                      .forEach((item, index) => {
                        const sliderIndicator = document.createElement("li");
                        sliderIndicators.appendChild(sliderIndicator);
                        sliderIndicator.classList.add("itc-slider__indicator");
                        sliderIndicator.setAttribute("data-slide-to", index);
                      });

                    let slider1 = {};
                    delete slider1;
                    callback(container);
                  }
                  createSlider(callback);
                }
              })
              .catch((err) => console.log(err));
            function callback(container) {
              if (
                container.querySelectorAll(".itc-slider__item").length == 1 ||
                (container.querySelectorAll(".itc-slider__item").length <= 3 &&
                  window.innerWidth > 1400) ||
                (container.querySelectorAll(".itc-slider__item").length <= 2 &&
                  1400 > window.innerWidth &&
                  window.innerWidth > 700)
              ) {
                container
                  .querySelectorAll(".itc-slider__btn")
                  .forEach(function (btn) {
                    btn.remove();
                  });
                container.querySelector("ol").remove();
              } else if (window.innerWidth < 700) {
                let allsliderItem =
                  container.querySelectorAll(".itc-slider__item");
                let lastItem = allsliderItem[allsliderItem.length - 1];
                lastItem.classList.add("stop-slider");
              } else {
                let newSlider = ItcSlider.getOrCreateInstance(
                  ".section-main-slider-projects .project-slider"
                );
              }
              changeCurrency();
              container.classList.remove("opacity");
            }
          }, 600);
        });
      });
    }
    changeReliable();
  }

  if (
    document.querySelector(".section-main-slider-districts .project-objects")
  ) {
    function changeDistrict() {
      const container = document.querySelector(
        ".section-main-slider-districts .project-objects"
      );
      if (
        container.querySelectorAll(".itc-slider__item").length == 1 ||
        (container.querySelectorAll(".itc-slider__item").length <= 3 &&
          window.innerWidth > 750) ||
        (container.querySelectorAll(".itc-slider__item").length <= 2 &&
          750 > window.innerWidth &&
          window.innerWidth > 450)
      ) {
        container.querySelectorAll(".itc-slider__btn").forEach(function (btn) {
          btn.remove();
        });
        container.querySelector("ol").remove();
      } else {
        let slider1 = ItcSlider.getOrCreateInstance(
          ".section-main-slider-districts .project-slider"
        );
      }

      const district_selects = document.querySelectorAll(
        ".section-main-slider-districts .main-filter-select"
      );

      district_selects.forEach(function (element) {
        element.addEventListener("click", () => {
          district_selects.forEach((e) => {
            e.classList.remove("selected");
          });
          element.classList.add("selected");

          let containerHeight = container.clientHeight;

          container.style.height = containerHeight + "px";
          container.classList.add("opacity");

          let category = element.dataset.category;

          setTimeout(function () {
            fetch(ajaxurl.url, {
              method: "POST",
              body: new URLSearchParams({
                action: "main_slider_districts",
                category: category,
              }),
            })
              .then((response) => response.text())
              .then((response) => {
                container.innerHTML = "";

                let slider = document.createElement("div");
                slider.classList.add("project-slider");
                container.appendChild(slider);

                let sliderWrapper = document.createElement("div");
                sliderWrapper.classList.add("itc-slider__wrapper");
                slider.appendChild(sliderWrapper);

                let sliderItems = document.createElement("div");
                sliderItems.classList.add("itc-slider__items");
                sliderWrapper.appendChild(sliderItems);

                if (response === "") {
                  sliderItems.innerHTML = `<div class="itc-slider__item project-objects-slider-item">
                                    <div class="project-object-card">
                                      <div class="project-object-card-info">
                                        <div class="project-object-card-title">
                                          <h4>Скоро появятся</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>`;
                  container.classList.remove("opacity");
                } else {
                  function createSlider(callback) {
                    let sliderIndicators = document.createElement("ol");
                    sliderIndicators.classList.add("itc-slider__indicators");
                    slider.appendChild(sliderIndicators);

                    let sliderPrevButton = document.createElement("button");
                    sliderPrevButton.classList.add(
                      "itc-slider__btn",
                      "itc-slider__btn_prev"
                    );
                    slider.appendChild(sliderPrevButton);

                    let sliderNextButton = document.createElement("button");
                    sliderNextButton.classList.add(
                      "itc-slider__btn",
                      "itc-slider__btn_next"
                    );
                    slider.appendChild(sliderNextButton);

                    sliderPrevButton.innerHTML = `<svg width="53" height="8" viewBox="0 0 53 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM53 4.5L1 4.5V3.5L53 3.5V4.5Z" fill="#502E3F" />
                  </svg>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.646458 4.35355C0.451197 4.15829 0.451197 3.84171 0.646458 3.64645L3.82844 0.464466C4.0237 0.269204 4.34028 0.269204 4.53555 0.464466C4.73081 0.659728 4.73081 0.976311 4.53555 1.17157L1.70712 4L4.53555 6.82843C4.73081 7.02369 4.73081 7.34027 4.53555 7.53553C4.34028 7.7308 4.0237 7.7308 3.82844 7.53553L0.646458 4.35355ZM23.5103 4.5L1.00001 4.5V3.5L23.5103 3.5V4.5Z" fill="#502E3F" />
                  </svg>`;
                    sliderNextButton.innerHTML = `<svg width="53" height="8" viewBox="0 0 53 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.3536 4.35355C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464466C48.9763 0.269204 48.6597 0.269204 48.4645 0.464466C48.2692 0.659728 48.2692 0.976311 48.4645 1.17157L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53553C48.6597 7.7308 48.9763 7.7308 49.1716 7.53553L52.3536 4.35355ZM0 4.5L52 4.5V3.5L0 3.5L0 4.5Z" fill="#502E3F" />
                  </svg>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3545 4.35355C23.5498 4.15829 23.5498 3.84171 23.3545 3.64645L20.1725 0.464466C19.9773 0.269204 19.6607 0.269204 19.4654 0.464466C19.2702 0.659728 19.2702 0.976311 19.4654 1.17157L22.2939 4L19.4654 6.82843C19.2702 7.02369 19.2702 7.34027 19.4654 7.53553C19.6607 7.7308 19.9773 7.7308 20.1725 7.53553L23.3545 4.35355ZM0.490723 4.5L23.001 4.5V3.5L0.490723 3.5L0.490723 4.5Z" fill="#502E3F" />
                  </svg>`;

                    sliderItems.innerHTML = response;

                    sliderItems
                      .querySelectorAll(".itc-slider__item")
                      .forEach((item, index) => {
                        const sliderIndicator = document.createElement("li");
                        sliderIndicators.appendChild(sliderIndicator);
                        sliderIndicator.classList.add("itc-slider__indicator");
                        sliderIndicator.setAttribute("data-slide-to", index);
                      });
                    let slider1 = {};
                    delete slider1;
                    callback(container);
                  }
                  createSlider(callback);
                }
              })
              .catch((err) => console.log(err));
            function callback(container) {
              if (
                container.querySelectorAll(".itc-slider__item").length == 1 ||
                (container.querySelectorAll(".itc-slider__item").length <= 3 &&
                  window.innerWidth > 750) ||
                (container.querySelectorAll(".itc-slider__item").length <= 2 &&
                  750 > window.innerWidth &&
                  window.innerWidth > 450)
              ) {
                container
                  .querySelectorAll(".itc-slider__btn")
                  .forEach(function (btn) {
                    btn.remove();
                  });
                container.querySelector("ol").remove();
              } else {
                let newSlider = ItcSlider.getOrCreateInstance(
                  ".section-main-slider-districts .project-slider"
                );
              }
              container.classList.remove("opacity");
            }
          }, 600);
        });
      });
    }
    changeDistrict();
  }

  if (
    document.querySelector(
      ".section-main-slider-news .project-exterior-container"
    )
  ) {
    function changeNew() {
      const container = document.querySelector(
        ".section-main-slider-news .project-exterior-container"
      );
      if (
        container.querySelectorAll(".itc-slider__item").length == 1 ||
        (container.querySelectorAll(".itc-slider__item").length <= 3 &&
          window.innerWidth > 1390) ||
        (container.querySelectorAll(".itc-slider__item").length <= 2 &&
          1390 > window.innerWidth &&
          window.innerWidth > 700)
      ) {
        container.querySelectorAll(".itc-slider__btn").forEach(function (btn) {
          btn.remove();
        });
        container.querySelector("ol").remove();
      } else {
        let slider1 = ItcSlider.getOrCreateInstance(
          ".section-main-slider-news .exterior-slider"
        );
      }

      const district_selects = document.querySelectorAll(
        ".section-main-slider-news .main-filter-select"
      );

      district_selects.forEach(function (element) {
        element.addEventListener("click", () => {
          district_selects.forEach((e) => {
            e.classList.remove("selected");
          });
          element.classList.add("selected");

          let containerHeight = container.clientHeight;

          container.style.height = containerHeight + "px";
          container.classList.add("opacity");

          let category = element.dataset.category;

          setTimeout(function () {
            fetch(ajaxurl.url, {
              method: "POST",
              body: new URLSearchParams({
                action: "main_news_banner",
                category: category,
              }),
            })
              .then((response) => response.text())
              .then((response) => {
                container.innerHTML = "";

                let slider = document.createElement("div");
                slider.classList.add("exterior-slider");
                container.appendChild(slider);

                let sliderWrapper = document.createElement("div");
                sliderWrapper.classList.add("itc-slider__wrapper");
                slider.appendChild(sliderWrapper);

                let sliderItems = document.createElement("div");
                sliderItems.classList.add(
                  "itc-slider__items",
                  "project-objects-slider-items"
                );
                sliderWrapper.appendChild(sliderItems);

                if (response === "") {
                  sliderItems.innerHTML = `<div class="itc-slider__item project-objects-slider-item">
                                    <div class="project-object-card">
                                      <div class="project-object-card-info">
                                        <div class="project-object-card-title">
                                          <h4>Скоро появятся</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>`;
                  container.classList.remove("opacity");
                } else {
                  function createSlider(callback) {
                    let sliderIndicators = document.createElement("ol");
                    sliderIndicators.classList.add(
                      "itc-slider__indicators",
                      "project-objects-slider__indicators"
                    );
                    slider.appendChild(sliderIndicators);

                    let sliderPrevButton = document.createElement("button");
                    sliderPrevButton.classList.add(
                      "itc-slider__btn",
                      "itc-slider__btn_prev"
                    );
                    slider.appendChild(sliderPrevButton);

                    let sliderNextButton = document.createElement("button");
                    sliderNextButton.classList.add(
                      "itc-slider__btn",
                      "itc-slider__btn_next"
                    );
                    slider.appendChild(sliderNextButton);

                    sliderPrevButton.innerHTML = `<svg width="53" height="8" viewBox="0 0 53 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM53 4.5L1 4.5V3.5L53 3.5V4.5Z" fill="#502E3F" />
                  </svg>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.646458 4.35355C0.451197 4.15829 0.451197 3.84171 0.646458 3.64645L3.82844 0.464466C4.0237 0.269204 4.34028 0.269204 4.53555 0.464466C4.73081 0.659728 4.73081 0.976311 4.53555 1.17157L1.70712 4L4.53555 6.82843C4.73081 7.02369 4.73081 7.34027 4.53555 7.53553C4.34028 7.7308 4.0237 7.7308 3.82844 7.53553L0.646458 4.35355ZM23.5103 4.5L1.00001 4.5V3.5L23.5103 3.5V4.5Z" fill="#502E3F" />
                  </svg>`;
                    sliderNextButton.innerHTML = `<svg width="53" height="8" viewBox="0 0 53 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.3536 4.35355C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464466C48.9763 0.269204 48.6597 0.269204 48.4645 0.464466C48.2692 0.659728 48.2692 0.976311 48.4645 1.17157L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53553C48.6597 7.7308 48.9763 7.7308 49.1716 7.53553L52.3536 4.35355ZM0 4.5L52 4.5V3.5L0 3.5L0 4.5Z" fill="#502E3F" />
                  </svg>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3545 4.35355C23.5498 4.15829 23.5498 3.84171 23.3545 3.64645L20.1725 0.464466C19.9773 0.269204 19.6607 0.269204 19.4654 0.464466C19.2702 0.659728 19.2702 0.976311 19.4654 1.17157L22.2939 4L19.4654 6.82843C19.2702 7.02369 19.2702 7.34027 19.4654 7.53553C19.6607 7.7308 19.9773 7.7308 20.1725 7.53553L23.3545 4.35355ZM0.490723 4.5L23.001 4.5V3.5L0.490723 3.5L0.490723 4.5Z" fill="#502E3F" />
                  </svg>`;

                    sliderItems.innerHTML = response;

                    sliderItems
                      .querySelectorAll(".itc-slider__item")
                      .forEach((item, index) => {
                        const sliderIndicator = document.createElement("li");
                        sliderIndicators.appendChild(sliderIndicator);
                        sliderIndicator.classList.add("itc-slider__indicator");
                        sliderIndicator.setAttribute("data-slide-to", index);
                      });

                    let slider1 = {};
                    delete slider1;
                    callback(container);
                  }
                  createSlider(callback);
                }
              })
              .catch((err) => console.log(err));
            function callback(container) {
              if (
                container.querySelectorAll(".itc-slider__item").length == 1 ||
                (container.querySelectorAll(".itc-slider__item").length <= 3 &&
                  window.innerWidth > 1390) ||
                (container.querySelectorAll(".itc-slider__item").length <= 2 &&
                  1390 > window.innerWidth &&
                  window.innerWidth > 700)
              ) {
                container
                  .querySelectorAll(".itc-slider__btn")
                  .forEach(function (btn) {
                    btn.remove();
                  });
                container.querySelector("ol").remove();
              } else if (window.innerWidth < 700) {
                let allsliderItem =
                  container.querySelectorAll(".itc-slider__item");
                let lastItem = allsliderItem[allsliderItem.length - 1];
                lastItem.classList.add("stop-slider");
              } else {
                let newSlider = ItcSlider.getOrCreateInstance(
                  ".section-main-slider-news .exterior-slider"
                );
              }
              container.classList.remove("opacity");
            }
          }, 600);
        });
      });
    }
    changeNew();
  }
});
