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
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <link rel="stylesheet" href="../../assets/style/output.css" />
    <script defer type="module" src="../../assets/js/tentang-kami/tentangKamiController.js"></script>
    <title>Volunteeria</title>
  </head>

  <body class="text-black1 dark:text-palewhite font-poppins bg-white dark:bg-black1">
    <!-- Back to Top Button -->
    <a
      href="#"
      class="fixed bottom-5 right-5 rounded-full bg-purple1 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-500 ease-in-out hover:bg-palewhite hover:shadow-lg hover:text-purple1 z-20"
      id="btn-back-to-top"
    >
      <svg aria-hidden="true" focusable="false" data-prefix="fas" class="h-4 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </a>

    <!-- Overlay Background -->
    <div class="overlay-bg bg-black opacity-50 fixed left-0 right-0 bottom-0 top-0 z-30 hidden"></div>

    <!-- Navbar -->
    <nav
      class="bg-white dark:bg-black1 py-3 sm:py-4 lg:py-6 sm:pr-20 sm:pl-16 max-sm:px-5 flex items-center justify-between drop-shadow-[0_ 5px_15px_white] text-black1 dark:text-palewhite relative hover:opacity-100 duration-500 z-20 backdrop-blur-md"
    >
      <a href="../../index.html" class="text-2xl uppercase tracking-widest font-semibold max-sm:text-sm mt-2 flex items-center gap-x-3 max-sm:gap-x-2 nav-links group">
        <img src="../../assets/img/logo2dark.svg" alt="Volunteeria Logo" class="w-10 sm:w-[3.5rem] h-auto dark:hidden group-hover:-translate-y-2 transition-all" />
        <img src="../../assets/img/logo2white.svg" alt="Volunteeria Logo" class="w-10 sm:w-[3.5rem] h-auto hidden dark:block group-hover:-translate-y-2 transition-all" />
        <h1>Volunteeria</h1>
      </a>

      <div class="flex items-center gap-[5vw]">
        <!-- Dark Mode (Mobile) -->
        <div class="hs-dropdown lg:hidden" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
          <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="javascript:;">
            <svg class="hs-dark-mode-active:hidden block w-[7vw] max-w-[2rem]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
              />
            </svg>
            <svg class="hs-dark-mode-active:block hidden w-[7vw] max-w-[2rem]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </a>

          <div
            id="selectThemeDropdown"
            class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
          >
            <a
              class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="javascript:;"
              data-hs-theme-click-value="auto"
            >
              Auto (system default)
            </a>
            <a
              class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="javascript:;"
              data-hs-theme-click-value="default"
            >
              Default (light mode)
            </a>
            <a
              class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="javascript:;"
              data-hs-theme-click-value="dark"
            >
              Dark
            </a>
          </div>
        </div>

        <button
          class="hamburger relative lg:hidden elative flex overflow-hidden items-center justify-center rounded-full w-[10vw] h-[10vw] max-w-[40px] max-h-[40px] transform transition-all bg-purple1 ring-white ring-opacity-30 duration-200 shadow-md burger-ring"
        >
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

      <ul class="hidden lg:flex gap-x-8 text-base items-center">
        <li><a href="#" class="nav-links relative active-link text-purple1 after:scale-100">TENTANG KAMI</a></li>
        <li><a href="../../components/signup/signup.php" class="nav-links hoverable-link">DAFTAR PEREKRUT</a></li>
        <li class="btn px-5 py-8 flex items-center justify-center group border border-black1 dark:border-palewhite">
          <a href="../../components/daftar-lowongan/daftar-lowongan.php" class="nav-links text-black1 dark:text-palewhite group-hover:text-white font-medium tracking-widest">VOLUNTEERS/JOBS</a>
        </li>
        <li>
          <div class="hs-dropdown" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
            <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="javascript:;">
              <svg class="hs-dark-mode-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
                />
              </svg>
              <svg class="hs-dark-mode-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
            </a>

            <div
              id="selectThemeDropdown"
              class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            >
              <a
                class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="javascript:;"
                data-hs-theme-click-value="auto"
              >
                Auto (system default)
              </a>
              <a
                class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="javascript:;"
                data-hs-theme-click-value="default"
              >
                Default (light mode)
              </a>
              <a
                class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="javascript:;"
                data-hs-theme-click-value="dark"
              >
                Dark
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <!-- Mobile Sidebar -->
    <aside id="default-sidebar" class="lg:hidden side-navbar fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full" aria-label="Sidebar">
      <div class="h-full px-3 py-10 overflow-y-auto bg-gray-50 dark:bg-black1">
        <ul class="space-y-2 font-medium">
          <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-palewhite group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path
                  d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-purple1">TENTANG KAMI</span>
            </a>
          </li>
          <li>
            <a href="../../components/signup/signup.php" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-palewhite group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                <path
                  d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
                />
                <path
                  d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Daftar Perekrut</span>
            </a>
          </li>
          <li>
            <a href="../../components/daftar-lowongan/daftar-lowongan.php" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-palewhite group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Volunteers/Jobs</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <main class="w-full h-fit bg-white2">
      <section class="first-section h-[576px] w-full bg-white2 dark:bg-black2 flex justify-center items-center">
        <div class="w-[85%] h-[85%] bg-blend-overlay mx-auto bg-no-repeat bg-cover bg-fixed bg-black1 flex items-center justify-center" style="background-image: url(../../assets/img/partner2.jpeg)">
          <h1 class="text-white text-3xl sm:text-5xl font-bold tracking-widest">ABOUT US</h1>
        </div>
      </section>

      <section class="bg-white dark:bg-black1 min-h-[500px] flex flex-col items-center justify-center text-center py-10 px-5">
        <h1 class="text-center font-medium text-2xl sm:text-3xl tracking-widest">Tentang Perusahaan Kami</h1>
        <p class="mt-5 text-sm sm:text-base w-[80%] leading-8 text-justify sm:text-center mx-auto">
          Kami adalah Volunteeria, sebuah platform yang dipenuhi dengan semangat untuk memberikan perubahan positif. Misi kami adalah menghubungkan orang-orang yang ingin memberikan kembali dengan proyek-proyek yang membutuhkan bantuan
          mereka. Kami percaya bahwa setiap tindakan baik, sekecil apapun, memiliki kekuatan untuk merubah dunia. Dengan Volunteeria, Anda dapat menjelajahi berbagai kesempatan sukarela yang cocok dengan minat dan keterampilan Anda. Kami
          menyediakan alat yang memudahkan Anda untuk terlibat dalam aksi sosial, membangun komunitas yang lebih baik, dan memberikan dampak positif dalam hidup orang lain. Bersama-sama, mari kita menjadi bagian dari perubahan yang kita
          inginkan. Bergabunglah dengan kami di Volunteeria dan mari berbuat baik bersama-sama!
        </p>

        <ul class="py-16 px-10 flex flex-col sm:flex-row gap-10">
          <li class="identity-list">
            <img src="../../assets/img/who.jpeg" alt="" class="w-full h-auto max-w-sm" />
            <h3 class="identity-title text-left">SIAPA KAMI</h3>
            <p class="identity-caption text-left">
              Kami adalah komunitas sukarelawan yang bersemangat dan peduli. Dengan beragam latar belakang dan keahlian, kami bersatu dalam tekad untuk memberikan dampak positif dalam masyarakat. Bergabunglah dengan kami dan kenali lebih
              dekat siapa kami di Volunteeria.
            </p>
          </li>
          <li class="identity-list">
            <img src="../../assets/img/mission.jpeg" alt="" class="w-full h-auto max-w-sm" />
            <h3 class="identity-title text-right sm:text-left">MISI KAMI</h3>
            <p class="text-right sm:text-left identity-caption">
              Misi kami adalah menginspirasi dan memfasilitasi aksi sukarela yang bermakna. Kami berkomitmen untuk menghubungkan para sukarelawan dengan proyek-proyek yang sesuai dengan minat dan keterampilan mereka, sehingga bersama-sama
              kita dapat mencapai perubahan positif.
            </p>
          </li>
          <li class="identity-list">
            <img src="../../assets/img/vision.jpeg" alt="" class="w-full h-auto max-w-sm" />
            <h3 class="identity-title text-center sm:text-left">VISI KAMI</h3>
            <p class="text-center sm:text-left identity-caption">
              Visi kami adalah menciptakan dunia yang dipenuhi dengan aksi-aksi sukarela yang membawa perubahan positif. Kami bermimpi tentang masyarakat yang saling peduli dan berbagi, di mana setiap tindakan baik memiliki dampak jauh
              lebih besar.
            </p>
          </li>
        </ul>
      </section>

      <section class="h-[450px] w-full bg-white2 dark:bg-black2 flex justify-center items-center">
        <div class="w-[85%] h-[85%] bg-blend-overlay mx-auto bg-no-repeat bg-cover bg-fixed bg-black1 flex items-center justify-center px-5 lg:px-10" style="background-image: url(../../assets/img/together.jpeg)">
          <h1 class="text-white text-xl sm:text-2xl lg:text-3xl font-medium tracking-wider text-center">SAKSIKAN BAGAIMANA KAMI MEMBUAT SEMUA NYA MENJADI LEBIH TERHUBUNG</h1>
        </div>
      </section>

      <section class="py-10 px-5 bg-white dark:bg-black1">
        <h1 class="text-center font-medium text-2xl sm:text-3xl tracking-widest">OUR AWESOME MINDS</h1>
        <p class="mt-5 text-sm sm:text-base w-[80%] leading-8 text-center mx-auto mb-10">Ide Cemerlang dibalik Volunteeria</p>

        <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <div class=" flex flex-col w-[80%] max-w-sm h-fit bg-white2 dark:bg-black2 rounded-xl py-4 hover:border-4 border-purple1 transition-all" style="cursor: pointer;">
            <div class=" grow-[2] flex items-center justify-center py-4">
              <div class="basis-2/3 max-h-[30rem] flex items-center justify-center rounded-full  overflow-hidden bg-purple1 border-2 border-black1 dark:border-palewhite">
                <img src="../../assets/img/afridho.png" alt="" class=" w-full h-auto" />
              </div>
            </div>
            <div class=" grow flex items-center justify-center flex-col p-1">
              <h3 class="developer-name">Afridho Ikhsan</h3>
              <p class="developer-part">Frontend</p>
            </div>
            <div class="flex justify-center items-center grow py-4 gap-3">
              <a href="#" class="transition-all text-black1 hover:text-purple1 dark:hover:text-purple1 dark:text-palewhite w-8 h-8 sm:w-10 sm:h-10 bg-purple1 hover:bg-black1 dark:hover:bg-palewhite border flex items-center justify-center rounded-full">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="transition-all text-black1 hover:text-purple1 dark:hover:text-purple1 dark:text-palewhite w-8 h-8 sm:w-10 sm:h-10 bg-purple1 hover:bg-black1 dark:hover:bg-palewhite border flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
              <a href="#" class="transition-all text-black1 hover:text-purple1 dark:hover:text-purple1 dark:text-palewhite w-8 h-8 sm:w-10 sm:h-10 bg-purple1 hover:bg-black1 dark:hover:bg-palewhite border flex items-center justify-center rounded-full">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="transition-all text-black1 hover:text-purple1 dark:hover:text-purple1 dark:text-palewhite w-8 h-8 sm:w-10 sm:h-10 bg-purple1 hover:bg-black1 dark:hover:bg-palewhite border flex items-center justify-center rounded-full">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
          <div class=" flex flex-col w-[80%] max-w-sm h-fit bg-white2 dark:bg-black2 rounded-xl py-4 hover:border-4 border-purple1 transition-all" style="cursor: pointer;">
            <div class=" grow-[2] flex items-center justify-center py-4">
              <div class="basis-2/3 max-h-[30rem] flex items-center justify-center rounded-full  overflow-hidden bg-purple1 border-2 border-black1 dark:border-palewhite">
                <img src="../../assets/img/alip.png" alt="" class=" w-full h-auto" />
              </div>
            </div>
            <div class=" grow flex items-center justify-center flex-col p-1">
              <h3 class="developer-name">Alif Fadillah Ummar</h3>
              <p class="developer-part">Backend</p>
            </div>
            <div class="flex justify-center items-center grow py-4 gap-3 ">
              <a href="#" class="transition-all text-black1 hover:text-purple1 dark:hover:text-purple1 dark:text-palewhite w-8 h-8 sm:w-10 sm:h-10 bg-purple1 hover:bg-black1 dark:hover:bg-palewhite border flex items-center justify-center rounded-full">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="transition-all text-black1 hover:text-purple1 dark:hover:text-purple1 dark:text-palewhite w-8 h-8 sm:w-10 sm:h-10 bg-purple1 hover:bg-black1 dark:hover:bg-palewhite border flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
              <a href="#" class="transition-all text-black1 hover:text-purple1 dark:hover:text-purple1 dark:text-palewhite w-8 h-8 sm:w-10 sm:h-10 bg-purple1 hover:bg-black1 dark:hover:bg-palewhite border flex items-center justify-center rounded-full">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="transition-all text-black1 hover:text-purple1 dark:hover:text-purple1 dark:text-palewhite w-8 h-8 sm:w-10 sm:h-10 bg-purple1 hover:bg-black1 dark:hover:bg-palewhite border flex items-center justify-center rounded-full">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-10 bg-white2 dark:bg-black2" id="contact-section">
        <!-- Contact Us -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="max-w-2xl lg:max-w-5xl mx-auto">
            <div class="text-center">
              <h1 class="text-center font-medium text-2xl sm:text-3xl tracking-widest">KONTAK KAMI</h1>
              <p class="mt-5 text-sm sm:text-base w-[80%] leading-8 text-center mx-auto mb-10">Kami Siap Mendengarkan Anda.</p>
            </div>

            <div class="mt-12 grid items-center lg:grid-cols-2 border border-palewhite rounded-lg justify-items-center px-5">
              <!-- Card -->
              <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8 h-full w-full">
                <h2 class="mb-5 text-xl font-semibold text-black1 dark:text-palewhite">Sampaikan pesan anda disini</h2>

                <form method="post" action="https://formspree.io/f/mqkvlywd">
                  <div class="grid gap-4 lg:gap-6">
                    <!-- Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label for="firstname" class="sr-only">First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          class="py-3 lg:py-5 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-palewhite dark:border-gray-700 dark:text-black lg:placeholder:text-base"
                          placeholder="Jhon"
                        />
                      </div>

                      <div>
                        <label for="lastname" class="sr-only">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          class="py-3 lg:py-5 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-palewhite dark:border-gray-700 dark:text-black lg:placeholder:text-base"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <!-- End Grid -->

                    <div>
                      <label for="email" class="sr-only">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        class="py-3 lg:py-5 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-palewhite dark:border-gray-700 dark:text-black lg:placeholder:text-base"
                        placeholder="Volunteeria@info.com"
                      />
                    </div>

                    <div>
                      <label for="telepon" class="sr-only">Phone Number</label>
                      <input
                        type="text"
                        name="telepon"
                        id="telepon"
                        class="py-3 lg:py-5 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-palewhite dark:border-gray-700 dark:text-black lg:placeholder:text-base"
                        placeholder="081312345678"
                      />
                    </div>

                    <div>
                      <label for="detail" class="sr-only">Details</label>
                      <textarea
                        id="detail"
                        name="detail"
                        rows="8"
                        class="py-3 lg:py-5 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-palewhite dark:border-gray-700 dark:text-black lg:placeholder:text-base"
                        placeholder="Very useful website!!"
                      ></textarea>
                    </div>
                  </div>
                  <!-- End Grid -->

                  <div class="mt-4 grid">
                    <button
                      type="submit"
                      class="inline-flex justify-center items-center gap-x-3 text-center bg-purple1 hover:bg-purple2 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    >
                      Kirim pesan
                    </button>
                  </div>

                  <div class="mt-3 text-center">
                    <p class="text-sm text-gray-500">Kami akan melakukan respon terhadap pesan anda dalam 1-2 hari.</p>
                  </div>
                </form>
              </div>
              <!-- End Card -->

              <div class="divide-y divide-gray-200 dark:divide-palewhite py-5">
                <!-- Icon Block -->
                <div class="flex gap-x-7 py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 105.51 172.02" class="flex-shrink-0 w-10 h-10 mt-1.5 text-gray-800 dark:text-palewhite">
                    <title>location</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          class="cls-1"
                          d="M104.92,44.38C98.88,11.48,66-8,35.17,3.16,22.47,7.77,12.79,15.93,6.53,28a5.28,5.28,0,0,0-1.46,2.65A44,44,0,0,0,.16,54.88c.76,9,4.23,17.27,7.49,25.54,11.81,30,26.16,58.79,39.85,87.91,1.1,2.33,2.79,3.74,5.43,3.69s4.2-1.41,5.3-3.81q10.07-21.86,20.31-43.62c8.35-17.8,16.49-35.7,23-54.27C104.57,61.92,106.57,53.38,104.92,44.38ZM71.34,63.53a21.72,21.72,0,0,1-24.68,10c-8.94-2.42-15.14-11-15.14-20.87A21,21,0,0,1,47.21,32.28c8.31-2,17.79-.31,24.53,10.65.67,1.72,1.33,3.43,2,5.14C74.06,53.4,74.21,58.63,71.34,63.53Z"
                        />
                        <path
                          d="M104.92,44.38C98.88,11.48,66-8,35.17,3.16,22.47,7.77,12.79,15.93,6.53,28c-.39.94-.16,2.22-1.46,2.65A44,44,0,0,0,.16,54.88c.76,9,4.23,17.27,7.49,25.54,11.81,30,26.16,58.79,39.85,87.91,1.1,2.33,2.79,3.74,5.43,3.69s4.2-1.41,5.3-3.81q10.07-21.86,20.31-43.62c8.35-17.8,16.49-35.7,23-54.27C104.57,61.92,106.57,53.38,104.92,44.38ZM71.34,63.53a21.72,21.72,0,0,1-24.68,10c-8.94-2.42-15.14-11-15.14-20.87A21,21,0,0,1,47.21,32.28c8.31-2,17.79-.31,24.53,10.65.67,1.72,1.33,3.43,2,5.14C74.06,53.4,74.21,58.63,71.34,63.53Z"
                        />
                        <path class="cls-2" d="M5.07,30.64A5.28,5.28,0,0,1,6.53,28C6.48,29.12,7.15,30.64,5.07,30.64Z" />
                        <path class="cls-1" d="M73.74,48.07c-.67-1.71-1.33-3.42-2-5.14A8.68,8.68,0,0,1,73.74,48.07Z" />
                        <path class="cls-3" d="M73.74,48.07c-.67-1.71-1.33-3.42-2-5.14C73.72,44.14,74.18,45.93,73.74,48.07Z" />
                      </g>
                    </g>
                  </svg>

                  <div>
                    <h3 class="font-semibold text-gray-800 dark:text-palewhite">Location:</h3>
                    <p class="mt-1 text-sm text-gray-500">Jl. HS.Ronggo Waluyo, Puseurjaya, Telukjambe Timur, Karawang, Jawa Barat 41361.</p>
                  </div>
                </div>
                <!-- End Icon Block -->

                <!-- Icon Block -->
                <div class="flex gap-x-2 py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 105.51 172.02" class="w-16 h-16 text-gray-800 dark:text-palewhite">
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          class="cls-1"
                          d="M83.1,65.75A24.51,24.51,0,0,1,81.15,74a8.61,8.61,0,0,1-3,3.36c-4.77,3.59-10,5.9-16.1,5.66a30.76,30.76,0,0,1-9.39-2.2c-5-1.83-10-3.49-14.54-6.24A86.4,86.4,0,0,1,21.78,61.45C16.53,56.2,11.65,50.64,8,44.12A82.23,82.23,0,0,1,.38,24,16.74,16.74,0,0,1,0,20,25.34,25.34,0,0,1,7,3.45c1.73-1.93,4.2-2.36,6.57-2.93A15.85,15.85,0,0,1,17.85,0a2.16,2.16,0,0,1,1.69.83,16.54,16.54,0,0,1,1.62,2.51c2.6,4.63,5,9.4,8,13.81,1.62,2.38,1.44,3.54-.5,5.67a48.63,48.63,0,0,1-5.38,4.65A30.85,30.85,0,0,0,20.62,30a3,3,0,0,0-.69,3.66,73.71,73.71,0,0,0,4.44,7.66A57.08,57.08,0,0,0,44.89,60.59a41.76,41.76,0,0,0,4.67,2.6A3,3,0,0,0,53,62.6a38,38,0,0,0,4.36-5A22.85,22.85,0,0,1,61,53.84c1.44-1.17,2.61-1.37,4.16-.35,4.2,2.75,8.61,5.13,13,7.56a40.24,40.24,0,0,1,3.66,2.1A2.73,2.73,0,0,1,83.1,65.75Z"
                        />
                        <path
                          d="M83.1,65.75A24.51,24.51,0,0,1,81.15,74a8.61,8.61,0,0,1-3,3.36c-4.77,3.59-10,5.9-16.1,5.66a30.76,30.76,0,0,1-9.39-2.2c-5-1.83-10-3.49-14.54-6.24A86.4,86.4,0,0,1,21.78,61.45C16.53,56.2,11.65,50.64,8,44.12A82.23,82.23,0,0,1,.38,24,16.74,16.74,0,0,1,0,20,25.34,25.34,0,0,1,7,3.45c1.73-1.93,4.2-2.36,6.57-2.93A15.85,15.85,0,0,1,17.85,0a2.16,2.16,0,0,1,1.69.83,16.54,16.54,0,0,1,1.62,2.51c2.6,4.63,5,9.4,8,13.81,1.62,2.38,1.44,3.54-.5,5.67a48.63,48.63,0,0,1-5.38,4.65A30.85,30.85,0,0,0,20.62,30a3,3,0,0,0-.69,3.66,73.71,73.71,0,0,0,4.44,7.66A57.08,57.08,0,0,0,44.89,60.59a41.76,41.76,0,0,0,4.67,2.6A3,3,0,0,0,53,62.6a38,38,0,0,0,4.36-5A22.85,22.85,0,0,1,61,53.84c1.44-1.17,2.61-1.37,4.16-.35,4.2,2.75,8.61,5.13,13,7.56a40.24,40.24,0,0,1,3.66,2.1A2.73,2.73,0,0,1,83.1,65.75Z"
                        />
                      </g>
                    </g>
                  </svg>

                  <div>
                    <h3 class="font-semibold text-gray-800 dark:text-palewhite">Call Us</h3>
                    <ul>
                      <li class="mt-1 text-sm text-gray-500">+62 123 456 78</li>
                      <li class="mt-1 text-sm text-gray-500">+62 123 456 98</li>
                    </ul>
                  </div>
                </div>
                <!-- End Icon Block -->

                <!-- Icon Block -->
                <div class="flex gap-x-7 py-6">
                  <svg class="flex-shrink-0 w-9 h-9 mt-1.5 text-gray-800 dark:text-palewhite ml-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                    />
                  </svg>
                  <div>
                    <h3 class="font-semibold text-gray-800 dark:text-palewhite">E-Mail</h3>
                    <ul>
                      <li>
                        <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="mailto:afridhoikhsan@gmail.com"> afridhoikhsan@gmail.com </a>
                      </li>
                      <li>
                        <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="mailto:arszalzdarker@gmail.com">arszalzdarker@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- End Icon Block -->

                <!-- Google Map -->
                <div class="relative w-full h-96 mt-5 rounded-lg">
                  <iframe
                    class="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=universitas singaperbangsa karawang&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    style="border: 0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Contact Us -->
      </section>
    </main>

    <footer class="bg-white dark:bg-black1 drop-shadow-[0_-3px_10px_rgba(95,122,219,0.8)]">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-10 md:mb-0">
            <a href="../../index.html" class="flex items-center">
              <img src="../../assets/img/logo.svg" class="h-7 lg:h-8 w-auto mr-3" alt="Volunteeria Logo" />
              <span class="self-center text-lg lg:text-2xl font-semibold dark:text-white tracking-widest">VOLUNTEERIA</span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-1 lg:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">Tentang Kami</a>
                </li>
                <li class="mb-4">
                  <a href="../../index.html#faq-section" class="hover:underline">FAQ</a>
                </li>
                <li>
                  <a href="#contact-section" class="hover:underline">Kontak Kami</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Features</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="../../components/daftar-lowongan/daftar-lowongan.php" class="hover:underline">Daftar Lowongan</a>
                </li>
                <li>
                  <a href="../../components/tips-volunteer/tips-volunteer.php" class="hover:underline">Tips Volunteer</a>
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
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="../../index.html" class="hover:underline">Volunteeria™</a>. All Rights Reserved. </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path
                  d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                />
              </svg>
              <span class="sr-only">Discord community</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
