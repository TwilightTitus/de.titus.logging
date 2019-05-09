import "../node_modules/dom-api-extension";
import "../browser-index";
import logging from "./data/logging.json";

describe("LoggerTest", function() {
	beforeAll(function(){
		this.configEntries = logging.configs.length;
		de.titus.logging.LoggerFactory.setConfig(logging.configs);
		this.logger = de.titus.logging.LoggerFactory.newLogger("test.LoggerTest");
	});
	
	it("check loaded logger configs", function(){		
		let config = de.titus.logging.LoggerFactory.getConfig();
		expect(config.length).toBe(this.configEntries);
	});
	
	it("is logger correct", function(){
		expect(this.logger).toBeDefined();
		expect(this.logger.logLevel).toBe(de.titus.logging.LogLevel.TRACE); 
	});
});