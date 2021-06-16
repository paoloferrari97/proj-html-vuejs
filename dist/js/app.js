/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#app",
  data: {
    linkNavbar: ["Home", "Pages", "Course Formats", "Courses", "Demos"],
    socials: ["facebook-square", "twitter", "instagram", "linkedin", "google-plus", "youtube"],
    activities: [{
      name: "Business",
      icon: "fas fa-chart-line"
    }, {
      name: "Design",
      icon: "fas fa-palette"
    }, {
      name: "Development",
      icon: "fas fa-cog"
    }, {
      name: "Lifestyle",
      icon: "far fa-smile"
    }, {
      name: "Office Productivity",
      icon: "fas fa-print"
    }],
    cards: [{
      img: "895786_7b4b_2-272x161.jpg",
      category: "Development",
      title: "The Complete iOS 10 & Swift 3 Developer Course",
      vote: 3,
      fullPrice: "199.99",
      price: "100"
    }, {
      img: "246154_d8b0_3-272x161.jpg",
      category: "Development",
      title: "Web Design for Beginners: Real World Coding in HTML & CSS",
      vote: 4,
      fullPrice: "129.99",
      price: "65"
    }, {
      img: "752950_b773-272x161.jpg",
      category: "Development",
      title: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
      vote: 4,
      fullPrice: "99.99",
      price: "50"
    }, {
      img: "1253188_58f7_2-272x161.jpg",
      category: "Development",
      title: "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
      vote: 3,
      fullPrice: "199.99",
      price: "100"
    }, {
      img: "919872_ed54_6-272x161.jpg",
      category: "Development",
      title: "Android Java Masterclass - Become an App Developer",
      vote: 5,
      fullPrice: "99.99",
      price: "50"
    }, {
      img: "951684_9c1a_2-272x161.jpg",
      category: "Development",
      title: "Xamarin Forms: Build Native Cross-platform Apps with C#",
      vote: 4,
      fullPrice: "189.99",
      price: "95"
    }],
    categories: ["All Categories", "Business", "Design", "Development", "IT & Software", "Lifestyle", "Marketing", "Office Productivity"],
    category_selected: "All Categories",
    cardsSec4: [{
      img: "895786_7b4b_2-272x161.jpg",
      category: "Development",
      title: "The Complete iOS 10 & Swift 3 Developer Course",
      vote: 3,
      fullPrice: "199.99",
      price: "100",
      tags: ["All Categories", "Business", "Development", "IT & Software", "Office Productivity"]
    }, {
      img: "1561458_7f3b-272x161.jpg",
      category: "Design",
      title: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
      vote: 5,
      fullPrice: "199.99",
      price: "100",
      tags: ["All Categories", "Business", "Design", "Development", "IT & Software", "Office Productivity"]
    }, {
      img: "246154_d8b0_3-272x161.jpg",
      category: "Development",
      title: "Web Design for Beginners: Real World Coding in HTML & CSS",
      vote: 4,
      fullPrice: "129.99",
      price: "65",
      tags: ["All Categories", "Business", "Design", "Development", "IT & Software", "Office Productivity"]
    }, {
      img: "1208228_d61c_4-272x161.jpg",
      category: "Design",
      title: "Digitally Painting Light and Color: Amateur to Master",
      vote: 4,
      fullPrice: "139.99",
      price: "70",
      tags: ["All Categories", "Design", "Lifestyle"]
    }, {
      img: "186792_41e4_4-272x161.jpg",
      category: "Arts & Crafts",
      title: "Become an Arabic Calligraphy Artist from Scratch",
      vote: 5,
      fullPrice: "199.99",
      price: "199.99",
      tags: ["All Categories", "Design", "Lifestyle"]
    }, {
      img: "1776542_30b1-272x161.jpg",
      category: "Google",
      title: "Google Searching Ninja!",
      vote: 3,
      fullPrice: "89.99",
      price: "45",
      tags: ["All Categories", "IT & Software", "Lifestyle", "Office Productivity"]
    }, {
      img: "949316_2a64_11-272x161.jpg",
      category: "Arts & Crafts",
      title: "Foundations for Mastering Watercolor Painting",
      vote: 5,
      fullPrice: "19.99",
      price: "10",
      tags: ["All Categories", "Lifestyle"]
    }, {
      img: "366802_6fcc-272x161.jpg",
      category: "Food & Beverage",
      title: "Get Wine-Smart",
      vote: 4,
      fullPrice: "49.99",
      price: "25",
      tags: ["All Categories", "Lifestyle", "Marketing"]
    }, {
      img: "381588_2e6d_4-272x161.jpg",
      category: "Arts & Crafts",
      title: "The Colored Pencil Drawing Course",
      vote: 4,
      fullPrice: "34.99",
      price: "18",
      tags: ["All Categories", "Design", "Lifestyle"]
    }, {
      img: "838056_611a_3-272x161.jpg",
      category: "Arts & Crafts",
      title: "Paint Realistic Watercolor and Botanicals - STUDIO BASICS",
      vote: 3,
      fullPrice: "69.99",
      price: "35",
      tags: ["All Categories", "Design", "Lifestyle"]
    }, {
      img: "1414956_d944_15-272x161.jpg",
      category: "Arts & Crafts",
      title: "Mastering Brushstrokes - Part 1",
      vote: 5,
      fullPrice: "19.99",
      price: "10",
      tags: ["All Categories", "Design", "Lifestyle"]
    }, {
      img: "1109398_4c13-272x161.jpg",
      category: "Arts & Crafts",
      title: "Paint Realistic Watercolor and Botanicals - MAGNOLIAS",
      vote: 5,
      fullPrice: "69.99",
      price: "35",
      tags: ["All Categories", "Design", "Lifestyle"]
    }
    /* {
        img: "752950_b773-272x161.jpg",
        category: "Development",
        title: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
        vote: 4,
        fullPrice: "99.99",
        price: "50",
        tags: ["All Categories", "Development", "IT & Software", "Marketing", "Office Productivity"]
    }, */

    /* {
        img: "1253188_58f7_2-272x161.jpg",
        category: "Development",
        title: "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
        vote: 3,
        fullPrice: "199.99",
        price: "100",
        tags: ["All Categories", "Business", "Design", "Development", "IT & Software", "Office Productivity"]
    }, */

    /* {
        img: "919872_ed54_6-272x161.jpg",
        category: "Development",
        title: "Android Java Masterclass - Become an App Developer",
        vote: 5,
        fullPrice: "99.99",
        price: "50",
        tags: ["All Categories", "Business", "Design", "Development", "IT & Software", "Office Productivity"]
    }, */

    /* {
        img: "951684_9c1a_2-272x161.jpg",
        category: "Development",
        title: "Xamarin Forms: Build Native Cross-platform Apps with C#",
        vote: 4,
        fullPrice: "189.99",
        price: "95",
        tags: ["All Categories", "Business", "Development", "IT & Software", "Office Productivity"]
    } */
    ],
    index_sec_5: 0
  },
  methods: {
    select_category: function select_category(category) {
      this.category_selected = category; //console.log(this.category_selected);
    },
    index_5_add: function index_5_add() {
      if (this.index_sec_5 === this.cardsSec4.length - 1) {
        return this.index_sec_5 = 0;
      }

      return this.index_sec_5++;
    },
    index_5_remove: function index_5_remove() {
      if (this.index_sec_5 === 0) {
        return this.index_sec_5 = this.cardsSec4.length - 1;
      }

      return this.index_sec_5 -= 1;
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;