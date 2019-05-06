import LoggerRegistry from "./LoggerRegistry";
import LogLevel from "./LogLevel";
import Logger from "./Logger";

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
	let loggers = LoggerRegistry.getAllLogger();
	for ( let name in loggers) {
		var logger = loggers[name];

		let config = findConfig(loggerName);
		let logLevel = LogLevel.getLogLevel(config.logLevel);
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
		var logger = LoggerRegistry.getLogger(aLoggerName);
		if (logger) {
			var config = findConfig(aLoggerName);
			var logLevel = LogLevel.getLogLevel(config.logLevel);
			var appenders = getAppenders(config.appenders);
	
			logger = new Logger(aLoggerName, logLevel, appenders);
			LoggerRegistry.addLogger(logger);
		}
	
		return logger;
	},
	getConfig : getConfig,	
	setConfig : setConfig
};

export default LoggerFactory;