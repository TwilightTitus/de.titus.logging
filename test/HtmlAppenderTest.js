import "../node_modules/dom-api-extension";
import "../browser-index";
import logging from "./data/logging.json";


describe("HtmlAppenderTest", function() {	
	beforeAll(function(){
		window.document.body.innerHTML = window.__html__['test/sites/browser-setup.html'];		
		this.configEntries = logging.configs.length;
		de.titus.logging.LoggerFactory.setConfig(logging.configs);
		this.logger = de.titus.logging.LoggerFactory.newLogger("test.HtmlAppenderTest");
	});
	
	it("check loaded logger configs", function(){		
		let config = de.titus.logging.LoggerFactory.getConfig();
		expect(config.length).toBe(this.configEntries);
	});  
	
	it("is logger correct", function(){
		expect(this.logger).toBeDefined();
		expect(this.logger.logLevel).toBe(de.titus.logging.LogLevel.TRACE); 
	});
	
	it("add log entry", function(done){
		let message = "Log info Messages:" + Date.now();
		this.logger.logInfo(message).then((function(){
			let entry = window.document.find(".log-entry.INFO").first();
			expect(entry).toBeDefined();
			done(); 
		}).bind(this));
	});
});