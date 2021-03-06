const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];

// Write code to use inquirer to gather information about the development team members,

const managerPrompts = function () {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Manager name",
				name: "managerName",
			},
			{
				type: "input",
				message: "Manager Email",
				name: "managerEmail",
			},
			{
				type: "input",
				message: "id#",
				name: "managerId",
			},
			{
				type: "input",
				message: "office number",
				name: "oNumber",
			},
		])
		.then((answers) => {
			const manager = new Manager(
				answers.managerName,
				answers.managerId,
				answers.managerEmail,
				answers.oNumber
			);
			teamArray.push(manager);
			createTeam();
		});
};

function createTeam() {
	inquirer
		.prompt([
			{
				type: "list",
				message: "What type of employee would you like to add?",
				choices: ["Engineer", "Intern", "Finished adding new employees"],
				name: "employeeChoice",
			},
		])
		.then((answers) => {
			switch (answers.employeeChoice) {
				case "Engineer":
					createEngineer();
					break;
				case "Intern":
					createIntern();
					break;
				default:
					buildTeam();
			}
		});
}

function createEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Engineer name",
				name: "engineerName",
			},
			{
				type: "input",
				message: "Engineer Email",
				name: "engineerEmail",
			},
			{
				type: "input",
				message: "id#",
				name: "engineerId",
			},
			{
				type: "input",
				message: "Github Username",
				name: "github",
			},
		])
		.then((answers) => {
			const engineer = new Engineer(
				answers.engineerName,
				answers.engineerId,
				answers.engineerEmail,
				answers.github
			);
			teamArray.push(engineer);
			createTeam();
		});
}
function createIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Intern name",
				name: "internName",
			},
			{
				type: "input",
				message: "Intern Email",
				name: "internEmail",
			},
			{
				type: "input",
				message: "Id#",
				name: "internId",
			},
			{
				type: "input",
				message: "School",
				name: "school",
			},
		])
		.then((answers) => {
			const intern = new Intern(
				answers.internName,
				answers.internId,
				answers.internEmail,
				answers.school
			);
			teamArray.push(intern);
			createTeam();
		});
}

function buildTeam() {
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR);
	}
	fs.writeFile(outputPath, render(teamArray), (err) => {
		if (err) {
			throw err;
		}
		console.log("Success!");
	});
}

managerPrompts();
// console.log(teamArray);
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
