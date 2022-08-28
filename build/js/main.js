/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():0}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});


/***/ }),

/***/ "./source/js/_components.js":
/*!**********************************!*\
  !*** ./source/js/_components.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sliders */ "./source/js/components/sliders.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs */ "./source/js/components/tabs.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_galery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/galery */ "./source/js/components/galery.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filters */ "./source/js/components/filters.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_filters__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_accordions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accordions */ "./source/js/components/accordions.js");
/* harmony import */ var _components_accordions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_accordions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_to_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/to-top */ "./source/js/components/to-top.js");
/* harmony import */ var _components_to_top__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_to_top__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/select */ "./source/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/counter */ "./source/js/components/counter.js");
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_counter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/anchor */ "./source/js/components/anchor.js");
/* harmony import */ var _components_anchor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_anchor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_more_review__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/more-review */ "./source/js/components/more-review.js");
/* harmony import */ var _components_more_review__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_more_review__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modals */ "./source/js/components/modals.js");
/* harmony import */ var _components_inputmask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inputmask */ "./source/js/components/inputmask.js");
/* harmony import */ var _components_inputmask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_inputmask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_replaceEl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/replaceEl */ "./source/js/components/replaceEl.js");
/* harmony import */ var _components_replaceEl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_replaceEl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_main_nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main-nav */ "./source/js/components/main-nav.js");
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/range */ "./source/js/components/range.js");
















/***/ }),

/***/ "./source/js/_functions.js":
/*!*********************************!*\
  !*** ./source/js/_functions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./source/js/functions/mobile-check.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/burger */ "./source/js/functions/burger.js");
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/disable-scroll */ "./source/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/enable-scroll */ "./source/js/functions/enable-scroll.js");
/* harmony import */ var _functions_header_height__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/header-height */ "./source/js/functions/header-height.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)()); // Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню

 // Реализация остановки скролла (не забудьте вызвать функцию)

 // Реализация включения скролла (не забудьте вызвать функцию)

 // Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');
// Получение высоты шапки сайта (не забудьте вызвать функцию)


console.log();
window.addEventListener("DOMContentLoaded", () => {
  (0,_functions_header_height__WEBPACK_IMPORTED_MODULE_4__.getHeaderHeight)();
});
window.addEventListener("resize", () => {
  (0,_functions_header_height__WEBPACK_IMPORTED_MODULE_4__.getHeaderHeight)();
}); // Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// // const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.order-form', rules1, afterForm);

/***/ }),

/***/ "./source/js/_vars.js":
/*!****************************!*\
  !*** ./source/js/_vars.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./source/js/_vendor.js":
/*!******************************!*\
  !*** ./source/js/_vendor.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./source/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/picturefill.js */ "./source/js/vendor/picturefill.js");
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_vidbg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/vidbg.js */ "./source/js/vendor/vidbg.js");
/* harmony import */ var _vendor_vidbg_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_vidbg_js__WEBPACK_IMPORTED_MODULE_2__);


 // import './vendor/aos.js';

/***/ }),

/***/ "./source/js/components/accordions.js":
/*!********************************************!*\
  !*** ./source/js/components/accordions.js ***!
  \********************************************/
/***/ (function() {

const catalogAcc = document.querySelector('.catalog-accordion');
document.addEventListener("DOMContentLoaded", () => {
  if (catalogAcc) {
    const accFirst = document.querySelector("[data-id='1']");
    const accContent = document.querySelector("[data-content='1']");
    accFirst.classList.add('active');
    accContent.style.maxHeight = 'initial';
  }
});

const getAccordions = function () {
  let dataName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[data-id]";
  return document.querySelectorAll(dataName);
};

const accordions = getAccordions(); // let openedAccordion = null;

const closeAccordion = function (accordion) {
  accordion.style.maxHeight = 0;
};

const openAccordion = function (accordion) {
  accordion.style.maxHeight = accordion.scrollHeight + "px";
};

const toggleAccordionButton = function (button) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "active";
  button.classList.toggle(className);
};

const checkIsAccordionOpen = function (accordion) {
  return accordion.style.maxHeight && accordion.style.maxHeight !== "0px";
};

const accordionClickHandler = function () {
  let curentDataNumber = this.dataset.id;
  toggleAccordionButton(this);
  const accordionContent = document.querySelector("[data-content=\"".concat(curentDataNumber, "\"]"));
  const isAccordionOpen = checkIsAccordionOpen(accordionContent);

  if (isAccordionOpen) {
    closeAccordion(accordionContent); // openedAccordion = null;
  } else {
    // if (openedAccordion != null) {
    //   console.log(openedAccordion )
    //   closeAccordion(openedAccordion);
    //   const accordionButton = document.querySelector(`[data-id="${openedAccordion.dataset.content}"]`)
    //   toggleAccordionButton(accordionButton);
    // }
    openAccordion(accordionContent); // openedAccordion = accordionContent;
  }
};

const activateAccordion = function (accordions, handler) {
  for (const accordion of accordions) {
    accordion.addEventListener('click', handler);
  }
};

activateAccordion(accordions, accordionClickHandler);

/***/ }),

/***/ "./source/js/components/anchor.js":
/*!****************************************!*\
  !*** ./source/js/components/anchor.js ***!
  \****************************************/
/***/ (function() {

const anchorButtons = document.querySelectorAll('.anchor-button');

for (const anchorButton of anchorButtons) {
  anchorButton.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');
    window.scrollTo({
      top: document.getElementById("".concat(id)).offsetTop,
      behavior: 'smooth'
    });
  });
}

/***/ }),

/***/ "./source/js/components/counter.js":
/*!*****************************************!*\
  !*** ./source/js/components/counter.js ***!
  \*****************************************/
/***/ (function() {

const btnMinus = document.querySelectorAll(".number-minus");
const btnPlus = document.querySelectorAll(".number-plus");

for (const btn of btnPlus) {
  btn.onclick = function () {
    const myForm = this.parentElement;
    const myInput = myForm.querySelector('input');
    myInput.stepUp();
  };
}

for (const btn of btnMinus) {
  btn.onclick = function () {
    const myForm = this.parentElement;
    const myInput = myForm.querySelector('input');
    myInput.stepDown();
  };
}

/***/ }),

/***/ "./source/js/components/filters.js":
/*!*****************************************!*\
  !*** ./source/js/components/filters.js ***!
  \*****************************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", event => {
  const myFilters = [...document.querySelectorAll('.catalog-filters__list')];
  let step = 1;

  const filterClickHandler = function () {
    const myElement = this;

    function removeClassForAllEl() {
      const myElementSiblings = document.querySelectorAll('.catalog-filters__button');

      for (let myElementSibling of myElementSiblings) {
        myElementSibling.classList.remove('active-mode');
        myElementSibling.classList.remove('active');
      }
    }

    switch (step) {
      case 1:
        removeClassForAllEl();
        myElement.classList.add('active');
        step += 1;
        break;

      case 2:
        removeClassForAllEl();
        myElement.classList.add('active-mode');
        step += 1;
        break;

      case 3:
        myElement.classList.remove('active-mode');
        myElement.classList.remove('active');
        step = 1;
        break;
    }
  };

  myFilters.map(myFilter => {
    const filterItems = [...myFilter.querySelectorAll('.catalog-filters__button')];
    filterItems.map(filterItem => {
      filterItem.addEventListener('click', filterClickHandler);
    });
  });
  const checkboxes = [...document.querySelectorAll('.catalog-accordion__checkbox > .checkbox')];

  for (const checkbox of checkboxes) {
    if (checkbox.querySelector('.custom-checkbox > input[type="radio"]')) {
      checkbox.querySelector('.custom-checkbox > input[type="radio"]').addEventListener('click', function (e) {
        [...document.querySelectorAll('.checkbox-sublist')].map(function (item) {
          item.classList.remove('show');
          item.style.maxHeight = 0;
        });

        if (e.target.checked && checkbox.querySelector('.checkbox-sublist')) {
          checkbox.querySelector('.checkbox-sublist').classList.add('show');
          checkbox.querySelector('.checkbox-sublist').style.maxHeight = checkbox.querySelector('.checkbox-sublist').scrollHeight + "px";
        }
      });
    }
  }
});

/***/ }),

/***/ "./source/js/components/galery.js":
/*!****************************************!*\
  !*** ./source/js/components/galery.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/lightbox */ "./source/js/vendor/lightbox.js");
/* harmony import */ var _vendor_lightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_lightbox__WEBPACK_IMPORTED_MODULE_0__);

lightGallery(document.getElementById('sert'));
lightGallery(document.getElementById('sale'));

/***/ }),

/***/ "./source/js/components/inputmask.js":
/*!*******************************************!*\
  !*** ./source/js/components/inputmask.js ***!
  \*******************************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = '+38 (___) ___-__-__',
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = new_value.indexOf("_");

      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }

      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

/***/ }),

/***/ "./source/js/components/main-nav.js":
/*!******************************************!*\
  !*** ./source/js/components/main-nav.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./source/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./source/js/functions/enable-scroll.js");


const breakpoint = 576;
const navInners = document.querySelectorAll('.global-nav__inner');

for (const navInner of navInners) {
  const navBtn = navInner === null || navInner === void 0 ? void 0 : navInner.querySelector('.global-nav__name');
  const navBody = document.querySelectorAll('.global-nav__wrapper');
  const navClose = navInner === null || navInner === void 0 ? void 0 : navInner.querySelector('.global-nav__close');

  const itemRemoveActive = function () {
    for (const item of navBody) {
      item.classList.remove('active');
    }
  };

  const mainNavHendler = function () {
    let containerWidth = document.documentElement.clientWidth;

    if (containerWidth < breakpoint) {
      let currentWrapper = this.nextElementSibling;
      itemRemoveActive();
      document.body.classList.add('modal-overlay');
      currentWrapper.classList.add('active');
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    }
  };

  const closeNavHendler = () => {
    let containerWidth = document.documentElement.clientWidth;

    if (containerWidth < breakpoint) {
      itemRemoveActive();
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
      document.body.classList.remove('modal-overlay');
    }
  };

  navBtn.onclick = mainNavHendler;
  navClose.onclick = closeNavHendler;
}

/***/ }),

/***/ "./source/js/components/modals.js":
/*!****************************************!*\
  !*** ./source/js/components/modals.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./source/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./source/js/functions/enable-scroll.js");


const overlay = document.querySelector('[data-menu-overlay]');
const ageModalBlock = document.querySelector('[data-modal="age"]');
const regModalBlock = document.querySelector('[data-modal="reg"]');
const cartModalBlock = document.querySelector('[data-modal="cart"]');
const closeModalBtns = [...document.querySelectorAll('.close-modal')];
const showModalReg = [...document.querySelectorAll('[show-modal]')];
const showModalCart = [...document.querySelectorAll('[show-cart]')];
const forgotBtn = document.querySelector('[data-forgot]');
let age = localStorage.getItem('age');

function hideMobileMenu() {
  var _document, _document2;

  (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]').classList.remove('burger--active');
  (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]').classList.remove('mobile-menu--active');
}

if (ageModalBlock) {
  if (age != 18) {
    document.addEventListener('DOMContentLoaded', ageModal(ageModalBlock));
  }

  function ageModal(modal) {
    modal.classList.add('active');
    document.body.classList.add('dis-scroll');
    document.body.classList.add('modal-overlay');
    modal.addEventListener('click', function (e) {
      if (e.target.classList.contains('age-modal__btn--yes')) {
        localStorage.setItem('age', '18');
        modal.classList.remove('active');
        document.body.classList.remove('dis-scroll');
        document.body.classList.remove('modal-overlay');
      }
    });
  }
}

showModalReg.map(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    regModalBlock.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.remove('dis-scroll');
    hideMobileMenu();
    (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
  });
});
closeModalBtns.map(function (btn) {
  btn.addEventListener('click', function () {
    var _document3, _document4;

    document.querySelector('[data-modal].active').classList.remove('active');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('active'); // document.body.classList.remove('dis-scroll');

    document.body.classList.remove('modal-overlay');
    (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector('[data-burger]').classList.remove('burger--active');
    (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu]').classList.remove('mobile-menu--active');
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
});

forgotBtn.onclick = function () {
  document.querySelector('[data-modal].active').classList.remove('active');
  document.querySelector('[data-modal="forgot"]').classList.add('active');
  hideMobileMenu();
  (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
};

document.querySelector('[data-back]').onclick = function () {
  document.querySelector('[data-modal="forgot"]').classList.remove('active');
  regModalBlock.classList.add('active');
  hideMobileMenu();
  (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
};

showModalCart.map(function (btn) {
  btn.addEventListener('click', function () {
    cartModalBlock.classList.add('active');
    overlay.classList.add('active');
    hideMobileMenu();
    (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
  });
});

/***/ }),

/***/ "./source/js/components/more-review.js":
/*!*********************************************!*\
  !*** ./source/js/components/more-review.js ***!
  \*********************************************/
/***/ (function() {

const showReviews = document.querySelector('.show-reviews');
const reviewsSection = document.querySelector('.section-reviews');

if (showReviews) {
  const reviewItems = [...(showReviews === null || showReviews === void 0 ? void 0 : showReviews.querySelectorAll('.reviews-list__item'))];
  const showMore = showReviews === null || showReviews === void 0 ? void 0 : showReviews.querySelector('.show-more');
  let initialValue = 4;
  const itemLenght = reviewItems.length;

  if (itemLenght >= initialValue) {
    reviewsSection.classList.add('section-reviews--before');

    function showInitialItems(itemArray, count) {
      [...itemArray.slice(0, count)].map(function (initialItem) {
        initialItem.style.display = 'flex';
      });
    }

    reviewItems.map(function (reviewItem) {
      reviewItem.style.display = 'none';
    });
    showInitialItems(reviewItems, initialValue);
    showMore.addEventListener('click', function (e) {
      e.preventDefault();
      initialValue += 5;
      initialValue >= itemLenght ? showMore.classList.add('disable') : showMore.classList.remove('disable');
      showInitialItems(reviewItems, initialValue);
    });
  } else {
    if (showMore) {
      showMore.style.display = 'none';
    }
  }
}

/***/ }),

/***/ "./source/js/components/range.js":
/*!***************************************!*\
  !*** ./source/js/components/range.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);

let rangeSliders = [...document.querySelectorAll('.range-slider')];
const rangeSlidersValues = [...document.querySelectorAll('.range-values span')];
rangeSliders.map(slider => {
  nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(slider, {
    start: [10, 40],
    // snap: true,
    step: .10,
    connect: true,
    range: {
      'min': 0,
      'max': 50
    },
    format: {
      to: function (value) {
        return value.toPrecision(3);
      },
      from: function (value) {
        return value;
      }
    }
  });
  let snapValues = [document.querySelector('.range-values__lower'), document.querySelector('.range-values__upper')];
  slider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].value = values[handle];
  });
});

/***/ }),

/***/ "./source/js/components/replaceEl.js":
/*!*******************************************!*\
  !*** ./source/js/components/replaceEl.js ***!
  \*******************************************/
/***/ (function() {

const searchForm = document.querySelector('.catalog-aside__search');
const myAside = document.querySelector('.catalog-aside');
const myAsideTitle = myAside === null || myAside === void 0 ? void 0 : myAside.querySelector('.catalog-aside__title');
const breakpoint = 1025;
const breakpointPhone = 576;
const catalogInner = document.querySelector('.catalog-section__title');
const fixedNav = document.querySelector('.global-nav');
const fixedNavMobileParrent = document.querySelector('.navigation-section__top .container');
const fixedNavDesktopParrent = document.querySelector('.main-slider');

const replaceSearchForm = (element, parentDesktop, parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;

  if (containerWidth < breakpoint) {
    parentMobile.insertAdjacentElement('afterend', element);
  }

  ;

  if (containerWidth >= breakpoint) {
    parentDesktop.insertAdjacentElement('afterend', element);
  }
};

if (myAside) {
  window.addEventListener('resize', () => {
    replaceSearchForm(searchForm, myAsideTitle, catalogInner);
  });
  window.addEventListener('DOMContentLoaded', () => {
    replaceSearchForm(searchForm, myAsideTitle, catalogInner);
  });
}

if (fixedNav) {
  window.addEventListener('resize', () => {
    replaceFixedNav(fixedNav, fixedNavDesktopParrent, fixedNavMobileParrent);
  });
  window.addEventListener('DOMContentLoaded', () => {
    replaceFixedNav(fixedNav, fixedNavDesktopParrent, fixedNavMobileParrent);
  });
}

const replaceFixedNav = (element, parentDesktop, parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;

  if (containerWidth < breakpointPhone) {
    parentMobile.insertAdjacentElement('afterbegin', element);
    element.removeAttribute('data-aos');
  }

  ;

  if (containerWidth >= breakpointPhone) {
    parentDesktop.insertAdjacentElement('afterbegin', element);
    element.setAttribute('data-aos', 'fade-up');
  }
};

/***/ }),

/***/ "./source/js/components/select.js":
/*!****************************************!*\
  !*** ./source/js/components/select.js ***!
  \****************************************/
