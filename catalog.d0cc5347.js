function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},e.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"9NLH0":"catalog.d0cc5347.js","bfHyM":"default.183d728c.jpg","clsB6":"catalog.181ad606.js","1V5gE":"catalog.94349ed2.js"}')),i("2jcRC"),i("6q4Ta");const r={searchForm:document.getElementById("movieSearchForm"),searchInput:document.getElementById("movieInput"),catalogList:document.getElementById("movieList"),errorContainer:document.querySelector(".error-container"),searchBtn:document.querySelector(".search-button"),cancelBtn:document.querySelector(".cancel-button"),paginationContainer:document.querySelector(".pagination-pages-list"),paginationButton:document.querySelector(".pagination-button"),nextPageBtn:document.querySelector(".next-button"),prevPageBtn:document.querySelector(".prev-button")};class o{static BASE_URL="https://api.themoviedb.org/3";static API_KEY="41b8f9437bf3f899281f8a3f9bdc0891";constructor(){this.searchQuery="",this.page=1,this.totalAmount=0}async getMovies(){const t={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${o.API_KEY}`}};let e="";e=this.searchQuery?`${o.BASE_URL}/search/movie?api_key=${o.API_KEY}&query=${this.searchQuery}&include_adult=false&language=en-US&page=${this.page}`:`${o.BASE_URL}/trending/all/week?api_key=${o.API_KEY}&language=en-US&page=${this.page}`;try{const n=await fetch(e,t);return await n.json()}catch(t){throw console.error(t),t}}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}get total(){return this.totalAmount}set total(t){this.totalAmount=t}resetTotal(){this.totalAmount=0}}let s=!1;const c=()=>{const t=document.querySelector(".pagination-wrapper");if(s)return;const e=document.createElement("div");e.innerHTML='<p class="error-information">OOPS...</p>\n  <p class="error-information">We are very sorry!</p>\n  <p class="error-information">\n    We don’t have any results matching your search.\n  </p>',r.errorContainer.appendChild(e),r.errorContainer.classList.remove("is-hidden"),t.classList.add("is-hidden"),s=!0};var l;l=new URL(i("kyEFX").resolve("bfHyM"),import.meta.url).toString();var d=i("7DS8N"),u=i("5bV6Z"),p=i("a3ItO");async function g(e){const n=JSON.parse(localStorage.getItem("genres")),a=e.results.map((async e=>{const a=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:`${t(l)}`,i=(0,u.validateGenres)(e.genre_ids,n),r=await i;return`<li class="card-item" data-id="${e.id}">\n        <img class="film-poster" src="${a}" alt="${e.original_title||e.name}" />\n        <div class="overlay">\n          <div class="film-info">\n            <p class="film-title">${e.original_title||e.name}</p>\n            <div class="film-details">\n              <span class="film-description">${r} | ${new Date(e.release_date).getFullYear()||new Date(e.first_air_date).getFullYear()}</span>\n    <div class="stars-container">${(0,d.default)({voteAverage:e.vote_average,isHero:!1})}</div>            \n      \x3c!-- <span class="film-rating">${e.vote_average.toFixed(1)}</span> --\x3e\n            </div>\n          </div>\n        </div>\n      </li>`})),i=await Promise.all(a);r.catalogList.innerHTML=i.join("");document.querySelector(".listListener").addEventListener("click",(t=>{const e=t.target.closest(".card-item").getAttribute("data-id");(0,p.openModalAboutFilm)(e)}))}const m=new o,h=document.querySelector(".pagination-wrapper");let f=1,v=0;function y(t){m.getMovies(t).then(b).catch(_)}function b(t){var e;v=t.total_pages,g(t),e=t.total_pages,f===e?r.nextPageBtn.setAttribute("disabled","disabled"):r.nextPageBtn.removeAttribute("disabled"),E(v,f)}function _(t){r.catalogList.innerHTML="",c(),console.error("An error occurred:",t)}function L(){r.catalogList.innerHTML="",c()}function E(t,e){let n="",a=e+1,i=e-1;t>5&&e>2&&(n+='<li class="pagination-item">\n        <button type="button" class="pagination-button">1</button>\n      </li>',e>3&&(n+='<li class="pagination-item">\n          <button type="button" class="pagination-dots">...</button>\n        </li>')),(e==t||e==t-1)&&(i-=1),(1==e||2==e)&&(a+=1);for(let r=i;r<=a;r++)r>t||r<1||(active=e==r?"is-active":"",n+=`<li class="pagination-item">\n      <button type="button" class="pagination-button ${active}">${r}</button>\n    </li>`);return t>5&&e<t-1&&(e<t-2&&(n+='<li class="pagination-item">\n        <button type="button" class="pagination-dots">...</button>\n      </li>'),n+=`<li class="pagination-item">\n      <button type="button" class="pagination-button">${t}</button>\n    </li>`),r.paginationContainer.innerHTML=n,n}r.searchForm.addEventListener("submit",(function(t){t.preventDefault(),r.paginationContainer.classList.remove("is-hidden"),r.errorContainer.classList.add("is-hidden");const e=r.searchInput.value.trim();m.query=e,m.resetPage(),m.resetTotal(),""===e?L():async function(){try{const t=await m.getMovies();0===t.total_results?L():(h.classList.remove("is-hidden"),v=t.total_pages,m.total=t.total_results,g(t),f=t.page,E(v,f)),r.searchInput.value=""}catch(t){_(t)}}()})),r.cancelBtn.addEventListener("click",(function(){r.cancelBtn.classList.add("is-hidden"),r.searchInput.value=""})),r.searchInput.addEventListener("input",(function(t){t.currentTarget.value.trim()?r.cancelBtn.classList.remove("is-hidden"):r.cancelBtn.classList.add("is-hidden")})),r.nextPageBtn.addEventListener("click",(function(){f+=1,m.incrementPage(),y(f)})),r.prevPageBtn.addEventListener("click",(function(){f>1&&(f-=1,m.decrementPage(),y(f))})),r.paginationContainer.addEventListener("click",(function(t){if("BUTTON"===t.target.tagName){const e=parseInt(t.target.textContent);isNaN(e)||e===f||(f=e,m.page=e,y(f))}})),r.errorContainer.classList.add("is-hidden"),r.cancelBtn.classList.add("is-hidden"),y(f),i("4E5Dt"),i("haKcb");
//# sourceMappingURL=catalog.d0cc5347.js.map
