import Chunker from './chunker.js';

describe('Chunker', async () => {

		it('should create a page area', async () => {
			let chunker = new Chunker();
			chunker.setup();
			expect(chunker.pagesArea.classList).toContain('pagedjs_pages');
		})

})