/***/ (function() {

const select = document.querySelectorAll(".select");

if (select.length) {
  select.forEach(item => {
    const selectCurrent = item.querySelector(".select__current");
    item.addEventListener("click", event => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
      if (!item.contains(event.target)) {
        item.classList.remove("active");
      }
    });
  });
}

/***/ }),

/***/ "./source/js/components/sliders.js":
/*!*****************************************!*\
  !*** ./source/js/components/sliders.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/swiper */ "./source/js/vendor/swiper.js");
/* harmony import */ var _vendor_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_swiper__WEBPACK_IMPORTED_MODULE_0__);

const mySlider = document.querySelector('.main-slider__box');

for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
  if (mobileSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:1024px)");
      let slider;

      const enableSwiper = function () {
        slider = new (_vendor_swiper__WEBPACK_IMPORTED_MODULE_0___default())(mobileSlider, {
          slidesPerView: "auto",
          spaceBetween: 10,
          observer: true,
          observeParents: true
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);
          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }
}

if (mySlider) {
  let mainSlider = new (_vendor_swiper__WEBPACK_IMPORTED_MODULE_0___default())(mySlider, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    allowTouchMove: true,
    fadeEffect: {
      crossFade: true
    },
    effect: "fade",
    pagination: {
      el: ".main-slider__pagination",
      clickable: true
    },
    speed: 100,
    autoplay: {
      delay: 15000
    },
    on: {
      slideChange() {
        if (document.querySelector('.swiper-slide.bg-video.swiper-slide-active')) {
          document.body.classList.remove('has-video');
          document.querySelector('.global-nav').removeAttribute('data-aos');

          for (const title of document.querySelectorAll('.main-slider__title')) {
            title.removeAttribute('data-aos');
          }

          document.querySelector('.vidbg-container video').playbackRate = 10;
        }
      },

      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.start();
          console.log('123');
        });
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
          console.log('123dsg');
        });
      }

    }
  }); // mainSlider.on('init', function () {
  //   if (!document.querySelector('.swiper-slide.bg-video.swiper-slide-active')) {
  //     document.body.classList.remove('has-video');
  //   }
  //   if (document.querySelector('.swiper-slide.bg-video.swiper-slide-active')) {
  //     document.body.classList.add('has-video');
  //   }
  // });

  mainSlider.on('slideChange', function () {}); // console.log(  document.querySelector('.vidbg-container video'))
}

const sectionRecomendation = document.querySelector('.section-recomendation');

if (sectionRecomendation) {
  const recomendItem = [...sectionRecomendation.querySelectorAll('.product-list__item')];

  if (recomendItem.length < 4) {
    sectionRecomendation.querySelector('.product-list').classList.add('mode');
  }
}

/***/ }),

/***/ "./source/js/components/tabs.js":
/*!**************************************!*\
  !*** ./source/js/components/tabs.js ***!
  \**************************************/
/***/ (function() {

const tabParents = [...document.querySelectorAll('.tabs-parent')];
tabParents.forEach(function (tabParent) {
  let tabNavs = tabParent.querySelectorAll("[data-tab]");
  let tabPanes = tabParent.querySelectorAll("[data-tab-content]");

  for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      let activeTabAttr = e.target.getAttribute("data-tab");

      for (let j = 0; j < tabNavs.length; j++) {
        let contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("active");
          tabPanes[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabPanes[j].classList.remove("active");
        }
      }
    });
  }
});

/***/ }),

/***/ "./source/js/components/to-top.js":
/*!****************************************!*\
  !*** ./source/js/components/to-top.js ***!
  \****************************************/
/***/ (function() {

if (document.getElementById('upbutton')) {
  let timeOut;

  window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 500) {
      document.getElementById('upbutton').classList.add('show');
    } else {
      document.getElementById('upbutton').classList.remove('show');
    }
  };

  document.getElementById('upbutton').addEventListener('click', function () {
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

    if (top > 0) {
      window.scrollBy(0, document.documentElement.scrollTop * -1);
    }

    ;
  });
}

/***/ }),

/***/ "./source/js/functions/burger.js":
/*!***************************************!*\
  !*** ./source/js/functions/burger.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./source/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./source/js/functions/enable-scroll.js");


window.addEventListener("DOMContentLoaded", event => {
  (function () {
    var _document, _document2, _document3, _document4;

    const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
    const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
    const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
    const overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
    burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', e => {
      burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
      menu === null || menu === void 0 ? void 0 : menu.classList.toggle('mobile-menu--active');
      overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('active');
      filterBtn === null || filterBtn === void 0 ? void 0 : filterBtn.classList.remove('mobile-filters--active');
      filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.remove('active');

      if (menu !== null && menu !== void 0 && menu.classList.contains('mobile-menu--active')) {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
        (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
      } else {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('active');
        (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
      }
    });
    const filterBtn = document.querySelector(".mobile-filters");
    const filterBack = document.querySelector(".catalog-aside__back");
    const filterMenu = document.querySelector(".catalog-aside");

    if (filterBtn) {
      filterBtn.onclick = function () {
        filterBtn === null || filterBtn === void 0 ? void 0 : filterBtn.classList.toggle('mobile-filters--active');
        filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.toggle('active');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.toggle('active');
        console.log('123');
      };

      filterBack.onclick = function () {
        filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.remove('active');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('active');
      };
    }

    overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', function (e) {
      if (overlay !== null && overlay !== void 0 && overlay.classList.contains('active')) {
        var _document$querySelect;

        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('mobile-menu--active');
        (_document$querySelect = document.querySelector('[data-modal].active')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.classList.remove('active');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('active');
        filterBtn === null || filterBtn === void 0 ? void 0 : filterBtn.classList.remove('mobile-filters--active');
        filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.remove('active');
        console.log(filterMenu);
        (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
      }
    });
  })();
});

/***/ }),

/***/ "./source/js/functions/disable-scroll.js":
/*!***********************************************!*\
  !*** ./source/js/functions/disable-scroll.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": function() { return /* binding */ disableScroll; }
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");

const disableScroll = () => {
  var _document;

  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = "".concat(window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth, "px");
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = "-".concat(pagePosition, "px");
};

/***/ }),

/***/ "./source/js/functions/enable-scroll.js":
/*!**********************************************!*\
  !*** ./source/js/functions/enable-scroll.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": function() { return /* binding */ enableScroll; }
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");

const enableScroll = () => {
  var _document;

  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./source/js/functions/header-height.js":
/*!**********************************************!*\
  !*** ./source/js/functions/header-height.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeaderHeight": function() { return /* binding */ getHeaderHeight; }
/* harmony export */ });
const getHeaderHeight = () => {
  var _document;

  const headerHeight = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', "".concat(headerHeight, "px"));
};

/***/ }),

/***/ "./source/js/functions/mobile-check.js":
/*!*********************************************!*\
  !*** ./source/js/functions/mobile-check.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": function() { return /* binding */ mobileCheck; }
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    document.documentElement.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    document.documentElement.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};

/***/ }),

/***/ "./source/js/vendor/focus-visible.js":
/*!*******************************************!*\
  !*** ./source/js/vendor/focus-visible.js ***!
  \*******************************************/
