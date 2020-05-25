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

/*

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
*/



// ------ FAQ drop down -----

const faq = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let faqanswer = this.nextElementSibling;

        if (faqanswer.style.display === "block") {
            faqanswer.style.display = "none";
        } else {
            faqanswer.style.display = "block";
        }
    });
}




// ------ ingredienser API Fetch -----
const getIngrBtnElement = document.getElementById("getIngr");

getIngrBtnElement.addEventListener("click", getIngr);

function getIngr() {
    fetch('ingredienser.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("output").innerHTML = data;
        })
}



// ------ Accordion - om nuuii -----
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}