const filterListBox = document.querySelector(
  ".questions-answers-search-filter-list-box"
);

filterListBox.addEventListener("mouseleave", () => {
  filterListBox.parentElement.classList.remove("open");
});

let faqSearchBlock = document.querySelector(".questions-answers-search-block");

faqSearchBlock.addEventListener("click", () => {
  faqSearchBlock.classList.toggle("open");
});

const faqlistItems = document.querySelectorAll(
  ".questions-answers-search-filter-list li"
);

faqlistItems.forEach((node) => {
  node.addEventListener("click", (event) => {
    const parentList = event.target.closest(
      ".questions-answers-search-filter-list"
    );
    parentList.querySelectorAll("li").forEach((item) => {
      item.classList.remove("hidden");
    });
    event.target.classList.add("hidden");
    const parentBlock = event.target.closest(".questions-answers-search-block");
    parentBlock.querySelector(
      ".questions-answers-search-filter span"
    ).textContent = event.target.textContent;
  });
});

if (document.querySelector(".questions-answers-search-button.new")) {
  document
    .querySelector(".questions-answers-search-button.new")
    .addEventListener("click", () => {
      let container = document.querySelector(".news");
      let category = document
        .querySelector(".questions-answers-search-filter-list li.hidden")
        .getAttribute("data-category");
      let value = document.querySelector(
        ".questions-answers-search-input input"
      ).value;

      container.classList.add("opacity");

      let newData = {
        category: category,
        value: value,
      };
      console.log(newData);

      setTimeout(function () {
        fetch(ajaxurl.url, {
          method: "POST",
          body: new URLSearchParams({
            action: "news_action",
            newData: newData,
          }),
        })
          .then((response) => response.text())
          .then((response) => {
            container.innerHTML = response;
            container.classList.remove("opacity");
          })
          .catch((err) => console.log(err));
      }, 600);
    });
}

if (document.querySelector(".questions-answers-search-button.faq")) {
  document
    .querySelector(".questions-answers-search-button.faq")
    .addEventListener("click", () => {
      let container = document.querySelector(".questions-answers-content");
      let category = document
        .querySelector(".questions-answers-search-filter-list li.hidden")
        .getAttribute("data-category");
      let value = document.querySelector(
        ".questions-answers-search-input input"
      ).value;

      container.classList.add("opacity");

      let faqData = {
        category: category,
        value: value,
      };
      console.log(faqData);

      setTimeout(function () {
        fetch(ajaxurl.url, {
          method: "POST",
          body: new URLSearchParams({
            action: "faqs_action",
            faqData: faqData,
          }),
        })
          .then((response) => response.text())
          .then((response) => {
            container.innerHTML = response;
            container.classList.remove("opacity");
          })
          .catch((err) => console.log(err));
      }, 600);
    });
}
