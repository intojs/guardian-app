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

/***/ "./src/app/app-services/app-services.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-services/app-services.module.ts ***!
  \*****************************************************/
/*! exports provided: AppServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServicesModule", function() { return AppServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article/article.service */ "./src/app/app-services/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppServicesModule = /** @class */ (function () {
    function AppServicesModule() {
    }
    AppServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [
                _article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]
            ]
        })
    ], AppServicesModule);
    return AppServicesModule;
}());



/***/ }),

/***/ "./src/app/app-services/article/article.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/app-services/article/article.service.ts ***!
  \*********************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _domain_article_response_ArticleResponse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/article-response/ArticleResponse.service */ "./src/app/domain/article-response/ArticleResponse.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleService = /** @class */ (function () {
    function ArticleService(httpClient) {
        this.httpClient = httpClient;
        this.url = "https://content.guardianapis.com/search?show-fields=body,thumbnail,byline&api-key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey;
    }
    ArticleService.prototype.getArticleData = function () {
        return this.httpClient
            .get(this.url);
    };
    ArticleService.prototype.createArticleResponse = function (articlePayload) {
        return articlePayload
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (payload) {
            var result = _domain_article_response_ArticleResponse_service__WEBPACK_IMPORTED_MODULE_4__["createResponse"](payload);
            if (result.isError()) {
                throw result.getError();
            }
            return result.getValue();
        }));
    };
    ArticleService.prototype.getArticles = function () {
        return this.getArticleData()
            .pipe(this.createArticleResponse);
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _app_services_app_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-services/app-services.module */ "./src/app/app-services/app-services.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _store_store_module__WEBPACK_IMPORTED_MODULE_2__["AppStore"],
                _app_services_app_services_module__WEBPACK_IMPORTED_MODULE_3__["AppServicesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
            ],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <nav class=\"navbar navbar-light bg-light\">\n      <div class=\"navbar-brand\">\n        Guardian Highlights\n      </div>\n    </nav>\n    <div class=\"container mt-3\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mb-3\">\n          <app-article-container></app-article-container>\n        </div>\n        <div class=\"col-lg-4 mb-3\">\n          <app-article-list-container></app-article-list-container>\n        </div>\n      </div>\n    </div>\n  ",
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/article-list/article-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/article-list/article-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/article/Article.service */ "./src/app/domain/article/Article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent() {
        this.selectArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placeholders = this.generatePlaceholders();
    }
    ArticleListComponent.prototype.generatePlaceholders = function (placeholders, nr) {
        if (placeholders === void 0) { placeholders = []; }
        if (nr === void 0) { nr = 0; }
        if (nr < 10) {
            placeholders.push('...');
            return this.generatePlaceholders(placeholders, nr += 1);
        }
        return placeholders;
    };
    ArticleListComponent.prototype.trackArticlesBy = function (index, article) {
        return article.id;
    };
    ArticleListComponent.prototype.trackPlaceholdersBy = function (index) {
        return index;
    };
    ArticleListComponent.prototype.isActive = function (current, selected) {
        return _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__["isEqual"](current, selected);
    };
    ArticleListComponent.prototype.onButtonClick = function (article) {
        this.selectArticle.emit(article);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ArticleListComponent.prototype, "articles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleListComponent.prototype, "selectedArticle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ArticleListComponent.prototype, "selectArticle", void 0);
    ArticleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-list',
            template: "\n    <div class=\"list-group\">\n      <button\n        type=\"button\"\n        class=\"list-group-item list-group-item-action\"\n        *ngFor=\"let article of articles; trackBy: trackArticlesBy\"\n        [ngClass]=\"{active: isActive(article, selectedArticle)}\"\n        (click)=\"onButtonClick(article)\"\n        [innerHtml]=\"article | webTitle\"\n      >\n      </button>\n    </div>\n    <div\n      class=\"list-group\"\n      *ngIf=\"!articles || articles?.length === 0\"\n    >\n      <button\n        type=\"button\"\n        class=\"list-group-item list-group-item-action\"\n        *ngFor=\"let placeholder of placeholders; trackPlaceholdersBy\"\n      >\n        {{placeholder}}\n      </button>\n    </div>\n  ",
            styles: ["\n    :host {\n      display: block;\n    }\n\n    button {\n      cursor: pointer;\n    }\n  "],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/components/article-list/article-list.container.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/article-list/article-list.container.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListContainer", function() { return ArticleListContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selected_article_selected_article_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selected-article/selected-article.selectors */ "./src/app/store/selected-article/selected-article.selectors.ts");
