/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./browser-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./browser-index.js":
/*!**************************!*\
  !*** ./browser-index.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils */ "./src/utils/index.js");
/* harmony import */ var _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ConsoleAppender */ "./src/ConsoleAppender.js");
/* harmony import */ var _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/HtmlAppender */ "./src/HtmlAppender.js");
/* harmony import */ var _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/InteligentBrowserAppender */ "./src/InteligentBrowserAppender.js");
/* harmony import */ var _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/MemoryAppender */ "./src/MemoryAppender.js");
/* harmony import */ var _src_LogLevel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _src_Logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Logger */ "./src/Logger.js");
/* harmony import */ var _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/LoggerFactory */ "./src/LoggerFactory.js");
/* harmony import */ var _src_LoggerRegistry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/LoggerRegistry */ "./src/LoggerRegistry.js");











(function(global){
	global.de = global.de || {};
	global.de.titus = global.de.titus || {};
	global.de.titus.logging = global.de.titus.logging || {
		VERSION : "3.0.0-beta1",
		utils : _src_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
		ConsoleAppender : _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
		ConsolenAppender : _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
		HtmlAppender : _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
		MemoryAppender : _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
		InteligentBrowserAppender : _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
		LogLevel : _src_LogLevel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
		Logger : _src_Logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
		LoggerFactory : _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
		LoggerRegistry : _src_LoggerRegistry__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
	};	
})(window || global || {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/ConsoleAppender.js":
/*!********************************!*\
  !*** ./src/ConsoleAppender.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DateUtils */ "./src/utils/DateUtils.js");



const ConsoleAppender = {
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].NOLOG == aLogLevel)
			return;
		let log = [];
		if (aDate)
			log.push(_utils_DateUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].dateAsString(aDate), " ");
		
		log.push("***", aLogLevel.title, "*** ", aLoggerName);
		
		if (aMessage) {
			log.push(" -> ");
			if (Array.isArray(aMessage))
				Array.prototype.push.apply(log, aMessage);
			else
				log.push(aMessage);
		}
		if (anException)
			log.push(": ", anException);
		
		let appender = console.log;		
		if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ERROR == aLogLevel) 
			appender = console.error; 
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].WARN == aLogLevel)
			appender = console.warn;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].INFO == aLogLevel)
			appender = console.info;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DEBUG == aLogLevel)
			appender = console.debug;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].TRACE == aLogLevel)
			appender = console.trace;
		
		appender.apply(console, log);	
	}
};
/* harmony default export */ __webpack_exports__["a"] = (ConsoleAppender);

/***/ }),

/***/ "./src/HtmlAppender.js":
/*!*****************************!*\
  !*** ./src/HtmlAppender.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DateUtils */ "./src/utils/DateUtils.js");


const CONTAINER = "[data-log]";		
const HtmlAppender = {
	isAvailable : function(){
		return !!document.querySelector(CONTAINER) ;
	},
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		let container = document.querySelector(CONTAINER);
		if (!container)
			return;
		
		let entry = document.createElement("div");
		entry.setAttribute("class", "log-entry " + aLogLevel.title);
		let message =  _utils_DateUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].dateAsString(aDate || new Date()) + " ***" + aLogLevel.title + "*** " + aLoggerName + "";
		
		if (aMessage)
			message += " -> " + aMessage;
		if (anException)
			message += ": " + anException;
		
		entry.textContent = message;
		return container.appendChild(entry);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (HtmlAppender);

/***/ }),

/***/ "./src/InteligentBrowserAppender.js":
/*!******************************************!*\
  !*** ./src/InteligentBrowserAppender.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _HtmlAppender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlAppender */ "./src/HtmlAppender.js");
/* harmony import */ var _ConsoleAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleAppender */ "./src/ConsoleAppender.js");
/* harmony import */ var _MemoryAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MemoryAppender */ "./src/MemoryAppender.js");




let appender;
const getAppender = function() {
	if (this.appender) {		
		if (console)
			this.appender = ConsolenAppender;
		else if (_HtmlAppender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].isAvailable())
			this.appender = _HtmlAppender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
		else
			this.appender = _MemoryAppender__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
	}
	
	return this.appender;
};
const InteligentBrowserAppender = {
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		getAppender().logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (InteligentBrowserAppender);


/***/ }),

/***/ "./src/LogLevel.js":
/*!*************************!*\
  !*** ./src/LogLevel.js ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LogLevel = function(aOrder, aTitle) {
	this.order = aOrder;
	this.title = aTitle;
};

LogLevel.prototype.isIncluded = function(aLogLevel) {
	return this.order >= aLogLevel.order;
};

LogLevel.getLogLevel = function(aLogLevelName) {
	if (aLogLevelName == undefined)
		return LogLevel.NOLOG;

	var levelName = aLogLevelName.toUpperCase();
	return LogLevel[levelName];
};

LogLevel.NOLOG = new LogLevel(0, "NOLOG");
LogLevel.ERROR = new LogLevel(1, "ERROR");
LogLevel.WARN = new LogLevel(2, "WARN");
LogLevel.INFO = new LogLevel(3, "INFO");
LogLevel.DEBUG = new LogLevel(4, "DEBUG");
LogLevel.TRACE = new LogLevel(5, "TRACE");

/* harmony default export */ __webpack_exports__["a"] = (LogLevel);

