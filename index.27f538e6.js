let e=0;var t;!function t(){let n,o=document.getElementsByClassName("mySlides");for(n=0;n<o.length;n++)o[n].style.display="none";e++,e>o.length&&(e=1);o[e-1].style.display="block",setTimeout(t,3e3)}(),"function"!=typeof(t=window.Element.prototype).matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(e){for(let t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(o[n])}),"function"!=typeof t.closest&&(t.closest=function(e){for(let t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();let n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="team-slider"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-pagination");swiper=new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},on:{transitionStart:function(){let t=this.previousIndex,n=e.getElementsByClassName("swiper-slide")[t];n&&setTimeout((function(){n.classList.remove("is-play")}),1e3)},transitionEnd:function(){let t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}}})}))}),!1);let l=[].slice.call(document.querySelectorAll(".franchise-js")),c=document.querySelector(".franchise-button-js");function s(){let e=l.filter((function(e){return""===e.value.trim()})).length;c.disabled=0!==e}l.forEach((function(e){e.addEventListener("input",s,!1)})),s();let i=[].slice.call(document.querySelectorAll(".buynow-js")),r=document.querySelector(".buynow-button-js");function a(){let e=i.filter((function(e){return""===e.value.trim()})).length;r.disabled=0!==e}i.forEach((function(e){e.addEventListener("input",a,!1)})),a(),document.addEventListener("scroll",(function(){let e=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop/e>.1?d.style.display="block":d.style.display="none"}));let d=document.querySelector(".scrollToTopBtn");d.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));let u=[].slice.call(document.querySelectorAll(".products-green-js")),m=document.querySelector(".products-button-green-js");function f(){let e=u.filter((function(e){return""===e.value.trim()})).length;m.disabled=0!==e}u.forEach((function(e){e.addEventListener("input",f,!1)})),f();let v=[].slice.call(document.querySelectorAll(".products-coffee-js")),y=document.querySelector(".products-button-coffee-js");function p(){let e=v.filter((function(e){return""===e.value.trim()})).length;y.disabled=0!==e}v.forEach((function(e){e.addEventListener("input",p,!1)})),p();let h=[].slice.call(document.querySelectorAll(".products-milkshakes-js")),E=document.querySelector(".products-button-milkshakes-js");function S(){let e=h.filter((function(e){return""===e.value.trim()})).length;E.disabled=0!==e}h.forEach((function(e){e.addEventListener("input",S,!1)})),S();let g=window.innerHeight,L=.7*g;const w=(e,t,n)=>{if(document.getElementsByClassName(e).length>0){let o=document.getElementsByClassName(e);const l=()=>{for(let e=0;e<o.length;e++){o[e].getBoundingClientRect().top<=t?o[e].classList.add(n):o[e].classList.remove(n)}requestAnimationFrame(l)};requestAnimationFrame(l)}};w("about__img",.5*g,"in-viewport"),w("products__item--green",L,"in-viewport"),w("products__item--coffee",L,"in-viewport"),w("products__item--milkshakes",L,"in-viewport");let b,q=e=>e;document.addEventListener("DOMContentLoaded",(()=>{for(const e of document.querySelectorAll("[placeholder][data-slots]")){const t=e.getAttribute("placeholder"),n=new Set(e.dataset.slots||"_"),o=(e=>Array.from(t,((t,o)=>n.has(t)?e=o+1:e)))(0),l=[...t].findIndex((e=>n.has(e))),c=new RegExp(e.dataset.accept||"\\d","g"),s=e=>(e=e.match(c)||[],Array.from(t,(t=>(e[0]===t||n.has(t))&&e.shift()||t))),i=()=>{const[t,c]=[e.selectionStart,e.selectionEnd].map((t=>(t=s(e.value.slice(0,t)).findIndex((e=>n.has(e))))<0?o[o.length-1]:r?o[t-1]||l:t));e.value=s(e.value).join(b||(b=q``)),e.setSelectionRange(t,c),r=!1};let r=!1;e.addEventListener("keydown",(e=>r="Backspace"===e.key)),e.addEventListener("input",i),e.addEventListener("focus",i),e.addEventListener("blur",(()=>e.value===t&&(e.value="")))}}));const k=document.querySelectorAll('a[href*="#"]');for(let e of k)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=index.27f538e6.js.map
