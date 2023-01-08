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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h2 class=\"title\">Seguros - Lista de productos</h2>        \n    </div>\n  </div>\n\n  <app-messages-box\n    *ngIf=\"error\"\n    type=\"danger\"\n    message=\"¡Se ha producido un error recuperando los datos!\">\n  </app-messages-box>\n\n  <ng-container *ngIf=\"!error\">\n    \n    <app-options-filter \n      *ngIf=\"!loading\"\n      [brands]=\"getBrands()\" \n      [types]=\"getTypes()\" \n      [createFilters]=\"!showFavorites\"\n      (filter)=\"executeFilter($event)\"></app-options-filter>\n\n    <div \n      *ngIf=\"!loading\"\n      class=\"row m-2\">\n      <div class=\"col-12 text-right\">\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"openFavorites()\">\n          Mostrar favoritos\n        </button>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!loading\">\n\n      <app-messages-box \n        *ngIf=\"!data.length\" \n        type=\"info\" \n        message=\"No se han encontrado resultados\">\n      </app-messages-box>\n      \n      <ng-container *ngIf=\"data.length\">\n        \n        <app-list \n          *ngIf=\"!loading && data.length\" \n          [data]=\"data\" \n          [page]=\"page\" \n          [forPage]=\"5\" \n          (orderData)=\"orderData($event)\"\n          (lineAction)=\"addFavorite($event)\">\n        </app-list>\n\n        <app-paginator \n          *ngIf=\"!loading && data.length\" \n          [page]=\"page\" \n          [numItems]=\"data.length\" \n          [forPage]=\"5\" \n          (changePage)=\"changePage($event)\">\n        </app-paginator>\n\n      </ng-container>\n\n    </ng-container>\n\n  </ng-container>\n\n</div>\n\n\n\n\n\n\n\n<app-modal-container *ngIf=\"loading\">\n    <app-loading-spinner></app-loading-spinner>\n</app-modal-container>\n\n<app-modal-container *ngIf=\"showFavorites\">\n  <app-favorites-list\n    (close)=\"closeFavorites()\">\n  </app-favorites-list>\n</app-modal-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2.title {\n  padding: 1rem;\n  text-align: center;\n  font-weight: bold; }\n  @media screen and (max-width: 576px) {\n    h2.title {\n      font-size: 1.25rem; } }\n  @media screen and (min-width: 577px) {\n    h2.title {\n      font-size: 1.75rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb3llY3Rvc1xcYW5ndWxhclxcU2luZ3VsYXIgQ292ZXJcXGluc3VyYW5jZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUVqQjtJQU5KO01BT00sa0JBQWtCLEVBQUEsRUFPdkI7RUFKRztJQVZKO01BV00sa0JBQWtCLEVBQUEsRUFHdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFibGVzXCI7XHJcblxyXG5oMi50aXRsZSB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1heC13aWR0aC1tb2JpbGUpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtOyAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4td2lkdGgtZGVza3RvcCkge1xyXG4gICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG59Il19 */"

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
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(productsService) {
        this.productsService = productsService;
    }
    /**
     * @name ngOnInit
     * @description init the values of the component and calls one method of products service to get the data
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.error = false;
        this.page = 1;
        this.showFavorites = false;
        this.lastFilter = {
            name: '',
            price: 0,
            brand: 'Todos',
            type: 'Todos'
        };
        var dataLoader = this.productsService.setProductsData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.loading = false;
            dataLoader.unsubscribe();
        }))
            .subscribe(function (data) {
            _this.data = _this.productsService.getRawData();
        }, function (error) {
            _this.error = true;
            _this.loading = false;
        });
    };
    /**
     * @name getBrands
     * @description gets, using the products service, one list of the insurances brands
     * @returns an array of string
     */
    AppComponent.prototype.getBrands = function () {
        return this.productsService.getBrands();
    };
    /**
     * @name getTypes
     * @description gets, using the products service, one list of the insurances types
     * @returns an array of string
     */
    AppComponent.prototype.getTypes = function () {
        return this.productsService.getTypes();
    };
    /**
     * @name executeFilter
     * @description filters the data using the filter values received as a parameter
     * @param event object with the filter values
     * @param resetPage boolean that indicates if must reset the number of page to show to the first
     */
    AppComponent.prototype.executeFilter = function (event, resetPage) {
        if (resetPage === void 0) { resetPage = true; }
        if (resetPage) {
            this.page = 1;
        }
        event.favorite = false;
        this.lastFilter = event;
        this.data = this.productsService.filterData(event);
    };
    /**
     * @name changePage
     * @description changes the page to show
     * @param page the new value for page
     */
    AppComponent.prototype.changePage = function (page) {
        this.page = page;
    };
    /**
     * @name orderData
     * @description orders the data according with the options received as a parameter
     * @param options object with the options for order
     */
    AppComponent.prototype.orderData = function (options) {
        this.data = this.productsService.orderData(this.data, options);
    };
    /**
     * @name openFavorites
     * @description changes the value of 'showFavorites' to open the favorites list
     */
    AppComponent.prototype.openFavorites = function () {
        this.showFavorites = true;
    };
    /**
     * @name closeFavorites
     * @description changes the value of 'showFavorites' to close the favorites list
     *              and updates the data by executing the filter to show the changes
     *              produced in the favorites list
     */
    AppComponent.prototype.closeFavorites = function () {
        this.showFavorites = false;
        this.executeFilter(this.lastFilter, false);
    };
    /**
     * @addFavorites
     * @description modify a register of the products list to indicate as a favorite
     * @param id identificator in the list of the product to modify
     */
    AppComponent.prototype.addFavorite = function (id) {
        this.productsService.updateFavorite(id);
        this.executeFilter(this.lastFilter, false);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal-container/modal-container.component */ "./src/app/components/modal-container/modal-container.component.ts");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loading-spinner/loading-spinner.component */ "./src/app/components/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _components_options_filter_options_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/options-filter/options-filter.component */ "./src/app/components/options-filter/options-filter.component.ts");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "./src/app/components/paginator/paginator.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _components_favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/favorites-list/favorites-list.component */ "./src/app/components/favorites-list/favorites-list.component.ts");
