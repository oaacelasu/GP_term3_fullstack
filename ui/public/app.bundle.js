/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js */ \"./node_modules/core-js/index.js\");\n/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _EmployeeDirectory_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployeeDirectory.jsx */ \"./src/EmployeeDirectory.jsx\");\n/* harmony import */ var _EmployeeForm_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmployeeForm.jsx */ \"./src/EmployeeForm.jsx\");\n/* harmony import */ var _EmployeeSearch_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmployeeSearch.jsx */ \"./src/EmployeeSearch.jsx\");\n{\n  /* src/App.jsx */\n}\n{/*\n    Author: Oscar Acelas\n    Student ID: 8804062\n    Date: 2023-01-21\n    Description: This is the main entry point for the application - EMS (Employee Management System) - Assignment 1\n */\n}\n\n\n\n\n\n\n\n\nconst NotFound = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"h1\", null, \"404.. This page is not found!\");\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"/dashboard\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmployeeDirectory_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"/search\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmployeeSearch_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    exact: true,\n    path: \"/create\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmployeeForm_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"/edit/:id\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmployeeForm_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"*\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(NotFound, null)\n  }))));\n};\nreact_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(App, null)), document.getElementById('root'));\n\n//# sourceURL=webpack://ems-ui/./src/App.jsx?");

/***/ }),

/***/ "./src/AppLoader.jsx":
/*!***************************!*\
  !*** ./src/AppLoader.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AppLoader; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nclass AppLoader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    if (!this.props.isLoading) {\n      //return dive with the same size as the progress bar\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          height: \"30px\"\n        }\n      });\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"progress\", null));\n  }\n}\n\n//# sourceURL=webpack://ems-ui/./src/AppLoader.jsx?");

/***/ }),

/***/ "./src/EmployeeDirectory.jsx":
/*!***********************************!*\
  !*** ./src/EmployeeDirectory.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js */ \"./node_modules/core-js/index.js\");\n/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmployeeTable.jsx */ \"./src/EmployeeTable.jsx\");\n/* harmony import */ var _AppLoader_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppLoader.jsx */ \"./src/AppLoader.jsx\");\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql */ \"./src/graphql.js\");\n/* harmony import */ var _Utils_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils.jsx */ \"./src/Utils.jsx\");\n\n{\n  /* src/App.jsx */\n}\n{/*\n    Author: Oscar Acelas\n    Student ID: 8804062\n    Date: 2023-01-21\n    Description: This is the main entry point for the application - EMS (Employee Management System) - Assignment 1\n */\n}\n\n\n\n\n\n\n\nconst DashboardLinks = data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"h1\", {\n  style: {\n    marginTop: \"15px\"\n  }\n}, \"EMS Manager\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n  to: {\n    pathname: '/search',\n    search: `?${data.query}`\n  }\n}, \"Search\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n  to: `/create`\n}, \"Create\"))));\nclass EmployeeDirectory extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor(props) {\n    super(props);\n    this.deleteEmployee = this.deleteEmployee.bind(this);\n    this.searchQuery = new Map(props.searchParams);\n    this.state = {\n      employees: [],\n      loading: true,\n      error: null,\n      filters: {\n        department: props.searchParams.get(\"department\") || null,\n        title: props.searchParams.get(\"title\") || null,\n        employeeType: props.searchParams.get(\"employeeType\") || null\n      }\n    };\n  }\n  fetchEmployees() {\n    this.setState({\n      employees: [],\n      loading: true,\n      error: null\n    });\n    let query = (0,_graphql__WEBPACK_IMPORTED_MODULE_5__.GET_EMPLOYEES)(this.state.filters);\n    console.log(\"EmployeeDirectory fetchEmployees query: \" + query);\n    return fetch('/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query: query\n      })\n    }).then(response => response.json()).then(result => {\n      this.setState({\n        employees: result.data.employeeList,\n        loading: false\n      });\n    }).catch(error => {\n      this.setState({\n        error,\n        loading: false\n      });\n    });\n  }\n  deleteEmployee(id) {\n    this.setState({\n      loading: true,\n      error: null\n    });\n    let data = {\n      id: id\n    };\n    let query = (0,_graphql__WEBPACK_IMPORTED_MODULE_5__.DELETE_EMPLOYEE)(data);\n    return fetch('/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query: query\n      })\n    }).then(response => response.json()).then(result => {\n      this.componentDidMount();\n    }).catch(error => {\n      this.setState({\n        error,\n        loading: false\n      });\n    });\n  }\n  componentDidMount() {\n    this.fetchEmployees();\n  }\n  render() {\n    const {\n      error,\n      loading\n    } = this.state;\n    if (error) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"h3\", null, \"Error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"h4\", null, \"Something went wrong\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"p\", null, this.state.error.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"button\", {\n        onClick: () => this.setState({\n          error: null\n        })\n      }, \"Review\"));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(DashboardLinks, {\n        query: (0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_6__.buildQuery)(this.searchQuery)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_AppLoader_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        isLoading: loading\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"ul\", null, this.state.filters.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"li\", null, \"Department: \", this.state.filters.department), this.state.filters.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"li\", null, \"Title: \", this.state.filters.title), this.state.filters.employeeType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"li\", null, \"Employee Type: \", this.state.filters.employeeType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        employees: this.state.employees,\n        deleteEmployee: this.deleteEmployee\n      })));\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_6__.getParam)(EmployeeDirectory));\n\n//# sourceURL=webpack://ems-ui/./src/EmployeeDirectory.jsx?");

