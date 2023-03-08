const inquirer = require('inquirer');
const {writeFile} = require("fs").promises;



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please add a maximum of three characters',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Please input a text color',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Please choose a shape',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'Please insert a shape color',
            name: 'shapeColor',
        },
    ])
};
    
// const generateSvg =({text, textColor, shape, shapeColor})

    const init = () => {
        promptUser()

            // .then((answers) => writeFile('logo.svg', generateSvg(answers)))
            .then(() => console.log("successfully created svg file"))
            .catch((err) => console.log(err));
    };

    init();

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered