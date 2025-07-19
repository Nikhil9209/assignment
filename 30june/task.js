import promptSync from 'prompt-sync';
const prompt = promptSync();

var a= prompt(" Enter a number :");
console.log(`${a}`);
if(a%2==0){
    console.log( "Given number is even");
}
else{
    console.log("given number is odd");
}
   




var b= prompt(" Enter a number :");
console.log(`${b}`);
if(b>0){
    console.log( "Given number is positive");
}
else if( b==0){
    console.log("given number is zero");
    
}
else {
    console.log("given number is negative");
}






var c= prompt(" Enter a number :");
console.log(`${c}`);
var d= prompt(" Enter a number :");
console.log(`${d}`);
if(c>d){
    console.log(` ${c} is greater than ${d}`)
}
else{
    console.log(` ${d} is greater than ${c}`)
}







var e= prompt(" Enter a number :");
console.log(`${e}`);

if(e%3==0){
    console.log(` ${e} is divisible by 3`)
}
else{
    console.log(` ${e} is not divisble by 3`)
}








var f= prompt(" Enter a number :");
console.log(`${fa}`);

if(f%7==0){
    console.log(` ${f} is multiple of  7`)
}
else{
    console.log(` ${f} is not multiple of 7`)
}





var g= prompt(" Enter a character :");
console.log(`${g}`);

if( g=='a'|| g=='e'|| g=='i'|| g=='o'|| g=='u'){
    console.log(` ${g} is vowel`);
}
else{
    console.log(` ${g} is consonant`)
}





 var h= prompt(" Enter a number :");
console.log(`${h}`);

if( h>10 && h<50){
    console.log( `${h} is between 10 and 50` );
}
else{
    console.log( `${h} is  not between 10 and 50`)
}








var i= prompt(" Enter a number :");
console.log(`${i}`);

if( i>99 && i<1000){
    console.log( `${i} is between 99 and 1000` );
}
else{
    console.log( `${i} is  not between 99 and 1000`)
}








var j= prompt(" Enter a number :");
console.log(`${j}`);

if( j>18){
    console.log( ` person is elligible for voting` );
}
else{
    console.log( `person is not elligible for voting`)
}







var temp= prompt(" Enter a number :");

if( temp>30){
    console.log( ` temp is hot` );
}
else if(temp<15){
     console.log( ` temp is cold` );

}
else{
    console.log( `it is moderate`)
}






























