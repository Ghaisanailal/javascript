// Mengatur gradasi warna latar belakang
function setGradasiWarna() {
    document.body.style.background = "linear-gradient(to right,  #7b8bc4, #f8cade)";
}

// Menampilkan alert saat halaman pertama kali diakses
window.onload = function () {
    setGradasiWarna();
    alert("Assalamualaikum");
};

// Menampilkan input untuk mengisi nama dan tombol klik
function tampilkanInput() {
    const container = document.getElementById('container');
    container.innerHTML = `
        <input type="text" id="nama" placeholder="Masukkan nama Anda">
        <button onclick="ucapkanSalam()">Klik</button>
    `;
}

// Menampilkan ucapan selamat datang setelah nama diinputkan
function ucapkanSalam() {
    const nama = document.getElementById('nama').value;
    if (!nama) {
        alert("Silakan masukkan nama terlebih dahulu!");
        return;
    }
    const container = document.getElementById('container');
    container.innerHTML = `Selamat Datang, ${nama}!`;
}
