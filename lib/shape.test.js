// Import shape class and its extensions
const { Circle, Square, Triangle } = require('./shape');

/// Test Triangle
describe('Triangle', () => {
    it("should render a triangle", () => {
        const shape = new Triangle();
        // Set what the expected triangle should look like
        const expected = /<polygon points="150,0 0,200 300,200"[^>]*>/;
        // toMatch vs. toContain 
        expect(shape.render()).toMatch(expected);
    });
});
/// Test Square
describe('Square', () => {
    it("should render a square", () => {
        const shape = new Square();
        // Set what the expected square should look like
        const expected = /<rect x="0" y="0" width="300" height="200"[^>]*>/;
        expect(shape.render()).toMatch(expected);
    });
});
// Test Circle
describe('Circle', () => {
    it("should render a circle", () => {
        const shape = new Circle();
        // Set what the expected circle should look like
        const expected = /<circle cx="150" cy="100" r="100"[^>]*>/;
        expect(shape.render()).toMatch(expected);
    });
});