/***/ (function() {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./source/js/vendor/lightbox.js":
/*!**************************************!*\
  !*** ./source/js/vendor/lightbox.js ***!
  \**************************************/
/***/ (function(module) {

/**
 * @license GPLv3
 */
!function (e) {
  if (true) module.exports = e();else { var t; }
}(function () {
  var e, t, s;
  return function () {
    function e(t, s, l) {
      function i(r, a) {
        if (!s[r]) {
          if (!t[r]) {
            var d = undefined;
            if (!a && d) return require(r, !0);
            if (o) return o(r, !0);
            var n = new Error("Cannot find module '" + r + "'");
            throw n.code = "MODULE_NOT_FOUND", n;
          }

          var u = s[r] = {
            exports: {}
          };
          t[r][0].call(u.exports, function (e) {
            return i(t[r][1][e] || e);
          }, u, u.exports, e, t, s, l);
        }

        return s[r].exports;
      }

      for (var o = undefined, r = 0; r < l.length; r++) i(l[r]);

      return i;
    }

    return e;
  }()({
    1: [function (t, s, l) {
      !function (t, s) {
        if ("function" == typeof e && e.amd) e(["exports"], s);else if (void 0 !== l) s(l);else {
          var i = {
            exports: {}
          };
          s(i.exports), t.lgUtils = i.exports;
        }
      }(this, function (e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = {
          getAttribute: function e(t, s) {
            return t[s];
          },
          setAttribute: function e(t, s, l) {
            t[s] = l;
          },
          wrap: function e(t, s) {
            if (t) {
              var l = document.createElement("div");
              l.className = s, t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t), l.appendChild(t);
            }
          },
          addClass: function e(t, s) {
            t && (t.classList ? t.classList.add(s) : t.className += " " + s);
          },
          removeClass: function e(t, s) {
            t && (t.classList ? t.classList.remove(s) : t.className = t.className.replace(new RegExp("(^|\\b)" + s.split(" ").join("|") + "(\\b|$)", "gi"), " "));
          },
          hasClass: function e(t, s) {
            return t.classList ? t.classList.contains(s) : new RegExp("(^| )" + s + "( |$)", "gi").test(t.className);
          },
          setVendor: function e(t, s, l) {
            t && (t.style[s.charAt(0).toLowerCase() + s.slice(1)] = l, t.style["webkit" + s] = l, t.style["moz" + s] = l, t.style["ms" + s] = l, t.style["o" + s] = l);
          },
          trigger: function e(t, s) {
            var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;

            if (t) {
              var i = new CustomEvent(s, {
                detail: l
              });
              t.dispatchEvent(i);
            }
          },
          Listener: {
            uid: 0
          },
          on: function e(s, l, i) {
            var o = this;
            s && l.split(" ").forEach(function (e) {
              var l = o.getAttribute(s, "lg-event-uid") || "";
              t.Listener.uid++, l += "&" + t.Listener.uid, o.setAttribute(s, "lg-event-uid", l), t.Listener[e + t.Listener.uid] = i, s.addEventListener(e.split(".")[0], i, !1);
            });
          },
          off: function e(s, l) {
            if (s) {
              var i = this.getAttribute(s, "lg-event-uid");

              if (i) {
                i = i.split("&");

                for (var o = 0; o < i.length; o++) if (i[o]) {
                  var r = l + i[o];
                  if ("." === r.substring(0, 1)) for (var a in t.Listener) t.Listener.hasOwnProperty(a) && a.split(".").indexOf(r.split(".")[1]) > -1 && (s.removeEventListener(a.split(".")[0], t.Listener[a]), this.setAttribute(s, "lg-event-uid", this.getAttribute(s, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[a]);else s.removeEventListener(r.split(".")[0], t.Listener[r]), this.setAttribute(s, "lg-event-uid", this.getAttribute(s, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[r];
                }
              }
            }
          },
          param: function e(t) {
            return Object.keys(t).map(function (e) {
              return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
            }).join("&");
          }
        };
        e.default = t;
      });
    }, {}],
    2: [function (t, s, l) {
      !function (s, i) {
        if ("function" == typeof e && e.amd) e(["./lg-utils"], i);else if (void 0 !== l) i(t("./lg-utils"));else {
          var o = {
            exports: {}
          };
          i(s.lgUtils), s.lightgallery = o.exports;
        }
      }(this, function (e) {
        "use strict";

        function t(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        function s(e, t) {
          if (this.el = e, this.s = i({}, o, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this;
        }

        var l = t(e),
            i = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];

            for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (e[l] = s[l]);
          }

          return e;
        };

        !function () {
          function e(e, t) {
            t = t || {
              bubbles: !1,
              cancelable: !1,
              detail: void 0
            };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
          }

          if ("function" == typeof window.CustomEvent) return !1;
          e.prototype = window.Event.prototype, window.CustomEvent = e;
        }(), window.utils = l.default, window.lgData = {
          uid: 0
        }, window.lgModules = {};
        var o = {
          mode: "lg-slide",
          cssEasing: "ease",
          easing: "linear",
          speed: 600,
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 150,
          hideBarsDelay: 6e3,
          useLeft: !1,
          ariaLabelledby: "",
          ariaDescribedby: "",
          closable: !0,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          controls: !0,
          slideEndAnimatoin: !0,
          hideControlOnEnd: !1,
          mousewheel: !1,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 1,
          showAfterLoad: !0,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: !1,
          iframeMaxWidth: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          galleryId: 1
        };
        s.prototype.init = function () {
          var e = this;
          e.s.preload > e.items.length && (e.s.preload = e.items.length);
          var t = window.location.hash;
          if (t.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), l.default.addClass(document.body, "lg-from-hash"), l.default.hasClass(document.body, "lg-on") || (l.default.addClass(document.body, "lg-on"), setTimeout(function () {
            e.build(e.index);
          }))), e.s.dynamic) l.default.trigger(this.el, "onBeforeOpen"), e.index = e.s.index || 0, l.default.hasClass(document.body, "lg-on") || (l.default.addClass(document.body, "lg-on"), setTimeout(function () {
            e.build(e.index);
          }));else for (var s = 0; s < e.items.length; s++) !function (t) {
            l.default.on(e.items[t], "click.lgcustom", function (s) {
              s.preventDefault(), l.default.trigger(e.el, "onBeforeOpen"), e.index = e.s.index || t, l.default.hasClass(document.body, "lg-on") || (e.build(e.index), l.default.addClass(document.body, "lg-on"));
            });
          }(s);
        }, s.prototype.build = function (e) {
          var t = this;
          t.structure();

          for (var s in window.lgModules) t.modules[s] = new window.lgModules[s](t.el);

          t.slide(e, !1, !1), t.s.keyPress && t.keyPress(), t.items.length > 1 && (t.arrow(), setTimeout(function () {
            t.enableDrag(), t.enableSwipe();
          }, 50), t.s.mousewheel && t.mousewheel()), t.counter(), t.closeGallery(), l.default.trigger(t.el, "onAfterOpen"), l.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", function () {
            l.default.removeClass(t.outer, "lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout(function () {
              l.default.addClass(t.outer, "lg-hide-items");
            }, t.s.hideBarsDelay);
          });
        }, s.prototype.structure = function () {
          var e = "",
              t = "",
              s = 0,
              i = "",
              o,
              r = this;

          for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), l.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), s = 0; s < this.items.length; s++) e += '<div class="lg-item"></div>';

          if (this.s.controls && this.items.length > 1 && (t = '<div class="lg-actions"><button aria-label="Previous slide" class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button aria-label="Next slide" class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (i = '<div role="status" aria-live="polite" class="lg-sub-html"></div>'), o = '<div tabindex="-1" aria-modal="true" ' + (this.s.ariaLabelledby ? 'aria-labelledby="' + this.s.ariaLabelledby + '"' : "") + " " + (this.s.ariaDescribedby ? 'aria-describedby="' + this.s.ariaDescribedby + '"' : "") + ' role="dialog" class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + e + '</div><div class="lg-toolbar group"><button aria-label="Close gallery" class="lg-close lg-icon"></button></div>' + t + i + "</div></div>", document.body.insertAdjacentHTML("beforeend", o), this.outer = document.querySelector(".lg-outer"), this.outer.focus(), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (l.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : l.default.addClass(this.outer, "lg-use-css3"), r.setTop(), l.default.on(window, "resize.lg orientationchange.lg", function () {
            setTimeout(function () {
              r.setTop();
            }, 100);
          }), l.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? l.default.addClass(this.outer, "lg-css3") : (l.default.addClass(this.outer, "lg-css"), this.s.speed = 0), l.default.addClass(this.outer, this.s.mode), this.s.enableDrag && this.items.length > 1 && l.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && l.default.addClass(this.outer, "lg-show-after-load"), this.doCss()) {
            var a = this.outer.querySelector(".lg-inner");
            l.default.setVendor(a, "TransitionTimingFunction", this.s.cssEasing), l.default.setVendor(a, "TransitionDuration", this.s.speed + "ms");
          }

          setTimeout(function () {
            l.default.addClass(document.querySelector(".lg-backdrop"), "in");
          }), setTimeout(function () {
            l.default.addClass(r.outer, "lg-visible");
          }, this.s.backdropDuration), this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        }, s.prototype.setTop = function () {
          if ("100%" !== this.s.height) {
            var e = window.innerHeight,
                t = (e - parseInt(this.s.height, 10)) / 2,
                s = this.outer.querySelector(".lg");
            e >= parseInt(this.s.height, 10) ? s.style.top = t + "px" : s.style.top = "0px";
          }
        }, s.prototype.doCss = function () {
          return !!function e() {
            var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                s = document.documentElement,
                l = 0;

            for (l = 0; l < t.length; l++) if (t[l] in s.style) return !0;
          }();
        }, s.prototype.isVideo = function (e, t) {
          var s;
          if (s = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"), !e && s) return {
            html5: !0
          };
          var l = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
              i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
              o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
              r = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
          return l ? {
            youtube: l
          } : i ? {
            vimeo: i
          } : o ? {
            dailymotion: o
          } : r ? {
            vk: r
          } : void 0;
        }, s.prototype.counter = function () {
          this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>");
        }, s.prototype.addHtml = function (e) {
          var t = null,
              s;

          if (this.s.dynamic ? t = this.s.dynamicEl[e].subHtml : (s = this.items[e], t = s.getAttribute("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !t && (t = s.getAttribute("title")) && s.querySelector("img") && (t = s.querySelector("img").getAttribute("alt"))), void 0 !== t && null !== t) {
            var i = t.substring(0, 1);
            "." !== i && "#" !== i || (t = this.s.subHtmlSelectorRelative && !this.s.dynamic ? s.querySelector(t).innerHTML : document.querySelector(t).innerHTML);
          } else t = "";

          ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = t : this.___slide[e].insertAdjacentHTML("beforeend", t), void 0 !== t && null !== t && ("" === t ? l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")), l.default.trigger(this.el, "onAfterAppendSubHtml", {
            index: e
          });
        }, s.prototype.preload = function (e) {
          var t = 1,
              s = 1;

          for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++) this.loadContent(e + t, !1, 0);

          for (s = 1; s <= this.s.preload && !(e - s < 0); s++) this.loadContent(e - s, !1, 0);
        }, s.prototype.loadContent = function (e, t, s) {
          var i = this,
              o = !1,
              r,
              a,
              d,
              n,
              u,
              c,
              g,
              f = function e(t) {
            for (var s = [], l = [], i = 0; i < t.length; i++) {
              var o = t[i].split(" ");
              "" === o[0] && o.splice(0, 1), l.push(o[0]), s.push(o[1]);
            }

            for (var r = window.innerWidth, d = 0; d < s.length; d++) if (parseInt(s[d], 10) > r) {
              a = l[d];
              break;
            }
          };

          if (i.s.dynamic) {
            if (i.s.dynamicEl[e].poster && (o = !0, d = i.s.dynamicEl[e].poster), c = i.s.dynamicEl[e].html, a = i.s.dynamicEl[e].src, g = i.s.dynamicEl[e].alt, i.s.dynamicEl[e].responsive) {
              f(i.s.dynamicEl[e].responsive.split(","));
            }

            n = i.s.dynamicEl[e].srcset, u = i.s.dynamicEl[e].sizes;
          } else {
            if (i.items[e].getAttribute("data-poster") && (o = !0, d = i.items[e].getAttribute("data-poster")), c = i.items[e].getAttribute("data-html"), a = i.items[e].getAttribute("href") || i.items[e].getAttribute("data-src"), g = i.items[e].getAttribute("title"), i.items[e].querySelector("img") && (g = g || i.items[e].querySelector("img").getAttribute("alt")), i.items[e].getAttribute("data-responsive")) {
              f(i.items[e].getAttribute("data-responsive").split(","));
            }

            n = i.items[e].getAttribute("data-srcset"), u = i.items[e].getAttribute("data-sizes");
          }

          var h = !1;
          i.s.dynamic ? i.s.dynamicEl[e].iframe && (h = !0) : "true" === i.items[e].getAttribute("data-iframe") && (h = !0);
          var m = i.isVideo(a, e);

          if (!l.default.hasClass(i.___slide[e], "lg-loaded")) {
            if (h) i.___slide[e].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + i.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + a + '"  allowfullscreen="true"></iframe></div></div>');else if (o) {
              var p = "";
              p = m && m.youtube ? "lg-has-youtube" : m && m.vimeo ? "lg-has-vimeo" : "lg-has-html5", i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + d + '" /></div></div>');
            } else m ? (i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.default.trigger(i.el, "hasVideo", {
              index: e,
              src: a,
              html: c
            })) : (g = g ? 'alt="' + g + '"' : "", i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" ' + g + ' src="' + a + '" /></div>'));

            if (l.default.trigger(i.el, "onAferAppendSlide", {
              index: e
            }), r = i.___slide[e].querySelector(".lg-object"), u && r.setAttribute("sizes", u), n) {
              r.setAttribute("srcset", n);

              try {
                picturefill({
                  elements: [r[0]]
                });
              } catch (e) {
                console.error("Make sure you have included Picturefill version 2");
              }
            }

            ".lg-sub-html" !== this.s.appendSubHtmlTo && i.addHtml(e), l.default.addClass(i.___slide[e], "lg-loaded");
          }

          l.default.on(i.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function () {
            var t = 0;
            s && !l.default.hasClass(document.body, "lg-from-hash") && (t = s), setTimeout(function () {
              l.default.addClass(i.___slide[e], "lg-complete"), l.default.trigger(i.el, "onSlideItemLoad", {
                index: e,
                delay: s || 0
              });
            }, t);
          }), m && m.html5 && !o && l.default.addClass(i.___slide[e], "lg-complete"), !0 === t && (l.default.hasClass(i.___slide[e], "lg-complete") ? i.preload(e) : l.default.on(i.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function () {
            i.preload(e);
          }));
        }, s.prototype.slide = function (e, t, s) {
          for (var i = 0, o = 0; o < this.___slide.length; o++) if (l.default.hasClass(this.___slide[o], "lg-current")) {
            i = o;
            break;
          }

          var r = this;

          if (!r.lGalleryOn || i !== e) {
            var a = this.___slide.length,
                d = r.lGalleryOn ? this.s.speed : 0,
                n = !1,
                u = !1;

            if (!r.lgBusy) {
              if (this.s.download) {
                var c;
                c = r.s.dynamic ? !1 !== r.s.dynamicEl[e].downloadUrl && (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src) : "false" !== r.items[e].getAttribute("data-download-url") && (r.items[e].getAttribute("data-download-url") || r.items[e].getAttribute("href") || r.items[e].getAttribute("data-src")), c ? (document.getElementById("lg-download").setAttribute("href", c), l.default.removeClass(r.outer, "lg-hide-download")) : l.default.addClass(r.outer, "lg-hide-download");
              }

              if (l.default.trigger(r.el, "onBeforeSlide", {
                prevIndex: i,
                index: e,
                fromTouch: t,
                fromThumb: s
              }), r.lgBusy = !0, clearTimeout(r.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
                r.addHtml(e);
              }, d), this.arrowDisable(e), t) {
                var g = e - 1,
                    f = e + 1;
                0 === e && i === a - 1 ? (f = 0, g = a - 1) : e === a - 1 && 0 === i && (f = 0, g = a - 1), l.default.removeClass(r.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"), l.default.removeClass(r.outer.querySelector(".lg-current"), "lg-current"), l.default.removeClass(r.outer.querySelector(".lg-next-slide"), "lg-next-slide"), l.default.addClass(r.___slide[g], "lg-prev-slide"), l.default.addClass(r.___slide[f], "lg-next-slide"), l.default.addClass(r.___slide[e], "lg-current");
              } else {
                l.default.addClass(r.outer, "lg-no-trans");

                for (var h = 0; h < this.___slide.length; h++) l.default.removeClass(this.___slide[h], "lg-prev-slide"), l.default.removeClass(this.___slide[h], "lg-next-slide");

                e < i ? (u = !0, 0 !== e || i !== a - 1 || s || (u = !1, n = !0)) : e > i && (n = !0, e !== a - 1 || 0 !== i || s || (u = !0, n = !1)), u ? (l.default.addClass(this.___slide[e], "lg-prev-slide"), l.default.addClass(this.___slide[i], "lg-next-slide")) : n && (l.default.addClass(this.___slide[e], "lg-next-slide"), l.default.addClass(this.___slide[i], "lg-prev-slide")), setTimeout(function () {
                  l.default.removeClass(r.outer.querySelector(".lg-current"), "lg-current"), l.default.addClass(r.___slide[e], "lg-current"), l.default.removeClass(r.outer, "lg-no-trans");
                }, 50);
              }

              r.lGalleryOn ? (setTimeout(function () {
                r.loadContent(e, !0, 0);
              }, this.s.speed + 50), setTimeout(function () {
                r.lgBusy = !1, l.default.trigger(r.el, "onAfterSlide", {
                  prevIndex: i,
                  index: e,
                  fromTouch: t,
                  fromThumb: s
                });
              }, this.s.speed)) : (r.loadContent(e, !0, r.s.backdropDuration), r.lgBusy = !1, l.default.trigger(r.el, "onAfterSlide", {
                prevIndex: i,
                index: e,
                fromTouch: t,
                fromThumb: s
              })), r.lGalleryOn = !0, this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1);
            }
          }
        }, s.prototype.goToNextSlide = function (e) {
          var t = this;
          t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, l.default.trigger(t.el, "onBeforeNextSlide", {
            index: t.index
          }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, l.default.trigger(t.el, "onBeforeNextSlide", {
            index: t.index
          }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (l.default.addClass(t.outer, "lg-right-end"), setTimeout(function () {
            l.default.removeClass(t.outer, "lg-right-end");
          }, 400)));
        }, s.prototype.goToPrevSlide = function (e) {
          var t = this;
          t.lgBusy || (t.index > 0 ? (t.index--, l.default.trigger(t.el, "onBeforePrevSlide", {
            index: t.index,
            fromTouch: e
          }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, l.default.trigger(t.el, "onBeforePrevSlide", {
            index: t.index,
            fromTouch: e
          }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (l.default.addClass(t.outer, "lg-left-end"), setTimeout(function () {
            l.default.removeClass(t.outer, "lg-left-end");
          }, 400)));
        }, s.prototype.keyPress = function () {
          var e = this;
          this.items.length > 1 && l.default.on(window, "keyup.lg", function (t) {
            e.items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
          }), l.default.on(window, "keydown.lg", function (t) {
            !0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), l.default.hasClass(e.outer, "lg-thumb-open") ? l.default.removeClass(e.outer, "lg-thumb-open") : e.destroy());
          });
        }, s.prototype.arrow = function () {
          var e = this;
          l.default.on(this.outer.querySelector(".lg-prev"), "click.lg", function () {
            e.goToPrevSlide();
          }), l.default.on(this.outer.querySelector(".lg-next"), "click.lg", function () {
            e.goToNextSlide();
          });
        }, s.prototype.arrowDisable = function (e) {
          if (!this.s.loop && this.s.hideControlOnEnd) {
            var t = this.outer.querySelector(".lg-next"),
                s = this.outer.querySelector(".lg-prev");
            e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), l.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), l.default.addClass(t, "disabled")), e > 0 ? (s.removeAttribute("disabled"), l.default.removeClass(s, "disabled")) : (s.setAttribute("disabled", "disabled"), l.default.addClass(s, "disabled"));
          }
        }, s.prototype.setTranslate = function (e, t, s) {
          this.s.useLeft ? e.style.left = t : l.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + s + "px, 0px)");
        }, s.prototype.touchMove = function (e, t) {
          var s = t - e;
          Math.abs(s) > 15 && (l.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], s, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + s, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + s, 0));
        }, s.prototype.touchEnd = function (e) {
          var t = this;
          "lg-slide" !== t.s.mode && l.default.addClass(t.outer, "lg-slide");

          for (var s = 0; s < this.___slide.length; s++) l.default.hasClass(this.___slide[s], "lg-current") || l.default.hasClass(this.___slide[s], "lg-prev-slide") || l.default.hasClass(this.___slide[s], "lg-next-slide") || (this.___slide[s].style.opacity = "0");

          setTimeout(function () {
            l.default.removeClass(t.outer, "lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && l.default.trigger(t.el, "onSlideClick");

            for (var s = 0; s < t.___slide.length; s++) t.___slide[s].removeAttribute("style");
          }), setTimeout(function () {
            l.default.hasClass(t.outer, "lg-dragging") || "lg-slide" === t.s.mode || l.default.removeClass(t.outer, "lg-slide");
          }, t.s.speed + 100);
        }, s.prototype.enableSwipe = function () {
          var e = this,
              t = 0,
              s = 0,
              i = !1;

          if (e.s.enableSwipe && e.isTouch && e.doCss()) {
            for (var o = 0; o < e.___slide.length; o++) l.default.on(e.___slide[o], "touchstart.lg", function (s) {
              l.default.hasClass(e.outer, "lg-zoomed") || e.lgBusy || (s.preventDefault(), e.manageSwipeClass(), t = s.targetTouches[0].pageX);
            });

            for (var r = 0; r < e.___slide.length; r++) l.default.on(e.___slide[r], "touchmove.lg", function (o) {
              l.default.hasClass(e.outer, "lg-zoomed") || (o.preventDefault(), s = o.targetTouches[0].pageX, e.touchMove(t, s), i = !0);
            });

            for (var a = 0; a < e.___slide.length; a++) l.default.on(e.___slide[a], "touchend.lg", function () {
              l.default.hasClass(e.outer, "lg-zoomed") || (i ? (i = !1, e.touchEnd(s - t)) : l.default.trigger(e.el, "onSlideClick"));
            });
          }
        }, s.prototype.enableDrag = function () {
          var e = this,
              t = 0,
              s = 0,
              i = !1,
              o = !1;

          if (e.s.enableDrag && !e.isTouch && e.doCss()) {
            for (var r = 0; r < e.___slide.length; r++) l.default.on(e.___slide[r], "mousedown.lg", function (s) {
              l.default.hasClass(e.outer, "lg-zoomed") || (l.default.hasClass(s.target, "lg-object") || l.default.hasClass(s.target, "lg-video-play")) && (s.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = s.pageX, i = !0, e.outer.scrollLeft += 1, e.outer.scrollLeft -= 1, l.default.removeClass(e.outer, "lg-grab"), l.default.addClass(e.outer, "lg-grabbing"), l.default.trigger(e.el, "onDragstart")));
            });

            l.default.on(window, "mousemove.lg", function (r) {
              i && (o = !0, s = r.pageX, e.touchMove(t, s), l.default.trigger(e.el, "onDragmove"));
            }), l.default.on(window, "mouseup.lg", function (r) {
              o ? (o = !1, e.touchEnd(s - t), l.default.trigger(e.el, "onDragend")) : (l.default.hasClass(r.target, "lg-object") || l.default.hasClass(r.target, "lg-video-play")) && l.default.trigger(e.el, "onSlideClick"), i && (i = !1, l.default.removeClass(e.outer, "lg-grabbing"), l.default.addClass(e.outer, "lg-grab"));
            });
          }
        }, s.prototype.manageSwipeClass = function () {
          var e = this.index + 1,
              t = this.index - 1,
              s = this.___slide.length;
          this.s.loop && (0 === this.index ? t = s - 1 : this.index === s - 1 && (e = 0));

          for (var i = 0; i < this.___slide.length; i++) l.default.removeClass(this.___slide[i], "lg-next-slide"), l.default.removeClass(this.___slide[i], "lg-prev-slide");

          t > -1 && l.default.addClass(this.___slide[t], "lg-prev-slide"), l.default.addClass(this.___slide[e], "lg-next-slide");
        }, s.prototype.mousewheel = function () {
          var e = this;
          l.default.on(e.outer, "mousewheel.lg", function (t) {
            t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault());
          });
        }, s.prototype.closeGallery = function () {
          var e = this,
              t = !1;
          l.default.on(this.outer.querySelector(".lg-close"), "click.lg", function () {
            e.destroy();
          }), e.s.closable && (l.default.on(e.outer, "mousedown.lg", function (e) {
            t = !!(l.default.hasClass(e.target, "lg-outer") || l.default.hasClass(e.target, "lg-item") || l.default.hasClass(e.target, "lg-img-wrap"));
          }), l.default.on(e.outer, "mouseup.lg", function (s) {
            (l.default.hasClass(s.target, "lg-outer") || l.default.hasClass(s.target, "lg-item") || l.default.hasClass(s.target, "lg-img-wrap") && t) && (l.default.hasClass(e.outer, "lg-dragging") || e.destroy());
          }));
        }, s.prototype.destroy = function (e) {
          var t = this;

          if (e || l.default.trigger(t.el, "onBeforeClose"), document.body.scrollTop = t.prevScrollTop, document.documentElement.scrollTop = t.prevScrollTop, e) {
            if (!t.s.dynamic) for (var s = 0; s < this.items.length; s++) l.default.off(this.items[s], ".lg"), l.default.off(this.items[s], ".lgcustom");
            var i = t.el.getAttribute("lg-uid");
            delete window.lgData[i], t.el.removeAttribute("lg-uid");
          }

          l.default.off(this.el, ".lgtm");

          for (var o in window.lgModules) t.modules[o] && t.modules[o].destroy(e);

          this.lGalleryOn = !1, clearTimeout(t.hideBartimeout), this.hideBartimeout = !1, l.default.off(window, ".lg"), l.default.removeClass(document.body, "lg-on"), l.default.removeClass(document.body, "lg-from-hash"), t.outer && l.default.removeClass(t.outer, "lg-visible"), l.default.removeClass(document.querySelector(".lg-backdrop"), "in"), setTimeout(function () {
            try {
              t.outer && t.outer.parentNode.removeChild(t.outer), document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")), e || l.default.trigger(t.el, "onCloseAfter"), t.el.focus();
            } catch (e) {}
          }, t.s.backdropDuration + 50);
        }, window.lightGallery = function (e, t) {
          if (e) try {
            if (e.getAttribute("lg-uid")) try {
              window.lgData[e.getAttribute("lg-uid")].init();
            } catch (e) {
              console.error("lightGallery has not initiated properly");
            } else {
              var l = "lg" + window.lgData.uid++;
              window.lgData[l] = new s(e, t), e.setAttribute("lg-uid", l);
            }
          } catch (e) {
            console.error("lightGallery has not initiated properly");
          }
        };
      });
    }, {
      "./lg-utils": 1
    }]
  }, {}, [2])(2);
});

