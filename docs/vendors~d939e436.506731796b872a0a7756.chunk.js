(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"+qE3":function(e,t,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var a=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var l=10;function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,n,r){var i,o,a,s;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"==typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=c(e))>0&&a.length>i&&!a.warned){a.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=a.length,s=l,console&&console.warn&&console.warn(s)}return e}function f(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,e))}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function d(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):h(i,i.length)}function m(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=i[e];if(void 0===l)return!1;if("function"==typeof l)o(l,this,t);else{var c=l.length,u=h(l,c);for(n=0;n<c;++n)o(u[n],this,t)}return!0},s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,o,a;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},s.prototype.listeners=function(e){return d(this,e,!0)},s.prototype.rawListeners=function(e){return d(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},s.prototype.listenerCount=m,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},wMS7:function(e,t,n){e.exports=function(){"use strict";var e=Object.freeze||function(e){return e},t=e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),n=e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),r=e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),i=e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),o=e(["#text"]),a=Object.freeze||function(e){return e},s=a(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),l=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),c=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),u=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),f=Object.hasOwnProperty,p=Object.setPrototypeOf,d=("undefined"!=typeof Reflect&&Reflect).apply;function m(e,t){p&&p(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var i=r.toLowerCase();i!==r&&(Object.isFrozen(t)||(t[n]=i),r=i)}e[r]=!0}return e}function h(e){var t={},n=void 0;for(n in e)d(f,e,[n])&&(t[n]=e[n]);return t}d||(d=function(e,t,n){return e.apply(t,n)});var v=Object.seal||function(e){return e},y=v(/\{\{[\s\S]*|[\s\S]*\}\}/gm),g=v(/<%[\s\S]*|[\s\S]*%>/gm),b=v(/^data-[\-\w.\u00B7-\uFFFF]/),T=v(/^aria-[\-\w]+$/),L=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),w=v(/^(?:\w+script|data):/i),x=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function A(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var E=("undefined"!=typeof Reflect&&Reflect).apply,O=Array.prototype.slice,S=Object.freeze,M=function(){return"undefined"==typeof window?null:window};E||(E=function(e,t,n){return e.apply(t,n)});var R=function(e,t){if("object"!==(void 0===e?"undefined":_(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M(),f=function(t){return e(t)};if(f.version="2.0.7",f.removed=[],!a||!a.document||9!==a.document.nodeType)return f.isSupported=!1,f;var p=a.document,d=!1,v=!1,k=a.document,N=a.DocumentFragment,C=a.HTMLTemplateElement,D=a.Node,F=a.NodeFilter,j=a.NamedNodeMap,H=void 0===j?a.NamedNodeMap||a.MozNamedAttrMap:j,z=a.Text,I=a.Comment,P=a.DOMParser,U=a.TrustedTypes;if("function"==typeof C){var W=k.createElement("template");W.content&&W.content.ownerDocument&&(k=W.content.ownerDocument)}var B=R(U,p),q=B?B.createHTML(""):"",G=k,J=G.implementation,K=G.createNodeIterator,V=G.getElementsByTagName,Y=G.createDocumentFragment,X=p.importNode,$={};f.isSupported=J&&void 0!==J.createHTMLDocument&&9!==k.documentMode;var Q=y,Z=g,ee=b,te=T,ne=w,re=x,ie=L,oe=null,ae=m({},[].concat(A(t),A(n),A(r),A(i),A(o))),se=null,le=m({},[].concat(A(s),A(l),A(c),A(u))),ce=null,ue=null,fe=!0,pe=!0,de=!1,me=!1,he=!1,ve=!1,ye=!1,ge=!1,be=!1,Te=!1,Le=!1,we=!1,xe=!0,_e=!0,Ae=!1,Ee={},Oe=m({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Se=m({},["audio","video","img","source","image"]),Me=null,Re=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),ke=null,Ne=k.createElement("form"),Ce=function(e){ke&&ke===e||(e&&"object"===(void 0===e?"undefined":_(e))||(e={}),oe="ALLOWED_TAGS"in e?m({},e.ALLOWED_TAGS):ae,se="ALLOWED_ATTR"in e?m({},e.ALLOWED_ATTR):le,Me="ADD_URI_SAFE_ATTR"in e?m(h(Re),e.ADD_URI_SAFE_ATTR):Re,ce="FORBID_TAGS"in e?m({},e.FORBID_TAGS):{},ue="FORBID_ATTR"in e?m({},e.FORBID_ATTR):{},Ee="USE_PROFILES"in e&&e.USE_PROFILES,fe=!1!==e.ALLOW_ARIA_ATTR,pe=!1!==e.ALLOW_DATA_ATTR,de=e.ALLOW_UNKNOWN_PROTOCOLS||!1,me=e.SAFE_FOR_JQUERY||!1,he=e.SAFE_FOR_TEMPLATES||!1,ve=e.WHOLE_DOCUMENT||!1,be=e.RETURN_DOM||!1,Te=e.RETURN_DOM_FRAGMENT||!1,Le=e.RETURN_DOM_IMPORT||!1,we=e.RETURN_TRUSTED_TYPE||!1,ge=e.FORCE_BODY||!1,xe=!1!==e.SANITIZE_DOM,_e=!1!==e.KEEP_CONTENT,Ae=e.IN_PLACE||!1,ie=e.ALLOWED_URI_REGEXP||ie,he&&(pe=!1),Te&&(be=!0),Ee&&(oe=m({},[].concat(A(o))),se=[],!0===Ee.html&&(m(oe,t),m(se,s)),!0===Ee.svg&&(m(oe,n),m(se,l),m(se,u)),!0===Ee.svgFilters&&(m(oe,r),m(se,l),m(se,u)),!0===Ee.mathMl&&(m(oe,i),m(se,c),m(se,u))),e.ADD_TAGS&&(oe===ae&&(oe=h(oe)),m(oe,e.ADD_TAGS)),e.ADD_ATTR&&(se===le&&(se=h(se)),m(se,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&m(Me,e.ADD_URI_SAFE_ATTR),_e&&(oe["#text"]=!0),ve&&m(oe,["html","head","body"]),oe.table&&(m(oe,["tbody"]),delete ce.tbody),S&&S(e),ke=e)},De=function(e){f.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=q}},Fe=function(e,t){try{f.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){f.removed.push({attribute:null,from:t})}t.removeAttribute(e)},je=function(e){var t=void 0,n=void 0;if(ge)e="<remove></remove>"+e;else{var r=e.match(/^[\s]+/);(n=r&&r[0])&&(e=e.slice(n.length))}if(d)try{t=(new P).parseFromString(e,"text/html")}catch(e){}if(v&&m(ce,["title"]),!t||!t.documentElement){var i=(t=J.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=B?B.createHTML(e):e}return e&&n&&t.body.insertBefore(k.createTextNode(n),t.body.childNodes[0]||null),V.call(t,ve?"html":"body")[0]};f.isSupported&&(function(){try{je('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(d=!0)}catch(e){}}(),function(){try{var e=je("<x/><title>&lt;/title&gt;&lt;img&gt;");/<\/title/.test(e.querySelector("title").innerHTML)&&(v=!0)}catch(e){}}());var He=function(e){return K.call(e.ownerDocument||e,e,F.SHOW_ELEMENT|F.SHOW_COMMENT|F.SHOW_TEXT,(function(){return F.FILTER_ACCEPT}),!1)},ze=function(e){return!(e instanceof z||e instanceof I||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof H&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Ie=function(e){return"object"===(void 0===D?"undefined":_(D))?e instanceof D:e&&"object"===(void 0===e?"undefined":_(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Pe=function(e,t,n){$[e]&&$[e].forEach((function(e){e.call(f,t,n,ke)}))},Ue=function(e){var t=void 0;if(Pe("beforeSanitizeElements",e,null),ze(e))return De(e),!0;var n=e.nodeName.toLowerCase();if(Pe("uponSanitizeElement",e,{tagName:n,allowedTags:oe}),("svg"===n||"math"===n)&&0!==e.querySelectorAll("p, br").length)return De(e),!0;if(!oe[n]||ce[n]){if(_e&&!Oe[n]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",B?B.createHTML(r):r)}catch(e){}return De(e),!0}return"noscript"===n&&/<\/noscript/i.test(e.innerHTML)?(De(e),!0):"noembed"===n&&/<\/noembed/i.test(e.innerHTML)?(De(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(f.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),he&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(Q," ")).replace(Z," "),e.textContent!==t&&(f.removed.push({element:e.cloneNode()}),e.textContent=t)),Pe("afterSanitizeElements",e,null),!1)},We=function(e,t,n){if(xe&&("id"===t||"name"===t)&&(n in k||n in Ne))return!1;if(pe&&ee.test(t));else if(fe&&te.test(t));else{if(!se[t]||ue[t])return!1;if(Me[t]);else if(ie.test(n.replace(re,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==n.indexOf("data:")||!Se[e])if(de&&!ne.test(n.replace(re,"")));else if(n)return!1}return!0},Be=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,o=void 0;Pe("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:se};for(o=a.length;o--;){var l=t=a[o],c=l.name,u=l.namespaceURI;if(n=t.value.trim(),r=c.toLowerCase(),s.attrName=r,s.attrValue=n,s.keepAttr=!0,Pe("uponSanitizeAttribute",e,s),n=s.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)i=a.id,a=E(O,a,[]),Fe("id",e),Fe(c,e),a.indexOf(i)>o&&e.setAttribute("id",i.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&s.keepAttr&&(se[r]||!ue[r]))continue;"id"===c&&e.setAttribute(c,""),Fe(c,e)}if(s.keepAttr)if(/svg|math/i.test(e.namespaceURI)&&new RegExp("</("+Object.keys(Oe).join("|")+")","i").test(n))Fe(c,e);else{he&&(n=(n=n.replace(Q," ")).replace(Z," "));var p=e.nodeName.toLowerCase();if(We(p,r,n))try{u?e.setAttributeNS(u,c,n):e.setAttribute(c,n),f.removed.pop()}catch(e){}}}Pe("afterSanitizeAttributes",e,null)}},qe=function e(t){var n=void 0,r=He(t);for(Pe("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Pe("uponSanitizeShadowNode",n,null),Ue(n)||(n.content instanceof N&&e(n.content),Be(n));Pe("afterSanitizeShadowDOM",t,null)};return f.sanitize=function(e,t){var n=void 0,r=void 0,i=void 0,o=void 0,s=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ie(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!f.isSupported){if("object"===_(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof e)return a.toStaticHTML(e);if(Ie(e))return a.toStaticHTML(e.outerHTML)}return e}if(ye||Ce(t),f.removed=[],Ae);else if(e instanceof D)1===(r=(n=je("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName?n=r:"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!be&&!he&&!ve&&we&&-1===e.indexOf("<"))return B?B.createHTML(e):e;if(!(n=je(e)))return be?null:q}n&&ge&&De(n.firstChild);for(var l=He(Ae?e:n);i=l.nextNode();)3===i.nodeType&&i===o||Ue(i)||(i.content instanceof N&&qe(i.content),Be(i),o=i);if(o=null,Ae)return e;if(be){if(Te)for(s=Y.call(n.ownerDocument);n.firstChild;)s.appendChild(n.firstChild);else s=n;return Le&&(s=X.call(p,s,!0)),s}var c=ve?n.outerHTML:n.innerHTML;return he&&(c=(c=c.replace(Q," ")).replace(Z," ")),B&&we?B.createHTML(c):c},f.setConfig=function(e){Ce(e),ye=!0},f.clearConfig=function(){ke=null,ye=!1},f.isValidAttribute=function(e,t,n){ke||Ce({});var r=e.toLowerCase(),i=t.toLowerCase();return We(r,i,n)},f.addHook=function(e,t){"function"==typeof t&&($[e]=$[e]||[],$[e].push(t))},f.removeHook=function(e){$[e]&&$[e].pop()},f.removeHooks=function(e){$[e]&&($[e]=[])},f.removeAllHooks=function(){$={}},f}()}()}}]);
//# sourceMappingURL=vendors~d939e436.506731796b872a0a7756.bundle.map