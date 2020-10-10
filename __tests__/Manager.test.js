const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Creates a Manager object', () => {
    const manager = new Manager('Colin', 1, 'colin@email.com', 43);

    expect(manager.name).toBe('Colin');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('colin@email.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});