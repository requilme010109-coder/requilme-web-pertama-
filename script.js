// Smooth scrolling untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim.');
    this.reset();
});

// Toggle menu untuk mobile (opsional, tambahkan jika perlu)
const navUl = document.querySelector('nav ul');
document.querySelector('.logo').addEventListener('click', () => {
    navUl.classList.toggle('show');
});