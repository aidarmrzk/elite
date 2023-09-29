if (
  document.querySelector(".news") &&
  document.querySelectorAll(".section-news .main-filter-select")
) {
  function getNews() {
    const container = document.querySelector(".news");
    const new_selects = document.querySelectorAll(
      ".section-news .main-filter-select"
    );

    new_selects.forEach(function (element) {
      element.addEventListener("click", () => {
        new_selects.forEach((e) => {
          e.classList.remove("selected");
        });
        element.classList.add("selected");

        container.classList.add("opacity");

        let category = element.dataset.category;

        setTimeout(function () {
          fetch(ajaxurlRequest.url, {
            method: "POST",
            body: new URLSearchParams({
              action: "news_action",
              category: category,
            }),
          })
            .then((response) => response.text())
            .then((response) => {
              container.innerHTML = response;
              cascadFooter();
              container.classList.remove("opacity");
            })
            .catch((err) => console.log(err));
        }, 600);
      });
    });
  }
  getNews();
}

if (
  document.querySelector(".all-builder") &&
  document.querySelector(".all-districts-filter")
) {
  function getDistrict() {
    const container = document.querySelector(".all-builder");

    const district_selects = document.querySelectorAll(
      ".all-districts-filter .main-filter-select"
    );

    fetch(ajaxurlRequest.url, {
      method: "POST",
      body: new URLSearchParams({
        action: "districts_action",
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        const parsedResponse = JSON.parse(response);
        const parsedResponseValues = Object.values(parsedResponse);
        getDistrictCard(parsedResponseValues);

        district_selects.forEach(function (element) {
          element.addEventListener("click", () => {
            district_selects.forEach((e) => {
              e.classList.remove("selected");
            });
            element.classList.add("selected");
            container.classList.add("opacity");

            setTimeout(function () {
              container.innerHTML = "";
              let category = element.dataset.category;
              let filteredObjects;

              if (category == "all") {
                filteredObjects = parsedResponseValues;
              } else {
                filteredObjects = parsedResponseValues.filter(
                  (obj) =>
                    obj.hasOwnProperty("category") && obj.category === category
                );
              }

              if (filteredObjects.length == 0) {
                let cardContainer = document.createElement("div");
                cardContainer.classList.add("card-container");
                container.appendChild(cardContainer);

                let cardBuilder = document.createElement("div");
                cardBuilder.classList.add("card-builder");
                cardContainer.appendChild(cardBuilder);

                let cardBuilderTitle = document.createElement("h5");
                cardBuilder.appendChild(cardBuilderTitle);
                cardBuilderTitle.innerHTML = "Скоро появятся";

                removeMoreNews();
                cascadFooter();
              } else {
                getDistrictCard(filteredObjects);
              }
              container.classList.remove("opacity");
            }, 600);
          });
        });
      });

    function getDistrictCard(filteredObjects) {
      let maxCount = 12;
      filteredObjects.forEach((filteredObject, index) => {
        if (index < maxCount) {
          creatDistrictCard(filteredObject, container);
        }
      });
      removeMoreNews();

      if (filteredObjects.length > maxCount) {
        createMoreNews(filteredObjects, maxCount);

        document.querySelector(".more-news").addEventListener("click", () => {
          loadMoreObjects(filteredObjects, maxCount, container);
        });
      }
      cascadFooter();
    }
  }
  function loadMoreObjects(filteredObjects, maxCount, container) {
    let moreCount = 12;
    filteredObjects.forEach((filteredObject, index) => {
      if (index >= maxCount && index < maxCount + moreCount) {
        creatDistrictCard(filteredObject, container);
      }
    });
    maxCount = maxCount + moreCount;
    removeMoreNews();

    if (filteredObjects.length > maxCount) {
      createMoreNews(filteredObjects, maxCount);

      document.querySelector(".more-news").addEventListener("click", () => {
        loadMoreObjects(filteredObjects, maxCount, container);
      });
    }
    cascadFooter();
  }
  function creatDistrictCard(filteredObject, container) {
    let districtName = filteredObject.title;
    let trnsformedDistrictName = districtName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    let districtLink = "/district/" + trnsformedDistrictName;
    let districtImg = filteredObject.img;
    let districtPrice = filteredObject.min_price;
    let objectsCount = filteredObject.objects_count;
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    container.appendChild(cardContainer);

    let cardBuilder = document.createElement("a");
    cardBuilder.classList.add("card-builder");
    cardBuilder.href = districtLink;
    cardContainer.appendChild(cardBuilder);

    let cardBuilderImg = document.createElement("div");
    cardBuilderImg.classList.add("card-builder-img");
    cardBuilderImg.innerHTML = districtImg;
    cardBuilder.appendChild(cardBuilderImg);

    let cardBuilderTitle = document.createElement("h5");
    cardBuilder.appendChild(cardBuilderTitle);
    cardBuilderTitle.innerHTML = districtName;

    let cardBuilderDiv = document.createElement("div");
    cardBuilder.appendChild(cardBuilderDiv);
    let objectsCountText = " предложений";
    if (objectsCount >= 2 && objectsCount <= 4) {
      objectsCountText = " предложения";
    } else if (objectsCount == 1) {
      objectsCountText = " предложение";
    }
    cardBuilderDiv.innerHTML =
      "<span>от $" +
      districtPrice +
      "</span><ul><li>" +
      objectsCount +
      objectsCountText +
      "</li></ul>";
  }
  function createMoreNews(filteredObjects, countDistrict) {
    moreNews = document.createElement("div");
    moreNews.classList.add("more-news");
    document.querySelector(".section-all-districts").appendChild(moreNews);
    moreNews.innerHTML =
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8881 5.0799C14.0181 4.8199 13.0581 4.6499 11.9981 4.6499C7.20813 4.6499 3.32812 8.5299 3.32812 13.3199C3.32812 18.1199 7.20813 21.9999 11.9981 21.9999C16.7881 21.9999 20.6681 18.1199 20.6681 13.3299C20.6681 11.5499 20.1281 9.8899 19.2081 8.5099" stroke="#502E3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1283 5.32L13.2383 2" stroke="#502E3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1317 5.32007L12.7617 7.78007" stroke="#502E3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
    let moreNewsText = document.createElement("p");
    moreNews.appendChild(moreNewsText);
    moreNewsText.innerHTML =
      "Загрузить еще объекты (" +
      countDistrict +
      " из " +
      filteredObjects.length +
      ")";
  }
  function removeMoreNews() {
    if (document.querySelector(".more-news")) {
      document.querySelector(".more-news").remove();
    }
  }
  getDistrict();
}
