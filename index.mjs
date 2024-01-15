// import dependencies 
import inquirer from 'inquirer';
import fs from 'fs';
import { Shape, Triangle, Circle, Square } from './lib/shape.js';
// questions array
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
  { // <-- This opening brace was missing
    type: 'input',
    message: 'What color would you like the shape to be?',
    name: 'shapeColor',
    validate: (input) => {
        if (input.toLowerCase() === 'exit') process.exit();
        const colorRegex = /^(#([0-9a-fA-F]{3}){1,2}|[a-z]+)$/;
        const cssColorNames = [
          'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
      ];          
      if (colorRegex.test(input) && (cssColorNames.includes(input.toLowerCase()) || input.startsWith('#'))) {
            return true;
        } else {
            return 'Please enter a valid color name or hexadecimal color code.';
        }
    },
  },
  // Rest of your code...
    {
      type: 'input',
      message: 'Please select three letters',
      name: 'text',
      // Code to check if 3 letters are enter is === 3
      validate: (input) => {
        if (input.toLowerCase() === 'exit') process.exit();
        return input.length === 3;
      },
    },
    {
      type: 'input',
      message: 'What color would you like the letters to be?',
      name: 'textColor',
      // Validate that a color or hex is entered
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
    console.log('Alright, ALright, Alright!/Generated logo.svg');
  } catch (error) {
    console.log(error);
  }
}
// Async function with a switch case to create the svg based on user input. I asked the boot camp AI to dry up my if statements.
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
  // Have to have this bad boy to start the program Corey!
  init();

// it wasn't running in the js file because I was using ES6 so changed it to an mjs file and it worked, explanation below. The .mjs extension is used for JavaScript modules. This is a way to differentiate between files that use the newer ES6 module system (import/export) and those that use the older CommonJS module system (require/module.exports).
// In your case, the index.mjs file is using the import statement to import modules, which is why it's using the .mjs extension.