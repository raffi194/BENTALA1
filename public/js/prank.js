function openVideo() {
    const videoPopup = document.getElementById('videoPopup');
    const myVideo = document.getElementById('myVideo');
    videoPopup.style.display = 'flex';
    myVideo.play(); 
    document.getElementById('question').style.display = 'block'; }

function answer(response) {
    if (response === 'yes') {
        window.close(); 
    } else {
        alert("Harus Mengakui Raffi Ganteng untuk menutupnya.");
        const question = document.getElementById('question');
        question.style.display = 'block'; 
    }
}

window.addEventListener('beforeunload', function (event) {
    const confirmationMessage = "Gak Mau Coba Lagi?";
    event.returnValue = confirmationMessage; 
    return confirmationMessage; 
});