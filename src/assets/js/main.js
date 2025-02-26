document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.search__hamburger-btn');
    const sidebarMenu = document.querySelector('.sidebar');

    hamburgerButton.addEventListener('click', function() {
        sidebarMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!sidebarMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
            sidebarMenu.classList.remove('active');
        }
    });
});