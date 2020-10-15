(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"d-flex\" id=\"wrapper\">\n        <!-- Sidebar -->\n        <div class=\"bg-light border-right\" id=\"sidebar-wrapper\">\n          <div class=\"sidebar-heading\">My Cart</div>\n           <button id=\"\" class=\"btn btn-primary\" (click)=\"this.addProduct = !this.addProduct\">Add New</button><br><br>\n          <form *ngIf=\"addProduct\" (ngSubmit)=\"addNew()\" [formGroup]=\"addProductForm\">\n            <input type=\"text\" formControlName=\"name\" placeholder=\"product name\"><br>\n            <input type=\"text\" formControlName=\"id\" placeholder=\"product id\"><br>\n            <input type=\"text\" formControlName=\"price\" placeholder=\"product price\"><br>\n            <input type=\"file\" (change)=\"uploadImage($event)\" formControlName=\"image\" name=\"image\" placeholder=\"product image\"><br>\n            <!-- <input type=\"text\" formControlName=\"category\" placeholder=\"product category\"><br> -->\n            <select name=\"\" [(ngModel)]='nrSelect' formControlName=\"category\" id=\"\">\n              <!-- <option selected value=\"\">Meat & Fishes</option>  -->\n              <option value=\"5ef8636cd61ec32ac0e71990\" >Meat & Fishes</option>\n              <option value=\"5ef8638fd61ec32ac0e71996\">Wine & Drinks</option>\n              <option value=\"5ef86351d61ec32ac0e71986\">Vegetables & Fruits</option>\n              <option value=\"5ef86303d61ec32ac0e71960\">Milk & Eggs</option>\n            </select>\n            <button>Save</button>\n          </form>\n        </div>\n        <!-- /#sidebar-wrapper -->\n        <!-- Page Content -->\n        <div id=\"page-content-wrapper\">\n          <nav class=\"navbar navbar-expand-sm navbar-light border-bottom\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n              <button class=\"btn btn-primary\" id=\"menu-toggle\">Toggle Cart</button>\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n                aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n              <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" [class.active]=\"viewMode == 'all-products'\" (click)=\"viewMode ='all-products'\">All\n                    Products</a>\n                </li>\n                <li class=\"nav-item\" *ngFor=\"let c of category\">\n                  <a class=\"nav-link\" [class.active]=\"viewMode == c?.categoryName\" (click)=\"productsByCategory(c)\">\n                    {{c?.categoryName}}\n                  </a>\n                </li>\n                <li class=\"nav-item active\">\n                  <form class=\"form-inline my-2 my-lg-0\">\n                    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"\n                      (change)=\"searchProduct($event)\">\n                    <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n                  </form>\n                </li>\n              </ul>\n            </div>\n          </nav>\n          <br>\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"tab-slider--container col-auto\" [ngSwitch]=\"viewMode\">\n\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'all-products'\">\n                  <div class=\"card col-xl-2\" *ngFor=\"let p of allProducts; let i = index\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        <img src=\"http://localhost:4200/./uploads/{{p?.image}}\" alt='' width=\"200\" />\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price | json}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'Milk & Eggs'\">\n\n                  <div class=\"card col-xl-2\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'Vegetables & Fruits'\">\n                  <div class=\"col-auto\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'Meat & Fishes'\">\n                  <div class=\"col-auto\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                        <div class=\"card-text\">\n                          {{p?.image}}\n                          {{p?.productName}}\n                          {{p?.price}}₪\n                        </div>\n                        <br>\n                        <!-- Button trigger modal -->\n                        <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                          data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                          Add to Cart\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'Wine & Drinks'\">\n                  <div class=\"card col-sm-12\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <p class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'search'\">\n                  <div class=\"card col-xl-12\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\"\n                  aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Choose Quantity</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div>\n                          <input style=\"width:45px\" type=\"number\" [(ngModel)]=\"countVal\" />\n                        </div>\n                      </div>\n                      <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                        <!-- <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n                          (click)=\"addToCart()\">Save</button> -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- End Modal -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /#page-content-wrapper -->\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"/login\">\n    <img src=\"./././assets/osherad.png\" width=\"50\" height=\"30\" alt=\"logo\">\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\"\n    aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/login\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\">Products</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      phone & email\n    </form>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/Layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/Layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n\r\n  <app-header></app-header>\r\n\r\n</header>\r\n\r\n<main>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</main>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <div *ngIf=!user> <h4>Welcome!</h4> </div>\n      <button *ngIf=user&&!cart> <h4> Start shopping </h4></button>\n      <button *ngIf=user&&cart> <h4> Resume shopping </h4></button>\n      <br><br>\n      <h6> Registered? </h6> <br>\n      <form [formGroup]=\"loginForm\">\n        username: <input #username> <br><br>\n        password: <input #password> <br><br>\n        <button type=\"button\" (click)=\"login(username.value ,password.value)\">Login</button> \n        &nbsp; <a routerLink=\"/register\"><u>Sign up</u></a>\n      </form>\n    </div>\n    <div class=\"col-sm\">\n      <h2>Why Buy Our Products?</h2><br>\n      Because of the High quality of goods. <br>\n      Because of the fresh vegetables & fruits. <br>\n      Because we recognize that each customer is different, and we make our programs extremely customizable. <br><br>\n      <img src=\"../../../assets/osherad2.jpg\" class=\"osherad2\" alt=\"image\">\n    </div>\n    <div class=\"col-sm\">\n      <br><br>\n      <br><br>\n      <div>Available products in our store: </div> <br><br>\n      <div> Numbers of order submitted in our store: </div> <br><br>\n      <div class=\"Notification\">Notification: </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div id=\"sidebar-wrapper\">\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" [(ngModel)]=\"filter\" [ngModelOptions]=\"{standalone: true}\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"\n            (change)=\"searchProduct($event)\">\n            <!-- <input type=\"search\" [(ngModel)]=\"filter\" [ngModelOptions]=\"{standalone: true}\"> -->\n          <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form> <br>\n        <div class=\"sidebar-heading\">My Cart</div>\n        <hr>\n        <a class=\"products\" routerLink=\"/products\">Back to shop</a>\n        <div *ngIf=\"searchMode == false\">\n          <div class=\"list-group list-group-flush\" *ngFor=\"let cartItem of cartArr\">\n            <div class=\"list-group-item list-group-item-action\"> {{cartItem?.productName}}, {{cartItem?.price}}₪\n              X{{cartItem.quantity}}\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"searchMode == true\">\n          <div class=\"list-group list-group-flush\" *ngFor=\"let cartItem of searchResult\">\n            <div ngxTextHighlight [content]=\"cartItem?.productName\" [searchTerm]=\"filter\" [caseSensitive]=\"false\">\n             <!-- {{cartItem?.productName}}, {{cartItem?.price}}₪\n              X{{cartItem.quantity}}  -->\n              <!-- <div [innerHTML]=\" cartItem?.productName | highlight : filter\"></div> -->\n              \n            </div>\n                <p [innerHTML]=\"highlight(cartItem?.productName)\"></p>\n          </div>\n        </div>\n        <div>\n          <h5 class=\"text-danger\">No changes permitted here!</h5>\n        </div>\n        <div class=\"total\">Total: {{total}}₪</div>\n      </div>\n    </div>\n\n    <div class=\"col\">\n      <div id=\"sidebar-wrapper\">\n\n        <div class=\"sidebar-heading\">Order</div>\n        <hr>\n        <div class=\"sidebar-heading\">Shipping Details</div>\n        <hr>\n        <form class=\"form\" (ngSubmit)=\"performOrder()\">\n\n        City: <input type=\"text\" (focus)=\"setDetails()\"><br><br>\n        Street: <input type=\"text\" (focus)=\"setDetails()\">\n        <br><br>\n        Shipping Day:<input type=\"date\"><br><br>\n        \n        <div class=\"sidebar-heading\">Payments:</div>\n        <hr>\n        Credit Card:<input type=\"text\" (focus)=\"setDetails()\"> <br><br>\n        <button>ORDER</button>\n\n        </form> <br>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"d-flex\" id=\"wrapper\">\n        <!-- Sidebar -->\n        <div class=\"bg-light border-right\" id=\"sidebar-wrapper\">\n          <div class=\"sidebar-heading\">My Cart</div>\n          <button id=\"emptyCartBtn\" class=\"btn btn-primary\" (click)=\"emptyCart()\">Empty Cart</button>\n          <div class=\"list-group list-group-flush\" *ngFor=\"let cartItem of cartArr\">\n            <div class=\"list-group-item list-group-item-action bg-light\"> {{cartItem.productName}}, {{cartItem.price}}₪\n              X{{cartItem.quantity}}\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteProduct(cartItem)\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n          </div>\n          <a class=\"order\" routerLink=\"/order\">Order</a>\n          <div class=\"total\">Total: {{total}}₪</div>\n        </div>\n        <!-- /#sidebar-wrapper -->\n        <!-- Page Content -->\n        <div id=\"page-content-wrapper\">\n          <nav class=\"navbar navbar-expand-sm navbar-light border-bottom\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n              <button class=\"btn btn-primary\" id=\"menu-toggle\">Toggle Cart</button>\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n                aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n              <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" [class.active]=\"viewMode == 'all-products'\" (click)=\"viewMode ='all-products'\">All\n                    Products</a>\n                </li>\n                <li class=\"nav-item\" *ngFor=\"let c of category\">\n                  <a class=\"nav-link\" [class.active]=\"viewMode == c?.categoryName\" (click)=\"productsByCategory(c)\">\n                    {{c?.categoryName}}\n                  </a>\n                </li>\n                <li class=\"nav-item active\">\n                  <form class=\"form-inline my-2 my-lg-0\">\n                    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"\n                      (change)=\"searchProduct($event)\">\n                    <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n                  </form>\n                </li>\n              </ul>\n            </div>\n          </nav>\n          <br>\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"tab-slider--container col-auto\" [ngSwitch]=\"viewMode\">\n\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'all-products'\">\n                  <div class=\"card col-xl-2\" *ngFor=\"let p of allProducts; let i = index\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'Milk & Eggs'\">\n\n                  <div class=\"card col-xl-2\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'Vegetables & Fruits'\">\n                  <div class=\"col-auto\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'Meat & Fishes'\">\n                  <div class=\"col-auto\" *ngFor=\"let p of productsByCategoryArr\">\n                  <div class=\"card\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                </div>\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'Wine & Drinks'\">\n                  <div class=\"card col-sm-12\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <p class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-slider--body d-flex flex-row flex-wrap\" *ngSwitchCase=\"'search'\">\n                  <div class=\"card col-xl-12\" *ngFor=\"let p of productsByCategoryArr\">\n                    <div class=\"card-body\">\n                      <img class=\"card-img-top\" src=\"\" alt=\"Card image\">\n                      <div class=\"card-text\">\n                        {{p?.image}}\n                        {{p?.productName}}\n                        {{p?.price}}₪\n                      </div>\n                      <br>\n                      <!-- Button trigger modal -->\n                      <button type=\"button\" id=\"addToCartButton\" class=\"btn-primary\" data-toggle=\"modal\"\n                        data-target=\"#exampleModal\" (click)=\"chooseProduct(p)\">\n                        Add to Cart\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\"\n                  aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Choose Quantity</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div>\n                          <input style=\"width:45px\" type=\"number\" [(ngModel)]=\"countVal\" />\n                        </div>\n                      </div>\n                      <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n                          (click)=\"addToCart()\">Save</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- End Modal -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /#page-content-wrapper -->\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/receipt/receipt.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/receipt/receipt.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">\n\n    <h2> The Purchase Done Successfully! </h2>\n    <br><br>\n<button type=\"button\" (click)=\"onDown('txt')\">Download Receipt</button>\n<br><br>\n<button type=\"button\" (click)=\"confirm()\">Confirm</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Register Page</h2>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <br><br>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(this.registerForm)\">\n        <br>\n        <div class=\"form-group\">\n          <label>Identity:</label>\n          <input type=\"text\" formControlName=\"identity\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.identity.errors }\" />\n          <div *ngIf=\"submitted && f.identity.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.identity.errors.required\">Identity is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Email:</label>\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Email is required</div>\n            <div *ngIf=\"f.username.errors.email\">Email must be a valid email address</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Password:</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n          </div>\n          <div class=\"form-group col\">\n            <label>Confirm Password:</label>\n            <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"submitErr\" *ngIf=\"submitted && f.identity.errors && f.identity.errors.identityExist\">*Identity already exist in the system</div>\n        <div class=\"submitErr\" *ngIf=\"submitted && f.confirmPassword.errors && f.confirmPassword.errors.confirmErr\">*Passwords don't match</div> <br><br>\n        <div class=\"text-center\">\n          <button class=\"btn btn-primary mr-1\">Continue</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm-6\">\n      <br><br>\n      <form [formGroup]=\"registerForm2\" *ngIf=\"registerForm2\" (ngSubmit)=\"onSubmit2(this.registerForm2)\">\n        <br>\n        <div class=\"form-group\">\n          <label>City:</label>\n            <select name=\"city\" formControlName=\"city\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted2 && f2.city.errors }\">\n              <option value=\"\" disabled selected>Select your option</option>\n              <option value=\"jerusalem\">Jerusalem</option>\n              <option value=\"ta\">Tel Aviv</option>\n              <option value=\"haifa\">Haifa</option>\n              <option value=\"beerSheva\">Beer Sheva</option>\n              <option value=\"pt\">Petach Tikva</option>\n              <option value=\"rg\">Ramat Gan</option>\n              <option value=\"holon\">Holon</option>\n              <option value=\"bt\">Bat Yam</option>\n              <option value=\"ashkelon\">Ashkelon</option>\n              <option value=\"neharia\">Neharia</option>\n            </select>\n            <div *ngIf=\"submitted2 && f2.city.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f2.city.errors.required\">City is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Street:</label>\n          <input type=\"text\" formControlName=\"street\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted2 && f2.street.errors }\" />\n          <div *ngIf=\"submitted2 && f2.street.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f2.street.errors.required\">Street is required</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>First Name:</label>\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted2 && f2.firstName.errors }\" />\n            <div *ngIf=\"submitted2 && f2.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f2.firstName.errors.required\">firstName is required</div>\n            </div>\n          </div>\n          <div class=\"form-group col\">\n            <label>Last Name:</label>\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted2 && f2.lastName.errors }\" />\n            <div *ngIf=\"submitted2 && f2.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f2.lastName.errors.required\">Last Name is required</div>\n            </div>\n          </div>\n        </div>\n        <br><br>\n        <div class=\"text-center\">\n          <button class=\"btn btn-primary mr-1\">Register</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/receipt/receipt.component */ "./src/app/components/receipt/receipt.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");










const routes = [
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "products", component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] },
    { path: "order", component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_1__["OrderComponent"] },
    { path: "receipt", component: _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_8__["ReceiptComponent"] },
    { path: "admin", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: "", redirectTo: "/login", pathMatch: "full" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _highlight_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./highlight.pipe */ "./src/app/highlight.pipe.ts");
