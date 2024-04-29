class contributionSection {
  _parentElement = document.querySelector(".contribution-section");
  _contribution = document.querySelectorAll(".kontribusi");
  _contDeviderLine = document.querySelector(".cont-devider");
  _deviderHeightInit = 0;
  _sectionObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      if (entry.target.getAttribute("dataset-order") === "odd") entry.target.classList.remove("contribution-l-animation");
      if (entry.target.getAttribute("dataset-order") === "even") entry.target.classList.remove("contribution-r-animation");

      this._deviderHeightInit += Number.parseInt(getComputedStyle(this._parentElement).height) / this._contribution.length;
      this._contDeviderLine.style.height = `${this._deviderHeightInit}px`;

      this._sectionObserver.unobserve(entry.target);
    },
    {
      root: null,
      threshold: 1,
    }
  );

  scrollAnimation() {
    this._contribution.forEach((cont) => {
      this._sectionObserver.observe(cont);
      cont.classList.add(`${cont.getAttribute("dataset-order") === "odd" ? "contribution-l-animation" : "contribution-r-animation"}`);
    });
  }

  init() {
    const contribution = document.querySelectorAll(".kontribusi");

    contribution.forEach((cont, i) => {
      cont.setAttribute("dataset-order", cont.parentElement.classList.contains("left-cont") ? "odd" : "even");

      if (screen.width >= 1024) {
        cont.classList.add(`contribution-${cont.getAttribute("dataset-order") === "odd" ? "l" : "r"}-animation`);
      }
    });
  }
}

export default new contributionSection();
