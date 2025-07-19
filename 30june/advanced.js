import promptSync from 'prompt-sync';
const prompt = promptSync();




var sub1= parseInt( prompt("Enter your marks"))
var sub2= parseInt (prompt("Enter your marks"))
var sub3= parseInt (prompt("Enter your marks"))
var sub4= parseInt (prompt("Enter your marks"))
var sub5= parseInt (prompt("Enter your marks"))
var average= (sub1+ sub2+ sub3+ sub4+ sub5)/5
console.log(average)
 var av =(( sub1+ sub2+ sub3+ sub4+ sub5)/500)*100
if(av>90){
    console.log("garde= A")
}

else if(av>=75){

         console.log("garde= B")
}

else if(av>=60){

         console.log("garde= C")
}
else if(av>=40 ){

         console.log("garde= D")
}
else if( av<=40){

         console.log("garde= F")
}














var avi = parseInt(prompt("Enter a number"));

if (avi % 3 === 0 && avi % 5 === 0) {
    console.log("It is divisible by both 3 and 5.");
} else if (avi % 3 === 0 || avi % 5 === 0) {
    console.log("It is divisible by either 3 or 5.");
} else {
    console.log("It is not divisible by either 3 or 5.");
}







var am = parseInt(prompt("Enter a number"));
var reverse =0;
while(am!=0){
     
var digit = am %10;
reverse= digit + reverse *10;
am=  Math.floor(am/10);

}
console.log(reverse);






var ab= parseInt(prompt("Enter a number"));
var dig =0;
while(ab!=0)
{
var rem = ab%10;
dig= rem+dig;
ab = Math.floor (ab/10)

}
console.log(dig)
if( dig%2==0){
    console.log("sum  of digit is even")
}
else{
    console.log("sum of digit is odd")
}









var work =parseInt(prompt("Enter no. of hour worked"));
var ov= work-40;
var overpay= ov*12;
if( work>40){
    
console.log(overpay)
}
else{
    console.log("no overtime pay")
}







var month = parseInt(prompt("Enter month number (1-12):"));

if (month === 1) {
    console.log("January has 31 days.");
} else if (month === 2) {
    console.log("February has 28 or 29 days.");
} else if (month === 3) {
    console.log("March has 31 days.");
} else if (month === 4) {
    console.log("April has 30 days.");
} else if (month === 5) {
    console.log("May has 31 days.");
} else if (month === 6) {
    console.log("June has 30 days.");
} else if (month === 7) {
    console.log("July has 31 days.");
} else if (month === 8) {
    console.log("August has 31 days.");
} else if (month === 9) {
    console.log("September has 30 days.");
} else if (month === 10) {
    console.log("October has 31 days.");
} else if (month === 11) {
    console.log("November has 30 days.");
} else if (month === 12) {
    console.log("December has 31 days.");
} else {
    console.log("Invalid month number. Please enter a number between 1 and 12.");
}




var basic = parseFloat(prompt("Enter your basic salary:"));
var hra, da, netSalary;

if (basic < 10000) {
    hra = 0.20 * basic;
    da = 0.50 * basic;
} else {
    hra = 0.30 * basic;
    da = 0.80 * basic;
}

netSalary = basic + hra + da;
console.log(netSalary)


var a = parseFloat(prompt("Enter side a:"));
var b = parseFloat(prompt("Enter side b:"));
var c = parseFloat(prompt("Enter side c:"));


if (a + b > c && a + c > b && b + c > a) {
    console.log("It is a valid triangle.");

    if (a === b && b === c) {
        console.log("It is an Equilateral triangle.");
    } else if (a === b || b === c || a === c) {
        console.log("It is an Isosceles triangle.");
    } else {
        console.log("It is a Scalene triangle.");
    }

} else {
    console.log("Invalid triangle. The sum of any two sides must be greater than the third side.");
}



var storedUsername = "admin";
var storedPassword = "pass123";


var inputUsername = prompt("Enter username:");
var inputPassword = prompt("Enter password:");


if (inputUsername === storedUsername && inputPassword === storedPassword) {
    console.log("Login successful ");
} else {
    console.log("Login failed ");
    console.log("Invalid username or password.");
}
