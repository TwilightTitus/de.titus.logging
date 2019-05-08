import LogLevel from "./LogLevel";

const Logger = function(aName, aLogLevel, aLogAppenders) {
	this.name = aName;
	this.logLevel = aLogLevel;
	this.logAppenders = aLogAppenders;
};

Logger.prototype.isErrorEnabled = function() {
	return this.logLevel.isIncluded(LogLevel.ERROR);
};
Logger.prototype.isWarnEnabled = function() {
	return this.logLevel.isIncluded(LogLevel.WARN);
};
Logger.prototype.isInfoEnabled = function() {
	return this.logLevel.isIncluded(LogLevel.INFO);
};
Logger.prototype.isDebugEnabled = function() {
	return this.logLevel.isIncluded(LogLevel.DEBUG);
};
Logger.prototype.isTraceEnabled = function() {
	return this.logLevel.isIncluded(LogLevel.TRACE);
};

Logger.prototype.logError = function(aMessage, aException) {
	return this.log(aMessage, aException, LogLevel.ERROR);
};

Logger.prototype.logWarn = function(aMessage, aException) {
	return this.log(aMessage, aException, LogLevel.WARN);
};

Logger.prototype.logInfo = function(aMessage, aException) {
	return this.log(aMessage, aException, LogLevel.INFO);
};

Logger.prototype.logDebug = function(aMessage, aException) {
	return this.log(aMessage, aException, LogLevel.DEBUG);
};

Logger.prototype.logTrace = function(aMessage, aException) {
	return this.log(aMessage, aException, LogLevel.TRACE);
};

Logger.prototype.log = function(aMessage, anException, aLogLevel) {
	if(!this.logLevel.isIncluded(aLogLevel))
		return Promise.resolve();
	
	if (this.logAppenders || this.logAppenders.length === 0)
		return Promise.resolve();

	return new Promise((function(resolve){
		setTimeout((function(){
			for (let i = 0; i < this.logAppenders.length; i++)
				this.logAppenders[i].logMessage(aMessage, anException, this.name,new Date(), aLogLevel);
			resolve();
		}).bind(this), 100);
	}).bind(this));
};
export default Logger;