import promptSync from "prompt-sync";
const prompt = promptSync();


//q1
let count = 0;
let a = Number(prompt("Enter a number: "));

if (a < 2) {
    console.log("Given number is not a prime number");
} else {
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            count++;
            break; 
        }
    }

    if (count === 0) {
        console.log("Given number is a prime number");
    } else {
        console.log("Given number is not a prime number");
    }
}

//q2

 var n= parseInt(prompt("enter a number"))
 var fact=1;

for(var i =1 ;i<=n; i++){
    fact= fact *i;
}
console.log(fact)


//q3
var num = parseInt(prompt("Enter a number: "));
var reverse = 0;

while (num != 0) {
    var rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
}

console.log("Reversed number is: " + reverse);

//q4
var nm = parseInt(prompt("Enter a number: "));
var counti= 0;

while (nm != 0) {
    var r = nm % 10;
    if(r!=0){
        counti++

    }
    nm=Math.floor(nm/10);

}

console.log(counti)



//q5

var m = parseInt(prompt("Enter a number: "));
var n =m;
var rev = 0;

while (m != 0) {
    var remi = m % 10;
    rev = rev * 10 + remi;
    m = Math.floor(m / 10);
}
if (n==rev){
    console.log("given number is pallindrome")
}
else{
    console.log("given number is  not pallindrome")
}