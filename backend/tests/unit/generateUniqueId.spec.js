const GerenateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = GerenateUniqueId();

        expect(id).toHaveLength(8);
        //exemplo expect(2 + 2).toBe(4); se toBe(5) da erro no 'npm test'
    });
});