var body = document.body;
var toggleNavBtn = document.getElementById('toggle-site-nav');

function toggleNav() {
    body.classList.toggle('nav-opened');

    if (body.classList.contains('nav-opened')) {
        toggleNavBtn.innerHTML = '<svg class="toggle-site-nav__img cross" viewBox="0 0 22 22"><style>.st0{fill:#f44b55}</style><path transform="rotate(-45.001 11 11)" class="st0" d="M10-3.6h1.9v29.2H10z"/><path transform="rotate(-45.001 11 11)" class="st0" d="M-3.6 10h29.2v1.9H-3.6z"/></svg>';
    } else {
        toggleNavBtn.innerHTML = '<svg class="toggle-site-nav__img burger" viewBox="0 0 30 24" width="30px" height="24px"><style>.st0{fill:#f44b55}</style><path class="st0" d="M0 0h30v2H0z"/><path fill="#fff" d="M0 22h30v2H0z"/><path class="st0" d="M30 22H0v2h30v-2z"/><g><path class="st0" d="M0 11h30v2H0z"/></g></svg>';
    }
}

toggleNavBtn.addEventListener('click', toggleNav);