/* harmony import */ var ngx_text_highlight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-text-highlight */ "./node_modules/ngx-text-highlight/ngx-text-highlight.umd.js");
/* harmony import */ var ngx_text_highlight__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_text_highlight__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/receipt/receipt.component */ "./src/app/components/receipt/receipt.component.ts");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm2015/ngx-filesaver.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
            _components_order_order_component__WEBPACK_IMPORTED_MODULE_12__["OrderComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _highlight_pipe__WEBPACK_IMPORTED_MODULE_14__["HighlightPipe"],
            _components_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_16__["ReceiptComponent"],
            _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
        ],
        imports: [
            ngx_filesaver__WEBPACK_IMPORTED_MODULE_17__["FileSaverModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ngx_text_highlight__WEBPACK_IMPORTED_MODULE_15__["NgHighlightModule"],
        ],
        providers: [ngx_filesaver__WEBPACK_IMPORTED_MODULE_17__["FileSaverModule"]],
        bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n  }\r\n  \r\n  #sidebar {\r\n    width: 250px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    z-index: 999;\r\n    background: #7386D5;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n  }\r\n  \r\n  body {\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  #sidebar-wrapper {\r\n    position: relative;\r\n    min-height: 100vh;\r\n    margin-left: -15rem;\r\n    transition: margin .25s ease-out;\r\n  }\r\n  \r\n  #sidebar-wrapper .sidebar-heading {\r\n    padding: 0.875rem 1.25rem;\r\n    font-size: 1.2rem;\r\n    width: 15rem;\r\n  }\r\n  \r\n  #sidebar-wrapper .list-group {\r\n    width: 15rem;\r\n  }\r\n  \r\n  #page-content-wrapper {\r\n    min-width: 100vw;\r\n  }\r\n  \r\n  #wrapper.toggled #sidebar-wrapper {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    #sidebar-wrapper {\r\n      margin-left: 0;\r\n    }\r\n  \r\n    #page-content-wrapper {\r\n      min-width: 0;\r\n      width: 100%;\r\n    }\r\n  \r\n    #wrapper.toggled #sidebar-wrapper {\r\n      margin-left: -15rem;\r\n    }\r\n  }\r\n  \r\n  h2 {\r\n    color: #345F90;\r\n    font-size: 24px;\r\n    line-height: 1.25;\r\n    font-family: \"Roboto Slab\", serif;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .tab-slider--nav {\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .tab-slider--tabs {\r\n    display: block;\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    position: relative;\r\n    border-radius: 35px;\r\n    overflow: hidden;\r\n    background: #fff;\r\n    height: 35px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  .tab-slider--tabs:after {\r\n    content: \"\";\r\n    width: 50%;\r\n    background: #345F90;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: all 250ms ease-in-out;\r\n    border-radius: 35px;\r\n  }\r\n  \r\n  .tab-slider--tabs.slide:after {\r\n    left: 50%;\r\n  }\r\n  \r\n  .tab-slider--trigger {\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    font-weight: bold;\r\n    color: #345F90;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    padding: 11px 20px;\r\n    position: relative;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    transition: color 250ms ease-in-out;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  .tab-slider--trigger.active {\r\n    color: #fff;\r\n  }\r\n  \r\n  .card{\r\n    margin: 5px;\r\n    height: 50vh;\r\n    /* width: 50vw; */\r\n  }\r\n  \r\n  .card:hover {\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  a {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .order {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 10px;\r\n  }\r\n  \r\n  .total {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 10px;\r\n  }\r\n  \r\n  .card-body {\r\n    position: relative;\r\n  }\r\n  \r\n  #addToCartButton {\r\n    position: absolute;\r\n    bottom: 5px;\r\n  }\r\n  \r\n  #emptyCartBtn {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBSW5CLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUVQLGlDQUFpQztJQUNqQyxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YscUJBQXFCO0lBRXJCLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0VBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6ICM3Mzg2RDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gIH1cclxuICBcclxuICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICB9XHJcbiAgXHJcbiAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICBcclxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICBjb2xvcjogIzM0NUY5MDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIiwgc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1zbGlkZXItLW5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1zbGlkZXItLXRhYnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1zbGlkZXItLXRhYnM6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ1RjkwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1zbGlkZXItLXRhYnMuc2xpZGU6YWZ0ZXIge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuICBcclxuICAudGFiLXNsaWRlci0tdHJpZ2dlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzNDVGOTA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTFweCAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWItc2xpZGVyLS10cmlnZ2VyLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmR7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIC8qIHdpZHRoOiA1MHZ3OyAqL1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvdGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAjYWRkVG9DYXJ0QnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAjZW1wdHlDYXJ0QnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let AdminComponent = class AdminComponent {
    constructor(productService, categoryService, http) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.http = http;
        this.viewMode = 'all-products';
        this.category = [];
        this.allProducts = [];
        this.productsByCategoryArr = [];
        this.countVal = 1;
        this.addProduct = false;
        this.nrSelect = "5ef8636cd61ec32ac0e71990";
        this.addProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
    }
    ngOnInit() {
        //Toggle Click Function
        jquery__WEBPACK_IMPORTED_MODULE_4__("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_4__("#wrapper").toggleClass("toggled");
        });
        this.productService.getAllProducts().subscribe(res => {
            this.allProducts = JSON.parse(JSON.stringify(res));
        }, err => alert(err.error));
        this.categoryService.getAllCategories().subscribe(res => {
            this.category = JSON.parse(JSON.stringify(res));
        });
    }
    ;
    productsByCategory(c) {
        this.viewMode = c.categoryName;
        switch (c.id) {
            case '5ef86303d61ec32ac0e71960':
                this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef86303d61ec32ac0e71960");
                break;
            case '5ef86351d61ec32ac0e71986':
                this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef86351d61ec32ac0e71986");
                break;
            case '5ef8636cd61ec32ac0e71990':
                this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef8636cd61ec32ac0e71990");
                break;
            case '5ef8638fd61ec32ac0e71996':
                this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef8638fd61ec32ac0e71996");
                break;
            default:
                break;
        }
    }
    searchProduct(e) {
        let target = e.target;
        this.productsByCategoryArr = this.allProducts.filter(el => el.productName.toLowerCase().indexOf(target.value.toLowerCase()) !== -1);
        this.viewMode = 'search';
    }
    ;
    chooseProduct(product) {
        this.chosenProduct = product;
    }
    ;
    addNew() {
        const formData = new FormData();
        formData.append('name', this.addProductForm.get('name').value);
        formData.append('id', this.addProductForm.get('id').value);
        formData.append('price', this.addProductForm.get('price').value);
        formData.append('category', this.addProductForm.get('category').value);
        console.log(this.imageFile);
        formData.append('image', this.imageFile);
        // this.http.post('url' , formData).subscribe((res)=>{
        //    /* if all is ok */
        //    console.log('image has been sent')
        //  });
        //  console.log(formData);
        const options = {
            method: "POST",
            body: formData
        };
        fetch("http://localhost:3000/api/products/add-product", options)
            .then(() => alert("product added!"))
            .catch(err => alert(err.message));
    }
    ;
    uploadImage(e) {
        let target = e.target;
        if (target.files && target.files[0]) {
            this.imageFile = target.files[0];
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\r\n  background-color: grey;\r\n}\r\n\r\n.navbar {\r\n  border: 3px solid cornflowerblue;\r\n  background: white;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n}\r\n\r\n.col-sm {\r\n  border: 1px solid white;\r\n  background: cornflowerblue;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n}\r\n\r\n.nav-link {\r\n  color: black;\r\n}\r\n\r\n/* Small devices (small phones) */\r\n\r\n@media only screen and (min-width: 0px) {\r\n  .col-sm {\r\n    height: 50px;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones) */\r\n\r\n@media only screen and (min-width: 480px) {\r\n  .col-sm {\r\n    height: 200px;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets) */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .col-sm {\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops) */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .col-sm {\r\n    height: 420px;\r\n  }\r\n}\r\n\r\n.Notification {\r\n  color: yellow;\r\n}\r\n\r\n/* .navbar-toggler-icon { */\r\n\r\n/* background-color: black; */\r\n\r\n/* } */\r\n\r\n.fa-1x {\r\n  font-size: 5rem;\r\n}\r\n\r\n.navbar-toggler.toggler-example {\r\n  cursor: pointer;\r\n}\r\n\r\n.dark-blue-text {\r\n  color: #0A38F5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQSxzREFBc0Q7O0FBQ3REO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSwyQkFBMkI7O0FBQ3pCLDZCQUE2Qjs7QUFDL0IsTUFBTTs7QUFFTjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY29sLXNtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBjb3JuZmxvd2VyYmx1ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHNtYWxsIHBob25lcykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcclxuICAuY29sLXNtIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb2wtc20ge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb2wtc20ge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5jb2wtc20ge1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5Ob3RpZmljYXRpb24ge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi8qIC5uYXZiYXItdG9nZ2xlci1pY29uIHsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuLyogfSAqL1xyXG5cclxuLmZhLTF4IHtcclxuICBmb250LXNpemU6IDVyZW07XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci50b2dnbGVyLWV4YW1wbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRhcmstYmx1ZS10ZXh0IHtcclxuICBjb2xvcjogIzBBMzhGNTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/layout/Layout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/layout/Layout.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dC9MYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() {
        this.title = 'client';
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'Layout-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/Layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Layout.component.css */ "./src/app/components/layout/Layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\r\nbody {\r\n  background-color: grey;\r\n}\r\n\r\n.col-sm {\r\n  border: 1px solid white;\r\n  background: cornflowerblue;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n}\r\n\r\n/* Small devices (small phones) */\r\n\r\n@media only screen and (min-width: 0px) {\r\n  .col-sm {\r\n    height: 50vh;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones) */\r\n\r\n@media only screen and (min-width: 480px) {\r\n  .col-sm {\r\n    height: 200vh;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets) */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .col-sm {\r\n    height: 300vh;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops) */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .col-sm {\r\n    height: 420vh;\r\n  }\r\n}\r\n\r\n.Notification {\r\n  color: yellow;\r\n}\r\n\r\na {\r\n  color: black;\r\n}\r\n\r\n.osherad2 {\r\n  width: 250px;\r\n  height: 150px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQSxzREFBc0Q7O0FBQ3REO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmNvbC1zbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogY29ybmZsb3dlcmJsdWU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHNtYWxsIHBob25lcykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcclxuICAuY29sLXNtIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb2wtc20ge1xyXG4gICAgaGVpZ2h0OiAyMDB2aDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb2wtc20ge1xyXG4gICAgaGVpZ2h0OiAzMDB2aDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5jb2wtc20ge1xyXG4gICAgaGVpZ2h0OiA0MjB2aDtcclxuICB9XHJcbn1cclxuXHJcbi5Ob3RpZmljYXRpb24ge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9zaGVyYWQyIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let LoginComponent = class LoginComponent {
    constructor(myUsersService, formBuilder) {
        this.myUsersService = myUsersService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.user = localStorage.getItem("user");
        this.loginForm = this.formBuilder.group({
            Identity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    login(username, password) {
        const credentials = {
            "username": username,
            "password": password
        };
        this.myUsersService
            .postLoggedInUser(credentials)
            .subscribe(loggedInUser => localStorage.setItem("user", JSON.stringify(loggedInUser)), err => alert(err.message));
    }
    ;
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/order/order.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\r\n  border: 3px solid cornflowerblue;\r\n  background: white;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n}\r\n\r\n.products {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n}\r\n\r\nspan {\r\n  background-color: yellow;\r\n  color: black;\r\n}\r\n\r\n.highlight {\r\n  background-color: yellow;\r\n  color: black;\r\n}\r\n\r\n.ngx-text-highlight {\r\n  background: yellow;\r\n}\r\n\r\n.highlightText {\r\n  background: yellow;\r\n}\r\n\r\ninput {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgY29ybmZsb3dlcmJsdWU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uZ3gtdGV4dC1oaWdobGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHllbGxvdztcclxufVxyXG5cclxuLmhpZ2hsaWdodFRleHQge1xyXG4gIGJhY2tncm91bmQ6IHllbGxvdztcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let OrderComponent = class OrderComponent {
    constructor(router) {
        this.router = router;
        this.cartArr = Array();
        this.total = 0;
        this.searchResult = Array();
        this.searchMode = false;
    }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem("currentCart")).length > 0) {
            this.cartArr.push(...JSON.parse(localStorage.getItem("currentCart")));
            this.total = this.cartArr.reduce((accum, item) => accum + item.price * item.quantity, 0);
        }
        ;
    }
    ;
    searchProduct(e) {
        let target = e.target;
        this.searchResult = this.cartArr.filter(el => {
            this.startIndex = el.productName.toLowerCase().indexOf(target.value.toLowerCase());
            if (this.startIndex != -1) {
                this.endLength = target.value.length;
                this.matchingString = el.productName.substr(this.startIndex, this.endLength);
                return el.productName.replace(this.matchingString, "<span>" + this.matchingString + "</span>");
            }
        });
        this.searchMode = true;
        this.searchResult[0].productName.replace(this.matchingString, "<span style='background-color: yellow;'>" + this.matchingString + "</span>");
    }
    ;
    highlight(c) {
        this.content = c;
        this.searchMode = true;
        return this.content.replace(new RegExp(this.filter, "gi"), match => {
            console.log(match);
        });
    }
    setDetails() {
        console.log("inputs");
        let details = localStorage.getItem("user");
    }
    performOrder() {
        this.router.navigateByUrl("/receipt");
    }
};
OrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/components/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #7386D5;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n}\r\n\r\n#sidebar-wrapper {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  margin-left: -15rem;\r\n  transition: margin .25s ease-out;\r\n}\r\n\r\n#sidebar-wrapper .sidebar-heading {\r\n  padding: 0.875rem 1.25rem;\r\n  font-size: 1.2rem;\r\n  width: 15rem;\r\n}\r\n\r\n#sidebar-wrapper .list-group {\r\n  width: 15rem;\r\n}\r\n\r\n#page-content-wrapper {\r\n  min-width: 100vw;\r\n}\r\n\r\n#wrapper.toggled #sidebar-wrapper {\r\n  margin-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar-wrapper {\r\n    margin-left: 0;\r\n  }\r\n\r\n  #page-content-wrapper {\r\n    min-width: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #wrapper.toggled #sidebar-wrapper {\r\n    margin-left: -15rem;\r\n  }\r\n}\r\n\r\nh2 {\r\n  color: #345F90;\r\n  font-size: 24px;\r\n  line-height: 1.25;\r\n  font-family: \"Roboto Slab\", serif;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.tab-slider--nav {\r\n  width: 100%;\r\n  float: left;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.tab-slider--tabs {\r\n  display: block;\r\n  float: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: relative;\r\n  border-radius: 35px;\r\n  overflow: hidden;\r\n  background: #fff;\r\n  height: 35px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.tab-slider--tabs:after {\r\n  content: \"\";\r\n  width: 50%;\r\n  background: #345F90;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  transition: all 250ms ease-in-out;\r\n  border-radius: 35px;\r\n}\r\n\r\n.tab-slider--tabs.slide:after {\r\n  left: 50%;\r\n}\r\n\r\n.tab-slider--trigger {\r\n  font-size: 12px;\r\n  line-height: 1;\r\n  font-weight: bold;\r\n  color: #345F90;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  padding: 11px 20px;\r\n  position: relative;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  transition: color 250ms ease-in-out;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.tab-slider--trigger.active {\r\n  color: #fff;\r\n}\r\n\r\n.card{\r\n  margin: 5px;\r\n  height: 50vh;\r\n  /* width: 50vw; */\r\n}\r\n\r\n.card:hover {\r\n  border: 1px solid black;\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n.order {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.total {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 10px;\r\n}\r\n\r\n.card-body {\r\n  position: relative;\r\n}\r\n\r\n#addToCartButton {\r\n  position: absolute;\r\n  bottom: 5px;\r\n}\r\n\r\n#emptyCartBtn {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBSW5CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUVQLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YscUJBQXFCO0VBRXJCLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQ6ICM3Mzg2RDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xyXG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcclxuICB3aWR0aDogMTVyZW07XHJcbn1cclxuXHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiAjMzQ1RjkwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMS4yNTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiLCBzZXJpZjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50YWItc2xpZGVyLS1uYXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50YWItc2xpZGVyLS10YWJzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnRhYi1zbGlkZXItLXRhYnM6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMzQ1RjkwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbn1cclxuXHJcbi50YWItc2xpZGVyLS10YWJzLnNsaWRlOmFmdGVyIHtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi50YWItc2xpZGVyLS10cmlnZ2VyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzNDVGOTA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTFweCAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udGFiLXNsaWRlci0tdHJpZ2dlci5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICBtYXJnaW46IDVweDtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgLyogd2lkdGg6IDUwdnc7ICovXHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm9yZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jYWRkVG9DYXJ0QnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbiNlbXB0eUNhcnRCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





let ProductsComponent = class ProductsComponent {
    constructor(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.viewMode = 'all-products';
        this.category = [];
        this.allProducts = [];
        this.productsByCategoryArr = [];
        this.countVal = 1;
        this.cartArr = Array();
        this.total = 0;
    }
    ngOnInit() {
        //Toggle Click Function
        jquery__WEBPACK_IMPORTED_MODULE_4__("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_4__("#wrapper").toggleClass("toggled");
        });
        this.productService.getAllProducts().subscribe(res => {
            this.allProducts = JSON.parse(JSON.stringify(res));
        }, err => alert(err.error));
        this.categoryService.getAllCategories().subscribe(res => {
            this.category = JSON.parse(JSON.stringify(res));
        });
        if (JSON.parse(localStorage.getItem("currentCart")).length > 0) {
            this.cartArr.push(...JSON.parse(localStorage.getItem("currentCart")));
        }
    }
    ;
    productsByCategory(c) {
        this.viewMode = c.categoryName;
        switch (c.id) {
            case '5ef86303d61ec32ac0e71960':
                this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef86303d61ec32ac0e71960");
                break;
            case '5ef86351d61ec32ac0e71986':
                this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef86351d61ec32ac0e71986");
                break;
            case '5ef8636cd61ec32ac0e71990':
                this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef8636cd61ec32ac0e71990");
                break;
            case '5ef8638fd61ec32ac0e71996':
                this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef8638fd61ec32ac0e71996");
                break;
            default:
                break;
        }
    }
    searchProduct(e) {
        let target = e.target;
        this.productsByCategoryArr = this.allProducts.filter(el => el.productName.toLowerCase().indexOf(target.value.toLowerCase()) !== -1);
        this.viewMode = 'search';
    }
    ;
    chooseProduct(product) {
        this.chosenProduct = product;
    }
    ;
    addToCart() {
        this.chosenProduct = Object.assign(this.chosenProduct, {
            quantity: this.countVal
        });
        this.cartArr.push(this.chosenProduct);
        this.total = this.cartArr.reduce((accum, item) => accum + item.price * item.quantity, 0);
        localStorage.setItem("currentCart", JSON.stringify(this.cartArr));
    }
    ;
    emptyCart() {
        while (this.cartArr.length > 0) {
            this.cartArr.pop();
        }
        ;
        this.total = 0;
        localStorage.removeItem("currentCart");
    }
    ;
    deleteProduct(product) {
        let id = product._id;
        let index = this.cartArr.findIndex((element) => element._id === id);
        this.cartArr.splice(index, 1);
        this.total = this.cartArr.reduce((accum, item) => accum + item.price * item.quantity, 0);
        localStorage.setItem("currentCart", JSON.stringify(this.cartArr));
    }
    ;
};
ProductsComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/components/receipt/receipt.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/receipt/receipt.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    \r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVjZWlwdC9yZWNlaXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9yZWNlaXB0L3JlY2VpcHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/receipt/receipt.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/receipt/receipt.component.ts ***!
  \*********************************************************/
/*! exports provided: ReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptComponent", function() { return ReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm2015/ngx-filesaver.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ReceiptComponent = class ReceiptComponent {
    constructor(_FileSaverService, router) {
        this._FileSaverService = _FileSaverService;
        this.router = router;
        this.text = [];
    }
    ngOnInit() {
        this.text = JSON.parse(localStorage.getItem("currentCart"));
        this.receipt = this.text.map(p => {
            return {
                productName: p.productName,
                quantity: p.quantity,
                price: p.price
            };
        });
        this.receipt2 = JSON.stringify(this.receipt);
        this.receipt2 = this.receipt2.split('},').join("},\r\n");
    }
    //saving
    onDown(type) {
        console.log(this.receipt);
        console.log((this.receipt2));
        const fileName = `receipt.${type}`;
        const fileType = this._FileSaverService.genType(fileName);
        const txtBlob = new Blob([this.receipt2], { type: fileType });
        this._FileSaverService.save(txtBlob, fileName);
    }
    ;
    confirm() {
        this.router.navigateByUrl("/login");
    }
};
ReceiptComponent.ctorParameters = () => [
    { type: ngx_filesaver__WEBPACK_IMPORTED_MODULE_2__["FileSaverService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipt',
        providers: [ngx_filesaver__WEBPACK_IMPORTED_MODULE_2__["FileSaverService"]],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receipt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/receipt/receipt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receipt.component.css */ "./src/app/components/receipt/receipt.component.css")).default]
    })
], ReceiptComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".submitErr {\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n\r\nform {\r\n  border: 2px solid cornflowerblue;\r\n  padding: 10px;\r\n  border-radius: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0RXJyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.submitted2 = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            identity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit(registerFormValue) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        ;
        // check if identity already exist
        const identityObj = { "identity": registerFormValue.value.identity };
        this.userService.checkIdentity(identityObj)
            .subscribe(res => {
            this.resIdentity = true;
        }, 
        // If already exist
        err => {
            if (err.status === 403) {
                this.resIdentity = false;
                this.f.identity.setErrors({ identityExist: true });
            }
            else {
                alert(err.message);
            }
        }, () => {
            // check if passwords match
            if (registerFormValue.value.password !== registerFormValue.value.confirmPassword) {
                this.f.confirmPassword.setErrors({ confirmErr: true });
                return;
            }
            ;
            // if valid, move to form 2
            delete registerFormValue.value.confirmPassword;
            this.allFormDetails = registerFormValue.value;
            this.registerForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]().group({
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        });
    }
    ;
    // convenience getter for easy access to form fields
    get f2() { return this.registerForm2.controls; }
    onSubmit2(registerFormValue2) {
        this.submitted2 = true;
        registerFormValue2.value["role"] = "customer";
        this.allFormDetails = Object.assign(this.allFormDetails, registerFormValue2.value);
        this.userService.registerUser(this.allFormDetails).subscribe(res => {
            alert("user added:" + JSON.stringify(res));
            this.router.navigateByUrl("/login");
        }, err => alert(err.message));
    }
    ;
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/highlight.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/highlight.pipe.ts ***!
  \***********************************/
/*! exports provided: HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlightPipe = class HighlightPipe {
    transform(text, [search]) {
        search = 'a';
        return search ? text.replace(new RegExp(search, 'gi'), (match) => `<span class="highlight">${match}</span>`) : text;
    }
};
HighlightPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'highlight'
    })
], HighlightPipe);



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CategoriesService = class CategoriesService {
    constructor(http) {
        this.http = http;
    }
    getAllCategories() {
        return this.http.get("http://localhost:3000/api/products/all-categories");
    }
    ;
};
CategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriesService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    getAllProducts() {
        return this.http.get("http://localhost:3000/api/products/all-products");
    }
    ;
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    postLoggedInUser(credentials) {
        return this.http.post("http://localhost:3000/api/auth/login", credentials);
    }
    ;
    registerUser(userDetails) {
        return this.http.post("http://localhost:3000/api/auth/register", userDetails);
    }
    ;
    checkIdentity(identity) {
        return this.http.post("http://localhost:3000/api/auth/check-identity", identity);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\תכנות\קורס עידן\shopping online\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map