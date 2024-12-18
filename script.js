// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

function showModal() {
    document.getElementById('imageModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

document.getElementById('profileImage').addEventListener('click', showModal);


var typed = new Typed('.typed', {
    stringsElement: '.typed-items',
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});