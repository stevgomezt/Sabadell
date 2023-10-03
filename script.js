// Pages
document.querySelectorAll(".logo").forEach((logo) => {
    logo.addEventListener("click", () => {
        document.querySelector(".front-page").style.display = "block";
        document.querySelector(".login-page").style.display = "none";
        document.querySelector(".signup-page").style.display = "none";
    });
});

document.querySelectorAll(".login").forEach((loginBtn) => {
    loginBtn.addEventListener("click", () => {
        document.querySelector(".front-page").style.display = "none";
        document.querySelector(".login-page").style.display = "block";
        document.querySelector(".signup-page").style.display = "none";
    });
});

document.querySelectorAll(".signup").forEach((signupBtn) => {
    signupBtn.addEventListener("click", () => {
        document.querySelector(".front-page").style.display = "none";
        document.querySelector(".login-page").style.display = "none";
        document.querySelector(".signup-page").style.display = "flex";
    });
});
// End of Pages

// Navigation
const dropdownItems = document.querySelectorAll(".dropdown-hover");

if (window.innerWidth < 1000) {
    const menuIcon = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("change");

        if (!navbar.classList.contains("change")) {
            document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
                dropdown.style.left = "-20rem";
            });
        }
    });

    document.querySelectorAll(".show-dropdown").forEach((link) => {
        link.addEventListener("click", () => {
            link.nextElementSibling.style.left = "0";
        });
    });

    document
        .querySelectorAll(".dropdown-heading-link")
        .forEach((headingLink) => {
            headingLink.addEventListener("click", () => {
                headingLink.parentElement.parentElement.style.left = "-20rem";
            });
        });
} else {
    dropdownItems.forEach((dropdownItem) => {
        dropdownItem.addEventListener("mouseover", () => {
            dropdownItem.lastElementChild.style.cssText =
                "opacity: 1; visibility: visible";
            document.querySelector(".navbar-wrapper").style.background =
                "linear-gradient(to right, #066399, #2f8fdf, #066399)";
            dropdownItem.firstElementChild.firstElementChild.style.transform =
                "rotate(180deg)";
        });
        dropdownItem.addEventListener("mouseout", () => {
            dropdownItem.lastElementChild.style.cssText =
                "opacity: 0; visibility: hidden";
            document.querySelector(".navbar-wrapper").style.background = "none";
            dropdownItem.firstElementChild.firstElementChild.style.transform =
                "rotate(0)";
        });
    });
}

window.addEventListener("resize", () => {
    window.location.reload();
});

// End of Navigation

var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress");

Next1.onclick = function () {
    Form1.style.left = "-650px";
    Form2.style.left = "15px";
    progress.style.width = "420px";
};

Back1.onclick = function () {
    Form1.style.left = "15px";
    Form2.style.left = "650px";
    progress.style.width = "210px";
};

Next2.onclick = function () {
    Form2.style.left = "-650px";
    Form3.style.left = "15px";
    progress.style.width = "630px";
};

Back2.onclick = function () {
    Form2.style.left = "15px";
    Form3.style.left = "650px";
    progress.style.width = "420px";
};

// Modales
$(document).ready(function () {
    $(".clickable-div").click(function () {
        var targetModal = $(this).data("target");
        $(targetModal).modal("show");
    });
});