/***/ }),

/***/ "./src/EmployeeForm.jsx":
/*!******************************!*\
  !*** ./src/EmployeeForm.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql */ \"./src/graphql.js\");\n/* harmony import */ var _AppLoader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppLoader.jsx */ \"./src/AppLoader.jsx\");\n/* harmony import */ var _Utils_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils.jsx */ \"./src/Utils.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n\n\n\n\n\nconst CreateLinks = data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n  style: {\n    marginTop: \"15px\"\n  }\n}, \"Create\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n  to: {\n    pathname: '/dashboard',\n    search: `?${data.query}`\n  }\n}, \"Dashboard\"))));\nconst EditLinks = data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n  style: {\n    marginTop: \"15px\"\n  }\n}, \"Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n  to: {\n    pathname: '/dashboard',\n    search: `?${data.query}`\n  }\n}, \"Dashboard\"))));\nclass EmployeeForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.createEmployee = this.createEmployee.bind(this);\n    this.searchQuery = new Map(props.searchParams);\n    this.employeeId = props.params.id;\n    this.state = {\n      employee: null,\n      loading: false,\n      error: null,\n      errors: []\n    };\n  }\n  handleSubmit(event) {\n    event.preventDefault();\n    const formData = new FormData(event.target);\n    const data = Object.fromEntries(formData.entries());\n    const errors = [];\n\n    //validate first name is at least 2 characters long\n    if (data.firstName.length < 2) {\n      errors.push({\n        message: \"First name must be at least 2 characters long\"\n      });\n    }\n\n    //validate last name is at least 2 characters long\n    if (data.lastName.length < 2) {\n      errors.push({\n        message: \"Last name must be at least 2 characters long\"\n      });\n    }\n\n    //validate age is selected\n    if (data.age === \"\") {\n      errors.push({\n        message: \"Age must be selected\"\n      });\n    }\n\n    //validate age is numeric\n    if (isNaN(parseInt(data.age))) {\n      errors.push({\n        message: \"Age must be numeric\"\n      });\n    }\n\n    //validate age is between 20 and 70\n    if (parseInt(data.age) < 20 || parseInt(data.age) > 70) {\n      errors.push({\n        message: \"Age must be between 20 and 70\"\n      });\n    }\n    if (data.employeeType === \"\") {\n      errors.push({\n        message: \"Employee type must be selected\"\n      });\n    }\n\n    //validate department is selected\n    if (data.department === \"\") {\n      errors.push({\n        message: \"Department must be selected\"\n      });\n    }\n\n    //validate date of joining is selected\n    if (data.dateOfJoining === \"\") {\n      errors.push({\n        message: \"Date of joining must be selected\"\n      });\n    }\n    if (errors.length > 0) {\n      this.setState({\n        errors: errors\n      });\n      return;\n    }\n    console.log(\"currentStatus: \" + data.currentStatus);\n    const employee = {\n      firstName: data.firstName,\n      lastName: data.lastName,\n      age: data.age,\n      employeeType: data.employeeType,\n      department: data.department,\n      title: data.title,\n      currentStatus: data.currentStatus === \"on\",\n      dateOfJoining: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)\n    };\n    if (this.employeeId) {\n      employee.id = this.employeeId;\n      this.editEmployee(employee);\n    } else {\n      employee.currentStatus = true;\n      this.createEmployee(employee);\n    }\n  }\n  createEmployee(employee) {\n    console.log(\"createEmployee\");\n    this.setState({\n      loading: true,\n      error: null\n    });\n    const query = (0,_graphql__WEBPACK_IMPORTED_MODULE_1__.NEW_EMPLOYEE)(employee);\n    fetch('/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query\n      })\n    }).then(response => response.json()).then(result => {\n      this.props.navigate('/dashboard');\n    }).catch(error => {\n      this.setState({\n        error,\n        loading: false\n      });\n    });\n  }\n  editEmployee(employee) {\n    console.log(\"editEmployee\");\n    this.setState({\n      loading: true,\n      error: null\n    });\n    const query = (0,_graphql__WEBPACK_IMPORTED_MODULE_1__.EDIT_EMPLOYEE)(employee);\n    fetch('/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query\n      })\n    }).then(response => response.json()).then(result => {\n      this.props.navigate('/dashboard');\n    }).catch(error => {\n      this.setState({\n        error,\n        loading: false\n      });\n    });\n  }\n  fetchEmployee() {\n    this.setState({\n      employee: null,\n      loading: true,\n      error: null\n    });\n    const data = {\n      id: this.employeeId\n    };\n    let query = (0,_graphql__WEBPACK_IMPORTED_MODULE_1__.GET_EMPLOYEE)(data);\n    return fetch('/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query: query\n      })\n    }).then(response => response.json()).then(result => {\n      this.setState({\n        employee: result.data.employee,\n        loading: false\n      });\n    }).catch(error => {\n      this.setState({\n        error,\n        loading: false\n      });\n    });\n  }\n  componentDidMount() {\n    if (this.employeeId) {\n      this.fetchEmployee();\n    }\n  }\n  buildHeader() {\n    if (this.employeeId) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Edit Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Employee ID: \", this.state.employee?.id || 'Loading...'));\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Create Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Enter new employee details\"));\n  }\n  render() {\n    if (this.state.errors.length > 0) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Review the following errors\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, this.state.errors.map(error => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, error.message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        onClick: () => this.setState({\n          errors: []\n        })\n      }, \"Review\"));\n    }\n    if (this.state.error) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Something went wrong\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, this.state.error.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        onClick: () => this.setState({\n          error: null\n        })\n      }, \"Review\"));\n    }\n    if (this.state.employee === null && this.employeeId) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Employee not found\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Employee with ID \", this.employeeId, \" not found\")));\n    }\n    if (!this.state.employee && this.loading) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AppLoader_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        isLoading: this.state.loading\n      });\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AppLoader_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      isLoading: this.state.loading\n    }), this.employeeId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditLinks, {\n      query: (0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_3__.buildQuery)(this.searchQuery)\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CreateLinks, {\n      query: (0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_3__.buildQuery)(this.searchQuery)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"col-md-12\"\n    }, this.buildHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n      className: \"form\",\n      action: \"\",\n      onSubmit: this.handleSubmit,\n      method: \"post\",\n      id: \"insert_form\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"firstName\",\n      className: \"placeholder\"\n    }, \"First Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      id: \"firstName\",\n      name: \"firstName\",\n      defaultValue: this.state.employee?.firstName || '',\n      readOnly: !!this.state.employee?.firstName,\n      required: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"lastName\",\n      className: \"placeholder\"\n    }, \"Last Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      id: \"lastName\",\n      name: \"lastName\",\n      defaultValue: this.state.employee?.lastName || '',\n      readOnly: !!this.state.employee?.lastName,\n      required: true\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"age\",\n      className: \"placeholder\"\n    }, \"Age\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      id: \"age\",\n      name: \"age\",\n      defaultValue: this.state.employee?.age || '',\n      readOnly: !!this.state.employee?.age,\n      required: true\n    })), this.state.employee?.employeeType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"employeeType\",\n      className: \"placeholder\"\n    }, \"Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      id: \"employeeType\",\n      name: \"employeeType\",\n      defaultValue: this.state.employee?.employeeType || '',\n      readOnly: true,\n      required: true\n    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"employeeType\",\n      className: \"placeholder\"\n    }, \"Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      className: \"input\",\n      id: \"employeeType\",\n      name: \"employeeType\",\n      defaultValue: this.state.employee?.employeeType || '',\n      disabled: !!this.state.employee?.employeeType,\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\",\n      disabled: true\n    }, \"Select...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"FULL_TIME\"\n    }, \"Full Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"PART_TIME\"\n    }, \"Part Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"CONTRACT\"\n    }, \"Contract\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"SEASONAL\"\n    }, \"Seasonal\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"department\",\n      className: \"placeholder\"\n    }, \"Department\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      className: \"input\",\n      id: \"department\",\n      name: \"department\",\n      defaultValue: this.state.employee?.department || '',\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\",\n      disabled: true\n    }, \"Select...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"IT\"\n    }, \"IT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"HR\"\n    }, \"HR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Finance\"\n    }, \"Finance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Sales\"\n    }, \"Sales\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Marketing\"\n    }, \"Marketing\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"title\",\n      className: \"placeholder\"\n    }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      className: \"input\",\n      id: \"title\",\n      name: \"title\",\n      defaultValue: this.state.employee?.title || '',\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\",\n      disabled: true\n    }, \"Select...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Employee\"\n    }, \"Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Manager\"\n    }, \"Manager\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Director\"\n    }, \"Director\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"VP\"\n    }, \"VP\")))), this.employeeId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"currentStatus\",\n      className: \"placeholder\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"checkbox\",\n      className: \"input\",\n      id: \"currentStatus\",\n      name: \"currentStatus\",\n      role: \"switch\",\n      defaultChecked: this.state.employee?.currentStatus || false\n    }), \"Current Status\"))), this.employeeId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"submit\",\n      className: \"submit\"\n    }, \"Update\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"submit\",\n      className: \"submit\"\n    }, \"Create\")))));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_3__.getParam)(EmployeeForm));\n\n//# sourceURL=webpack://ems-ui/./src/EmployeeForm.jsx?");

