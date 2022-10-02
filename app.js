let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector("nav")

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu")
    if (mainMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})