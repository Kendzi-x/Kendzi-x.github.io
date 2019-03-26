(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- top bar -->\n<nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Company name</a>\n\n  <div class=\"row\" style=\"width: 750px\">\n    <div class=\"col-xs-12 col-12 col-md-4 form-group\" style=\"margin: 0\">\n      <app-datepicker (dateChange)=\"dateRange = $event\"></app-datepicker>\n    </div>\n  </div>\n\n  <ul class=\"navbar-nav px-3\">\n    <li class=\"nav-item text-nowrap\">\n      <button type=\"button\" class=\"btn btn-dark\">Sign out</button>\n    </li>\n  </ul>\n</nav>\n\n<!-- sidebar -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">\n              <i class=\"fas fa-home\"></i>\n              Dashboard <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" style=\"padding-left: 20px\"><i class=\"fas fa-file\"></i> Orders</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\">\n              <i class=\"fas fa-shopping-cart\"></i>\n              Products\n            </a>\n          </li>\n        </ul>\n\n        <h6\n          class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\"\n        >\n          <span>Financial Charts</span>\n          <a class=\"d-flex align-items-center text-muted\" (click)=\"isShown = !isShown\">\n            <i class=\"fas fa-plus-circle\"></i>\n          </a>\n        </h6>\n\n        <div class=\"btn-group\" dropdown style=\"margin: 5px\" *ngIf=\"isShown\">\n          <button type=\"button\" class=\"btn btn-sm dropdown-toggle\" dropdownToggle aria-controls=\"dropdown-alignment\">How many charts do you need?</button>\n          <ul id=\"dropdown-alignment\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"button-alignment\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"numberOfCharts = 1\">1 chart</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"numberOfCharts = 2\">2 charts</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"numberOfCharts = 3\">3 charts</a></li>\n              <li class=\"divider dropdown-divider\"></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"numberOfCharts = 4\">4 charts</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <!-- main -->\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n      <div\n        class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\"\n      >\n        <h1 class=\"h2\">Dashboard</h1>\n        <div class=\"btn-toolbar mb-2 mb-md-0\">\n          <div class=\"btn-group mr-2\">\n            <button class=\"btn btn-sm btn-outline-secondary\" disabled>Share</button>\n            <button class=\"btn btn-sm btn-outline-secondary\" disabled>Export</button>\n          </div>\n          <div class=\"btn btn-sm btn-outline-secondary\" *ngIf=\"dateRange\">\n            <i class=\"fa fa-calendar\"></i>\n            {{ dateRange[0] }} - {{ dateRange[1] }}\n          </div>\n        </div>\n      </div>\n\n      <!-- Charts -->\n      <ng-container> \n        <app-highchart *ngIf=\"numberOfCharts > 0\" [dateRange]=\"dateRange\"></app-highchart>\n        <app-highchart *ngIf=\"numberOfCharts > 1\" [dateRange]=\"dateRange\"></app-highchart>\n        <app-highchart *ngIf=\"numberOfCharts > 2\" [dateRange]=\"dateRange\"></app-highchart>\n        <app-highchart *ngIf=\"numberOfCharts > 3\" [dateRange]=\"dateRange\"></app-highchart>\n      </ng-container>\n\n      <!-- <canvas class=\"my-4\" id=\"myChart\" width=\"900\" height=\"380\"></canvas> -->\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Sidebar\r\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  margin-top: 48px;\n  /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */ }\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333; }\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999; }\n.sidebar .nav-link.active {\n  color: #007bff; }\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit; }\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase; }\n/*\r\n * Navbar\r\n */\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: black;\n  box-shadow: inset -1px 0 0 black; }\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n.form-control-dark {\n  color: #fff;\n  background-color: white;\n  border-color: white; }\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px white; }\n/*\r\n * Utilities\r\n */\n.border-top {\n  border-top: 1px solid #e5e5e5; }\n.border-bottom {\n  border-bottom: 1px solid #e5e5e5; }\na {\n  cursor: pointer; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxZdXJpdVxcRGVza3RvcFxcSmF2YXNjcmlwdFxcUHJvamVjdFxcdGVzdC13aWRnZXRzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBREVGO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFBRSxzQkFBQTtFQUNkLFVBQVU7RUFDViw2Q0FBNEMsRUFBQTtBQUc5QztFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQUUscUJBQUE7RUFDbEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQUUsNkRBQUEsRUFBOEQ7QUFHbEY7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBR2I7RUFDRSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBO0FBR2I7RUFDRSxjQUFjLEVBQUE7QUFHaEI7O0VBRUUsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBO0FBRzNCOztFQ0hFO0FET0Y7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix1QkFBOEI7RUFDOUIsZ0NBQXVDLEVBQUE7QUFHekM7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsV0FBVztFQUNYLHVCQUFvQztFQUNwQyxtQkFBZ0MsRUFBQTtBQUdsQztFQUNFLHlCQUF5QjtFQUN6QiwyQkFBd0MsRUFBQTtBQUcxQzs7RUNSRTtBRFlGO0VBQWMsNkJBQTZCLEVBQUE7QUFDM0M7RUFBaUIsZ0NBQWdDLEVBQUE7QUFFakQ7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBTaWRlYmFyXHJcbiAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXN0aWNreSB7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbWFyZ2luLXRvcDogNDhweDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxyXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLypcclxuICogTmF2YmFyXHJcbiAqL1xyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWRhcmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIFV0aWxpdGllc1xyXG4gKi9cclxuXHJcbi5ib3JkZXItdG9wIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7IH1cclxuLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTsgfVxyXG5cclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi8qXHJcbiAqIFNpZGViYXJcclxuICovXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi5zaWRlYmFyLXN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgcGFkZGluZy10b3A6IC41cmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovIH1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7IH1cblxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjOTk5OyB9XG5cbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwN2JmZjsgfVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7IH1cblxuLnNpZGViYXItaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi8qXHJcbiAqIE5hdmJhclxyXG4gKi9cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCBibGFjazsgfVxuXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbi5mb3JtLWNvbnRyb2wtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxuXG4uZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggd2hpdGU7IH1cblxuLypcclxuICogVXRpbGl0aWVzXHJcbiAqL1xuLmJvcmRlci10b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTsgfVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1OyB9XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isShown = true;
        this.numberOfCharts = 1;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _highchart_highchart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highchart/highchart.component */ "./src/app/highchart/highchart.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatepickerComponent"], _highchart_highchart_component__WEBPACK_IMPORTED_MODULE_10__["HighchartComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_9__["HighchartsChartModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/mock/data.ts":
/*!*************************************!*\
  !*** ./src/app/common/mock/data.ts ***!
  \*************************************/
/*! exports provided: sensorsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sensorsData", function() { return sensorsData; });
function sensorsData(len) {
    // generate an array of random data
    var data = [];
    for (var i = 0; i < len; i++) {
        data.push(Math.random());
    }
    return data;
}


/***/ }),