/***/ }),

/***/ "./source/js/vendor/picturefill.js":
/*!*****************************************!*\
  !*** ./source/js/vendor/picturefill.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */

/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function (e) {
  var t,
      s,
      r,
      i,
      n,
      c,
      a,
      u = navigator.userAgent;
  e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (s = document.createElement("source"), r = function (e) {
    var t,
        r,
        i = e.parentNode;
    "PICTURE" === i.nodeName.toUpperCase() ? (t = s.cloneNode(), i.insertBefore(t, i.firstElementChild), setTimeout(function () {
      i.removeChild(t);
    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, r = e.sizes, e.sizes += ",100vw", setTimeout(function () {
      e.sizes = r;
    }));
  }, i = function () {
    var e,
        t = document.querySelectorAll("picture > img, img[srcset][sizes]");

    for (e = 0; e < t.length; e++) r(t[e]);
  }, n = function () {
    clearTimeout(t), t = setTimeout(i, 99);
  }, c = e.matchMedia && matchMedia("(orientation: landscape)"), a = function () {
    n(), c && c.addListener && c.addListener(n);
  }, s.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), n));
}(window),
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function (e, t, s) {
  "use strict";

  var r, i, n;
  t.createElement("picture");

  var c = {},
      a = !1,
      u = function () {},
      o = t.createElement("img"),
      l = o.getAttribute,
      f = o.setAttribute,
      d = o.removeAttribute,
      p = t.documentElement,
      A = {},
      m = {
    algorithm: ""
  },
      h = navigator.userAgent,
      g = /rident/.test(h) || /ecko/.test(h) && h.match(/rv\:(\d+)/) && RegExp.$1 > 35,
      v = "currentSrc",
      w = /\s+\+?\d+(e\d+)?w/,
      S = /(\([^)]+\))?\s*(.+)/,
      x = e.picturefillCFG,
      y = "font-size:100%!important;",
      E = !0,
      z = {},
      b = {},
      T = e.devicePixelRatio,
      C = {
    px: 1,
    in: 96
  },
      R = t.createElement("a"),
      L = !1,
      M = /^[ \t\n\r\u000c]+/,
      P = /^[, \t\n\r\u000c]+/,
      D = /^[^ \t\n\r\u000c]+/,
      B = /[,]+$/,
      I = /^\d+$/,
      U = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      $ = function (e, t, s, r) {
    e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s);
  },
      k = function (e) {
    var t = {};
    return function (s) {
      return s in t || (t[s] = e(s)), t[s];
    };
  };

  function W(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
  }

  var Q,
      G,
      H,
      F,
      N,
      O,
      q,
      j,
      V,
      _,
      K,
      J,
      X,
      Y,
      Z,
      ee,
      te = (Q = /^([\d\.]+)(em|vw|px)$/, G = k(function (e) {
    return "return " + function () {
      for (var e = arguments, t = 0, s = e[0]; (++t in e);) s = s.replace(e[t], e[++t]);

      return s;
    }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
  }), function (e, t) {
    var s;
    if (!(e in z)) if (z[e] = !1, t && (s = e.match(Q))) z[e] = s[1] * C[s[2]];else try {
      z[e] = new Function("e", G(e))(C);
    } catch (e) {}
    return z[e];
  }),
      se = function (e, t) {
    return e.w ? (e.cWidth = c.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e;
  },
      re = function (e) {
    if (a) {
      var s,
          r,
          i,
          n = e || {};

      if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), i = (s = n.elements || c.qsa(n.context || t, n.reevaluate || n.reselect ? c.sel : c.selShort)).length) {
        for (c.setupRun(n), L = !0, r = 0; r < i; r++) c.fillImg(s[r], n);

        c.teardownRun(n);
      }
    }
  };

  function ie(e, t) {
    return e.res - t.res;
  }

  function ne(e, t) {
    var s, r, i;
    if (e && t) for (i = c.parseSet(t), e = c.makeUrl(e), s = 0; s < i.length; s++) if (e === c.makeUrl(i[s].url)) {
      r = i[s];
      break;
    }
    return r;
  }

  e.console && console.warn, v in o || (v = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), c.ns = ("pf" + new Date().getTime()).substr(0, 9), c.supSrcset = "srcset" in o, c.supSizes = "sizes" in o, c.supPicture = !!e.HTMLPictureElement, c.supSrcset && c.supPicture && !c.supSizes && (H = t.createElement("img"), o.srcset = "data:,a", H.src = "data:,a", c.supSrcset = o.complete === H.complete, c.supPicture = c.supSrcset && c.supPicture), c.supSrcset && !c.supSizes ? (F = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", N = t.createElement("img"), O = function () {
    2 === N.width && (c.supSizes = !0), i = c.supSrcset && !c.supSizes, a = !0, setTimeout(re);
  }, N.onload = O, N.onerror = O, N.setAttribute("sizes", "9px"), N.srcset = F + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", N.src = F) : a = !0, c.selShort = "picture>img,img[srcset]", c.sel = c.selShort, c.cfg = m, c.DPR = T || 1, c.u = C, c.types = A, c.setSize = u, c.makeUrl = k(function (e) {
    return R.href = e, R.href;
  }), c.qsa = function (e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : [];
  }, c.matchesMedia = function () {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? c.matchesMedia = function (e) {
      return !e || matchMedia(e).matches;
    } : c.matchesMedia = c.mMQ, c.matchesMedia.apply(this, arguments);
  }, c.mMQ = function (e) {
    return !e || te(e);
  }, c.calcLength = function (e) {
    var t = te(e, !0) || !1;
    return t < 0 && (t = !1), t;
  }, c.supportsType = function (e) {
    return !e || A[e];
  }, c.parseSize = k(function (e) {
    var t = (e || "").match(S);
    return {
      media: t && t[1],
      length: t && t[2]
    };
  }), c.parseSet = function (e) {
    return e.cands || (e.cands = function (e, t) {
      function s(t) {
        var s,
            r = t.exec(e.substring(o));
        if (r) return s = r[0], o += s.length, s;
      }

      var r,
          i,
          n,
          c,
          a,
          u = e.length,
          o = 0,
          l = [];

      function f() {
        var e,
            s,
            n,
            c,
            a,
            u,
            o,
            f,
            d,
            p = !1,
            A = {};

        for (c = 0; c < i.length; c++) u = (a = i[c])[a.length - 1], o = a.substring(0, a.length - 1), f = parseInt(o, 10), d = parseFloat(o), I.test(o) && "w" === u ? ((e || s) && (p = !0), 0 === f ? p = !0 : e = f) : U.test(o) && "x" === u ? ((e || s || n) && (p = !0), d < 0 ? p = !0 : s = d) : I.test(o) && "h" === u ? ((n || s) && (p = !0), 0 === f ? p = !0 : n = f) : p = !0;

        p || (A.url = r, e && (A.w = e), s && (A.d = s), n && (A.h = n), n || s || e || (A.d = 1), 1 === A.d && (t.has1x = !0), A.set = t, l.push(A));
      }

      function d() {
        for (s(M), n = "", c = "in descriptor";;) {
          if (a = e.charAt(o), "in descriptor" === c) {
            if (W(a)) n && (i.push(n), n = "", c = "after descriptor");else {
              if ("," === a) return o += 1, n && i.push(n), void f();
              if ("(" === a) n += a, c = "in parens";else {
                if ("" === a) return n && i.push(n), void f();
                n += a;
              }
            }
          } else if ("in parens" === c) {
            if (")" === a) n += a, c = "in descriptor";else {
              if ("" === a) return i.push(n), void f();
              n += a;
            }
          } else if ("after descriptor" === c) if (W(a)) ;else {
            if ("" === a) return void f();
            c = "in descriptor", o -= 1;
          }
          o += 1;
        }
      }

      for (;;) {
        if (s(P), o >= u) return l;
        r = s(D), i = [], "," === r.slice(-1) ? (r = r.replace(B, ""), f()) : d();
      }
    }(e.srcset, e)), e.cands;
  }, c.getEmValue = function () {
    var e;

    if (!r && (e = t.body)) {
      var s = t.createElement("div"),
          i = p.style.cssText,
          n = e.style.cssText;
      s.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", p.style.cssText = y, e.style.cssText = y, e.appendChild(s), r = s.offsetWidth, e.removeChild(s), r = parseFloat(r, 10), p.style.cssText = i, e.style.cssText = n;
    }

    return r || 16;
  }, c.calcListLength = function (e) {
    if (!(e in b) || m.uT) {
      var t = c.calcLength(function (e) {
        var t,
            s,
            r,
            i,
            n,
            a,
            u,
            o = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

        for (r = (s = function (e) {
          var t,
              s = "",
              r = [],
              i = [],
              n = 0,
              c = 0,
              a = !1;

          function u() {
            s && (r.push(s), s = "");
          }

          function o() {
            r[0] && (i.push(r), r = []);
          }

          for (;;) {
            if ("" === (t = e.charAt(c))) return u(), o(), i;

            if (a) {
              if ("*" === t && "/" === e[c + 1]) {
                a = !1, c += 2, u();
                continue;
              }

              c += 1;
            } else {
              if (W(t)) {
                if (e.charAt(c - 1) && W(e.charAt(c - 1)) || !s) {
                  c += 1;
                  continue;
                }

                if (0 === n) {
                  u(), c += 1;
                  continue;
                }

                t = " ";
              } else if ("(" === t) n += 1;else if (")" === t) n -= 1;else {
                if ("," === t) {
                  u(), o(), c += 1;
                  continue;
                }

                if ("/" === t && "*" === e.charAt(c + 1)) {
                  a = !0, c += 2;
                  continue;
                }
              }

              s += t, c += 1;
            }
          }
        }(e)).length, t = 0; t < r; t++) if (n = (i = s[t])[i.length - 1], u = n, o.test(u) && parseFloat(u) >= 0 || l.test(u) || "0" === u || "-0" === u || "+0" === u) {
          if (a = n, i.pop(), 0 === i.length) return a;
          if (i = i.join(" "), c.matchesMedia(i)) return a;
        }

        return "100vw";
      }(e));
      b[e] = t || C.width;
    }

    return b[e];
  }, c.setRes = function (e) {
    var t;
    if (e) for (var s = 0, r = (t = c.parseSet(e)).length; s < r; s++) se(t[s], e.sizes);
    return t;
  }, c.setRes.res = se, c.applySetCandidate = function (e, t) {
    if (e.length) {
      var s,
          r,
          i,
          n,
          a,
          u,
          o,
          l,
          f,
          d,
          p,
          A,
          h,
          w,
          S,
          x,
          y = t[c.ns],
          E = c.DPR;
      if (u = y.curSrc || t[v], (o = y.curCan || function (e, t, s) {
        var r;
        return !s && t && (s = (s = e[c.ns].sets) && s[s.length - 1]), (r = ne(t, s)) && (t = c.makeUrl(t), e[c.ns].curSrc = t, e[c.ns].curCan = r, r.res || se(r, r.set.sizes)), r;
      }(t, u, e[0].set)) && o.set === e[0].set && ((f = g && !t.complete && o.res - .1 > E) || (o.cached = !0, o.res >= E && (a = o))), !a) for (e.sort(ie), a = e[(n = e.length) - 1], r = 0; r < n; r++) if ((s = e[r]).res >= E) {
        a = e[i = r - 1] && (f || u !== c.makeUrl(s.url)) && (d = e[i].res, p = s.res, A = E, h = e[i].cached, w = void 0, S = void 0, x = void 0, "saveData" === m.algorithm ? d > 2.7 ? x = A + 1 : (S = (p - A) * (w = Math.pow(d - .6, 1.5)), h && (S += .1 * w), x = d + S) : x = A > 1 ? Math.sqrt(d * p) : d, x > A) ? e[i] : s;
        break;
      }
      a && (l = c.makeUrl(a.url), y.curSrc = l, y.curCan = a, l !== u && c.setSrc(t, a), c.setSize(t));
    }
  }, c.setSrc = function (e, t) {
    var s;
    e.src = t.url, "image/svg+xml" === t.set.type && (s = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = s));
  }, c.getSet = function (e) {
    var t,
        s,
        r,
        i = !1,
        n = e[c.ns].sets;

    for (t = 0; t < n.length && !i; t++) if ((s = n[t]).srcset && c.matchesMedia(s.media) && (r = c.supportsType(s.type))) {
      "pending" === r && (s = r), i = s;
      break;
    }

    return i;
  }, c.parseSets = function (e, t, s) {
    var r,
        n,
        a,
        u,
        o = t && "PICTURE" === t.nodeName.toUpperCase(),
        p = e[c.ns];
    (void 0 === p.src || s.src) && (p.src = l.call(e, "src"), p.src ? f.call(e, "data-pfsrc", p.src) : d.call(e, "data-pfsrc")), (void 0 === p.srcset || s.srcset || !c.supSrcset || e.srcset) && (r = l.call(e, "srcset"), p.srcset = r, u = !0), p.sets = [], o && (p.pic = !0, function (e, t) {
      var s,
          r,
          i,
          n,
          a = e.getElementsByTagName("source");

      for (s = 0, r = a.length; s < r; s++) (i = a[s])[c.ns] = !0, (n = i.getAttribute("srcset")) && t.push({
        srcset: n,
        media: i.getAttribute("media"),
        type: i.getAttribute("type"),
        sizes: i.getAttribute("sizes")
      });
    }(t, p.sets)), p.srcset ? (n = {
      srcset: p.srcset,
      sizes: l.call(e, "sizes")
    }, p.sets.push(n), (a = (i || p.src) && w.test(p.srcset || "")) || !p.src || ne(p.src, n) || n.has1x || (n.srcset += ", " + p.src, n.cands.push({
      url: p.src,
      d: 1,
      set: n
    }))) : p.src && p.sets.push({
      srcset: p.src,
      sizes: null
    }), p.curCan = null, p.curSrc = void 0, p.supported = !(o || n && !c.supSrcset || a && !c.supSizes), u && c.supSrcset && !p.supported && (r ? (f.call(e, "data-pfsrcset", r), e.srcset = "") : d.call(e, "data-pfsrcset")), p.supported && !p.srcset && (!p.src && e.src || e.src !== c.makeUrl(p.src)) && (null === p.src ? e.removeAttribute("src") : e.src = p.src), p.parsed = !0;
  }, c.fillImg = function (e, t) {
    var s,
        r = t.reselect || t.reevaluate;
    e[c.ns] || (e[c.ns] = {}), s = e[c.ns], (r || s.evaled !== n) && (s.parsed && !t.reevaluate || c.parseSets(e, e.parentNode, t), s.supported ? s.evaled = n : function (e) {
      var t,
          s = c.getSet(e),
          r = !1;
      "pending" !== s && (r = n, s && (t = c.setRes(s), c.applySetCandidate(t, e))), e[c.ns].evaled = r;
    }(e));
  }, c.setupRun = function () {
    L && !E && T === e.devicePixelRatio || (E = !1, T = e.devicePixelRatio, z = {}, b = {}, c.DPR = T || 1, C.width = Math.max(e.innerWidth || 0, p.clientWidth), C.height = Math.max(e.innerHeight || 0, p.clientHeight), C.vw = C.width / 100, C.vh = C.height / 100, n = [C.height, C.width, T].join("-"), C.em = c.getEmValue(), C.rem = C.em);
  }, c.supPicture ? (re = u, c.fillImg = u) : (X = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, Y = function () {
    var e = t.readyState || "";
    Z = setTimeout(Y, "loading" === e ? 200 : 999), t.body && (c.fillImgs(), (q = q || X.test(e)) && clearTimeout(Z));
  }, Z = setTimeout(Y, t.body ? 9 : 99), ee = p.clientHeight, $(e, "resize", (j = function () {
    E = Math.max(e.innerWidth || 0, p.clientWidth) !== C.width || p.clientHeight !== ee, ee = p.clientHeight, E && c.fillImgs();
  }, V = 99, J = function () {
    var e = new Date() - K;
    e < V ? _ = setTimeout(J, V - e) : (_ = null, j());
  }, function () {
    K = new Date(), _ || (_ = setTimeout(J, V));
  })), $(t, "readystatechange", Y)), c.picturefill = re, c.fillImgs = re, c.teardownRun = u, re._ = c, e.picturefillCFG = {
    pf: c,
    push: function (e) {
      var t = e.shift();
      "function" == typeof c[t] ? c[t].apply(c, e) : (m[t] = e[0], L && c.fillImgs({
        reselect: !0
      }));
    }
  };

  for (; x && x.length;) e.picturefillCFG.push(x.shift());

  e.picturefill = re,  true && "object" == typeof module.exports ? module.exports = re :  true && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return re;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), c.supPicture || (A["image/webp"] = function (t, s) {
    var r = new e.Image();
    return r.onerror = function () {
      A[t] = !1, re();
    }, r.onload = function () {
      A[t] = 1 === r.width, re();
    }, r.src = s, "pending";
  }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);

/***/ }),

