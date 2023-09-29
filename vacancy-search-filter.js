const vacancyListBox = document.querySelector(".section-vacancy-list-box")
 
vacancyListBox.addEventListener("mouseleave", () => {
    vacancyListBox.parentElement.classList.remove("open");
});

let vacancyAll = document.querySelector(".section-vacancy-all");

vacancyAll.addEventListener("click", () => {
    vacancyAll.classList.toggle("open");
});