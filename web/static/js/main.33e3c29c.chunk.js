(this["webpackJsonp@crypto-dev-amigos/client"]=this["webpackJsonp@crypto-dev-amigos/client"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(13),s=n.n(a),i=(n(20),n(21),n(22),n(4)),l=n.n(i),o=n(7),d=n(5),j=n(3),u=n(1),b=function(e){var t=e.ratio,n=e.text,c=e.textRight;return Object(u.jsxs)("div",{className:"bar-graph",style:{position:"relative"},children:[Object(u.jsx)("div",{className:"bar-graph-background",style:{position:"absolute",zIndex:0,width:"".concat((100*t).toFixed(0),"%"),height:"100%"}}),Object(u.jsxs)("div",{style:{position:"relative",zIndex:10,display:"flex",flexDirection:"row"},children:[Object(u.jsx)("div",{className:"bar-graph-text-right",style:{opacity:0},children:c}),Object(u.jsx)("div",{className:"bar-graph-text",style:{flex:1},children:null!==n&&void 0!==n?n:"".concat((100*t).toFixed(2),"%")}),Object(u.jsx)("div",{className:"bar-graph-text-right",style:{},children:c})]})]})},f=n(14),h=n(10),x=n(15),O=n(11),p=function(e){switch(e.icon){case"twitter":return Object(u.jsx)(f.a,{});case"discord":return Object(u.jsx)(h.a,{});case"github":return Object(u.jsx)(h.c,{});case"link":return Object(u.jsx)(x.a,{});case"eth":return Object(u.jsx)(h.b,{});case"collapsed":return Object(u.jsx)(O.b,{});case"expanded":return Object(u.jsx)(O.a,{});case"loading":return Object(u.jsx)(O.c,{})}return Object(u.jsx)(u.Fragment,{})},v=function(){return Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)(p,{icon:"loading"})})},m=function(e){var t=e.url,n=e.icon,c=e.iconUrl;return Object(u.jsx)(u.Fragment,{children:!!t&&Object(u.jsxs)("a",{href:t,style:{display:"inline-block",width:32,height:32,fontSize:20},children:[!!n&&Object(u.jsx)(p,{icon:n}),!!c&&Object(u.jsx)("img",{style:{width:20,height:20,verticalAlign:"middle"},src:c,alt:"link"})]})})},y=function(e){return"/data/".concat(e,"/project.json")},g=function(e,t){return"/data/".concat(e,"/").concat(t,".json")},k=function(e){return e.replace("ipfs://","https://gateway.pinata.cloud/ipfs/")};function N(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout(e,t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Date.now();var F=[],I=0,S=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I++,t=I,e.next=4,N(100);case 4:n=0;case 5:if(!(n<F.length)){e.next=15;break}if(!(c=F[n])||!c()){e.next=10;break}return e.next=10,N(25);case 10:if(n++,t===I){e.next=13;break}return e.abrupt("return");case 13:e.next=5;break;case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.addEventListener("scroll",S),window.addEventListener("load",(function(){new IntersectionObserver(S).observe(document.getElementsByTagName("body")[0])}));var _=0,R=function(e){var t=e.children,n=e.onLoad,r=Object(c.useRef)(null),a=Object(c.useState)(!1),s=Object(j.a)(a,2),i=s[0],l=s[1],o=Object(c.useRef)(!1);Object(c.useRef)(_++);return Object(c.useEffect)((function(){if(r.current){var e=r.current;o.current=!1;var t=F.length;F.push((function(){if(!r.current)return!1;if(o.current)return!1;var t=e.getBoundingClientRect(),a=window.scrollY+window.innerHeight;return t.top<a&&(o.current=!0,c(),l(!0),S(),null===n||void 0===n||n(),!0)}));var c=function(){F[t]=null};return S(),function(){o.current=!0,c()}}}),[t,n]),Object(u.jsxs)(u.Fragment,{children:[!i&&Object(u.jsx)("div",{ref:r,style:{minWidth:100,minHeight:100}}),i&&t]})},C=function(e){var t=e.src,n=e.alt,r=e.style,a=Object(c.useState)(!0),s=Object(j.a)(a,2),i=s[0],l=s[1],o=Object(c.useState)(!1),d=Object(j.a)(o,2),b=d[0],f=d[1],h=Object(c.useRef)(1),x=Object(c.useRef)(0),O=function(){clearTimeout(x.current),h.current>5||(x.current=setTimeout((function(){h.current++,f(!1)}),1e3*Math.pow(2,h.current)))};return Object(c.useEffect)((function(){return function(){clearTimeout(x.current)}}),[]),t?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(R,{children:[i&&Object(u.jsx)(v,{}),!b&&Object(u.jsx)("img",{alt:n,style:r,src:k(t),onLoadStart:O,onLoad:function(){clearTimeout(x.current),l(!1)},onError:function(){clearTimeout(x.current),h.current>5||(f(!0),O())}},h.current)]})}):Object(u.jsx)(u.Fragment,{})},T=function(e){var t=e.price;if(!t)return Object(u.jsx)("span",{children:"-?-"});var n=t.price<.1?"#FF0000":t.price<.25?"#FF3300":t.price<.5?"#FF7700":t.price<1?"#FFBB00":"unset";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{style:{display:"inline-block",minWidth:100,color:n},children:[Object(u.jsx)("span",{children:t.price.toFixed(3)}),t.symbol&&("eth"===t.symbol.toLowerCase()?Object(u.jsx)("span",{className:"black-or-white",children:Object(u.jsx)(p,{icon:"eth"})}):"weth"===t.symbol.toLowerCase()?Object(u.jsx)("span",{style:{color:"#ca477b"},children:Object(u.jsx)(p,{icon:"eth"})}):Object(u.jsx)("span",{children:t.symbol}))]}),Object(u.jsx)("div",{style:{display:"inline-block",minWidth:100,color:n},children:Object(u.jsx)("span",{children:t.priceUsd?" $".concat(t.priceUsd.toFixed(2)):""})})]})},A=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"nft-card",children:[Object(u.jsx)(v,{}),Object(u.jsx)("div",{style:{height:300}})]})})},L=function(e){var t=e.nft,n=e.onSelect;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"nft-card",children:[Object(u.jsx)("div",{className:"nft-card-image",children:Object(u.jsx)(C,{alt:"nft",src:t.nft.image})}),Object(u.jsxs)("div",{className:"nft-card-header",children:[Object(u.jsxs)("div",{className:"nft-card-header-item",children:[Object(u.jsx)("div",{className:"nft-card-header-item-label",children:"Rarity Score:"}),Object(u.jsx)("div",{className:"nft-card-header-item-value",children:t.rarityScore.toFixed(2)})]}),Object(u.jsxs)("div",{className:"nft-card-header-item",children:[Object(u.jsx)("div",{className:"nft-card-header-item-label",children:"Rank:"}),Object(u.jsx)("div",{className:"nft-card-header-item-value",children:t.rank})]}),Object(u.jsxs)("div",{className:"nft-card-header-item-2",children:[Object(u.jsx)("div",{className:"nft-card-header-item-label",children:"Last Sell:"}),Object(u.jsx)("div",{className:"nft-card-header-item-value",children:Object(u.jsx)(T,{price:t.lastSell})})]}),Object(u.jsxs)("div",{className:"nft-card-header-item-2",children:[Object(u.jsx)("div",{className:"nft-card-header-item-label",children:"Listing:"}),Object(u.jsx)("div",{className:"nft-card-header-item-value",children:Object(u.jsx)(T,{price:t.listing})})]}),Object(u.jsxs)("div",{className:"nft-card-header-token-id",children:["TokenId: ",t.nft.id]}),Object(u.jsx)("div",{className:"nft-card-header-title",children:t.nft.name})]}),Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(u.jsx)(m,{url:t.nft.external_url,icon:"link"}),Object(u.jsx)(m,{url:t.openSeaLink,iconUrl:"/media/opensea.png"})]}),Object(u.jsx)("div",{className:"nft-card-content",children:Object(u.jsxs)("div",{className:"nft-card-stats",children:[Object(u.jsxs)("div",{className:"nft-card-stats-row nft-card-stats-title",style:{fontSize:"0.8em"},children:[Object(u.jsx)("div",{className:"nft-card-stats-cell",style:{textAlign:"left"},children:"Trait"}),Object(u.jsx)("div",{className:"nft-card-stats-cell",style:{textAlign:"right"},children:"Rarity Score"})]}),Object(u.jsxs)("div",{className:"nft-card-stats-row nft-card-stats-title",style:{fontSize:"0.8em"},children:[Object(u.jsx)("div",{className:"nft-card-stats-cell",style:{textAlign:"right"},children:""}),Object(u.jsx)("div",{className:"nft-card-stats-cell",children:"Commonality"})]}),t.attributeRarities.map((function(e){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsxs)("div",{className:"nft-card-stats-row",children:[Object(u.jsx)("div",{className:"nft-card-stats-cell nft-card-stats-title",style:{textAlign:"left"},children:e.trait_type}),Object(u.jsx)("div",{className:"nft-card-stats-cell numeric-value",style:{textAlign:"right"},children:"".concat(e.ratioScore.toFixed(2))})]}),Object(u.jsxs)("div",{className:"nft-card-stats-row",children:[Object(u.jsx)("div",{className:"nft-card-stats-cell ".concat(n?"link":""),style:{textAlign:"right"},children:Object(u.jsx)("span",{onClick:function(t){n&&(t.preventDefault(),t.stopPropagation(),n({traitType:e.trait_type,value:e.value}))},style:"[Missing]"!==e.value?{fontWeight:"bold"}:{},children:e.value})}),Object(u.jsx)("div",{className:"nft-card-stats-cell numeric-value",children:Object(u.jsx)(b,{ratio:e.ratio})})]})]},e.trait_type)}))]})})]})})},E=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.contractAddress,c=t.tokenId,r="https://api.opensea.io/api/v1/asset/".concat(n,"/").concat(c,"/"),e.next=4,fetch(r);case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":root",c=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))},r=null===(t=null===e||void 0===e?void 0:e.isDark)||void 0===t||t,a=null!==e&&void 0!==e?e:{},s="\n".concat(n," {\n    ").concat(Object.keys(a).filter((function(e){return a[e]&&"string"===typeof a[e]})).map((function(e){return"\n    --".concat(c(e),": ").concat(a[e],";")})).join(""),"\n\n    --black-or-white: ").concat(r?"#FFFFFF":"#000000","\n}\n    "),i="__themeStyleOverride"+n,l=document.getElementById(i);null===l||void 0===l||l.remove();var o=document.createElement("style");o.innerHTML=s,o.id=i,document.head.appendChild(o),M.changeTheme(r)},K=[],M={subscribe:function(e){K.push(e)},changeTheme:function(e){K.forEach((function(t){return t(e)}))}},D=function(e){var t=e.projectKey,n=e.tokenId,r=e.contractAddress,a=e.onSelect,s=e.hideIfNoListing,i=Object(c.useState)(null),b=Object(j.a)(i,2),f=b[0],h=b[1],x=Object(c.useState)(""),O=Object(j.a)(x,2),p=O[0],v=O[1];return Object(c.useEffect)((function(){Object(d.a)(l.a.mark((function e(){var c,a,s,i,d,j,u,b,f,x,O,p,m,k,N,w,F,I,S,_,R,C,T,A,L,K;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=null,e.prev=1,k=g(t,n),e.next=5,fetch(k);case 5:return N=e.sent,e.next=8,N.json();case 8:m=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(1),v("Not Found"),e.abrupt("return");case 15:if(m.attributeRarities.sort((function(e,t){return e.trait_type.localeCompare(t.trait_type)})),h(m),r){e.next=29;break}return w=y(t),e.next=21,fetch(w);case 21:return F=e.sent,e.next=24,F.json();case 24:if(I=e.sent,r=I.project.contract,B(I.project.theme),r){e.next=29;break}return e.abrupt("return");case 29:return e.next=31,E({contractAddress:r,tokenId:n});case 31:S=e.sent,_=parseFloat(null!==(c=null===(a=S.last_sale)||void 0===a?void 0:a.total_price)&&void 0!==c?c:"0")/Math.pow(10,null!==(s=null===(i=S.last_sale)||void 0===i?void 0:i.payment_token.decimals)&&void 0!==s?s:0),R=null===(d=S.last_sale)||void 0===d?void 0:d.payment_token.symbol,C=_*parseFloat(null!==(j=null===(u=S.last_sale)||void 0===u?void 0:u.payment_token.usd_price)&&void 0!==j?j:"1"),T=null===(b=S.orders)||void 0===b||null===(f=b.filter((function(e){return 1===e.side})))||void 0===f?void 0:f[0],A=parseFloat(null!==(x=null===T||void 0===T?void 0:T.current_price)&&void 0!==x?x:"0")/Math.pow(10,null!==(O=null===T||void 0===T?void 0:T.payment_token_contract.decimals)&&void 0!==O?O:0),L=null===T||void 0===T?void 0:T.payment_token_contract.symbol,K=A*parseFloat(null!==(p=null===T||void 0===T?void 0:T.payment_token_contract.usd_price)&&void 0!==p?p:"1"),h(Object(o.a)(Object(o.a)({},m),{},{lastSell:S.last_sale?{price:_,symbol:R,priceUsd:C}:void 0,listing:T?{price:A,symbol:L,priceUsd:K}:void 0,openSeaLink:S.permalink}));case 40:case"end":return e.stop()}}),e,null,[[1,11]])})))()}),[t,n]),s&&!(null===f||void 0===f?void 0:f.listing)?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(u.Fragment,{children:[p&&Object(u.jsx)("div",{children:p}),!f&&!p&&Object(u.jsx)(A,{}),f&&Object(u.jsx)(L,{nft:f,onSelect:a})]})},U=n(6),z=function(e){var t=e.items,n=e.getItemKey,a=e.ItemComponent,s=Object(c.useState)(12),i=Object(j.a)(s,2),l=i[0],o=i[1],d=Object(c.useRef)(12);d.current=l;var b=t.slice(0,l);return Object(u.jsx)(u.Fragment,{children:b.map((function(e,t){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsx)(R,{onLoad:function(){return function(e){d.current===l&&(e+3<l||o((function(e){return e+12})))}(t)},children:Object(u.jsx)(a,{item:e})})},n(e))}))})},P="[All]",H=function(e){var t=e.projectKey,n=Object(c.useState)(null),r=Object(j.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){Object(d.a)(l.a.mark((function e(){var n,c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,a=W(r),s(a);case 9:case"end":return e.stop()}}),e)})))()}),[t]),Object(u.jsxs)(u.Fragment,{children:[!a&&Object(u.jsx)(v,{}),a&&Object(u.jsx)(J,{projectKey:t,projectRarity:a})]})},W=function(e){var t=function(e,t){var n=Object(U.a)(e).sort((function(e,t){return e.trait_value.localeCompare(t.trait_value)})).sort((function(e,t){return e.trait_type.localeCompare(t.trait_type)}));return"rarity"===t?n.sort((function(e,t){return e.tokenIds.length-t.tokenIds.length})):n}(e.tokenLookups,"default"),n=Object(U.a)(new Set(t.map((function(e){return e.trait_type}))));n.forEach((function(n){var c=t.filter((function(e){return e.trait_type===n})),r=new Set(c.flatMap((function(e){return e.tokenIds}))),a=e.tokenIdsByRank.filter((function(e){return!r.has(e)}));a.length&&t.unshift({trait_type:n,trait_value:"[Missing]",tokenIds:a}),t.unshift({trait_type:n,trait_value:P,tokenIds:e.tokenIdsByRank})}));var c=t.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{ratio:t.tokenIds.length/e.tokenIdsByRank.length})}));return c.sort(),{project:e.project,contractAddress:e.project.contract,tokenIdsByRank:e.tokenIdsByRank,tokenLookups:c,traitTypes:n}},J=function(e){var t=e.projectKey,n=e.projectRarity,r=Object(c.useState)(""),a=Object(j.a)(r,2),s=a[0],i=(a[1],Object(c.useState)(new Set(n.tokenIdsByRank))),l=Object(j.a)(i,2),o=l[0],d=l[1],b=Object(c.useRef)(null),f=Object(c.useRef)({}),h=Object(c.useState)("rarity"),x=Object(j.a)(h,2),O=x[0],p=(x[1],Object(c.useState)(!1)),v=Object(j.a)(p,2),m=v[0],y=(v[1],function(e){var t=f.current;t[e.traitType]={value:e.value,tokenIdsIfAll:new Set([])},Object.keys(t).forEach((function(e){var c=new Set(n.tokenIdsByRank);Object.entries(t).forEach((function(t){var r=Object(j.a)(t,2),a=r[0],s=r[1],i=n.tokenLookups.find((function(e){return e.trait_type===a&&e.trait_value===s.value}));i&&a!==e&&(c=new Set(i.tokenIds.filter((function(e){return c.has(e)}))))})),t[e].tokenIdsIfAll=c}));var c=new Set(n.tokenIdsByRank);Object.entries(t).forEach((function(e){var t=Object(j.a)(e,2),r=t[0],a=t[1],s=n.tokenLookups.find((function(e){return e.trait_type===r&&e.trait_value===a.value}));s&&(c=new Set(s.tokenIds.filter((function(e){return c.has(e)}))))})),d(c)}),g=Object(U.a)(o);"tokenId"===O&&g.sort((function(e,t){return e-t}));var k=[s].concat(Object(U.a)(g)).filter((function(e){return e}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"panel-container",children:[Object(u.jsx)("div",{className:"panel-trait-types",children:Object(u.jsx)(V,{projectRarity:n,tokenIds:o,selected:f.current,onSelect:y,onReset:function(){f.current={},d(new Set(n.tokenIdsByRank))}})}),Object(u.jsxs)("div",{className:"panel-nft-list",children:[Object(u.jsx)("div",{className:"child-project-info",children:Object(u.jsx)(Q,{project:n.project})}),Object(u.jsx)("h3",{style:{marginTop:32,marginBottom:16},children:"NFTs"}),Object(u.jsx)("div",{className:"nft-list",ref:b,children:n&&Object(u.jsx)(z,{items:k,getItemKey:function(e){return"".concat(e)},ItemComponent:function(e){var c=e.item;return Object(u.jsx)(D,{projectKey:t,tokenId:"".concat(c),contractAddress:n.contractAddress,onSelect:y,hideIfNoListing:m})}},s+O)})]})]})})},Q=function(e){var t,n,c,r,a,s=e.project;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"project-info-image",children:Object(u.jsx)(C,{alt:"project",src:s.image,style:{objectFit:"contain"}})}),Object(u.jsxs)("div",{className:"project-info",children:[Object(u.jsx)("div",{className:"project-info-title",children:s.name}),Object(u.jsx)("div",{className:"project-info-description",children:s.description}),!!s.external_link&&Object(u.jsx)("div",{className:"project-info-link",children:Object(u.jsx)("a",{href:k(s.external_link),children:s.external_link})}),Object(u.jsxs)("div",{className:"link",children:[Object(u.jsx)(m,{url:s.external_link,icon:"link"}),Object(u.jsx)(m,{url:null===(t=s.links)||void 0===t?void 0:t.opensea,iconUrl:"/media/opensea.png"}),Object(u.jsx)(m,{url:null===(n=s.links)||void 0===n?void 0:n.openSea,iconUrl:"/media/opensea.png"}),Object(u.jsx)(m,{url:null===(c=s.links)||void 0===c?void 0:c.twitter,icon:"twitter"}),Object(u.jsx)(m,{url:null===(r=s.links)||void 0===r?void 0:r.discord,icon:"discord"}),Object.entries(null!==(a=s.links)&&void 0!==a?a:{}).filter((function(e){var t=Object(j.a)(e,1)[0];return!"opensea openSea discord twitter".includes(t)})).map((function(e){var t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)(m,{url:c,icon:"link"},n)}))]})]})]})},V=function(e){var t=e.projectRarity,n=e.tokenIds,a=e.selected,s=e.onSelect,i=e.onReset,l=Object(c.useState)(!0),o=Object(j.a)(l,2),d=o[0],b=o[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"nft-trait-types-header",children:[Object(u.jsx)("div",{className:"nft-trait-types-header-expandable link",onClick:function(){return b((function(e){return!e}))},children:Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Trait Filters ",d?Object(u.jsx)(p,{icon:"expanded"}):Object(u.jsx)(p,{icon:"collapsed"})]})}),Object(u.jsx)("div",{className:"nft-trait-types-header-simple",children:Object(u.jsx)("div",{children:"Trait Filters"})})]}),Object(u.jsx)("div",{className:"nft-trait-type-header link",onClick:i,children:Object(u.jsxs)("div",{style:{display:"flex"},children:[Object.values(a).some((function(e){return e.value!==P}))&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:"Reset"}),"\u274c"]}),Object(u.jsx)("span",{children:"\xa0"})]})}),Object(u.jsx)("div",{className:"nft-trait-types",children:t.traitTypes.map((function(e){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsx)(Y,{traitType:e,projectRarity:t,isExpandedAll:d,tokenIds:n,selected:a,onSelect:s})},e)}))})]})},Y=function(e){var t,n=e.traitType,a=e.projectRarity,s=e.isExpandedAll,i=e.tokenIds,l=e.selected,o=e.onSelect,d=Object(c.useState)(s),f=Object(j.a)(d,2),h=f[0],x=f[1];Object(c.useEffect)((function(){x(s)}),[s]);var O=a.tokenLookups.filter((function(e){return e.trait_type===n})),v=null!==(t=l[n])&&void 0!==t?t:{value:P,tokenIdsIfAll:i},m=v.value===P;console.log("TraitValuesList",{isAllSelected:m,selectedTraitItem:v});var y=O.map((function(e){return{x:e,isSelected:v.value===e.trait_value,count:e.tokenIds.filter((function(e){var t;return(null!==(t=v.tokenIdsIfAll)&&void 0!==t?t:i).has(e)})).length}}));return Object(u.jsxs)("div",{className:"nft-trait-type",children:[Object(u.jsxs)("div",{className:"nft-trait-type-header link",onClick:function(){x((function(e){return!e}))},children:[Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[!m&&Object(u.jsx)("div",{style:{position:"absolute",right:4},onClick:function(e){e.preventDefault(),e.stopPropagation(),o({traitType:n,value:P})},children:"\u274c"}),n,h?Object(u.jsx)(p,{icon:"expanded"}):Object(u.jsx)(p,{icon:"collapsed"})]}),!h&&Object(u.jsx)("div",{className:"nft-trait-value",children:v.value})]}),h&&Object(u.jsx)("div",{className:"nft-trait-values",children:y.filter((function(e){var t=e.count,n=e.isSelected;return t||n})).map((function(e){var t=e.x,n=e.count,c=e.isSelected;return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsx)("div",{className:"nft-trait-value link ".concat(c?"nft-trait-value-selected":""),onClick:function(){return o({traitType:t.trait_type,value:t.trait_value})},children:Object(u.jsx)(b,{ratio:t.ratio,text:t.trait_value,textRight:"".concat(n)})})},"".concat(t.trait_type,":").concat(t.trait_value))}))})]})},Z=function(e){var t=e.children,n=Object(c.useState)(!0),r=Object(j.a)(n,2),a=(r[0],r[1]);return Object(c.useEffect)((function(){M.subscribe(a)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-3 col-6",children:Object(u.jsx)("a",{style:{display:"flex"},href:"/",children:Object(u.jsx)("img",{style:{height:60},src:"/media/logo.png",alt:"site-logo"})})}),Object(u.jsxs)("div",{className:"col-md-9 col-6 float-end",children:[Object(u.jsx)("a",{className:"icon",href:"/",children:Object(u.jsx)(p,{icon:"twitter"})}),Object(u.jsx)("a",{className:"icon",href:"/",children:Object(u.jsx)(p,{icon:"discord"})}),Object(u.jsx)("a",{className:"menu",href:"/",children:"FAQ"})]})]})})}),t]})},$=function(e){var t=Object(c.useState)(null),n=Object(j.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/data/projects.json",e.next=3,fetch("/data/projects.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(u.jsxs)(u.Fragment,{children:[!r&&Object(u.jsx)(v,{}),r&&Object(u.jsx)(q,{projects:r})]})},q=function(e){var t=e.projects;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"row",children:t&&Object(u.jsx)(z,{items:t.projects,getItemKey:function(e){return"".concat(e.projectKey)},ItemComponent:function(e){var t=e.item;return Object(u.jsx)(G,{projectKey:t.projectKey,project:t.projectMetadata})}})})})},G=function(e){var t=e.projectKey,n=e.project;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"nft-card col-md-3",style:{position:"relative"},onClick:function(){return window.location.href="".concat(t)},children:Object(u.jsx)(Q,{project:n})})})},X=function(){return Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",minHeight:"calc(100vh - 100px)"},children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"heading",children:"Newest Collections Added"}),Object(u.jsx)($,{})]}),Object(u.jsx)(ee,{})]})},ee=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-3 col-12",children:Object(u.jsx)("a",{style:{display:"flex"},href:"/",children:Object(u.jsx)("img",{style:{height:60},src:"/media/logo.png",alt:"site-logo"})})}),Object(u.jsx)("div",{className:"col-md-6 col-12 float-center",children:"Copyright reserved by CheckMyRarity"}),Object(u.jsxs)("div",{className:"col-md-3 col-12 float-end",children:[Object(u.jsx)("a",{className:"icon",href:"/",children:Object(u.jsx)(p,{icon:"twitter"})}),Object(u.jsx)("a",{className:"icon",href:"/",children:Object(u.jsx)(p,{icon:"discord"})})]})]})})})})};var te=function(e){var t,n,c=window.location.pathname.split("/"),r=null!==(t=c[1])&&void 0!==t?t:void 0,a=null!==(n=c[2])&&void 0!==n?n:void 0;return console.log("route",{route:c,projectKey:r,tokenId:a}),r&&a?Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"nft-container-single",children:Object(u.jsx)(D,{projectKey:r,tokenId:a})})}):r?Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(H,{projectKey:r})}):Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(X,{})})},ne=function(){return Object(u.jsx)(Z,{children:Object(u.jsx)(te,{})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(ne,{})}),document.getElementById("root")),ce()}},[[25,1,2]]]);
//# sourceMappingURL=main.33e3c29c.chunk.js.map