/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/client/components/Header.tsx");
/* harmony import */ var _state_auth_auth_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/auth/auth.thunk */ "./src/client/state/auth/auth.thunk.ts");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);





var App = function App(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_3__.renderRoutes)(route === null || route === void 0 ? void 0 : route.routes));
};

var loadData = function loadData(store) {
  return store.dispatch((0,_state_auth_auth_thunk__WEBPACK_IMPORTED_MODULE_2__.fetchCurrentUser)());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: App,
  loadData: loadData
});

/***/ }),

/***/ "./src/client/AppRoutes.tsx":
/*!**********************************!*\
  !*** ./src/client/AppRoutes.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/HomePage */ "./src/client/pages/HomePage.tsx");
/* harmony import */ var _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/UsersListPage */ "./src/client/pages/UsersListPage.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/client/App.tsx");
/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/NotFoundPage */ "./src/client/pages/NotFoundPage.tsx");
/* harmony import */ var _pages_AdminsListPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/AdminsListPage */ "./src/client/pages/AdminsListPage.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var AppRoutes = [_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
  routes: [_objectSpread(_objectSpread({}, _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
    path: '/',
    exact: true
  }), _objectSpread(_objectSpread({}, _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__["default"]), {}, {
    path: '/users'
  }), _objectSpread(_objectSpread({}, _pages_AdminsListPage__WEBPACK_IMPORTED_MODULE_5__["default"]), {}, {
    path: '/admins'
  }), _objectSpread(_objectSpread({}, _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
    path: ''
  })]
})];

/***/ }),

/***/ "./src/client/components/HOCs/RequireAuth.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/HOCs/RequireAuth.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ "./src/client/hooks/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);




var RequireAuth = function RequireAuth(WrappedComponent) {
  return function (props) {
    var _useTypedSelector = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useTypedSelector)(function (state) {
      return state.auth;
    }),
        currentUser = _useTypedSelector.currentUser;

    switch (currentUser) {
      case false:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
          to: "/"
        });

      case null:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, props);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequireAuth);

/***/ }),

/***/ "./src/client/components/Header.tsx":
/*!******************************************!*\
  !*** ./src/client/components/Header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./src/client/hooks/index.ts");




var Header = function Header() {
  var _useTypedSelector = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useTypedSelector)(function (state) {
    return state.auth;
  }),
      currentUser = _useTypedSelector.currentUser;

  var authButton = currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/api/logout"
  }, "Logout") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/api/auth/google"
  }, "Login");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "brand-logo"
  }, "React SSR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/users"
  }, "Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/admins"
  }, "admins")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, authButton))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/client/hooks/index.ts":
/*!***********************************!*\
  !*** ./src/client/hooks/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useActions": () => (/* reexport safe */ _useActions__WEBPACK_IMPORTED_MODULE_0__.useActions),
/* harmony export */   "useAppDispatch": () => (/* reexport safe */ _useAppDispatch__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch),
/* harmony export */   "useTypedSelector": () => (/* reexport safe */ _useTypedSelector__WEBPACK_IMPORTED_MODULE_2__.useTypedSelector)
/* harmony export */ });
/* harmony import */ var _useActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useActions */ "./src/client/hooks/useActions.ts");
/* harmony import */ var _useAppDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAppDispatch */ "./src/client/hooks/useAppDispatch.ts");
/* harmony import */ var _useTypedSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTypedSelector */ "./src/client/hooks/useTypedSelector.ts");




/***/ }),

/***/ "./src/client/hooks/useActions.ts":
/*!****************************************!*\
  !*** ./src/client/hooks/useActions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useActions": () => (/* binding */ useActions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_users_usersSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/users/usersSlice */ "./src/client/state/users/usersSlice.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var actions = _objectSpread({}, _state_users_usersSlice__WEBPACK_IMPORTED_MODULE_3__.usersActions);

var useActions = function useActions() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.bindActionCreators)(actions, dispatch);
};

/***/ }),

/***/ "./src/client/hooks/useAppDispatch.ts":
/*!********************************************!*\
  !*** ./src/client/hooks/useAppDispatch.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Export a hook that can be reused to resolve types
var useAppDispatch = function useAppDispatch() {
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
};

/***/ }),

