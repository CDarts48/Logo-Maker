class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                <polygon points="75,25 25,125 125,125" style="fill:${this.color}" />
                <text x="50" y="100" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

// / In this code, the render method returns a string that represents an SVG image. The <svg> element is the container for the SVG image, and the <rect> element represents the triangle.
// The xmlns attribute in the <svg> element is necessary for the SVG to be rendered correctly.