/***/ }),

/***/ "./src/Logger.js":
/*!***********************!*\
  !*** ./src/Logger.js ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");


const Logger = function(aName, aLogLevel, aLogAppenders) {
	this.name = aName;
	this.logLevel = aLogLevel;
	this.appenders = aLogAppenders || [];
};

Logger.prototype.isErrorEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ERROR);
};
Logger.prototype.isWarnEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].WARN);
};
Logger.prototype.isInfoEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].INFO);
};
Logger.prototype.isDebugEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DEBUG);
};
Logger.prototype.isTraceEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].TRACE);
};

Logger.prototype.logError = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ERROR);
};

Logger.prototype.logWarn = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].WARN);
};

Logger.prototype.logInfo = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].INFO);
};

Logger.prototype.logDebug = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DEBUG);
};

Logger.prototype.logTrace = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].TRACE);
};

Logger.prototype.log = function(aMessage, anException, aLogLevel) {
	if(!this.logLevel.isIncluded(aLogLevel))
		return Promise.resolve();
	
	if (!this.appenders.length === 0)
		return Promise.resolve();

	return new Promise((function(resolve){
		setTimeout((function(){
			let results = [];
			for (let i = 0; i < this.appenders.length; i++){
				let result = this.appenders[i].logMessage(aMessage, anException, this.name,new Date(), aLogLevel);
				if(result)
					results.push(result);
			}
			
			Promise.all(results).then(resolve);			
		}).bind(this), 100);
	}).bind(this));
};
/* harmony default export */ __webpack_exports__["a"] = (Logger);

/***/ }),

/***/ "./src/LoggerFactory.js":
/*!******************************!*\
  !*** ./src/LoggerFactory.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoggerRegistry */ "./src/LoggerRegistry.js");
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logger */ "./src/Logger.js");




let configs = undefined;
let appenders = {};
let loadLazyCounter = 0;

const getConfig = function() {
	if (!configs)
		updateConfigs();

	return configs;
};

const setConfig = function(aConfig) {
	if (aConfig) {
		configs = aConfig;
		updateLogger();
	}
};

const updateConfigs = function(aConfig) {
	if (configs)
		configs = {};

	let element = document.querySelector("[logging-properties]");
	if (element) {
		let config = element.attr("logging-properties");
		loadConfig(JSON.parse(config));
	} else 
		doLoadLazy();
};

const doLoadLazy = function() {
	if (loadLazyCounter < 10){
		loadLazyCounter++;
		setTimeout(loadConfig, 1);
	}
};

const loadConfig = function(aConfig) {
	if (aConfig)
		updateConfigs();
	else {
		if (aConfig.remote)
			loadConfigRemote(aConfig.remote);
		else if (aConfig.data) {
			setConfig(aConfig.data.configs);
		}
	}
};

const loadConfigRemote = function(aRemoteData) {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4)
			setConfig(JSON.parse(response));
	};
	xhttp.open("get", aRemoteData.url, false);
	return xhttp.send();
};

const updateLogger = function() {
	let loggers = _LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAllLogger();
	for ( let name in loggers) {
		var logger = loggers[name];

		let config = findConfig(name);
		let logLevel = _LogLevel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getLogLevel(config.logLevel);
		let appenders = getAppenders(config.appenders);

		logger.logLevel = logLevel;
		logger.logAppenders = appenders;
	}
};

const findConfig = function(aLoggerName) {
	let defaultConfig = {
		"filter" : "",
		"logLevel" : "NOLOG",
		"appenders" : []
	};
	let actualConfig = undefined;
	let configs = getConfig() || [];
	for (let i = 0; i < configs.length; i++) {
		let config = configs[i];
		if (isConfigActiv(aLoggerName, config, actualConfig))
			actualConfig = config;
		else if (config.filter == undefined || config.filter == "")
			defaultConfig = config;
		if (actualConfig != undefined && actualConfig.filter == aLoggerName)
			return actualConfig;
	}

	return actualConfig || defaultConfig;
};

const isConfigActiv = function(aLoggerName, aConfig, anActualConfig) {
	if (anActualConfig && anActualConfig.filter.length >= aConfig.filter.filter)
		return false;
	return aLoggerName.search(aConfig.filter) == 0;
};

const getAppenders = function(theAppenders) {
	let result = new Array();
	for (let i = 0; i < theAppenders.length; i++) {
		let appenderString = theAppenders[i];
		let appender = appenders[appenderString];
		if (!appender) {
			appender = (new Function("return " + appenderString +";")).call()
			if (appender) {
				appenders[appenderString] = appender;
			}
		}
		if (appender)
			result.push(appender);
	}

	return result;
};

const LoggerFactory = {
	newLogger : function(aLoggerName) {
		let logger = _LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getLogger(aLoggerName);
		if (!logger) {
			let config = findConfig(aLoggerName);
			let logLevel = _LogLevel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getLogLevel(config.logLevel);
			let appenders = getAppenders(config.appenders);
	
			logger = new _Logger__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](aLoggerName, logLevel, appenders);
			_LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].addLogger(logger);
		}
	
		return logger;
	},
	getConfig : getConfig,	
	setConfig : setConfig
};