/* harmony import */ var _store_article_article_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/article/article.selectors */ "./src/app/store/article/article.selectors.ts");
/* harmony import */ var _store_article_actions_article_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/article/actions/article.actions */ "./src/app/store/article/actions/article.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleListContainer = /** @class */ (function () {
    function ArticleListContainer(store) {
        this.store = store;
    }
    ArticleListContainer.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_article_actions_article_actions__WEBPACK_IMPORTED_MODULE_4__["GetArticles"]());
        this.articles$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_article_article_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllArticles"]));
        this.selectedArticle$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selected_article_selected_article_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedArticle"]));
    };
    ArticleListContainer.prototype.onArticleSelect = function (article) {
        this.store.dispatch(new _store_article_actions_article_actions__WEBPACK_IMPORTED_MODULE_4__["SelectArticle"](article));
    };
    ArticleListContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-list-container',
            template: "\n    <app-article-list\n      [articles]=\"articles$ | async\"\n      [selectedArticle]=\"selectedArticle$ | async\"\n      (selectArticle)=\"onArticleSelect($event)\"\n    >\n    </app-article-list>\n  "
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ArticleListContainer);
    return ArticleListContainer;
}());



/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: "\n    <div class=\"card\">\n      <img\n        *ngIf=\"article | thumbnail; else placeholder\"\n        [src]=\"article | thumbnail\"\n        [alt]=\"article | webTitle\"\n        class=\"card-img-top\"\n      >\n      <ng-template #placeholder>\n        <div class=\"img-placeholder\"></div>\n      </ng-template>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{article | webTitle}}</h5>\n        <div class=\"card-details mb-4\">\n          <div class=\"card-details__by-line\">\n            <h6 class=\"card-subtitle text-muted\">By: {{article | byline}}</h6>\n          </div>\n          <div class=\"card-details__date\">\n            <h6 class=\"card-subtitle text-muted\">{{article | webPublicationDate}}</h6>\n          </div>\n        </div>\n        <div class=\"card-text\" [innerHTML]=\"article | articleBody\"></div>\n      </div>\n    </div>\n  ",
            styles: ["\n    :host {\n      display: block;\n    }\n\n    :host ::ng-deep img {\n      width: 100%;\n      height: auto;\n    }\n\n    .img-placeholder {\n      height: 200px;\n      border-top-left-radius: calc(0.25rem - 1px);\n      border-top-right-radius: calc(0.25rem - 1px);\n      background: #F8F9FA url('assets/placeholder.svg') no-repeat center center;\n    }\n\n    .card-details {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .card-details__by-line,\n    .card-details__date {\n      padding: 5px 0;\n    }\n\n    .card-subtitle {\n      margin: 0;\n    }\n\n    @media (min-width: 768px) {\n      .card-details {\n        flex-direction: row;\n      }\n\n      .card-details__by-line,\n      .card-details__date {\n        flex-basis: 40%;\n      }\n    }\n  "],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/article/article.container.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.container.ts ***!
  \*********************************************************/
/*! exports provided: ArticleContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContainer", function() { return ArticleContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selected_article_selected_article_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selected-article/selected-article.selectors */ "./src/app/store/selected-article/selected-article.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleContainer = /** @class */ (function () {
    function ArticleContainer(store) {
        this.store = store;
    }
    ArticleContainer.prototype.ngOnInit = function () {
        this.article$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selected_article_selected_article_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedArticle"]));
    };
    ArticleContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-container',
            template: "\n    <app-article [article]=\"article$ | async\"></app-article>\n  "
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ArticleContainer);
    return ArticleContainer;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _article_article_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/article.container */ "./src/app/components/article/article.container.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/article.component */ "./src/app/components/article/article.component.ts");
