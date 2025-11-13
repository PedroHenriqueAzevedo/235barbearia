// Script simples para pequenos comportamentos
document.addEventListener('DOMContentLoaded', function () {
    // Rolagem suave para âncoras internas
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
