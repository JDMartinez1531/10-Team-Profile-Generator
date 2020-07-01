# Team Profile Template Engine

<img src="https://img.shields.io/badge/Lisence-MIT-blue" alt="Lisence" />

## A CLI application that uses a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

---
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)


---

## Installation
​
```
step 1: git clone https://github.com/JDMartinez1531/10-Team-Profile-Generator.git
step 2: install node https://nodejs.org/en/download/
step 3: npm install
step 4: node app.js
```
---

## Usage

- run app.js
- answer prompts for employee information
- after all prompts have been completed, the program will create a new html file within a new   folder called "output"

```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```

---



## License

This projet is licensed under the terms of MIT license.

---

## Tests

Tested using jest package.

Tests can be found in test/

```
jest test
```

---

## Questions

If you have any questions about this repo,
open an issue or contact jdmartinez1531@gmail.com