/* harmony import */ var _article_list_article_list_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-list/article-list.container */ "./src/app/components/article-list/article-list.container.ts");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/components/article-list/article-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _article_article_container__WEBPACK_IMPORTED_MODULE_4__["ArticleContainer"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"],
                _article_list_article_list_container__WEBPACK_IMPORTED_MODULE_6__["ArticleListContainer"],
                _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/domain/Result.ts":
/*!**********************************!*\
  !*** ./src/app/domain/Result.ts ***!
  \**********************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
var Result = /** @class */ (function () {
    function Result(value, error) {
        if (value) {
            this.value = value;
        }
        if (error) {
            this.error = error;
        }
    }
    Result.ok = function (ok) {
        return new Result(ok);
    };
    Result.error = function (err) {
        return new Result(undefined, err);
    };
    Result.prototype.isOk = function () {
        return this.error === undefined;
    };
    Result.prototype.isError = function () {
        return this.error !== undefined;
    };
    Result.prototype.chain = function (f) {
        return this.isOk() ?
            f(this.value) :
            Result.error(this.error);
    };
    Result.prototype.map = function (f) {
        return this.isOk() ?
            Result.ok(f(this.value)) :
            Result.error(this.error);
    };
    Result.prototype.concat = function (aResult) {
        if (this.isError()) {
            return Result.error(this.getError());
        }
        if (aResult.isError()) {
            return Result.error(aResult.getError());
        }
        return Result.ok(Array().concat(this.value, aResult.getValue()));
    };
    Result.prototype.getError = function () {
        return this.error;
    };
    Result.prototype.getValue = function () {
        return this.value;
    };
    return Result;
}());



/***/ }),

/***/ "./src/app/domain/article-response/ArticleResponse.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/domain/article-response/ArticleResponse.service.ts ***!
  \********************************************************************/
/*! exports provided: createResponse, getResults, getArticleMetas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResponse", function() { return createResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResults", function() { return getResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleMetas", function() { return getArticleMetas; });
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Result */ "./src/app/domain/Result.ts");


var schema = {
    response: {
        status: joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
        userTier: joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
        total: joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required(),
        startIndex: joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required(),
        pageSize: joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required(),
        currentPage: joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required(),
        pages: joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required(),
        orderBy: joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
        results: joi__WEBPACK_IMPORTED_MODULE_0__["array"]().required()
    }
};
var createResponse = function (payload) {
    var error = joi__WEBPACK_IMPORTED_MODULE_0__["validate"](payload, schema, { presence: 'required' }).error;
    return error ?
        _Result__WEBPACK_IMPORTED_MODULE_1__["Result"].error(error) :
        _Result__WEBPACK_IMPORTED_MODULE_1__["Result"].ok(payload.response);
};
var getResults = function (response) {
    return response &&
        response.results ?
        response.results :
        [];
};
var getArticleMetas = function (response) {
    var startIndex = response.startIndex, pageSize = response.pageSize, currentPage = response.currentPage, pages = response.pages, orderBy = response.orderBy;
    return {
        startIndex: startIndex,
        pageSize: pageSize,
        currentPage: currentPage,
        pages: pages,
        orderBy: orderBy
    };
};


/***/ }),

/***/ "./src/app/domain/article/Article.service.ts":
/*!***************************************************!*\
  !*** ./src/app/domain/article/Article.service.ts ***!
  \***************************************************/
/*! exports provided: findFirstArticle, getThumbnail, getWebTitle, getByline, getBody, getWebPublicationDate, isEqual, articlesExist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFirstArticle", function() { return findFirstArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThumbnail", function() { return getThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebTitle", function() { return getWebTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByline", function() { return getByline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBody", function() { return getBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebPublicationDate", function() { return getWebPublicationDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlesExist", function() { return articlesExist; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

var findFirstArticle = function (articles) {
    return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["head"])(articles);
};
var getThumbnail = function (article) {
    return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["path"])(['fields', 'thumbnail'], article);
};
var getWebTitle = function (article) {
    return article && article.webTitle ? article.webTitle : '...';
};
var getByline = function (article) { return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["path"])(['fields', 'byline'], article) || '...'; };
var getBody = function (article) { return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["path"])(['fields', 'body'], article) || '...'; };
var getWebPublicationDate = function (article) {
    return article && article.webPublicationDate ? article.webPublicationDate : undefined;
};
var isEqual = function (articleOne, articleTwo) {
    return !!(articleOne && articleTwo && articleOne.id === articleTwo.id);
};
var articlesExist = function (articles) { return !!(articles && articles.length > 0); };


/***/ }),

/***/ "./src/app/pipes/article/article-body.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/article/article-body.pipe.ts ***!
  \****************************************************/
/*! exports provided: ArticleBodyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleBodyPipe", function() { return ArticleBodyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/article/Article.service */ "./src/app/domain/article/Article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ArticleBodyPipe = /** @class */ (function () {
    function ArticleBodyPipe() {
    }
    ArticleBodyPipe.prototype.transform = function (article) {
        return _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__["getBody"](article);
    };
    ArticleBodyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'articleBody',
            pure: true
        })
    ], ArticleBodyPipe);
    return ArticleBodyPipe;
}());



/***/ }),

