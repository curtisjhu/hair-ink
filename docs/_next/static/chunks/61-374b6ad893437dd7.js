(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(6495).Z,n=o(2648).Z,l=o(1598).Z,a=o(7273).Z,i=l(o(7294)),u=n(o(3121)),s=o(2675),c=o(139),f=o(8730);o(7238);var d=n(o(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,o,n,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode){if(null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,a=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let v=i.forwardRef((e,t)=>{var{imgAttributes:o,heightInt:n,widthInt:l,qualityInt:u,className:s,imgStyle:c,blurStyle:f,isLazy:d,fill:p,placeholder:g,loading:h,srcString:v,config:b,unoptimized:y,loader:w,onLoadRef:_,onLoadingCompleteRef:E,onLoad:C,onError:j}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return h=d?"lazy":h,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},S,o,{width:l,height:n,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:h,style:r({},c,f),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&m(e,v,_,E,y))},[v,_,E,j,y,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,_,E,y)},onError:e=>{let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===g&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),j&&j(e)}})))}),b=i.forwardRef((e,t)=>{let o,n;var l,{src:m,sizes:b,unoptimized:y=!1,priority:w=!1,loading:_,className:E,quality:C,width:j,height:S,fill:k,style:x,onLoad:M,onLoadingComplete:O,placeholder:P="empty",blurDataURL:R,layout:z,objectFit:I,objectPosition:L,lazyBoundary:T,lazyRoot:N}=e,A=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=i.useContext(f.ImageConfigContext),B=i.useMemo(()=>{let e=p||D||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:o})},[D]),U=A,W=U.loader||d.default;if(delete U.loader,"__next_img_default"in W){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=W;W=e=>{let{config:t}=e,o=a(e,["config"]);return Z(o)}}if(z){"fill"===z&&(k=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];q&&(x=r({},x,q));let F={responsive:"100vw",fill:"100vw"}[z];F&&!b&&(b=F)}let G="",H=h(j),K=h(S);if("object"==typeof(l=m)&&(g(l)||void 0!==l.src)){let V=g(m)?m.default:m;if(!V.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(!V.height||!V.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)));if(o=V.blurWidth,n=V.blurHeight,R=R||V.blurDataURL,G=V.src,!k){if(H||K){if(H&&!K){let J=H/V.width;K=Math.round(V.height*J)}else if(!H&&K){let $=K/V.height;H=Math.round(V.width*$)}}else H=V.width,K=V.height}}let Q=!w&&("lazy"===_||void 0===_);((m="string"==typeof m?m:G).startsWith("data:")||m.startsWith("blob:"))&&(y=!0,Q=!1),B.unoptimized&&(y=!0);let X=h(C),Y=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},{color:"transparent"},x),ee="blur"===P&&R?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:H,heightInt:K,blurWidth:o,blurHeight:n,blurDataURL:R}),'")')}:{},et=function(e){let{config:t,src:o,unoptimized:r,width:n,quality:l,sizes:a,loader:i}=e;if(r)return{src:o,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,o){let{deviceSizes:r,allSizes:n}=e;if(o){let l=/(^|\s)(1?\d?\d)vw/g,a=[];for(let i;i=l.exec(o);i)a.push(parseInt(i[2]));if(a.length){let u=.01*Math.min(...a);return{widths:n.filter(e=>e>=r[0]*u),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,r)=>"".concat(i({config:t,src:o,quality:l,width:e})," ").concat("w"===s?e:r+1).concat(s)).join(", "),src:i({config:t,src:o,quality:l,width:u[c]})}}({config:B,src:m,unoptimized:y,width:H,quality:X,sizes:b,loader:W}),eo=m,er={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:U.crossOrigin},en=i.useRef(M);i.useEffect(()=>{en.current=M},[M]);let el=i.useRef(O);i.useEffect(()=>{el.current=O},[O]);let ea=r({isLazy:Q,imgAttributes:et,heightInt:K,widthInt:H,qualityInt:X,className:E,imgStyle:Y,blurStyle:ee,loading:_,config:B,fill:k,unoptimized:y,placeholder:P,loader:W,srcString:eo,onLoadRef:en,onLoadingCompleteRef:el},U);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},ea,{ref:t})),w?i.default.createElement(u.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},er))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,n=o(7273).Z,l=r(o(7294)),a=o(1003),i=o(7795),u=o(4465),s=o(2692),c=o(8245),f=o(9246),d=o(227),p=o(3468);let g=new Set;function h(e,t,o,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let n=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+n;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,o,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:i.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let o,r;let{href:i,as:g,children:v,prefetch:b,passHref:y,replace:w,shallow:_,scroll:E,locale:C,onClick:j,onMouseEnter:S,onTouchStart:k,legacyBehavior:x=!1}=e,M=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,x&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let O=!1!==b,P=l.default.useContext(s.RouterContext),R=l.default.useContext(c.AppRouterContext),z=null!=P?P:R,I=!P,{href:L,as:T}=l.default.useMemo(()=>{if(!P){let e=m(i);return{href:e,as:g?m(g):e}}let[t,o]=a.resolveHref(P,i,!0);return{href:t,as:g?a.resolveHref(P,g):o||t}},[P,i,g]),N=l.default.useRef(L),A=l.default.useRef(T);x&&(r=l.default.Children.only(o));let D=x?r&&"object"==typeof r&&r.ref:t,[B,U,W]=f.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(A.current!==T||N.current!==L)&&(W(),A.current=T,N.current=L),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,L,W,B]);l.default.useEffect(()=>{z&&U&&O&&h(z,L,T,{locale:C})},[T,L,U,C,O,null==P?void 0:P.locale,z]);let q={ref:Z,onClick(e){x||"function"!=typeof j||j(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,o,r,n,i,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(o)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:i,locale:s,scroll:u}):t[n?"replace":"push"](r||o,{forceOptimisticNavigation:!f})};c?l.default.startTransition(g):g()}(e,z,L,T,w,_,E,C,I,O)},onMouseEnter(e){x||"function"!=typeof S||S(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),z&&(O||!I)&&h(z,L,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){x||"function"!=typeof k||k(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),z&&(O||!I)&&h(z,L,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!x||y||"a"===r.type&&!("href"in r.props)){let F=void 0!==C?C:null==P?void 0:P.locale,G=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(T,F,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);q.href=G||p.addBasePath(u.addLocale(T,F,null==P?void 0:P.defaultLocale))}return x?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},M,q),o)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:u}=e,s=u||!l,[c,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!s&&!c&&d&&d.tagName){let e=function(e,t,o){let{id:r,observer:n,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=a.get(r)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:n},i.push(o),a.set(o,t),t}(o);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),a.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!c){let r=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(r)}},[d,s,o,t,c]);let g=r.useCallback(()=>{f(!1)},[]);return[p,c,g]};var r=o(7294),n=o(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:o,blurWidth:r,blurHeight:n,blurDataURL:l}=e,a=r||t,i=n||o,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function o(e){let{config:t,src:o,width:r,quality:n}=e;return o.endsWith(".svg")&&!t.dangerouslyAllowSVG?o:"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},5675:function(e,t,o){e.exports=o(9749)},1664:function(e,t,o){e.exports=o(1551)}}]);