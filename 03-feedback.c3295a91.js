!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("1WSnx"),a=document.querySelector(".feedback-form"),l={};!function(){try{var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;for(var t in e)a.elements[t].value=e[t]}catch(e){console.error(e)}}();a.addEventListener("input",(0,o.throttle)((function(e){var t=e.target,r=t.value,n=t.name;l[n]=r;try{localStorage.setItem("feedback-form-state",JSON.stringify(l))}catch(e){console.error(e)}}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),a.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.c3295a91.js.map