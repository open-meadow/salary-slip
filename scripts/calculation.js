const calc = () => {
    console.log("hello");
    let gs = document.querySelector('#gross-salary').value;
    let bonus = document.querySelector('#bonus').value;
    let allowance = document.querySelector('#allowance').value;
    let incomeTax = document.querySelector('#income-tax').value;
    let empIns = document.querySelector('#emp-ins').value;
    let cpp = document.querySelector('#cpp').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let dependants = document.querySelector('#dependants').value;
    console.log("gs here: ", gs);
    console.log("bonus here: ", bonus);
    console.log("allowance here: ", allowance);
    console.log("incomeTax here: ", incomeTax);
    console.log("empIns here: ", empIns);
    console.log("cpp here: ", cpp);
    console.log("gender here: ", gender);
    console.log("dependants here: ", dependants);
}