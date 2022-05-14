const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./md');



questions = [];

inquirer.prompt(questions)
.then(answers => {
    const content = md.generateMd(answers);
    fs.writeFile('./output/README.md', content, err=>{});
});