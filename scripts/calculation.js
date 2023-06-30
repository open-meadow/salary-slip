const recieveValues = () => {
  let gs = Number(document.querySelector("#gross-salary").value);
  let bonus = Number(document.querySelector("#bonus").value);
  let allowance = Number(document.querySelector("#allowance").value);
  let incomeTax = Number(document.querySelector("#income-tax").value);
  let empIns = Number(document.querySelector("#emp-ins").value);
  let cpp = Number(document.querySelector("#cpp").value);
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let dependants = Number(document.querySelector("#dependants").value);

  calculate(gs, bonus, allowance, incomeTax, empIns, cpp, gender, dependants);
};

const calculate = (
  gs,
  bonus,
  allowance,
  incomeTax,
  empIns,
  cpp,
  gender,
  dependants
) => {
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
      incomeTaxVal = (incomeTax / 100) * gs;
      break;
  }

  if (gender === "Woman") {
    incomeTaxVal = (incomeTax / 100) * gs - (2 / 100) * gs;
  }

  let deductions = empInsVal + cppVal + incomeTaxVal;
  let takeHomeSalary = (gs + additions) - deductions;

  display(gs, additions, deductions, takeHomeSalary);
};

const display = (gs, additions, deductions, takeHomeSalary) => {
  document.getElementById("gs-answer").innerHTML = "Gross Salary: $" + gs;
  document.getElementById("additions-answer").innerHTML = "Additions: $" + additions;
  document.getElementById("deductions-answer").innerHTML = "Deductions: $" + deductions;
  document.getElementById("takeHomeSalary-answer").innerHTML = "Take Home Salary: $" + takeHomeSalary;
};
