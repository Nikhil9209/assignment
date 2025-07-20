const prompt = require('prompt-sync')()
//q1

function removeDuplicates(jn) {
    for (let i = 0; i < jn.length; i++) {
        for (let j = i + 1; j < jn.length; j++) {  // Fix: j = i + 1
            if (jn[i] === jn[j]) {
                jn.splice(j, 1);
                j--; // step back to check the new element at index j
            }
        }
    }
    console.log(jn);
}

let arr = [];
let j = parseInt(prompt("Enter how many characters: "));
for (let i = 0; i < j; i++) {
    arr[i] = prompt(`Enter character ${i + 1}:`);
}

removeDuplicates(arr);


//q2

function flattenArray(a){
    let c = [];
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a[i].length; j++){
            c.push(a[i][j]);
        }
    }
    console.log("Flattened array:", c);
}

let ar = [];
let k = parseInt(prompt("Enter how many characters: "));
for (let i = 0; i < k; i++){
    let y = [];
    let l = parseInt(prompt(`Enter number of characters for array ${i + 1}:`));
    for(let m = 0; m < l; m++){
        let b = prompt(`Enter character ${m + 1}: `);
        y.push(b);
    }
    ar.push(y);
}

console.log("2D array:", ar);
flattenArray(ar);


//q3
function findMax(nik){

    let o= nik.length-1;
    let max = nik[0];
    for (let i = 0; i <=o; i++) {
        if(max<nik[i]){
            max=nik[i];
        }
 
}
    console.log(max)
}
function findMin(nik){

    let x= nik.length-1;
    let min = nik[0];
    for (let i = 0; i <=x; i++) {
        if(min>nik[i]){
            min=nik[i];
        }
 
}
    console.log(min)
}



let grp=[];
let pe=parseInt(prompt("Enter how many characters: "));
for (let i = 0; i <pe ; i++) {
    grp[i] = parseInt(prompt(`Enter character ${i + 1}:`));
}
findMax(grp);
findMin(grp);



//q4


 function addEven(varr){
        
    let sum=0;
    for(let i =0; i<varr.length;i++){

        
        if(varr[i]%2==0){
            sum+=varr[i]

        }
    }
    console.log(sum)
}


let gr=[];
let per=parseInt(prompt("Enter how many characters: "));
for (let i = 0; i <per ; i++) {
    gr[i] = parseInt(prompt(`Enter character ${i + 1}:`));
}


addEven(gr)




//q5

let y = ["nik", NaN, 1, true, [1, 2]];
 let ob = {};
for (let i = 0; i < y.length; i++) {
   

    if (typeof y[i] === "string") {
        ob.string = y[i];
    } else if (Array.isArray(y[i])) {
        ob.array = y[i];
    } else if (typeof y[i] === "boolean") {
        ob.boolean = y[i];
    } else if (typeof y[i] === "number" && isNaN(y[i])) {
        ob.nan = y[i];
    } else {
        ob.other = y[i];
    }

    
}
console.log(ob);