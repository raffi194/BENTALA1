
function openInstagram() {
    window.open('https://www.instagram.com/', '_blank');
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

