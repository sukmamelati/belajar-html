// Menangani tombol Register dan Login
document.getElementById('registerBtn').addEventListener('click', function() {
    alert("Website Dalam Perbaikan");
});

document.getElementById('loginBtn').addEventListener('click', function() {
    alert("Website Dalam Perbaikan");
});

// Mengubah tulisan orange di tagline secara berkala
const texts = ["HORROR", "ACTION", "ROMANCE", "COMEDY"];
let index = 0;

setInterval(function() {
    index = (index + 1) % texts.length;
    document.getElementById('changingText').textContent = texts[index];
}, 4000); // Ganti setiap 4 detik
