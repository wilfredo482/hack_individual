/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for(let i=0; i<arr.length;i++){
    let letra1=(arr[i].charAt(0).toUpperCase());
    let letra2=arr[i].slice(1);
    result.push(letra1+letra2);
}
console.log(result);


//export result
module.exports = result;