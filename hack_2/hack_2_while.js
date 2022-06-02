/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
let numero=1;

while(numero<=5){
    result.push(numero);
    numero++;
}

console.log(result);

//export result
module.exports = result;