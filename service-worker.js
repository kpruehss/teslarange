"use strict";var precacheConfig=[["/teslarange/index.html","9f075e55cc0b9270fab0299756394b0d"],["/teslarange/static/css/main.2e0e97b6.css","c6ff4085945b81fea9400e9a92e1f746"],["/teslarange/static/js/main.bd64fa44.js","7cadc173a73d29dcdc7999b5de716a2d"],["/teslarange/static/media/19.c8ef3398.svg","c8ef339847339a7f374dc08857c0413b"],["/teslarange/static/media/21.a52693ae.svg","a52693ae2ceb4b6315fecaf078a0bdbe"],["/teslarange/static/media/60.7ee66eea.svg","7ee66eea8c5fcc82180de8776e3e37ce"],["/teslarange/static/media/60d.246b5ba5.svg","246b5ba5f8b8af340199831b3a4b538b"],["/teslarange/static/media/75.37862a62.svg","37862a62ee2074b44d66b00fb9c1ebce"],["/teslarange/static/media/75d.9c937cb9.svg","9c937cb94afc2cdccc2cc4cf06dcbfe6"],["/teslarange/static/media/90d.28a215f0.svg","28a215f09ce0146c0b0e22fe2664c536"],["/teslarange/static/media/ac-on.4dcccadf.svg","4dcccadfb884623189abd5d22d7777fc"],["/teslarange/static/media/down.a56566ba.svg","a56566ba32341898ea4772990a826e86"],["/teslarange/static/media/logo.99c8f204.svg","99c8f2040d559a70d47006716713add5"],["/teslarange/static/media/p100d.62ed87b4.svg","62ed87b41017976b4ffff063c91288cf"],["/teslarange/static/media/tesla.ff16203f.jpg","ff16203f3d0aa6c8a55315d4e3e7b287"],["/teslarange/static/media/up.b3fc73bf.svg","b3fc73bf1e58ec43c8502bbbc089913c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/teslarange/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});