document.querySelectorAll(".main-search-filter-list-box").forEach((node) => {
    node.addEventListener("mouseleave", () => {
        node.parentElement.classList.remove("open");
    })
});

let mainSearchBlock = document.querySelectorAll(".main-search-block");
let filterSearch = document.querySelector(".filter-list-box-search-js");

mainSearchBlock.forEach((node) => {
    node.addEventListener("click", () => {
        mainSearchBlock.forEach((element) => {
            if (element != node) {
                element.classList.remove("open");
            }
        });
        node.classList.toggle("open");
    });
    filterSearch.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});


const listItemsDistrict = document.querySelectorAll('#district li');

filterSearch.addEventListener('input', function() {
  const filterText = filterSearch.value.toLowerCase();

  listItemsDistrict.forEach(function(item) {
    if (item.innerText.toLowerCase().includes(filterText)) {
      item.style.display = 'list-item';
    } else {
      item.style.display = 'none';
    }
  });
});


const listItems = document.querySelectorAll(".main-search-filter-list li");

listItems.forEach((node) => {
    node.addEventListener("click", (event) => {
        const parentList = event.target.closest(".main-search-filter-list");
        parentList.querySelectorAll("li").forEach((item) => {
            item.classList.remove("hidden");
        });
        event.target.classList.add("hidden");
        const parentBlock = event.target.closest(".main-search-block");
        parentBlock.querySelector(".main-search-filter span").textContent = event.target.textContent;
    });
});




const searchButton = document.querySelector(".main-search-button");


searchButton.addEventListener("click", () => {
    let link = "/vsya-nedvizhimost-dubaya/?";

    const searchBlocks = document.querySelectorAll(".main-search-block");
    const filters = Array.from(searchBlocks).map((item) => item.dataset.filter);
    console.log(filters);

    const hiddenItems = document.querySelectorAll(".main-search-filter-list li.hidden");
    const slugs = Array.from(hiddenItems).map((item) => item.dataset.slug);
    console.log(slugs);

    for (let i = 0; i < slugs.length; i++) {
        let filter = filters[i];
        let slug = slugs[i];

        if (slug === "all") {
            slug = "";
            filter = "";
        }

        if (slug) {
            link += filter + "=" + slug;
            if (i !== slugs.length - 1) {
                link += "&";
            }
        }

    }

    console.log(link);
    window.open(link, "_blank");
})