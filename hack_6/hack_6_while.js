/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];
let i=0;

while(i<=str.length){
    let variable=(str.split('',i+1))
    i++;
    result.push(variable);
}

console.log(result);

//export result
module.exports = result;