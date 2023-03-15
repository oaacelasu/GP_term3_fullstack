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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js */ \"./node_modules/core-js/index.js\");\n/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _AppHeader_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppHeader.jsx */ \"./src/AppHeader.jsx\");\n/* harmony import */ var _AppError_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppError.jsx */ \"./src/AppError.jsx\");\n/* harmony import */ var _EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmployeeTable.jsx */ \"./src/EmployeeTable.jsx\");\n/* harmony import */ var _EmployeeForm_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmployeeForm.jsx */ \"./src/EmployeeForm.jsx\");\n/* harmony import */ var _EmployeeSearch_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EmployeeSearch.jsx */ \"./src/EmployeeSearch.jsx\");\n/* harmony import */ var _AppLoader_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AppLoader.jsx */ \"./src/AppLoader.jsx\");\n{\n  /* src/App.jsx */\n}\n{/*\n    Author: Oscar Acelas\n    Student ID: 8804062\n    Date: 2023-01-21\n    Description: This is the main entry point for the application - EMS (Employee Management System) - Assignment 1\n */\n}\n\n\n\n\n\n\n\n\n\n\n//import {GET_EMPLOYEES, NEW_EMPLOYEE} from \"./graphql\";\nconst GET_EMPLOYEES = data => `query {\n                          employeeList(employeeType: ${data.employeeType}, department: ${data.department}, title: ${data.title}) {\n                            title\n                            lastName\n                            firstName\n                            id\n                            employeeType\n                            department\n                            dateOfJoining\n                            age\n                          }\n                        }`;\nconst NEW_EMPLOYEE = data => `mutation {\n                            employeeAdd(employee:{ \n                            firstName: \"${data.firstName}\",\n                            lastName: \"${data.lastName}\",\n                            age: ${data.age}\n                            employeeType: ${data.employeeType},\n                            department: ${data.department},\n                            title: ${data.title},\n                            dateOfJoining: \"${data.dateOfJoining.toISOString()}\"\n                            }) {\n                            id\n                        } }`;\nclass EmployeeDirectory extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor(props) {\n    super(props);\n    this.createEmployee = this.createEmployee.bind(this);\n    this.handleNavClick = this.handleNavClick.bind(this);\n    this.applySearch = this.applySearch.bind(this);\n    this.state = {\n      employees: [],\n      loading: true,\n      error: null,\n      route: \"dashboard\",\n      filters: {\n        department: null,\n        title: null,\n        employeeType: null\n      }\n    };\n  }\n  fetchEmployees() {\n    this.setState({\n      employees: [],\n      loading: true,\n      error: null,\n      route: \"dashboard\"\n    });\n    let query = GET_EMPLOYEES(this.state.filters);\n    console.log(\"EmployeeDirectory fetchEmployees query: \" + query);\n    return fetch('/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query: query\n      })\n    }).then(response => response.json()).then(result => {\n      this.setState({\n        employees: result.data.employeeList,\n        loading: false\n      });\n    }).catch(error => {\n      this.setState({\n        error,\n        loading: false\n      });\n    });\n  }\n  componentDidMount() {\n    console.log(\"EmployeeDirectory componentDidMount\");\n    this.fetchEmployees();\n  }\n  buildMain() {\n    if (this.state.route === \"dashboard\") {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"ul\", null, this.state.filters.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"li\", null, \"Department: \", this.state.filters.department), this.state.filters.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"li\", null, \"Title: \", this.state.filters.title), this.state.filters.employeeType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"li\", null, \"Employee Type: \", this.state.filters.employeeType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        employees: this.state.employees\n      }));\n    } else if (this.state.route === \"create\") {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmployeeForm_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        onSubmit: this.createEmployee\n      });\n    } else if (this.state.route === \"search\") {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmployeeSearch_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        onSubmit: this.applySearch,\n        filters: this.state.filters\n      });\n    }\n  }\n  handleNavClick(route) {\n    console.log(\"handleNavClick\");\n    if (route === \"create\") {\n      this.setState({\n        route: \"create\"\n      });\n    } else if (route === \"dashboard\") {\n      this.setState({\n        route: \"dashboard\"\n      });\n      this.componentDidMount();\n    } else if (route === \"search\") {\n      this.setState({\n        route: \"search\"\n      });\n    }\n  }\n  applySearch(search) {\n    this.setState({\n      loading: true,\n      filters: search\n    });\n    setTimeout(() => {\n      this.componentDidMount();\n    }, 1000);\n  }\n  createEmployee(employee) {\n    console.log(\"createEmployee\");\n    this.setState({\n      loading: true,\n      error: null\n    });\n    const query = NEW_EMPLOYEE(employee);\n    fetch('/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query\n      })\n    }).then(response => response.json()).then(result => {\n      console.log(result);\n      this.componentDidMount();\n    }).catch(error => {\n      this.setState({\n        error,\n        loading: false\n      });\n    });\n  }\n  render() {\n    const {\n      error,\n      loading\n    } = this.state;\n    if (error) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_AppError_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        error: error\n      });\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_AppLoader_jsx__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        isLoading: loading\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_AppHeader_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        currentRoute: this.state.route,\n        onActionClicked: this.handleNavClick.bind(this)\n      }), this.buildMain());\n    }\n  }\n}\nreact_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(EmployeeDirectory, null)), document.getElementById('root'));\n\n//# sourceURL=webpack://ems-ui/./src/App.jsx?");

