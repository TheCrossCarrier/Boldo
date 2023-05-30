const header = document.querySelector('.header'),
  headerWrapper = document.querySelector('.header__wrapper');

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].intersectionRatio === 1) {
      header.classList.remove('header_light');
      header.classList.add('header_dark');

      headerWrapper.classList.remove('header__wrapper_stuck');
    } else {
      header.classList.remove('header_dark');
      header.classList.add('header_light');

      headerWrapper.classList.add('header__wrapper_stuck');
    }
  },
  {
    rootMargin: '-1px 0px 0px 0px',
    threshold: [0, 1],
  },
);

observer.observe(headerWrapper);