/***/ "./src/app/datepicker/datepicker.component.html":
/*!******************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-addon right-addon\">\n  <i class=\"fa fa-calendar\"></i>\n  <input\n    type=\"text\"\n    placeholder=\"Choose a daterange\"\n    class=\"form-control\"\n    bsDaterangepicker\n    [(ngModel)]=\"model\"\n    (ngModelChange)=\"change()\"\n    [bsConfig]=\"{ containerClass: 'theme-default', rangeInputFormat: 'DD.MM.YYYY' }\"\n  />\n</div>"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.scss":
/*!******************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* enable absolute positioning */\n.inner-addon {\n  position: relative; }\n/* style icon */\n.inner-addon .fa {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n/* align icon */\n.right-addon .fa {\n  right: 0px; }\n/* add padding  */\n.right-addon input {\n  padding-right: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0ZXBpY2tlci9DOlxcVXNlcnNcXFl1cml1XFxEZXNrdG9wXFxKYXZhc2NyaXB0XFxQcm9qZWN0XFx0ZXN0LXdpZGdldHMvc3JjXFxhcHBcXGRhdGVwaWNrZXJcXGRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQUE7QUFDQTtFQUNFLGtCQUFrQixFQUFBO0FBR3BCLGVBQUE7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7QUFHdEIsZUFBQTtBQUNBO0VBQW1CLFVBQVUsRUFBQTtBQUU3QixpQkFBQTtBQUNBO0VBQXFCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZW5hYmxlIGFic29sdXRlIHBvc2l0aW9uaW5nICovXHJcbi5pbm5lci1hZGRvbiB7IFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbn1cclxuXHJcbi8qIHN0eWxlIGljb24gKi9cclxuLmlubmVyLWFkZG9uIC5mYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIGFsaWduIGljb24gKi9cclxuLnJpZ2h0LWFkZG9uIC5mYSB7IHJpZ2h0OiAwcHg7fVxyXG5cclxuLyogYWRkIHBhZGRpbmcgICovXHJcbi5yaWdodC1hZGRvbiBpbnB1dCB7IHBhZGRpbmctcmlnaHQ6IDMwcHg7IH0iXX0= */"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.ts ***!
  \****************************************************/
/*! exports provided: formatDate, DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");



// change Date to dd.mm.yyyy format
function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    var mm = date.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    var yy = date.getFullYear() % 100;
    if (yy < 10) {
        yy = '0' + yy;
    }
    return dd + '.' + mm + '.' + yy;
}
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DatepickerComponent.prototype.onScrollEvent = function () {
        this.datepicker.hide();
    };
    DatepickerComponent.prototype.ngOnInit = function () {
        var week = new Date();
        week.setDate(week.getDate() + 7);
        this.model = [new Date(), week]; // initial state
        this.change();
    };
    DatepickerComponent.prototype.change = function () {
        this.dateList = this.model.map(function (date) { return formatDate(date); });
        this.dateChange.emit(this.dateList);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatepickerComponent.prototype, "dateChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDaterangepickerDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDaterangepickerDirective"])
    ], DatepickerComponent.prototype, "datepicker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DatepickerComponent.prototype, "onScrollEvent", null);
    DatepickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/datepicker/datepicker.component.scss")]
        })
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/highchart/highchart.component.html":
/*!****************************************************!*\
  !*** ./src/app/highchart/highchart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"graph\">\n  <button type=\"button\" class=\"btn btn-dark\" (click)=\"toggleSeriesType()\">Toggle type</button>\n  <div class=\"btn-group\" dropdown>\n    <button type=\"button\" class=\"btn btn-dark dropdown-toggle\" dropdownToggle aria-controls=\"dropdown-basic\">Choose color </button>\n    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleSeriesColor($event)\">orange</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleSeriesColor($event)\">purple</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleSeriesColor($event)\">pink</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleSeriesColor($event)\">olive</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleSeriesColor($event)\">teal</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleSeriesColor($event)\">fuchsia</a></li>\n        <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleSeriesColor($event)\">default</a></li>\n    </ul>\n  </div>\n  <div class=\"btn-group\" dropdown>\n    <button type=\"button\" class=\"btn btn-dark dropdown-toggle\" dropdownToggle aria-controls=\"dropdown-basic\">Select sensors </button>\n    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"selectSensors($event)\">temperature</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"selectSensors($event)\">humidity</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"selectSensors($event)\">light</a></li>\n       <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"combineSensors()\">Combine</a></li>\n    </ul>\n  </div>\n  <highcharts-chart\n    [Highcharts]=\"highcharts\"\n    [options]=\"chartOptions\"\n    [(update)]=\"updateChart\"\n    [oneToOne]=true\n    style=\"height: 350px; display: block;\"\n  ></highcharts-chart>\n</div>"

/***/ }),

