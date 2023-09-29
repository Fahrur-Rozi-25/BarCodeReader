// barcode-scanner.js
import Dynamsoft from 'dynamsoft-node-barcode';

// Inisialisasi pustaka Dynamsoft Barcode Reader
const reader = new Dynamsoft.BarcodeReader();

// Mendapatkan elemen video
const videoElement = document.getElementById('video-element');

// Mengakses kamera pengguna
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        videoElement.srcObject = stream;
    })
    .catch((error) => {
        console.error('Gagal mengakses kamera: ', error);
    });

// Mengambil elemen tombol pemindaian dan hasil
const scanButton = document.getElementById('scan-button');
const resultElement = document.getElementById('result');

// Menambahkan event listener untuk tombol pemindaian
scanButton.addEventListener('click', async () => {
    try {
        // Memindai barcode dari gambar kamera
        const results = await reader.decodeVideo(videoElement);

        // Menampilkan hasil pemindaian
        resultElement.innerHTML = 'Hasil Pemindaian Barcode:<br>';
        for (const result of results) {
            resultElement.innerHTML += `${result.barcodeText}<br>`;
        }
    } catch (error) {
        console.error('Gagal melakukan pemindaian barcode: ', error);
    }
});
