import promptSync from 'prompt-sync';
const prompt = promptSync();


var k = prompt(" Enter a number :");
var l= prompt(" Enter a number :");
var m= prompt(" Enter a number :");

if( k>l && k>m){
    console.log( " k is greater" );
}
else if(l>k && l>m){
     console.log( " l is greater" );

}
else{
    console.log( " m is greater")
}










var year = prompt(" Enter year :");

if( year%4==0){
    console.log( " it is leap year" );
}
else {
     console.log( " It is not a leap year" );

}








var a1 = prompt(" Enter a number :");

if( "A"<=a1 && a1<="Z"){
    console.log( "It is upper case" );
}
else if("a"<=a1  && a1<="z"){
     console.log( " It is lower case" );

}
else{
    console.log( "It is special character")
}












var marks = prompt(" Enter marks :");

if(marks<36){
    console.log( " Grade= f" );
}
else if( marks>36 && marks<75 ){
     console.log( " grade = B" );

}
else{
    console.log( " Grade = A")
}
















var num = prompt(" Enter number :");

if(num == 1){
    console.log( " Monday" );
}
else if( num==2 ){
     console.log( " tuesday" );

}
else  if (num==3){
    console.log( " Wednesday ")
}

else  if (num==4){
    console.log( " thursday ")
}

else  if (num==5){
    console.log( " friday ")
}

else  if (num==6){
    console.log( " saturday")
}
else  if (num==7){
    console.log( " sunday")
}










var num1 = prompt(" Enter number :");

if(num1%5 == 0 && num1%11==0){
    console.log( " Number is divisibble by both 5 and 11" );
}
else{
     console.log( "Number is  not divisible by both 5 and 11" );

}












var name= prompt(" enter your name");
var age =prompt(" enter your age ");
 if(age>=18){
    console.log(" elligible for drivinng licennse")
 }
 else(" Not elligible for diriving license ")













var n1 = prompt(" Enter a number")
var n2 = prompt(" Enter a number")
if(n1==n2){
    console.log(" Both number are equal")
}
else if(n1>n2){
    console.log(" N1 IS GREATER")
}
else if(n2>n1){
    console.log(" N2 IS GREATER")
}









var b1= prompt(" Enter a number:")
if(b1%2==0 && b1>0){
    console.log(" number is even and positive")
}

 else if(b1%2==0 && b1>0){
    console.log(" number is even and positive")
}

 else if(b1%2!=0 && b1>0){
    console.log(" number is odd and positive")
}
 else if(b1%2!=0 && b1<0){
    console.log(" number is odd and negative")
}