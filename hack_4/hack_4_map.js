/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let numeros=[1,3,5,7]


let result=numeros.map(function añadir(numero){
        return numero;
    }
)
console.log(result);


//export result
module.exports = result;
