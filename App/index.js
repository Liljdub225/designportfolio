const hamburger = document.querySelector(".hamburger") //both of these are getting access to these elements
const navbarLinks = document.querySelector(".navbarLinks")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})