# Prototipe Aplikasi HANTAS (Hangat Tanpa Asap)

Prototipe aplikasi pendamping HANTAS untuk esai NEXORA 2026 Vol. 02.
Semua angka di dalam aplikasi adalah **data ilustrasi**, bukan hasil pengukuran.

## Cara membuka

1. Ekstrak file zip.
2. Klik dua kali `index.html`. Prototipe akan terbuka di browser (Chrome, Safari, atau Edge).
3. Tidak perlu internet dan tidak perlu instalasi apa pun.

## Dua tampilan

- **Mode interaktif**: satu ponsel yang bisa diklik, ditemani panel simulasi di sebelah kanan.
  - **Peran pengguna**: pindah antara mode Penghuni dan mode Kader.
  - **Kondisi rumah**: Normal, Asap naik, Bahaya CO, Suhu asap keluar rendah (T2), atau Saluran mulai kotor.
  - **Koneksi**: matikan centang "Ada sinyal" untuk melihat perilaku aplikasi saat tanpa jaringan.
- **Galeri semua layar**: 12 layar ditampilkan berjajar, cocok untuk presentasi atau tangkapan layar.

## Alur yang bisa dicoba

- **Penghuni**: tekan "Kipas maksimal 15 menit". Pilih kondisi "Bahaya CO" untuk melihat layar peringatan, lalu tekan "Saya sudah aman".
- **Kader**:
  - Rumah, lalu ketuk Keluarga Wenda untuk membuka Kesehatan saluran.
  - Dari situ, Mulai pembersihan: centang kelima langkah, lalu Simpan.
  - Di layar Pasang, tekan "Kirim ke perangkat (Bluetooth)" untuk melihat simulasi pengiriman konfigurasi.
  - Di layar Rawat, tekan "Tambah catatan", pilih jenis pekerjaan, lalu Simpan.

## Folder screenshot (siap dipakai di esai)

| File | Untuk kotak di esai |
|---|---|
| 01-beranda-normal.png | Gambar 4 layar a, Lampiran 4a |
| 02-beranda-asap.png | Variasi Lampiran 4a |
| 03-peringatan-co.png | Lampiran 4b |
| 04-kesehatan-saluran-kotor.png | Gambar 4 layar b, Lampiran 4c |
| 05-lindungi-saluran-t2.png | Variasi Lampiran 4c (fitur katup T2) |
| 06-profil-pemasangan.png | Gambar 4 layar c, Lampiran 4d |
| 07-catatan-perawatan.png | Lampiran 4e |
| 08-pembersihan.png | Alur pembersihan (pelengkap Lampiran 4e) |
| 09-riwayat-offline.png | Lampiran 4f |
| 10-rumah-dampingan.png | Tambahan, daftar rumah kader |
| 11-sinkron-offline.png | Variasi Lampiran 4f |
| 12-bantuan.png | Tambahan, panduan arti warna lampu |

Screenshot dibuat dengan resolusi 2x agar tetap tajam saat dicetak.
Untuk Gambar 4 di naskah, tempel 3 screenshot (01, 04, 06) berdampingan.

## Isi folder

- `index.html`: halaman utama prototipe
- `style.css`: tampilan
- `app.js`: logika layar dan simulasi
- `screenshot/`: 12 gambar layar
