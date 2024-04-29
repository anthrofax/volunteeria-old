import Navbar from "../../Navbar.js";

class mainNavbarView extends Navbar{
  constructor() {
    super();

  }

  fixNavbar() {
    const jumbotron = document.querySelector(".jumbotron");
    const nav = this._parentElement;

    const navFixedObserver = new IntersectionObserver(
      function (entries) {
        const [entry] = entries;
        if (entry.isIntersecting) nav.classList.replace("sticky-navbar", "relative");
        else nav.classList.replace("relative", "sticky-navbar");
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${nav.getBoundingClientRect().height}px`,
      }
    );

    navFixedObserver.observe(jumbotron);
  }
}

export default new mainNavbarView();
