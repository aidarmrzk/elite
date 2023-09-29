/*-------------------------------- header mobile -----------------------------*/
const mainNavs = document.querySelectorAll(".main-nav");
const mainNavLies = document.querySelectorAll(".main-nav-li");
const allSubMenu = document.querySelectorAll(".sub-menu");
const subMenuLies = document.querySelectorAll(".sub-menu-li");
const mobileButton = document.querySelector(".mobile-button");

if (window.innerWidth > 900) {
    mainNavs.forEach(giveActive);
    allSubMenu.forEach(giveActive);   
}
function giveActive(event) {
   event.classList.add("active")
}


if (window.innerWidth <= 900) {
    mainNavLies.forEach(letOpen); 
    mainNavLies.forEach(closeMain); 
    subMenuLies.forEach(letOpenSub); 
    subMenuLies.forEach(closeMain); 
    mobileButton.addEventListener('click', () => {
        document.querySelector('.header-nav').classList.toggle('active');
        document.querySelector('.m-button').classList.toggle('active');
        document.querySelector('.header-logo').classList.toggle('active');
        document.querySelector('.header-center').classList.toggle('active');
    })
}

function letOpen(event) {
    event.addEventListener('click', () => {
        event.classList.toggle("open");

        event.querySelectorAll('ul').forEach(function (child) {
            child.addEventListener('click', function(e) {
                e.stopPropagation();
            })
        })         
    })
}

function letOpenSub(event) {
    event.addEventListener('click', () => {
        event.classList.toggle("open");       
    })
}

function closeMain(event) {
    event.addEventListener('mouseleave', () => {
        event.classList.remove("open");
    });
}

   