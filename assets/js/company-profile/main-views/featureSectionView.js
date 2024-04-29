class featureSectionView {
  _parentElement = document.querySelector(".feature-section");
  _feature = document.querySelectorAll(".fitur-website");
  _featureLine = document.querySelectorAll(".feature-line");
  _deviderWidthInit = 0;
  _lineObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains("top-line")) this._featureLine[0].style.width = "100%";
      if (entry.target.classList.contains("bottom-line")) this._featureLine[1].style.width = "100%";

      this._lineObserver.unobserve(entry.target);
    },
    {
      root: null,
      threshold: 1,
    }
  );
  _sectionObersver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      let animationDelay = 0;
     this._feature.forEach(feature => {
      feature.style.animation = `bounceFeature 1s ${animationDelay}s 1 backwards`

      animationDelay += 0.15;
     })

      this._sectionObersver.unobserve(entry.target);
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  scrollAnimation() {
    this._featureLine.forEach((line) => this._lineObserver.observe(line));
    this._sectionObersver.observe(this._parentElement);
  }
}

export default new featureSectionView();
