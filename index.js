/* Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/
   
   
   let  msg = "input student marks:"; //user to input marks
   let a = prompt(msg);
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
console.log(checkSpeed(95));// calls the function to display speed and response








