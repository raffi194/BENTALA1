function openVideo() {
    const videoPopup = document.getElementById('videoPopup');
    const myVideo = document.getElementById('myVideo');
    videoPopup.style.display = 'flex';
    myVideo.play(); // Memulai pemutaran video saat popup dibuka
    document.getElementById('question').style.display = 'block'; // Tampilkan pertanyaan saat video dibuka
}

function answer(response) {
    if (response === 'yes') {
        window.close(); // Menutup jendela atau tab
    } else {
        alert("Harus Mengakui Raffi Ganteng untuk menutupnya.");
        // Mencegah penutupan tab dengan menampilkan pertanyaan lagi
        const question = document.getElementById('question');
        question.style.display = 'block'; // Tampilkan pertanyaan lagi
    }
}

// Menampilkan pertanyaan saat pengguna mencoba menutup tab atau browser
window.addEventListener('beforeunload', function (event) {
    const confirmationMessage = "Gak Mau Coba Lagi?";
    event.returnValue = confirmationMessage; // Beberapa browser akan menampilkan pesan ini
    return confirmationMessage; // Beberapa browser akan menampilkan pesan ini
});