document.addEventListener('scroll', handleScroll);
// get a reference to our predefined button
let scrollToTopBtn = document.querySelector('.scrollToTopBtn');

function handleScroll() {
  let scrollableHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.1;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = 'block';
  } else {
    //hide button
    scrollToTopBtn.style.display = 'none';
  }
}

scrollToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
