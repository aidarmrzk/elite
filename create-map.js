function createMap(divId, zoom = 13) {
  let coordinatesArr = ["25.105491773964957", "55.176937501549965"];
  const div = document.getElementById(divId);

  if (div.dataset.coordinates) {
    let dataCoordinatesArr = div.dataset.coordinates.split(", ");

    if (!isNaN(dataCoordinatesArr[0]) && !isNaN(dataCoordinatesArr[1])) {
      coordinatesArr = dataCoordinatesArr;
    }
  }

  const map = L.map(divId, {
    attributionControl: false,
    scrollWheelZoom: false,
  }).setView(coordinatesArr, zoom);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
    {
      minZoom: 10,
      maxZoom: 20,
      ext: "png",
    }
  ).addTo(map);

  return map;
}
let iconObject = L.icon({
  iconUrl:
    "http://natalin.sg-host.com/wp-content/themes/elite-property-theme/images/marker.png",
});

let map = createMap("halfmap", 13);
createMapObjects(map);

if (document.querySelector("#my-map")) {
  let mymap = createMap("my-map", 13);
  function createMyObjects(mymap) {
    // Создаем переменную для хранения точек контура
    var polygonPoints = [];
    // Создаем слой контура
    var polygonLayer = L.polygon(polygonPoints, { color: "red" }).addTo(mymap);
    // Обработчик клика на карту
    function onMapClick(e) {
      // Получаем координаты клика
      var lat = e.latlng.lat;
      var lng = e.latlng.lng;
      // Добавляем координаты в массив точек контура
      polygonPoints.push([lat, lng]);
      // Обновляем слой контура с новыми точками
      polygonLayer.setLatLngs(polygonPoints);

      let formattedData = JSON.stringify(polygonPoints);

      let formattedDataElement = document.querySelector(
        ".all-projects-map-title p"
      );
      formattedDataElement.textContent = formattedData.slice(1, -1);
    }
    mymap.on("click", onMapClick);
  }
  createMyObjects(mymap);
}

if (document.querySelector("#pagemap")) {
  let pagemap = createMap("pagemap", 13);
  createMapObjects(pagemap);
}