/***/ }),

/***/ "./src/EmployeeSearch.jsx":
/*!********************************!*\
  !*** ./src/EmployeeSearch.jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Utils_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.jsx */ \"./src/Utils.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n\n\n\nconst SearchLinks = data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n  style: {\n    marginTop: \"15px\"\n  }\n}, \"Search\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n  to: {\n    pathname: '/dashboard',\n    search: `?${data.query}`\n  }\n}, \"Dashboard\"))));\nclass EmployeeSearch extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.handleChangeEmployeeType = this.handleChangeEmployeeType.bind(this);\n    this.handleChangeDepartment = this.handleChangeDepartment.bind(this);\n    this.handleChangeTitle = this.handleChangeTitle.bind(this);\n    this.searchQuery = new Map(props.searchParams);\n    this.state = {\n      filters: {\n        department: props.searchParams.get(\"department\") || null,\n        title: props.searchParams.get(\"title\") || null,\n        employeeType: props.searchParams.get(\"employeeType\") || null\n      }\n    };\n  }\n  handleSubmit(event) {\n    event.preventDefault();\n    const formData = new FormData(event.target);\n    const data = Object.fromEntries(formData.entries());\n    let filters = {\n      department: null,\n      title: null,\n      employeeType: null\n    };\n    if (data.employeeType !== \"\") {\n      filters.employeeType = data.employeeType;\n    }\n    if (data.department !== \"\") {\n      filters.department = data.department;\n    }\n    if (data.title !== \"\") {\n      filters.title = data.title;\n    }\n    this.props.navigate('/dashboard?' + (0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_1__.buildQuery)(new Map(Object.entries(filters))));\n  }\n  handleChangeEmployeeType(event) {\n    this.setState({\n      filters: {\n        ...this.state.filters,\n        employeeType: event.target.value\n      }\n    });\n  }\n  handleChangeDepartment(event) {\n    this.setState({\n      filters: {\n        ...this.state.filters,\n        department: event.target.value\n      }\n    });\n  }\n  handleChangeTitle(event) {\n    this.setState({\n      filters: {\n        ...this.state.filters,\n        title: event.target.value\n      }\n    });\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchLinks, {\n      query: (0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_1__.buildQuery)(this.searchQuery)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"col-md-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Search\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n      onSubmit: this.handleSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"employeeType\"\n    }, \"Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      id: \"employeeType\",\n      name: \"employeeType\",\n      className: \"form-control\",\n      value: this.state.filters.employeeType ?? \"\",\n      onChange: this.handleChangeEmployeeType\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\"\n    }, \"All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"FULL_TIME\"\n    }, \"Full Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"PART_TIME\"\n    }, \"Part Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"CONTRACT\"\n    }, \"Contract\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"SEASONAL\"\n    }, \"Seasonal\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"department\"\n    }, \"Department\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      id: \"department\",\n      name: \"department\",\n      className: \"form-control\",\n      value: this.state.filters.department ?? \"\",\n      onChange: this.handleChangeDepartment\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\"\n    }, \"All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"IT\"\n    }, \"IT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"HR\"\n    }, \"HR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Finance\"\n    }, \"Finance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Sales\"\n    }, \"Sales\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Marketing\"\n    }, \"Marketing\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"title\"\n    }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      id: \"title\",\n      name: \"title\",\n      className: \"form-control\",\n      value: this.state.filters.title ?? \"\",\n      onChange: this.handleChangeTitle\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\"\n    }, \"All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Employee\"\n    }, \"Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Manager\"\n    }, \"Manager\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Director\"\n    }, \"Director\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"VP\"\n    }, \"VP\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"submit\",\n      className: \"btn btn-primary\"\n    }, \"Search\")))));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_1__.getParam)(EmployeeSearch));\n\n//# sourceURL=webpack://ems-ui/./src/EmployeeSearch.jsx?");

