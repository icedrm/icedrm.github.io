window.addEventListener("load",(()=>{const{algolia:e}=GLOBAL_CONFIG,{appId:t,apiKey:a,indexName:i,hitsPerPage:n=5,languages:s}=e;if(!t||!a||!i)return;const o=document.getElementById("search-mask"),l=document.querySelector("#algolia-search .search-dialog"),r=e=>{const t=e?"animateIn":"animateOut",a=e?"to_show 0.5s":"to_hide 0.5s",i=e?"titleScale 0.5s":"search_close .5s";btf[t](o,a),btf[t](l,i)},c=()=>{window.innerWidth<768&&l.style.setProperty("--search-height",window.innerHeight+"px")},d=()=>{btf.overflowPaddingR.add(),r(!0),setTimeout((()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()}),100);const e=t=>{"Escape"===t.code&&(h(),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e),c(),window.addEventListener("resize",c)},h=()=>{btf.overflowPaddingR.remove(),r(!1),window.removeEventListener("resize",c)},g=()=>{btf.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",d)},u=e=>{if(!e)return"";const t=e.indexOf("<mark>");let a=t-30,i=t+120,n="",s="";return a<=0?(a=0,i=140):n="...",i>e.length?i=e.length:s="...",`${n}${e.substring(a,i)}${s}`},p=[document.getElementById("algolia-hits"),document.getElementById("algolia-pagination"),document.querySelector("#algolia-info .algolia-stats")],m="function"==typeof algoliasearch?algoliasearch:window["algoliasearch/lite"].liteClient,w=instantsearch({indexName:i,searchClient:m(t,a),searchFunction(e){p.forEach((t=>{t.style.display=e.state.query?"":"none"})),e.state.query&&e.search()}}),f=[instantsearch.widgets.configure({hitsPerPage:n}),instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:s.input_placeholder,showLoadingIndicator:!0}),instantsearch.widgets.hits({container:"#algolia-hits",templates:{item(e){const t=e.permalink||GLOBAL_CONFIG.root+e.path,a=e._highlightResult,i=a.contentStripTruncate?u(a.contentStripTruncate.value):a.contentStrip?u(a.contentStrip.value):a.content?u(a.content.value):"";return`\n            <a href="${t}" class="algolia-hit-item-link">\n              <span class="algolia-hits-item-title">${a.title.value||"no-title"}</span>\n              ${i?`<div class="algolia-hit-item-content">${i}</div>`:""}\n            </a>`},empty:e=>`<div id="algolia-hits-empty">${s.hits_empty.replace(/\$\{query}/,e.query)}</div>`}}),instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:e=>"<hr>"+s.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}}),instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy"}),instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}})];w.addWidgets(f),w.start(),g(),o.addEventListener("click",h),document.querySelector("#algolia-search .search-close-button").addEventListener("click",h),window.addEventListener("pjax:complete",(()=>{btf.isHidden(o)||h(),g()})),window.pjax&&w.on("render",(()=>{window.pjax.refresh(document.getElementById("algolia-hits"))}))}));