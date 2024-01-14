class Square extends Shape {
    constructor(color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                <rect x="50" y="50" width="50" height="50" style="fill:${this.color}" />
                <text x="75" y="75" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
            </svg>
        `;
    }
}

module.exports = Square;

// In this code, the render method returns a string that represents an SVG image. The <svg> element is the container for the SVG image, and the <rect> element represents the square.
// The xmlns attribute in the <svg> element is necessary for the SVG to be rendered correctly.