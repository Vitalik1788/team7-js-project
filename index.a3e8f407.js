!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i);var a,c=document.querySelector(".loader");a=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden",document.body.style.paddingRight="".concat(a,"px"),window.onload=function(){c.classList.remove("loader--shown"),document.body.removeAttribute("style")},i("7svdd"),i("faT6s"),i("2ufDr"),i("fFZM4");var o=i("bpxeT"),s=i("2TvXO"),d=i("l1Gdk"),l=(o=i("bpxeT"),s=i("2TvXO"),i("dIxxU")),p=i("fpBey"),u=l.default.create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:"Bearer ".concat(p.API_BAERER)}});function m(){return v.apply(this,arguments)}function v(){return(v=t(o)(t(s).mark((function e(){var n;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get();case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var g=i("idULJ"),f=(p=i("fpBey"),i("htMbP"));function _(t){var e=t.backdrop_path,n=t.poster_path,r=t.title,i=t.release_date,a=t.popularity,c=t.vote_count,o=t.vote_average,s=t.genre_ids,d=t.overview,l=t.id,u=(0,g.findFilmAtStorage)(p.STORAGE_KEY,l),m=u?"remove":"add",v=u?"Remove from my library":"Add to my library",_=window.screen.width<768?n:e,h=i.replaceAll("-","."),w=(0,g.roundToTen)(a),x=(0,f.validateGenres)(s,JSON.parse(localStorage.getItem("genres")));return"\n        <div class='upcoming-card__figure'>\n          <div class='upcoming-card__layout'></div>\n            <img\n              src=\"https://image.tmdb.org/t/p/original".concat(_,'"\n              alt="').concat(r,"\"\n              loading='lazy'\n              class='upcoming-card__img'\n            > \n          </div>\n        </div>\n        <div class='upcoming-card__body'>\n          <h3 class=\"upcoming-card__title\">").concat(r,'</h3>\n          <div class=\'metrics-list__main-container\'>\n            <ul class="list metrics-list">\n              <li class="metrics-list__item">\n                <p class="metrics-text">Release date</p>\n                <p class="metrics-text metrics-text--date">').concat(h,'</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Vote / Votes</p>\n                <p class="metrics-text metrics-text--vote">\n                  <span class="vote-wrapper">').concat(o,'</span>\n                  /\n                  <span class="vote-wrapper">').concat(c,'</span>\n                </p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Popularity</p>\n                <p class="metrics-text">').concat(w,'</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Genre</p>\n                <p class="metrics-text">').concat(x,'</p>\n              </li>\n            </ul>\n          </div>\n          <h4 class="upcoming-card__subtitle metrics-text">ABOUT</h4>\n            <p class="upcoming-card__text">').concat(d,'</p>\n          <button class="btn" type="button" data-id=').concat(l," data-").concat(m,">").concat(v,"</button>\n        </div>")}function h(t){var e=t.poster_path,n=t.backdrop_path,r=(t.title,window.matchMedia("(max-width: 767px)"),document.querySelector(".upcoming-card__img"));if(!r)return console.log("no upcoming section");var i="https://image.tmdb.org/t/p/original".concat(e),a="https://image.tmdb.org/t/p/original".concat(n);return window.screen.width<768&&r.src!==i?r.src=i:window.screen.width>=768&&r.src!==a?r.src=a:void 0}g=i("idULJ");var w=document.querySelector(".upcoming-card");function x(){return(x=t(o)(t(s).mark((function e(){var n,r,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:n=e.sent,r=(0,g.getRandomItem)(n),y(_(r)),i=t(d)((function(){return h(r)}),200),window.addEventListener("resize",i),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("error:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";w.innerHTML=t}window.addEventListener("DOMContentLoaded",(function(){return x.apply(this,arguments)})),i("gxg06"),i("4R5zJ"),i("8PzFy")}();
//# sourceMappingURL=index.a3e8f407.js.map