/***/ }),

/***/ "./src/AppError.jsx":
/*!**************************!*\
  !*** ./src/AppError.jsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nclass AppError extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Something went wrong\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, this.props.error.message)));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppError);\n\n//# sourceURL=webpack://ems-ui/./src/AppError.jsx?");

/***/ }),

/***/ "./src/AppHeader.jsx":
/*!***************************!*\
  !*** ./src/AppHeader.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nclass AppHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  getActions() {\n    console.log(this.props.currentRoute);\n    if (this.props.currentRoute === 'dashboard') {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        href: \"#\",\n        onClick: () => this.props.onActionClicked(\"search\"),\n        role: \"button\"\n      }, \"Search\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        href: \"#\",\n        onClick: () => this.props.onActionClicked(\"create\"),\n        role: \"button\"\n      }, \"Create\")));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        href: \"#\",\n        onClick: () => this.props.onActionClicked(\"dashboard\"),\n        role: \"button\"\n      }, \"Dashboard\")));\n    }\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n      style: {\n        marginTop: \"15px\"\n      }\n    }, \"EMS Manager\"), this.getActions()));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppHeader);\n\n//# sourceURL=webpack://ems-ui/./src/AppHeader.jsx?");

/***/ }),

/***/ "./src/AppLoader.jsx":
/*!***************************!*\
  !*** ./src/AppLoader.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nclass AppLoader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    if (!this.props.isLoading) {\n      //return dive with the same size as the progress bar\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          height: \"30px\"\n        }\n      });\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"progress\", null));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLoader);\n\n//# sourceURL=webpack://ems-ui/./src/AppLoader.jsx?");

/***/ }),

