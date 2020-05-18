function showMobileNav() {
    
    let showMenu = document.querySelector("#nav-links-mobile");

    if (showMenu.style.width === "100vw") {
        showMenu.style.width = "0vw";
    } else {
        showMenu.style.width = "100vw";
    }
    
    // burger animation
    const burger = document.querySelector("#burger");
    
    burger.classList.toggle("toggle");
    
}


//Up-arrow animation
const backToTopBtn = document.querySelector("#back-to-top-btn");
const downArrow = document.querySelector("#down-arrow");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset < 2010){
        downArrow.style.display = "block";
    }
    else{
        downArrow.style.display = "none";
    }
}

window.addEventListener("scroll", scrollUpFunction);

function scrollUpFunction() {
    if (window.pageYOffset > 2010){
        backToTopBtn.style.display = "block";
    }
    else{
        backToTopBtn.style.display = "none";
    }
}


backToTopBtn.addEventListener("click", backToTop);

function backToTop(){
    window.scroll(0, 0);
}


function backToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

