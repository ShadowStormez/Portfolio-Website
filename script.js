document.addEventListener('DOMContentLoaded', function() {

    console.log('=====> DOMContentLoaded');

    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('ul li a');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.querySelector('.close-btn');

    function removeActiveClasses() {
        links.forEach(link => link.classList.remove('active'));
    }

    function setActiveLink() {
        removeActiveClasses();
        const currentPage = location.href.split('/').pop();
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    setActiveLink();

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const href = this.getAttribute('href');
            removeActiveClasses();
            this.classList.add('active');
            window.location.href = href;
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    hamburgerMenu.addEventListener('click', function() {
        sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });

});
