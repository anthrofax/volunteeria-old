class jumbotronView {
  _parentElement = document.querySelector(".jumbotron");
  _loadingIndicator = document.querySelector(".loading-indicator");
  _prevNextButton = document.querySelectorAll(".prevnext-jumbotron-button");
  _imageIndex = 0;
  _loadingLineWidth = 0;
  _isAnimating = false;

  imageInterval(url) {
    setInterval(() => {
      if (this._loadingLineWidth === 100) {
        this._loadingLineWidth = 0;

        this._changeImage("next", url);
      }

      if (!document.hidden && getComputedStyle(this._parentElement).opacity === "1") {
        this._loadingIndicator.style.width = `${this._loadingLineWidth++}vw`;
        this._prevNextButton.forEach((button) => button.classList.replace("opacity-50", "opacity-0"));
      } else {
        this._prevNextButton.forEach((button) => button.classList.replace("opacity-0", "opacity-50"));
      }
    }, 50);
  }

  prevnextHandler(url) {
    this._parentElement.addEventListener("click", (e) => {
      const buttonClicked = e.target.closest(".prevnext-jumbotron-button");

      if (!buttonClicked) return;

      this._loadingLineWidth = 0;
      this._loadingIndicator.style.width = `${this._loadingLineWidth++}vw`;

      if (buttonClicked.classList.contains("left-0")) {
        this._changeImage("prev", url);
      }

      if (buttonClicked.classList.contains("right-0")) {
        this._changeImage("next", url);
      }
    });
  }

  _changeImage(changeTo, url) {
    if (this._isAnimating === true) return;

    if (changeTo === "prev") this._imageIndex === 0 ? (this._imageIndex = url.length - 1) : this._imageIndex--;
    else if (changeTo === "next") this._imageIndex === url.length - 1 ? (this._imageIndex = 0) : this._imageIndex++;
    else console.log("Fungsi _changeImage mengharapkan parameter 'next' atau 'prev' ");

    this._isAnimating = true;
    this._parentElement.style.backgroundImage = `url(${url[this._imageIndex]})`;

    setTimeout(() => {
      this._isAnimating = false;
    }, 2500);
  }
}

export default new jumbotronView();
