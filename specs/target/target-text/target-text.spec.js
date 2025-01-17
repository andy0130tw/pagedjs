const TIMEOUT = 10000; // Some book might take longer than this to renderer

describe("target-text", async () => {
	let page;
	let rendered;
	beforeAll(async () => {
		page = await loadPage("target/target-text/target-text.html");
		return page.rendered;
	}, TIMEOUT);

	afterAll(async () => {
		if (!DEBUG) {
			await page.close();
		}
	});

	it("Table of content should include chapter titles", async () => {
		let text = await page.$eval("nav li:nth-of-type(1) a" , (r) => window.getComputedStyle(r, "::after").content);
		expect(text).toEqual(`"'Lorem \\"ipsum\\" dolor sit amet'"`);
	});

	it("Table of content should include chapter titles", async () => {
		let text = await page.$eval("nav li:nth-of-type(2) a" , (r) => window.getComputedStyle(r, "::after").content);
		expect(text).toEqual(`"'Lorem ipsum dolor sit amet'"`);
	});

	it("Table of content should include first-letter of the chapter title", async () => {
		let text = await page.$eval("nav li:nth-of-type(3) a" , (r) => window.getComputedStyle(r, "::after").content);
		expect(text).toEqual("\"P\"");
	});
        
	it("Table of content should include the content of the before pseudo element", async () => {
		let text = await page.$eval("nav li:nth-of-type(4) a" , (r) => window.getComputedStyle(r, "::after").content);
		expect(text).toEqual("\"This is 'inside' the before:\"");
	});

	it("Table of content should include the content of the before pseudo element", async () => {
		let text = await page.$eval("nav li:nth-of-type(5) a" , (r) => window.getComputedStyle(r, "::after").content);
		expect(text).toEqual("\": This is inside the after\"");
	});
	// if (!DEBUG) {
	// 	it('should create a pdf', async () => {
	// 		let pdf = await page.pdf(PDF_SETTINGS);
	// 		// no need to check the pdf with those test
	// 		// expect(pdf).toMatchPDFSnapshot(1);
	// 	})
	// }
}
);