/***/ "./src/EmployeeForm.jsx":
/*!******************************!*\
  !*** ./src/EmployeeForm.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nclass EmployeeForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.state = {\n      errors: []\n    };\n  }\n  handleSubmit(event) {\n    event.preventDefault();\n    const formData = new FormData(event.target);\n    const data = Object.fromEntries(formData.entries());\n    const errors = [];\n\n    //validate first name is at least 2 characters long\n    if (data.firstName.length < 2) {\n      errors.push({\n        message: \"First name must be at least 2 characters long\"\n      });\n    }\n\n    //validate last name is at least 2 characters long\n    if (data.lastName.length < 2) {\n      errors.push({\n        message: \"Last name must be at least 2 characters long\"\n      });\n    }\n\n    //validate age is selected\n    if (data.age === \"\") {\n      errors.push({\n        message: \"Age must be selected\"\n      });\n    }\n\n    //validate age is numeric\n    if (isNaN(parseInt(data.age))) {\n      errors.push({\n        message: \"Age must be numeric\"\n      });\n    }\n\n    //validate age is between 20 and 70\n    if (parseInt(data.age) < 20 || parseInt(data.age) > 70) {\n      errors.push({\n        message: \"Age must be between 20 and 70\"\n      });\n    }\n    if (data.employeeType === \"\") {\n      errors.push({\n        message: \"Employee type must be selected\"\n      });\n    }\n\n    //validate department is selected\n    if (data.department === \"\") {\n      errors.push({\n        message: \"Department must be selected\"\n      });\n    }\n\n    //validate date of joining is selected\n    if (data.dateOfJoining === \"\") {\n      errors.push({\n        message: \"Date of joining must be selected\"\n      });\n    }\n    if (errors.length > 0) {\n      this.setState({\n        errors: errors\n      });\n      return;\n    }\n    const employee = {\n      firstName: data.firstName,\n      lastName: data.lastName,\n      age: data.age,\n      employeeType: data.employeeType,\n      department: data.department,\n      title: data.title,\n      dateOfJoining: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)\n    };\n    this.props.onSubmit(employee);\n  }\n  render() {\n    if (this.state.errors.length > 0) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Review the following errors\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, this.state.errors.map(error => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, error.message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        onClick: () => this.setState({\n          errors: []\n        })\n      }, \"Review\"));\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"col-md-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Create Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n      className: \"form\",\n      action: \"\",\n      onSubmit: this.handleSubmit,\n      method: \"post\",\n      id: \"insert_form\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Enter new employee details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"firstName\",\n      className: \"placeholder\"\n    }, \"First Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      id: \"firstName\",\n      name: \"firstName\",\n      required: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"lastName\",\n      className: \"placeholder\"\n    }, \"Last Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      id: \"lastName\",\n      name: \"lastName\",\n      required: true\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"age\",\n      className: \"placeholder\"\n    }, \"Age\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"text\",\n      className: \"input\",\n      id: \"age\",\n      name: \"age\",\n      required: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"employeeType\",\n      className: \"placeholder\"\n    }, \"Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      className: \"input\",\n      id: \"employeeType\",\n      name: \"employeeType\",\n      defaultValue: '',\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\",\n      disabled: true\n    }, \"Select...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"FULL_TIME\"\n    }, \"Full Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"PART_TIME\"\n    }, \"Part Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"CONTRACT\"\n    }, \"Contract\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"SEASONAL\"\n    }, \"Seasonal\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"department\",\n      className: \"placeholder\"\n    }, \"Department\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      className: \"input\",\n      id: \"department\",\n      name: \"department\",\n      defaultValue: '',\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\",\n      disabled: true\n    }, \"Select...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"IT\"\n    }, \"IT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"HR\"\n    }, \"HR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Finance\"\n    }, \"Finance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Sales\"\n    }, \"Sales\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Marketing\"\n    }, \"Marketing\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"title\",\n      className: \"placeholder\"\n    }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      className: \"input\",\n      id: \"title\",\n      name: \"title\",\n      defaultValue: '',\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\",\n      disabled: true\n    }, \"Select...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Employee\"\n    }, \"Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Manager\"\n    }, \"Manager\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Director\"\n    }, \"Director\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"VP\"\n    }, \"VP\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"submit\",\n      className: \"submit\"\n    }, \"Submit\")))));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmployeeForm);\n\n//# sourceURL=webpack://ems-ui/./src/EmployeeForm.jsx?");

/***/ }),

