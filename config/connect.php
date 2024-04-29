<?php
include('config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_confirmation = $_POST['password_confirmation'];
    $remember_me = isset($_POST['remember_me']) ? 1 : 0; // Menggunakan 1 jika checkbox dicentang, 0 jika tidak

    // Validasi data yang diterima
    if (empty($name) || empty($email) || empty($password) || empty($password_confirmation)) {
        echo "Semua kolom harus diisi.";
    } elseif ($password !== $password_confirmation) {
        echo "Password dan konfirmasi password tidak cocok.";
    } elseif ($remember_me !== 1) { // Cek apakah checkbox "remember_me" tidak dicentang
        echo "Anda harus menerima persyaratan dan kebijakan privasi.";
    } elseif (!preg_match('/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/', $password)) {
        echo "Password harus mengandung setidaknya 3 huruf, 3 angka, 3 simbol, dan memiliki panjang minimal 8 karakter.";
    } else {
        // Modifikasi SQL query untuk memeriksa apakah email sudah terdaftar sebelumnya
        $check_email_sql = "SELECT * FROM users WHERE email = ?";
        $check_email_stmt = $koneksi->prepare($check_email_sql);
        $check_email_stmt->execute([$email]);
        $existing_user = $check_email_stmt->fetch();

        if ($existing_user) {
            echo "Email sudah terdaftar. Silakan gunakan email lain.";
        } else {
            // Hash password sebelum menyimpannya
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Masukkan data ke dalam database
            $insert_sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            $insert_stmt = $koneksi->prepare($insert_sql);
            if ($insert_stmt->execute([$name, $email, $hashed_password])) {
                // echo "Registrasi berhasil!";
                header("Location: http://127.0.0.1:8000/admin/login");  // perlu redirect ke halaman html lagi
            } else {
                echo "Terjadi kesalahan dalam proses registrasi.";
            }
        }
    }
}
?>
