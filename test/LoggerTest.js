import "../node_modules/dom-api-extension";
import "../browser-index";
import logging from "./logging.json";

describe("url", function() {
	beforeAll(function(){
		window.document.body.innerHTML = window.__html__['test/sites/test.html'];		
		this.configEntries = logging.configs.length;
		de.titus.logging.LoggerFactory.setConfig(logging.configs);
		this.logger = de.titus.logging.LoggerFactory.newLogger("test.logger");
		console.log("logger:", this.logger);
	});
	
	it("check loaded logger configs", function(){		
		let config = de.titus.logging.LoggerFactory.getConfig();
		expect(config.length).toBe(this.configEntries);
	});
	
	it("is logger correct", function(){
		expect(this.logger).toBeDefined();
		expect(this.logger.logLevel).toBe(de.titus.logging.LogLevel.TRACE); 
	});
	
	it("add log entry", function(){	
		expect(this.logger).toBeDefined();
		let message = "Log info Messages:" + Date.now();
		this.logger.logInfo(message).then((function(){
			let entry = document.find(".log-entry.INFO").first();
			console.log("log entry: " + entry);
			expect(entry).toBeDefined();
		}).bind(this));
	});
});