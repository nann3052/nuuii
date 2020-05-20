function showMobileNav() {

    let showMenu = document.querySelector("#nav-links-mobile");

    if (showMenu.style.width === "100vw") {
        showMenu.style.width = "0vw";
    } else {
        showMenu.style.width = "100vw";
    }

    // burger animation at toggle
    const burger = document.querySelector("#burger");

    burger.classList.toggle("toggle");

}


//Up-arrow animation
const backToTopBtn = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollUpFunction);

function scrollUpFunction() {
    if (window.pageYOffset > 500) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}


/*backToTopBtn.addEventListener("click", backToTop);

function backToTop() {
    window.scroll(0, 0);
}*/


function backToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

//ingrediens api
const getIngrBtnElement = document.getElementById("getIngr");

getIngrBtnElement.addEventListener("click", getIngr);

function getIngr() {
    fetch('ingredienser.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("output").innerHTML = data;
        })
}

/*
/ FAQ drop down

const faq = document.querySelector(".faq-answer");

let i;

for (i = 0; i < faq.length; i++) {
    faq[i].onclick = function () {
        this.classList.toggle("active");

        const panel = this.nextElementSibling

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    }
}*/