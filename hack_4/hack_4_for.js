/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

for(let numero=1; numero<=7;){
    result.push(numero);
    numero+=2;
}

console.log(result);

//export result
module.exports = result;