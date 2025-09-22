const hamburger = document.querySelector(".hamburger") // both of these are getting access to these elements
const navbarLinks = document.querySelector(".navbarLinks")
const backToTop = document.getElementById("backToTop"); // targerting id for backtotop

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})


  // Show button when user scrolls down 300px
  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) { // need both because browsers are weird
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  // Scroll smoothly to top when clicked
  backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };