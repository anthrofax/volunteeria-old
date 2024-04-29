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

  textAnimation() {
    const jumbotronText = this._parentElement.querySelectorAll(".jumbotron-text");

    if (this._imageIndex === 0) {
      jumbotronText[1].children[0].style.transitionDuration = "1s";
      jumbotronText[1].children[1].style.transitionDuration = "0.5s";

      jumbotronText[1].children[0].classList.replace("second-title-animation", "opacity-0");
      jumbotronText[1].children[1].classList.replace("second-text-animation", "opacity-0");

      for (let i = 0; i < jumbotronText[2].children.length; i++) {
        jumbotronText[2].children[i].style.transitionDuration = (i === 0) ? "1s" : "0.5s";
        jumbotronText[2].children[i].classList.replace("third-text-animation", "opacity-0");
        
        // if (screen.width >= 1024) jumbotronText[2].children[i].classList.replace("third-text-animation", "opacity-0");
        // else jumbotronText[2].children[i].classList.replace((i === 0) ? 'second-title-animation' : 'second-text-animation', "opacity-0");
      }

      for (let i = 0; i < jumbotronText[0].children.length; i++) {
        jumbotronText[0].children[i].style.transitionDuration = (i === 0) ? "2s" : "1s";
        jumbotronText[0].children[i].classList.replace("opacity-0", "first-text-animation");

        // if (screen.width >= 1024) jumbotronText[0].children[i].classList.replace("opacity-0", "first-text-animation");
        // else jumbotronText[0].children[i].classList.replace('opacity-0', (i === 0) ? 'second-title-animation' : 'second-text-animation');
      }
    }

    if (this._imageIndex == 1) {
      for (let i = 0; i < jumbotronText[0].children.length; i++) {
        jumbotronText[0].children[i].style.transitionDuration = (i === 0) ? "1s" : "0.5s";
        jumbotronText[0].children[i].classList.replace("first-text-animation", "opacity-0");

        // if (screen.width >= 1024) jumbotronText[0].children[i].classList.replace("first-text-animation", "opacity-0");
        // else jumbotronText[0].children[i].classList.replace((i === 0) ? 'second-title-animation' : 'second-text-animation', "opacity-0");
      }

      for (let i = 0; i < jumbotronText[2].children.length; i++) {
        jumbotronText[2].children[i].style.transitionDuration = (i === 0) ? "1s" : "0.5s";
        jumbotronText[2].children[i].classList.replace("third-text-animation", "opacity-0");
        // if (screen.width >= 1024) jumbotronText[2].children[i].classList.replace("third-text-animation", "opacity-0");
        // else jumbotronText[2].children[i].classList.replace((i === 0) ? 'second-title-animation' : 'second-text-animation', "opacity-0");
      } 

      jumbotronText[1].children[0].style.transitionDuration = "2s";
      jumbotronText[1].children[1].style.transitionDuration = "1s";

      jumbotronText[1].children[0].classList.replace("opacity-0", "second-title-animation");
      jumbotronText[1].children[1].classList.replace("opacity-0", "second-text-animation");
    }

    if (this._imageIndex === 2) {
      jumbotronText[1].children[0].style.transitionDuration = "1s";
      jumbotronText[1].children[1].style.transitionDuration = "0.5s";

      jumbotronText[1].children[0].classList.replace("second-title-animation", "opacity-0");
      jumbotronText[1].children[1].classList.replace("second-text-animation", "opacity-0");

      for (let i = 0; i < jumbotronText[0].children.length; i++) {
        jumbotronText[0].children[i].style.transitionDuration = (i === 0) ? "1s" : "0.5s";
        jumbotronText[0].children[i].classList.replace("first-text-animation", "opacity-0");

        // if (screen.width >= 1024) jumbotronText[0].children[i].classList.replace("first-text-animation", "opacity-0");
        // else jumbotronText[0].children[i].classList.replace((i === 0) ? 'second-title-animation' : 'second-text-animation', "opacity-0");
      } 

      for (let i = 0; i < jumbotronText[2].children.length; i++) {
        jumbotronText[2].children[i].style.transitionDuration = (i === 0) ? "2s" : "1s";
        jumbotronText[2].children[i].classList.replace("opacity-0", "third-text-animation");

        // if (screen.width >= 1024) jumbotronText[2].children[i].classList.replace("opacity-0", "third-text-animation");
        // else jumbotronText[2].children[i].classList.replace('opacity-0', (i === 0) ? 'second-title-animation' : 'second-text-animation');
      } 
    }
  }

  _changeImage(changeTo, url) {
    if (this._isAnimating === true) return;

    if (changeTo === "prev") this._imageIndex === 0 ? (this._imageIndex = url.length - 1) : this._imageIndex--;
    else if (changeTo === "next") this._imageIndex === url.length - 1 ? (this._imageIndex = 0) : this._imageIndex++;
    else console.log("Fungsi _changeImage mengharapkan parameter 'next' atau 'prev' ");

    this._isAnimating = true;
    this._parentElement.style.backgroundImage = `url(${url[this._imageIndex]})`;
    this.textAnimation();

    setTimeout(() => {
      this._isAnimating = false;
    }, 2000);
  }
}

export default new jumbotronView();
