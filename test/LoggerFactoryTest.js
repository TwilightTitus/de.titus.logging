import "../node_modules/dom-api-extension";
import "../browser-index";
import logging from "./data/logging.json";


describe("LoggerFactoryTest", function() {
	beforeAll(function(){
		this.configEntries = logging.configs.length;
		de.titus.logging.LoggerFactory.setConfig(logging.configs);
		this.logger = undefined;
	});
	
	it("check load configs", function(){
		
	});
	
	it("check loaded logger configs", function(){		
		let config = de.titus.logging.LoggerFactory.getConfig();
		expect(config.length).toBe(this.configEntries);		
	});
	
	it("new Logger", function(){
		this.logger = de.titus.logging.LoggerFactory.newLogger("test.LoggerFactoryTest");
		expect(this.logger).toBeDefined();
		expect(this.logger.logLevel).toBe(de.titus.logging.LogLevel.TRACE); 
	});
	
	it("new Logger dublicate check", function(){
		let logger1 = de.titus.logging.LoggerFactory.newLogger("test.LoggerFactoryTest");
		let logger2 = de.titus.logging.LoggerFactory.newLogger("test.LoggerFactoryTest");
		expect(logger1).toBeDefined();
		expect(logger2).toBeDefined();
		expect(logger1).toBe(logger2);
	});
});