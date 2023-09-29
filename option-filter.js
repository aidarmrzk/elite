let filterOption = document.querySelectorAll(".section-builder-filter-option");

filterOption.forEach((node) => {
  node.addEventListener("click", () => {
    filterOption.forEach((element) => {
      if (element != node) {
        element.classList.remove("open");
      }
    });

    node.classList.toggle("open");
  });
});

let advancedSearch = document.querySelector(".advanced-search");
let filterBlock = document.querySelector(
  ".section-builder-filter-select-block"
);
let filterSelects = document.querySelector(".section-builder-filter-selects");

advancedSearch.addEventListener("click", () => {
  advancedSearch.classList.toggle("open");
  filterBlock.classList.toggle("open");
  filterSelects.classList.toggle("open");
});

const optionlistItems = document.querySelectorAll(
  ".builder-filter-option-list li"
);
const filterSearchBlock = document.querySelector(
  ".section-builder-filter-search-block"
);

let filterSearchPuts = "";
let className = "";
let textFilter = "";
let dataFilter = "";

optionlistItems.forEach((node) => {
  node.addEventListener("click", (event) => {
    const parentList = event.target.closest(".section-builder-filter-option");
    const parentListTitle = parentList.querySelector(
      ".section-builder-filter-option-title"
    );
    const firstChild = parentList.querySelector("li:first-child");
    if (event.target.matches(":first-child")) {
      if (firstChild.classList.contains("selected")) {
      } else {
        parentList.querySelectorAll("li").forEach((e) => {
          e.classList.remove("selected");
          node.classList.add("selected");
          parentListTitle.classList.remove("selected");
          const ulFilters = filterSearchBlock.querySelectorAll("ul");
          ulFilters.forEach((ulFilter) => {
            if (
              ulFilter.className === parentList.getAttribute("data-classname")
            ) {
              ulFilter.remove();
            }
          });
        });
      }
    } else {
      const otherSelectedItems = parentList.querySelectorAll(
        "li.selected:not(:first-child)"
      );
      if (
        node.classList.contains("selected") &&
        otherSelectedItems.length == 1
      ) {
        node.classList.remove("selected");
        firstChild.classList.add("selected");
        parentListTitle.classList.remove("selected");
        const ulFilters = filterSearchBlock.querySelectorAll("ul");
        ulFilters.forEach((ulFilter) => {
          if (
            ulFilter.className === parentList.getAttribute("data-classname")
          ) {
            ulFilter.remove();
          }
        });
      } else if (
        node.classList.contains("selected") &&
        otherSelectedItems.length > 1
      ) {
        node.classList.remove("selected");
        const liFilters = document.querySelectorAll(
          "li.section-builder-filter-search-put"
        );
        liFilters.forEach((liFilter) => {
          if (
            node.getAttribute("data-filter") ===
            liFilter.getAttribute("data-filter")
          ) {
            liFilter.remove();
          }
        });
      } else {
        node.classList.add("selected");
        firstChild.classList.remove("selected");
        parentListTitle.classList.add("selected");
        className = event.target
          .closest(".section-builder-filter-option")
          .getAttribute("data-className");
        textFilter = node.textContent;
        dataFilter = node.getAttribute("data-filter");
        createFilter();
      }
    }
    filterSearchPuts = document.querySelectorAll(
      ".section-builder-filter-search-put"
    );
    filterSearchPuts.forEach((filterSearchPut) => {
      filterSearchPut.addEventListener("click", (event) => {
        const ul = event.target.closest("ul");
        if (
          filterSearchPut.getAttribute("data-filter") ===
            node.getAttribute("data-filter") &&
          ul.querySelectorAll("li").length === 1
        ) {
          ul.remove();
          filterSearchPut.remove();
          node.classList.remove("selected");
          firstChild.classList.add("selected");
          parentListTitle.classList.remove("selected");
        } else if (
          filterSearchPut.getAttribute("data-filter") ===
          node.getAttribute("data-filter")
        ) {
          filterSearchPut.remove();
          node.classList.remove("selected");
        }
      });
    });
  });
});

