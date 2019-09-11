(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <div class=\"ion-text-center\">\n            <ion-img src=\"/assets/images/logo.png\" class=\"header-logo\"></ion-img>\n            <!--<strong class=\"header-logo-title\">MHR-Mobile</strong>-->\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home-gradient-bg\">\n    <!-- Main header title -->\n    <!--<ion-text padding class=\"text-white ion-text-center\">-->\n    <!--<h5>ADD INFORMATION</h5>-->\n    <!--</ion-text>-->\n\n    <!-- Main grid layout -->\n    <ion-grid>\n        <ion-row>\n            <ion-col size-sm=\"6\" size-xs=\"6\">\n                <ion-card padding class=\"home-item\" [routerLink]=\"['/doctors']\">\n                    <ion-img src=\"/assets/icon/doctor.png\" class=\"item-img\"></ion-img>\n                    <div class=\"item-title\">My Doctor</div>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-sm=\"6\" size-xs=\"6\">\n                <ion-card padding class=\"home-item\" [routerLink]=\"['/nearme']\">\n                    <ion-img src=\"/assets/icon/near.png\" class=\"item-img\"></ion-img>\n                    <div class=\"item-title\">Near Me</div>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-sm=\"6\" size-xs=\"6\">\n                <ion-card padding class=\"home-item\" [routerLink]=\"['/prescription']\">\n                    <ion-img src=\"/assets/icon/prescription.png\" class=\"item-img\"></ion-img>\n                    <div class=\"item-title\">Prescription</div>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-sm=\"6\" size-xs=\"6\">\n                <ion-card padding class=\"home-item\" [routerLink]=\"['/report']\">\n                    <ion-img src=\"/assets/icon/report.png\" class=\"item-img\"></ion-img>\n                    <div class=\"item-title\">Report</div>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-sm=\"6\" size-xs=\"6\">\n                <ion-card padding class=\"home-item\" [routerLink]=\"['/diabetes']\">\n                    <ion-img src=\"/assets/icon/diabetes.png\" class=\"item-img\"></ion-img>\n                    <div class=\"item-title\">Diabetes</div>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-sm=\"6\" size-xs=\"6\">\n                <ion-card padding class=\"home-item\" [routerLink]=\"['/blood-pressure']\">\n                    <ion-img src=\"/assets/icon/blood_pressure.png\" class=\"item-img\"></ion-img>\n                    <div class=\"item-title\">Blood Pressure</div>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div class=\"space-30\"></div>\n\n    <!-- Slider -->\n    <div class=\"slider-wrap\">\n        <ion-title class=\"text-white\">Health Tips</ion-title>\n        <div padding id=\"slider\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n                <!-- Single item -->\n                <ion-card class=\"single-item carousel-item active ion-card-carousel-item\"\n                          style=\"\">\n                    <ion-img src=\"/assets/images/slider_one.png\"></ion-img>\n                    <ion-card-header>\n                        <div>7 Most Effective Exercises</div>\n                    </ion-card-header>\n                </ion-card>\n                \n                <ion-card class=\"single-item carousel-item ion-card-carousel-item\">\n                    <ion-img src=\"/assets/shapes.svg\"></ion-img>\n                    <ion-card-header>\n                        <div>7 Most Effective Exercises</div>\n                    </ion-card-header>\n                </ion-card>\n\n                <ion-card class=\"single-item carousel-item ion-card-carousel-item\">\n                    <ion-img src=\"/assets/shapes.svg\"></ion-img>\n                    <ion-card-header>\n                        <div>7 Most Effective Exercises</div>\n                    </ion-card-header>\n                </ion-card>\n            </div>\n\n            <!-- Left and right controls -->\n            <a class=\"carousel-control-prev\" href=\"#slider\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\"></span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#slider\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\"></span>\n            </a>\n\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ion-card bg color */\nion-card {\n  background-color: #fff;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25henJ1bC9EZXZlbG9wbWVudC9Qcm9qZWN0cy9pb25pYy9taHJtb2JpbGUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLHNCQUFBO0FBQ0E7RUFBVSxzQkFBc0I7RUFBRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIGlvbi1jYXJkIGJnIGNvbG9yICovXG5pb24tY2FyZCB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgbWFyZ2luLWJvdHRvbTogMTBweH1cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map