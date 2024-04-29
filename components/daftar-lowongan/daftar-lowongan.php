<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@400;700&family=Inter:wght@100;200;400;600;700&family=Poppins:ital,wght@0,100;0,200;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
  <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
  <script src="../../node_modules/preline/dist/preline.js"></script>

  <link rel="stylesheet" href="../../assets/style/output.css" />
  <script defer type="module" src="../../assets/js/daftar-lowongan/daftarLowonganController.js"></script>
  </script>

  <title>Volunteeria</title>
</head>

<body class="bg-white2 dark:bg-black2 font-poppins">
  <!-- Back to Top Button -->
  <a href="#" class="fixed bottom-5 right-5 rounded-full bg-purple1 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-500 ease-in-out hover:bg-palewhite hover:shadow-lg hover:text-purple1 z-20" id="btn-back-to-top">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" class="h-4 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
    </svg>
  </a>
  <!-- Overlay Background -->
  <div class="overlay-bg bg-black opacity-50 fixed left-0 right-0 bottom-0 top-0 z-30 hidden"></div>
  <!-- Navbar -->
  <nav class="bg-white dark:bg-black1 py-3 sm:py-4 lg:py-6 sm:pr-20 sm:pl-16 max-sm:px-5 flex items-center justify-between drop-shadow-[0_ 5px_15px_white] text-black1 dark:text-palewhite relative hover:opacity-100 duration-500 z-20 backdrop-blur-md">
        <a href="../../index.html" class="text-2xl uppercase tracking-widest font-semibold max-sm:text-sm mt-2 flex items-center gap-x-3 max-sm:gap-x-2  nav-links group">
          <img src="../../assets/img/logo2dark.svg" alt="Volunteeria Logo" class="w-10 sm:w-[3.5rem] h-auto dark:hidden  group-hover:-translate-y-2 transition-all" />
          <img src="../../assets/img/logo2white.svg" alt="Volunteeria Logo" class="w-10 sm:w-[3.5rem] h-auto hidden dark:block group-hover:-translate-y-2 transition-all" />
          <h1>Volunteeria</h1>
        </a>

    <!-- Dark Mode (Mobile) -->
    <div class="flex items-center gap-[5vw]">
      <div class="hs-dropdown xl:hidden" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
        <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="javascript:;">
          <svg class="hs-dark-mode-active:hidden block w-[7vw] max-w-[2rem]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
          </svg>
          <svg class="hs-dark-mode-active:block hidden w-[7vw] max-w-[2rem]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        </a>

        <div id="selectThemeDropdown" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
          <a class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="auto">
            Auto (system default)
          </a>
          <a class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="default">
            Default (light mode)
          </a>
          <a class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="dark">
            Dark
          </a>
        </div>
      </div>

      <button class="hamburger relative lg:hidden elative flex overflow-hidden items-center justify-center rounded-full w-[10vw] h-[10vw] max-w-[40px] max-h-[40px] transform transition-all bg-purple1 ring-white ring-opacity-30 duration-200 shadow-md burger-ring">
        <div class="flex flex-col gap-[1.5vw] sm:gap-2 justify-center items-center w-[5vw] h-[5vw] transform transition-all duration-300 origin-center max-w-sm">
          <div class="bg-white h-[2px] w-[90%] max-w-[20px] transform transition-all duration-300 origin-left three-line"></div>
          <div class="bg-white h-[2px] w-[90%] max-w-[20px] rounded transform transition-all duration-300 delay-75 three-line"></div>
          <div class="bg-white h-[2px] w-[90%] max-w-[20px] transform transition-all duration-300 origin-left delay-150 three-line"></div>

          <div class="absolute items-center justify-center transform transition-all duration-500 top-1/2 -left-10 flex w-0 -translate-x-1/2 close-hamburger">
            <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 close-line"></div>
            <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 close-line"></div>
          </div>
        </div>
      </button>
    </div>

    <ul class="hidden xl:flex gap-x-5 text-sm items-center">
      <li>
        <a href="#" class="nav-links relative active-link text-purple1 after:scale-100">Lowongan Volunteer</a>
      </li>
      <li>
        <a href="../tips-volunteer/tips-volunteer.php" class="nav-links hoverable-link">Tips Volunteer</a>
      </li>
      <li>
        <div class="hs-dropdown" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
          <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="javascript:;">
            <svg class="hs-dark-mode-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
            </svg>
            <svg class="hs-dark-mode-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          </a>

          <div id="selectThemeDropdown" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
            <a class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="auto">
              Auto (system default)
            </a>
            <a class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="default">
              Default (light mode)
            </a>
            <a class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="dark">
              Dark
            </a>
          </div>
        </div>
      </li>
    </ul>
  </nav>

  <!-- Mobile Sidebar -->
  <aside id="default-sidebar" class="xl:hidden side-navbar fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full" aria-label="Sidebar">
    <div class="h-full px-3 py-10 overflow-y-auto bg-gray-50 dark:bg-black1">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-palewhite group">
            <img src="../../assets/img/daftar-lowongan.svg" alt="" width="35px" class="dark:hidden" />
            <img src="../../assets/img/daftar-lowongan-light.svg" alt="" width="35px" class="hidden dark:inline-block" />
            <span class="flex-1 ml-3 whitespace-nowrap text-purple1">Lowongan Volunteer</span>
          </a>
        </li>
        <li>
          <a href="../tips-volunteer/tips-volunteer.php" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-palewhite group">
            <img src="../../assets/img/tips-volunteer2.svg" alt="" width="35px" class="dark:hidden" />
            <img src="../../assets/img/tips-volunteer-light.svg" alt="" width="35px" class="hidden dark:inline-block" />
            <span class="flex-1 ml-3 whitespace-nowrap">Tips Volunteer</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <!-- Search Navbar Section -->
  <nav class="search-nav p-5 bg-purple1 dark:bg-black2 h-fit hover:opacity-100 duration-500">
    <form>
      <div class="relative">
        <div class="absolute inset-y-0 w-10 flex items-center pointer-events-none z-10">
          <img src="../../assets/img/locationpurple.svg" alt="" class="w-7 h-7 absolute left-1/2 -translate-x-1/2" />
        </div>
        <input type="text" id="default-search" class="search-location block w-full p-4 pl-10 text-sm text-black1 dark:text-palewhite rounded-lg bg-white dark:bg-black1 dark:focus:ring-purple1 dark:focus:border-purple1 dark:placeholder-palewhite border-none drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]" placeholder="Area, kota, & daerah..." required />
      </div>
    </form>
  </nav>

  <!-- Section Daftar Lowongan -->
  <main class="flex flex-col py-5 bg-white dark:bg-black1 dark:text-palewhite relative">
    <p class="jumlah-lowongan text-black1 dark:text-palewhite text-sm mx-auto lg:ml-8 mb-5 w-[80%] lg:w-[400px] text-center lg:text-left">Terdapat 0 lowongan yang tersedia saat ini.</p>

    <ul class="lowongan-container flex flex-col min-h-screen px-8 items-center gap-5 lg:w-[35vw]">
      <?php
      include('../../config/config.php');
      $query = mysqli_query($koneksi, "SELECT * FROM suntings ");
      while ($lowongan = mysqli_fetch_array($query)) {
        $job_id = $lowongan['id'];
        ?>
            <li class="daftar-lowongan" data-id="<?= $job_id ?>">
              <a href="./detail-volunteer/detail-volunteer.php?job_id=<?= $job_id ?>">
                <h1 class="text-lg mt-5 text-purple1"><?php echo $lowongan['posisi'] ?></h1>
                <p><?php echo $lowongan['nama_agency'] ?></p>
                <h3 class="mt-3 font-semibold location-data"><?php echo $lowongan['lokasi'] ?></h3>

                <p class="mt-5">
                  Kriteria <br />
                  <?php echo $lowongan['kriteria'] ?>
                </p>
              </a>
            </li>
      <?php } ?>
    </ul>

    <!-- Detail Volunteer (Area kanan, khusus untuk tampilan laptop) -->
    <div class="volunteer-detail-parent overflow-y-scroll fixed right-0 w-[65vw] h-[70%] hidden lg:block bg-white dark:bg-black2 shadow-[0_0_25px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_25px_-15px_rgba(95,122,219,0.5)] rounded-lg">
      <div class="main-image flex flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center text-black1 dark:text-palewhite text-center">
        <img src="../../assets/img/wehave.png" alt="" class="w-64 mb-5" />
        <h3 class="font-semibold text-xl">Tersedia berbagai jenis lowongan yang mungkin cocok untuk mu</h3>
        <p>Pilih salah satu lowongan volunteer untuk melihat lebih lanjut</p>
      </div>

      <?php
      include('../../config/config.php');
      $query = mysqli_query($koneksi, "SELECT * FROM suntings ");
      while ($daftar_lowongan = mysqli_fetch_array($query)) {
        $job_id = $daftar_lowongan['id'];
        ?>
            <div class="volunteer-detail hidden" data-id="<?= $daftar_lowongan['id'] ?>">
              <section class="p-5 bg-white dark:bg-black1 dark:text-palewhite rounded-b-lg text-left">
                <div class="flex justify-between mb-5 text-purple1">
                  <a href="./detail-volunteer/detail-volunteer.php?job_id=<?= $job_id ?>">View in full screen</a>
                  <a href="" class="close-detail-volunteer">Close</a>
                </div>
                <h1 class="font-bold text-lg mt-8 text-center"><?php echo $daftar_lowongan['posisi'] ?></h1>
                <h2 class="font-semibold text-base mt-2 text-center"><?php echo $daftar_lowongan['nama_agency'] ?></h2>
                <p class="text-sm text-center"><?php echo $daftar_lowongan['lokasi'] ?></p>

                <p class="mt-16">
                  Kuota penerimaan : <?php echo $daftar_lowongan['kuota'] ?> <br />
                  <br />
                </p>

                <p>
                  Job Desk <br />
                  <?php echo $daftar_lowongan['jobdesk'] ?>
                  <br />
                </p>

                <p>
                  Benefit <br />
                  <?php echo $daftar_lowongan['benefit'] ?>
                  <br />
                </p>

                <p>
                  Kontak <br />
                  Nomor telepon: <?php echo $daftar_lowongan['telepon'] ?> <br />
                  Email: <?php echo $daftar_lowongan['email'] ?> <br />
                  Instagram: <?php echo $daftar_lowongan['instagram'] ?> <br />
                </p>

                <a href="<?php echo $daftar_lowongan['link_form'] ?>" target="blank"><button class="rounded-md bg-purple1 w-80 h-12 mt-10 mx-auto text-white hover:bg-purple1/90 duration-100">Apply Now</button></a>
              </section>         
            </div>
      <?php } ?>
    </div>
  </main>

  <footer class="bg-white dark:bg-black1 drop-shadow-[0_-3px_10px_rgba(95,122,219,0.8)]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-10 md:mb-0">
          <a href="../../index.html" class="flex items-center ">
            <img src="../../assets/img/logo.svg" class="h-7 lg:h-8 w-auto mr-3" alt="Volunteeria Logo" />
            <span class="self-center text-lg lg:text-2xl font-semibold dark:text-white tracking-widest ">VOLUNTEERIA</span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-1 lg:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="../tentang-kami/tentang-kami.php" class="hover:underline">Tentang Kami</a>
              </li>
              <li class="mb-4">
                <a href="../../index.html#faq-section" class="hover:underline">FAQ</a>
              </li>
              <li>
                <a href="../tentang-kami/tentang-kami.php#contact-section" class="hover:underline">Kontak Kami</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Features</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Daftar Lowongan</a>
              </li>
              <li>
                <a href="../tips-volunteer/tips-volunteer.php" class="hover:underline">Tips Volunteer</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Volunteeria™</a>. All Rights Reserved. </span>
        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span class="sr-only">Discord community</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</body>

</html>