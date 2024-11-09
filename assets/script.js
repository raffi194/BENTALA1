
function openInstagram() {
    window.open('https://www.instagram.com/raffi1__/', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/raffi1__/', '_blank');
}

function openX() {
    window.open('https://x.com/Raffi1__', '_blank');
}

function openlinkedin() {
    window.open('https://www.linkedin.com/in/muhamadraffi/', '_blank');
}

function openyt() {
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
    var imgFluid = document.querySelector('.img-fluid');
    var imgHeight = imgFluid.offsetHeight;
    
    if (window.scrollY > imgHeight) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

function toggleHeart(element) {
    element.classList.toggle('active'); // Menambahkan atau menghapus kelas 'active'
}

let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const dots = document.getElementsByClassName("dot");
        
        // Reset slide index if it goes out of bounds
        if (n > dots.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = dots.length; }

        // Hide all dots and show the current one
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
    }