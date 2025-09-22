window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('');
        });
    }

});