/***/ "./src/app/pipes/article/byline.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/article/byline.pipe.ts ***!
  \**********************************************/
/*! exports provided: BylinePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BylinePipe", function() { return BylinePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/article/Article.service */ "./src/app/domain/article/Article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BylinePipe = /** @class */ (function () {
    function BylinePipe() {
    }
    BylinePipe.prototype.transform = function (article) {
        return _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__["getByline"](article);
    };
    BylinePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'byline',
            pure: true
        })
    ], BylinePipe);
    return BylinePipe;
}());



/***/ }),

/***/ "./src/app/pipes/article/thumbnail.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/article/thumbnail.pipe.ts ***!
  \*************************************************/
/*! exports provided: ThumbnailPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailPipe", function() { return ThumbnailPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/article/Article.service */ "./src/app/domain/article/Article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ThumbnailPipe = /** @class */ (function () {
    function ThumbnailPipe() {
    }
    ThumbnailPipe.prototype.transform = function (article) {
        return _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__["getThumbnail"](article);
    };
    ThumbnailPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'thumbnail',
            pure: true
        })
    ], ThumbnailPipe);
    return ThumbnailPipe;
}());



/***/ }),

/***/ "./src/app/pipes/article/web-publication-date/web-publication-date.pipe.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pipes/article/web-publication-date/web-publication-date.pipe.ts ***!
  \*********************************************************************************/
/*! exports provided: WebPublicationDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPublicationDatePipe", function() { return WebPublicationDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/article/Article.service */ "./src/app/domain/article/Article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebPublicationDatePipe = /** @class */ (function () {
    function WebPublicationDatePipe(datePipe) {
        this.datePipe = datePipe;
    }
    WebPublicationDatePipe.prototype.transform = function (article) {
        var publicationDate = _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_2__["getWebPublicationDate"](article);
        return publicationDate ?
            this.datePipe.transform(publicationDate) :
            '...';
    };
    WebPublicationDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'webPublicationDate',
            pure: true
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], WebPublicationDatePipe);
    return WebPublicationDatePipe;
}());



/***/ }),

/***/ "./src/app/pipes/article/web-title.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/article/web-title.pipe.ts ***!
  \*************************************************/
/*! exports provided: WebTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTitlePipe", function() { return WebTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/article/Article.service */ "./src/app/domain/article/Article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WebTitlePipe = /** @class */ (function () {
    function WebTitlePipe() {
    }
    WebTitlePipe.prototype.transform = function (article) {
        return _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_1__["getWebTitle"](article);
    };
    WebTitlePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'webTitle',
            pure: true
        })
    ], WebTitlePipe);
    return WebTitlePipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _article_thumbnail_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article/thumbnail.pipe */ "./src/app/pipes/article/thumbnail.pipe.ts");
/* harmony import */ var _article_web_title_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/web-title.pipe */ "./src/app/pipes/article/web-title.pipe.ts");
/* harmony import */ var _article_byline_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/byline.pipe */ "./src/app/pipes/article/byline.pipe.ts");
/* harmony import */ var _article_article_body_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/article-body.pipe */ "./src/app/pipes/article/article-body.pipe.ts");
/* harmony import */ var _article_web_publication_date_web_publication_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/web-publication-date/web-publication-date.pipe */ "./src/app/pipes/article/web-publication-date/web-publication-date.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _article_thumbnail_pipe__WEBPACK_IMPORTED_MODULE_2__["ThumbnailPipe"],
                _article_web_title_pipe__WEBPACK_IMPORTED_MODULE_3__["WebTitlePipe"],
                _article_byline_pipe__WEBPACK_IMPORTED_MODULE_4__["BylinePipe"],
                _article_article_body_pipe__WEBPACK_IMPORTED_MODULE_5__["ArticleBodyPipe"],
                _article_web_publication_date_web_publication_date_pipe__WEBPACK_IMPORTED_MODULE_6__["WebPublicationDatePipe"]
            ],
            exports: [
                _article_thumbnail_pipe__WEBPACK_IMPORTED_MODULE_2__["ThumbnailPipe"],
                _article_web_title_pipe__WEBPACK_IMPORTED_MODULE_3__["WebTitlePipe"],
                _article_byline_pipe__WEBPACK_IMPORTED_MODULE_4__["BylinePipe"],
                _article_article_body_pipe__WEBPACK_IMPORTED_MODULE_5__["ArticleBodyPipe"],
                _article_web_publication_date_web_publication_date_pipe__WEBPACK_IMPORTED_MODULE_6__["WebPublicationDatePipe"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/store/article-metas/reducer/article-metas.reducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/store/article-metas/reducer/article-metas.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../article/actions/ArticleActionTypes */ "./src/app/store/article/actions/ArticleActionTypes.ts");
/* harmony import */ var _domain_article_response_ArticleResponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/article-response/ArticleResponse.service */ "./src/app/domain/article-response/ArticleResponse.service.ts");


