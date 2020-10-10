const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Creates an Intern object', () => {
    const intern = new Intern('Colin', 1, 'colin@email.com', 'Vanderbilt');

    expect(intern.name).toBe('Colin');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('colin@email.com');
    expect(intern.school).toBe('Vanderbilt');
});