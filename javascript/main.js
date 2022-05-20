const product = document.querySelector(".product1");
const product0 = document.querySelector(".product0");
const moreProduct = document.querySelector(".more-product");
const moreMore0 = document.querySelector(".more0");
const moreMore1 = document.querySelector(".more1");
const moreMore = document.querySelector(".more-more");
const hamburgerIcon = document.getElementById("hamburger-icon");
const crossIcon = document.getElementById("cross-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu")
const bell = document.querySelector(".bell");
const bellContent = document.querySelector(".bell-title");

const header = document.getElementsByTagName("header");


product.addEventListener("mouseenter" , showMoreProduct);
product0.addEventListener("mouseenter" , showMoreProduct);
product.addEventListener("mouseleave" , hideMoreProduct);
product0.addEventListener("mouseleave" , hideMoreProduct);
moreProduct.addEventListener("mousemove" , showMoreProduct);
moreProduct.addEventListener("mouseleave" , hideMoreProduct);
moreMore0.addEventListener("mouseenter" , showMoreMore);
moreMore1.addEventListener("mouseenter" , showMoreMore);
moreMore0.addEventListener("mouseleave" , hideMoreMore);
moreMore1.addEventListener("mouseleave" , hideMoreMore);
moreMore.addEventListener("mousemove" , showMoreMore);
moreMore.addEventListener("mouseleave" , hideMoreMore);

hamburgerIcon.addEventListener("click" , function () {
    hamburgerMenu.classList.add("show-hamburger-menu");
})

crossIcon.addEventListener("click" , function () {
    hamburgerMenu.classList.remove("show-hamburger-menu")
})

function showMoreProduct () {
    moreProduct.style.display ="grid";
    moreProduct.classList.add("show-more")
}

function hideMoreProduct () {
    // moreProduct.classList.add("hideMore");
    moreProduct.style.display = "none";
}

function showMoreMore () {
    moreMore.style.display = "flex";
    moreMore.classList.add("show-more");
}

function hideMoreMore () {
    moreMore.style.display ="none" ;
}

bell.addEventListener ("mouseenter" , () => {
    bellContent.style.display = "block" ;
});

bell.addEventListener ("mouseleave" , () => {
    bellContent.style.display = "none" ;
});

window.addEventListener("scroll" , (e) => {
    e.preventDefault() ;
    if(window.pageYOffset >= 40) {
        header[0].style.height = "65px";
    } else if (window.pageYOffset <= 40 ){
        header[0].style.height = "80px"
    }
})