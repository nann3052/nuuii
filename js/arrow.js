//Up-arrow animation
const backToTopBtn = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollUpFunction);

function scrollUpFunction() {
    if (window.pageYOffset > 350) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}


backToTopBtn.addEventListener("click", backToTop);

function backToTop() {
    window.scroll(0, 0);
}


function backToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