/***/ "./source/js/vendor/swiper.js":
/*!************************************!*\
  !*** ./source/js/vendor/swiper.js ***!
  \************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
      }

      return e;
    }).apply(this, arguments);
  }

  function i(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
  }

  function s(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
      void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
    });
  }

  var a = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: {
      blur: function () {},
      nodeName: ""
    },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return {
        initEvent: function () {}
      };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        }
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function r() {
    var e = "undefined" != typeof document ? document : {};
    return s(e, a), e;
  }

  var n = {
    document: a,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {}
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        }
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function l() {
    var e = "undefined" != typeof window ? window : {};
    return s(e, n), e;
  }

  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function p(e, t, i) {
    return (p = h() ? Reflect.construct : function (e, t, i) {
      var s = [null];
      s.push.apply(s, t);
      var a = new (Function.bind.apply(e, s))();
      return i && d(a, i.prototype), a;
    }).apply(null, arguments);
  }

  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (u = function (e) {
      if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
      var i;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, s);
      }

      function s() {
        return p(e, arguments, o(this).constructor);
      }

      return s.prototype = Object.create(e.prototype, {
        constructor: {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(s, e);
    })(e);
  }

  var c = function (e) {
    var t, i;

    function s(t) {
      var i, s, a;
      return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
        get: function () {
          return a;
        },
        set: function (e) {
          a.__proto__ = e;
        }
      }), i;
    }

    return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
  }(u(Array));

  function f(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, f(e)) : t.push(e);
    }), t;
  }

  function v(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function m(e, t) {
    var i = l(),
        s = r(),
        a = [];
    if (!t && e instanceof c) return e;
    if (!e) return new c(a);

    if ("string" == typeof e) {
      var n = e.trim();

      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = s.createElement(o);
        d.innerHTML = n;

        for (var h = 0; h < d.childNodes.length; h += 1) a.push(d.childNodes[h]);
      } else a = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) i.push(s[a]);

        return i;
      }(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) a.push(e);else if (Array.isArray(e)) {
      if (e instanceof c) return e;
      a = e;
    }

    return new c(function (e) {
      for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);

      return t;
    }(a));
  }

  m.fn = c.prototype;
  var g,
      w,
      y,
      b = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

      var s = f(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, s);
      }), this;
    },
    removeClass: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

      var s = f(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, s);
      }), this;
    },
    hasClass: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

      var s = f(t.map(function (e) {
        return e.split(" ");
      }));
      return v(this, function (e) {
        return s.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

      var s = f(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        s.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);

      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);

      return this;
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;

      return this;
    },
    transition: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].style.transition = "string" != typeof e ? e + "ms" : e;

      return this;
    },
    on: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)) r.apply(t, i);else for (var s = m(t).parents(), n = 0; n < s.length; n += 1) m(s[n]).is(a) && r.apply(s[n], i);
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

      for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
        var u = this[p];
        if (a) for (d = 0; d < h.length; d += 1) {
          var c = h[d];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
            listener: r,
            proxyListener: l
          }), u.addEventListener(c, l, n);
        } else for (d = 0; d < h.length; d += 1) {
          var f = h[d];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
            listener: r,
            proxyListener: o
          }), u.addEventListener(f, o, n);
        }
      }

      return this;
    },
    off: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

      for (var l = s.split(" "), o = 0; o < l.length; o += 1) for (var d = l[o], h = 0; h < this.length; h += 1) {
        var p = this[h],
            u = void 0;
        if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length) for (var c = u.length - 1; c >= 0; c -= 1) {
          var f = u[c];
          r && f.listener === r || r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (p.removeEventListener(d, f.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, f.proxyListener, n), u.splice(c, 1));
        }
      }

      return this;
    },
    trigger: function () {
      for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];

      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = a[n], d = 0; d < this.length; d += 1) {
        var h = this[d];

        if (e.CustomEvent) {
          var p = new e.CustomEvent(o, {
            detail: r,
            bubbles: !0,
            cancelable: !0
          });
          h.dom7EventData = i.filter(function (e, t) {
            return t > 0;
          }), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData;
        }
      }

      return this;
    },
    transitionEnd: function (e) {
      var t = this;
      return e && t.on("transitionend", function i(s) {
        s.target === this && (e.call(this, s), t.off("transitionend", i));
      }), this;
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function () {
      var e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        var e = l(),
            t = r(),
            i = this[0],
            s = i.getBoundingClientRect(),
            a = t.body,
            n = i.clientTop || a.clientTop || 0,
            o = i.clientLeft || a.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
        return {
          top: s.top + d - n,
          left: s.left + h - o
        };
      }

      return null;
    },
    css: function (e, t) {
      var i,
          s = l();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) for (var a in e) this[i].style[a] = e[a];

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;

        return this;
      }

      return this;
    },
    each: function (e) {
      return e ? (this.forEach(function (t, i) {
        e.apply(t, [t, i]);
      }), this) : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;

      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;

      return this;
    },
    is: function (e) {
      var t,
          i,
          s = l(),
          a = r(),
          n = this[0];
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (t = m(e), i = 0; i < t.length; i += 1) if (t[i] === n) return !0;

        return !1;
      }

      if (e === a) return n === a;
      if (e === s) return n === s;

      if (e.nodeType || e instanceof c) {
        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === n) return !0;

        return !1;
      }

      return !1;
    },
    index: function () {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);

        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return m([]);

      if (e < 0) {
        var i = t + e;
        return m(i < 0 ? [] : [this[i]]);
      }

      return m([this[e]]);
    },
    append: function () {
      for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
        e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

        for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
          var a = t.createElement("div");

          for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild);
        } else if (e instanceof c) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);else this[s].appendChild(e);
      }

      return this;
    },
    prepend: function (e) {
      var t,
          i,
          s = r();

      for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
        var a = s.createElement("div");

        for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
      } else if (e instanceof c) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);else this[t].insertBefore(e, this[t].childNodes[0]);

      return this;
    },
    next: function (e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
    },
    nextAll: function (e) {
      var t = [],
          i = this[0];
      if (!i) return m([]);

      for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return m(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
      }

      return m([]);
    },
    prevAll: function (e) {
      var t = [],
          i = this[0];
      if (!i) return m([]);

      for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return m(t);
    },
    parent: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));

      return m(t);
    },
    parents: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s;) e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;

      return m(t);
    },
    closest: function (e) {
      var t = this;
      return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);

      return m(t);
    },
    children: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].children, a = 0; a < s.length; a += 1) e && !m(s[a]).is(e) || t.push(s[a]);

      return m(t);
    },
    filter: function (e) {
      return m(v(this, e));
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);

      return this;
    }
  };

  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function x() {
    return Date.now();
  }

  function T(e, t) {
    void 0 === t && (t = "x");
    var i,
        s,
        a,
        r = l(),
        n = r.getComputedStyle(e, null);
    return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
  }

  function C(e) {
    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
  }

  function S() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i) for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
        var n = s[a],
            l = Object.getOwnPropertyDescriptor(i, n);
        void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {}, S(e[n], i[n])) : e[n] = i[n]);
      }
    }

    return e;
  }

  function M(e, t) {
    Object.keys(t).forEach(function (i) {
      C(t[i]) && Object.keys(t[i]).forEach(function (s) {
        "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
      }), e[i] = t[i];
    });
  }

  function z() {
    return g || (g = function () {
      var e = l(),
          t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var i = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, i);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }

  function P(e) {
    return void 0 === e && (e = {}), w || (w = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          i = z(),
          s = l(),
          a = s.navigator.platform,
          r = t || s.navigator.userAgent,
          n = {
        ios: !1,
        android: !1
      },
          o = s.screen.width,
          d = s.screen.height,
          h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          p = r.match(/(iPad).*OS\s([\d_]+)/),
          u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          f = "Win32" === a,
          v = "MacIntel" === a;
      return !p && v && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), v = !1), h && !f && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n;
    }(e)), w;
  }

  function k() {
    return y || (y = function () {
      var e,
          t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), y;
  }

  Object.keys(b).forEach(function (e) {
    m.fn[e] = b[e];
  });
  var $ = {
    name: "resize",
    create: function () {
      var e = this;
      S(e, {
        resize: {
          resizeHandler: function () {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function () {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function (e) {
        var t = l();
        t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
      },
      destroy: function (e) {
        var t = l();
        t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  },
      L = {
    attach: function (e, t) {
      void 0 === t && (t = {});
      var i = l(),
          s = this,
          a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function () {
            s.emit("observerUpdate", e[0]);
          };

          i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
        } else s.emit("observerUpdate", e[0]);
      });
      a.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), s.observer.observers.push(a);
    },
    init: function () {
      if (this.support.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
        this.observer.attach(this.$el[0], {
          childList: this.params.observeSlideChildren
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function () {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      I = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function () {
      M(this, {
        observer: t(t({}, L), {}, {
          observers: []
        })
      });
    },
    on: {
      init: function (e) {
        e.observer.init();
      },
      destroy: function (e) {
        e.observer.destroy();
      }
    }
  };

  function O(e) {
    var t = r(),
        i = l(),
        s = this.touchEventsData,
        a = this.params,
        n = this.touches;

    if (!this.animating || !a.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var d = m(o.target);
      if ("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) if (s.isTouchEvent = "touchstart" === o.type, s.isTouchEvent || !("which" in o) || 3 !== o.which) if (!(!s.isTouchEvent && "button" in o && o.button > 0)) if (!s.isTouched || !s.isMoved) if (!!a.noSwipingClass && "" !== a.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (d = m(e.path[0])), a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
        var h = n.currentX,
            p = n.currentY,
            u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;

        if (!u || !(h <= c || h >= i.screen.width - c)) {
          if (S(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), n.startX = h, n.startY = p, s.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
            var f = !0;
            d.is(s.formElements) && (f = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
            var v = f && this.allowTouchMove && a.touchStartPreventDefault;
            (a.touchStartForcePreventDefault || v) && o.preventDefault();
          }

          this.emit("touchStart", o);
        }
      }
    }
  }

  function A(e) {
    var t = r(),
        i = this.touchEventsData,
        s = this.params,
        a = this.touches,
        n = this.rtlTranslate,
        l = e;

    if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "touchmove" === l.type) {
        var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
            d = "touchmove" === l.type ? o.pageX : l.pageX,
            h = "touchmove" === l.type ? o.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (S(a, {
          startX: d,
          startY: h,
          currentX: d,
          currentY: h
        }), i.touchStartTime = x()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
          if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

        if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
          a.currentX = d, a.currentY = h;
          var p = a.currentX - a.startX,
              u = a.currentY - a.startY;

          if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var c;
            if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
              var f = this.isHorizontal() ? p : u;
              a.diff = f, f *= s.touchRatio, n && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
              var v = !0,
                  g = s.resistanceRatio;

              if (s.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), v && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
              }

              s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: a[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                time: x()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }

  function D(e) {
    var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        l = t.slidesGrid,
        o = t.snapGrid,
        d = e;
    if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var h,
        p = x(),
        u = p - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = x(), E(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (h > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var c = i.velocities.pop(),
              f = i.velocities.pop(),
              v = c.position - f.position,
              m = c.time - f.time;
          t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - c.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var g = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * g,
            y = t.translate + w;
        r && (y = -y);
        var b,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), b = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), b = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var M, z = 0; z < o.length; z += 1) if (o[z] > -y) {
            M = z;
            break;
          }

          y = -(y = Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
        }

        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -y : y) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
            g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();

        s.freeModeMomentumBounce && C ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
            t.setTranslate(b), n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();

      (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
      }

      var A = (h - l[$]) / L,
          D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

      if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
      }
    }
  }

  function G() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }

  function N(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  function B() {
    var e = this.wrapperEl,
        t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }

  var H = !1;

  function X() {}

  var Y = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    nested: !1,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  },
      V = {
    modular: {
      useParams: function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && S(e, s.params);
        });
      },
      useModules: function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
              a = e[i] || {};
          s.on && t.on && Object.keys(s.on).forEach(function (e) {
            t.on(e, s.on[e]);
          }), s.create && s.create.bind(t)(a);
        });
      }
    },
    eventsEmitter: {
      on: function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
        }), s;
      },
      once: function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
          s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;

          for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];

          t.apply(s, r);
        }

        return a.__emitterProxy = t, s.on(e, a, i);
      },
      onAny: function (e, t) {
        if ("function" != typeof e) return this;
        var i = t ? "unshift" : "push";
        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
      },
      offAny: function (e) {
        if (!this.eventsAnyListeners) return this;
        var t = this.eventsAnyListeners.indexOf(e);
        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
      },
      off: function (e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, a) {
            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1);
          });
        }), i) : i;
      },
      emit: function () {
        var e,
            t,
            i,
            s = this;
        if (!s.eventsListeners) return s;

        for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];

        "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
        var l = Array.isArray(e) ? e : e.split(" ");
        return l.forEach(function (e) {
          if (s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function (s) {
            s.apply(i, [e].concat(t));
          }), s.eventsListeners && s.eventsListeners[e]) {
            var a = [];
            s.eventsListeners[e].forEach(function (e) {
              a.push(e);
            }), a.forEach(function (e) {
              e.apply(i, t);
            });
          }
        }), s;
      }
    },
    update: {
      updateSize: function () {
        var e,
            t,
            i = this.$el;
        e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(this, {
          width: e,
          height: t,
          size: this.isHorizontal() ? e : t
        }));
      },
      updateSlides: function () {
        var e = l(),
            t = this.params,
            i = this.$wrapperEl,
            s = this.size,
            a = this.rtlTranslate,
            r = this.wrongRTL,
            n = this.virtual && t.virtual.enabled,
            o = n ? this.virtual.slides.length : this.slides.length,
            d = i.children("." + this.params.slideClass),
            h = n ? this.virtual.slides.length : d.length,
            p = [],
            u = [],
            c = [];

        function f(e, i) {
          return !t.cssMode || i !== d.length - 1;
        }

        var v = t.slidesOffsetBefore;
        "function" == typeof v && (v = t.slidesOffsetBefore.call(this));
        var m = t.slidesOffsetAfter;
        "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
        var g = this.snapGrid.length,
            w = this.snapGrid.length,
            y = t.spaceBetween,
            b = -v,
            E = 0,
            x = 0;

        if (void 0 !== s) {
          var T, C;
          "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), this.virtualSize = -y, a ? d.css({
            marginLeft: "",
            marginTop: ""
          }) : d.css({
            marginRight: "",
            marginBottom: ""
          }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));

          for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
            C = 0;
            var L = d.eq($);

            if (t.slidesPerColumn > 1) {
              var I = void 0,
                  O = void 0,
                  A = void 0;

              if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                    G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                    N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                I = (O = G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) + A * T / z, L.css({
                  "-webkit-box-ordinal-group": I,
                  "-moz-box-ordinal-group": I,
                  "-ms-flex-order": I,
                  "-webkit-order": I,
                  order: I
                });
              } else "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z, (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0, O += 1)) : O = $ - (A = Math.floor($ / P)) * P;

              L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px");
            }

            if ("none" !== L.css("display")) {
              if ("auto" === t.slidesPerView) {
                var B = e.getComputedStyle(L[0], null),
                    H = L[0].style.transform,
                    X = L[0].style.webkitTransform;
                if (H && (L[0].style.transform = "none"), X && (L[0].style.webkitTransform = "none"), t.roundLengths) C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);else if (this.isHorizontal()) {
                  var Y = parseFloat(B.getPropertyValue("width") || 0),
                      V = parseFloat(B.getPropertyValue("padding-left") || 0),
                      F = parseFloat(B.getPropertyValue("padding-right") || 0),
                      R = parseFloat(B.getPropertyValue("margin-left") || 0),
                      W = parseFloat(B.getPropertyValue("margin-right") || 0),
                      q = B.getPropertyValue("box-sizing");
                  if (q && "border-box" === q) C = Y + R + W;else {
                    var j = L[0],
                        _ = j.clientWidth;
                    C = Y + V + F + R + W + (j.offsetWidth - _);
                  }
                } else {
                  var U = parseFloat(B.getPropertyValue("height") || 0),
                      K = parseFloat(B.getPropertyValue("padding-top") || 0),
                      Z = parseFloat(B.getPropertyValue("padding-bottom") || 0),
                      J = parseFloat(B.getPropertyValue("margin-top") || 0),
                      Q = parseFloat(B.getPropertyValue("margin-bottom") || 0),
                      ee = B.getPropertyValue("box-sizing");
                  if (ee && "border-box" === ee) C = U + J + Q;else {
                    var te = L[0],
                        ie = te.clientHeight;
                    C = U + K + Z + J + Q + (te.offsetHeight - ie);
                  }
                }
                H && (L[0].style.transform = H), X && (L[0].style.webkitTransform = X), t.roundLengths && (C = Math.floor(C));
              } else C = (s - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");

              d[$] && (d[$].swiperSlideSize = C), c.push(C), t.centeredSlides ? (b = b + C / 2 + E / 2 + y, 0 === E && 0 !== $ && (b = b - s / 2 - y), 0 === $ && (b = b - s / 2 - y), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), x % t.slidesPerGroup == 0 && p.push(b), u.push(b)) : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(b), u.push(b), b = b + C + y), this.virtualSize += C + y, E = C, x += 1;
            }
          }

          if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }), t.setWrapperSize && (this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          })), t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          }), t.centeredSlides)) {
            M = [];

            for (var se = 0; se < p.length; se += 1) {
              var ae = p[se];
              t.roundLengths && (ae = Math.floor(ae)), p[se] < this.virtualSize + p[0] && M.push(ae);
            }

            p = M;
          }

          if (!t.centeredSlides) {
            M = [];

            for (var re = 0; re < p.length; re += 1) {
              var ne = p[re];
              t.roundLengths && (ne = Math.floor(ne)), p[re] <= this.virtualSize - s && M.push(ne);
            }

            p = M, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
          }

          if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(f).css({
            marginLeft: y + "px"
          }) : d.filter(f).css({
            marginRight: y + "px"
          }) : d.filter(f).css({
            marginBottom: y + "px"
          })), t.centeredSlides && t.centeredSlidesBounds) {
            var le = 0;
            c.forEach(function (e) {
              le += e + (t.spaceBetween ? t.spaceBetween : 0);
            });
            var oe = (le -= t.spaceBetween) - s;
            p = p.map(function (e) {
              return e < 0 ? -v : e > oe ? oe + m : e;
            });
          }

          if (t.centerInsufficientSlides) {
            var de = 0;

            if (c.forEach(function (e) {
              de += e + (t.spaceBetween ? t.spaceBetween : 0);
            }), (de -= t.spaceBetween) < s) {
              var he = (s - de) / 2;
              p.forEach(function (e, t) {
                p[t] = e - he;
              }), u.forEach(function (e, t) {
                u[t] = e + he;
              });
            }
          }

          S(this, {
            slides: d,
            snapGrid: p,
            slidesGrid: u,
            slidesSizesGrid: c
          }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
        }
      },
      updateAutoHeight: function (e) {
        var t,
            i = [],
            s = 0;
        if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
          if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
            var a = this.activeIndex + t;
            if (a > this.slides.length) break;
            i.push(this.slides.eq(a)[0]);
          }
        } else i.push(this.slides.eq(this.activeIndex)[0]);

        for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;
          s = r > s ? r : s;
        }

        s && this.$wrapperEl.css("height", s + "px");
      },
      updateSlidesOffset: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
          var a = -e;
          s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

          for (var r = 0; r < i.length; r += 1) {
            var n = i[r],
                l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
              var o = -(a - n.swiperSlideOffset),
                  d = o + this.slidesSizesGrid[r];
              (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
            }

            n.progress = s ? -l : l;
          }

          this.visibleSlides = m(this.visibleSlides);
        }
      },
      updateProgress: function (e) {
        if (void 0 === e) {
          var t = this.rtlTranslate ? -1 : 1;
          e = this && this.translate && this.translate * t || 0;
        }

        var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            a = this.progress,
            r = this.isBeginning,
            n = this.isEnd,
            l = r,
            o = n;
        0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), S(this, {
          progress: a,
          isBeginning: r,
          isEnd: n
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a);
      },
      updateSlidesClasses: function () {
        var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            r = this.realIndex,
            n = this.virtual && i.virtual.enabled;
        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
        var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
        var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            r = this.params,
            n = this.activeIndex,
            l = this.realIndex,
            o = this.snapIndex,
            d = e;

        if (void 0 === d) {
          for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);

          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }

        if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
          var p = Math.min(r.slidesPerGroupSkip, d);
          t = p + Math.floor((d - p) / r.slidesPerGroup);
        }

        if (t >= a.length && (t = a.length - 1), d !== n) {
          var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
          S(this, {
            snapIndex: t,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
        } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
      },
      updateClickedSlide: function (e) {
        var t = this.params,
            i = m(e.target).closest("." + t.slideClass)[0],
            s = !1;
        if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
        if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
        this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            a = this.$wrapperEl;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        var r = T(a[0], e);
        return i && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            r = this.wrapperEl,
            n = this.progress,
            l = 0,
            o = 0;
        this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
        var d = this.maxTranslate() - this.minTranslate();
        (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, s, a) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
        var r = this,
            n = r.params,
            l = r.wrapperEl;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        var o,
            d = r.minTranslate(),
            h = r.maxTranslate();

        if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
          var p,
              u = r.isHorizontal();
          if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p));else l[u ? "scrollLeft" : "scrollTop"] = -o;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function (e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.params,
            a = this.previousIndex;

        if (!s.cssMode) {
          s.autoHeight && this.updateAutoHeight();
          var r = t;

          if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
            if ("reset" === r) return void this.emit("slideResetTransitionStart");
            this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.previousIndex,
            a = this.params;

        if (this.animating = !1, !a.cssMode) {
          this.setTransition(0);
          var r = t;

          if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
            if ("reset" === r) return void this.emit("slideResetTransitionEnd");
            this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function (e, t, i, s) {
        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");

        if ("string" == typeof e) {
          var a = parseInt(e, 10);
          if (!isFinite(a)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
          e = a;
        }

        var r = this,
            n = e;
        n < 0 && (n = 0);
        var l = r.params,
            o = r.snapGrid,
            d = r.slidesGrid,
            h = r.previousIndex,
            p = r.activeIndex,
            u = r.rtlTranslate,
            c = r.wrapperEl;
        if (r.animating && l.preventInteractionOnTransition) return !1;
        var f = Math.min(r.params.slidesPerGroupSkip, n),
            v = f + Math.floor((n - f) / r.params.slidesPerGroup);
        v >= o.length && (v = o.length - 1), (p || l.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
        var m,
            g = -o[v];
        if (r.updateProgress(g), l.normalizeSlideIndex) for (var w = 0; w < d.length; w += 1) -Math.floor(100 * g) >= Math.floor(100 * d[w]) && (n = w);

        if (r.initialized && n !== p) {
          if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
          if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1;
        }

        if (m = n > p ? "next" : n < p ? "prev" : "reset", u && -g === r.translate || !u && g === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;

        if (l.cssMode) {
          var y,
              b = r.isHorizontal(),
              E = -g;
          if (u && (E = c.scrollWidth - c.offsetWidth - E), 0 === t) c[b ? "scrollLeft" : "scrollTop"] = E;else if (c.scrollTo) c.scrollTo(((y = {})[b ? "left" : "top"] = E, y.behavior = "smooth", y));else c[b ? "scrollLeft" : "scrollTop"] = E;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function (e, t, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var a = e;
        return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
      },
      slideNext: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            a = this.animating,
            r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        return this.slideTo(this.activeIndex + r, e, t, i);
      },
      slidePrev: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            a = this.animating,
            r = this.snapGrid,
            n = this.slidesGrid,
            l = this.rtlTranslate;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        function o(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var d,
            h = o(l ? this.translate : -this.translate),
            p = r.map(function (e) {
          return o(e);
        }),
            u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
        return void 0 === u && s.cssMode && r.forEach(function (e) {
          !u && h >= e && (u = e);
        }), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
      },
      slideReset: function (e, t, i) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function (e, t, i, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
        var a = this.activeIndex,
            r = Math.min(this.params.slidesPerGroupSkip, a),
            n = r + Math.floor((a - r) / this.params.slidesPerGroup),
            l = this.rtlTranslate ? this.translate : -this.translate;

        if (l >= this.snapGrid[n]) {
          var o = this.snapGrid[n];
          l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup);
        } else {
          var d = this.snapGrid[n - 1];
          l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
        }

        return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
      },
      slideToClickedSlide: function () {
        var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            r = t.clickedIndex;

        if (i.loop) {
          if (t.animating) return;
          e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
        } else t.slideTo(r);
      }
    },
    loop: {
      loopCreate: function () {
        var e = this,
            t = r(),
            i = e.params,
            s = e.$wrapperEl;
        s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var a = s.children("." + i.slideClass);

        if (i.loopFillGroupWithBlank) {
          var n = i.slidesPerGroup - a.length % i.slidesPerGroup;

          if (n !== i.slidesPerGroup) {
            for (var l = 0; l < n; l += 1) {
              var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
              s.append(o);
            }

            a = s.children("." + i.slideClass);
          }
        }

        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
        var d = [],
            h = [];
        a.each(function (t, i) {
          var s = m(t);
          i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
        });

        for (var p = 0; p < h.length; p += 1) s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));

        for (var u = d.length - 1; u >= 0; u -= 1) s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
      },
      loopFix: function () {
        this.emit("beforeLoopFix");
        var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            a = this.allowSlidePrev,
            r = this.allowSlideNext,
            n = this.snapGrid,
            l = this.rtlTranslate;
        this.allowSlidePrev = !0, this.allowSlideNext = !0;
        var o = -n[t] - this.getTranslate();
        if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);else if (t >= i.length - s) {
          e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
        }
        this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
      },
      loopDestroy: function () {
        var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function (e) {
        if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          var t = this.el;
          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function () {
        this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function (e) {
        var t = this.$wrapperEl,
            i = this.params;
        if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);else t.append(e);
        i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
      },
      prependSlide: function (e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;

        if ("object" == typeof e && "length" in e) {
          for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);

          a = s + e.length;
        } else i.prepend(e);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1);
      },
      addSlide: function (e, t) {
        var i = this.$wrapperEl,
            s = this.params,
            a = this.activeIndex;
        s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
          for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
            var d = this.slides.eq(o);
            d.remove(), l.unshift(d);
          }

          if ("object" == typeof t && "length" in t) {
            for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);

            n = a > e ? a + t.length : a;
          } else i.append(t);

          for (var p = 0; p < l.length; p += 1) i.append(l[p]);

          s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var a,
            r = s;

        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);

          r = Math.max(r, 0);
        } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function () {
        var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support;
        this.onTouchStart = O.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = D.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = N.bind(this);
        var o = !!t.nested;
        if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);else {
          if (l.touch) {
            var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
              passive: !1,
              capture: o
            } : o), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), H || (e.addEventListener("touchstart", X), H = !0);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
      },
      detachEvents: function () {
        var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support,
            o = !!t.nested;
        if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
          if (l.touch) {
            var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
      }
    },
    breakpoints: {
      setBreakpoint: function () {
        var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            s = void 0 === i ? 0 : i,
            a = this.params,
            r = this.$el,
            n = a.breakpoints;

        if (n && (!n || 0 !== Object.keys(n).length)) {
          var l = this.getBreakpoint(n);

          if (l && this.currentBreakpoint !== l) {
            var o = l in n ? n[l] : void 0;
            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = o[e];
              void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var d = o || this.originalParams,
                h = a.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
            h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
            var u = d.direction && d.direction !== a.direction,
                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
            u && t && this.changeDirection(), S(this.params, d), S(this, {
              allowTouchMove: this.params.allowTouchMove,
              allowSlideNext: this.params.allowSlideNext,
              allowSlidePrev: this.params.allowSlidePrev
            }), this.currentBreakpoint = l, this.emit("_beforeBreakpoint", d), c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
          }
        }
      },
      getBreakpoint: function (e) {
        var t = l();

        if (e) {
          var i = !1,
              s = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var i = parseFloat(e.substr(1));
              return {
                value: t.innerHeight * i,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          s.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var a = 0; a < s.length; a += 1) {
            var r = s[a],
                n = r.point;
            r.value <= t.innerWidth && (i = n);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function () {
        var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
      }
    },
    classes: {
      addClasses: function () {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = this.device,
            r = [];
        r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" ")), this.emitContainerClasses();
      },
      removeClasses: function () {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    },
    images: {
      loadImage: function (e, t, i, s, a, r) {
        var n,
            o = l();

        function d() {
          r && r();
        }

        m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
      },
      preloadImages: function () {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];
          e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      F = {},
      R = function () {
    function t() {
      for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];

      1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = S({}, i), e && !i.el && (i.el = e);
      var n = this;
      n.support = z(), n.device = P({
        userAgent: i.userAgent
      }), n.browser = k(), n.eventsListeners = {}, n.eventsAnyListeners = [], void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
        var t = n.modules[e];

        if (t.params) {
          var s = Object.keys(t.params)[0],
              a = t.params[s];
          if ("object" != typeof a || null === a) return;
          if (!(s in i) || !("enabled" in a)) return;
          !0 === i[s] && (i[s] = {
            enabled: !0
          }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
            enabled: !1
          });
        }
      });
      var l = S({}, Y);
      n.useParams(l), n.params = S({}, l, F, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(function (e) {
        n.on(e, n.params.on[e]);
      }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = m;
      var o = m(n.params.el);

      if (e = o[0]) {
        if (o.length > 1) {
          var d = [];
          return o.each(function (e) {
            var s = S({}, i, {
              el: e
            });
            d.push(new t(s));
          }), d;
        }

        var h, p, u;
        return e.swiper = n, e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
          return o.children(e);
        } : h = o.children("." + n.params.wrapperClass), S(n, {
          $el: o,
          el: e,
          $wrapperEl: h,
          wrapperEl: h[0],
          classNames: [],
          slides: m(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function () {
            return "horizontal" === n.params.direction;
          },
          isVertical: function () {
            return "vertical" === n.params.direction;
          },
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
          rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
          wrongRTL: "-webkit-box" === h.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
            start: p[0],
            move: p[1],
            end: p[2],
            cancel: p[3]
          }, n.touchEventsDesktop = {
            start: u[0],
            move: u[1],
            end: u[2]
          }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: x(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n;
      }
    }

    var i,
        s,
        a,
        r = t.prototype;
    return r.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, r.getSlideClasses = function (e) {
      var t = this;
      return e.className.split(" ").filter(function (e) {
        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
      }).join(" ");
    }, r.emitSlidesClasses = function () {
      var e = this;
      e.params._emitClasses && e.el && e.slides.each(function (t) {
        var i = e.getSlideClasses(t);
        e.emit("_slideClass", t, i);
      });
    }, r.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;

      if (e.centeredSlides) {
        for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));

        for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0));
      } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);

      return r;
    }, r.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, r.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var i = this.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), this.emit("changeDirection"), t && this.update()), this;
    }, r.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit"));
    }, r.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i,
          s = this,
          a = s.params,
          r = s.$el,
          n = s.$wrapperEl,
          l = s.slides;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
        s.off(e);
      }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
        try {
          i[e] = null;
        } catch (e) {}

        try {
          delete i[e];
        } catch (e) {}
      })), s.destroyed = !0), null;
    }, t.extendDefaults = function (e) {
      S(F, e);
    }, t.installModule = function (e) {
      t.prototype.modules || (t.prototype.modules = {});
      var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
      t.prototype.modules[i] = e;
    }, t.use = function (e) {
      return Array.isArray(e) ? (e.forEach(function (e) {
        return t.installModule(e);
      }), t) : (t.installModule(e), t);
    }, i = t, a = [{
      key: "extendedDefaults",
      get: function () {
        return F;
      }
    }, {
      key: "defaults",
      get: function () {
        return Y;
      }
    }], (s = null) && e(i.prototype, s), a && e(i, a), t;
  }();

  Object.keys(V).forEach(function (e) {
    Object.keys(V[e]).forEach(function (t) {
      R.prototype[t] = V[e][t];
    });
  }), R.use([$, I]);
  var W = {
    update: function (e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          h = d.from,
          p = d.to,
          u = d.slides,
          c = d.slidesGrid,
          f = d.renderSlide,
          v = d.offset;
      t.updateActiveIndex();
      var m,
          g,
          w,
          y = t.activeIndex || 0;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, w = a + l);
      var b = Math.max((y || 0) - w, 0),
          E = Math.min((y || 0) + g, u.length - 1),
          x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

      function T() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (S(t.virtual, {
        from: b,
        to: E,
        offset: x,
        slidesGrid: t.slidesGrid
      }), h === b && p === E && !e) return t.slidesGrid !== c && x !== v && t.slides.css(m, x + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: b,
        to: E,
        slides: function () {
          for (var e = [], t = b; t <= E; t += 1) e.push(u[t]);

          return e;
        }()
      }), void (t.params.virtual.renderExternalUpdate && T());
      var C = [],
          M = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = h; z <= p; z += 1) (z < b || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();

      for (var P = 0; P < u.length; P += 1) P >= b && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && C.push(P)));

      M.forEach(function (e) {
        t.$wrapperEl.append(f(u[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(f(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
    },
    renderSlide: function (e, t) {
      var i = this.params.virtual;
      if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
      var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s;
    },
    appendSlide: function (e) {
      if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);
      this.virtual.update(!0);
    },
    prependSlide: function (e) {
      var t = this.activeIndex,
          i = t + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);

        i = t + e.length, s = e.length;
      } else this.virtual.slides.unshift(e);

      if (this.params.virtual.cache) {
        var r = this.virtual.cache,
            n = {};
        Object.keys(r).forEach(function (e) {
          var t = r[e],
              i = t.attr("data-swiper-slide-index");
          i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
        }), this.virtual.cache = n;
      }

      this.virtual.update(!0), this.slideTo(i, 0);
    },
    removeSlide: function (e) {
      if (null != e) {
        var t = this.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        this.virtual.update(!0), this.slideTo(t, 0);
      }
    },
    removeAllSlides: function () {
      this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
    }
  },
      q = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function () {
      M(this, {
        virtual: t(t({}, W), {}, {
          slides: this.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function (e) {
        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");
          var t = {
            watchSlidesProgress: !0
          };
          S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate: function (e) {
        e.params.virtual.enabled && e.virtual.update();
      }
    }
  },
      j = {
    handle: function (e) {
      var t = l(),
          i = r(),
          s = this.rtlTranslate,
          a = e;
      a.originalEvent && (a = a.originalEvent);
      var n = a.keyCode || a.charCode,
          o = this.params.keyboard.pageUpDown,
          d = o && 33 === n,
          h = o && 34 === n,
          p = 37 === n,
          u = 39 === n,
          c = 38 === n,
          f = 40 === n;
      if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && f || h)) return !1;
      if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || f)) {
          var v = !1;
          if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
          var m = t.innerWidth,
              g = t.innerHeight,
              w = this.$el.offset();
          s && (w.left -= this.$el[0].scrollLeft);

          for (var y = [[w.left, w.top], [w.left + this.width, w.top], [w.left, w.top + this.height], [w.left + this.width, w.top + this.height]], b = 0; b < y.length; b += 1) {
            var E = y[b];
            E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (v = !0);
          }

          if (!v) return;
        }

        this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || f) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || f) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n);
      }
    },
    enable: function () {
      var e = r();
      this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function () {
      var e = r();
      this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  },
      _ = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    },
    create: function () {
      M(this, {
        keyboard: t({
          enabled: !1
        }, j)
      });
    },
    on: {
      init: function (e) {
        e.params.keyboard.enabled && e.keyboard.enable();
      },
      destroy: function (e) {
        e.keyboard.enabled && e.keyboard.disable();
      }
    }
  };
  var U = {
    lastScrollTime: x(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event: function () {
      return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = r(),
            t = ("onwheel" in e);

        if (!t) {
          var i = e.createElement("div");
          i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
        }

        return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
      }() ? "wheel" : "mousewheel";
    },
    normalize: function (e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;
      return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: i,
        pixelX: s,
        pixelY: a
      };
    },
    handleMouseEnter: function () {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function () {
      this.mouseEntered = !1;
    },
    handle: function (e) {
      var t = e,
          i = this,
          s = i.params.mousewheel;
      i.params.cssMode && t.preventDefault();
      var a = i.$el;
      if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var r = 0,
          n = i.rtlTranslate ? -1 : 1,
          l = U.normalize(t);
      if (s.forceToAxis) {
        if (i.isHorizontal()) {
          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
          r = -l.pixelX * n;
        } else {
          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
          r = -l.pixelY;
        }
      } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
      if (0 === r) return !0;

      if (s.invert && (r = -r), i.params.freeMode) {
        var o = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r)
        },
            d = i.mousewheel.lastEventBeforeSnap,
            h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;

        if (!h) {
          i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
          var p = i.getTranslate() + r * s.sensitivity,
              u = i.isBeginning,
              c = i.isEnd;

          if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
            var f = i.mousewheel.recentWheelEvents;
            f.length >= 15 && f.shift();
            var v = f.length ? f[f.length - 1] : void 0,
                g = f[0];
            if (f.push(o), v && (o.delta > v.delta || o.direction !== v.direction)) f.splice(0);else if (f.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
              var w = r > 0 ? .8 : .2;
              i.mousewheel.lastEventBeforeSnap = o, f.splice(0), i.mousewheel.timeout = E(function () {
                i.slideToClosest(i.params.speed, !0, void 0, w);
              }, 0);
            }
            i.mousewheel.timeout || (i.mousewheel.timeout = E(function () {
              i.mousewheel.lastEventBeforeSnap = o, f.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
        }
      } else {
        var y = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r),
          raw: e
        },
            b = i.mousewheel.recentWheelEvents;
        b.length >= 2 && b.shift();
        var T = b.length ? b[b.length - 1] : void 0;
        if (b.push(y), T ? (y.direction !== T.direction || y.delta > T.delta || y.time > T.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0;
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    animateSlider: function (e) {
      var t = l();
      return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1));
    },
    releaseScroll: function (e) {
      var t = this.params.mousewheel;

      if (e.direction < 0) {
        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
      } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;

      return !1;
    },
    enable: function () {
      var e = U.event();
      if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    },
    disable: function () {
      var e = U.event();
      if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (!this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    }
  },
      K = {
    update: function () {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    onPrevClick: function (e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function (e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function () {
      var e,
          t,
          i = this.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), S(this.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function () {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      Z = {
    update: function () {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var n,
              l,
              o,
              d = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each(function (e) {
            var s = m(e),
                a = s.index();
            a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else {
            var h = d.eq(i),
                p = h.index();

            if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var u = d.eq(n), c = d.eq(l), f = n; f <= l; f += 1) d.eq(f).addClass(t.bulletActiveClass + "-main");

              if (this.params.loop) {
                if (p >= d.length - t.dynamicMainBullets) {
                  for (var v = t.dynamicMainBullets; v >= 0; v -= 1) d.eq(d.length - v).addClass(t.bulletActiveClass + "-main");

                  d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
          }

          if (t.dynamicBullets) {
            var g = Math.min(d.length, t.dynamicMainBullets + 4),
                w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                y = e ? "right" : "left";
            d.css(this.isHorizontal() ? y : "top", w + "px");
          }
        }

        if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
          var b;
          b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var E = (i + 1) / r,
              x = 1,
              T = 1;
          "horizontal" === b ? x = E : T = E, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function () {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";

        if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";

          i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }

        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function () {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = m(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();
          var i = m(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), S(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function () {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    }
  },
      J = {
    setTranslate: function () {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            l = this.params.scrollbar,
            o = s,
            d = (a - s) * i;
        t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    },
    setTransition: function (e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function () {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
        t[0].style.width = "", t[0].style.height = "";
        var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), S(e, {
          trackSize: a,
          divider: r,
          moveDivider: n,
          dragSize: s
        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    },
    getPointerPosition: function (e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function (e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          l = i.dragStartPos;
      t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
      this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function (e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
      this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function (e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function (e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
      this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = E(function () {
        a.css("opacity", 0), a.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    },
    enableDraggable: function () {
      if (this.params.scrollbar.el) {
        var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            d = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
      }
    },
    disableDraggable: function () {
      if (this.params.scrollbar.el) {
        var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            d = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
      }
    },
    init: function () {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = m(i.el);
        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
        var a = s.find("." + this.params.scrollbar.dragClass);
        0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), S(e, {
          $el: s,
          el: s[0],
          $dragEl: a,
          dragEl: a[0]
        }), i.draggable && e.enableDraggable();
      }
    },
    destroy: function () {
      this.scrollbar.disableDraggable();
    }
  },
      Q = {
    setTransform: function (e, t) {
      var i = this.rtl,
          s = m(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          n = s.attr("data-swiper-parallax-x"),
          l = s.attr("data-swiper-parallax-y"),
          o = s.attr("data-swiper-parallax-scale"),
          d = s.attr("data-swiper-parallax-opacity");

      if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
        var h = d - (d - 1) * (1 - Math.abs(t));
        s[0].style.opacity = h;
      }

      if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");else {
        var p = o - (o - 1) * (1 - Math.abs(t));
        s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")");
      }
    },
    setTranslate: function () {
      var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        e.parallax.setTransform(t, s);
      }), i.each(function (t, i) {
        var r = t.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, r);
        });
      });
    },
    setTransition: function (e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        var i = m(t),
            s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (s = 0), i.transition(s);
      });
    }
  },
      ee = {
    getDistanceBetweenTouches: function (e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    },
    onGestureStart: function (e) {
      var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;

      if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureTouched = !0, a.scaleStart = ee.getDistanceBetweenTouches(e);
      }

      a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
    },
    onGestureChange: function (e) {
      var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;

      if (!t.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureMoved = !0, a.scaleMove = ee.getDistanceBetweenTouches(e);
      }

      a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
    },
    onGestureEnd: function (e) {
      var t = this.device,
          i = this.support,
          s = this.params.zoom,
          a = this.zoom,
          r = a.gesture;

      if (!i.gestures) {
        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
        a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
      }

      r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0));
    },
    onTouchStart: function (e) {
      var t = this.device,
          i = this.zoom,
          s = i.gesture,
          a = i.image;
      s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function (e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var r = s.width * t.scale,
            n = s.height * t.scale;

        if (!(r < i.slideWidth && n < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function () {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
        i.isTouched = !1, i.isMoved = !1;
        var a = 300,
            r = 300,
            n = s.x * a,
            l = i.currentX + n,
            o = s.y * r,
            d = i.currentY + o;
        0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
        var h = Math.max(a, r);
        i.currentX = l, i.currentY = d;
        var p = i.width * e.scale,
            u = i.height * e.scale;
        i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    },
    onTransitionEnd: function () {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    },
    toggle: function (e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t.in(e);
    },
    in: function (e) {
      var t,
          i,
          s,
          a,
          r,
          n,
          l,
          o,
          d,
          h,
          p,
          u,
          c,
          f,
          v,
          m,
          g = this.zoom,
          w = this.params.zoom,
          y = g.gesture,
          b = g.image;
      (y.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? y.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : y.$slideEl = this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === b.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = b.touchesStart.x, i = b.touchesStart.y), g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (v = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, s = y.$slideEl.offset().left + v / 2 - t, a = y.$slideEl.offset().top + m / 2 - i, l = y.$imageEl[0].offsetWidth, o = y.$imageEl[0].offsetHeight, d = l * g.scale, h = o * g.scale, c = -(p = Math.min(v / 2 - d / 2, 0)), f = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > f && (n = f)) : (r = 0, n = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
    },
    out: function () {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
      i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    },
    toggleGestures: function (e) {
      var t = this.zoom,
          i = t.slideSelector,
          s = t.passiveListener;
      this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
    },
    enableGestures: function () {
      this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
    },
    disableGestures: function () {
      this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
    },
    enable: function () {
      var e = this.support,
          t = this.zoom;

      if (!t.enabled) {
        t.enabled = !0;
        var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !e.passiveListener || {
          passive: !1,
          capture: !0
        },
            a = "." + this.params.slideClass;
        this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s);
      }
    },
    disable: function () {
      var e = this.zoom;

      if (e.enabled) {
        var t = this.support;
        this.zoom.enabled = !1;
        var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !t.passiveListener || {
          passive: !1,
          capture: !0
        },
            a = "." + this.params.slideClass;
        t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s);
      }
    }
  },
      te = {
    loadInSlide: function (e, t) {
      void 0 === t && (t = !0);
      var i = this,
          s = i.params.lazy;

      if (void 0 !== e && 0 !== i.slides.length) {
        var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
        !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(function (e) {
          var r = m(e);
          r.addClass(s.loadingClass);
          var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              h = r.parent("picture");
          i.loadImage(r[0], l || n, o, d, !1, function () {
            if (null != i && i && (!i || i.params) && !i.destroyed) {
              if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                var t = m(e);
                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
              }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                var e = a.attr("data-swiper-slide-index");

                if (a.hasClass(i.params.slideDuplicateClass)) {
                  var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                  i.lazy.loadInSlide(p.index(), !1);
                } else {
                  var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  i.lazy.loadInSlide(u.index(), !1);
                }
              }

              i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight();
            }
          }), i.emit("lazyImageLoad", a[0], r[0]);
        });
      }
    },
    load: function () {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          n = i.lazy,
          l = i.slidesPerView;

      function o(e) {
        if (r) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (s[e]) return !0;

        return !1;
      }

      function d(e) {
        return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
        var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
        e.lazy.loadInSlide(i);
      });else if (l > 1) for (var h = a; h < a + l; h += 1) o(h) && e.lazy.loadInSlide(h);else e.lazy.loadInSlide(a);
      if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), f = Math.max(a - Math.max(u, p), 0), v = a + l; v < c; v += 1) o(v) && e.lazy.loadInSlide(v);

        for (var g = f; g < a; g += 1) o(g) && e.lazy.loadInSlide(g);
      } else {
        var w = t.children("." + i.slideNextClass);
        w.length > 0 && e.lazy.loadInSlide(d(w));
        var y = t.children("." + i.slidePrevClass);
        y.length > 0 && e.lazy.loadInSlide(d(y));
      }
    }
  },
      ie = {
    LinearSpline: function (e, t) {
      var i,
          s,
          a,
          r,
          n,
          l = function (e, t) {
        for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;

        return i;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function (e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid));
    },
    setTranslate: function (e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control,
          n = a.constructor;

      function l(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;
        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof n && l(r[o]);else r instanceof n && t !== r && l(r);
    },
    setTransition: function (e, t) {
      var i,
          s = this,
          a = s.constructor,
          r = s.controller.control;

      function n(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof a && n(r[i]);else r instanceof a && t !== r && n(r);
    }
  },
      se = {
    getRandomNumber: function (e) {
      void 0 === e && (e = 16);
      return "x".repeat(e).replace(/x/g, function () {
        return Math.round(16 * Math.random()).toString(16);
      });
    },
    makeElFocusable: function (e) {
      return e.attr("tabIndex", "0"), e;
    },
    makeElNotFocusable: function (e) {
      return e.attr("tabIndex", "-1"), e;
    },
    addElRole: function (e, t) {
      return e.attr("role", t), e;
    },
    addElRoleDescription: function (e, t) {
      return e.attr("aria-role-description", t), e;
    },
    addElControls: function (e, t) {
      return e.attr("aria-controls", t), e;
    },
    addElLabel: function (e, t) {
      return e.attr("aria-label", t), e;
    },
    addElId: function (e, t) {
      return e.attr("id", t), e;
    },
    addElLive: function (e, t) {
      return e.attr("aria-live", t), e;
    },
    disableEl: function (e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function (e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function (e) {
      var t = this.params.a11y;

      if (13 === e.keyCode) {
        var i = m(e.target);
        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify: function (e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function () {
      if (!this.params.loop && this.navigation) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
        i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
      }
    },
    updatePagination: function () {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i) {
        var s = m(i);
        e.a11y.makeElFocusable(s), e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)));
      });
    },
    init: function () {
      var e = this,
          t = e.params.a11y;
      e.$el.append(e.a11y.liveRegion);
      var i = e.$el;
      t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
      var s,
          a,
          r,
          n = e.$wrapperEl,
          l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
      e.a11y.addElId(n, l), s = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(n, s), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), "group"), e.slides.each(function (t) {
        var i = m(t);
        e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length);
      }), e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(a, t.nextSlideMessage), e.a11y.addElControls(a, l)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, l)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
    },
    destroy: function () {
      var e, t;
      this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }
  },
      ae = {
    init: function () {
      var e = l();

      if (this.params.history) {
        if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
        var t = this.history;
        t.initialized = !0, t.paths = ae.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState));
      }
    },
    destroy: function () {
      var e = l();
      this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function () {
      this.history.paths = ae.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function (e) {
      var t = l(),
          i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          s = i.length;
      return {
        key: i[s - 2],
        value: i[s - 1]
      };
    },
    setHistory: function (e, t) {
      var i = l();

      if (this.history.initialized && this.params.history.enabled) {
        var s;
        s = this.params.url ? new URL(this.params.url) : i.location;
        var a = this.slides.eq(t),
            r = ae.slugify(a.attr("data-history"));
        s.pathname.includes(e) || (r = e + "/" + r);
        var n = i.history.state;
        n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
          value: r
        }, null, r) : i.history.pushState({
          value: r
        }, null, r));
      }
    },
    slugify: function (e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function (e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);

        if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();
          this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    }
  },
      re = {
    onHashCange: function () {
      var e = r();
      this.emit("hashChange");
      var t = e.location.hash.replace("#", "");

      if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
        if (void 0 === i) return;
        this.slideTo(i);
      }
    },
    setHash: function () {
      var e = l(),
          t = r();
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || 0), this.emit("hashSet");else {
        var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        t.location.hash = s || "", this.emit("hashSet");
      }
    },
    init: function () {
      var e = r(),
          t = l();

      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;
        var i = e.location.hash.replace("#", "");
        if (i) for (var s = 0, a = this.slides.length; s < a; s += 1) {
          var n = this.slides.eq(s);

          if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
            var o = n.index();
            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }
        this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange);
      }
    },
    destroy: function () {
      var e = l();
      this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      ne = {
    run: function () {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
        var t;
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
      }, i);
    },
    start: function () {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    },
    stop: function () {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    },
    pause: function (e) {
      this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
    },
    onVisibilityChange: function () {
      var e = r();
      "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1);
    },
    onTransitionEnd: function (e) {
      this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
    }
  },
      le = {
    setTranslate: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
        this.params.virtualTranslate || (s -= this.translate);
        var a = 0;
        this.isHorizontal() || (a = s, s = 0);
        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: r
        }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    },
    setTransition: function (e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;

      if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;
        i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
          }
        });
      }
    }
  },
      oe = {
    setTranslate: function () {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          n = this.rtlTranslate,
          l = this.size,
          o = this.browser,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          u = 0;
      d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: a + "px"
      })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), t.append(e)));

      for (var c = 0; c < s.length; c += 1) {
        var f = s.eq(c),
            v = c;
        p && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
        var g = 90 * v,
            w = Math.floor(g / 360);
        n && (g = -g, w = Math.floor(-g / 360));
        var y = Math.max(Math.min(f[0].progress, 1), -1),
            b = 0,
            E = 0,
            x = 0;
        v % 4 == 0 ? (b = 4 * -w * l, x = 0) : (v - 1) % 4 == 0 ? (b = 0, x = 4 * -w * l) : (v - 2) % 4 == 0 ? (b = l + 4 * w * l, x = l) : (v - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * w), n && (b = -b), h || (E = b, b = 0);
        var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + b + "px, " + E + "px, " + x + "px)";

        if (y <= 1 && y > -1 && (u = 90 * v + 90 * y, n && (u = 90 * -v - 90 * y)), f.transform(T), d.slideShadows) {
          var C = h ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              S = h ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
          0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), f.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), f.append(S)), C.length && (C[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
            P = d.shadowScale,
            k = d.shadowScale / z,
            $ = d.shadowOffset;
        e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)");
      }
      var L = o.isSafari || o.isWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)");
    },
    setTransition: function (e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  },
      de = {
    setTranslate: function () {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var s = e.eq(i),
            a = s[0].progress;
        this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
        var r = -180 * a,
            n = 0,
            l = -s[0].swiperSlideOffset,
            o = 0;

        if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
          var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0));
        }

        s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
      }
    },
    setTransition: function (e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;

      if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]);
          }
        });
      }
    }
  },
      he = {
    setTranslate: function () {
      for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
        var u = i.eq(h),
            c = s[h],
            f = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
            v = r ? o * f : 0,
            g = r ? 0 : o * f,
            w = -d * Math.abs(f),
            y = a.stretch;
        "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(a.stretch) / 100 * c);
        var b = r ? 0 : y * f,
            E = r ? y * f : 0,
            x = 1 - (1 - a.scale) * Math.abs(f);
        Math.abs(E) < .001 && (E = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
        var T = "translate3d(" + E + "px," + b + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg) scale(" + x + ")";

        if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(f)), a.slideShadows) {
          var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
              S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
          0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = f > 0 ? f : 0), S.length && (S[0].style.opacity = -f > 0 ? -f : 0);
        }
      }
    },
    setTransition: function (e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      pe = {
    init: function () {
      var e = this.params.thumbs;
      if (this.thumbs.initialized) return !1;
      this.thumbs.initialized = !0;
      var t = this.constructor;
      return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, S(this.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), S(this.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0;
    },
    onThumbClick: function () {
      var e = this.thumbs.swiper;

      if (e) {
        var t = e.clickedIndex,
            i = e.clickedSlide;

        if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
          var s;

          if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
            var a = this.activeIndex;
            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
            var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
          }

          this.slideTo(s);
        }
      }
    },
    update: function (e) {
      var t = this.thumbs.swiper;

      if (t) {
        var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;

        if (this.realIndex !== t.realIndex || a) {
          var r,
              n,
              l = t.activeIndex;

          if (t.params.loop) {
            t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
            var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
            r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev";
          } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";

          a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
        }

        var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var u = 0; u < h; u += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);else for (var c = 0; c < h; c += 1) t.slides.eq(this.realIndex + c).addClass(p);
      }
    }
  },
      ue = [q, _, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    },
    create: function () {
      M(this, {
        mousewheel: {
          enabled: !1,
          lastScrollTime: x(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          enable: U.enable,
          disable: U.disable,
          handle: U.handle,
          handleMouseEnter: U.handleMouseEnter,
          handleMouseLeave: U.handleMouseLeave,
          animateSlider: U.animateSlider,
          releaseScroll: U.releaseScroll
        }
      });
    },
    on: {
      init: function (e) {
        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
      },
      destroy: function (e) {
        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function () {
      M(this, {
        navigation: t({}, K)
      });
    },
    on: {
      init: function (e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function (e) {
        e.navigation.update();
      },
      fromEdge: function (e) {
        e.navigation.update();
      },
      destroy: function (e) {
        e.navigation.destroy();
      },
      click: function (e, t) {
        var i,
            s = e.navigation,
            a = s.$nextEl,
            r = s.$prevEl;
        !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass));
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (e) {
          return e;
        },
        formatFractionTotal: function (e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function () {
      M(this, {
        pagination: t({
          dynamicBulletIndex: 0
        }, Z)
      });
    },
    on: {
      init: function (e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function (e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function (e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function (e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function (e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function (e) {
        e.pagination.destroy();
      },
      click: function (e, t) {
        e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function () {
      M(this, {
        scrollbar: t({
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }, J)
      });
    },
    on: {
      init: function (e) {
        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
      },
      update: function (e) {
        e.scrollbar.updateSize();
      },
      resize: function (e) {
        e.scrollbar.updateSize();
      },
      observerUpdate: function (e) {
        e.scrollbar.updateSize();
      },
      setTranslate: function (e) {
        e.scrollbar.setTranslate();
      },
      setTransition: function (e, t) {
        e.scrollbar.setTransition(t);
      },
      destroy: function (e) {
        e.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function () {
      M(this, {
        parallax: t({}, Q)
      });
    },
    on: {
      beforeInit: function (e) {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      init: function (e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTranslate: function (e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTransition: function (e, t) {
        e.params.parallax.enabled && e.parallax.setTransition(t);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function () {
      var e = this;
      M(e, {
        zoom: t({
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        }, ee)
      });
      var i = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function () {
          return i;
        },
        set: function (t) {
          if (i !== t) {
            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
            e.emit("zoomChange", t, s, a);
          }

          i = t;
        }
      });
    },
    on: {
      init: function (e) {
        e.params.zoom.enabled && e.zoom.enable();
      },
      destroy: function (e) {
        e.zoom.disable();
      },
      touchStart: function (e, t) {
        e.zoom.enabled && e.zoom.onTouchStart(t);
      },
      touchEnd: function (e, t) {
        e.zoom.enabled && e.zoom.onTouchEnd(t);
      },
      doubleTap: function (e, t) {
        e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
      },
      transitionEnd: function (e) {
        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
      },
      slideChange: function (e) {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function () {
      M(this, {
        lazy: t({
          initialImageLoaded: !1
        }, te)
      });
    },
    on: {
      beforeInit: function (e) {
        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
      },
      init: function (e) {
        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
      },
      scroll: function (e) {
        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
      },
      resize: function (e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      scrollbarDragMove: function (e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      transitionStart: function (e) {
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function (e) {
        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
      },
      slideChange: function (e) {
        e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function () {
      M(this, {
        controller: t({
          control: this.params.controller.control
        }, ie)
      });
    },
    on: {
      update: function (e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      resize: function (e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      observerUpdate: function (e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      setTranslate: function (e, t, i) {
        e.controller.control && e.controller.setTranslate(t, i);
      },
      setTransition: function (e, t, i) {
        e.controller.control && e.controller.setTransition(t, i);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null
      }
    },
    create: function () {
      M(this, {
        a11y: t(t({}, se), {}, {
          liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        })
      });
    },
    on: {
      afterInit: function (e) {
        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
      },
      toEdge: function (e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      fromEdge: function (e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      paginationUpdate: function (e) {
        e.params.a11y.enabled && e.a11y.updatePagination();
      },
      destroy: function (e) {
        e.params.a11y.enabled && e.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function () {
      M(this, {
        history: t({}, ae)
      });
    },
    on: {
      init: function (e) {
        e.params.history.enabled && e.history.init();
      },
      destroy: function (e) {
        e.params.history.enabled && e.history.destroy();
      },
      transitionEnd: function (e) {
        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
      },
      slideChange: function (e) {
        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function () {
      M(this, {
        hashNavigation: t({
          initialized: !1
        }, re)
      });
    },
    on: {
      init: function (e) {
        e.params.hashNavigation.enabled && e.hashNavigation.init();
      },
      destroy: function (e) {
        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
      },
      transitionEnd: function (e) {
        e.hashNavigation.initialized && e.hashNavigation.setHash();
      },
      slideChange: function (e) {
        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function () {
      M(this, {
        autoplay: t(t({}, ne), {}, {
          running: !1,
          paused: !1
        })
      });
    },
    on: {
      init: function (e) {
        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
      },
      beforeTransitionStart: function (e, t, i) {
        e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
      },
      sliderFirstMove: function (e) {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
      },
      touchEnd: function (e) {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
      },
      destroy: function (e) {
        e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function () {
      M(this, {
        fadeEffect: t({}, le)
      });
    },
    on: {
      beforeInit: function (e) {
        if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function (e) {
        "fade" === e.params.effect && e.fadeEffect.setTranslate();
      },
      setTransition: function (e, t) {
        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function () {
      M(this, {
        cubeEffect: t({}, oe)
      });
    },
    on: {
      beforeInit: function (e) {
        if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function (e) {
        "cube" === e.params.effect && e.cubeEffect.setTranslate();
      },
      setTransition: function (e, t) {
        "cube" === e.params.effect && e.cubeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function () {
      M(this, {
        flipEffect: t({}, de)
      });
    },
    on: {
      beforeInit: function (e) {
        if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function (e) {
        "flip" === e.params.effect && e.flipEffect.setTranslate();
      },
      setTransition: function (e, t) {
        "flip" === e.params.effect && e.flipEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function () {
      M(this, {
        coverflowEffect: t({}, he)
      });
    },
    on: {
      beforeInit: function (e) {
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function (e) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
      },
      setTransition: function (e, t) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function () {
      M(this, {
        thumbs: t({
          swiper: null,
          initialized: !1
        }, pe)
      });
    },
    on: {
      beforeInit: function (e) {
        var t = e.params.thumbs;
        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
      },
      slideChange: function (e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      update: function (e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      resize: function (e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      observerUpdate: function (e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      setTransition: function (e, t) {
        var i = e.thumbs.swiper;
        i && i.setTransition(t);
      },
      beforeDestroy: function (e) {
        var t = e.thumbs.swiper;
        t && e.thumbs.swiperCreated && t && t.destroy();
      }
    }
  }];
  return R.use(ue), R;
});

/***/ }),

