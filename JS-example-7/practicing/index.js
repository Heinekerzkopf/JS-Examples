//========================================================================================================================================================
//========================================================================================================================================================
// exercise eighth - code - "EMPLOYERS"

class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

const employeeErvin = new Employee("Ervin", 21, "admin")
const employeeViktor = new Employee("Viktor", 20, "accountant")
const employeeJura = new Employee("Jura", 20, "Sales")
const employeeViktorija = new Employee("Viktorija", 18, "PR-Manager")

const employeesArray = [employeeErvin, employeeViktor, employeeJura, employeeViktorija];

function deleteEmployee(employee) {

    let filteredArray = [];

    if (employee instanceof Employee) {
        filteredArray = employeesArray.filter((e) => e !== employee);
    } else {
        console.log("Employee does not exist");
    }
    return filteredArray;
}

function addEmployee(employee) {
    if (employee instanceof Employee) {
        employeesArray.push(employee);
    } else {
        console.log("Employee did not fill all required fields");
    }

    return employeesArray;
}

function findEmployee(employeeName) {

    let foundEmployee = [];

    if (typeof employeeName === "string") {
        foundEmployee = employeesArray.find((e) => e.name === employeeName);
    } else {
        console.log("Employee does not exist");
    }

    return foundEmployee;
}

console.log(findEmployee("Ervin"));

//========================================================================================================================================================
//========================================================================================================================================================
// Error processing - exercise 9 

function divisionMath(num1, num2) {

    if (num2 === 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Wrong data type");
    }

    return num1 / num2;

}

//========================================================================================================================================================
//========================================================================================================================================================
// exercise 10 - Interactive quiz

const quizButton = document.querySelector('.quiz__button');

function proccessing(message) {
    alert(message);
    location.reload();
}

quizButton.addEventListener("click", function (event) {
    event.preventDefault();

    const quizInputs = document.querySelectorAll('input.quiz__block-input:checked');
    const checkedValues = Array.from(quizInputs).map(cb => cb.value);

    console.log(checkedValues);

    if (checkedValues.find(value => value === "fail") || checkedValues.length < 3 || checkedValues.length > 3) {
        proccessing("Oops, try again :(")
    } else {
        proccessing("Congratulation, you solved the quiz");
    }

})



