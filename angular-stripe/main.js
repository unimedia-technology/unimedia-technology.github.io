(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\projects\customers\Unimedia Technology\angular-stripe\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    stripe_key: 'pk_test_51HSxmHFHabj9XRH6FRDABkTg4M5jSU7ZPKXismUzYytZh8JkfxqiwjtVDSlbcAR4kQ8U6Yy19RQCoSjsspXVmhzf002G4ny8sA'
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

/***/ "J7dT":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
class SuccessComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessComponent.ɵfac = function SuccessComponent_Factory(t) { return new (t || SuccessComponent)(); };
SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessComponent, selectors: [["app-success"]], decls: 17, vars: 2, consts: [["id", "container"], ["id", "success-box"], [1, "dot"], [1, "dot", "two"], [1, "face"], [1, "eye"], [1, "eye", "right"], [1, "mouth", "happy"], [1, "shadow", "scale"], [1, "message"], [1, "alert"], [1, "button-box", 3, "routerLink"], [1, "green"]], template: function SuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Success!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "yay, your box of joyfulness is on your way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 100;\n  letter-spacing: 3px;\n  padding-top: 5px;\n  color: #FCFCFC;\n  padding-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: #4ec07d;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #e96075;\n}\n\n.alert[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  font-size: 0.5em;\n  font-weight: 100;\n  color: #5e5e5e;\n  letter-spacing: 1px;\n}\n\nbutton[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n#success-box[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 245px;\n  height: 250px;\n  margin: 0 auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: linear-gradient(to bottom right, #B0DB7D 40%, #99DBB4 100%);\n  border-radius: 20px;\n  box-shadow: 5px 5px 20px rgba(203, 205, 211, 0.1);\n  perspective: 40px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #FCFCFC;\n  border-radius: 50%;\n  position: absolute;\n  top: 4%;\n  right: 6%;\n}\n\n.dot[_ngcontent-%COMP%]:hover {\n  background: #c9c9c9;\n}\n\n.two[_ngcontent-%COMP%] {\n  right: 12%;\n  opacity: 0.5;\n}\n\n.face[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22%;\n  height: 22%;\n  background: #FCFCFC;\n  border-radius: 50%;\n  border: 1px solid #777777;\n  top: 21%;\n  left: 37.5%;\n  z-index: 2;\n  animation: bounce 1s ease-in infinite;\n}\n\n.face2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22%;\n  height: 22%;\n  background: #FCFCFC;\n  border-radius: 50%;\n  border: 1px solid #777777;\n  top: 21%;\n  left: 37.5%;\n  z-index: 2;\n  animation: roll 3s ease-in-out infinite;\n}\n\n.eye[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #777777;\n  border-radius: 50%;\n  top: 40%;\n  left: 20%;\n}\n\n.right[_ngcontent-%COMP%] {\n  left: 68%;\n}\n\n.mouth[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 43%;\n  left: 41%;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n\n.happy[_ngcontent-%COMP%] {\n  border: 2px solid;\n  border-color: transparent #777777 #777777 transparent;\n  transform: rotate(45deg);\n}\n\n.sad[_ngcontent-%COMP%] {\n  top: 49%;\n  border: 2px solid;\n  border-color: #777777 transparent transparent #777777;\n  transform: rotate(45deg);\n}\n\n.shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 21%;\n  height: 3%;\n  opacity: 0.5;\n  background: #777777;\n  left: 40%;\n  top: 43%;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.scale[_ngcontent-%COMP%] {\n  animation: scale 1s ease-in infinite;\n}\n\n.move[_ngcontent-%COMP%] {\n  animation: move 3s ease-in-out infinite;\n}\n\n.message[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  height: 40%;\n  top: 47%;\n}\n\n.button-box[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #FCFCFC;\n  width: 50%;\n  height: 15%;\n  border-radius: 20px;\n  top: 73%;\n  left: 25%;\n  outline: 0;\n  border: none;\n  box-shadow: 2px 2px 10px rgba(119, 119, 119, 0.5);\n  transition: all 0.5s ease-in-out;\n}\n\n.button-box[_ngcontent-%COMP%]:hover {\n  background: #efefef;\n  transform: scale(1.05);\n  transition: all 0.3s ease-in-out;\n}\n\n@keyframes bounce {\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n@keyframes scale {\n  50% {\n    transform: scale(0.9);\n  }\n}\n\n@keyframes roll {\n  0% {\n    transform: rotate(0deg);\n    left: 25%;\n  }\n  50% {\n    left: 60%;\n    transform: rotate(168deg);\n  }\n  100% {\n    transform: rotate(0deg);\n    left: 25%;\n  }\n}\n\n@keyframes move {\n  0% {\n    left: 25%;\n  }\n  50% {\n    left: 60%;\n  }\n  100% {\n    left: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBUEo7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBbkJNO0VBb0JOLG1CQUFBO0VBQ0EseUJBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUVBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBbEVNO0VBbUVOLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVFFO0VBQ0UsbUJBQUE7QUFOSjs7QUFVQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBckZNO0VBc0ZOLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQWxHTTtFQW1HTixrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkE3R0s7RUE4R0wsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVVBO0VBQ0UsU0FBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtBQVBGOztBQVVBO0VBQ0UsUUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFsSks7RUFtSkwsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLG9DQUFBO0FBUEY7O0FBU0E7RUFDRSx1Q0FBQTtBQU5GOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkE3S007RUE4S04sVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtFQUNBLGdDQUFBO0FBUEY7O0FBUUU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFOSjs7QUFVQTtFQUNFO0lBQ0csNEJBQUE7RUFQSDtBQUNGOztBQVVBO0VBQ0U7SUFDRSxxQkFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsU0FBQTtFQVRGO0VBV0E7SUFDRSxTQUFBO0lBQ0EseUJBQUE7RUFURjtFQVdBO0lBQ0UsdUJBQUE7SUFDQSxTQUFBO0VBVEY7QUFDRjs7QUFZQTtFQUNFO0lBQ0UsU0FBQTtFQVZGO0VBWUE7SUFDRSxTQUFBO0VBVkY7RUFZQTtJQUNFLFNBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjRkNGQ0ZDO1xuJGdyYXk6ICNDQkNERDM7XG4kZGFyazogIzc3Nzc3NztcbiRlcnJvcjogI0VGOEQ5QztcbiRvcmFuZ2U6ICNGRkMzOUU7XG4kc3VjY2VzczogI0IwREI3RDtcbiRzZWNvbmRhcnk6ICM5OURCQjQ7XG5cbiNjb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LCAyMCUpO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IGRhcmtlbigkZXJyb3IsIDEwJSk7XG59XG5cbi5hbGVydCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogZGFya2VuKCRkYXJrLCAxMCUpO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5idXR0b24sIC5kb3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzdWNjZXNzLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI0NXB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRzdWNjZXNzIDQwJSwgJHNlY29uZGFyeSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoJGdyYXksIDEwJSk7XG4gIHBlcnNwZWN0aXZlOiA0MHB4O1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNCU7XG4gIHJpZ2h0OiA2JTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCR3aGl0ZSwgMjAlKTtcbiAgfVxufVxuXG4udHdvIHtcbiAgcmlnaHQ6IDEyJTtcbiAgb3BhY2l0eTogLjU7XG59XG5cbi5mYWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjIlO1xuICBoZWlnaHQ6IDIyJTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrO1xuICB0b3A6IDIxJTtcbiAgbGVmdDogMzcuNSU7XG4gIHotaW5kZXg6IDI7XG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UtaW4gaW5maW5pdGU7XG59XG5cbi5mYWNlMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIyJTtcbiAgaGVpZ2h0OiAyMiU7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcbiAgdG9wOiAyMSU7XG4gIGxlZnQ6IDM3LjUlO1xuICB6LWluZGV4OiAyO1xuICBhbmltYXRpb246IHJvbGwgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5leWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAkZGFyaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogMjAlO1xufVxuXG4ucmlnaHQge1xuICBsZWZ0OiA2OCU7XG59XG5cbi5tb3V0aCB7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6IDQzJTtcbiAgbGVmdDogNDElO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaGFwcHkge1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAkZGFyayAkZGFyayB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uc2FkIHtcbiAgdG9wOiA0OSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICRkYXJrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRkYXJrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMSU7XG4gIGhlaWdodDogMyU7XG4gIG9wYWNpdHk6IC41O1xuICBiYWNrZ3JvdW5kOiAkZGFyaztcbiAgbGVmdDogNDAlO1xuICB0b3A6IDQzJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2NhbGUge1xuICBhbmltYXRpb246IHNjYWxlIDFzIGVhc2UtaW4gaW5maW5pdGU7XG59XG4ubW92ZSB7XG4gIGFuaW1hdGlvbjogbW92ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuXG4ubWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MCU7XG4gIHRvcDogNDclO1xufVxuXG4uYnV0dG9uLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdG9wOiA3MyU7XG4gIGxlZnQ6IDI1JTtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgkZGFyaywgLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHdoaXRlLCA1JSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgNTAlIHtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb2xsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIGxlZnQ6IDI1JTtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IDYwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjhkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIGxlZnQ6IDI1JTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgbGVmdDogMjUlO1xuICB9XG4gIDUwJSB7XG4gICAgbGVmdDogNjAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDI1JTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success',
                templateUrl: './success.component.html',
                styleUrls: ['./success.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "v4r+");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ProductComponent {
    constructor() {
        this.title = 'angular-stripe';
        this.priceId = 'price_1HSxpTFHabj9XRH6DMA8pC7l';
        this.product = {
            title: 'Classic Peace Lily',
            subTitle: 'Popular House Plant',
            description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.',
            price: 18.00
        };
        this.quantity = 1;
        this.stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__["loadStripe"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].stripe_key);
    }
    checkout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Call your backend to create the Checkout session.
            // When the customer clicks on the button, redirect them to Checkout.
            const stripe = yield this.stripePromise;
            const { error } = yield stripe.redirectToCheckout({
                mode: 'payment',
                lineItems: [{ price: this.priceId, quantity: this.quantity }],
                successUrl: `${window.location.href}/success`,
                cancelUrl: `${window.location.href}/failure`,
            });
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `error.message`.
            if (error) {
                console.log(error);
            }
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 16, vars: 6, consts: [[1, "container"], [1, "card"], [1, "photo"], ["src", "https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"], [1, "description"], [3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_14_listener() { return ctx.checkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 4, ctx.product.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product.description);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  background: #aedaa6 !important;\n  position: fixed;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n  position: absolute;\n  background: white;\n  margin: 0 auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: all 0.3s;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #727272;\n  text-transform: uppercase;\n  padding: 20px;\n  border-bottom: 2px solid #efefef;\n  font-size: 12px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   svg.heart[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  float: right;\n  margin-top: -3px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   svg.heart[_ngcontent-%COMP%]:hover {\n  fill: red;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   svg.arrow[_ngcontent-%COMP%] {\n  float: left;\n  height: 15px;\n  width: 15px;\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  padding: 30px;\n  width: 45%;\n  text-align: center;\n  float: left;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 240px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 30px;\n  float: left;\n  width: 55%;\n  border-left: 2px solid #efefef;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #515151;\n  font-weight: 300;\n  padding-top: 15px;\n  margin: 0;\n  font-size: 30px;\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #515151;\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #727272;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #727272;\n  padding: 20px 0;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: 0;\n  border: 0;\n  background: none;\n  border: 1px solid #d9d9d9;\n  padding: 8px 0px;\n  margin-bottom: 30px;\n  color: #515151;\n  text-transform: uppercase;\n  width: 125px;\n  font-family: inherit;\n  margin-right: 5px;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #aedaa6;\n  color: #aedaa6;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDZFQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBRUUsNkVBQUE7QUFBTjtBQUlJO0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFITjtBQUtNO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFKUjtBQU1RO0VBRUUsU0FBQTtBQUxWO0FBVU07RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVRSO0FBZUk7RUFFRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWROO0FBZ0JNO0VBQ0UsaUJBQUE7QUFkUjtBQW1CSTtFQUVHLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBbEJQO0FBb0JPO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbEJUO0FBcUJPO0VBQ0MsY0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBbkJSO0FBc0JPO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXBCVDtBQXVCTztFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQXJCVDtBQXdCTztFQUVFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUF2QlQ7QUF5QlM7RUFHRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBekJYIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2FlZGFhNiAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLy8gaGVpZ2h0OiAzNzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsMC4xNiksMCAycHggMTBweCAwIHJnYmEoMCwwLDAsMC4xMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIG5hdiB7XG4gICAgICBcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICM3MjcyNzI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWZlZmVmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgXG4gICAgICBzdmcuaGVhcnQge1xuICAgICAgICBcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBcbiAgICAgICAgICBmaWxsOiByZWQ7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgICBzdmcuYXJyb3cge1xuICAgICAgICBcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgLnBob3RvIHtcbiAgICAgIFxuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIFxuICAgICAgaW1nIHsgXG4gICAgICAgIG1heC1oZWlnaHQ6IDI0MHB4OyBcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgXG4gICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICB3aWR0aDogNTUlO1xuICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2VmZWZlZjtcbiAgICAgICBcbiAgICAgICBoMSB7XG4gICAgICAgICBjb2xvcjogIzUxNTE1MTtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgfVxuICAgICBcbiAgICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjNTE1MTUxO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgfVxuICAgICAgXG4gICAgICAgaDQgeyBcbiAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgIGNvbG9yOiAjNzI3MjcyO1xuICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICBmb250LXNpemU6IDEycHhcbiAgICAgICB9XG4gICAgICBcbiAgICAgICBwIHsgXG4gICAgICAgICBmb250LXNpemU6IDEycHg7IFxuICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICBjb2xvcjogIzcyNzI3MjtcbiAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgIGJ1dHRvbiB7XG5cbiAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgY29sb3I6ICM1MTUxNTE7XG4gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgXG4gICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGRhcmtlbih3aGl0ZSwgMiUpO1xuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWVkYWE2O1xuICAgICAgICAgICBjb2xvcjogI2FlZGFhNjtcbiAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICBcbiAgICAgICAgIH1cblxuICAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "banner"], ["href", "https://github.com/sumitvekariya/angular-stripe"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This is a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Stripe Integration With Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " accepting payments with Stripe Checkout. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " View code on GitHub. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".banner[_ngcontent-%COMP%] {\n  max-width: 825px;\n  margin: 0 auto;\n  padding: 0 22px;\n  font-size: 14px;\n  background: white;\n  color: #6a7c94;\n  border-radius: 22px;\n  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 15px;\n  line-height: 1.15;\n  position: fixed;\n  bottom: 2vh;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n.banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n.banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #aedaa6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlJQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xuICBtYXgtd2lkdGg6IDgyNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzZhN2M5NDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMC41cHggcmdiYSg1MCwgNTAsIDkzLCAwLjEpLFxuICAgIDBweCAycHggNXB4IDBweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksIDBweCAxcHggMS41cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMnZoO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFubmVyIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyIGEge1xuICBjb2xvcjogI2FlZGFhNiAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./success/success.component */ "J7dT");
/* harmony import */ var _failure_failure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./failure/failure.component */ "nTaI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
                },
                {
                    path: 'success',
                    component: _success_success_component__WEBPACK_IMPORTED_MODULE_4__["SuccessComponent"]
                },
                {
                    path: 'failure',
                    component: _failure_failure_component__WEBPACK_IMPORTED_MODULE_5__["FailureComponent"]
                },
                {
                    path: '**',
                    component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
                }
            ], { useHash: true })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
        _success_success_component__WEBPACK_IMPORTED_MODULE_4__["SuccessComponent"],
        _failure_failure_component__WEBPACK_IMPORTED_MODULE_5__["FailureComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
                    _success_success_component__WEBPACK_IMPORTED_MODULE_4__["SuccessComponent"],
                    _failure_failure_component__WEBPACK_IMPORTED_MODULE_5__["FailureComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                        {
                            path: '',
                            component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
                        },
                        {
                            path: 'success',
                            component: _success_success_component__WEBPACK_IMPORTED_MODULE_4__["SuccessComponent"]
                        },
                        {
                            path: 'failure',
                            component: _failure_failure_component__WEBPACK_IMPORTED_MODULE_5__["FailureComponent"]
                        },
                        {
                            path: '**',
                            component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
                        }
                    ], { useHash: true })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nTaI":
