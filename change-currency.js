let rate = null;

document.addEventListener("DOMContentLoaded", () => {
  getPriceCookie();

  if (rate !== null) {
    const parentPrice = document.querySelectorAll(
      ".project-object-card-info-price"
    );

    parentPrice.forEach((node) => {
      node.querySelector(
        ".project-object-card-info-price-currency span"
      ).textContent = rate;

      node.querySelectorAll("li").forEach((li) => {
        li.classList.remove("hidden");

        if (li.textContent == rate) {
          li.classList.add("hidden");
        }
      });

      node.querySelector(
        ".project-object-card-info-price-row > span"
      ).textContent = node

        .querySelector("li.hidden")

        .getAttribute("data-price");
    });
  }

  changeCurrency();
});

function changeCurrency() {
  document

    .querySelectorAll(".project-object-card-info-price-currency-list-box")

    .forEach((node) => {
      node.addEventListener("mouseleave", () => {
        node.parentElement.classList.remove("open");
      });

      node

        .closest(".project-object-card-info-price")

        .querySelector(
          ".project-object-card-info-price-row > span"
        ).textContent = node

        .querySelector("li.hidden")

        .getAttribute("data-price");
    });

  let priceCurrency = document.querySelectorAll(
    ".project-object-card-info-price-currency"
  );

  priceCurrency.forEach((node) => {
    node.addEventListener("click", () => {
      priceCurrency.forEach((element) => {
        if (element != node) {
          element.classList.remove("open");
        }
      });

      node.classList.toggle("open");
    });
  });

  const priceCurrencyList = document.querySelectorAll(
    ".project-object-card-info-price-currency-list li"
  );

  priceCurrencyList.forEach((node) => {
    node.addEventListener("click", () => {
      if (!node.classList.contains("hidden")) {
        priceCurrencyList.forEach((li) => {
          li.classList.remove("hidden");

          if (node.textContent == li.textContent) {
            li.classList.add("hidden");

            const parentPrice = li.closest(".project-object-card-info-price");

            parentPrice.querySelector(
              ".project-object-card-info-price-currency span"
            ).textContent = li.textContent;

            parentPrice.querySelector(
              ".project-object-card-info-price-row > span"
            ).textContent = li.getAttribute("data-price");
          }
        });
      }

      rate = node

        .closest(".project-object-card-info-price-currency")

        .querySelector("span").textContent;

      function setPriceCookie(name, value, options = {}) {
        options = {
          path: "/",
        };

        if (options.expires instanceof Date) {
          options.expires = options.expires.toUTCString();
        }

        let updatedCookie =
          encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;

          let optionValue = options[optionKey];

          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }

        document.cookie = updatedCookie;
      }

      setPriceCookie("rate", rate, {
        secure: true,

        "max-age": 600,
      });
    });
  });
}

function getPriceCookie() {
  const cookieString = document.cookie; // получить все куки

  const cookies = cookieString.split(";"); // разделить куки по точке с запятой

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith("rate=")) {
      rate = cookie.substring("rate=".length, cookie.length);

      break;
    }
  }
}