var initialState = undefined;
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].GET_ARTICLES_SUCCESS: {
            return _domain_article_response_ArticleResponse_service__WEBPACK_IMPORTED_MODULE_1__["getArticleMetas"](action.payload);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/article-status/reducer/article-status.reducer.ts":
/*!************************************************************************!*\
  !*** ./src/app/store/article-status/reducer/article-status.reducer.ts ***!
  \************************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../article/actions/ArticleActionTypes */ "./src/app/store/article/actions/ArticleActionTypes.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loading: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].GET_ARTICLES: {
            return __assign({}, state, { loading: true });
        }
        case _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].GET_ARTICLES_SUCCESS: {
            return {
                loading: false
            };
        }
        case _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].GET_ARTICLES_ERROR: {
            return {
                error: action.payload,
                loading: false
            };
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/article/actions/ArticleActionTypes.ts":
/*!*************************************************************!*\
  !*** ./src/app/store/article/actions/ArticleActionTypes.ts ***!
  \*************************************************************/
/*! exports provided: ArticleActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleActionTypes", function() { return ArticleActionTypes; });
var ArticleActionTypes;
(function (ArticleActionTypes) {
    ArticleActionTypes["GET_ARTICLES"] = "[Article] Get Articles";
    ArticleActionTypes["GET_ARTICLES_SUCCESS"] = "[Article] Get Articles Success";
    ArticleActionTypes["GET_ARTICLES_ERROR"] = "[Article] Get Articles Error";
    ArticleActionTypes["SELECT_ARTICLE"] = "[Article] Select";
})(ArticleActionTypes || (ArticleActionTypes = {}));


/***/ }),

/***/ "./src/app/store/article/actions/article.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/article/actions/article.actions.ts ***!
  \**********************************************************/
/*! exports provided: GetArticles, GetArticlesSuccess, GetArticlesError, SelectArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArticles", function() { return GetArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArticlesSuccess", function() { return GetArticlesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArticlesError", function() { return GetArticlesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectArticle", function() { return SelectArticle; });
/* harmony import */ var _ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleActionTypes */ "./src/app/store/article/actions/ArticleActionTypes.ts");

var GetArticles = /** @class */ (function () {
    function GetArticles() {
        this.type = _ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].GET_ARTICLES;
    }
    return GetArticles;
}());

var GetArticlesSuccess = /** @class */ (function () {
    function GetArticlesSuccess(payload) {
        this.payload = payload;
        this.type = _ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].GET_ARTICLES_SUCCESS;
    }
    return GetArticlesSuccess;
}());

var GetArticlesError = /** @class */ (function () {
    function GetArticlesError(payload) {
        this.payload = payload;
        this.type = _ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].GET_ARTICLES_ERROR;
    }
    return GetArticlesError;
}());

var SelectArticle = /** @class */ (function () {
    function SelectArticle(payload) {
        this.payload = payload;
        this.type = _ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].SELECT_ARTICLE;
    }
    return SelectArticle;
}());



/***/ }),

/***/ "./src/app/store/article/article.selectors.ts":
/*!****************************************************!*\
  !*** ./src/app/store/article/article.selectors.ts ***!
  \****************************************************/
/*! exports provided: selectArticleState, selectAllArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectArticleState", function() { return selectArticleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticles", function() { return selectAllArticles; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducer_article_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer/article.reducer */ "./src/app/store/article/reducer/article.reducer.ts");


var selectArticleState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('articles');
var selectAllArticles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectArticleState, _reducer_article_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAllArticles"]);


/***/ }),

/***/ "./src/app/store/article/effects/article.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/article/effects/article.effects.ts ***!
  \**********************************************************/
