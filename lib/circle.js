class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                <circle cx="75" cy="75" r="50" style="fill:${this.color}" />
                <text x="75" y="75" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
            </svg>
        `;
    }
}
module.exports = Circle;