/***/ }),

/***/ "./src/EmployeeTable.jsx":
/*!*******************************!*\
  !*** ./src/EmployeeTable.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Utils_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.jsx */ \"./src/Utils.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n\n\n\nclass EmployeeTable extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.onEdit = this.onEdit.bind(this);\n    this.onDelete = this.onDelete.bind(this);\n  }\n  getPrettyDate(date) {\n    const d = new Date(date);\n    return d.toLocaleDateString();\n  }\n  getPrettyId(id) {\n    return id.substring(0, 8);\n  }\n  onEdit(id) {\n    this.props.navigate(`/edit/${id}`);\n  }\n  onDelete(id) {\n    event.preventDefault();\n    this.props.deleteEmployee(id);\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"col-md-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Employee Directory\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"table\", {\n      role: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Id\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"First Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Last Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Department\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Date of Joining\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Age\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Actions\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tbody\", null, this.props.employees.map(employee => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", {\n      key: employee.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"row\",\n      \"data-tooltip\": employee.id\n    }, this.getPrettyId(employee.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.employeeType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, this.getPrettyDate(employee.dateOfJoining)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      to: `/edit/${employee.id}`\n    }, \"Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: \"#\",\n      onClick: () => this.onDelete(employee.id)\n    }, \"Delete\")))))))));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_Utils_jsx__WEBPACK_IMPORTED_MODULE_1__.getParam)(EmployeeTable));\n\n//# sourceURL=webpack://ems-ui/./src/EmployeeTable.jsx?");

