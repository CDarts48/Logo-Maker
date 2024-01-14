const {Shape, Circle, Square, Triangle} = require('./shape');

// Test Color
describe('Shape', () => {
    it('should set the color of the shape', () => {
        const shape = new Shape();
        shape.setColor('purple');
        expect(shape.color).toEqual('purple');
    });
});

// Test Triangle
describe('Triangle', () => {
    it("should render a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor('blue');
        // Set what the expected triangle should look like
        const expected = '<polygon points="50,15 100,100 0,100" fill="blue" />';
        expect(shape.render()).toEqual(expected);
    });
});
// Test Square
describe('Square', () => {
    it("should render a blue square", () => {
        const shape = new Square();
        shape.setColor('blue');
        // Set what the expected square should look like
        const expected = '<rect x="50" y="50" width="50" height="50" fill="blue" />';
        expect(shape.render()).toEqual(expected);
    });
});

// Test Circle
describe('Circle', () => {
    it("should render a blue circle", () => {
        const shape = new Circle();
        shape.setColor('blue');
        // Set what the expected circle should look like
        const expected = '<circle cx="50" cy="50" r="40" fill="blue" />';
        expect(shape.render()).toEqual(expected);
    });
});

