import inquirer from 'inquirer';
import fs from 'fs';
import { Shape, Triangle, Circle, Square } from './lib/shape.js';

const questions = [
    {
      type: 'list',
      message: 'What shape do you want the svg to be?',
      name: 'shape',
      choices: [
        'Triangle',
        'Square',
        'Circle',
      ],
    },
    {
      type: 'input',
      message: 'What color would you like the shape to be?',
      name: 'shapeColor',
      validate: (input) => {
        if (input.toLowerCase() === 'exit') process.exit();
        const colorRegex = /^(#([0-9a-fA-F]{3}){1,2}|[a-z]+)$/;
        if (colorRegex.test(input)) {
          return true;
        } else {
          return 'Please enter a valid color name or hexadecimal color code.';
        }
      },
    },
    {
      type: 'input',
      message: 'Please select three letters',
      name: 'text',
      validate: (input) => {
        if (input.toLowerCase() === 'exit') process.exit();
        return input.length === 3;
      },
    },
    {
      type: 'input',
      message: 'What color would you like the letters to be?',
      name: 'textColor',
      validate: (input) => {
        if (input.toLowerCase() === 'exit') process.exit();
        const colorRegex = /^(#([0-9a-fA-F]{3}){1,2}|[a-z]+)$/;
        if (colorRegex.test(input)) {
          return true;
        } else {
          return 'Please enter a valid color name or hexadecimal color code.';
        }
      },
    },
  ];

function writeToFile(fileName, content) {
  try {
    fs.writeFileSync(fileName, content);
    console.log('Alright, ALright, Alright!');
  } catch (error) {
    console.log(error);
  }
}

async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      const { text, textColor, shape, shapeColor } = answers;
      let svgElement = '';
  
      switch (shape) {
        case 'Triangle':
          const triangle = new Triangle(shapeColor, text, textColor);
          svgElement = triangle.render();
          break;
        case 'Square':
          const square = new Square(shapeColor, text, textColor);
          svgElement = square.render();
          break;
        case 'Circle':
          const circle = new Circle(shapeColor, text, textColor);
          svgElement = circle.render();
          break;
        default:
          console.log('Invalid shape');
          break;
      }
  
      writeToFile('logo.svg', svgElement);
    } catch (error) {
      console.log(error);
    }
  }
  init();