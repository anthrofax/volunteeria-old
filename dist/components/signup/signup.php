<!-- component -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@400;700&family=Inter:wght@100;200;400;600;700&family=Poppins:ital,wght@0,100;0,200;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="../../assets/style/output.css" />

  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .background-svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background-color: white;
      background-image: linear-gradient(to bottom, rgb(95, 122, 219, 0.9), rgb(162, 178, 238));
    }
  </style>
  <title>Volunteeria</title>
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>

<body class="font-poppins">
  <img src="../../assets/img/background.svg" alt="" class="background-svg block -z-10 lg:hidden" />

  <!-- Parent Element -->
  <div class="lg:w-full h-screen flex flex-col lg:flex-row items-center justify-center">
    <div class="lg:hidden text-black1 text-lg sm:text-2xl flex flex-col items-center">
      <img src="../../assets/img/logo3.svg" alt="Volunteeria Mobile Logo" class="w-16 sm:w-[85px]" />
      <h1>Volunteeria</h1>
    </div>

    <!-- Left Area -->
    <div class="lg:w-full sm:w-5/6 md:w-2/3 xl:w-1/3 2xl:w-1/4 w-[80vw] h-[70vh] lg:h-full bg-black1/50 backdrop-blur-xl lg:bg-black1  flex flex-col items-center justify-start py-8 px-[8vw] lg:px-10 overflow-scroll lg:overflow-auto rounded-xl lg:rounded-none">

      <a href="../../index.html" class="absolute left-4 top-4 w-12 h-12 bg-purple1 hover:bg-black2 duration-500 rounded-full flex items-center justify-center backdrop-blur-xl bg-opacity-80">
        <img src="../../assets/img/arrow-white.svg" alt="Back Logo" class="w-3" />
      </a>
      <h2 class="text-center text-lg sm:text-3xl font-bold tracking-wide text-palewhite">Sign Up</h2>

      <form class="text-xs sm:text-base" action="../../config/connect.php" method="post" onsubmit="return validateForm()">
        <div class="flex flex-col my-4 sm:my-7">
          <label for="name" class="text-palewhite">Nama Lembaga</label>
          <input type="text" name="name" id="name" class="mt-2 p-2 focus:outline-none focus:ring-0 rounded text-xs sm:text-base text-black1" placeholder="Masukkan nama" required />
        </div>

        <div class="flex flex-col my-4">
          <label for="email" class="text-palewhite">Alamat email</label>
          <input type="email" name="email" id="email" class="mt-2 p-2 border focus:outline-none focus:ring-0 rounded text-xs sm:text-base text-black1" placeholder="Masukkan email" required />
        </div>

        <div class="flex flex-col my-4">
          <label for="password" class="text-palewhite">Password</label>
          <div x-data="{ show: false }" class="relative flex items-center mt-2">
            <input :type=" show ? 'text': 'password' " name="password" id="password" class="flex-1 p-2 pr-10 border focus:outline-none focus:ring-0 rounded text-xs sm:text-base text-black1" placeholder="Masukkan password" type="password" required />
            <button @click="show = !show" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-palewhite">
              <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
              </svg>

              <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-col my-4">
          <label for="password_confirmation" class="text-palewhite">Konfirmasi Password</label>
          <div x-data="{ show: false }" class="relative flex items-center mt-2">
            <input :type=" show ? 'text': 'password' " name="password_confirmation" id="password_confirmation" class="flex-1 p-2 pr-10 border focus:outline-none focus:ring-0 rounded text-xs sm:text-base text-black1" placeholder="Masukkan password lagi" type="password" required />
            <button @click="show = !show" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-palewhite">
              <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
              </svg>

              <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center text-xs sm:text-base">
          <input style="cursor: pointer;" type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded" />
          <label for="remember_me" class="text-palewhite">Ingat selalu  <a href="#" class="text-purple1 hover:text-purple1 hover:underline">password</a> yang telah dibuat
        </div>

        <div class="my-4 flex items-center justify-center lg:justify-end space-x-4">
          <button type="submit" class="bg-purple1 hover:bg-blue-400 rounded-lg text-xs sm:text-base px-[5vw] py-2 text-palewhite hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
        </div>
      </form>


    </div>

    <!-- Right Area -->
    <div class="hidden lg:flex lg:w-1/2 xl:w-2/3 2xl:w-3/4 h-full bg-cover relative">
      <img src="../../assets/img/background.svg" alt="" class="background-svg hidden lg:block -z-10" />
      <div class="lg:w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30">
        <div class="flex items-center justify-center">
          <img src="../../assets/img/logo2.svg" width="80px" alt="" />
          <h1 class="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-palewhite tracking-wider">Volunteeria</h1>
        </div>
        <p class="text-palewhite mt-4 px-16 text-center">Daftarkan akunmu & raih pengalaman berharga.</p>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script>
    function validateForm() {
      // Ambil nilai password dan konfirmasi password
      var password = document.getElementById("password").value;
      var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      var confirmPassword = document.getElementById("password_confirmation").value;
      var checkbox = document.getElementById("remember_me");

      // Cek panjang password
      if (password.length < 8) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password harus terdiri dari minimal 8 karakter!',
        });
        return false; // Mencegah pengiriman form
      }

      if (!pattern.test(password)) {
        Swal.fire({
          icon: 'error',
          title: 'Password tidak valid!',
          text: 'Password harus mengandung setidaknya 3 huruf, 3 angka, 3 simbol, dan memiliki panjang minimal 8 karakter.',
        });
        return false;
      }

      // Cek apakah password dan konfirmasi password cocok
      if (password !== confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password dan Konfirmasi Password tidak cocok!',
        });
        return false; // Mencegah pengiriman form
      }

      // Cek apakah checkbox "Remember Me" dicentang
      if (!checkbox.checked) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Anda harus menerima persyaratan dan kebijakan privasi!',
        });
        return false; // Mencegah pengiriman form
      }

      // Jika semua validasi berhasil, form akan dikirim
      return true;
    }
  </script>

</body>

</html>