# phase-1 code-challenge

**introduction**
This is an individual labwork where I am supposed to complete a set of three given challenges:

**Installation and project setup**

This project requires a computer installed with node or other compilers to run the code; a text editor, preferably VS code to write your code and also a browser for you to test the code.  


**CHALLENGE NO. 1:Student Grade Generator (Toy Problem)**

Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

**Instructions**

The first thing to do is to first declare variables a and a prompt message to engage the user
The marks entered

You can use the if conditional statement to output the first fulfilled condition.

In the next phase use else if conditional statements in the code to fulfil the conditions and display a grade


//**CHALLENGE NO. 2 :Speed Detector (Toy Problem)**


Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”.
Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
Instructions

Declare the function checkSpeed and its parameters-->function checkSpeed(vSpeed)
Declare variables to be used -->const sLimit; const sRate;

write the code where the conditonal output is Okay, this means the vehicle is traveling within speed limit.

write condition set for when a vehicle overspeeds and the demerits of points including suspended license, where the demerit points are more than 12.

Finally write prompt where the user is asked to input the vehicle speed
Conclusion 

**Challenge 3: Net Salary Calculator (Toy Problem)**

**Instructions**

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
            
    Steps

install apt prompt-sync for this project to run

First write the code that prompts the user for input. the input includes the different data required (const promptBasicSalary = require(`prompt-sync`)
Next step is to write function netSalaryCalculator (), what this function does is dispaly all the calculated stuff and then display them in tabular data-structure
At the end of that function call it after the deductions to display your net salary
Next you write the function.(function calculateNSSF(basicSalary)). this function will calculate your nssf deductions based on your basic pay.later call the function to display its calculations.
The next function to write is (function calculateTax(taxableIncome)), what this does is calculating for taxable income, it then return a value based on the data inputed.

The next function to write is the function calculateNHIF(pay). This will calculate the NHIF deductions on your pay. this will return your NHIF contibution.
At the end you call the main function which is netSalaryCalculator() to finish the project, this has been our goal all along. The figure returned is the net salary.
        Conclusion
 After all thatis done its our time to push our work to the repository.Use git add . then git commit -m"comment*" ,then git push  ,remember those are to be written on different lines.       






                                                                **Author**




    
    GitHub: https://github.com/Ngechuk