/*!**********************************************!*\
  !*** ./src/app/failure/failure.component.ts ***!
  \**********************************************/
/*! exports provided: FailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureComponent", function() { return FailureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
class FailureComponent {
    constructor() { }
    ngOnInit() {
    }
}
FailureComponent.ɵfac = function FailureComponent_Factory(t) { return new (t || FailureComponent)(); };
FailureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FailureComponent, selectors: [["app-failure"]], decls: 17, vars: 2, consts: [["id", "container"], ["id", "error-box"], [1, "dot"], [1, "dot", "two"], [1, "face2"], [1, "eye"], [1, "eye", "right"], [1, "mouth", "sad"], [1, "shadow", "move"], [1, "message"], [1, "alert"], [1, "button-box", 3, "routerLink"], [1, "red"]], template: function FailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Error!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "oh no, something went wrong. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 100;\n  letter-spacing: 3px;\n  padding-top: 5px;\n  color: #FCFCFC;\n  padding-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #e96075;\n}\n\n.alert[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  font-size: 0.5em;\n  font-weight: 100;\n  color: #5e5e5e;\n  letter-spacing: 1px;\n}\n\nbutton[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n#error-box[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 245px;\n  height: 250px;\n  margin: 0 auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);\n  border-radius: 20px;\n  box-shadow: 5px 5px 20px rgba(203, 205, 211, 0.1);\n  perspective: 40px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #FCFCFC;\n  border-radius: 50%;\n  position: absolute;\n  top: 4%;\n  right: 6%;\n}\n\n.dot[_ngcontent-%COMP%]:hover {\n  background: #c9c9c9;\n}\n\n.two[_ngcontent-%COMP%] {\n  right: 12%;\n  opacity: 0.5;\n}\n\n.face[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22%;\n  height: 22%;\n  background: #FCFCFC;\n  border-radius: 50%;\n  border: 1px solid #777777;\n  top: 21%;\n  left: 37.5%;\n  z-index: 2;\n  animation: bounce 1s ease-in infinite;\n}\n\n.face2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22%;\n  height: 22%;\n  background: #FCFCFC;\n  border-radius: 50%;\n  border: 1px solid #777777;\n  top: 21%;\n  left: 37.5%;\n  z-index: 2;\n  animation: roll 3s ease-in-out infinite;\n}\n\n.eye[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #777777;\n  border-radius: 50%;\n  top: 40%;\n  left: 20%;\n}\n\n.right[_ngcontent-%COMP%] {\n  left: 68%;\n}\n\n.mouth[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 43%;\n  left: 41%;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n\n.happy[_ngcontent-%COMP%] {\n  border: 2px solid;\n  border-color: transparent #777777 #777777 transparent;\n  transform: rotate(45deg);\n}\n\n.sad[_ngcontent-%COMP%] {\n  top: 49%;\n  border: 2px solid;\n  border-color: #777777 transparent transparent #777777;\n  transform: rotate(45deg);\n}\n\n.shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 21%;\n  height: 3%;\n  opacity: 0.5;\n  background: #777777;\n  left: 40%;\n  top: 43%;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.scale[_ngcontent-%COMP%] {\n  animation: scale 1s ease-in infinite;\n}\n\n.move[_ngcontent-%COMP%] {\n  animation: move 3s ease-in-out infinite;\n}\n\n.message[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  height: 40%;\n  top: 47%;\n}\n\n.button-box[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #FCFCFC;\n  width: 50%;\n  height: 15%;\n  border-radius: 20px;\n  top: 73%;\n  left: 25%;\n  outline: 0;\n  border: none;\n  box-shadow: 2px 2px 10px rgba(119, 119, 119, 0.5);\n  transition: all 0.5s ease-in-out;\n}\n\n.button-box[_ngcontent-%COMP%]:hover {\n  background: #efefef;\n  transform: scale(1.05);\n  transition: all 0.3s ease-in-out;\n}\n\n@keyframes bounce {\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n@keyframes scale {\n  50% {\n    transform: scale(0.9);\n  }\n}\n\n@keyframes roll {\n  0% {\n    transform: rotate(0deg);\n    left: 25%;\n  }\n  50% {\n    left: 60%;\n    transform: rotate(168deg);\n  }\n  100% {\n    transform: rotate(0deg);\n    left: 25%;\n  }\n}\n\n@keyframes move {\n  0% {\n    left: 25%;\n  }\n  50% {\n    left: 60%;\n  }\n  100% {\n    left: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFpbHVyZS9mYWlsdXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBUEo7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBbkJNO0VBb0JOLG1CQUFBO0VBQ0EseUJBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0VBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBOURNO0VBK0ROLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVFFO0VBQ0UsbUJBQUE7QUFOSjs7QUFVQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBakZNO0VBa0ZOLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQTlGTTtFQStGTixrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkF6R0s7RUEwR0wsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVVBO0VBQ0UsU0FBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtBQVBGOztBQVVBO0VBQ0UsUUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkE5SUs7RUErSUwsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLG9DQUFBO0FBUEY7O0FBU0E7RUFDRSx1Q0FBQTtBQU5GOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkF6S007RUEwS04sVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtFQUNBLGdDQUFBO0FBUEY7O0FBUUU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFOSjs7QUFVQTtFQUNFO0lBQ0csNEJBQUE7RUFQSDtBQUNGOztBQVVBO0VBQ0U7SUFDRSxxQkFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsU0FBQTtFQVRGO0VBV0E7SUFDRSxTQUFBO0lBQ0EseUJBQUE7RUFURjtFQVdBO0lBQ0UsdUJBQUE7SUFDQSxTQUFBO0VBVEY7QUFDRjs7QUFZQTtFQUNFO0lBQ0UsU0FBQTtFQVZGO0VBWUE7SUFDRSxTQUFBO0VBVkY7RUFZQTtJQUNFLFNBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmFpbHVyZS9mYWlsdXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjRkNGQ0ZDO1xuJGdyYXk6ICNDQkNERDM7XG4kZGFyazogIzc3Nzc3NztcbiRlcnJvcjogI0VGOEQ5QztcbiRvcmFuZ2U6ICNGRkMzOUU7XG4kc3VjY2VzczogI0IwREI3RDtcbiRzZWNvbmRhcnk6ICM5OURCQjQ7XG5cbiNjb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiBkYXJrZW4oJGVycm9yLCAxMCUpO1xufVxuXG4uYWxlcnQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6IGRhcmtlbigkZGFyaywgMTAlKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuYnV0dG9uLCAuZG90IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZXJyb3ItYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjQ1cHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAkZXJyb3IgNDAlLCAkb3JhbmdlIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgkZ3JheSwgMTAlKTtcbiAgcGVyc3BlY3RpdmU6IDQwcHg7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0JTtcbiAgcmlnaHQ6IDYlO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHdoaXRlLCAyMCUpO1xuICB9XG59XG5cbi50d28ge1xuICByaWdodDogMTIlO1xuICBvcGFjaXR5OiAuNTtcbn1cblxuLmZhY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMiU7XG4gIGhlaWdodDogMjIlO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XG4gIHRvcDogMjElO1xuICBsZWZ0OiAzNy41JTtcbiAgei1pbmRleDogMjtcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZS1pbiBpbmZpbml0ZTtcbn1cblxuLmZhY2UyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjIlO1xuICBoZWlnaHQ6IDIyJTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrO1xuICB0b3A6IDIxJTtcbiAgbGVmdDogMzcuNSU7XG4gIHotaW5kZXg6IDI7XG4gIGFuaW1hdGlvbjogcm9sbCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmV5ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICRkYXJrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiAyMCU7XG59XG5cbi5yaWdodCB7XG4gIGxlZnQ6IDY4JTtcbn1cblxuLm1vdXRoIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogNDMlO1xuICBsZWZ0OiA0MSU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5oYXBweSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRkYXJrICRkYXJrIHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5zYWQge1xuICB0b3A6IDQ5JTtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJGRhcmsgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGRhcms7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIxJTtcbiAgaGVpZ2h0OiAzJTtcbiAgb3BhY2l0eTogLjU7XG4gIGJhY2tncm91bmQ6ICRkYXJrO1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogNDMlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zY2FsZSB7XG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgZWFzZS1pbiBpbmZpbml0ZTtcbn1cbi5tb3ZlIHtcbiAgYW5pbWF0aW9uOiBtb3ZlIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5cbi5tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQwJTtcbiAgdG9wOiA0NyU7XG59XG5cbi5idXR0b24tYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTUlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0b3A6IDczJTtcbiAgbGVmdDogMjUlO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKCRkYXJrLCAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkd2hpdGUsIDUlKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICA1MCUge1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvbGwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgbGVmdDogMjUlO1xuICB9XG4gIDUwJSB7XG4gICAgbGVmdDogNjAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE2OGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgbGVmdDogMjUlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAyNSU7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiA2MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMjUlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FailureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-failure',
                templateUrl: './failure.component.html',
                styleUrls: ['./failure.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map