/***/ "./source/js/vendor/vidbg.js":
/*!***********************************!*\
  !*** ./source/js/vendor/vidbg.js ***!
  \***********************************/
/***/ (function(module) {

/*!
 * vidbg.js v2.1.0 (https://github.com/blakewilson/vidbg)
 * vidbg.js by Blake Wilson (https://blake.id)
 * @license MIT (https://github.com/blakewilson/vidbg/blob/master/LICENSE)
 */
!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  return function () {
    "use strict";

    var e = {
      293: function (e) {
        var t = "a-f\\d",
            o = "#?[".concat(t, "]{3}[").concat(t, "]?"),
            n = "#?[".concat(t, "]{6}([").concat(t, "]{2})?"),
            r = new RegExp("[^#".concat(t, "]"), "gi"),
            i = new RegExp("^".concat(o, "$|^").concat(n, "$"), "i");

        e.exports = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ("string" != typeof e || r.test(e) || !i.test(e)) throw new TypeError("Expected a valid hex string");
          var o = 1;
          8 === (e = e.replace(/^#/, "")).length && (o = Number.parseInt(e.slice(6, 8), 16) / 255, e = e.slice(0, 6)), 4 === e.length && (o = Number.parseInt(e.slice(3, 4).repeat(2), 16) / 255, e = e.slice(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
          var n = Number.parseInt(e, 16),
              a = n >> 16,
              c = n >> 8 & 255,
              l = 255 & n,
              s = "number" == typeof t.alpha ? t.alpha : o;
          if ("array" === t.format) return [a, c, l, s];

          if ("css" === t.format) {
            var u = 1 === s ? "" : " / ".concat(Number((100 * s).toFixed(2)), "%");
            return "rgb(".concat(a, " ").concat(c, " ").concat(l).concat(u, ")");
          }

          return {
            red: a,
            green: c,
            blue: l,
            alpha: s
          };
        };
      }
    },
        t = {};

    function o(n) {
      var r = t[n];
      if (void 0 !== r) return r.exports;
      var i = t[n] = {
        exports: {}
      };
      return e[n](i, i.exports, o), i.exports;
    }

    o.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return o.d(t, {
        a: t
      }), t;
    }, o.d = function (e, t) {
      for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      });
    }, o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
    var n = {};
    return function () {
      o.d(n, {
        default: function () {
          return d;
        }
      });

      var e,
          t = o(293),
          r = o.n(t),
          i = {
        mp4: null,
        webm: null,
        poster: null,
        overlay: !1,
        overlayColor: "#000",
        overlayAlpha: .3
      },
          a = {
        controls: !1,
        loop: !0,
        muted: !0,
        playsInline: !0
      },
          c = (e = function (t, o) {
        return (e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        })(t, o);
      }, function (t, o) {
        if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");

        function n() {
          this.constructor = t;
        }

        e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
      }),
          l = function (e) {
        function t(t) {
          var o = e.call(this, t) || this;
          return o.name = "InvalidSelectorError", o;
        }

        return c(t, e), t;
      }(Error),
          s = function () {
        var e = function (t, o) {
          return (e = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (e, t) {
            e.__proto__ = t;
          } || function (e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          })(t, o);
        };

        return function (t, o) {
          if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");

          function n() {
            this.constructor = t;
          }

          e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
        };
      }(),
          u = function (e) {
        function t(t) {
          var o = e.call(this, t) || this;
          return o.name = "VideoSourceNotSpecifiedError", o;
        }

        return s(t, e), t;
      }(Error),
          p = function () {
        return (p = Object.assign || function (e) {
          for (var t, o = 1, n = arguments.length; o < n; o++) for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);

          return e;
        }).apply(this, arguments);
      },
          d = function () {
        function e(e, t, o) {
          var n = this;
          if (this.createContainer = function () {
            n.containerEl = document.createElement("div"), n.containerEl.className = "vidbg-container", n.createPoster(), n.el.appendChild(n.containerEl);
          }, this.createOverlay = function () {
            if (n.overlayEl = document.createElement("div"), n.overlayEl.className = "vidbg-overlay", n.options.overlay) {
              var e = r()(n.options.overlayColor, {
                format: "array"
              }),
                  t = [e[0], e[1], e[2], n.options.overlayAlpha];
              n.overlayEl.style.backgroundColor = "rgba(" + t.join(", ") + ")";
            }

            n.containerEl.appendChild(n.overlayEl);
          }, this.createPoster = function () {
            n.options.poster && (n.containerEl.style.backgroundImage = "url(" + n.options.poster + ")");
          }, this.createVideo = function () {
            for (var e in n.videoEl = document.createElement("video"), n.videoEl.addEventListener("playing", n.onPlayEvent), n.attributes) n.videoEl[e] = n.attributes[e];

            if (n.options.mp4) {
              var t = document.createElement("source");
              t.src = n.options.mp4, t.type = "video/mp4", n.videoEl.appendChild(t);
            }

            if (n.options.webm) {
              var o = document.createElement("source");
              o.src = n.options.webm, o.type = "video/webm", n.videoEl.appendChild(o);
            }

            n.containerEl.appendChild(n.videoEl);
            var r = n.videoEl.play();
            void 0 !== r && r.catch(function (e) {
              console.error(e), console.error("Autoplay is not supported. The video element will be removed."), n.removeVideo();
            });
          }, this.onPlayEvent = function () {
            n.resize(), n.videoEl.style.opacity = "1";
          }, this.removeVideo = function () {
            n.videoEl.remove();
          }, this.getVideo = function () {
            return n.videoEl;
          }, this.getEl = function () {
            return n.el;
          }, this.isVideoPlaying = function () {
            return !n.videoEl.paused;
          }, this.playVideo = function () {
            return n.videoEl.play();
          }, this.pauseVideo = function () {
            return n.videoEl.pause();
          }, this.destroy = function () {
            n.containerEl.remove();
          }, this.resize = function () {
            var e = n.containerEl.offsetWidth,
                t = n.containerEl.offsetHeight;
            e / n.videoEl.videoWidth > t / n.videoEl.videoHeight ? (n.videoEl.style.width = e + "px", n.videoEl.style.height = "auto") : (n.videoEl.style.width = "auto", n.videoEl.style.height = t + "px");
          }, !e) throw new l("A selector is required!");
          var c = document.querySelector(e);
          if (!c) throw new l('The selector you specified, "' + e + '", does not exist!');
          if (this.el = c, this.options = p(p({}, i), t), this.attributes = p(p({}, a), o), !this.options.mp4 && !this.options.webm) throw new u("Please provide an mp4, webm, or both");
          this.init();
        }

        return e.prototype.init = function () {
          this.el.style.position = "relative", this.el.style.zIndex = "1", this.createContainer(), this.createVideo(), this.createOverlay(), window.addEventListener("resize", this.resize);
        }, e;
      }();
    }(), n = n.default;
  }();
});

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                });
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                });
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) {
                to = scope_Spectrum.getStep(to);
            }
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state =
                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips, // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize,
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports["default"] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./source/js/_vendor.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./source/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./source/js/_components.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
 // import vars from './_vars';




aos__WEBPACK_IMPORTED_MODULE_3___default().init();
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.order-aside') ? document.body.style.overflowX = 'initial' : document.body.style.overflowX = 'hidden';
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map