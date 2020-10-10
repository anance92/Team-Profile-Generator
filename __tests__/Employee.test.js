const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Creates an Employee object', () => {
    const employee = new Employee('Colin', 1, 'colin@email.com');

    expect(employee.name).toBe('Colin');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('colin@email.com');
});