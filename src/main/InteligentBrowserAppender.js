import HtmlAppender from "./HtmlAppender";
import ConsoleAppender from "./ConsoleHtmlAppender";
import MemoryAppender from "./MemoryAppender";

let appender;
const getAppender = function() {
	if (this.appender) {		
		if (console)
			this.appender = ConsolenAppender;
		else if (HtmlAppender.isAvailable())
			this.appender = HtmlAppender;
		else
			this.appender = MemoryAppender;
	}
	
	return this.appender;
};
const InteligentBrowserAppender = {
	InteligentBrowserAppender.prototype.logMessage = function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		getAppender().logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel);
	};
};

export default InteligentBrowserAppender;