/* harmony default export */ __webpack_exports__["a"] = (LoggerFactory);

/***/ }),

/***/ "./src/LoggerRegistry.js":
/*!*******************************!*\
  !*** ./src/LoggerRegistry.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.js");


const LOGGER = {};
const LoggerRegistry = {
	addLogger : function(aLogger){
		if(!aLogger instanceof _Logger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])
			return;
		
		if(typeof LOGGER[aLogger.name] === "undefined")
			LOGGER[aLogger.name] = aLogger;
	},
	getLogger : function(aName){
		if(typeof aName !== "string")
			return;
		
		return LOGGER[aName];
	},	
	getAllLogger : function(){
		return LOGGER;
	},
	getInstance : function(){
		return LoggerRegistry;
	}
};	
/* harmony default export */ __webpack_exports__["a"] = (LoggerRegistry);

/***/ }),

/***/ "./src/MemoryAppender.js":
/*!*******************************!*\
  !*** ./src/MemoryAppender.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MemoryAppender = {
	logMessage : function(aMessage, anException,aLoggerName, aDate, aLogLevel) {
		let global = window || global || {};
		global.__LOG__ = global.__LOG__ || [];
		
		global.__LOG__.push({
			"date" : aDate,
			"logLevel" : aLogLevel,
			"loggerName" : aLoggerName,
			"message" : aMessage,
			"exception" : anException
		});
	}
}; 
/* harmony default export */ __webpack_exports__["a"] = (MemoryAppender);


/***/ }),

/***/ "./src/utils/DateUtils.js":
/*!********************************!*\
  !*** ./src/utils/DateUtils.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DateUtils = {
		dateAsString : function(aDate){
			if(!aDate instanceof Date)
				return "";
			
			let result = "";
			
			result += aDate.getFullYear() + ".";
			if(aDate.getMonth() < 10) 
				result += "0" + aDate.getMonth();
			else 
				result += aDate.getMonth();
			result += ".";
			if(aDate.getDate() < 10) 
				result += "0" + aDate.getDate();
			else 
				result += aDate.getDate();		
			result +=  " ";
			if(aDate.getHours() < 10) 
				result += "0" + aDate.getHours();
			else 
				result += aDate.getHours();
			result += ":";
			if(aDate.getMinutes() < 10) 
				result += "0" + aDate.getMinutes();
			else 
				result += aDate.getMinutes();
			result += ":";
			if(aDate.getSeconds() < 10) 
				result += "0" + aDate.getSeconds();
			else 
				result += aDate.getSeconds();
			result += ":";
			if(aDate.getMilliseconds() < 10) 
				result += "00" + aDate.getMilliseconds();
			if(aDate.getMilliseconds() < 100) 
				result += "0" + aDate.getMilliseconds();
			else 
				result += aDate.getMilliseconds();
			
			return result;
		}
};
/* harmony default export */ __webpack_exports__["a"] = (DateUtils);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateUtils */ "./src/utils/DateUtils.js");