function createFilter() {
  let ulElement = filterSearchBlock.querySelector("ul." + className);

  const li = document.createElement("li");
  li.classList.add("section-builder-filter-search-put");
  li.setAttribute("data-filter", dataFilter);

  if (ulElement) {
    ulElement.appendChild(li);
  } else {
    const ul = document.createElement("ul");
    ul.classList.add(className);
    filterSearchBlock.appendChild(ul);
    ul.appendChild(li);
  }

  li.innerHTML = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.3478 10.8845C10.2774 10.8845 10.2077 10.8707 10.1427 10.8437C10.0777 10.8167 10.0186 10.7771 9.96896 10.7272L0.270387 1.02993C0.169794 0.929342 0.113281 0.792908 0.113281 0.650649C0.113281 0.508389 0.169794 0.371956 0.270387 0.271363C0.370979 0.17077 0.507412 0.114258 0.649672 0.114258C0.791932 0.114258 0.928365 0.17077 1.02896 0.271363L10.7275 9.96993C10.8023 10.0449 10.8531 10.1404 10.8737 10.2442C10.8942 10.3481 10.8836 10.4557 10.8431 10.5536C10.8025 10.6514 10.734 10.735 10.646 10.7939C10.558 10.8528 10.4545 10.8843 10.3487 10.8845H10.3478Z" fill="#502E3F"></path>
  <path d="M0.649348 10.8845C0.543397 10.8845 0.439827 10.8531 0.351712 10.7943C0.263597 10.7354 0.194889 10.6518 0.154263 10.5539C0.113636 10.4561 0.102913 10.3484 0.123447 10.2445C0.14398 10.1405 0.19485 10.045 0.269634 9.96994L9.96821 0.271363C10.018 0.221555 10.0771 0.182044 10.1422 0.155088C10.2073 0.128132 10.2771 0.114258 10.3475 0.114258C10.4179 0.114258 10.4877 0.128132 10.5528 0.155088C10.6178 0.182044 10.677 0.221555 10.7268 0.271363C10.7766 0.321172 10.8161 0.380303 10.8431 0.445381C10.87 0.510459 10.8839 0.580209 10.8839 0.650649C10.8839 0.721089 10.87 0.790839 10.8431 0.855917C10.8161 0.920995 10.7766 0.980126 10.7268 1.02993L1.02821 10.7285C0.978421 10.7782 0.919331 10.8175 0.85432 10.8443C0.789309 10.871 0.719654 10.8847 0.649348 10.8845Z" fill="#502E3F"></path>
  </svg>`;

  const span = document.createElement("span");
  span.textContent = textFilter;
  li.appendChild(span);
}

const optionCheckboxes = document.querySelectorAll(
  ".section-builder-filter-input"
);
optionCheckboxes.forEach((optionCheckbox) =>
  optionCheckbox.addEventListener("click", () => {
    optionCheckbox.classList.toggle("checked");
  })
);

document
  .querySelector(".section-builder-filter-search-button.start-selection")
  .addEventListener("click", () => {
    let filterData = {};
    getFilterElements();
    fetch(ajaxurl.url, {
      method: "POST",
      body: new URLSearchParams({
        action: "catalog_filter_objects",
        category: filterData,
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        const parsedResponse = JSON.parse(response);
        console.log(parsedResponse.result);
        console.log(parsedResponse.count);

        let filterCards = document.querySelector(
          ".section-builder-filter-cards"
        );
        filterCards.querySelectorAll(".card-container").forEach((event) => {
          event.remove();
        });
        filterCards.innerHTML = parsedResponse.result;
        document.querySelectorAll(".project-object-card").forEach((card) => {
          const cardContainer = document.createElement("div");
          cardContainer.classList.add("card-container");
          filterCards.appendChild(cardContainer);
          cardContainer.appendChild(card);
          changeCurrency();
        });
      })
      .catch((err) => console.log(err));
  });

function getFilterElements() {
  const pricerange = [];
  const location = [];
  const type = [];
  const room = [];
  const project = [];
  const developer = [];
  const comfort = [];
  const furnishings = [];
  const readyToMoveIn = [];
  const construction = [];
  const installment = [];
  const investments = [];
  const videoreview = [];
  const threedreview = [];
  const space = [];

  function getAttribute(elements, array) {
    elements.querySelectorAll("li").forEach((element) => {
      array.push(element.getAttribute("data-filter"));
    });
    return array;
  }
  if (document.querySelector("ul.pricerange")) {
    const pricerangeData = document.querySelector("ul.pricerange");
    getAttribute(pricerangeData, pricerange);
  }
  if (document.querySelector("ul.location")) {
    const locationData = document.querySelector("ul.location");
    getAttribute(locationData, location);
  }
  if (document.querySelector("ul.type")) {
    const typeData = document.querySelector("ul.type");
    getAttribute(typeData, type);
  }
  if (document.querySelector("ul.room")) {
    const roomData = document.querySelector("ul.room");
    getAttribute(roomData, room);
  }
  if (document.querySelector("ul.project")) {
    const projectData = document.querySelector("ul.project");
    getAttribute(projectData, project);
  }
  if (document.querySelector("ul.developer")) {
    const developerData = document.querySelector("ul.developer");
    getAttribute(developerData, developer);
  }
  if (document.querySelector("ul.comfort")) {
    const comfortData = document.querySelector("ul.comfort");
    getAttribute(comfortData, comfort);
  }
  if (document.querySelector("ul.furnishings")) {
    const furnishingsData = document.querySelector("ul.furnishings");
    getAttribute(furnishingsData, furnishings);
  }

  const readyCheckbox = document.querySelector(
    ".section-builder-filter-input.ready-to-move-in"
  );
  const constructionCheckbox = document.querySelector(
    ".section-builder-filter-input.construction"
  );
  const installmentCheckbox = document.querySelector(
    ".section-builder-filter-input.installment"
  );
  const investmentsCheckbox = document.querySelector(
    ".section-builder-filter-input.investments"
  );
  const videoreviewCheckbox = document.querySelector(
    ".section-builder-filter-input.videoreview"
  );
  const threedreviewCheckbox = document.querySelector(
    ".section-builder-filter-input.threedreview"
  );
  function letCheck(element, checkbox) {
    if (element.classList.contains("checked")) {
      checkbox.push(true);
    } else {
      checkbox.push(false);
    }
  }
  letCheck(readyCheckbox, readyToMoveIn);
  letCheck(constructionCheckbox, construction);
  letCheck(installmentCheckbox, installment);
  letCheck(investmentsCheckbox, investments);
  letCheck(videoreviewCheckbox, videoreview);
  letCheck(threedreviewCheckbox, threedreview);

  const minimumSpace = document.querySelector(
    ".section-builder-filter-block-inputs input[name='minimum']"
  ).value;
  const maximumSpace = document.querySelector(
    ".section-builder-filter-block-inputs input[name='maximum']"
  ).value;
  space.push(minimumSpace + "-" + maximumSpace);

  filterData = {
    pricerange: pricerange,
    location: location,
    type: type,
    room: room,
    project: project,
    developer: developer,
    comfort: comfort,
    furnishings: furnishings,
    "ready-to-move-in": readyToMoveIn,
    construction: construction,
    installment: installment,
    investments: investments,
    videoreview: videoreview,
    threedreview: threedreview,
    space: space,
  };
  console.log(filterData);
  return filterData;
}

document
  .querySelector(".section-builder-filter-search-button.start-reset")
  .addEventListener("click", () => {
    filterSearchBlock.querySelectorAll("ul").forEach((event) => {
      event.remove();
    });
    optionlistItems.forEach((optionlistItem) => {
      optionlistItem.classList.remove("selected");
    });
    document
      .querySelectorAll(".section-builder-filter-option-title")
      .forEach((title) => {
        title.classList.remove("selected");
      });
    filterOption.forEach((node) => {
      const firstChild = node.querySelector("li:first-child");
      firstChild.classList.add("selected");
    });
    document
      .querySelectorAll(".section-builder-filter-input")
      .forEach((chekbox) => {
        chekbox.classList.remove("checked");
      });

    document.querySelector(
      ".section-builder-filter-block-inputs input[name='minimum']"
    ).value = "";
    document.querySelector(
      ".section-builder-filter-block-inputs input[name='maximum']"
    ).value = "";
  });

document
  .querySelector(".section-builder-filter-select.show-map")
  .addEventListener("click", () => {
    let mapId = "map-" + Date.now();
    let mapContainer = document.createElement("div");
    mapContainer.setAttribute("id", mapId);
    mapContainer.setAttribute("class", "filter-map-container");
    document.querySelector(".filter-map").appendChild(mapContainer);
    let filterMap = createMap(mapId, 13);

    let filterData = {};
    getFilterElements();
    let allProjectsArr = {}; // сюда сохраняем переменные создания маркера
    fetch(ajaxurl.url, {
      method: "POST",
      body: new URLSearchParams({
        action: "map_projects",
        category: filterData,
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        const parsedResponse = JSON.parse(response);
        for (let key in parsedResponse) {
          const projectArr = parsedResponse[key];
          console.log(projectArr);
          createfilterProjects(filterMap, projectArr, allProjectsArr);
        }
      })
      .catch((err) => console.log(err));

    document.querySelector(".filter-map").classList.add("open-map");
    document
      .querySelector(".filter-map .filter-map-close")
      .addEventListener("click", () => {
        document.querySelector(".filter-map").classList.remove("open-map");

        filterMap = null;
        mapContainer.remove();
      });
  });
