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
	global.de = de || {};
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
		setTimeout(function(){
			if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].NOLOG == aLogLevel)
				return;
			let log = [];
			if (aDate)
				log.push(_utils_DateUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].formatedDateString(aDate), " ");
			
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
		}, 1);
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
		setTimeout(function(){
			let container = document.querySelector(CONTAINER);
			if (container)
				return;
			
			let entry = document.createElement("div");
			entry.setAttribute("class", "log-entry " + aLogLevel.title);
			let message = "";
			if (aDate)
				logEntry += logEntry = _utils_DateUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].formatedDateString(aDate) + " ";
			
			message += "***" + aLogLevel.title + "*** " + aLoggerName + "";
			
			if (aMessage)
				message += " -> " + aMessage;
			if (anException)
				message += ": " + anException;
			
			entry.textContent = message;
			container.appendChild(entry);
		}, 1);
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
		return de.titus.logging.LogLevel.NOLOG;

	var levelName = aLogLevelName.toUpperCase();
	return de.titus.logging.LogLevel[levelName];
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
const Logger = function(aName, aLogLevel, aLogAppenders) {
	this.name = aName;
	this.logLevel = aLogLevel;
	this.logAppenders = aLogAppenders;
};

Logger.prototype.isErrorEnabled = function() {
	return this.logLevel.isIncluded(de.titus.logging.LogLevel.ERROR);
};
Logger.prototype.isWarnEnabled = function() {
	return this.logLevel.isIncluded(de.titus.logging.LogLevel.WARN);
};
Logger.prototype.isInfoEnabled = function() {
	return this.logLevel.isIncluded(de.titus.logging.LogLevel.INFO);
};
Logger.prototype.isDebugEnabled = function() {
	return this.logLevel.isIncluded(de.titus.logging.LogLevel.DEBUG);
};
Logger.prototype.isTraceEnabled = function() {
	return this.logLevel.isIncluded(de.titus.logging.LogLevel.TRACE);
};

Logger.prototype.logError = function(aMessage, aException) {
	if (this.isErrorEnabled())
		this.log(aMessage, aException, de.titus.logging.LogLevel.ERROR);
};

Logger.prototype.logWarn = function(aMessage, aException) {
	if (this.isWarnEnabled())
		this.log(aMessage, aException, de.titus.logging.LogLevel.WARN);
};

Logger.prototype.logInfo = function(aMessage, aException) {
	if (this.isInfoEnabled())
		this.log(aMessage, aException, de.titus.logging.LogLevel.INFO);
};

Logger.prototype.logDebug = function(aMessage, aException) {
	if (this.isDebugEnabled())
		this.log(aMessage, aException, de.titus.logging.LogLevel.DEBUG);
};

Logger.prototype.logTrace = function(aMessage, aException) {
	if (this.isTraceEnabled())
		this.log(aMessage, aException, de.titus.logging.LogLevel.TRACE);
};

Logger.prototype.log = function(aMessage, anException, aLogLevel) {
	if (this.logAppenders)
		return;

	if (this.logAppenders.length > 0) {
		for (var i = 0; i < this.logAppenders.length; i++)
			this.logAppenders[i].logMessage(aMessage, anException, this.name,
					new Date(), aLogLevel);
	}
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
		this.updateConfigs();

	return this.configs;
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

	let element = document.selectorQuery("[logging-properties]");
	if (element) {
		let config = element.attr("logging-properties");
		loadConfig(JSON.parse(config));
	} else 
		doLoadLazy();
};

const doLoadLazy = function() {
	if (this.loadLazyCounter < 10){
		this.loadLazyCounter++;
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
			setConfig(JSON.parse(this.response));
	};
	xhttp.open("get", aRemoteData.url, false);
	return xhttp.send();
};

