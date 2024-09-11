const menuBtn = document.querySelector(".menu_button");
const menuItems = document.querySelector(".menu__items");
const expandBtn = document.querySelectorAll(".expand-btn");
var menuBtns = document.getElementById("mobile_nav").getElementsByClassName("header_link");
console.log(menuBtns);

// nav toggle
menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
});

// Mobile menu expand
expandBtn.forEach((btn) => {
    btn.addEventListener("click", () =>{
        btn.classList.toggle("open");
    });
});

for (var i = 0; i < menuBtns.length; i ++) {
    onclick = function() {
        menuBtn.classList.toggle("open");
        menuItems.classList.toggle("open");
    }
    
}