/***/ "./src/client/hooks/useTypedSelector.ts":
/*!**********************************************!*\
  !*** ./src/client/hooks/useTypedSelector.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTypedSelector": () => (/* binding */ useTypedSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

var useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ "./src/client/pages/AdminsListPage.tsx":
/*!*********************************************!*\
  !*** ./src/client/pages/AdminsListPage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_admin_admin_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/admin/admin.thunk */ "./src/client/state/admin/admin.thunk.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./src/client/hooks/index.ts");
/* harmony import */ var _components_HOCs_RequireAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HOCs/RequireAuth */ "./src/client/components/HOCs/RequireAuth.tsx");





var AdminsListPage = function AdminsListPage() {
  var dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();

  var _useTypedSelector = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useTypedSelector)(function (state) {
    return state.admin;
  }),
      adminsList = _useTypedSelector.adminsList;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!adminsList) {
      dispatch((0,_state_admin_admin_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchAdmins)());
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Protected list of Admins"), adminsList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, adminsList.map(function (admin) {
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: admin.id
    }, admin.name);
  })));
};

var loadData = function loadData(store) {
  return store.dispatch((0,_state_admin_admin_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchAdmins)());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: (0,_components_HOCs_RequireAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminsListPage),
  loadData: loadData
});

/***/ }),

/***/ "./src/client/pages/HomePage.tsx":
/*!***************************************!*\
  !*** ./src/client/pages/HomePage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "center-align",
    style: {
      marginTop: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Check out this awesome features"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: HomePage
});

/***/ }),

/***/ "./src/client/pages/NotFoundPage.tsx":
/*!*******************************************!*\
  !*** ./src/client/pages/NotFoundPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Page Not Found"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: NotFoundPage
});

/***/ }),

/***/ "./src/client/pages/UsersListPage.tsx":
/*!********************************************!*\
  !*** ./src/client/pages/UsersListPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./src/client/hooks/index.ts");
/* harmony import */ var _state_users_users_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/users/users.thunk */ "./src/client/state/users/users.thunk.ts");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);





var UsersListPage = function UsersListPage() {
  var dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();

  var _useTypedSelector = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useTypedSelector)(function (state) {
    return state.users;
  }),
      usersList = _useTypedSelector.usersList;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!usersList) {
      dispatch((0,_state_users_users_thunk__WEBPACK_IMPORTED_MODULE_2__.fetchUsers)());
    }
  }, []);
  var head = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "".concat(usersList ? usersList.length : '0', " users loaded")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: "Users App"
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, head, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Here's a big list of users"), usersList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, usersList.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: user.id
    }, user.name);
  })));
};

var loadData = function loadData(store) {
  return store.dispatch((0,_state_users_users_thunk__WEBPACK_IMPORTED_MODULE_2__.fetchUsers)());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: UsersListPage,
  loadData: loadData
});

/***/ }),

/***/ "./src/client/state/admin/admin.thunk.ts":
/*!***********************************************!*\
  !*** ./src/client/state/admin/admin.thunk.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAdmins": () => (/* binding */ fetchAdmins)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);



var fetchAdmins = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)('admin/fetchAdmins', /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_, thunkAPI) {
    var axiosInstance, _thunkAPI$getState$ad, loading, currentRequestId, _yield$axiosInstance$, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            axiosInstance = thunkAPI.extra;
            _thunkAPI$getState$ad = thunkAPI.getState().admin, loading = _thunkAPI$getState$ad.loading, currentRequestId = _thunkAPI$getState$ad.currentRequestId;

            if (!(!loading || thunkAPI.requestId !== currentRequestId)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return axiosInstance.get("/current_user");

          case 6:
            _yield$axiosInstance$ = _context.sent;
            data = _yield$axiosInstance$.data;
            return _context.abrupt("return", data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/client/state/admin/adminSlice.ts":
/*!**********************************************!*\
  !*** ./src/client/state/admin/adminSlice.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adminSlice": () => (/* binding */ adminSlice),
/* harmony export */   "adminActions": () => (/* binding */ adminActions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.thunk */ "./src/client/state/admin/admin.thunk.ts");


var initialState = {
  adminsList: null,
  loading: false,
  currentRequestId: undefined,
  error: null
};
var adminSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(_admin_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchAdmins.pending, function (state, action) {
      if (state.loading === false) {
        state.adminsList = null;
        state.loading = true;
        state.error = null;
        state.currentRequestId = action.meta.requestId;
      }
    }).addCase(_admin_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchAdmins.fulfilled, function (state, action) {
      var requestId = action.meta.requestId;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.adminsList = action.payload;
        state.loading = false;
        state.currentRequestId = undefined;
      }
    }).addCase(_admin_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchAdmins.rejected, function (state, action) {
      var requestId = action.meta.requestId;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.adminsList = null;
        state.loading = false;
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  }
});
var adminActions = adminSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adminSlice.reducer);

