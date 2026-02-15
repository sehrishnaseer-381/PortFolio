const menuButton = document.getElementById("menuButton");
const sidebar = document.querySelector(".sidebar");
const navs = document.querySelectorAll(".sidebar nav a");

function checkScreen() {
    if (window.innerWidth <= 768) {
        menuButton.style.display = "block";
        sidebar.classList.remove("active"); // hidden by default on mobile
    } 
    else {
        menuButton.style.display = "none";
        sidebar.classList.add("active"); // always visible on desktop
    }
}

// Run immediatetly
checkScreen();

// Run on resize
window.addEventListener("resize", checkScreen);  


// For mobile
// Toggle sidebar on click 
menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");

});

// Close sidebar when nav link is clicked
navs.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("active");
        }
    });
});
