## Volunteeria
Volunteeria merupakan aplikasi berbasis web yang bertujuan untuk memfasilitasi pencarian lowongan volunteer, memudahkan pencarian lowongan yang lebih spesifik dengan fitur pencarian berdasarkan lokasi, menghubungkan organisasi dengan calon volunteer, dan meningkatkan partisipasi dalam kegiatan sukarelawan.

Note : Pengambilan data pada aplikasi Volunteeria diambil secara langsung dari database (Tidak melalui API)

## Cara Membuka Aplikasi
1. Pastikan anda sudah mengunduh XAMPP, code editor, dan browser pada perangkat anda.
2. Install Zip File Aplikasi Volunteeria
3. Esktrak file ke folder web server (XAMPP: lebih tepatnya pada folder htdocs).
4. Buka terminal yang biasa anda gunakan pada perangkat anda, lalu pindahkan posisi terminal anda ke posisi folder Volunteeria (Menggunakan perintah "cd .." untuk berpindah posisi terminal) 
5. Jalankan perintah "npm install" untuk mengunduh dependencies pada proyek ini, sehingga aplikasi ini dapat berjalan sebagaimana mestinya.
6. Hidupkan Apache Web Server dari XAMPP anda.
7. Buka aplikasi browser (Chrome, Mozilla, Opera, dll).
8. Akses "localhost/Volunteeria" (Volunteeria : nama dari file yang sudah diekstrak ke folder htdocs).
9. Aplikasi sudah bisa terbuka di browser.
10. (Untuk menambahkan daftar lowongan & tips volunteer, perlu dilakukan clone & berbagai configurasi pada proyek laravel Github Admin : https://github.com/zalzdarkent/volunteeria-app)

## Fitur Aplikasi
1.  Penyedia Informasi Lowongan Sukarelawan:  Pengguna dapat menemukan lowongan sukarelawan yang tersedia dengan mudah di halaman Daftar Lowongan pada situs web Volunteeria.
2. Pencarian Berdasarkan Lokasi: Pengguna dapat mencari lowongan sukarelawan berdasarkan lokasi/domisili yang diinginkan.
3. Deskripsi Lowongan: Setiap lowongan akan memiliki deskripsi lengkap, persyaratan, dan kontak yang jelas.
4. Penyamapaian Berita/Edukasi: Pengguna dapat mengakses sumber daya artikel yang membahas mengenai kegiatan sukarelawan, seperti tips, berita, lowongan eksternal, & berita di halaman Tips Volunteer pada situs web Volunteeria.
5. Pengunggahan Lowongan Sukarelawan Bagi Para Perekrut: Para perekrut dapat mengunggah lowongan sukarelawan baru melalui halaman admin yang telah disediakan Volunteeria agar dapat tampil di halaman Daftar Lowongan. 
6. Penunggahan Berita Baru Mengenai Kegiatan Sukarelawan: Selain mengunggah lowongan baru, pengguna juga bisa mengunggah berita mengenai kegiatan sukarelawan melalui halaman admin yang sama. Dengan memilih opsi "Tips" pada halaman admin tersebut.
7. Dark Mode (Mode Gelap): Pengguna bisa melakukan personalisasi pada tampilan pada website Volunteeria sesuai dengan apa yang lebih disukai (Light Mode / Dark Mode)

## Struktur Direktori
📦Volunteeria
 ┣ 📂assets
 ┃ ┣ 📂img
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂company-profile
 ┃ ┃ ┃ ┣ 📂main-views
 ┃ ┃ ┃ ┃ ┣ 📜contributionSection.js
 ┃ ┃ ┃ ┃ ┣ 📜featureSectionView.js
 ┃ ┃ ┃ ┃ ┣ 📜jumbotronView.js
 ┃ ┃ ┃ ┃ ┗ 📜mainNavbarView.js
 ┃ ┃ ┃ ┗ 📜controller.js
 ┃ ┃ ┣ 📂daftar-lowongan
 ┃ ┃ ┃ ┣ 📂daftar-lowongan-views
 ┃ ┃ ┃ ┃ ┣ 📜lowonganNavbarView.js
 ┃ ┃ ┃ ┃ ┗ 📜mainView.js
 ┃ ┃ ┃ ┣ 📂detail-volunteer
 ┃ ┃ ┃ ┃ ┗ 📜detailVolunteerController.js
 ┃ ┃ ┃ ┗ 📜daftarLowonganController.js
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📂main-views
 ┃ ┃ ┃ ┃ ┣ 📜carouselView.js
 ┃ ┃ ┃ ┃ ┣ 📜contributionSection.js
 ┃ ┃ ┃ ┃ ┣ 📜featureSectionView.js
 ┃ ┃ ┃ ┃ ┣ 📜jumbotronView.js
 ┃ ┃ ┃ ┃ ┗ 📜mainNavbarView.js
 ┃ ┃ ┃ ┗ 📜controller.js
 ┃ ┃ ┣ 📂tentang-kami
 ┃ ┃ ┃ ┣ 📜aboutUsNavbar.js
 ┃ ┃ ┃ ┗ 📜tentangKamiController.js
 ┃ ┃ ┣ 📂tips-volunteer
 ┃ ┃ ┃ ┗ 📜tipsVolunteerController.js
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜Navbar.js
 ┃ ┃ ┣ 📜innerNavbarView.js
 ┃ ┃ ┗ 📜model.js
 ┃ ┣ 📂style
 ┃ ┃ ┣ 📜input.css
 ┃ ┃ ┣ 📜input.css.map
 ┃ ┃ ┣ 📜input.scss
 ┃ ┃ ┣ 📜output.css
 ┃ ┃ ┗ 📜output.css.map
 ┣ 📂component
 ┃ ┣ 📂daftar-lowongan
 ┃ ┃ ┣ 📂detail-volunteer
 ┃ ┃ ┃ ┗ 📜detail-volunteer.php
 ┃ ┃ ┗ 📜daftar-lowongan.php
 ┃ ┣ 📂signup
 ┃ ┃ ┗ 📜signup.php
 ┃ ┣ 📂tentang-kami
 ┃ ┃ ┗ 📜tentang-kami.php
 ┃ ┗ 📂tips-volunteer
 ┃ ┃ ┗ 📜tips-volunteer.php
 ┣ 📂config
 ┃ ┣ 📜config.php
 ┃ ┗ 📜connect.php
 ┣ 📂 node_modules (Lakukan perintah npm install, untuk memunculkan folder ini)
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tailwind.config.js

- Folder Assets : Folder yang berisi aset-aset seperti gambar (img), file css (style), dan script JavaScript (js) yang digunakan dalam proyek Volunteeria. Dalam direktori "js", terdapat sub-direktori untuk berbagai bagian proyek.
- Folder Component : Folder yang berisi file-file html yang digunakan dalam halaman-halaman aplikasi, seperti halaman daftar lowongan, detail volunteer, pendaftaran, tentang kami, dan tips volunteer.
- Folder Config : Folder yang berisi file-file konfigurasi yang penting untuk menjalankan proyek. "config.php" berisi pengaturan penting seperti konfigurasi database, sementara "connect.php" berisi script untuk menghubungkan ke database.
- Folder Node Modules : Folder yang berisi semua dependensi aplikasi Volunteeria.
- .gitignore : File yang digunakan untuk mengabaikan file atau direktori dalam kontrol versi Git.
- index.html : Halaman utama aplikasi Volunteeria.
- package-lock.json, package.json: File-file yang digunakan untuk mengelola dependensi proyek.
- tailwind.config.js: File konfigurasi untuk Tailwind CSS.

## Lisensi
Aplikasi Volunteeria bersifat open source. Anda dapat mengubah, lalu publish ke internet.

Note: jangan lupa berikan credit jika projek ini dimuat ke internet, hak cipta dilindungi.
