const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Colin', 1, 'colin@email.com', 'colin00');

    expect(engineer.name).toBe('Colin');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('colin@email.com');
    expect(engineer.github).toBe('colin00');
});