/***/ }),

/***/ "./src/Utils.jsx":
/*!***********************!*\
  !*** ./src/Utils.jsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildQuery\": function() { return /* binding */ buildQuery; },\n/* harmony export */   \"getParam\": function() { return /* binding */ getParam; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nfunction getParam(WrappedComponent) {\n  return c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, _extends({}, c, {\n    params: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),\n    searchParams: new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)().search),\n    navigate: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)()\n  }));\n}\nfunction buildQuery(searchQuery) {\n  let q = \"\";\n  for (let [key, value] of searchQuery.entries()) {\n    if (value !== null && value !== \"\") {\n      q += `${key}=${value}&`;\n    }\n  }\n\n  // remove the last & if it exists\n  if (q.endsWith(\"&\")) {\n    q = q.substring(0, q.length - 1);\n  }\n  return q;\n}\n\n\n//# sourceURL=webpack://ems-ui/./src/Utils.jsx?");

/***/ }),

/***/ "./src/graphql.js":
/*!************************!*\
  !*** ./src/graphql.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DELETE_EMPLOYEE\": function() { return /* binding */ DELETE_EMPLOYEE; },\n/* harmony export */   \"EDIT_EMPLOYEE\": function() { return /* binding */ EDIT_EMPLOYEE; },\n/* harmony export */   \"GET_EMPLOYEE\": function() { return /* binding */ GET_EMPLOYEE; },\n/* harmony export */   \"GET_EMPLOYEES\": function() { return /* binding */ GET_EMPLOYEES; },\n/* harmony export */   \"NEW_EMPLOYEE\": function() { return /* binding */ NEW_EMPLOYEE; }\n/* harmony export */ });\nconst GET_EMPLOYEES = data => `query {\n                          employeeList(employeeType: ${data.employeeType}, department: ${data.department}, title: ${data.title}) {\n                            title\n                            lastName\n                            firstName\n                            id\n                            employeeType\n                            department\n                            dateOfJoining\n                            age,\n                            currentStatus\n                          }\n                        }`;\nconst GET_EMPLOYEE = data => `query {\n                          employee(id: \"${data.id}\") {\n                            title\n                            lastName\n                            firstName\n                            id\n                            employeeType\n                            department\n                            dateOfJoining\n                            age\n                            currentStatus\n                            }\n                        }`;\nconst NEW_EMPLOYEE = data => `mutation {\n                            employeeAdd(employee:{ \n                            firstName: \"${data.firstName}\",\n                            lastName: \"${data.lastName}\",\n                            age: ${data.age}\n                            employeeType: ${data.employeeType},\n                            department: ${data.department},\n                            title: ${data.title},\n                            dateOfJoining: \"${data.dateOfJoining.toISOString()}\",\n                            currentStatus: ${data.currentStatus}\n                            }) {\n                            id\n                        } }`;\nconst EDIT_EMPLOYEE = data => `mutation {\n                            employeeUpdate(\n                            id: \"${data.id}\",\n                            employee:{\n                            firstName: \"${data.firstName}\",\n                            lastName: \"${data.lastName}\",\n                            age: ${data.age}\n                            employeeType: ${data.employeeType},\n                            department: ${data.department},\n                            title: ${data.title},\n                            dateOfJoining: \"${data.dateOfJoining.toISOString()}\",\n                            currentStatus: ${data.currentStatus}\n                            }) {\n                            id\n                        } }`;\nconst DELETE_EMPLOYEE = data => `mutation {\n                            employeeDelete(id: \"${data.id}\") {\n                            id\n                        } }`;\n\n\n//# sourceURL=webpack://ems-ui/./src/graphql.js?");

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkems_ui"] = self["webpackChunkems_ui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/App.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;