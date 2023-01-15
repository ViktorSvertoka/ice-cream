let wh = window.innerHeight;
let tolCard = wh * 0.7; //  scroll tolerance - eg. 70% from page top
let tolAbout = wh * 0.2; //  scroll tolerance - eg. 10% from page top

const inViewport = (elem, pix, cls) => {
  if (document.getElementsByClassName(elem).length > 0) {
    let elems = document.getElementsByClassName(elem);
    const check = () => {
      for (let i = 0; i < elems.length; i++) {
        let off = elems[i].getBoundingClientRect().top;
        if (off <= pix) {
          elems[i].classList.add(cls);
        } else {
          elems[i].classList.remove(cls);
        }
      }
      requestAnimationFrame(check);
    };
    requestAnimationFrame(check);
  }
};

inViewport('about__img', tolAbout, 'in-viewport');
inViewport('products__item--green', tolCard, 'in-viewport');
inViewport('products__item--coffee', tolCard, 'in-viewport');
inViewport('products__item--milkshakes', tolCard, 'in-viewport');