/* harmony import */ var _components_messages_box_messages_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/messages-box/messages-box.component */ "./src/app/components/messages-box/messages-box.component.ts");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6___default.a, 'es');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_8__["ModalContainerComponent"],
                _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_9__["LoadingSpinnerComponent"],
                _components_options_filter_options_filter_component__WEBPACK_IMPORTED_MODULE_10__["OptionsFilterComponent"],
                _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__["PaginatorComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _components_favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_14__["FavoritesListComponent"],
                _components_messages_box_messages_box_component__WEBPACK_IMPORTED_MODULE_15__["MessagesBoxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
            ],
            providers: [{
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
                    useValue: 'es'
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/favorites-list/favorites-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/favorites-list/favorites-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-2\">\n  <div class=\"col-12 text-right\">\n    <fa-icon       \n      title=\"Cerrar\"\n      [icon]=\"faTimesCircle\" \n      (click)=\"closeFavorites()\"></fa-icon>\n  </div>\n</div>\n\n<app-options-filter\n    [brands]=\"getBrands()\"\n    [types]=\"getTypes()\"\n    [favorites]=\"true\"\n    (filter)=\"executeFilter($event)\">\n</app-options-filter>\n\n<app-messages-box *ngIf=\"!data.length\" type=\"info\" message=\"¡No hay favoritos!\">\n</app-messages-box>\n\n<ng-container\n  *ngIf=\"data.length\">\n\n  <app-list\n    [data]=\"data\"\n    [page]=\"page\"\n    [forPage]=\"5\"\n    [favoritesList]=\"true\"\n    (orderData)=\"orderData($event)\"\n    (lineAction)=\"removeFavorite($event)\">\n  </app-list>\n\n  <app-paginator\n    [page]=\"page\"\n    [numItems]=\"data.length\"\n    [forPage]=\"5\"\n    (changePage)=\"changePage($event)\">\n  </app-paginator>\n\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/favorites-list/favorites-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/favorites-list/favorites-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 90vw;\n  margin: 0.5rem auto;\n  background-color: white;\n  border-radius: .5rem;\n  padding: .5rem;\n  overflow: hidden;\n  overflow-y: auto; }\n\nfa-icon {\n  font-size: 2rem;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMtbGlzdC9EOlxccHJveWVjdG9zXFxhbmd1bGFyXFxTaW5ndWxhciBDb3ZlclxcaW5zdXJhbmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmYXZvcml0ZXMtbGlzdFxcZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsY0FBYztFQUVkLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMtbGlzdC9mYXZvcml0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogOTB2dztcclxuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgXHJcbn1cclxuXHJcbmZhLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/favorites-list/favorites-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/favorites-list/favorites-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: FavoritesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesListComponent", function() { return FavoritesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




var FavoritesListComponent = /** @class */ (function () {
    function FavoritesListComponent(productsService) {
        this.productsService = productsService;
        // event to indicates to the parent component that must close the favorites lista¡
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimesCircle"]; // icon for close button  
    }
    /**
    * @name ngOnInit
    * @description init the values of the component and calls one method of products service to get the data
    */
    FavoritesListComponent.prototype.ngOnInit = function () {
        this.data = [];
        this.page = 1;
        this.lastFilter = {
            name: '',
            price: 0,
            brand: 'Todos',
            type: 'Todos'
        };
        this.executeFilter(this.lastFilter, false);
    };
    /**
     * @name executeFilter
     * @description filters the data using the filter values received as a parameter
     * @param event object with the filter values
     * @param resetPage boolean that indicates if must reset the number of page to show to the first
     */
    FavoritesListComponent.prototype.executeFilter = function (event, resetPage) {
        if (resetPage === void 0) { resetPage = true; }
        if (resetPage) {
            this.page = 1;
        }
        event.favorite = true;
        this.lastFilter = event;
        this.data = this.productsService.filterData(event);
    };
    /**
     * @name closeFavorites
     * @description emits the mesage to the parent component to close the favorites list
     */
    FavoritesListComponent.prototype.closeFavorites = function () {
        this.close.emit();
    };
    /**
    * @name getBrands
    * @description gets, using the products service, one list of the insurances brands
    * @returns an array of string
    */
    FavoritesListComponent.prototype.getBrands = function () {
        return this.productsService.getBrands();
    };
    /**
     * @name getTypes
     * @description gets, using the products service, one list of the insurances types
     * @returns an array of string
     */
    FavoritesListComponent.prototype.getTypes = function () {
        return this.productsService.getTypes();
    };
    /**
    * @name changePage
    * @description changes the page to show
    * @param page the new value for page
    */
    FavoritesListComponent.prototype.changePage = function (page) {
        this.page = page;
    };
    /**
    * @name orderData
    * @description orders the data according with the options received as a parameter
    * @param options object with the options for order
    */
    FavoritesListComponent.prototype.orderData = function (options) {
        this.data = this.productsService.orderData(this.data, options);
    };
    /**
     * @name removeFavorite
     * @description modifies a register, using the products service, to eliminate it from the favorites list
     * @param id id of the product which be modified
     */
    FavoritesListComponent.prototype.removeFavorite = function (id) {
        if (confirm("\u00BFEliminar de favoritos " + this.productsService.getProductName(id) + "?")) {
            this.productsService.updateFavorite(id);
            this.executeFilter(this.lastFilter, false);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('close'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FavoritesListComponent.prototype, "close", void 0);
    FavoritesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites-list',
            template: __webpack_require__(/*! ./favorites-list.component.html */ "./src/app/components/favorites-list/favorites-list.component.html"),
            styles: [__webpack_require__(/*! ./favorites-list.component.scss */ "./src/app/components/favorites-list/favorites-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], FavoritesListComponent);
    return FavoritesListComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\n  <div class=\"col-12\">\n\n    <table>\n      <thead>\n        <tr>\n          <th>\n            <div>Producto</div>\n            <div class=\"row m-0\">\n              <div class=\"col-6 text-left m-0 p-0\">\n                <fa-icon [icon]=\"faSortUp\" (click)=\"callOrderData('name', 'ASC')\"></fa-icon>\n              </div>\n              <div class=\"col-6 text-right m-0 p-0\">\n                <fa-icon [icon]=\"faSortDown\" (click)=\"callOrderData('name', 'DESC')\"></fa-icon>\n              </div>\n            </div>\n          </th>\n          <th>\n            <div>Marca</div>\n            <div class=\"row m-0\">\n              <div class=\"col-6 text-left m-0 p-0\">\n                <fa-icon [icon]=\"faSortUp\" (click)=\"callOrderData('brand', 'ASC')\"></fa-icon>\n              </div>\n              <div class=\"col-6 text-right m-0 p-0\">\n                <fa-icon [icon]=\"faSortDown\" (click)=\"callOrderData('brand', 'DESC')\"></fa-icon>\n              </div>\n            </div>\n          </th>\n          <th>\n            <div>Tipo</div>\n            <div class=\"row m-0\">\n              <div class=\"col-6 text-left m-0 p-0\">\n                <fa-icon [icon]=\"faSortUp\" (click)=\"callOrderData('kind', 'ASC')\"></fa-icon>\n              </div>\n              <div class=\"col-6 text-right m-0 p-0\">\n                <fa-icon [icon]=\"faSortDown\" (click)=\"callOrderData('kind', 'DESC')\"></fa-icon>\n              </div>\n            </div>\n          </th>\n          <th *ngIf=\"!favoritesList\">\n            <div>Precio</div>\n            <div class=\"row m-0\">\n              <div class=\"col-6 text-left m-0 p-0\">\n                <fa-icon [icon]=\"faSortUp\" (click)=\"callOrderData('price', 'ASC')\"></fa-icon>\n              </div>\n              <div class=\"col-6 text-right m-0 p-0\">\n                <fa-icon [icon]=\"faSortDown\" (click)=\"callOrderData('price', 'DESC')\"></fa-icon>\n              </div>\n            </div>\n          </th>\n          <th>\n          </th>\n\n        </tr>\n      </thead>\n      <tr \n        *ngFor=\"let i of data.slice(init, finish); let idx = index; let odd = odd; let even = even\"\n        [ngClass]= \"{ 'even' : even, 'odd' : odd }\">\n        <td class=\"text-left m40\">\n          {{i.name}}\n        </td>\n        <td class=\"text-center m10\">\n          <img class=\"ico-list white\" src=\"assets/images/{{i.brandImage}}\" [alt]=\"i.brand\" [title]=\"i.brand\">\n        </td>\n        <td class=\"text-center m10\">\n          <img class=\"ico-list\" src=\"assets/images/{{i.kindImage}}\" [alt]=\"i.kind\" [title]=\"i.kind\">\n        </td>\n        <td class=\"text-right m20\" *ngIf=\"!favoritesList\">\n          {{i.price | currency:'EUR':'symbol'}}\n        </td>\n        <td class=\"text-center px-2 m10\">\n          <fa-icon \n            [icon]=\"iconFavorites()\" \n            [ngClass]=\"{'favorite': i.favorite && !favoritesList}\"\n            (click)=\"executeLineAction(i.id)\"></fa-icon>\n        </td>\n      </tr>\n      <tr *ngIf=\"!favoritesList\">\n        <td colspan=\"5\" class=\"text-right pr-1\">\n          <fa-icon [icon]=\"faStar\"></fa-icon> = Añadir a favoritos\n          <br />\n          <fa-icon [icon]=\"faStar\" class=\"favorite\"></fa-icon> = Eliminar de favoritos\n        </td>\n      </tr>\n      <tr *ngIf=\"favoritesList\">\n        <td colspan=\"4\" class=\"text-right pr-1\">\n          <fa-icon [icon]=\"faTrash\"></fa-icon> = Eliminar de favoritos\n        </td>\n      </tr>\n    </table>\n\n  </div>\n</div>\n<!--\n<div class=\"row mb-2 table-info\" *ngIf=\"!favoritesList\">\n  <div class=\"col-12 text-right\">\n    <fa-icon [icon]=\"faStar\"></fa-icon> = Añadir a favoritos / <fa-icon [icon]=\"faStar\" class=\"favorite\"></fa-icon> = Eliminar de favoritos\n  </div>\n</div>\n-->"

/***/ }),

/***/ "./src/app/components/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fa-icon {\n  cursor: pointer; }\n  fa-icon.favorite {\n    color: #ffff99; }\n  table {\n  width: 100%;\n  margin: 0;\n  padding: 0; }\n  table th {\n    text-align: center;\n    padding: 0.5rem; }\n  table td.m40 {\n    width: 40%; }\n  table td.m10 {\n    width: 10%; }\n  table td.m20 {\n    width: 20%; }\n  table tr.odd {\n    background-color: rgba(153, 153, 204, 0.5); }\n  table tr.even {\n    background-color: rgba(153, 204, 204, 0.5); }\n  img.ico-list {\n  width: 32px;\n  height: 32px; }\n  img.white {\n  background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L0Q6XFxwcm95ZWN0b3NcXGFuZ3VsYXJcXFNpbmd1bGFyIENvdmVyXFxpbnN1cmFuY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7RUFEakI7SUFHSSxjQUFjLEVBQUE7RUFJbEI7RUFFRSxXQUFXO0VBRVgsU0FBUztFQUNULFVBQVUsRUFBQTtFQUxaO0lBUUksa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtFQVRuQjtJQVlJLFVBQVUsRUFBQTtFQVpkO0lBZUksVUFBVSxFQUFBO0VBZmQ7SUFrQkksVUFBVSxFQUFBO0VBbEJkO0lBcUJJLDBDQUEwQyxFQUFBO0VBckI5QztJQXdCSSwwQ0FBMEMsRUFBQTtFQUk5QztFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFHZDtFQUNFLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmYS1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJi5mYXZvcml0ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmY5OTtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTsgICAgXHJcbiAgfVxyXG4gIHRkLm00MCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICB0ZC5tMTAge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcbiAgdGQubTIwIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIHRyLm9kZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAyMDQsIDAuNSk7XHJcbiAgfVxyXG4gIHRyLmV2ZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDIwNCwgMjA0LCAwLjUpO1xyXG4gIH1cclxufVxyXG5cclxuaW1nLmljby1saXN0IHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbmltZy53aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var ListComponent = /** @class */ (function () {
    function ListComponent() {
        // event for indicate to the parent component that must order the data
        // sends an object with the options to order
        this.orderData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // event for indicate to the parent component that must execute the action assigned to the registers the list
        // sends the id of the register
        this.lineAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @name ngOnInit
     * @description initializes the needed values to the component
     */
    ListComponent.prototype.ngOnInit = function () {
        if (this.favoritesList === undefined)
            this.favoritesList = false;
        this.faSortUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSortUp"];
        this.faSortDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSortDown"];
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStar"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
    };
    /**
     * @name ngOnChanges
     * @description updates the values of the initial and finish indexes when the component detects a change
     */
    ListComponent.prototype.ngOnChanges = function () {
        this.init = (this.page - 1) * this.forPage;
        this.finish = this.init + this.forPage;
    };
    /**
     * @name callOrderData
     * @description emits a message to the parent component to order the data, according the options sendeed
     * @param field the field of the list that must be used for order
     * @param type the mode to order, can be ASC or DESC
     */
    ListComponent.prototype.callOrderData = function (field, type) {
        var options = {
            field: field,
            type: type
        };
        this.orderData.emit(options);
    };
    /**
     * @name iconFavorites
     * @description returns the right icon for show in the list for the action
     *              of the registers, depending the list shows the favorites or not
     * @returns an icon
     */
    ListComponent.prototype.iconFavorites = function () {
        if (this.favoritesList) {
            return this.faTrash;
        }
        else {
            return this.faStar;
        }
    };
    /**
     * @name executeLineAction
     * @description emits a message to the parent component to execute the assigned action to the registers
     * @param id id of the register over which the action
     */
    ListComponent.prototype.executeLineAction = function (id) {
        this.lineAction.emit(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('page'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ListComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('forPage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ListComponent.prototype, "forPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('favoritesList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ListComponent.prototype, "favoritesList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('orderData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ListComponent.prototype, "orderData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('lineAction'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ListComponent.prototype, "lineAction", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/components/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/loading-spinner/loading-spinner.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/loading-spinner/loading-spinner.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-spinner\">\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>"

/***/ }),

/***/ "./src/app/components/loading-spinner/loading-spinner.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/loading-spinner/loading-spinner.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-spinner div {\n  -webkit-transform-origin: 32px 32px;\n          transform-origin: 32px 32px;\n  -webkit-animation: lds-spinner 1.2s linear infinite;\n          animation: lds-spinner 1.2s linear infinite; }\n\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 29px;\n  width: 5px;\n  height: 14px;\n  border-radius: 20%;\n  background: #fff; }\n\n.lds-spinner div:nth-child(1) {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n\n.lds-spinner div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n\n.lds-spinner div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n\n.lds-spinner div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n\n.lds-spinner div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n          transform: rotate(120deg);\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n\n.lds-spinner div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n          transform: rotate(150deg);\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n\n.lds-spinner div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n\n.lds-spinner div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n          transform: rotate(210deg);\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n\n.lds-spinner div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n          transform: rotate(240deg);\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n\n.lds-spinner div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n\n.lds-spinner div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n          transform: rotate(300deg);\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n\n.lds-spinner div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n          transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n\n@-webkit-keyframes lds-spinner {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes lds-spinner {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvRDpcXHByb3llY3Rvc1xcYW5ndWxhclxcU2luZ3VsYXIgQ292ZXJcXGluc3VyYW5jZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9hZGluZy1zcGlubmVyXFxsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixtREFBMkM7VUFBM0MsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDJCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBTmQ7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLXNwaW5uZXIge1xyXG4gIGNvbG9yOiBvZmZpY2lhbDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLmxkcy1zcGlubmVyIGRpdiB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLXNwaW5uZXIgMS4ycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDNweDtcclxuICBsZWZ0OiAyOXB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxufVxyXG5cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxufVxyXG5cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDYpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDkpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDEwKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMSkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcclxufVxyXG5cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTIpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGRzLXNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/loading-spinner/loading-spinner.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/loading-spinner/loading-spinner.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/components/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/components/loading-spinner/loading-spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/components/messages-box/messages-box.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/messages-box/messages-box.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div \n      class=\"alert\" \n      [ngClass]=\"'alert-' + type\"\n      role=\"alert\">\n      {{ message }}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/messages-box/messages-box.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/messages-box/messages-box.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMtYm94L21lc3NhZ2VzLWJveC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/messages-box/messages-box.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/messages-box/messages-box.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessagesBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesBoxComponent", function() { return MessagesBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessagesBoxComponent = /** @class */ (function () {
    function MessagesBoxComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('message'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MessagesBoxComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MessagesBoxComponent.prototype, "type", void 0);
    MessagesBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages-box',
            template: __webpack_require__(/*! ./messages-box.component.html */ "./src/app/components/messages-box/messages-box.component.html"),
            styles: [__webpack_require__(/*! ./messages-box.component.scss */ "./src/app/components/messages-box/messages-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessagesBoxComponent);
    return MessagesBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-container/modal-container.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/modal-container/modal-container.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/components/modal-container/modal-container.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/modal-container/modal-container.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.75);\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1jb250YWluZXIvRDpcXHByb3llY3Rvc1xcYW5ndWxhclxcU2luZ3VsYXIgQ292ZXJcXGluc3VyYW5jZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kYWwtY29udGFpbmVyXFxtb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUVyQyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWNvbnRhaW5lci9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/modal-container/modal-container.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/modal-container/modal-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ModalContainerComponent = /** @class */ (function () {
    /**
     * @name constructor
     * @param renderer object for manage the DOM of the navigator
     * @param document reference to the DOCUMENT object
     */
    function ModalContainerComponent(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    /**
     * @name ngOnInit
     * @description modifies the style of the document to hide the overflow
     */
    ModalContainerComponent.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    };
    /**
     * @name ngOnDestroy
     * @description modifies the style of the document to show the overflow
     */
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        this.renderer.setStyle(this.document.body, 'overflow', 'visible');
    };
    ModalContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-container',
            template: __webpack_require__(/*! ./modal-container.component.html */ "./src/app/components/modal-container/modal-container.component.html"),
            styles: [__webpack_require__(/*! ./modal-container.component.scss */ "./src/app/components/modal-container/modal-container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/options-filter/options-filter.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/options-filter/options-filter.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-2\">\n  <div class=\"col-12 text-right\">\n  <button\n    class=\"btn btn-primary\" \n    data-toggle=\"collapse\" href=\"#filters\" \n    role=\"button\" aria-expanded=\"false\"\n    aria-controls=\"collapseFilters\"\n    (click)=\"updateTextButtonFilters()\">\n    {{ textButtonFilters }}\n    </button>\n  </div>\n</div>\n\n<div *ngIf=\"createFilters\" class=\"row m-2 collapse\" id=\"filters\" #filters>  \n  <div class=\"col-12\">\n\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 my-1\">\n      <div class=\"form-group\">\n        <label for=\"name\">Producto:</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"name\">\n      </div>\n    </div>\n    <div *ngIf=\"!favorites\" class=\"col-12 col-md-6 my-1\">\n      <div class=\"form-group\">\n        <label for=\"price\">Precio máximo:</label>\n        <input type=\"number\" class=\"form-control\" name=\"price\" min=\"0\" [(ngModel)]=\"price\" (keypress)=\"positiveNumbersOnly($event)\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row my-1\">\n    <div class=\"col-12 col-md-6 my-1\">\n      <div class=\"form-group\">\n        <label for=\"brandSelected\">Marca:</label>\n          <select class=\"form-control\" name=\"brandSelected\" id=\"brandSelected\" [(ngModel)]=\"brandSelected\">\n          <option *ngFor=\"let brand of brands\" [value]=\"brand\">{{brand}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 my-1\">\n      <div class=\"form-group\">\n        <label for=\"typeSelected\">Tipo:</label>\n        <select class=\"form-control\" name=\"typeSelected\" id=\"typeSelected\" [(ngModel)]=\"typeSelected\">\n          <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12 text-right my-1\">\n      <button \n        type=\"button\" \n        class=\"btn btn-primary mr-2\"\n        (click)=\"executeFilter()\">\n        Filtrar\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary ml-2\"\n        (click)=\"resetFilter()\">\n        Reiniciar\n      </button>  \n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/options-filter/options-filter.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/options-filter/options-filter.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"number\"] {\n  text-align: right; }\n\ninput[type=\"number\"]::-webkit-outer-spin-button, input[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zLWZpbHRlci9EOlxccHJveWVjdG9zXFxhbmd1bGFyXFxTaW5ndWxhciBDb3ZlclxcaW5zdXJhbmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxvcHRpb25zLWZpbHRlclxcb3B0aW9ucy1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSx3QkFBd0I7RUFDeEIsU0FBUyxFQUFBOztBQUViO0VBQ0ksMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29wdGlvbnMtZmlsdGVyL29wdGlvbnMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/options-filter/options-filter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/options-filter/options-filter.component.ts ***!
  \***********************************************************************/
/*! exports provided: OptionsFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsFilterComponent", function() { return OptionsFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionsFilterComponent = /** @class */ (function () {
    function OptionsFilterComponent() {
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // action for triggering when the user press the button to filter
    }
    /**
     * @name ngOmInit
     * @description init the needed values for the component
     */
    OptionsFilterComponent.prototype.ngOnInit = function () {
        if (this.favorites === undefined)
            this.favorites = false;
        if (this.createFilters === undefined)
            this.createFilters = true;
        if (this.brands.indexOf('Todos') === -1) {
            this.brands.sort().unshift('Todos');
        }
        this.brandSelected = 'Todos';
        if (this.types.indexOf('Todos') === -1) {
            this.types.sort().unshift('Todos');
        }
        this.typeSelected = 'Todos';
        this.name = '';
        this.price = 0;
        this.textButtonFilters = 'Mostrar filtros';
    };
    /**
     * @name executeFilter
     * @description emits a signal to the parent component to indicates that the user
     *              pressed the button, sending the values of the filter
     */
    OptionsFilterComponent.prototype.executeFilter = function () {
        var filterOptions = {
            brand: this.brandSelected,
            type: this.typeSelected,
            name: this.name,
            price: this.price
        };
        this.filter.emit(filterOptions);
    };
    /**
     * @name positiveNumbersOnly
     * @description checks if the key pressed, received as a parameter, is a number
     * @param event keyboard event object with the information of the pressed key
     * @retruns a boolean, true if is a number, otherwise, false
     */
    OptionsFilterComponent.prototype.positiveNumbersOnly = function (event) {
        return event.charCode > 47;
    };
    /**
     * @name resetFilter
     * @description returns the values of the filter to the initials and execute it
     */
    OptionsFilterComponent.prototype.resetFilter = function () {
        this.brandSelected = 'Todos';
        this.typeSelected = 'Todos';
        this.price = 0;
        this.name = '';
        this.executeFilter();
    };
    /**
     * @name updateTextButtonFilters
     * @description updates the text to show in the button that show / hide the filters
     */
    OptionsFilterComponent.prototype.updateTextButtonFilters = function () {
        if (getComputedStyle(this.viewFilters.nativeElement).display !== 'none') {
            this.textButtonFilters = 'Mostrar filtros';
        }
        else {
            this.textButtonFilters = 'Ocultar filtros';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filters'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OptionsFilterComponent.prototype, "viewFilters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('brands'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OptionsFilterComponent.prototype, "brands", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('types'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OptionsFilterComponent.prototype, "types", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('favorites'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], OptionsFilterComponent.prototype, "favorites", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('createFilters'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], OptionsFilterComponent.prototype, "createFilters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('filter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OptionsFilterComponent.prototype, "filter", void 0);
    OptionsFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options-filter',
            template: __webpack_require__(/*! ./options-filter.component.html */ "./src/app/components/options-filter/options-filter.component.html"),
            styles: [__webpack_require__(/*! ./options-filter.component.scss */ "./src/app/components/options-filter/options-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionsFilterComponent);
    return OptionsFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/paginator/paginator.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-2\">\n  <div class=\"col-12 text-center\">\n    <div class=\"btn-group\" role=\"group\">\n      <button\n        type=\"button\"\n        class=\"btn btn-secondary\"\n        [disabled]=\"page === 1\" \n        (click)=\"goToPage(1)\">\n        &lt;&lt;\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-secondary\"\n        [disabled]=\"page === 1\" \n        (click)=\"goToPage(page - 1)\">\n        &lt;\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn\"\n        [disabled]=\"page === i\" \n        [ngClass]=\"{'btn-primary': page === i,\n          'btn-secondary': page !== i}\" \n        *ngFor=\"let i of pageButtons\"\n        (click)=\"goToPage(i)\">\n        {{i}}\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-secondary\"\n        [disabled]=\"page === numPages\" \n        (click)=\"goToPage(page + 1)\">\n        &gt;\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-secondary\"\n        [disabled]=\"page === numPages\" \n        (click)=\"goToPage(numPages)\">\n        &gt;&gt;\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/paginator/paginator.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/paginator/paginator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.ts ***!
  \*************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        // event to trigger when the user changes the page
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @name ngOnChanges
     * @description updates the values of the object when a changes as detected
     */
    PaginatorComponent.prototype.ngOnChanges = function () {
        this.initPaginatorValues();
    };
    /**
     * @name initPaginatorValues
     * @description calculates the values for number of pages and the list of buttons
     */
    PaginatorComponent.prototype.initPaginatorValues = function () {
        this.calculateNumPages();
        this.calculatePageButtons();
    };
    /**
     * @name calculateNumPages
     * @description calculates the number of pages
     */
    PaginatorComponent.prototype.calculateNumPages = function () {
        this.numPages = Math.ceil(this.numItems / this.forPage);
    };
    /**
     * @name calculatePageButtons
     * @description according the values received and calculated, makes a list with the buttons needed to the pagination
     */
    PaginatorComponent.prototype.calculatePageButtons = function () {
        this.pageButtons = [];
        var start = null;
        var end = null;
        switch (this.numPages) {
            case 1:
                start = end = 1;
                break;
            case 2:
                start = 1;
                end = 2;
                break;
            default:
                if (this.page === 1) {
                    start = 1;
                    end = 3;
                }
                else if (this.page === this.numPages) {
                    start = this.numPages - 2;
                    end = this.numPages;
                }
                else {
                    start = this.page - 1;
                    end = this.page + 1;
                }
                break;
        }
        for (var i = start; i <= end; i++) {
            this.pageButtons.push(i);
        }
    };
    /**
     * @name goToPage
     * @description updates the current page and the list of buttons to show
     * @param page the new current page
     */
    PaginatorComponent.prototype.goToPage = function (page) {
        this.page = page;
        this.calculatePageButtons();
        this.changePage.emit(this.page);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('page'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginatorComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('numItems'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginatorComponent.prototype, "numItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('forPage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginatorComponent.prototype, "forPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('changePage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaginatorComponent.prototype, "changePage", void 0);
    PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/components/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.scss */ "./src/app/components/paginator/paginator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");






var ProductsService = /** @class */ (function () {
    /**
     * @name constructor
     * @description init the values that needs the service
     * @param requestsService instance of the class for make requests of files
     */
    function ProductsService(requestsService, storageService) {
        this.requestsService = requestsService;
        this.storageService = storageService;
        this.dataPath = 'assets/data/InsurProducts.json';
        this.rawData = [];
        this.brands = [];
        this.types = [];
    }
    /**
     * @name getRawData
     * @description returns the products data
     * @returns array of objects
     */
    ProductsService.prototype.getRawData = function () {
        return this.rawData;
    };
    /**
     * @name getBrands
     * @description returns the product brands list
     * @returns array of strings
     */
    ProductsService.prototype.getBrands = function () {
        return this.brands;
    };
    /**
     * @name getTypes
     * @description returns the product types list
     * @returns array of strings
     */
    ProductsService.prototype.getTypes = function () {
        return this.types;
    };
    /**
     * @name setProductsData
     * @description using the requested service, gets the products data and, if the request was successful, process it
     * @returns aan observable object that content any object
     */
    ProductsService.prototype.setProductsData = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.requestsService.loadJSONData(_this.dataPath)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                observer.complete();
            }))
                .subscribe(function (rawData) {
                _this.processData(rawData);
                observer.next();
            }, function (error) {
                observer.error(error);
            });
        });
        return observable;
    };
    /**
     * @name processData
     * @description put the data into the property of the component created for it,
     *              adding a value for indicates if is a favorite product,
     *              and creates the lists for brands and types of products
     * @param products array of objects
     */
    ProductsService.prototype.processData = function (products) {
        var _this = this;
        var favoritesLocal = [];
        if (this.storageService.keyExists('LOCAL', 'favorites')) {
            favoritesLocal = this.storageService.getJSONValue('LOCAL', 'favorites');
        }
        products.forEach(function (element) {
            var product = {
                id: Number(element.id),
                name: element.name,
                brand: element.brand,
                brandImage: element["brand-image"],
                kind: element.kind,
                kindImage: element["kind-image"],
                price: Number(element.price),
                favorite: favoritesLocal.indexOf(Number(element.id)) !== -1 ? true : false
            };
            _this.rawData.push(product);
            if (_this.brands.indexOf(element.brand) === -1) {
                _this.brands.push(element.brand);
            }
            if (_this.types.indexOf(element.kind) === -1) {
                _this.types.push(element.kind);
            }
        });
    };
    /**
     * @name filterData
     * @description filters the data according the options received as a parameter
     * @param filter object with the options to filter
     * @returns array of objects (the products)
     */
    ProductsService.prototype.filterData = function (filter) {
        if (!filter.name && !filter.price &&
            filter.brand === 'Todos' && filter.type === 'Todos') {
            if (filter.favorite) {
                return this.getRawData().filter(function (element) { return element.favorite; });
            }
            else {
                return this.getRawData();
            }
        }
        else {
            return this.rawData.filter(function (element) {
                var filterBrand = true;
                var filterType = true;
                var filterName = true;
                var filterPrice = true;
                var filterFavorite = true;
                if (filter.brand !== 'Todos') {
                    filterBrand = element.brand === filter.brand;
                }
                if (filter.type !== 'Todos') {
                    filterType = element.kind === filter.type;
                }
                if (filter.price && filter.price > 0) {
                    filterPrice = element.price <= filter.price;
                }
                if (filter.name) {
                    filterName = element.name.indexOf(filter.name) > -1;
                }
                if (filter.favorite) {
                    filterFavorite = element.favorite;
                }
                return filterBrand && filterType && filterName && filterPrice && filterFavorite;
            });
        }
    };
    /**
     * @name orderData
     * @description orders the data according the options received as a parameter
     * @param data the data that must be ordered
     * @param options options that indicates how order the data
     * @returns array of objects (products)
     */
    ProductsService.prototype.orderData = function (data, options) {
        return data.sort(function (a, b) {
            var valueA = a[options.field];
            var valueB = b[options.field];
            if (typeof valueA === 'string') {
                valueA = valueA.toUpperCase();
            }
            if (typeof valueB === 'string') {
                valueB = valueB.toUpperCase();
            }
            var result = 0;
            if (valueA > valueB) {
                result = 1;
            }
            else if (valueB > valueA) {
                result = -1;
            }
            if (options.type === 'DESC') {
                result *= -1;
            }
            return result;
        });
    };
    /**
     * @name updateFavorite
     * @description updates the 'favorite' property of a product, turning upside down their value
     * @param id identificator of the product to update
     */
    ProductsService.prototype.updateFavorite = function (id) {
        var index = this.getIndexFromId(id);
        this.rawData[index].favorite = !this.rawData[index].favorite;
        var favorites = this.rawData.filter(function (element) { return element.favorite; }).map(function (element) { return element.id; });
        this.storageService.setJSONValue('LOCAL', 'favorites', favorites);
    };
    /**
     * @name getProductName
     * @description returns the name of a product
     * @param id id of the product
     * @returns a string
     */
    ProductsService.prototype.getProductName = function (id) {
        return this.rawData[this.getIndexFromId(id)].name;
    };
    /**
     * @name getIndexFromId
     * @description searches the array index of a product by their id
     * @param id id of the product
     * @returns a number
     */
    ProductsService.prototype.getIndexFromId = function (id) {
        return this.rawData.findIndex(function (element) { return element.id === id; });
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/requests.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/requests.service.ts ***!
  \**********************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RequestsService = /** @class */ (function () {
    function RequestsService(http) {
        this.http = http;
    }
    /**
     * @name loadJSONData
     * @description loads a JSON file
     * @param file file to load
     * @returns an observable object that contains an array of objects
     */
    RequestsService.prototype.loadJSONData = function (file) {
        return this.http.get(file, {
            responseType: 'json'
        });
    };
    RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequestsService);
    return RequestsService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * StorageService
 * class for manage the local storage of the browser
 */
var StorageService = /** @class */ (function () {
    /**
     * constructor
     */
    function StorageService() {
        this.session = 'SESSION';
        this.local = 'LOCAL';
    }
    /**
     * store
     * this function permits choose a storage by type
     * @param tipo a string that indicates the type of storage to use
     *             SESSION = session storage, LOCAL = local storage
     * @returns null if the type of storage isn't indicted, otherwise, the storage
     */
    StorageService.prototype.store = function (tipo) {
        if (tipo.toUpperCase() === this.session) {
            return sessionStorage;
        }
        else if (tipo.toLocaleUpperCase() === this.local) {
            return localStorage;
        }
        return null;
    };
    /**
     * setValue
     * saves a value into the storage
     * @param type the type of storage to use
     * @param key name of the key to save the value
     * @param value the value that be saved
     * @returns true if the value was saved correctly, otherwise, false
     */
    StorageService.prototype.setValue = function (type, key, value) {
        try {
            this.store(type).setItem(key.toUpperCase(), value);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * getValue
     * get a value of the storage
     * @param type the type of storage where get the value
     * @param key the key that contains the value to get
     * @returns the value, if it exists into the storage, otherwise, null
     */
    StorageService.prototype.getValue = function (type, key) {
        try {
            return this.store(type).getItem(key.toUpperCase());
        }
        catch (e) {
            return null;
        }
    };
    /**
     * keyExists
     * checks if a key exists into the local storage
     * @param type the type of storage where check the key
     * @param key the key to check
     * @returns true if exists, false if not, null in case of error
     */
    StorageService.prototype.keyExists = function (type, key) {
        try {
            return this.store(type).hasOwnProperty(key.toUpperCase());
        }
        catch (e) {
            return null;
        }
    };
    /**
     * deleteValue
     * delete a value of the local storage
     * @param type the type of storage where is the value to delete
     * @param key the key that contains the value to delete
     */
    StorageService.prototype.deleteValue = function (type, key) {
        try {
            this.store(type).removeItem(key.toUpperCase());
        }
        catch (e) {
            return null;
        }
    };
    /**
     * getJSONValue
     * return a value of the storage as a JSON data
     * @param type the type of storage where get the value
     * @param key the key that contains the value to get
     * @returns the value, if it exists into the storage, otherwise, null
     */
    StorageService.prototype.getJSONValue = function (type, key) {
        var valueString = this.getValue(type, key);
        var result;
        if (valueString !== null) {
            try {
                result = JSON.parse(valueString);
            }
            catch (e) {
                result = null;
            }
        }
        else {
            return result = null;
        }
        return result;
    };
    /**
     * setJSONValue
     * saves a values into the storage as a JSON data
     * @param type the type of storage to use
     * @param key name of the key to save the value
     * @param value the value that be saved
     * @returns true if the value was saved correctly, otherwise, false
     */
    StorageService.prototype.setJSONValue = function (type, key, value) {
        var valueString = '';
        try {
            valueString = JSON.stringify(value);
        }
        catch (e) {
            return false;
        }
        return this.setValue(type, key, valueString);
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
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

module.exports = __webpack_require__(/*! D:\proyectos\angular\Singular Cover\insurance\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map