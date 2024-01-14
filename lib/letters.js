const inquirer = require('inquirer');

// this function prompts the user for inputs
const prompt = inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function (input) {
      if (input.length === 3) {
        return true;
      } else {
        return 'Please enter three characters.';
      }
    },
  },
])
  .then((answers) => {
    console.log('Entered text:', answers.text);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

  module.exports = prompt;