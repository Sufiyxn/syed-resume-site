
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggle.querySelector('i');

    function updateIcon() {
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    toggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        updateIcon();
    });

    updateIcon();
});
