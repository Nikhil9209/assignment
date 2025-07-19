//q1
var num=1
while(num<=20){
   
    if(num%4==0){
        num++;
        continue;
    }
    console.log(num)
    num++
}

//q2

let n= 1;

while (n <= 10) {
  if (n === 7) {
    break;
  }

  console.log(n);
  n++;
}

//q3








let a= 1;
let count =0;

while (a <= 100) {
  if (a%3==0 && a%5==0) {

   count++
  }

  
  a++;}
  console.log(count)

//q4

  let i=1

  while(i<=3){
    let  j =1;
    while(j<=3){
        console.log(i,j)
        j++
    }
    i++
  }
//q5
   let m = 1;

while (m <= 4) {
  let n = 1;
  while (n <= 4) {
    if (m + n == 5) {
      console.log(m, n);
    }
    n++;
  }
  m++; 
}