/***/ "./src/EmployeeSearch.jsx":
/*!********************************!*\
  !*** ./src/EmployeeSearch.jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nclass EmployeeSearch extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.handleChangeEmployeeType = this.handleChangeEmployeeType.bind(this);\n    this.handleChangeDepartment = this.handleChangeDepartment.bind(this);\n    this.handleChangeTitle = this.handleChangeTitle.bind(this);\n    this.state = {\n      filters: this.props.filters\n    };\n  }\n  handleSubmit(event) {\n    event.preventDefault();\n    const formData = new FormData(event.target);\n    const data = Object.fromEntries(formData.entries());\n    let filters = {\n      department: null,\n      title: null,\n      employeeType: null\n    };\n    if (data.employeeType !== \"\") {\n      filters.employeeType = data.employeeType;\n    }\n    if (data.department !== \"\") {\n      filters.department = data.department;\n    }\n    if (data.title !== \"\") {\n      filters.title = data.title;\n    }\n    this.props.onSubmit(filters);\n  }\n  handleChangeEmployeeType(event) {\n    this.setState({\n      filters: {\n        ...this.state.filters,\n        employeeType: event.target.value\n      }\n    });\n  }\n  handleChangeDepartment(event) {\n    this.setState({\n      filters: {\n        ...this.state.filters,\n        department: event.target.value\n      }\n    });\n  }\n  handleChangeTitle(event) {\n    this.setState({\n      filters: {\n        ...this.state.filters,\n        title: event.target.value\n      }\n    });\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"col-md-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Search\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n      onSubmit: this.handleSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"employeeType\"\n    }, \"Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      id: \"employeeType\",\n      name: \"employeeType\",\n      className: \"form-control\",\n      value: this.state.filters.employeeType ?? \"\",\n      onChange: this.handleChangeEmployeeType\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\"\n    }, \"All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"FULL_TIME\"\n    }, \"Full Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"PART_TIME\"\n    }, \"Part Time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"CONTRACT\"\n    }, \"Contract\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"SEASONAL\"\n    }, \"Seasonal\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"department\"\n    }, \"Department\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      id: \"department\",\n      name: \"department\",\n      className: \"form-control\",\n      value: this.state.filters.department ?? \"\",\n      onChange: this.handleChangeDepartment\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\"\n    }, \"All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"IT\"\n    }, \"IT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"HR\"\n    }, \"HR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Finance\"\n    }, \"Finance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Sales\"\n    }, \"Sales\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Marketing\"\n    }, \"Marketing\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"title\"\n    }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      id: \"title\",\n      name: \"title\",\n      className: \"form-control\",\n      value: this.state.filters.title ?? \"\",\n      onChange: this.handleChangeTitle\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"\"\n    }, \"All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Employee\"\n    }, \"Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Manager\"\n    }, \"Manager\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"Director\"\n    }, \"Director\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      value: \"VP\"\n    }, \"VP\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"submit\",\n      className: \"btn btn-primary\"\n    }, \"Search\")))));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmployeeSearch);\n\n//# sourceURL=webpack://ems-ui/./src/EmployeeSearch.jsx?");

/***/ }),

/***/ "./src/EmployeeTable.jsx":
/*!*******************************!*\
  !*** ./src/EmployeeTable.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nclass EmployeeTable extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  getPrettyDate(date) {\n    const d = new Date(date);\n    return d.toLocaleDateString();\n  }\n  getPrettyId(id) {\n    return id.substring(0, 8);\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"col-md-12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Employee Directory\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"table\", {\n      role: \"grid\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Id\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"First Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Last Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Department\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Date of Joining\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"col\"\n    }, \"Age\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tbody\", null, this.props.employees.map(employee => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", {\n      key: employee.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n      scope: \"row\",\n      \"data-tooltip\": employee.id\n    }, this.getPrettyId(employee.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.employeeType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, this.getPrettyDate(employee.dateOfJoining)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, employee.age))))))));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmployeeTable);\n\n//# sourceURL=webpack://ems-ui/./src/EmployeeTable.jsx?");

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