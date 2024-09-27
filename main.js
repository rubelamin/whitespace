const menuIcon = document.querySelector("nav .menu-container .nav-hum-menu-icon");
const mobileMenuIcon = document.querySelector("nav .menu-container .mobile-menu-icon .nav-hum-menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");


menuIcon.addEventListener("click", ()=> {
    mobileMenuContainer.classList.add("active")
})

mobileMenuIcon.addEventListener("click", ()=> {
    mobileMenuContainer.classList.add("active")
})

closeIcon.addEventListener("click", ()=> {
    mobileMenuContainer.classList.remove("active")
})

