var body = document.body;
var toggleNavBtn = document.getElementById('toggle-site-nav');

function toggleNav() {
    body.classList.toggle('nav-opened');

    if (body.classList.contains('nav-opened')) {
        toggleNavBtn.innerHTML = "X"
    } else {
        toggleNavBtn.innerHTML = "&#9776;"
    }
}

toggleNavBtn.addEventListener('click', toggleNav);
