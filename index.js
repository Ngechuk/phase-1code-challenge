

/* Challenge 1: Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/
const promptMarks = require(`prompt-sync`)();
// const promptBasicSalary = require(`prompt-sync`)();
let a = promptMarks("Enter Marks:")
// let  msg = "input student marks:"; //user to input marks
// let a = prompt(msg);
//for(let a = 1; a < 100;)
if(a>79)// conditional statement which prints grade if fufilled
    {//if marks > 79 --A
      console.log('Grade - A');}
else if(a<=79 && a>60)
    {//60<marks60=79  --B
      console.log('Grade - B');}
else if(a>59 && a<=49)
    {//59<marks<=49 --C
      console.log('Grade - C');}
else if(a>49 && a<=40)
    {//40<marks<=49  --D
      console.log('Grade - D');}

else if(a<=40)
{//less than 40 student gerts E grade
 console.log('Grade - E');
}


/* Challenge 2: Speed Detector (Toy Problem)

Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”. */

function checkSpeed(vSpeed){
    const sLimit = 70
    const sRate = 5
    if (vSpeed <= sLimit){    // this statement sets the condition for a vehicle travelling within the limits
        return "Okay";//   output of above condition
    }
    const overSpeed = vSpeed -sLimit; // to get the value above speed limit
    
    let demeritPoints = 0;
    for (let s = 0; s< overSpeed; s+= sRate){
        demeritPoints += 1
        if (demeritPoints > 12){
            return "License Suspended";
        }
    }
    return `points: ${demeritPoints}`;
    } 
    console.log(checkSpeed(75));// calls the function to display speed and response
     
//Challenge 3: Net Salary Calculator (Toy Problem)
//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 



const promptBasicSalary = require(`prompt-sync`)();
let basicSalary = promptBasicSalary("Enter basicSalary:")
const promptBenefits = require(`prompt-sync`)();
let benefits = promptBenefits("Enter benefits:")

//below function is used to dispaly all the calculated stuff and then display them in tabular data-structure
function netSalaryCalculator (){
    const grossSalary = Number(basicSalary + benefits);
    const nssf = calculateNSSF(grossSalary);
    const taxableIncome = grossSalary-nssf;
    const taxBeforeRelief = calculateTax(taxableIncome);
    const personalRelief = 2400;
    const nhif = calculateNHIF(grossSalary);
    const insuranceRelief = nhif*0.15;
    const taxes = taxBeforeRelief-(personalRelief+insuranceRelief);
    const payee = (taxes<=0) ? 0 : taxes;
    const netPay = grossSalary-(nssf + payee + nhif);

    const result = {
        "taxBeforeRelief" : taxBeforeRelief,
        "taxableIncome" : taxableIncome,
        "grossSalary" : grossSalary,
        "NHIF" : nhif,
        "NSSF" : nssf,
        "payee(tax)" : payee,
        "insuranceRelief" : insuranceRelief
    };

    console.table(result);
    console.log(`Your net salary is : ${netPay} Ksh`)
}

//calculates NSSF by using basic salary as the argument
function calculateNSSF(basicSalary){
    let nssf;
    if(basicSalary<=6000){
        nssf = basicSalary*0.06;
    }
    else if(basicSalary>6000 && basicSalary<18000){
        nssf = (6000*0.06) + ((basicSalary-6000)*0.06);
    }
    else {
        nssf = 360+720;
    }
    return nssf;
}

function calculateTax(taxableIncome){
    let tax = 0.01;
    if(taxableIncome<=24000){
        tax = taxableIncome*0.1;
    }
    else if(taxableIncome>24000 && taxableIncome<=32,333){
        tax = (24000*0.1)+((taxableIncome-24000)*0.25);
    }
    else{
        tax = (24000*0.1)+((8333)*0.25)+((taxableIncome-32333)*0.3);
    }
    return tax;
}

function calculateNHIF(pay){
    let deduction;
    if(pay<=5999){
        deduction = 150;
    }
    else if(pay>=6000 && pay<8000){
        deduction = 300;
    }
    else if(pay>=8000 && pay<=11999){
        deduction = 400;
    }
    else if(pay >= 12000 && pay <= 14999){
        deduction = 500;
    }
    else if(pay >= 15000 && pay <= 19999){
        deduction = 600;
    }
    else if(pay >= 20000 && pay <= 24999){
        deduction = 750;
    }
    else if(pay >=25000 && pay <=29999){
        deduction = 850;
    }
    else if(pay >=30000 && pay <= 34999){
        deduction = 900;
    }
    else if(pay >= 35000 && pay <= 39999){
        deduction = 950;
    }
    else if(pay >= 40000 && pay <= 44999){
        deduction = 1000;
    }
    else if(pay >= 45000 && pay <= 49999){
        deduction = 1100;
    }
    else if(pay >= 50000 && pay <= 59999){
        deduction = 1200;
    }
    else if(pay >= 60000 && pay <= 69999){
        deduction = 1300;
    }
    else if(pay >= 70000 && pay <= 79999){
        deduction = 1400;
    }
    else if(pay >= 80000 && pay <= 89999){
        deduction = 1500;
    }
    else if(pay >= 90000 && pay <= 99999){
        deduction = 1600;
    }
    else{
        deduction = 1700;
    }

    return deduction;
}
netSalaryCalculator();






