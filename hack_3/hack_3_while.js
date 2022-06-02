/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let numero=5;

while(numero>=1){
    result.push(numero);
    numero--;
}

console.log(result);


//export result
module.exports = result;