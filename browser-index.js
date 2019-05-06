import utils from "./utils";
import ConsoleAppender from "./ConsoleAppender";
import HtmlAppender from "./HtmlAppender";
import InteligentBrowserAppender from "./InteligentBrowserAppender";
import MemoryAppender from "./MemoryAppender";
import LogLevel from "./LogLevel";
import Logger from "./Logger";
import LoggerFactory from "./LoggerFactory";
import LoggerRegistry from "./LoggerRegistry";


(function(global){
	global.de = de || {};
	global.de.titus = global.de.titus || {};
	global.de.titus.logging = global.de.titus.logging || {
		VERSION : "${version}",
		utils : utils,
		ConsoleAppender : ConsoleAppender,
		ConsolenAppender : ConsoleAppender,
		HtmlAppender : HtmlAppender,
		MemoryAppender : MemoryAppender,
		InteligentBrowserAppender : InteligentBrowserAppender,
		LogLevel : LogLevel,
		Logger : Logger,
		LoggerFactory : LoggerFactory,
		LoggerRegistry : LoggerRegistry
	};
	
})(window || global || {});