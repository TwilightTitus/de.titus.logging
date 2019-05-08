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

export default LogLevel;