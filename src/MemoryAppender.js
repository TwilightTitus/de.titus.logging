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

export default MemoryAppender;
