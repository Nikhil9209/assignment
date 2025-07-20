const prompt = require('prompt-sync')();
//q1

const input = prompt("Enter a string: ");
console.log("You entered:", input);

function revStr(a) {
    let len = a.length - 1;
    let reversed = "";
    while (len >= 0) {
        reversed += a[len];
        len--;
    }
    console.log(`Your reversed string is: ${reversed}`);
}

revStr(input);


//q2


function revString(a) {
    let le = a.length - 1;
    let reversed = "";
    while (le >= 0) {
        reversed += a[le];
        le--;
    }
    console.log(`Your reversed string is: ${reversed}`);
    return reversed;
}

let pallin= prompt("To check pallindrome:");
let b =  revString(pallin)

if(b==pallin){
    console.log("It is pallindrome");
}
else{
    console.log("It is not pallindrome")
}



// q3

function countVowel(stb){
    let n=  stb.length;
    let count=0;
    for(let i =0; i<n; i++){
        if(stb[i]=='a' || stb[i]=='e'|| stb[i]=='i' || stb[i] =='o'|| stb[i]=='u'){
            count++;
        

        }
       }
    console.log(count)
    return count;
}



let sent=prompt("Enter a string to check vowels:")
countVowel(sent);    */



//q4
function toCapitalize(j) {
    let newstring = "";
    for (let i = 0; i < j.length; i++) {
        if (i == 0 || j[i - 1] == " ") {
            newstring += j[i].toUpperCase(); ll
        } else {
            newstring += j[i];
        }
    }
    console.log(newstring);
}

let b = prompt("Enter a String: ");
toCapitalize(b);


//q5




function feqCheck(m) {
    let obj = {};
    for (let i = 0; i < m.length; i++) {
        let c = 0;
        for (let j = 0; j < m.length; j++) {
            if (m[i] === m[j]) {
                c++;
            }
        }
        obj[m[i]] = c;
    }
    console.log(obj);
}

let jk = prompt("Enter a string to check frequency of characters:");
feqCheck(jk);
