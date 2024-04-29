import Navbar from "./Navbar.js";

class detailVolunteerNavbarView extends Navbar {
  _searchNavbar = document.querySelector('.search-nav');
  _navObserver = new IntersectionObserver(
     entries => {
      const [entry] = entries;

      if (entry.isIntersecting) this._parentElement.classList.remove("sticky-navbar");
      else this._parentElement.classList.add("sticky-navbar");
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

export default new detailVolunteerNavbarView();