if (document.querySelector("#projects-map")) {
  let projectsMap = createMap("projects-map", 13);
  let allProjectsArr = {}; // сюда сохраняем переменные создания маркера
  document.addEventListener("DOMContentLoaded", () => {
    fetch(ajaxurl.url, {
      method: "POST",
      body: new URLSearchParams({
        action: "map_projects",
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        const parsedResponse = JSON.parse(response);
        for (let key in parsedResponse) {
          const projectArr = parsedResponse[key];
          createfilterProjects(projectsMap, projectArr, allProjectsArr);
        }
      })
      .catch((err) => console.log(err));
  });
}

if (document.querySelector("#districts-map")) {
  let districtsMap = createMap("districts-map", 13);
  let allDistrictssArr = {}; // сюда сохраняем переменные создания маркера

  let districtColor = [
    "#ffcccb",
    "#fed8b1",
    "#ffff00",
    "#90ee90",
    "#add8e6",
    "#cbc3e3",
  ];

  const mapListItems = document.querySelectorAll(".map-list-item");
  mapListItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Отключение перетаскивания карты
      districtsMap.dragging.disable();

      let itemTop = document
        .querySelector("#districts-map")
        .getBoundingClientRect().top;

      window.scrollTo({
        top: window.scrollY + itemTop - 80,
        behavior: "smooth",
      });

      let datasetDistrict = item.dataset.district;

      setTimeout(function () {
        // Включение перетаскивания карты с небольшой задержкой
        districtsMap.dragging.enable();

        document
          .querySelector(
            `.leaflet-interactive[data-district="${datasetDistrict}"]`
          )
          .click();
      }, 100);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    fetch(ajaxurl.url, {
      method: "POST",
      body: new URLSearchParams({
        action: "districts_action",
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        const parsedResponse = JSON.parse(response);
        let index = 0;
        for (let key in parsedResponse) {
          const districtArr = parsedResponse[key];
          createDistricts(
            districtsMap,
            districtArr,
            allDistrictssArr,
            mapListItems,
            districtColor,
            index
          );
          index++;
        }
      })
      .catch((err) => console.log(err));
  });
}

function createMapObjects(map) {
  let coordinatesArr = ["25.105491773964957", "55.176937501549965"];

  let mapId = "#" + map._container.id;

  let mapContainer = document.querySelector(mapId);

  if (mapContainer.dataset.coordinates) {
    let dataCoordinatesArr = mapContainer.dataset.coordinates.split(", ");
    if (!isNaN(dataCoordinatesArr[0] * dataCoordinatesArr[1])) {
      coordinatesArr = dataCoordinatesArr;
    }
  }

  L.marker(coordinatesArr, {
    icon: iconObject,
  })
    .addTo(map)
    .on("click", function () {
      map.setView(coordinatesArr);
    });
}

function createfilterProjects(map, project, allProjectsArr) {
  let coordinatesArr = project.coordinates;

  // преобразуем координаты, для возможности работы библиотеки с ними
  let projectCoordinates = coordinatesArr.split(",").map(function (x) {
    return parseFloat(x);
  });

  let projectLink = "/project/" + project.project_name;
  let projectImgLink = project.project_thumbnail;
  let projectName = project.project_title;

  let bindPopupText = "";
  bindPopupText += '<a href="';
  bindPopupText += projectLink + '/" class="bind-image">';
  bindPopupText += '<img src="' + projectImgLink + '"></a>';
  bindPopupText += '<a href="';
  bindPopupText += projectLink + '/" class="bind-title">';
  bindPopupText += projectName + "</a>";
  bindPopupText += "<ul class='bind-list'>";

  const objects = project.project_objects;
  for (const objKey in objects) {
    const object = objects[objKey];
    let objectInfoObjRooms = "";
    if (object.rooms > 4) {
      objectInfoObjRooms = object.rooms + " комнат";
    } else if (object.rooms == 1) {
      objectInfoObjRooms = "Студия";
    } else {
      objectInfoObjRooms = object.rooms + " комнаты";
    }
    let mapCurrency = "USD";
    let currencyPrice = object.price;
    let objectInfoObjLink = projectLink + "/" + object.object_name;

    bindPopupText += "<li>";
    bindPopupText += '<a href="';
    bindPopupText += objectInfoObjLink + '/">';
    bindPopupText +=
      "<span class='bind-list-title'>" + objectInfoObjRooms + "</span>";
    bindPopupText += "<span class='bind-currency'>" + mapCurrency + "</span>";
    bindPopupText += "<span class='bind-price'>" + currencyPrice + "</span>";
    bindPopupText += '<span class="bind-more">' + "Смотреть" + "</span>";
    bindPopupText += "</a>";
    bindPopupText += "</li>";
  }

  // сохраням создание маркера в переменную, чтобы каждый обработчик имел свои собственные координаты, если бы создавали напрямую (без переменной), то сохранялись только последние координаты маркера
  allProjectsArr.key = L.marker(projectCoordinates, {
    icon: iconObject,
  })
    .bindPopup(bindPopupText)
    .addTo(map)
    .on("click", function () {
      map.setView(projectCoordinates);
    });
}

function createDistricts(
  map,
  districtArr,
  allDistrictssArr,
  mapListItems,
  districtColor,
  index
) {
  let coordinatesArr = districtArr.coordinates;
  let regex = /\[([\d.,\s]+)\]/g; // Регулярное выражение для поиска значений внутри квадратных скобок
  let matches = coordinatesArr.match(regex); // Нахождение всех совпадений с регулярным выражением
  let result = matches.map((match) => {
    let values = match
      .replace(/[\[\]]/g, "")
      .split(",")
      .map(Number); // Удаление квадратных скобок, разделение значений по запятой и преобразование в числа
    return values;
  });

  let colorIndex = index % districtColor.length;

  let countDistrict = "";
  let districtValue = "";
  mapListItems.forEach((item) => {
    const districtName = item.querySelector(".map-district-name");
    if (districtName.textContent === districtArr.title) {
      item.querySelector(".map-list-count").style.backgroundColor =
        districtColor[colorIndex];
      countDistrict = item.querySelector(".map-list-count").textContent;
      districtValue = item.getAttribute("data-district");
      return;
    }
  });

  let districtName = districtArr.title;
  let trnsformedDistrictName = districtName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  let districtLink = "/district/" + trnsformedDistrictName;
  let districtImg = districtArr.img;
  let districtPrice = districtArr.min_price;

  let bindPopupText = "";
  bindPopupText += '<a href="';
  bindPopupText += districtLink + '/" class="bind-image">';
  bindPopupText += districtImg + '"></a>';
  bindPopupText += '<div class="bind-container">';
  bindPopupText += '<a href="';
  bindPopupText += districtLink + '/" class="bind-title">';
  bindPopupText += districtName + "</a>";
  bindPopupText +=
    '<div>от&nbsp;<span class="bind-currency">$' +
    districtPrice +
    "</span></div>";
  bindPopupText += "</div>";

  let markerResult = [
    result.reduce((sum, current) => sum + current[0], 0) / result.length,
    result.reduce((sum, current) => sum + current[1], 0) / result.length,
  ];

  let customIcon = L.divIcon({
    className: "map-list-marker",
    html:
      '<span class="map-list-marker-count" style="background-color: white; border: 2px solid' +
      districtColor[colorIndex] +
      '">' +
      countDistrict +
      "</span>",
  });

  let markerDistrict = L.marker(markerResult, {
    icon: customIcon,
  })
    .bindPopup(bindPopupText)
    .addTo(map)
    .on("click", function () {
      map.setView(markerResult);
    });

  markerDistrict.getElement().setAttribute("data-district", districtValue);

  allDistrictssArr.key = L.polygon(result, {
    color: districtColor[colorIndex],
  })
    .bindPopup(bindPopupText)
    .addTo(map)
    .on("click", function () {
      map.setView(markerResult);
    });
}
