const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");

    const visibility = primaryNav.hasAttribute("data-visible");

    if (visibility) {
        navToggle.setAttribute("aria-expanded", true);
    }
    else {
        navToggle.setAttribute("aria-expanded", false);
    }
})

// --------------- drop-down menus ------------------------------

const productArrowTag = document.querySelectorAll(".product-arrow-tag");
const companyArrowTag = document.querySelectorAll(".company-arrow-tag");
const connectArrowTag = document.querySelectorAll(".connect-arrow-tag");


const productTag = document.querySelector(".product-tag");
const companyTag = document.querySelector(".company-tag");
const connectTag = document.querySelector(".connect-tag")

const productList = document.querySelector(".product-list");
const companyList = document.querySelector(".company-list");
const connectList = document.querySelector(".connect-list");

productTag.addEventListener("click", () => {
    productList.setAttribute("data-visible", true);

    const visibility = productList.hasAttribute("data-visible");
    if (visibility) {
        productList.setAttribute("aria-expanded", true);
        companyList.setAttribute("aria-expanded", false);
        connectList.setAttribute("aria-expanded", false);

        productArrowTag[0].style.transform = "rotate(180deg)";
        productArrowTag[1].style.transform = "rotate(180deg)";
    }
    else {
        productList.setAttribute("aria-expanded", false);
    }
})

productTag.addEventListener("blur", () => {
    productList.setAttribute("data-visible", false);
    productList.setAttribute("aria-expanded", false);
    productArrowTag[0].style.transform = "rotate(0deg)";
    productArrowTag[1].style.transform = "rotate(0deg)";
})

companyTag.addEventListener("click", () => {
    companyList.setAttribute("data-visible", true);

    const visibility = companyList.hasAttribute("data-visible");
    if (visibility) {
        productList.setAttribute("aria-expanded", false);
        companyList.setAttribute("aria-expanded", true);
        connectList.setAttribute("aria-expanded", false);

        companyArrowTag[0].style.transform = "rotate(180deg)";
        companyArrowTag[1].style.transform = "rotate(180deg)";
    }
    else {
        companyList.setAttribute("aria-expanded", false);
    }
})

companyTag.addEventListener("blur", () => {
    companyList.setAttribute("data-visible", false);
    companyList.setAttribute("aria-expanded", false);
    companyArrowTag[0].style.transform = "rotate(0deg)";
    companyArrowTag[1].style.transform = "rotate(0deg)";
})

connectTag.addEventListener("click", () => {
    connectList.setAttribute("data-visible", true);

    const visibility = connectList.hasAttribute("data-visible");
    if (visibility) {
        productList.setAttribute("aria-expanded", false);
        companyList.setAttribute("aria-expanded", false);
        connectList.setAttribute("aria-expanded", true);

        connectArrowTag[0].style.transform = "rotate(180deg)";
        connectArrowTag[1].style.transform = "rotate(180deg)";
    }
    else {
        connectList.setAttribute("aria-expanded", false);
    }
})

connectTag.addEventListener("blur", () => {
    connectList.setAttribute("data-visible", false);
    connectList.setAttribute("aria-expanded", false);
    connectArrowTag[0].style.transform = "rotate(0deg)";
    connectArrowTag[1].style.transform = "rotate(0deg)";
})