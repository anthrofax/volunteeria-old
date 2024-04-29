class CarouselView {
  _parentElement = document.querySelector(".carousel-area");
  _cardRating = document.querySelectorAll(".card-rating");
  _dotSlider = document.querySelector(".dot-slider");
  _curSlide = 0;

  renderSlider() {
    this._cardRating.forEach((card, i) => {
      card.style.transform = `translateX(${130 * i}%)`;

      const dotHTML = `<button class="dot w-3 h-3 ${i === 0 ? 'dot-active' : ''} rounded-full" data-slide="${i}"></button>`;

      this._dotSlider.insertAdjacentHTML("beforeend", dotHTML);

      const dots = [...this._dotSlider.children];
      dots.forEach(dot => {
         if(!dot.classList.contains('dot-active')) dot.classList.add('bg-palewhite')
      })
    });
  }

  carouselButtonHandler() {
    this._parentElement.addEventListener("click", this._slideCarousel.bind(this));
  }

  carouselDotHandler() {
    this._dotSlider.addEventListener("click", this._dotClick.bind(this));
  }

  _slideCarousel(e) {
    const btnClicked = e.target.closest(".carousel-button");
    const cards = this._cardRating;

    if (!btnClicked) return;
    e.preventDefault();

    if (btnClicked.classList.contains("carousel-left-button")) {
      if (this._curSlide == 0) this._curSlide = cards.length - 1;
      else this._curSlide--;

      this._goToSlide(this._curSlide);
      this._dotActive(this._curSlide);
    }

    if (btnClicked.classList.contains("carousel-right-button")) {
      if (this._curSlide == cards.length - 1) this._curSlide = 0;
      else this._curSlide++;

      this._goToSlide(this._curSlide);
      this._dotActive(this._curSlide);
    }
  }

  _goToSlide(slide) {
    this._cardRating.forEach((card, i) => {
      card.style.transform = `translateX(${130 * (i - slide)}%)`;
    });
  }

  _dotClick(e) {
    const dotClicked = e.target.closest('.dot');
    if (!dotClicked) return;

    this._goToSlide(dotClicked.dataset.slide)
    this._dotActive(dotClicked.dataset.slide);
  }

  _dotActive(slide) {
    const dots = [...this._dotSlider.children];
    dots.forEach(dot => {
      dot.classList.replace('dot-active', 'bg-palewhite')
    })

    dots[slide].classList.replace('bg-palewhite', 'dot-active');
  }
}

export default new CarouselView();