/*! exports provided: ArticleEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEffects", function() { return ArticleEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_services_article_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-services/article/article.service */ "./src/app/app-services/article/article.service.ts");
/* harmony import */ var _actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/ArticleActionTypes */ "./src/app/store/article/actions/ArticleActionTypes.ts");
/* harmony import */ var _actions_article_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/article.actions */ "./src/app/store/article/actions/article.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticleEffects = /** @class */ (function () {
    function ArticleEffects(actions$, articleService) {
        var _this = this;
        this.actions$ = actions$;
        this.articleService = articleService;
        this.getArticles$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_5__["ArticleActionTypes"].GET_ARTICLES), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this.articleService
                .getArticles()
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (articleResponse) {
                return new _actions_article_actions__WEBPACK_IMPORTED_MODULE_6__["GetArticlesSuccess"](articleResponse);
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_article_actions__WEBPACK_IMPORTED_MODULE_6__["GetArticlesError"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ArticleEffects.prototype, "getArticles$", void 0);
    ArticleEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _app_services_article_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]])
    ], ArticleEffects);
    return ArticleEffects;
}());



/***/ }),

/***/ "./src/app/store/article/reducer/article.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/article/reducer/article.reducer.ts ***!
  \**********************************************************/
/*! exports provided: adapter, initialState, reducer, selectAllArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllArticles", function() { return selectAllArticles; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/ArticleActionTypes */ "./src/app/store/article/actions/ArticleActionTypes.ts");
/* harmony import */ var _domain_article_response_ArticleResponse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/article-response/ArticleResponse.service */ "./src/app/domain/article-response/ArticleResponse.service.ts");



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
var initialState = adapter.getInitialState();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].GET_ARTICLES_SUCCESS: {
            return adapter.addAll(_domain_article_response_ArticleResponse_service__WEBPACK_IMPORTED_MODULE_2__["getResults"](action.payload), state);
        }
        default: {
            return state;
        }
    }
}
var selectAll = adapter.getSelectors().selectAll;
var selectAllArticles = selectAll;


/***/ }),

/***/ "./src/app/store/selected-article/reducer/selected-article.reducer.ts":
/*!****************************************************************************!*\
  !*** ./src/app/store/selected-article/reducer/selected-article.reducer.ts ***!
  \****************************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../article/actions/ArticleActionTypes */ "./src/app/store/article/actions/ArticleActionTypes.ts");
/* harmony import */ var _domain_article_response_ArticleResponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/article-response/ArticleResponse.service */ "./src/app/domain/article-response/ArticleResponse.service.ts");
/* harmony import */ var _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/article/Article.service */ "./src/app/domain/article/Article.service.ts");



var initialState = undefined;
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].GET_ARTICLES_SUCCESS: {
            return _domain_article_Article_service__WEBPACK_IMPORTED_MODULE_2__["findFirstArticle"](_domain_article_response_ArticleResponse_service__WEBPACK_IMPORTED_MODULE_1__["getResults"](action.payload));
        }
        case _article_actions_ArticleActionTypes__WEBPACK_IMPORTED_MODULE_0__["ArticleActionTypes"].SELECT_ARTICLE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/selected-article/selected-article.selectors.ts":
/*!**********************************************************************!*\
  !*** ./src/app/store/selected-article/selected-article.selectors.ts ***!
  \**********************************************************************/
/*! exports provided: getSelectedArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedArticle", function() { return getSelectedArticle; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getSelectedArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('selectedArticle');


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: reducers, AppStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _article_effects_article_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/effects/article.effects */ "./src/app/store/article/effects/article.effects.ts");
/* harmony import */ var _article_reducer_article_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/reducer/article.reducer */ "./src/app/store/article/reducer/article.reducer.ts");
/* harmony import */ var _article_status_reducer_article_status_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-status/reducer/article-status.reducer */ "./src/app/store/article-status/reducer/article-status.reducer.ts");
/* harmony import */ var _article_metas_reducer_article_metas_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-metas/reducer/article-metas.reducer */ "./src/app/store/article-metas/reducer/article-metas.reducer.ts");
/* harmony import */ var _selected_article_reducer_selected_article_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selected-article/reducer/selected-article.reducer */ "./src/app/store/selected-article/reducer/selected-article.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var reducers = {
    articleStatus: _article_status_reducer_article_status_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"],
    articleMetas: _article_metas_reducer_article_metas_reducer__WEBPACK_IMPORTED_MODULE_8__["reducer"],
    articles: _article_reducer_article_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
    selectedArticle: _selected_article_reducer_selected_article_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"]
};
var AppStore = /** @class */ (function () {
    function AppStore() {
    }
    AppStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([
                    _article_effects_article_effects__WEBPACK_IMPORTED_MODULE_5__["ArticleEffects"]
                ]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(reducers),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production
                })
            ]
        })
    ], AppStore);
    return AppStore;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiKey: 'c303d994-d3a9-4a09-816e-42eee8bd893f'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danieldughila/Projects/guardian-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map