const updateLogger = function() {
	let loggers = _LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAllLogger();
	for ( let name in loggers) {
		var logger = loggers[name];

		let config = findConfig(loggerName);
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
	let configs = getConfig();
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
		let appender = this.appenders[appenderString];
		if (!appender) {
			appender = (new Function("return appenderString;")).call()
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
		var logger = _LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getLogger(aLoggerName);
		if (logger) {
			var config = findConfig(aLoggerName);
			var logLevel = _LogLevel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getLogLevel(config.logLevel);
			var appenders = getAppenders(config.appenders);
	
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
		
		return LOGGER[aLoggerName];
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
const global = window || global || {};
global.__LOG__ = [];
const MemoryAppender = {
	logMessage : function(aMessage, anException,aLoggerName, aDate, aLogLevel) {
		setTimeout(function(){
			global.__LOG__.push({
				"date" : aDate,
				"logLevel" : aLogLevel,
				"loggerName" : aLoggerName,
				"message" : aMessage,
				"exception" : anException
			});
		}, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db25zb2xlQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0h0bWxBcHBlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nTGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nZ2VyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nZ2VyUmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbW9yeUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9EYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7O0FBRWUsdUVBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUNoQjlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2Usa0VBQVMsRTs7Ozs7Ozs7Ozs7OztBQzNDeEI7QUFBb0M7QUFDcEM7QUFDQSxjQUFjLDBEQUFTO0FBQ3ZCO0FBQ2UsOERBQUssRSIsImZpbGUiOiJkZS50aXR1cy5sb2dnaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9icm93c2VyLWluZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gXCIuL3NyYy91dGlsc1wiO1xyXG5pbXBvcnQgQ29uc29sZUFwcGVuZGVyIGZyb20gXCIuL3NyYy9Db25zb2xlQXBwZW5kZXJcIjtcclxuaW1wb3J0IEh0bWxBcHBlbmRlciBmcm9tIFwiLi9zcmMvSHRtbEFwcGVuZGVyXCI7XHJcbmltcG9ydCBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyIGZyb20gXCIuL3NyYy9JbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyXCI7XHJcbmltcG9ydCBNZW1vcnlBcHBlbmRlciBmcm9tIFwiLi9zcmMvTWVtb3J5QXBwZW5kZXJcIjtcclxuaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL3NyYy9Mb2dMZXZlbFwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL3NyYy9Mb2dnZXJcIjtcclxuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSBcIi4vc3JjL0xvZ2dlckZhY3RvcnlcIjtcclxuaW1wb3J0IExvZ2dlclJlZ2lzdHJ5IGZyb20gXCIuL3NyYy9Mb2dnZXJSZWdpc3RyeVwiO1xyXG5cclxuXHJcbihmdW5jdGlvbihnbG9iYWwpe1xyXG5cdGdsb2JhbC5kZSA9IGRlIHx8IHt9O1xyXG5cdGdsb2JhbC5kZS50aXR1cyA9IGdsb2JhbC5kZS50aXR1cyB8fCB7fTtcclxuXHRnbG9iYWwuZGUudGl0dXMubG9nZ2luZyA9IGdsb2JhbC5kZS50aXR1cy5sb2dnaW5nIHx8IHtcclxuXHRcdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHRcdHV0aWxzIDogdXRpbHMsXHJcblx0XHRDb25zb2xlQXBwZW5kZXIgOiBDb25zb2xlQXBwZW5kZXIsXHJcblx0XHRDb25zb2xlbkFwcGVuZGVyIDogQ29uc29sZUFwcGVuZGVyLFxyXG5cdFx0SHRtbEFwcGVuZGVyIDogSHRtbEFwcGVuZGVyLFxyXG5cdFx0TWVtb3J5QXBwZW5kZXIgOiBNZW1vcnlBcHBlbmRlcixcclxuXHRcdEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgOiBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyLFxyXG5cdFx0TG9nTGV2ZWwgOiBMb2dMZXZlbCxcclxuXHRcdExvZ2dlciA6IExvZ2dlcixcclxuXHRcdExvZ2dlckZhY3RvcnkgOiBMb2dnZXJGYWN0b3J5LFxyXG5cdFx0TG9nZ2VyUmVnaXN0cnkgOiBMb2dnZXJSZWdpc3RyeVxyXG5cdH07XHJcblx0XHJcbn0pKHdpbmRvdyB8fCBnbG9iYWwgfHwge30pOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi91dGlscy9EYXRlVXRpbHNcIjtcblxuY29uc3QgQ29uc29sZUFwcGVuZGVyID0ge1xuXHRsb2dNZXNzYWdlIDogZnVuY3Rpb24oYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGlmIChMb2dMZXZlbC5OT0xPRyA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdGxldCBsb2cgPSBbXTtcblx0XHRcdGlmIChhRGF0ZSlcblx0XHRcdFx0bG9nLnB1c2goRGF0ZVV0aWxzLmZvcm1hdGVkRGF0ZVN0cmluZyhhRGF0ZSksIFwiIFwiKTtcblx0XHRcdFxuXHRcdFx0bG9nLnB1c2goXCIqKipcIiwgYUxvZ0xldmVsLnRpdGxlLCBcIioqKiBcIiwgYUxvZ2dlck5hbWUpO1xuXHRcdFx0XG5cdFx0XHRpZiAoYU1lc3NhZ2UpIHtcblx0XHRcdFx0bG9nLnB1c2goXCIgLT4gXCIpO1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhTWVzc2FnZSkpXG5cdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobG9nLCBhTWVzc2FnZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRsb2cucHVzaChhTWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYW5FeGNlcHRpb24pXG5cdFx0XHRcdGxvZy5wdXNoKFwiOiBcIiwgYW5FeGNlcHRpb24pO1xuXHRcdFx0XG5cdFx0XHRsZXQgYXBwZW5kZXIgPSBjb25zb2xlLmxvZztcdFx0XG5cdFx0XHRpZiAoTG9nTGV2ZWwuRVJST1IgPT0gYUxvZ0xldmVsKSBcblx0XHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmVycm9yOyBcblx0XHRcdGVsc2UgaWYgKExvZ0xldmVsLldBUk4gPT0gYUxvZ0xldmVsKVxuXHRcdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUud2Fybjtcblx0XHRcdGVsc2UgaWYgKExvZ0xldmVsLklORk8gPT0gYUxvZ0xldmVsKVxuXHRcdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuaW5mbztcblx0XHRcdGVsc2UgaWYgKExvZ0xldmVsLkRFQlVHID09IGFMb2dMZXZlbClcblx0XHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmRlYnVnO1xuXHRcdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuVFJBQ0UgPT0gYUxvZ0xldmVsKVxuXHRcdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUudHJhY2U7XG5cdFx0XHRcblx0XHRcdGFwcGVuZGVyLmFwcGx5KGNvbnNvbGUsIGxvZyk7XHRcdFxuXHRcdH0sIDEpO1xuXHR9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29uc29sZUFwcGVuZGVyOyIsImltcG9ydCBEYXRlVXRpbHMgZnJvbSBcIi4vdXRpbHMvRGF0ZVV0aWxzXCI7XG5cbmNvbnN0IENPTlRBSU5FUiA9IFwiW2RhdGEtbG9nXVwiO1x0XHRcbmNvbnN0IEh0bWxBcHBlbmRlciA9IHtcblx0aXNBdmFpbGFibGUgOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OVEFJTkVSKSA7XG5cdH0sXG5cdGxvZ01lc3NhZ2UgOiBmdW5jdGlvbihhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0bGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OVEFJTkVSKTtcblx0XHRcdGlmIChjb250YWluZXIpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdFxuXHRcdFx0bGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nLWVudHJ5IFwiICsgYUxvZ0xldmVsLnRpdGxlKTtcblx0XHRcdGxldCBtZXNzYWdlID0gXCJcIjtcblx0XHRcdGlmIChhRGF0ZSlcblx0XHRcdFx0bG9nRW50cnkgKz0gbG9nRW50cnkgPSBEYXRlVXRpbHMuZm9ybWF0ZWREYXRlU3RyaW5nKGFEYXRlKSArIFwiIFwiO1xuXHRcdFx0XG5cdFx0XHRtZXNzYWdlICs9IFwiKioqXCIgKyBhTG9nTGV2ZWwudGl0bGUgKyBcIioqKiBcIiArIGFMb2dnZXJOYW1lICsgXCJcIjtcblx0XHRcdFxuXHRcdFx0aWYgKGFNZXNzYWdlKVxuXHRcdFx0XHRtZXNzYWdlICs9IFwiIC0+IFwiICsgYU1lc3NhZ2U7XG5cdFx0XHRpZiAoYW5FeGNlcHRpb24pXG5cdFx0XHRcdG1lc3NhZ2UgKz0gXCI6IFwiICsgYW5FeGNlcHRpb247XG5cdFx0XHRcblx0XHRcdGVudHJ5LnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG5cdFx0fSwgMSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEh0bWxBcHBlbmRlcjsiLCJpbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL0h0bWxBcHBlbmRlclwiO1xuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tIFwiLi9Db25zb2xlQXBwZW5kZXJcIjtcbmltcG9ydCBNZW1vcnlBcHBlbmRlciBmcm9tIFwiLi9NZW1vcnlBcHBlbmRlclwiO1xuXG5sZXQgYXBwZW5kZXI7XG5jb25zdCBnZXRBcHBlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5hcHBlbmRlcikge1x0XHRcblx0XHRpZiAoY29uc29sZSlcblx0XHRcdHRoaXMuYXBwZW5kZXIgPSBDb25zb2xlbkFwcGVuZGVyO1xuXHRcdGVsc2UgaWYgKEh0bWxBcHBlbmRlci5pc0F2YWlsYWJsZSgpKVxuXHRcdFx0dGhpcy5hcHBlbmRlciA9IEh0bWxBcHBlbmRlcjtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmFwcGVuZGVyID0gTWVtb3J5QXBwZW5kZXI7XG5cdH1cblx0XG5cdHJldHVybiB0aGlzLmFwcGVuZGVyO1xufTtcbmNvbnN0IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgPSB7XG5cdGxvZ01lc3NhZ2UgOiBmdW5jdGlvbihhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0Z2V0QXBwZW5kZXIoKS5sb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyO1xuIiwiY29uc3QgTG9nTGV2ZWwgPSBmdW5jdGlvbihhT3JkZXIsIGFUaXRsZSkge1xyXG5cdHRoaXMub3JkZXIgPSBhT3JkZXI7XHJcblx0dGhpcy50aXRsZSA9IGFUaXRsZTtcclxufTtcclxuXHJcbkxvZ0xldmVsLnByb3RvdHlwZS5pc0luY2x1ZGVkID0gZnVuY3Rpb24oYUxvZ0xldmVsKSB7XHJcblx0cmV0dXJuIHRoaXMub3JkZXIgPj0gYUxvZ0xldmVsLm9yZGVyO1xyXG59O1xyXG5cclxuTG9nTGV2ZWwuZ2V0TG9nTGV2ZWwgPSBmdW5jdGlvbihhTG9nTGV2ZWxOYW1lKSB7XHJcblx0aWYgKGFMb2dMZXZlbE5hbWUgPT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuIGRlLnRpdHVzLmxvZ2dpbmcuTG9nTGV2ZWwuTk9MT0c7XHJcblxyXG5cdHZhciBsZXZlbE5hbWUgPSBhTG9nTGV2ZWxOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblx0cmV0dXJuIGRlLnRpdHVzLmxvZ2dpbmcuTG9nTGV2ZWxbbGV2ZWxOYW1lXTtcclxufTtcclxuXHJcbkxvZ0xldmVsLk5PTE9HID0gbmV3IExvZ0xldmVsKDAsIFwiTk9MT0dcIik7XHJcbkxvZ0xldmVsLkVSUk9SID0gbmV3IExvZ0xldmVsKDEsIFwiRVJST1JcIik7XHJcbkxvZ0xldmVsLldBUk4gPSBuZXcgTG9nTGV2ZWwoMiwgXCJXQVJOXCIpO1xyXG5Mb2dMZXZlbC5JTkZPID0gbmV3IExvZ0xldmVsKDMsIFwiSU5GT1wiKTtcclxuTG9nTGV2ZWwuREVCVUcgPSBuZXcgTG9nTGV2ZWwoNCwgXCJERUJVR1wiKTtcclxuTG9nTGV2ZWwuVFJBQ0UgPSBuZXcgTG9nTGV2ZWwoNSwgXCJUUkFDRVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ0xldmVsOyIsImNvbnN0IExvZ2dlciA9IGZ1bmN0aW9uKGFOYW1lLCBhTG9nTGV2ZWwsIGFMb2dBcHBlbmRlcnMpIHtcblx0dGhpcy5uYW1lID0gYU5hbWU7XG5cdHRoaXMubG9nTGV2ZWwgPSBhTG9nTGV2ZWw7XG5cdHRoaXMubG9nQXBwZW5kZXJzID0gYUxvZ0FwcGVuZGVycztcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuaXNFcnJvckVuYWJsZWQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubG9nTGV2ZWwuaXNJbmNsdWRlZChkZS50aXR1cy5sb2dnaW5nLkxvZ0xldmVsLkVSUk9SKTtcbn07XG5Mb2dnZXIucHJvdG90eXBlLmlzV2FybkVuYWJsZWQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubG9nTGV2ZWwuaXNJbmNsdWRlZChkZS50aXR1cy5sb2dnaW5nLkxvZ0xldmVsLldBUk4pO1xufTtcbkxvZ2dlci5wcm90b3R5cGUuaXNJbmZvRW5hYmxlZCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5sb2dMZXZlbC5pc0luY2x1ZGVkKGRlLnRpdHVzLmxvZ2dpbmcuTG9nTGV2ZWwuSU5GTyk7XG59O1xuTG9nZ2VyLnByb3RvdHlwZS5pc0RlYnVnRW5hYmxlZCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5sb2dMZXZlbC5pc0luY2x1ZGVkKGRlLnRpdHVzLmxvZ2dpbmcuTG9nTGV2ZWwuREVCVUcpO1xufTtcbkxvZ2dlci5wcm90b3R5cGUuaXNUcmFjZUVuYWJsZWQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubG9nTGV2ZWwuaXNJbmNsdWRlZChkZS50aXR1cy5sb2dnaW5nLkxvZ0xldmVsLlRSQUNFKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nRXJyb3IgPSBmdW5jdGlvbihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRpZiAodGhpcy5pc0Vycm9yRW5hYmxlZCgpKVxuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBkZS50aXR1cy5sb2dnaW5nLkxvZ0xldmVsLkVSUk9SKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nV2FybiA9IGZ1bmN0aW9uKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdGlmICh0aGlzLmlzV2FybkVuYWJsZWQoKSlcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgZGUudGl0dXMubG9nZ2luZy5Mb2dMZXZlbC5XQVJOKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nSW5mbyA9IGZ1bmN0aW9uKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdGlmICh0aGlzLmlzSW5mb0VuYWJsZWQoKSlcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgZGUudGl0dXMubG9nZ2luZy5Mb2dMZXZlbC5JTkZPKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nRGVidWcgPSBmdW5jdGlvbihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRpZiAodGhpcy5pc0RlYnVnRW5hYmxlZCgpKVxuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBkZS50aXR1cy5sb2dnaW5nLkxvZ0xldmVsLkRFQlVHKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nVHJhY2UgPSBmdW5jdGlvbihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRpZiAodGhpcy5pc1RyYWNlRW5hYmxlZCgpKVxuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBkZS50aXR1cy5sb2dnaW5nLkxvZ0xldmVsLlRSQUNFKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24oYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nTGV2ZWwpIHtcblx0aWYgKHRoaXMubG9nQXBwZW5kZXJzKVxuXHRcdHJldHVybjtcblxuXHRpZiAodGhpcy5sb2dBcHBlbmRlcnMubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sb2dBcHBlbmRlcnMubGVuZ3RoOyBpKyspXG5cdFx0XHR0aGlzLmxvZ0FwcGVuZGVyc1tpXS5sb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgdGhpcy5uYW1lLFxuXHRcdFx0XHRcdG5ldyBEYXRlKCksIGFMb2dMZXZlbCk7XG5cdH1cbn07XG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7IiwiaW1wb3J0IExvZ2dlclJlZ2lzdHJ5IGZyb20gXCIuL0xvZ2dlclJlZ2lzdHJ5XCI7XG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5cbmxldCBjb25maWdzID0gdW5kZWZpbmVkO1xubGV0IGFwcGVuZGVycyA9IHt9O1xubGV0IGxvYWRMYXp5Q291bnRlciA9IDA7XG5cbmNvbnN0IGdldENvbmZpZyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIWNvbmZpZ3MpXG5cdFx0dGhpcy51cGRhdGVDb25maWdzKCk7XG5cblx0cmV0dXJuIHRoaXMuY29uZmlncztcbn07XG5cbmNvbnN0IHNldENvbmZpZyA9IGZ1bmN0aW9uKGFDb25maWcpIHtcblx0aWYgKGFDb25maWcpIHtcblx0XHRjb25maWdzID0gYUNvbmZpZztcblx0XHR1cGRhdGVMb2dnZXIoKTtcblx0fVxufTtcblxuY29uc3QgdXBkYXRlQ29uZmlncyA9IGZ1bmN0aW9uKGFDb25maWcpIHtcblx0aWYgKGNvbmZpZ3MpXG5cdFx0Y29uZmlncyA9IHt9O1xuXG5cdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuc2VsZWN0b3JRdWVyeShcIltsb2dnaW5nLXByb3BlcnRpZXNdXCIpO1xuXHRpZiAoZWxlbWVudCkge1xuXHRcdGxldCBjb25maWcgPSBlbGVtZW50LmF0dHIoXCJsb2dnaW5nLXByb3BlcnRpZXNcIik7XG5cdFx0bG9hZENvbmZpZyhKU09OLnBhcnNlKGNvbmZpZykpO1xuXHR9IGVsc2UgXG5cdFx0ZG9Mb2FkTGF6eSgpO1xufTtcblxuY29uc3QgZG9Mb2FkTGF6eSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5sb2FkTGF6eUNvdW50ZXIgPCAxMCl7XG5cdFx0dGhpcy5sb2FkTGF6eUNvdW50ZXIrKztcblx0XHRzZXRUaW1lb3V0KGxvYWRDb25maWcsIDEpO1xuXHR9XG59O1xuXG5jb25zdCBsb2FkQ29uZmlnID0gZnVuY3Rpb24oYUNvbmZpZykge1xuXHRpZiAoYUNvbmZpZylcblx0XHR1cGRhdGVDb25maWdzKCk7XG5cdGVsc2Uge1xuXHRcdGlmIChhQ29uZmlnLnJlbW90ZSlcblx0XHRcdGxvYWRDb25maWdSZW1vdGUoYUNvbmZpZy5yZW1vdGUpO1xuXHRcdGVsc2UgaWYgKGFDb25maWcuZGF0YSkge1xuXHRcdFx0c2V0Q29uZmlnKGFDb25maWcuZGF0YS5jb25maWdzKTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IGxvYWRDb25maWdSZW1vdGUgPSBmdW5jdGlvbihhUmVtb3RlRGF0YSkge1xuXHRsZXQgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0eGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHhodHRwLnJlYWR5U3RhdGUgPT0gNClcblx0XHRcdHNldENvbmZpZyhKU09OLnBhcnNlKHRoaXMucmVzcG9uc2UpKTtcblx0fTtcblx0eGh0dHAub3BlbihcImdldFwiLCBhUmVtb3RlRGF0YS51cmwsIGZhbHNlKTtcblx0cmV0dXJuIHhodHRwLnNlbmQoKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUxvZ2dlciA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgbG9nZ2VycyA9IExvZ2dlclJlZ2lzdHJ5LmdldEFsbExvZ2dlcigpO1xuXHRmb3IgKCBsZXQgbmFtZSBpbiBsb2dnZXJzKSB7XG5cdFx0dmFyIGxvZ2dlciA9IGxvZ2dlcnNbbmFtZV07XG5cblx0XHRsZXQgY29uZmlnID0gZmluZENvbmZpZyhsb2dnZXJOYW1lKTtcblx0XHRsZXQgbG9nTGV2ZWwgPSBMb2dMZXZlbC5nZXRMb2dMZXZlbChjb25maWcubG9nTGV2ZWwpO1xuXHRcdGxldCBhcHBlbmRlcnMgPSBnZXRBcHBlbmRlcnMoY29uZmlnLmFwcGVuZGVycyk7XG5cblx0XHRsb2dnZXIubG9nTGV2ZWwgPSBsb2dMZXZlbDtcblx0XHRsb2dnZXIubG9nQXBwZW5kZXJzID0gYXBwZW5kZXJzO1xuXHR9XG59O1xuXG5jb25zdCBmaW5kQ29uZmlnID0gZnVuY3Rpb24oYUxvZ2dlck5hbWUpIHtcblx0bGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdFx0XCJmaWx0ZXJcIiA6IFwiXCIsXG5cdFx0XCJsb2dMZXZlbFwiIDogXCJOT0xPR1wiLFxuXHRcdFwiYXBwZW5kZXJzXCIgOiBbXVxuXHR9O1xuXHRsZXQgYWN0dWFsQ29uZmlnID0gdW5kZWZpbmVkO1xuXHRsZXQgY29uZmlncyA9IGdldENvbmZpZygpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgY29uZmlnID0gY29uZmlnc1tpXTtcblx0XHRpZiAoaXNDb25maWdBY3RpdihhTG9nZ2VyTmFtZSwgY29uZmlnLCBhY3R1YWxDb25maWcpKVxuXHRcdFx0YWN0dWFsQ29uZmlnID0gY29uZmlnO1xuXHRcdGVsc2UgaWYgKGNvbmZpZy5maWx0ZXIgPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5maWx0ZXIgPT0gXCJcIilcblx0XHRcdGRlZmF1bHRDb25maWcgPSBjb25maWc7XG5cdFx0aWYgKGFjdHVhbENvbmZpZyAhPSB1bmRlZmluZWQgJiYgYWN0dWFsQ29uZmlnLmZpbHRlciA9PSBhTG9nZ2VyTmFtZSlcblx0XHRcdHJldHVybiBhY3R1YWxDb25maWc7XG5cdH1cblxuXHRyZXR1cm4gYWN0dWFsQ29uZmlnIHx8IGRlZmF1bHRDb25maWc7XG59O1xuXG5jb25zdCBpc0NvbmZpZ0FjdGl2ID0gZnVuY3Rpb24oYUxvZ2dlck5hbWUsIGFDb25maWcsIGFuQWN0dWFsQ29uZmlnKSB7XG5cdGlmIChhbkFjdHVhbENvbmZpZyAmJiBhbkFjdHVhbENvbmZpZy5maWx0ZXIubGVuZ3RoID49IGFDb25maWcuZmlsdGVyLmZpbHRlcilcblx0XHRyZXR1cm4gZmFsc2U7XG5cdHJldHVybiBhTG9nZ2VyTmFtZS5zZWFyY2goYUNvbmZpZy5maWx0ZXIpID09IDA7XG59O1xuXG5jb25zdCBnZXRBcHBlbmRlcnMgPSBmdW5jdGlvbih0aGVBcHBlbmRlcnMpIHtcblx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRoZUFwcGVuZGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBhcHBlbmRlclN0cmluZyA9IHRoZUFwcGVuZGVyc1tpXTtcblx0XHRsZXQgYXBwZW5kZXIgPSB0aGlzLmFwcGVuZGVyc1thcHBlbmRlclN0cmluZ107XG5cdFx0aWYgKCFhcHBlbmRlcikge1xuXHRcdFx0YXBwZW5kZXIgPSAobmV3IEZ1bmN0aW9uKFwicmV0dXJuIGFwcGVuZGVyU3RyaW5nO1wiKSkuY2FsbCgpXG5cdFx0XHRpZiAoYXBwZW5kZXIpIHtcblx0XHRcdFx0YXBwZW5kZXJzW2FwcGVuZGVyU3RyaW5nXSA9IGFwcGVuZGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoYXBwZW5kZXIpXG5cdFx0XHRyZXN1bHQucHVzaChhcHBlbmRlcik7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgTG9nZ2VyRmFjdG9yeSA9IHtcblx0bmV3TG9nZ2VyIDogZnVuY3Rpb24oYUxvZ2dlck5hbWUpIHtcblx0XHR2YXIgbG9nZ2VyID0gTG9nZ2VyUmVnaXN0cnkuZ2V0TG9nZ2VyKGFMb2dnZXJOYW1lKTtcblx0XHRpZiAobG9nZ2VyKSB7XG5cdFx0XHR2YXIgY29uZmlnID0gZmluZENvbmZpZyhhTG9nZ2VyTmFtZSk7XG5cdFx0XHR2YXIgbG9nTGV2ZWwgPSBMb2dMZXZlbC5nZXRMb2dMZXZlbChjb25maWcubG9nTGV2ZWwpO1xuXHRcdFx0dmFyIGFwcGVuZGVycyA9IGdldEFwcGVuZGVycyhjb25maWcuYXBwZW5kZXJzKTtcblx0XG5cdFx0XHRsb2dnZXIgPSBuZXcgTG9nZ2VyKGFMb2dnZXJOYW1lLCBsb2dMZXZlbCwgYXBwZW5kZXJzKTtcblx0XHRcdExvZ2dlclJlZ2lzdHJ5LmFkZExvZ2dlcihsb2dnZXIpO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIGxvZ2dlcjtcblx0fSxcblx0Z2V0Q29uZmlnIDogZ2V0Q29uZmlnLFx0XG5cdHNldENvbmZpZyA6IHNldENvbmZpZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyRmFjdG9yeTsiLCJpbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuXG5jb25zdCBMT0dHRVIgPSB7fTtcbmNvbnN0IExvZ2dlclJlZ2lzdHJ5ID0ge1xuXHRhZGRMb2dnZXIgOiBmdW5jdGlvbihhTG9nZ2VyKXtcblx0XHRpZighYUxvZ2dlciBpbnN0YW5jZW9mIExvZ2dlcilcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRpZih0eXBlb2YgTE9HR0VSW2FMb2dnZXIubmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0XHRMT0dHRVJbYUxvZ2dlci5uYW1lXSA9IGFMb2dnZXI7XG5cdH0sXG5cdGdldExvZ2dlciA6IGZ1bmN0aW9uKGFOYW1lKXtcblx0XHRpZih0eXBlb2YgYU5hbWUgIT09IFwic3RyaW5nXCIpXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0cmV0dXJuIExPR0dFUlthTG9nZ2VyTmFtZV07XG5cdH0sXHRcblx0Z2V0QWxsTG9nZ2VyIDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gTE9HR0VSO1xuXHR9LFxuXHRnZXRJbnN0YW5jZSA6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIExvZ2dlclJlZ2lzdHJ5O1xuXHR9XG59O1x0XG5leHBvcnQgZGVmYXVsdCBMb2dnZXJSZWdpc3RyeTsiLCJjb25zdCBnbG9iYWwgPSB3aW5kb3cgfHwgZ2xvYmFsIHx8IHt9O1xuZ2xvYmFsLl9fTE9HX18gPSBbXTtcbmNvbnN0IE1lbW9yeUFwcGVuZGVyID0ge1xuXHRsb2dNZXNzYWdlIDogZnVuY3Rpb24oYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0Z2xvYmFsLl9fTE9HX18ucHVzaCh7XG5cdFx0XHRcdFwiZGF0ZVwiIDogYURhdGUsXG5cdFx0XHRcdFwibG9nTGV2ZWxcIiA6IGFMb2dMZXZlbCxcblx0XHRcdFx0XCJsb2dnZXJOYW1lXCIgOiBhTG9nZ2VyTmFtZSxcblx0XHRcdFx0XCJtZXNzYWdlXCIgOiBhTWVzc2FnZSxcblx0XHRcdFx0XCJleGNlcHRpb25cIiA6IGFuRXhjZXB0aW9uXG5cdFx0XHR9KTtcblx0XHR9LCAxKTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVtb3J5QXBwZW5kZXI7XG4iLCJjb25zdCBEYXRlVXRpbHMgPSB7XHJcblx0XHRkYXRlQXNTdHJpbmcgOiBmdW5jdGlvbihhRGF0ZSl7XHJcblx0XHRcdGlmKCFhRGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcblx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRGdWxsWWVhcigpICsgXCIuXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1vbnRoKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiLlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXREYXRlKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXREYXRlKCk7XHRcdFxyXG5cdFx0XHRyZXN1bHQgKz0gIFwiIFwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRIb3VycygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldEhvdXJzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldEhvdXJzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWludXRlcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldFNlY29uZHMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldFNlY29uZHMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwMFwiICsgYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbGxpc2Vjb25kcygpIDwgMTAwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEYXRlVXRpbHM7IiwiaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi9EYXRlVXRpbHNcIjtcclxuY29uc3QgdXRpbHMgPSB7XHJcblx0XHREYXRlVXRpbHMgOiBEYXRlVXRpbHNcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==