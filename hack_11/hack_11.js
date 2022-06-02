/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];


result.push("h@ck");
for(let i=0; i<numberArray.length; i++){
    if(numberArray[i]==1){
        numberArray[i]="one";    
    }if(numberArray[i]==3){
        numberArray[i]="three";
    }if(numberArray[i]==5){
        numberArray[i]="five";
    }
    result.push(numberArray[i])
}
result.push("h@ck");

for(let i=0; i<stringArray.length; i++){
    if(stringArray[i]=="foo"){
        stringArray[i]="f00";    
    }if(stringArray[i]=="bar"){
        stringArray[i]="Bar";
    }if(stringArray[i]=="baz"){
        stringArray[i]="b@z";
    }if(stringArray[i]=="qux"){
        stringArray[i]="quX";
    }if(stringArray[i]=="echo"){
        stringArray[i]="3ch0"
    }
    result.push(stringArray[i])
}
result.push("h@ck");
console.log(result);

//export result
module.exports = result;