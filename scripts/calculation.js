const recieveValues = () => {
    let gs = document.querySelector('#gross-salary').value;
    let bonus = document.querySelector('#bonus').value;
    let allowance = document.querySelector('#allowance').value;
    let incomeTax = document.querySelector('#income-tax').value;
    let empIns = document.querySelector('#emp-ins').value;
    let cpp = document.querySelector('#cpp').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let dependants = document.querySelector('#dependants').value;

    calculate(gs, bonus, allowance, incomeTax, empIns, cpp, gender, dependants);
}

const calculate = (gs, bonus, allowance, incomeTax, empIns, cpp, gender, dependants) => {
    let additions = bonus + allowance;

    // calculate deductions
    let empInsVal = (empIns / 100) * gs;
    let cppVal = (cpp / 100) * gs;
    let incomeTaxVal;

    switch (dependants) {
        case 3:
            incomeTaxVal = ((incomeTax / 100) * gs) - ((2 / 100) * gs);
            break;
        case 4:
            incomeTaxVal = ((incomeTax / 100) * gs) - ((4 / 100) * gs);
            break;
        default:
            incomeTaxVal = ((incomeTax / 100) * gs);
            break;
    }

    if (gender === "Female") {
        incomeTaxVal = ((incomeTax / 100) * gs) - ((2 / 100) * gs);
    }

    let deductions = empInsVal + cppVal + incomeTaxVal;

    let takeHomeSalary = (gs + additions) - deductions;

    displey(gs, additions, deductions, takeHomeSalary);
}

const display = (gs, additions, deductions, takeHomeSalary) => {

    document.getElementById("gs-answer").innerHTML = "Gross Salary: $" + gs;
}