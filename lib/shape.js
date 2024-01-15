// create class of shape
class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}
//   extend class Triangle return parameters for shape in svg
class Triangle extends Shape {
    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                <polygon points="150,0 0,200 300,200" style="fill:${this.color}" />
                <text x="150" y="150" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="90">${this.text}</text>
            </svg>
        `;
    }
}
  //   extend class Square return parameters for shape in svg
class Square extends Shape {
    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                <rect x="0" y="0" width="300" height="200" style="fill:${this.color}" />
                <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="90">${this.text}</text>
            </svg>
        `;
    }
}
//   extend class Circle return parameters for shape in svg
class Circle extends Shape {
    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                <circle cx="150" cy="100" r="100" style="fill:${this.color}" />
                <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="90">${this.text}</text>
            </svg>
        `;
    }
}
//   export shapes
  module.exports = {
    Shape,
    Triangle,
    Square,
    Circle,
  };