function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=r),r.register("2jcRC",(function(t,e){const n=document.getElementById("menu"),i=document.querySelector("nav"),r=document.getElementById("overlay"),o=document.querySelector("body");n.addEventListener("click",(()=>{i.style.left="0",r.style.display="block",o.style.overflow="hidden"})),r.addEventListener("click",(()=>{i.style.left="-64%",r.style.display="none",o.style.overflow="auto"}));const s=document.querySelector(".switcher");let c="true"===localStorage.getItem("isLight");document.body.classList.toggle("light",c),s.onclick=function(){c=!c,document.body.classList.toggle("light",c),localStorage.setItem("isLight",c)};const a=window.location.href,l=document.querySelectorAll(".mobile-menu__link, .header__nav-link");if(l[0].classList.add("current__nav-link"),l[3].classList.add("current__nav-link"),!a.includes("index"))return a.includes("catalog")?(l[0].classList.remove("current__nav-link"),l[3].classList.remove("current__nav-link"),l[1].classList.add("current__nav-link"),void l[4].classList.add("current__nav-link")):a.includes("library")?(l[0].classList.remove("current__nav-link"),l[3].classList.remove("current__nav-link"),l[1].classList.remove("current__nav-link"),l[4].classList.remove("current__nav-link"),l[2].classList.add("current__nav-link"),void l[5].classList.add("current__nav-link")):void 0})),r("7DS8N"),r("2jcRC"),r("6q4Ta"),r("hPSZl");var o,s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,p=d||m||Function("return this")(),f=Object.prototype.toString,v=Math.max,_=Math.min,g=function(){return p.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=a.test(t);return n||l.test(t)?u(t.slice(2),n?2:8):c.test(t)?NaN:+t}o=function(t,e,n){var i,r,o,s,c,a,l=0,u=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=i,o=r;return i=r=void 0,l=e,s=t.apply(o,n)}function f(t){return l=t,c=setTimeout(w,e),u?p(t):s}function b(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-l>=o}function w(){var t=g();if(b(t))return x(t);c=setTimeout(w,function(t){var n=e-(t-a);return d?_(n,o-(t-l)):n}(t))}function x(t){return c=void 0,m&&i?p(t):(i=r=void 0,s)}function L(){var t=g(),n=b(t);if(i=arguments,r=this,a=t,n){if(void 0===c)return f(a);if(d)return c=setTimeout(w,e),p(a)}return void 0===c&&(c=setTimeout(w,e)),s}return e=h(e)||0,y(n)&&(u=!!n.leading,o=(d="maxWait"in n)?v(h(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m),L.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=a=r=c=void 0},L.flush=function(){return void 0===c?s:x(g())},L};var b=r("2shzp"),w=r("l6Rnt");const x=b.default.create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:`Bearer ${w.API_BAERER}`}});async function L(){return(await x.get()).data.results}var $=r("lH8sM");w=r("l6Rnt");function k(t){const{backdrop_path:e,poster_path:n,title:i,release_date:r,popularity:o,vote_count:s,vote_average:c,genre_ids:a,overview:l,id:u}=t,d=(0,$.findFilmAtStorage)(w.STORAGE_KEY,u),m=d?"remove":"add",p=d?"Remove from my library":"Add to my library";var f;return`\n        <div class='upcoming-card__figure'>\n          <div class='upcoming-card__layout'></div>\n            <img\n              src="https://image.tmdb.org/t/p/original${window.screen.width<768?n:e}"\n              alt="${i}"\n              loading='lazy'\n              class='upcoming-card__img'\n            > \n          </div>\n        </div>\n        <div class='upcoming-card__body'>\n          <h3 class="upcoming-card__title">${i}</h3>\n          <div class='metrics-list__main-container'>\n            <ul class="list metrics-list">\n              <li class="metrics-list__item">\n                <p class="metrics-text">Release date</p>\n                <p class="metrics-text metrics-text--date">${r.replaceAll("-",".")}</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Vote / Votes</p>\n                <p class="metrics-text metrics-text--vote">\n                  <span class="vote-wrapper">${c}</span>\n                  /\n                  <span class="vote-wrapper">${s}</span>\n                </p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Popularity</p>\n                <p class="metrics-text">${(0,$.roundToTen)(o)}</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Genre</p>\n                <p class="metrics-text">${(f=["comedy","action","thriller"]).length>2?`${f.slice(0,2).join(", ")}, ...`:`${f.join(", ")}`}</p>\n              </li>\n            </ul>\n          </div>\n          <h4 class="upcoming-card__subtitle metrics-text">ABOUT</h4>\n            <p class="upcoming-card__text">${l}</p>\n          <button class="btn" type="button" data-id=${u} data-${m}>${p}</button>\n        </div>`}function E({poster_path:t,backdrop_path:e,title:n}){window.matchMedia("(max-width: 767px)");const i=document.querySelector(".upcoming-card__img");if(!i)return console.log("no upcoming section");const r=`https://image.tmdb.org/t/p/original${t}`,o=`https://image.tmdb.org/t/p/original${e}`;return window.screen.width<768&&i.src!==r?i.src=r:window.screen.width>=768&&i.src!==o?i.src=o:void 0}$=r("lH8sM");const T=document.querySelector(".upcoming-card");window.addEventListener("DOMContentLoaded",(async function(){try{const e=await L(),n=(0,$.getRandomItem)(e);!function(t=""){T.innerHTML=t}(k(n));const i=t(o)((()=>E(n)),200);window.addEventListener("resize",i)}catch(t){console.error("error:",t)}})),r("4E5Dt"),r("haKcb");
//# sourceMappingURL=index.26ac83c6.js.map
