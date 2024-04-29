class mainView {
  _parentElement = document.querySelector("main");
  _mainImage = document.querySelector(".main-image");
  _volunteerDetail = document.querySelector(".volunteer-detail");
  _closeDetailVolunteer = document.querySelector(".close-detail-volunteer");
  _daftarLowongan = document.querySelectorAll(".daftar-lowongan");
  _searchBar = document.querySelector(".search-location");
  _lowonganContainer = document.querySelector(".lowongan-container");
  _jumlahLowonganHTML = document.querySelector(".jumlah-lowongan");
  _lowonganBawaan = this._lowonganContainer.innerHTML;
  _lowonganYangDicari = "";
  _jumlahLowonganYangDicari = 0;

  closeVolunteerDetailHandler() {
    if (!this._closeDetailVolunteer) return;
    
    this._closeDetailVolunteer.addEventListener("click", (e) => {
      e.preventDefault();
      this._volunteerDetail.classList.replace("block", "hidden");
      this._mainImage.classList.replace("hidden", "flex");
      // Clear the content of the volunteer-detail element
      this._volunteerDetail.innerHTML = "";
    });
  }
  
  openDetailVolunteer() {
    this._parentElement.addEventListener("click", (e) => {
      const clickedVolunteer = e.target.closest(".daftar-lowongan");

      if (!clickedVolunteer) return;
      const id = clickedVolunteer.getAttribute("data-id");
      e.preventDefault();

      const volunteerDetail = document.querySelectorAll(`.volunteer-detail`);

      this._mainImage.classList.replace("flex", "hidden");

      volunteerDetail.forEach(function (node) {
        if (+node.getAttribute("data-id") === +id) {
          node.classList.remove("hidden");
        } else {
          node.classList.add("hidden");
        }
      });
    });
  }

  // Parameter tampilSemua mengharapkan tipe data boolean (true/false)
  printJumlahLowongan(tampilSemua) {
    if (tampilSemua) this._jumlahLowonganHTML.textContent = `Tersedia ${this._lowonganContainer.children.length} lowongan saat ini di Volunteeria.`;
    else if (this._jumlahLowonganYangDicari === 0) this._jumlahLowonganHTML.textContent = "Kami tidak menemukan lowongan yang tersedia di lokasi yang anda inginkan.";
    else this._jumlahLowonganHTML.textContent = `Kami menemukan ${this._lowonganContainer.children.length} lowongan yang tersedia di lokasi yang anda inginkan.`;
  }

  searchVolunteerByLocation() {
    this._searchBar.addEventListener("keydown", (e) => {
      // Jika tombol yang ditekan selain enter, fungsi tidak dilanjutkan
      if (e.keyCode !== 13) return;
      e.preventDefault();

      // Membersihkan nilai dari property _lowonganYangDicari setiap user melakukan enter pada search bar
      this._lowonganYangDicari = "";
      this._jumlahLowonganYangDicari = 0;

      this._daftarLowongan.forEach((lowongan) => {
        const location = lowongan.querySelector(".location-data").textContent.toLowerCase();

        // Jika kata yang diinputkan pengguna pada search bar ada yang cocok dengan lokasi daftar lowongan, maka code html dari card lowongan yang cocok akan ditambahkan ke property _lowonganYangDicari
        if (location.includes(this._searchBar.value.toLowerCase())) {
          this._lowonganYangDicari += `${lowongan.outerHTML}\n`;
          this._jumlahLowonganYangDicari++;
        }
      });

      // Jika user tidak menginputkan apa apa, maka daftar lowongan yang ditampilkan adalah daftar lowongan bawaan yang disediakan Volunteeria
      if (this._searchBar.value === "") this._lowonganYangDicari = this._lowonganBawaan;

      this._lowonganContainer.innerHTML = "";
      this._lowonganContainer.insertAdjacentHTML("beforeend", this._lowonganYangDicari);
      this._searchBar.value === "" ? this.printJumlahLowongan(true) : this.printJumlahLowongan(false);
    });
  }
}

export default new mainView();