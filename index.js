const inquirer = require('inquirer');
const {writeFile} = require("fs").promises;
const {Circle, Triangle, Square} = require('./lib/shapes')
const Svg = require('./lib/svg')

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
    
    const generateSvg = (shape) => {
        console.log(Svg)
        const logo = new Svg()
            logo.setShape(shape)
            logo.setText(shape.text, shape.textColor)
    return logo.render();
};

    const init = () => {
        promptUser()
        
        .then((answers) => { 
            console.log(answers);
            switch(answers.shape) {
            case "circle":
                return new Circle(answers.shapeColor, answers.text, answers.textColor);
            // break;
            
            case "square":
                return new Square(answers.shapeColor, answers.text, answers.textColor);
            // break;
    
            case "triangle": 
                return new Triangle(answers.shapeColor, answers.text, answers.textColor);
            // // break;
        }
    })
    .then((answers) => writeFile('logo.svg', generateSvg(answers)))
    .then(() => console.log("successfully created svg file"))
    .catch((err) => console.log(err));
    
    };
            
        init();
        
