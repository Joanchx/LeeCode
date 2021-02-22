const isMatch = require('./0007_reverse-Integer');
const assert = require('power-assert');

describe('0007_reverse-Integer.spec', () => {
	it('0007_reverse-Integer.spec', () => {
		const num = -123;
		const result = isMatch(num);
		assert.equal(result, -321);
	});
});
