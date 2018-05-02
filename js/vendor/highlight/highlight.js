!function(){if("function"==typeof window.addEventListener)for(var e=document.querySelectorAll("pre code"),n=0,r=e.length;n<r;n++){var t=e[n];t.hasAttribute("data-trim")&&"function"==typeof t.innerHTML.trim&&(t.innerHTML=t.innerHTML.trim()),t.hasAttribute("data-noescape")||(t.innerHTML=t.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;")),t.addEventListener("focusout",function(e){hljs.highlightBlock(e.currentTarget)},!1)}}(),!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function t(e,n){var r=e&&e.exec(n);return r&&0==r.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var n,r,t,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",r=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return w(r[1])?r[1]:"no-highlight";for(i=i.split(/\s+/),n=0,t=i.length;t>n;n++)if(w(i[n])||a(i[n]))return i[n]}function o(e,n){var r,t={};for(r in e)t[r]=e[r];if(n)for(r in n)t[r]=n[r];return t}function c(e){var n=[];return function t(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=t(i,a),r(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function u(e,t,a){function i(){return e.length&&t.length?e[0].offset!=t[0].offset?e[0].offset<t[0].offset?e:t:"start"==t[0].event?e:t:e.length?e:t}function o(e){function t(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+r(e)+Array.prototype.map.call(e.attributes,t).join("")+">"}function c(e){l+="</"+r(e)+">"}function u(e){("start"==e.event?o:c)(e.node)}for(var s=0,l="",f=[];e.length||t.length;){var g=i();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=i();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(o)}else"start"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function s(e){function n(e){return e&&e.source||e}function r(r,t){return new RegExp(n(r),"m"+(e.cI?"i":"")+(t?"g":""))}function t(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},u=function(n,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");c[r[0]]=[n,r[1]?Number(r[1]):1]})};"string"==typeof a.k?u("keyword",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=c}a.lR=r(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=r(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=r(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=r(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){t(e,a)}),a.starts&&t(a.starts,i);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?r(l.join("|"),!0):{exec:function(){return null}}}}t(e)}function l(e,r,a,i){function o(e,n){for(var r=0;r<n.c.length;r++)if(t(n.c[r].bR,e))return n.c[r]}function c(e,n){if(t(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?c(e.parent,n):void 0}function u(e,n){return!a&&t(n.iR,e)}function g(e,n){var r=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,n,r,t){var a=t?"":E.classPrefix,i='<span class="'+a,o=r?"":"</span>";return i+=e+'">',i+n+o}function d(){if(!M.k)return n(L);var e="",r=0;M.lR.lastIndex=0;for(var t=M.lR.exec(L);t;){e+=n(L.substr(r,t.index-r));var a=g(M,t);a?(k+=a[1],e+=p(a[0],n(t[0]))):e+=n(t[0]),r=M.lR.lastIndex,t=M.lR.exec(L)}return e+n(L.substr(r))}function b(){var e="string"==typeof M.sL;if(e&&!y[M.sL])return n(L);var r=e?l(M.sL,L,!0,x[M.sL]):f(L,M.sL.length?M.sL:void 0);return M.r>0&&(k+=r.r),e&&(x[M.sL]=r.top),p(r.language,r.value,!1,!0)}function h(){C+=void 0!==M.sL?b():d(),L=""}function v(e,n){C+=e.cN?p(e.cN,"",!0):"",M=Object.create(e,{parent:{value:M}})}function m(e,n){if(L+=e,void 0===n)return h(),0;var r=o(n,M);if(r)return r.skip?L+=n:(r.eB&&(L+=n),h(),r.rB||r.eB||(L=n)),v(r,n),r.rB?0:n.length;var t=c(M,n);if(t){var a=M;a.skip?L+=n:(a.rE||a.eE||(L+=n),h(),a.eE&&(L=n));do M.cN&&(C+="</span>"),M.skip||(k+=M.r),M=M.parent;while(M!=t.parent);return t.starts&&v(t.starts,""),a.rE?0:n.length}if(u(n,M))throw new Error('Illegal lexeme "'+n+'" for mode "'+(M.cN||"<unnamed>")+'"');return L+=n,n.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var R,M=i||N,x={},C="";for(R=M;R!=N;R=R.parent)R.cN&&(C=p(R.cN,"",!0)+C);var L="",k=0;try{for(var B,I,A=0;M.t.lastIndex=A,B=M.t.exec(r),B;)I=m(r.substr(A,B.index-A),B[0]),A=B.index+I;for(m(r.substr(A)),R=M;R.parent;R=R.parent)R.cN&&(C+="</span>");return{r:k,value:C,language:e,top:M}}catch(j){if(-1!=j.message.indexOf("Illegal"))return{r:0,value:n(r)};throw j}}function f(e,r){r=r||E.languages||Object.keys(y);var t={r:0,value:n(e)},a=t;return r.filter(w).forEach(function(n){var r=l(n,e,!1);r.language=n,r.r>a.r&&(a=r),r.r>t.r&&(a=t,t=r)}),a.language&&(t.second_best=a),t}function g(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\n/g,"<br>")),e}function p(e,n,r){var t=n?R[n]:r,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(t)&&a.push(t),a.join(" ").trim()}function d(e){var n=i(e);if(!a(n)){var r;E.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e;var t=r.textContent,o=n?l(n,t,!0):f(t),s=c(r);if(s.length){var d=document.createElementNS("http://www.w3.org/1999/xhtml","div");d.innerHTML=o.value,o.value=u(s,c(d),t)}o.value=g(o.value),e.innerHTML=o.value,e.className=p(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function b(e){E=o(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,d)}}function v(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function m(n,r){var t=y[n]=r(e);t.aliases&&t.aliases.forEach(function(e){R[e]=n})}function N(){return Object.keys(y)}function w(e){return e=(e||"").toLowerCase(),y[e]||y[R[e]]}var E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},y={},R={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=g,e.highlightBlock=d,e.configure=b,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=N,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(n,r,t){var a=e.inherit({cN:"comment",b:n,e:r,c:[]},t||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("javascript",function(e){return{aliases:["js","jsx"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:["self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM]}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});