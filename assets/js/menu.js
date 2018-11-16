var body = document.body;
var toggleNavBtn = document.getElementById('toggle-site-nav');

function toggleNav() {
    body.classList.toggle('nav-opened');

    if (body.classList.contains('nav-opened')) {
        toggleNavBtn.innerHTML = '<svg class="toggle-site-nav__img cross" viewBox="0 0 22 22"><style>.currentColor{fill:var(--templateColor)}</style><path transform="rotate(-45.001 11 11)" class="currentColor" d="M10-3.6h1.9v29.2H10z"/><path transform="rotate(-45.001 11 11)" class="currentColor" d="M-3.6 10h29.2v1.9H-3.6z"/></svg>';
    } else {
        toggleNavBtn.innerHTML = '<svg class="toggle-site-nav__img burger" viewBox="0 0 30 24" width="30px" height="24px"><style>.currentColor{fill:var(--templateColor)}</style><path class="currentColor" d="M0 0h30v2H0z"/><path fill="#fff" d="M0 22h30v2H0z"/><path class="currentColor" d="M30 22H0v2h30v-2z"/><g><path class="currentColor" d="M0 11h30v2H0z"/></g></svg>';
    }
}

toggleNavBtn.addEventListener('click', toggleNav);