const utils = {
		DateUtils : _DateUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db25zb2xlQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0h0bWxBcHBlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nTGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nZ2VyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nZ2VyUmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbW9yeUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9EYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBC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QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRTtBQUNlLHVFQUFjLEU7Ozs7Ozs7Ozs7Ozs7QUN4QjdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEU7QUFDZSx1RUFBYyxFQUFDOzs7Ozs7Ozs7Ozs7OztBQ2Q5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlLGtFQUFTLEU7Ozs7Ozs7Ozs7Ozs7QUMzQ3hCO0FBQW9DO0FBQ3BDO0FBQ0EsY0FBYywwREFBUztBQUN2QjtBQUNlLDhEQUFLLEUiLCJmaWxlIjoiZGUudGl0dXMubG9nZ2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYnJvd3Nlci1pbmRleC5qc1wiKTtcbiIsImltcG9ydCB1dGlscyBmcm9tIFwiLi9zcmMvdXRpbHNcIjtcclxuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tIFwiLi9zcmMvQ29uc29sZUFwcGVuZGVyXCI7XHJcbmltcG9ydCBIdG1sQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0h0bWxBcHBlbmRlclwiO1xyXG5pbXBvcnQgSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlciBmcm9tIFwiLi9zcmMvSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlclwiO1xyXG5pbXBvcnQgTWVtb3J5QXBwZW5kZXIgZnJvbSBcIi4vc3JjL01lbW9yeUFwcGVuZGVyXCI7XHJcbmltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9zcmMvTG9nTGV2ZWxcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9zcmMvTG9nZ2VyXCI7XHJcbmltcG9ydCBMb2dnZXJGYWN0b3J5IGZyb20gXCIuL3NyYy9Mb2dnZXJGYWN0b3J5XCI7XHJcbmltcG9ydCBMb2dnZXJSZWdpc3RyeSBmcm9tIFwiLi9zcmMvTG9nZ2VyUmVnaXN0cnlcIjtcclxuXHJcblxyXG4oZnVuY3Rpb24oZ2xvYmFsKXtcclxuXHRnbG9iYWwuZGUgPSBnbG9iYWwuZGUgfHwge307XHJcblx0Z2xvYmFsLmRlLnRpdHVzID0gZ2xvYmFsLmRlLnRpdHVzIHx8IHt9O1xyXG5cdGdsb2JhbC5kZS50aXR1cy5sb2dnaW5nID0gZ2xvYmFsLmRlLnRpdHVzLmxvZ2dpbmcgfHwge1xyXG5cdFx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdFx0dXRpbHMgOiB1dGlscyxcclxuXHRcdENvbnNvbGVBcHBlbmRlciA6IENvbnNvbGVBcHBlbmRlcixcclxuXHRcdENvbnNvbGVuQXBwZW5kZXIgOiBDb25zb2xlQXBwZW5kZXIsXHJcblx0XHRIdG1sQXBwZW5kZXIgOiBIdG1sQXBwZW5kZXIsXHJcblx0XHRNZW1vcnlBcHBlbmRlciA6IE1lbW9yeUFwcGVuZGVyLFxyXG5cdFx0SW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlciA6IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIsXHJcblx0XHRMb2dMZXZlbCA6IExvZ0xldmVsLFxyXG5cdFx0TG9nZ2VyIDogTG9nZ2VyLFxyXG5cdFx0TG9nZ2VyRmFjdG9yeSA6IExvZ2dlckZhY3RvcnksXHJcblx0XHRMb2dnZXJSZWdpc3RyeSA6IExvZ2dlclJlZ2lzdHJ5XHJcblx0fTtcdFxyXG59KSh3aW5kb3cgfHwgZ2xvYmFsIHx8IHt9KTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSBcIi4vdXRpbHMvRGF0ZVV0aWxzXCI7XG5cbmNvbnN0IENvbnNvbGVBcHBlbmRlciA9IHtcblx0bG9nTWVzc2FnZSA6IGZ1bmN0aW9uKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRpZiAoTG9nTGV2ZWwuTk9MT0cgPT0gYUxvZ0xldmVsKVxuXHRcdFx0cmV0dXJuO1xuXHRcdGxldCBsb2cgPSBbXTtcblx0XHRpZiAoYURhdGUpXG5cdFx0XHRsb2cucHVzaChEYXRlVXRpbHMuZGF0ZUFzU3RyaW5nKGFEYXRlKSwgXCIgXCIpO1xuXHRcdFxuXHRcdGxvZy5wdXNoKFwiKioqXCIsIGFMb2dMZXZlbC50aXRsZSwgXCIqKiogXCIsIGFMb2dnZXJOYW1lKTtcblx0XHRcblx0XHRpZiAoYU1lc3NhZ2UpIHtcblx0XHRcdGxvZy5wdXNoKFwiIC0+IFwiKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGFNZXNzYWdlKSlcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobG9nLCBhTWVzc2FnZSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGxvZy5wdXNoKGFNZXNzYWdlKTtcblx0XHR9XG5cdFx0aWYgKGFuRXhjZXB0aW9uKVxuXHRcdFx0bG9nLnB1c2goXCI6IFwiLCBhbkV4Y2VwdGlvbik7XG5cdFx0XG5cdFx0bGV0IGFwcGVuZGVyID0gY29uc29sZS5sb2c7XHRcdFxuXHRcdGlmIChMb2dMZXZlbC5FUlJPUiA9PSBhTG9nTGV2ZWwpIFxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmVycm9yOyBcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5XQVJOID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS53YXJuO1xuXHRcdGVsc2UgaWYgKExvZ0xldmVsLklORk8gPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmluZm87XG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuREVCVUcgPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmRlYnVnO1xuXHRcdGVsc2UgaWYgKExvZ0xldmVsLlRSQUNFID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS50cmFjZTtcblx0XHRcblx0XHRhcHBlbmRlci5hcHBseShjb25zb2xlLCBsb2cpO1x0XG5cdH1cbn07XG5leHBvcnQgZGVmYXVsdCBDb25zb2xlQXBwZW5kZXI7IiwiaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi91dGlscy9EYXRlVXRpbHNcIjtcblxuY29uc3QgQ09OVEFJTkVSID0gXCJbZGF0YS1sb2ddXCI7XHRcdFxuY29uc3QgSHRtbEFwcGVuZGVyID0ge1xuXHRpc0F2YWlsYWJsZSA6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05UQUlORVIpIDtcblx0fSxcblx0bG9nTWVzc2FnZSA6IGZ1bmN0aW9uKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05UQUlORVIpO1xuXHRcdGlmICghY29udGFpbmVyKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2ctZW50cnkgXCIgKyBhTG9nTGV2ZWwudGl0bGUpO1xuXHRcdGxldCBtZXNzYWdlID0gIERhdGVVdGlscy5kYXRlQXNTdHJpbmcoYURhdGUgfHwgbmV3IERhdGUoKSkgKyBcIiAqKipcIiArIGFMb2dMZXZlbC50aXRsZSArIFwiKioqIFwiICsgYUxvZ2dlck5hbWUgKyBcIlwiO1xuXHRcdFxuXHRcdGlmIChhTWVzc2FnZSlcblx0XHRcdG1lc3NhZ2UgKz0gXCIgLT4gXCIgKyBhTWVzc2FnZTtcblx0XHRpZiAoYW5FeGNlcHRpb24pXG5cdFx0XHRtZXNzYWdlICs9IFwiOiBcIiArIGFuRXhjZXB0aW9uO1xuXHRcdFxuXHRcdGVudHJ5LnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRyZXR1cm4gY29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJ5KTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSHRtbEFwcGVuZGVyOyIsImltcG9ydCBIdG1sQXBwZW5kZXIgZnJvbSBcIi4vSHRtbEFwcGVuZGVyXCI7XG5pbXBvcnQgQ29uc29sZUFwcGVuZGVyIGZyb20gXCIuL0NvbnNvbGVBcHBlbmRlclwiO1xuaW1wb3J0IE1lbW9yeUFwcGVuZGVyIGZyb20gXCIuL01lbW9yeUFwcGVuZGVyXCI7XG5cbmxldCBhcHBlbmRlcjtcbmNvbnN0IGdldEFwcGVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmFwcGVuZGVyKSB7XHRcdFxuXHRcdGlmIChjb25zb2xlKVxuXHRcdFx0dGhpcy5hcHBlbmRlciA9IENvbnNvbGVuQXBwZW5kZXI7XG5cdFx0ZWxzZSBpZiAoSHRtbEFwcGVuZGVyLmlzQXZhaWxhYmxlKCkpXG5cdFx0XHR0aGlzLmFwcGVuZGVyID0gSHRtbEFwcGVuZGVyO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYXBwZW5kZXIgPSBNZW1vcnlBcHBlbmRlcjtcblx0fVxuXHRcblx0cmV0dXJuIHRoaXMuYXBwZW5kZXI7XG59O1xuY29uc3QgSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlciA9IHtcblx0bG9nTWVzc2FnZSA6IGZ1bmN0aW9uKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRnZXRBcHBlbmRlcigpLmxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXI7XG4iLCJjb25zdCBMb2dMZXZlbCA9IGZ1bmN0aW9uKGFPcmRlciwgYVRpdGxlKSB7XHJcblx0dGhpcy5vcmRlciA9IGFPcmRlcjtcclxuXHR0aGlzLnRpdGxlID0gYVRpdGxlO1xyXG59O1xyXG5cclxuTG9nTGV2ZWwucHJvdG90eXBlLmlzSW5jbHVkZWQgPSBmdW5jdGlvbihhTG9nTGV2ZWwpIHtcclxuXHRyZXR1cm4gdGhpcy5vcmRlciA+PSBhTG9nTGV2ZWwub3JkZXI7XHJcbn07XHJcblxyXG5Mb2dMZXZlbC5nZXRMb2dMZXZlbCA9IGZ1bmN0aW9uKGFMb2dMZXZlbE5hbWUpIHtcclxuXHRpZiAoYUxvZ0xldmVsTmFtZSA9PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm4gTG9nTGV2ZWwuTk9MT0c7XHJcblxyXG5cdHZhciBsZXZlbE5hbWUgPSBhTG9nTGV2ZWxOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblx0cmV0dXJuIExvZ0xldmVsW2xldmVsTmFtZV07XHJcbn07XHJcblxyXG5Mb2dMZXZlbC5OT0xPRyA9IG5ldyBMb2dMZXZlbCgwLCBcIk5PTE9HXCIpO1xyXG5Mb2dMZXZlbC5FUlJPUiA9IG5ldyBMb2dMZXZlbCgxLCBcIkVSUk9SXCIpO1xyXG5Mb2dMZXZlbC5XQVJOID0gbmV3IExvZ0xldmVsKDIsIFwiV0FSTlwiKTtcclxuTG9nTGV2ZWwuSU5GTyA9IG5ldyBMb2dMZXZlbCgzLCBcIklORk9cIik7XHJcbkxvZ0xldmVsLkRFQlVHID0gbmV3IExvZ0xldmVsKDQsIFwiREVCVUdcIik7XHJcbkxvZ0xldmVsLlRSQUNFID0gbmV3IExvZ0xldmVsKDUsIFwiVFJBQ0VcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dMZXZlbDsiLCJpbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcblxuY29uc3QgTG9nZ2VyID0gZnVuY3Rpb24oYU5hbWUsIGFMb2dMZXZlbCwgYUxvZ0FwcGVuZGVycykge1xuXHR0aGlzLm5hbWUgPSBhTmFtZTtcblx0dGhpcy5sb2dMZXZlbCA9IGFMb2dMZXZlbDtcblx0dGhpcy5hcHBlbmRlcnMgPSBhTG9nQXBwZW5kZXJzIHx8IFtdO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5pc0Vycm9yRW5hYmxlZCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5sb2dMZXZlbC5pc0luY2x1ZGVkKExvZ0xldmVsLkVSUk9SKTtcbn07XG5Mb2dnZXIucHJvdG90eXBlLmlzV2FybkVuYWJsZWQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubG9nTGV2ZWwuaXNJbmNsdWRlZChMb2dMZXZlbC5XQVJOKTtcbn07XG5Mb2dnZXIucHJvdG90eXBlLmlzSW5mb0VuYWJsZWQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubG9nTGV2ZWwuaXNJbmNsdWRlZChMb2dMZXZlbC5JTkZPKTtcbn07XG5Mb2dnZXIucHJvdG90eXBlLmlzRGVidWdFbmFibGVkID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmxvZ0xldmVsLmlzSW5jbHVkZWQoTG9nTGV2ZWwuREVCVUcpO1xufTtcbkxvZ2dlci5wcm90b3R5cGUuaXNUcmFjZUVuYWJsZWQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubG9nTGV2ZWwuaXNJbmNsdWRlZChMb2dMZXZlbC5UUkFDRSk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLmxvZ0Vycm9yID0gZnVuY3Rpb24oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0cmV0dXJuIHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5FUlJPUik7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLmxvZ1dhcm4gPSBmdW5jdGlvbihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRyZXR1cm4gdGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLldBUk4pO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5sb2dJbmZvID0gZnVuY3Rpb24oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0cmV0dXJuIHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5JTkZPKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nRGVidWcgPSBmdW5jdGlvbihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRyZXR1cm4gdGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLkRFQlVHKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nVHJhY2UgPSBmdW5jdGlvbihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRyZXR1cm4gdGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLlRSQUNFKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24oYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nTGV2ZWwpIHtcblx0aWYoIXRoaXMubG9nTGV2ZWwuaXNJbmNsdWRlZChhTG9nTGV2ZWwpKVxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XG5cdGlmICghdGhpcy5hcHBlbmRlcnMubGVuZ3RoID09PSAwKVxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHJlc29sdmUpe1xuXHRcdHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgcmVzdWx0cyA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFwcGVuZGVycy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGxldCByZXN1bHQgPSB0aGlzLmFwcGVuZGVyc1tpXS5sb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgdGhpcy5uYW1lLG5ldyBEYXRlKCksIGFMb2dMZXZlbCk7XG5cdFx0XHRcdGlmKHJlc3VsdClcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0UHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihyZXNvbHZlKTtcdFx0XHRcblx0XHR9KS5iaW5kKHRoaXMpLCAxMDApO1xuXHR9KS5iaW5kKHRoaXMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7IiwiaW1wb3J0IExvZ2dlclJlZ2lzdHJ5IGZyb20gXCIuL0xvZ2dlclJlZ2lzdHJ5XCI7XG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5cbmxldCBjb25maWdzID0gdW5kZWZpbmVkO1xubGV0IGFwcGVuZGVycyA9IHt9O1xubGV0IGxvYWRMYXp5Q291bnRlciA9IDA7XG5cbmNvbnN0IGdldENvbmZpZyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIWNvbmZpZ3MpXG5cdFx0dXBkYXRlQ29uZmlncygpO1xuXG5cdHJldHVybiBjb25maWdzO1xufTtcblxuY29uc3Qgc2V0Q29uZmlnID0gZnVuY3Rpb24oYUNvbmZpZykge1xuXHRpZiAoYUNvbmZpZykge1xuXHRcdGNvbmZpZ3MgPSBhQ29uZmlnO1xuXHRcdHVwZGF0ZUxvZ2dlcigpO1xuXHR9XG59O1xuXG5jb25zdCB1cGRhdGVDb25maWdzID0gZnVuY3Rpb24oYUNvbmZpZykge1xuXHRpZiAoY29uZmlncylcblx0XHRjb25maWdzID0ge307XG5cblx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2xvZ2dpbmctcHJvcGVydGllc11cIik7XG5cdGlmIChlbGVtZW50KSB7XG5cdFx0bGV0IGNvbmZpZyA9IGVsZW1lbnQuYXR0cihcImxvZ2dpbmctcHJvcGVydGllc1wiKTtcblx0XHRsb2FkQ29uZmlnKEpTT04ucGFyc2UoY29uZmlnKSk7XG5cdH0gZWxzZSBcblx0XHRkb0xvYWRMYXp5KCk7XG59O1xuXG5jb25zdCBkb0xvYWRMYXp5ID0gZnVuY3Rpb24oKSB7XG5cdGlmIChsb2FkTGF6eUNvdW50ZXIgPCAxMCl7XG5cdFx0bG9hZExhenlDb3VudGVyKys7XG5cdFx0c2V0VGltZW91dChsb2FkQ29uZmlnLCAxKTtcblx0fVxufTtcblxuY29uc3QgbG9hZENvbmZpZyA9IGZ1bmN0aW9uKGFDb25maWcpIHtcblx0aWYgKGFDb25maWcpXG5cdFx0dXBkYXRlQ29uZmlncygpO1xuXHRlbHNlIHtcblx0XHRpZiAoYUNvbmZpZy5yZW1vdGUpXG5cdFx0XHRsb2FkQ29uZmlnUmVtb3RlKGFDb25maWcucmVtb3RlKTtcblx0XHRlbHNlIGlmIChhQ29uZmlnLmRhdGEpIHtcblx0XHRcdHNldENvbmZpZyhhQ29uZmlnLmRhdGEuY29uZmlncyk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBsb2FkQ29uZmlnUmVtb3RlID0gZnVuY3Rpb24oYVJlbW90ZURhdGEpIHtcblx0bGV0IHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh4aHR0cC5yZWFkeVN0YXRlID09IDQpXG5cdFx0XHRzZXRDb25maWcoSlNPTi5wYXJzZShyZXNwb25zZSkpO1xuXHR9O1xuXHR4aHR0cC5vcGVuKFwiZ2V0XCIsIGFSZW1vdGVEYXRhLnVybCwgZmFsc2UpO1xuXHRyZXR1cm4geGh0dHAuc2VuZCgpO1xufTtcblxuY29uc3QgdXBkYXRlTG9nZ2VyID0gZnVuY3Rpb24oKSB7XG5cdGxldCBsb2dnZXJzID0gTG9nZ2VyUmVnaXN0cnkuZ2V0QWxsTG9nZ2VyKCk7XG5cdGZvciAoIGxldCBuYW1lIGluIGxvZ2dlcnMpIHtcblx0XHR2YXIgbG9nZ2VyID0gbG9nZ2Vyc1tuYW1lXTtcblxuXHRcdGxldCBjb25maWcgPSBmaW5kQ29uZmlnKG5hbWUpO1xuXHRcdGxldCBsb2dMZXZlbCA9IExvZ0xldmVsLmdldExvZ0xldmVsKGNvbmZpZy5sb2dMZXZlbCk7XG5cdFx0bGV0IGFwcGVuZGVycyA9IGdldEFwcGVuZGVycyhjb25maWcuYXBwZW5kZXJzKTtcblxuXHRcdGxvZ2dlci5sb2dMZXZlbCA9IGxvZ0xldmVsO1xuXHRcdGxvZ2dlci5sb2dBcHBlbmRlcnMgPSBhcHBlbmRlcnM7XG5cdH1cbn07XG5cbmNvbnN0IGZpbmRDb25maWcgPSBmdW5jdGlvbihhTG9nZ2VyTmFtZSkge1xuXHRsZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0XHRcImZpbHRlclwiIDogXCJcIixcblx0XHRcImxvZ0xldmVsXCIgOiBcIk5PTE9HXCIsXG5cdFx0XCJhcHBlbmRlcnNcIiA6IFtdXG5cdH07XG5cdGxldCBhY3R1YWxDb25maWcgPSB1bmRlZmluZWQ7XG5cdGxldCBjb25maWdzID0gZ2V0Q29uZmlnKCkgfHwgW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlncy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBjb25maWcgPSBjb25maWdzW2ldO1xuXHRcdGlmIChpc0NvbmZpZ0FjdGl2KGFMb2dnZXJOYW1lLCBjb25maWcsIGFjdHVhbENvbmZpZykpXG5cdFx0XHRhY3R1YWxDb25maWcgPSBjb25maWc7XG5cdFx0ZWxzZSBpZiAoY29uZmlnLmZpbHRlciA9PSB1bmRlZmluZWQgfHwgY29uZmlnLmZpbHRlciA9PSBcIlwiKVxuXHRcdFx0ZGVmYXVsdENvbmZpZyA9IGNvbmZpZztcblx0XHRpZiAoYWN0dWFsQ29uZmlnICE9IHVuZGVmaW5lZCAmJiBhY3R1YWxDb25maWcuZmlsdGVyID09IGFMb2dnZXJOYW1lKVxuXHRcdFx0cmV0dXJuIGFjdHVhbENvbmZpZztcblx0fVxuXG5cdHJldHVybiBhY3R1YWxDb25maWcgfHwgZGVmYXVsdENvbmZpZztcbn07XG5cbmNvbnN0IGlzQ29uZmlnQWN0aXYgPSBmdW5jdGlvbihhTG9nZ2VyTmFtZSwgYUNvbmZpZywgYW5BY3R1YWxDb25maWcpIHtcblx0aWYgKGFuQWN0dWFsQ29uZmlnICYmIGFuQWN0dWFsQ29uZmlnLmZpbHRlci5sZW5ndGggPj0gYUNvbmZpZy5maWx0ZXIuZmlsdGVyKVxuXHRcdHJldHVybiBmYWxzZTtcblx0cmV0dXJuIGFMb2dnZXJOYW1lLnNlYXJjaChhQ29uZmlnLmZpbHRlcikgPT0gMDtcbn07XG5cbmNvbnN0IGdldEFwcGVuZGVycyA9IGZ1bmN0aW9uKHRoZUFwcGVuZGVycykge1xuXHRsZXQgcmVzdWx0ID0gbmV3IEFycmF5KCk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGhlQXBwZW5kZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGFwcGVuZGVyU3RyaW5nID0gdGhlQXBwZW5kZXJzW2ldO1xuXHRcdGxldCBhcHBlbmRlciA9IGFwcGVuZGVyc1thcHBlbmRlclN0cmluZ107XG5cdFx0aWYgKCFhcHBlbmRlcikge1xuXHRcdFx0YXBwZW5kZXIgPSAobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiICsgYXBwZW5kZXJTdHJpbmcgK1wiO1wiKSkuY2FsbCgpXG5cdFx0XHRpZiAoYXBwZW5kZXIpIHtcblx0XHRcdFx0YXBwZW5kZXJzW2FwcGVuZGVyU3RyaW5nXSA9IGFwcGVuZGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoYXBwZW5kZXIpXG5cdFx0XHRyZXN1bHQucHVzaChhcHBlbmRlcik7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgTG9nZ2VyRmFjdG9yeSA9IHtcblx0bmV3TG9nZ2VyIDogZnVuY3Rpb24oYUxvZ2dlck5hbWUpIHtcblx0XHRsZXQgbG9nZ2VyID0gTG9nZ2VyUmVnaXN0cnkuZ2V0TG9nZ2VyKGFMb2dnZXJOYW1lKTtcblx0XHRpZiAoIWxvZ2dlcikge1xuXHRcdFx0bGV0IGNvbmZpZyA9IGZpbmRDb25maWcoYUxvZ2dlck5hbWUpO1xuXHRcdFx0bGV0IGxvZ0xldmVsID0gTG9nTGV2ZWwuZ2V0TG9nTGV2ZWwoY29uZmlnLmxvZ0xldmVsKTtcblx0XHRcdGxldCBhcHBlbmRlcnMgPSBnZXRBcHBlbmRlcnMoY29uZmlnLmFwcGVuZGVycyk7XG5cdFxuXHRcdFx0bG9nZ2VyID0gbmV3IExvZ2dlcihhTG9nZ2VyTmFtZSwgbG9nTGV2ZWwsIGFwcGVuZGVycyk7XG5cdFx0XHRMb2dnZXJSZWdpc3RyeS5hZGRMb2dnZXIobG9nZ2VyKTtcblx0XHR9XG5cdFxuXHRcdHJldHVybiBsb2dnZXI7XG5cdH0sXG5cdGdldENvbmZpZyA6IGdldENvbmZpZyxcdFxuXHRzZXRDb25maWcgOiBzZXRDb25maWdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlckZhY3Rvcnk7IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcblxuY29uc3QgTE9HR0VSID0ge307XG5jb25zdCBMb2dnZXJSZWdpc3RyeSA9IHtcblx0YWRkTG9nZ2VyIDogZnVuY3Rpb24oYUxvZ2dlcil7XG5cdFx0aWYoIWFMb2dnZXIgaW5zdGFuY2VvZiBMb2dnZXIpXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0aWYodHlwZW9mIExPR0dFUlthTG9nZ2VyLm5hbWVdID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0TE9HR0VSW2FMb2dnZXIubmFtZV0gPSBhTG9nZ2VyO1xuXHR9LFxuXHRnZXRMb2dnZXIgOiBmdW5jdGlvbihhTmFtZSl7XG5cdFx0aWYodHlwZW9mIGFOYW1lICE9PSBcInN0cmluZ1wiKVxuXHRcdFx0cmV0dXJuO1xuXHRcdFxuXHRcdHJldHVybiBMT0dHRVJbYU5hbWVdO1xuXHR9LFx0XG5cdGdldEFsbExvZ2dlciA6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIExPR0dFUjtcblx0fSxcblx0Z2V0SW5zdGFuY2UgOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiBMb2dnZXJSZWdpc3RyeTtcblx0fVxufTtcdFxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyUmVnaXN0cnk7IiwiY29uc3QgTWVtb3J5QXBwZW5kZXIgPSB7XG5cdGxvZ01lc3NhZ2UgOiBmdW5jdGlvbihhTWVzc2FnZSwgYW5FeGNlcHRpb24sYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRsZXQgZ2xvYmFsID0gd2luZG93IHx8IGdsb2JhbCB8fCB7fTtcblx0XHRnbG9iYWwuX19MT0dfXyA9IGdsb2JhbC5fX0xPR19fIHx8IFtdO1xuXHRcdFxuXHRcdGdsb2JhbC5fX0xPR19fLnB1c2goe1xuXHRcdFx0XCJkYXRlXCIgOiBhRGF0ZSxcblx0XHRcdFwibG9nTGV2ZWxcIiA6IGFMb2dMZXZlbCxcblx0XHRcdFwibG9nZ2VyTmFtZVwiIDogYUxvZ2dlck5hbWUsXG5cdFx0XHRcIm1lc3NhZ2VcIiA6IGFNZXNzYWdlLFxuXHRcdFx0XCJleGNlcHRpb25cIiA6IGFuRXhjZXB0aW9uXG5cdFx0fSk7XG5cdH1cbn07IFxuZXhwb3J0IGRlZmF1bHQgTWVtb3J5QXBwZW5kZXI7XG4iLCJjb25zdCBEYXRlVXRpbHMgPSB7XHJcblx0XHRkYXRlQXNTdHJpbmcgOiBmdW5jdGlvbihhRGF0ZSl7XHJcblx0XHRcdGlmKCFhRGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcblx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRGdWxsWWVhcigpICsgXCIuXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1vbnRoKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiLlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXREYXRlKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXREYXRlKCk7XHRcdFxyXG5cdFx0XHRyZXN1bHQgKz0gIFwiIFwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRIb3VycygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldEhvdXJzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldEhvdXJzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWludXRlcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldFNlY29uZHMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldFNlY29uZHMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwMFwiICsgYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbGxpc2Vjb25kcygpIDwgMTAwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEYXRlVXRpbHM7IiwiaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi9EYXRlVXRpbHNcIjtcclxuY29uc3QgdXRpbHMgPSB7XHJcblx0XHREYXRlVXRpbHMgOiBEYXRlVXRpbHNcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==