/***/ }),

/***/ "./src/client/state/auth/auth.thunk.ts":
/*!*********************************************!*\
  !*** ./src/client/state/auth/auth.thunk.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCurrentUser": () => (/* binding */ fetchCurrentUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);



var fetchCurrentUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)('auth/fetchCurrentUser', /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_, thunkAPI) {
    var axiosInstance, _thunkAPI$getState$au, loading, currentRequestId, _yield$axiosInstance$, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            axiosInstance = thunkAPI.extra;
            _thunkAPI$getState$au = thunkAPI.getState().auth, loading = _thunkAPI$getState$au.loading, currentRequestId = _thunkAPI$getState$au.currentRequestId;

            if (!(!loading || thunkAPI.requestId !== currentRequestId)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return axiosInstance.get("/current_user");

          case 6:
            _yield$axiosInstance$ = _context.sent;
            data = _yield$axiosInstance$.data;
            return _context.abrupt("return", data || false);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/client/state/auth/authSlice.ts":
/*!********************************************!*\
  !*** ./src/client/state/auth/authSlice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authSlice": () => (/* binding */ authSlice),
/* harmony export */   "authActions": () => (/* binding */ authActions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.thunk */ "./src/client/state/auth/auth.thunk.ts");


var initialState = {
  currentUser: null,
  loading: false,
  currentRequestId: undefined,
  error: null
};
var authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(_auth_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchCurrentUser.pending, function (state, action) {
      if (state.loading === false) {
        state.currentUser = null;
        state.loading = true;
        state.error = null;
        state.currentRequestId = action.meta.requestId;
      }
    }).addCase(_auth_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchCurrentUser.fulfilled, function (state, action) {
      var requestId = action.meta.requestId;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.currentUser = action.payload;
        state.loading = false;
        state.currentRequestId = undefined;
      }
    }).addCase(_auth_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchCurrentUser.rejected, function (state, action) {
      var requestId = action.meta.requestId;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.currentUser = null;
        state.loading = false;
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  }
});
var authActions = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

/***/ }),

/***/ "./src/client/state/users/users.thunk.ts":
/*!***********************************************!*\
  !*** ./src/client/state/users/users.thunk.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);



var fetchUsers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)('users/fetchUsers', /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_, thunkAPI) {
    var axiosInstance, _thunkAPI$getState$us, loading, currentRequestId, _yield$axiosInstance$, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            axiosInstance = thunkAPI.extra;
            _thunkAPI$getState$us = thunkAPI.getState().users, loading = _thunkAPI$getState$us.loading, currentRequestId = _thunkAPI$getState$us.currentRequestId;

            if (!(!loading || thunkAPI.requestId !== currentRequestId)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return axiosInstance.get("/users");

          case 6:
            _yield$axiosInstance$ = _context.sent;
            data = _yield$axiosInstance$.data;
            return _context.abrupt("return", data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/client/state/users/usersSlice.ts":
/*!**********************************************!*\
  !*** ./src/client/state/users/usersSlice.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersSlice": () => (/* binding */ usersSlice),
/* harmony export */   "usersActions": () => (/* binding */ usersActions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _users_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.thunk */ "./src/client/state/users/users.thunk.ts");


