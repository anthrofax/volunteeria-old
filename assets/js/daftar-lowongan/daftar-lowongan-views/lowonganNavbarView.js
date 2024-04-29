import Navbar from "../../Navbar.js";

class lowonganNavbarView extends Navbar {
  _searchNavbar = document.querySelector('.search-nav');
  _volunteerDetail = document.querySelector('.volunteer-detail');
  _volunteerDetailParent = document.querySelector('.volunteer-detail-parent');
  _navObserver = new IntersectionObserver(
     entries => {
      if (!this._volunteerDetailParent) return;
      
      const [entry] = entries;

      if (entry.isIntersecting) {
        this._searchNavbar.classList.remove("sticky-navbar");   
      } 
      else {
        this._searchNavbar.classList.add("sticky-navbar");
      } 
    },
    {
      root: null,
      threshold: 0,
    }
  );

  constructor() {
    super();
  }

  fixNavbar() {
    this._navObserver.observe(this._parentElement);
  }
}

export default new lowonganNavbarView();
