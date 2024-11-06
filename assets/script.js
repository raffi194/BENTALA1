
function openInstagram() {
    window.open('https://www.instagram.com/raffi1__/', '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    let hoverTimeout;
    
    hoverTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function() {
            const radioId = this.getAttribute('for');
            const radio = document.getElementById(radioId);
            
            // Membersihkan timeout sebelumnya jika ada
            clearTimeout(hoverTimeout);
            
            // Mengatur delay (dalam milidetik)
            hoverTimeout = setTimeout(() => {
                radio.checked = true;
            }, 100); // Anda bisa mengubah nilai 200 sesuai keinginan
        });

        // Opsional: membatalkan perpindahan jika mouse keluar sebelum delay selesai
        trigger.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
        });
    });
});

// Tambahkan script ini
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var imgFluid = document.querySelector('.imgfluid');
    var imgHeight = imgFluid.offsetHeight;
    
    if (window.scrollY > imgHeight) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
