const isMatch = require('./0191_number-of-1-bits');
const assert = require('power-assert');

describe('0191_number-of-1-bits', () => {
	it('0191_number-of-1-bits', () => {
		const num = 00000000000000000000000000001011;
		const result = isMatch(num);
		assert.equal(result, 3);
	});
});
