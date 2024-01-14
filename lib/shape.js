class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}
  
  class Triangle extends Shape {
    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                <polygon points="75,25 25,125 125,125" style="fill:${this.color}" />
                <text x="75" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
            </svg>
        `;
    }
}
  
  class Square extends Shape {
    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                <rect x="50" y="50" width="50" height="50" style="fill:${this.color}" />
                <text x="75" y="75" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
            </svg>
        `;
    }
}
  
  class Circle extends Shape {
    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                <circle cx="75" cy="75" r="50" style="fill:${this.color}" />
                <text x="75" y="75" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
            </svg>
        `;
    }
}
  
  module.exports = {
    Shape,
    Triangle,
    Square,
    Circle,
  };