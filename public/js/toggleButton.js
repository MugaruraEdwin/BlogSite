// let subMenu = document.getElementById("subMenu")

// function toggleMenu(){
//     subMenu.classList.toggle("open-menu");
// }

let subMenu = document.getElementById("subMenu");
let menuIcon = document.getElementById("menuIcon");

// Function to show the dropdown menu
function toggleMenu() {
    subMenu.classList.add("open-menu");
}

// Show the dropdown when the mouse is over the icon
menuIcon.addEventListener("mouseover", toggleMenu);

// Hide the dropdown when the mouse leaves the menu area
subMenu.addEventListener("mouseleave", function() {
    subMenu.classList.remove("open-menu");
});

// Also hide the dropdown when the mouse leaves the icon area
menuIcon.addEventListener("mouseleave", function() {
    // Check if the mouse is not entering the submenu, then hide
    setTimeout(() => {
        if (!subMenu.matches(':hover')) {
            subMenu.classList.remove("open-menu");
        }
    }, 100); // A small delay to allow smooth transitions
});

