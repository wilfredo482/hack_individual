/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let numero=1;

while(numero<=7){
    result.push(numero);
    numero+=2;
}

console.log(result);

//export result
module.exports = result;