var initialState = {
  usersList: null,
  loading: false,
  currentRequestId: undefined,
  error: null
};
var usersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(_users_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchUsers.pending, function (state, action) {
      if (state.loading === false) {
        state.usersList = null;
        state.loading = true;
        state.error = null;
        state.currentRequestId = action.meta.requestId;
      }
    }).addCase(_users_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchUsers.fulfilled, function (state, action) {
      var requestId = action.meta.requestId;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.usersList = action.payload;
        state.loading = false;
        state.currentRequestId = undefined;
      }
    }).addCase(_users_thunk__WEBPACK_IMPORTED_MODULE_1__.fetchUsers.rejected, function (state, action) {
      var requestId = action.meta.requestId;

      if (state.loading === true && state.currentRequestId === requestId) {
        state.usersList = null;
        state.loading = false;
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  }
});
var usersActions = usersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersSlice.reducer);

/***/ }),

/***/ "./src/helpers/createStore.ts":
/*!************************************!*\
  !*** ./src/helpers/createStore.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_state_users_usersSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/state/users/usersSlice */ "./src/client/state/users/usersSlice.ts");
/* harmony import */ var _client_state_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/state/auth/authSlice */ "./src/client/state/auth/authSlice.ts");
/* harmony import */ var _client_state_admin_adminSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/state/admin/adminSlice */ "./src/client/state/admin/adminSlice.ts");






var createStore = function createStore(req) {
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
    baseURL: 'https://react-ssr-api.herokuapp.com/',
    headers: {
      cookie: req.get('cookie') || ''
    }
  });
  var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
      users: _client_state_users_usersSlice__WEBPACK_IMPORTED_MODULE_2__["default"],
      auth: _client_state_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__["default"],
      admin: _client_state_admin_adminSlice__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    middleware: function middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: axiosInstance
        }
      });
    }
  });
  return store;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);

/***/ }),

/***/ "./src/helpers/renderer.tsx":
/*!**********************************!*\
  !*** ./src/helpers/renderer.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_AppRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/AppRoutes */ "./src/client/AppRoutes.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);









var renderer = function renderer(req, store, context) {
  var content = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
    location: req.path,
    context: context
  }, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(_client_AppRoutes__WEBPACK_IMPORTED_MODULE_6__.AppRoutes))));
  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_7__.Helmet.renderStatic();
  return "\n  <html>\n    <head>\n      ".concat(helmet.title.toString(), "\n      ").concat(helmet.meta.toString(), "\n      <!-- Compiled and minified CSS -->\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n    </head>\n    \n    <body>\n      <div id=\"root\">").concat(content, "</div>\n\n      <script id=\"redux-preload-state\">\n        window.__PRELOADED_STATE__ = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(store.getState()), "\n      </script>\n\n      <script src=\"bundle.js\"></script>\n\n      <!-- Compiled and minified JavaScript -->\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n    </body>\n  </html>\n  ");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/createStore */ "./src/helpers/createStore.ts");
/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/renderer */ "./src/helpers/renderer.tsx");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_AppRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/AppRoutes */ "./src/client/AppRoutes.tsx");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_5__);






var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_5___default()('http://react-ssr-api.herokuapp.com/', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    if (opts.headers) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
    }

    return opts;
  }
}));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]('public'));
app.get('*', function (req, res) {
  var _matchRoutes;

  var store = (0,_helpers_createStore__WEBPACK_IMPORTED_MODULE_1__["default"])(req);
  console.log(req.path);
  var promises = (_matchRoutes = (0,react_router_config__WEBPACK_IMPORTED_MODULE_3__.matchRoutes)(_client_AppRoutes__WEBPACK_IMPORTED_MODULE_4__.AppRoutes, req.path)) === null || _matchRoutes === void 0 ? void 0 : _matchRoutes.map(function (match) {
    var route = match.route;
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve) {
        promise.then(resolve)["catch"](resolve); // Always resolve
      });
    }
  });

  var render = function render() {
    var context = {};
    var content = (0,_helpers_renderer__WEBPACK_IMPORTED_MODULE_2__["default"])(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  };

  if (promises) {
    Promise.all(promises).then(render)["catch"](render);
  }
});
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map