/***/ "./src/app/highchart/highchart.component.scss":
/*!****************************************************!*\
  !*** ./src/app/highchart/highchart.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Charts\r\n */\n.graph {\n  float: left;\n  width: 45%;\n  margin-right: 3%;\n  margin-bottom: 3%;\n  /* background-color: #fff; */\n  background: #2f3542;\n  color: tomato;\n  padding: 2em;\n  border-radius: 3px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -o-border-radius: 5px;\n  -ms-border-radius: 5px; }\n.graph .btn {\n  margin-bottom: 7px;\n  margin-right: 10px; }\n.dropdown-item {\n  cursor: pointer; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlnaGNoYXJ0L0M6XFxVc2Vyc1xcWXVyaXVcXERlc2t0b3BcXEphdmFzY3JpcHRcXFByb2plY3RcXHRlc3Qtd2lkZ2V0cy9zcmNcXGFwcFxcaGlnaGNoYXJ0XFxoaWdoY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hpZ2hjaGFydC9oaWdoY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURFRDtFQUNDLFdBQVc7RUFDWCxVQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hpZ2hjaGFydC9oaWdoY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBDaGFydHNcclxuICovXHJcblxyXG4gLmdyYXBoIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDo0NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gIGJhY2tncm91bmQ6ICMyZjM1NDI7XHJcbiAgY29sb3I6IHRvbWF0bztcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZ3JhcGggLmJ0biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIvKlxyXG4gKiBDaGFydHNcclxuICovXG4uZ3JhcGgge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXG4gIGJhY2tncm91bmQ6ICMyZjM1NDI7XG4gIGNvbG9yOiB0b21hdG87XG4gIHBhZGRpbmc6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDsgfVxuXG4uZ3JhcGggLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/highchart/highchart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/highchart/highchart.component.ts ***!
  \**************************************************/
/*! exports provided: HighchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighchartComponent", function() { return HighchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_themes_dark_unica__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/themes/dark-unica */ "./node_modules/highcharts/themes/dark-unica.js");
/* harmony import */ var highcharts_themes_dark_unica__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_themes_dark_unica__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var _common_mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/mock/data */ "./src/app/common/mock/data.ts");




highcharts_themes_dark_unica__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);


