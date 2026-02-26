// Toggle sidebar on mobile
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Close sidebar when a nav link is clicked on mobile
var navLinks = document.querySelectorAll('.sidebar nav a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('overlay').classList.remove('show');
        }
    });
});
