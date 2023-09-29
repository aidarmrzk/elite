document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", cascadFooter());
});

function cascadFooter() {
  const windowHeight = window.innerHeight,
    footerMainHeight = document.querySelector(".footer-main").offsetHeight,
    footerHeight = document.querySelector(".footer").offsetHeight,
    contentHeight = document.querySelector(".content").offsetHeight,
    heightDocument = contentHeight + footerHeight + footerMainHeight - 6;

  // // Установка размера элемента для анимации
  document.querySelector("body").style.height = heightDocument + "px";

  // При прокрутке
  window.onscroll = function () {
    const scroll = window.scrollY;

    document.querySelector(".content").style.top = "-" + scroll + "px";

    const value = Math.abs(
      heightDocument - windowHeight - footerMainHeight - scroll
    );

    if (window.innerWidth > 550) {
      if (heightDocument - scroll - windowHeight <= footerMainHeight) {
        document.querySelector(".footer").style.bottom = value + "px";
      } else {
        document.querySelector(".footer").style.bottom = 0;
      }
    } else {
      document.querySelector(".footer-main").style.bottom =
        "-" + footerMainHeight + "px";
      if (heightDocument - scroll - windowHeight <= footerMainHeight) {
        document.querySelector(".footer").style.bottom = value + "px";
        document.querySelector(".footer-main").style.bottom =
          value - footerMainHeight + "px";
      } else {
        document.querySelector(".footer").style.bottom = 0;
      }
    }
  };
}
