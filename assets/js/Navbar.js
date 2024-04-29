export default class Navbar {
    _parentElement = document.querySelector("nav");
    _navLinks = this._parentElement.querySelectorAll("a");
    _hamburgerButton = this._parentElement.querySelector('.hamburger');
    _overlayBg = document.querySelector('.overlay-bg');
  
    navLinkHandler() {
      this._parentElement.addEventListener("mouseover", this.fadeOutLinks.bind(this,  0.5));
      this._parentElement.addEventListener("mouseout", this.fadeOutLinks.bind(this, 1));
    }
  
    fadeOutLinks(opacity, e) {
      const linkHovered = e.target.closest("a");
      
      if (!linkHovered) return;
  
      this._navLinks.forEach((link) => {
        if (link !== linkHovered) {
          link.style.opacity = opacity
        }
      });
    }
  
    hamburgerHandler() {
      this._hamburgerButton.addEventListener('click', () => {
        this._showNavbar();
        this._overlayBg.classList.remove('hidden');
      })
    }
  
    overlayBgHandler() {
      this._overlayBg.addEventListener('click', () => {
        this._showNavbar();
        this._overlayBg.classList.add('hidden')
      })
    }

    fixNavbar(jumbotron) {
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
  
    _showNavbar() {
      const threeLine = this._hamburgerButton.querySelectorAll('.three-line')
      const closeHamburger = this._hamburgerButton.querySelector('.close-hamburger');
      const closeLine = this._hamburgerButton.querySelectorAll('.close-line');
      const sideNavbar = document.querySelector('.side-navbar');
      
      this._hamburgerButton.classList.toggle('ring-4'); 
  
      threeLine.forEach(line => line.classList.toggle('translate-x-10'));
  
      closeHamburger.classList.toggle('left-1/2');
      closeHamburger.classList.toggle('w-12');
  
      closeLine.forEach((line, i) => {
        (i === 0) ? line.classList.toggle('rotate-45') : line.classList.toggle('-rotate-45');
      })
  
      sideNavbar.classList.toggle('-translate-x-full');
    }
  }