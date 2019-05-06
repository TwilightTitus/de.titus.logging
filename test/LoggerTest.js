import LoggerFactory from "../src/LoggerFactory";

describe("url", function() {
	it("document", function(){		
		let logger = LoggerFactory.newLogger("test.logger");
		expect(logger).toBeDefined();
	});
});