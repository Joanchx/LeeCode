const isSameTree = require('./0100_same_tree');
const assert = require('power-assert');

describe('0100_same_tree', () => {
	it('0100_same_tree', () => {
		const obj = {
			p: [1, 2, 1],
			q: [1, 1, 2],
		};

		const result = isSameTree(obj.p, obj.q);
		assert.deepEqual(result, false);
	});
});
