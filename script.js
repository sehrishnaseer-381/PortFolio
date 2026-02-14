const menuButton = document.getElementById("menuButton");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector("main");

// let isSidebarActive = true;

// menuButton.addEventListener("click", () => {
//     if(isSidebarActive){
//         sidebar.classList.remove("active");
//         isSidebarActive = false;
//     }
//     else{
//         sidebar.classList.add("active");
//         isSidebarActive = true;
//     }
// });

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    main.classList.toggle("fullwidth");
});

const sections = document.querySelectorAll("section");
const navs = document.querySelectorAll(".sidebar nav a");


navs.forEach(nav => {
    nav.addEventListener("click", () => {
        sidebar.classList.remove("active");
        sections.forEach(section => {
            section.style.marginLeft = "10px";
        });
    });
});