highcharts__WEBPACK_IMPORTED_MODULE_2__["setOptions"]({
    title: {
        style: {
            color: 'tomato'
        }
    },
    legend: {
        enabled: false
    }
});
var HighchartComponent = /** @class */ (function () {
    function HighchartComponent() {
        this.xs = [];
        this.updateChart = false;
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        /* Chart config */
        this.currentType = 'line';
        this.chartData = [
            {
                name: 'temperature',
                data: Object(_common_mock_data__WEBPACK_IMPORTED_MODULE_5__["sensorsData"])(8),
                color: '#2b908f'
            }
        ];
        this.seriesTypes = {
            'line': 'bar',
            'bar': 'line'
        };
    }
    // change Date format
    HighchartComponent.prototype.formattedDate = function (date) {
        var d = date.split('.');
        var temp1 = d[0];
        d[0] = d[1];
        d[1] = temp1;
        return d;
    };
    HighchartComponent.prototype.newDataOfSensors = function (dataOfSensors) {
        var diff = this.xs.length - dataOfSensors.length;
        if (diff > 0) {
            dataOfSensors = dataOfSensors.concat(Object(_common_mock_data__WEBPACK_IMPORTED_MODULE_5__["sensorsData"])(diff)); // add values for new larger period
        }
        else if (diff < 0) {
            dataOfSensors.splice(diff, Math.abs(diff)); // remove extra values
        }
        return dataOfSensors;
    };
    HighchartComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var arr = [], startDate = new Date(this.formattedDate(this.dateRange[0])), endDate = new Date(this.formattedDate(this.dateRange[1]));
        while (startDate <= endDate) {
            arr.push(new Date(startDate));
            startDate.setDate(startDate.getDate() + 1);
        }
        this.xs = arr.map(function (date) { return Object(_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(date); }); // xAxis
        this.chartData.map(function (val) { return (val.data = _this.newDataOfSensors(val.data)); });
        /* Options */
        this.chartOptions = {
            title: { text: 'Sensors chart' },
            chart: {
                type: this.currentType // line | bar
            },
            xAxis: {
                type: 'datetime',
                categories: this.xs
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Value'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            series: this.chartData
        };
        this.updateChart = true;
    };
    HighchartComponent.prototype.toggleSeriesType = function () {
        this.chartOptions.chart.type = this.seriesTypes[this.chartOptions.chart.type || 'line'];
        this.currentType = this.chartOptions.chart.type;
        // nested change - must trigger update
        this.updateChart = true;
    };
    HighchartComponent.prototype.toggleSeriesColor = function (_a) {
        var target = _a.target;
        var initialColors = [
            '#2b908f', '#90ee7e', '#f45b5b',
            '#7798BF', '#aaeeee', '#ff0066',
            '#eeaaee', '#55BF3B', '#DF5353',
            '#7798BF', '#aaeeee'
        ];
        if (target.text === 'default') {
            this.chartOptions.series.map(function (val, i) { return (val.color = initialColors[i]); });
        }
        else {
            this.chartOptions.series.map(function (val) { return (val.color = target.text); });
        }
        this.updateChart = true;
    };
    HighchartComponent.prototype.selectSensors = function (_a) {
        var target = _a.target;
        if (target.text === 'temperature') {
            this.chartData[0].name = 'temperature';
            this.chartData[0].color = '#2b908f';
        }
        else if (target.text === 'humidity') {
            this.chartData[0].name = 'humidity';
            this.chartData[0].color = 'blue';
        }
        else {
            this.chartData[0].name = 'light';
            this.chartData[0].color = 'yellow';
        }
        this.chartData[0].data = Object(_common_mock_data__WEBPACK_IMPORTED_MODULE_5__["sensorsData"])(this.xs.length);
        this.updateChart = true;
    };
    HighchartComponent.prototype.combineSensors = function () {
        if (this.chartData.length < 3) {
            this.chartData.push({
                name: '2nd temperature',
                data: Object(_common_mock_data__WEBPACK_IMPORTED_MODULE_5__["sensorsData"])(this.xs.length)
            }, {
                name: 'humidity',
                data: Object(_common_mock_data__WEBPACK_IMPORTED_MODULE_5__["sensorsData"])(this.xs.length)
            });
        }
        this.updateChart = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HighchartComponent.prototype, "dateRange", void 0);
    HighchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-highchart',
            template: __webpack_require__(/*! ./highchart.component.html */ "./src/app/highchart/highchart.component.html"),
            styles: [__webpack_require__(/*! ./highchart.component.scss */ "./src/app/highchart/highchart.component.scss")]
        })
    ], HighchartComponent);
    return HighchartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yuriu\Desktop\Javascript\Project\test-widgets\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map